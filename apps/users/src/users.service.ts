import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ClientProxy } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@shared/contracts/users/create-user.dto';
import { NOTIFICATION_CLIENT } from '@shared/contracts';
import { LoginUserDto, UpdateUserDto, UpdateUserPasswordDto, UserDto } from '@shared/contracts/users';
import { $Enums, Prisma,} from '../generated/prisma';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UserStatus, UserType } from '@shared/enums/users/user.enums';

@Injectable()
export class UsersService {
    constructor(
        @Inject(NOTIFICATION_CLIENT) private readonly notificationClient: ClientProxy,
        private readonly jwtService: JwtService,
        private readonly databaseService: DatabaseService
    ) { }

    async create(createUserDto: CreateUserDto): Promise<UserDto> {
        
        const hashedPassword = await bcrypt.hash(createUserDto.password ? createUserDto.password : "Password", 10);
        const restrictUser = createUserDto.type !== $Enums.UserType.PATIENT

        // restrict all account on creation pending approval except patient accounts
        const userStatus = restrictUser ? $Enums.UserStatus.NOTAPPROVED : $Enums.UserStatus.ACTIVE

        const newUserInput: Prisma.UserCreateInput = {
            firstName: createUserDto.firstName,
            middleName: createUserDto.middleName,
            lastName: createUserDto.lastName,
            email: createUserDto.email,
            password: hashedPassword,
            phone: createUserDto.phone,
            type: createUserDto.type as $Enums.UserType,
            status: userStatus as $Enums.UserStatus
        }

        try {
            // Start a transaction - for an all or fail process of creating a user
            const account = await this.databaseService.$transaction(async (prisma) => {

                const existingUser = await this.databaseService.user.findFirst({
                    where: {
                      OR: [
                        // Spread the mapped array into the OR array
                        ...createUserDto.phone.map((phoneNumber) => ({
                          phone: {
                            has: phoneNumber
                          },
                          lastName: newUserInput.lastName
                        })),
                        {
                          email: newUserInput.email,
                          lastName: newUserInput.lastName
                        }
                      ]
                    }
                  });
                  
                
                if (existingUser) {
                    throw new ConflictException('This user phone or email and last name exist in our system. Kidly find account', {
                        cause: new Error(),
                        description: 'This user phone or email and last name exist in our system. Kidly find account'
                    });

                }

                

                // Create the related entity based on user type
                switch (createUserDto.type) {
                    case $Enums.UserType.ADMIN:
                        // Create the user
                        const admin = await prisma.user.create({ data: newUserInput });
                        return admin;

                    case $Enums.UserType.SUPERADMIN:
                        // Check if any superadmins already exist
                        const existingSuperAdminCount = await prisma.user.count({
                            where: { type: $Enums.UserType.SUPERADMIN },
                        });
                        
                        // If it's the first superadmin, auto-approve
                        if (existingSuperAdminCount === 0) {
                            newUserInput.status = $Enums.UserStatus.ACTIVE; // or whatever approved status you use
                        }
                        
                        // Create the user
                        const superAdmin = await prisma.user.create({ data: newUserInput });
                        
                        return superAdmin;
                          
                    case $Enums.UserType.PATIENT:
                        const hospital = await this.databaseService.hospital.findUnique({
                            where: {
                              id: createUserDto.hospitalId
                            }
                        });

                        if (!hospital) {
                            throw new NotFoundException('This hospital does not exist in our system', {
                                cause: new Error(),
                                description: 'This hospital does not exist in our system'
                            });
                        }
                        

                        const regFee = hospital.registrationFee
                        const nfcCardFee = hospital.nfcCardFee
                        const totalRegFee = regFee.add(nfcCardFee)
                        const userBalance =  (totalRegFee as unknown as number) - createUserDto.amount!
                        
                        // update user account with balance from transaction whilst using 1 database call
                        newUserInput.balance = userBalance as unknown as Prisma.Decimal
                        
                        // Create the user
                        let userAccount = await prisma.user.create({ data: newUserInput });
                

                        const newPatientInput: Prisma.PatientCreateInput = {
                            user: { connect: { id: userAccount.id } },
                            nfcId: uuidv4(),  
                            hospital: {connect: {id: hospital.id }},
                            billingtype: createUserDto.billingType!, 
                        }

                        // credit and debit user account with registration fee
                        await prisma.transaction.createMany({
                            data: [
                              {
                                userId: userAccount.id,
                                amount: createUserDto.amount!,
                                type: $Enums.TransactionType.CREDIT,
                                status: $Enums.TransactionStatus.COMPLETED,
                                description: 'Patient Registration deposit',
                                reference: createUserDto.paymentReference,
                                modeOfPayment: createUserDto.modeOfPayment!,
                              },
                              {
                                userId: userAccount.id,
                                amount: totalRegFee,
                                type: $Enums.TransactionType.DEBIT,
                                status: $Enums.TransactionStatus.COMPLETED,
                                description: 'Patient file opening, card and registration fee',
                                reference: createUserDto.paymentReference,
                                modeOfPayment: $Enums.TransactionMode.SYSTEM_DEBIT!,
                              },
                            ],
                        });
                          
                        await prisma.patient.create({data: newPatientInput });

                        return userAccount;
                    
                    case $Enums.UserType.NHIS_WORKER:
                        const insuranceScheme = await this.databaseService.insuranceScheme.findUnique({
                            where: {
                              id: createUserDto.insuranceSchemeId
                            }
                        });

                        if (!insuranceScheme) {
                            throw new NotFoundException('This insurance Scheme does not exist in our system', {
                                cause: new Error(),
                                description: 'This insurance Scheme does not exist in our system'
                            });
                        }

                        // Create the user
                        let nhisAccount = await prisma.user.create({ data: newUserInput });
                

                        const newNHISWorkerInput: Prisma.NHISWorkerCreateInput = {
                            user: { connect: { id: nhisAccount.id } },
                            insuranceScheme: {connect: {id: insuranceScheme.id }}, 
                        }
                          
                        await prisma.nHISWorker.create({data: newNHISWorkerInput });
                        return nhisAccount;
                    
                    case $Enums.UserType.PUBLIC_HEALTH_WORKER:
                        // Create the user
                        let publichealthAccount = await prisma.user.create({ data: newUserInput });
                

                        const newPublicHealthWorkerInput: Prisma.PublicHealthWorkerCreateInput = {
                            user: { connect: { id: publichealthAccount.id } },
                        }
                            
                        await prisma.publicHealthWorker.create({data: newPublicHealthWorkerInput });
                    
                        return publichealthAccount;
                    
                    case $Enums.UserType.HOSPITAL_STAFF:
                        const staffhospital = await this.databaseService.hospital.findUnique({
                            where: {
                                id: createUserDto.hospitalId
                            }
                        });

                        if (!staffhospital) {
                            throw new NotFoundException('This hospital does not exist in our system', {
                                cause: new Error(),
                                description: 'This hospital does not exist in our system'
                            });
                        }
                        
                        // Create the user
                        let staffAccount = await prisma.user.create({ data: newUserInput });
                

                        const newHospitalStaffInput: Prisma.HospitalStaffCreateInput = {
                            user: { connect: { id: staffAccount.id } },
                            hospital: {connect: {id: staffhospital.id }},
                        }

                        
                        await prisma.hospitalStaff.create({data: newHospitalStaffInput });

                        return staffAccount;
                    
                
                    default:
                        // If accountType  is unknown, rollback the transaction
                        throw new Error('Invalid user type, are you creating a patient, or staff account');
                }

              
            }, {
                timeout: 10000 // 10 seconds in ms
            });

            //  emit a email verification - notification event
            // this.notificationClient.emit(NOTIFICATIONPATTERN.SENDNOTIFICATION, {
            //     type: 'EMAIL',
            //     recipientId: account.user.id,
            //     data: {
            //         subject: 'Email Verification Notice!',
            //         message: `Thank you for signing up! here is your verification code ${account.hexCode}`,
            //         recipientEmail: account.user.email,
            //     },
            // });

            const userAccount: UserDto = {
                ...account,
                type: account.type as unknown as UserType,
                status: account.status as unknown as UserStatus,
                balance: account.balance as unknown as number
            };
            return userAccount;

        } catch (error) {
            console.log(error)
            throw new ConflictException('sever error could not create user', {
                cause: new Error(),
                description: 'User account creation failed, please try again'
            });
        }



    }

