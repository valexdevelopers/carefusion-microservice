import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, IsEmail, IsUUID, IsDate, IsEnum, IsNotEmpty, IsStrongPassword, MinLength, ValidateIf, Min, IsDecimal } from 'class-validator';
import { Type } from 'class-transformer';
import { BillingType, PaymentPlan, PermissionAction, TransactionMode, UserStatus, UserType } from '@shared/enums/users/user.enums';



export class CreateHospitalDto {

  @ApiProperty({
    description: 'Name of the hospital',
    example: 'St. Mary\'s Hospital',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Address of the hospital',
    example: '123 Main Street, City, Country',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    description: "Hospital logo (file)",
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  logo: string;

  @ApiProperty({
    description: 'Hospital phone numbers',
    example: ['+1234567890', '+0987654321'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  phone: string[];

  @ApiProperty({
    description: 'Email of the hospital contact',
    example: 'contact@stmaryshospital.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'City where the hospital is located',
    example: 'New York',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'State where the hospital is located',
    example: 'NY',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'Country where the hospital is located',
    example: 'USA',
  })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({
    description: 'Zip code for the hospital location',
    example: '10001',
  })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty({
    description: 'Website URL of the hospital',
    example: 'http://www.stmaryshospital.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiProperty({
    description: 'Slogan of the hospital',
    example: 'Your Health, Our Priority',
    required: false,
  })
  @IsOptional()
  @IsString()
  slogan?: string;

  @ApiProperty({
    description: 'pobox of the hospital',
    example: 'P.C.BOX 10234',
    required: false,
  })
  @IsOptional()
  @IsString()
  pobox?: string;

  @ApiProperty({
    description: 'nfcCardFee of the hospital',
    example: '3000.00',
    required: false,
  })
  @IsNotEmpty()
  @IsDecimal()
  nfcCardFee: number;


  @ApiProperty({
    description: 'registrationFee of the hospital',
    example: '3000.00',
    required: false,
  })
  @IsNotEmpty()
  @IsDecimal()
  registrationFee: number;


  @ApiProperty({
    description: 'Payment plan for the hospital services',
    enum: PaymentPlan,
    example: 'EPIC',
  })
  @IsOptional()
  @IsEnum(PaymentPlan)
  paymentPlan?: PaymentPlan;


  
}

export class CreateRoleDto {
  
    @ApiProperty({
      description: 'Name of the role, e.g., "Doctor", "Nurse"',
      example: 'Doctor',
    })
    @IsString()
    name: string;
  
    @ApiProperty({
      description: 'Description of the role responsibilities',
      example: 'Responsible for patient care in the hospital.',
      required: false,
    })
    @IsOptional()
    @IsString()
    description?: string;

}
  
export class CreateResourceDto {
    @ApiProperty({
      type: String,
      description: 'Unique name of the resource',
      example: 'User Management',
    })
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({
      type: String,
      description: 'Optional description of the resource',
      example: 'Handles all user-related permissions',
      required: false,
    })
    @IsString()
    @IsNotEmpty()
    description?: string;
}

export class CreateRolePermissionDto {
    @ApiProperty({
      type: String,
      description: 'ID of the role this permission applies to',
      example: 'role-abc123',
    })
    @IsUUID()
    @IsNotEmpty()
    roleId: string;
  
    @ApiProperty({
      type: String,
      description: 'ID of the resource this permission applies to',
      example: 'resource-xyz456',
    })
    @IsUUID()
    @IsNotEmpty()
    resourceId: string;
  
    @ApiProperty({
      enum: PermissionAction,
      description: 'Action the role can perform on the resource',
      example: PermissionAction.READ,
    })
    @IsEnum(PermissionAction)
    @IsNotEmpty()
    action: PermissionAction;
  
    @ApiProperty({
      type: String,
      description: 'Path this permission applies to',
      example: '/api/v1/users/:id',
      required: false,
    })
    @IsNotEmpty()
    @IsString()
    path?: string;
  
    @ApiProperty({
      type: String,
      description: 'Optional description of the role permission',
      example: 'Allows reading user details',
      required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;
}

export class CreateUserDto {

  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password123!',
  })
  @IsOptional()
  @IsString()
  @IsStrongPassword({
    minLength: 8,   
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    })
  password?: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;

  @ApiProperty({
    description: 'User middle name',
    example: 'Paul',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  middleName?: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string;

  @ApiProperty({
    description: 'User phone numbers',
    example: ['+1234567890'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  phone: string[];

  @ApiProperty({
    description: 'User type, e.g., HOSPITAL_ADMIN, DOCTOR, PATIENT',
    enum: UserType,
    example: 'DOCTOR',
  })
  @IsEnum(UserType)
  type: UserType;

  @ApiProperty({
    description: 'User status (active, not approved, etc.)',
    enum: UserStatus,
    example: 'ACTIVE',
  })
  @IsEnum(UserStatus)
  status: UserStatus;

  @ApiProperty({
    description: 'Date when the user was created',
    example: '2023-05-20T00:00:00Z',
    format: 'date-time',
  })
  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({
    description: 'HOSPITAL ID if the user is associated with a hospital',
    example: 'b56e1d2c-6d6f-4d5b-bfed-91b7344561ad', format: 'uuid'
  })
  @ValidateIf(o => o.type === UserType.PATIENT || o.type === UserType.HOSPITAL_STAFF)
  @IsUUID()
  @IsNotEmpty()
  hospitalId?: string;


  @ApiProperty({
    description: 'HOSPITAL ID if the user is associated with a hospital',
    example: 'b56e1d2c-6d6f-4d5b-bfed-91b7344561ad', format: 'uuid'
  })
  @ValidateIf(o => o.type === UserType.NHIS_WORKER)
  @IsUUID()
  @IsNotEmpty()
  insuranceSchemeId?: string;

  @ApiProperty({
    description: 'HOSPITAL ID if the user is associated with a hospital',
    example: 'b56e1d2c-6d6f-4d5b-bfed-91b7344561ad', format: 'uuid'
  })
  @IsUUID()
  @IsOptional()
  roleId?: string;


  // Transaction Fields – Only required for PATIENT
  // at the point of patient registration, registration fee must be paid
  @ApiProperty({ description: 'Card opening deposit amount', example: '5000.00' })
  @ValidateIf(o => o.type === UserType.PATIENT)
  @IsNotEmpty()
  @Min(1000.00)
  amount?: number;

  // at the point of patient registration, registration fee must be paid
  @ApiProperty({ description: 'patient billing type', example: BillingType.INSURANCE })
  @ValidateIf(o => o.type === UserType.PATIENT)
  @IsNotEmpty()
  @IsEnum(BillingType)
  billingType?: BillingType;

  


  @ApiProperty({ description: 'Payment reference', example: '354rgfed' })
  @ValidateIf(o => o.type === UserType.PATIENT)
  @IsString()
  @IsNotEmpty()
  paymentReference?: string;

  @ApiProperty({ description: 'Payment mode', example: 'CARD' })
  @ValidateIf(o => o.type === UserType.PATIENT)
  @IsEnum(TransactionMode)
  @IsNotEmpty()
  modeOfPayment?: TransactionMode;
  
}