    async login(loginUserDto: LoginUserDto) {

        const { email, password } = loginUserDto;

        const user = await this.databaseService.user.findUnique({
            where: {
                email: email,
                deletedAt: null
            },

        });

        if (!user) {
            throw new NotFoundException('we could not find a user with this email', {
                cause: new Error(),
                description: "we could not find a user with this email"
            });
        }


        if (user.status === $Enums.UserStatus.RESTRICTED || user.status === $Enums.UserStatus.NOTAPPROVED) {
            throw new UnauthorizedException('Unauthorized error, user account is not active. Contact support');
        }

        const lastLoginTime = user.lastLogin ? new Date(user.lastLogin) : null;
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000); // 10 minutes ago

        if (user.loginAttempts >= 4 && lastLoginTime && lastLoginTime > tenMinutesAgo) {
            throw new UnauthorizedException('Too many failed login attempts. Please wait 10 minutes before trying again.');
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {

            await this.databaseService.user.update({
                where: { email: email },
                data: {
                    loginAttempts: user.loginAttempts + 1,
                    lastLogin: new Date(),
                    status: user.loginAttempts + 1 > 7 ? $Enums.UserStatus.RESTRICTED : user.status
                }
            });

            if (user.loginAttempts + 1 > 7) {
                throw new UnauthorizedException('Authentication error',
                    {
                        cause: new Error(),
                        description: 'Your account has been disabled due to too many failed login attempts.'
                    }
                )
            }

            throw new UnauthorizedException('Authentication error, Incorrected password for this user',
                {
                    cause: new Error(),
                    description: "incorrect password"
                }
            )
        }

        const refreshToken = this.jwtService.sign({ sub: user.id, type: user.type}, {
            secret: process.env.JWT_REFRESH_TOKEN_SECRET,
            expiresIn: '7d',
        });

        // reset login attempts to 0 once successful login
        await this.databaseService.user.update({
            where: { email: email },
            data: {
                loginAttempts: 1,
                lastLogin: new Date(),
                refreshToken: refreshToken
            }
        });
        const { password: userpassword, refreshToken: userRefreshToken, ...rest } = user
        return {
            user: { ...rest },
            access_token: this.jwtService.sign({ sub: user.id, type: user.type}, {
                secret: process.env.JWT_ACCESS_TOKEN_SECRET,
                expiresIn: '59m',
            }),
            refresh_token: refreshToken,
        };

    }

    async findAll(limit: number, offset: number, status?: string): Promise<UserDto[]> {
        try {
            const whereClause: any = {};

            if (status) {
                whereClause.status = status;
            }

            const users = await this.databaseService.user.findMany({
                take: limit,
                skip: offset,
                where: whereClause,
            });

            return users.map(user => this.mapToUserDto(user));
        } catch (error) {
            throw new ConflictException(error);
        }

    }

    async findOne(id: string): Promise<UserDto> {

        const user = await this.databaseService.user.findUnique({
            where: {
                id: id
            },
            include: {
                staff: true,
                address: true,
                patient: true,
                nhisWorker: true,
                publicHealthWorker: true
            }
        });
        if (!user) {
            throw new NotFoundException('sever error could not find this user', {
                cause: new Error(),
                description: 'no user found'
            });
        }

        const userAccount: UserDto = {
            ...user,
            type: user.type as unknown as UserType,
            status: user.status as unknown as UserStatus,
            balance: user.balance as unknown as number
        };
        return userAccount;

    }

    // async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto> {

    //     try {
    //         const updateUserInput: Prisma.UserUpdateInput = {
    //             ...updateUserDto,
    //             type: updateUserDto.type as $Enums.UserType ?? undefined,
    //             status: updateUserDto.status ?? undefined,
    //         };

    //         const user = await this.databaseService.user.update({
    //             where: { id },
    //             data: { ...updateUserInput }
    //         });

    //         if (updateUserDto.bio || updateUserDto.companyName || updateUserDto.businessSlogan || updateUserDto.workingHours) {
    //             const { phoneNumber,
    //                 postalCode,
    //                 country,
    //                 state,
    //                 city,
    //                 street,
    //                 street2,
    //                 location,
    //                 status,
    //                 email,
    //                 firstName,
    //                 lastName,
    //                 password,
    //                 accountType,
    //                 workingHours,
    //                 ...rest
    //             } = updateUserDto

    //             const updateProfixerInput: Prisma.ProFixerUpdateInput = {
    //                 ...rest,
    //                 workingHours: updateUserDto.workingHours
    //                     ? updateUserDto.workingHours as Prisma.JsonValue
    //                     : undefined,
    //             };

    //             const profixer = await this.databaseService.proFixer.update({
    //                 where: { id: user.id },
    //                 data: { ...updateProfixerInput }
    //             })
    //         }
    //         const userAccount: UserDto = {
    //             ...user,
    //             type: user.type as unknown as UserType,
    //             status: user.status as unknown as UserStatus,
    //             balance: user.balance as unknown as number
    //         };
    //         return userAccount;

    //     } catch (error) {
    //         throw new ConflictException(error);
    //     }
    // }

    async remove(id: string, updaterId: string): Promise<UserDto> {

        const deletedUser = await this.databaseService.$transaction(async (prisma) => {
            const user = await prisma.user.update({
                where: { id },
                data: {
                    deletedAt: new Date(),
                    deletedBy: updaterId
                }
            });

            return user
        });

        const userAccount: UserDto = {
            ...deletedUser,
            type: deletedUser.type as unknown as UserType,
            status: deletedUser.status as unknown as UserStatus,
            balance: deletedUser.balance as unknown as number
        };
        return userAccount;

    }

    async permanentDelete(id: string): Promise<UserDto> {

        const deletedUser = await this.databaseService.$transaction(async (prisma) => {
            const user = await prisma.user.delete({
                where: { id },
            });

            return user
        });
        const userAccount: UserDto = {
            ...deletedUser,
            type: deletedUser.type as unknown as UserType,
            status: deletedUser.status as unknown as UserStatus,
            balance: deletedUser.balance as unknown as number
        };
        return userAccount;

    }

    // async verify(id: string, token: string) {

    //     const personalAccessToken = await this.databaseService.personalAccessToken.findUnique({
    //         where: {
    //             userId_type: { userId: id, type: 'VERIFYACCOUNT' }
    //         },
    //         select: { token: true, expiry: true, userId: true }
    //     });

    //     if (!personalAccessToken) {
    //         throw new NotFoundException('Token Error', {
    //             cause: new Error(),
    //             description: 'Token Error, Kindly Request a new token'
    //         });
    //     }

    //     const isMatch = await bcrypt.compare(token, personalAccessToken.token);

    //     if (!isMatch) {
    //         throw new NotFoundException('Invalid verification token', {
    //             cause: new Error(),
    //             description: 'Invalid token, verification token mismatch'
    //         });
    //     }

    //     // Check if the token has expired
    //     const now = new Date();
    //     if (personalAccessToken.expiry && new Date(personalAccessToken.expiry) < now) {
    //         throw new UnauthorizedException('Your verification token has expired', {
    //             cause: new Error(),
    //             description: 'Your verification token has expired'
    //         });
    //     }

    //     // Update user to set email as verified
    //     const user = await this.databaseService.user.update({
    //         where: { id: personalAccessToken.userId },
    //         data: { isEmailVerified: true } // or true if it's a boolean field
    //     });

    //     return user;

    // }

    // async resendVerificationToken(id: string) {
    //     const user = await this.databaseService.user.findUnique({
    //         where: {
    //             id: id
    //         }
    //     });

    //     if (!user) {
    //         console.log("user not found")
    //         throw new NotFoundException('This user does not exist in our system', {
    //             cause: new Error(),
    //             description: 'could not find a valid user'
    //         });
    //     }

    //     // create personal access token for user account verification
    //     const hexCode = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    //     const expiry = new Date();
    //     expiry.setHours(expiry.getHours() + 3);
    //     const hashedHexCode = await bcrypt.hash(hexCode, 10);
    //     const personalAccessTokenInput: Prisma.PersonalAccessTokenCreateInput = {
    //         user: { connect: { id: user.id } },
    //         token: hashedHexCode,
    //         type: 'VERIFYACCOUNT' as $Enums.TokenType,
    //         expiry: expiry,
    //     }

    //     const personalAccessToken = await this.databaseService.personalAccessToken.upsert({
    //         where: { userId_type: { userId: user.id, type: 'VERIFYACCOUNT' } },
    //         update: {
    //             token: personalAccessTokenInput.token,
    //             expiry: personalAccessTokenInput.expiry,
    //         },
    //         create: {
    //             user: { connect: { id: user.id } },
    //             token: personalAccessTokenInput.token,
    //             type: 'VERIFYACCOUNT' as $Enums.TokenType,
    //             expiry: personalAccessTokenInput.expiry,
    //         },
    //     });

    //     if (!personalAccessToken) {
    //         throw new InternalServerErrorException('Could not generate a verification code', {
    //             cause: new Error(),
    //             description: 'server error, could not generate verification code'
    //         });

    //         // should log error to logger later on when logger is available
    //     }

    //     //  emit a email verification - notification event
    //     this.notificationClient.emit(NOTIFICATIONPATTERN.SENDNOTIFICATION, {
    //         type: 'EMAIL',
    //         recipientId: user.id,
    //         data: {
    //             subject: 'Email Verification Notice!',
    //             message: `Thank you for signing up! here is your verification code ${personalAccessToken.token}`,
    //             recipientEmail: user.email,
    //         },
    //     });
    //     return user
    // }

    // async forgotPassword(email: string): Promise<string> {


    //     try {

    //         // Start a transaction - for an all or fail process of creating a user
    //         const account = await this.databaseService.$transaction(async (prisma) => {
    //             const user = await this.databaseService.user.findUnique({
    //                 where: {
    //                     email
    //                 }
    //             });

    //             if (!user) {
    //                 throw new NotFoundException('We could not find an account associated with this email', {
    //                     cause: new Error(),
    //                     description: 'No existing user'
    //                 });

    //             }

    //             // create personal access token for user account verification
    //             const hexCode = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    //             const expiry = new Date();
    //             expiry.setHours(expiry.getHours() + 3);
    //             const hashedHexCode = await bcrypt.hash(hexCode, 10);
    //             const personalAccessToken = await prisma.personalAccessToken.upsert({
    //                 where: {
    //                     userId_type: {
    //                         userId: user.id,
    //                         type: 'PASSWORDRESET' as $Enums.TokenType
    //                     }
    //                 },
    //                 update: {
    //                     token: hashedHexCode,
    //                     expiry: expiry
    //                 },
    //                 create: {
    //                     user: { connect: { id: user.id } },
    //                     token: hashedHexCode,
    //                     type: 'PASSWORDRESET' as $Enums.TokenType,
    //                     expiry: expiry
    //                 }
    //             });

    //             return { user, personalAccessToken }; // Return created user
    //         });

    //         //  emit a email verification - notification event
    //         this.notificationClient.emit(NOTIFICATIONPATTERN.SENDNOTIFICATION, {
    //             type: 'EMAIL',
    //             recipientId: account.user.id,
    //             data: {
    //                 subject: 'Request to reset your password',
    //                 message: `You recently requested to change your password. Token ${account.personalAccessToken.token}`,
    //                 recipientEmail: account.user.email,
    //             },
    //         });

    //         return "We sent you an email containing details to reset your password";

    //     } catch (error) {
    //         console.log(error)
    //         throw new Error(error);
    //     }



    // }

    // private async verifyPasswordToken(token: string, tokenId: string): Promise<{ isMatch: boolean, userId: string }> {
    //     try {

    //         const account = await this.databaseService.$transaction(async (prisma) => {

    //             const personalAccessToken = await prisma.personalAccessToken.findUnique({
    //                 where: {
    //                     id: tokenId
    //                 },
    //                 select: { userId: true, token: true }
    //             });

    //             const isMatch = await bcrypt.compare(token, personalAccessToken.token);

    //             return { isMatch, userId: personalAccessToken.userId }; // Return created user
    //         });

    //         return account;

    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // }

    // async changePassword(updateUserPasswordDto: UpdateUserPasswordDto): Promise<UserDto> {
    //     try {

    //         if (!updateUserPasswordDto.oldPassword && !updateUserPasswordDto.token) {
    //             throw new UnauthorizedException('unauthorized request, no token or previous password provided', {
    //                 cause: new Error(),
    //                 description: 'unauthorized'
    //             });
    //         }
    //         let UserId: string
    //         if (updateUserPasswordDto.token) {
    //             const verifyToken = await this.verifyPasswordToken(updateUserPasswordDto.id, updateUserPasswordDto.token)
    //             if (!verifyToken.isMatch) throw new UnauthorizedException('Unauthorized request! Change password token mismatch');
    //             UserId = verifyToken.userId
    //         } else {

    //             const userPasword = await this.databaseService.user.findUnique({
    //                 where: { id: updateUserPasswordDto.userId },
    //                 select: { password: true, id: true }
    //             });

    //             const isMatch = await bcrypt.compare(updateUserPasswordDto.oldPassword, userPasword.password);
    //             if (!isMatch) throw new UnauthorizedException('Incorrect old password, could not update password');
    //             UserId = updateUserPasswordDto.userId
    //         }

    //         const User = await this.databaseService.$transaction(async (prisma) => {
    //             const userPasword = await prisma.user.findUnique({
    //                 where: { id: UserId },
    //                 select: { password: true, id: true }
    //             });

    //             const passwordHistoryInput: Prisma.PasswordHistoryCreateInput = {
    //                 user: { connect: { id: userPasword.id } },
    //                 password: userPasword.password
    //             }

    //             const passwordHistory = await prisma.passwordHistory.create({ data: passwordHistoryInput })
    //             const hashedPassword = await bcrypt.hash(updateUserPasswordDto.password, 10);
    //             const user = await prisma.user.update({
    //                 where: { id: userPasword.id },
    //                 data: {
    //                     password: hashedPassword,

    //                 }
    //             });

    //             return user
    //         });
    //         const userAccount: UserDto = {
    //             ...User,
    //             accountType: User.accountType as unknown as AccountType,
    //             status: User.status as unknown as UserStatus,
    //         };
    //         return userAccount;
    //     } catch (error) {
    //         throw new ConflictException(error);
    //     }
    // }

    /**
     * 
     * Maps a raw event center from the database to EventCenterDto.
     * 
     */
    private mapToUserDto(user: any): UserDto {
        return {
            ...user,
            type: user.type as unknown as UserType,
            status: user.status as unknown as UserStatus,
            balance: user.balance as unknown as number
        };
    }
}

