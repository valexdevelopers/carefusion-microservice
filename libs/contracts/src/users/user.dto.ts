import { PaymentPlan, UserStatus, UserType } from "@shared/enums/users/user.enums";

export class UserDto {
    id: string;
    email: string;
    password: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    phone: string[];
    balance: number;
    loginAttempts: number;
    lastLogin: Date | null;
    type: UserType;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;
    updatedBy?: string | null;
    deletedAt?: Date | null;
    deletedBy?: string | null;
    hospitalId?: string | null;
    roleId?: string | null;
  
    // Relations
    // hospital?: Hospital | null;
    // role?: Role | null;
    // personalAccessTokens: PersonalAccessToken[];
    // passwordHistory: PasswordHistory[];
    // addresss: Address[];
    // staff?: Staff | null;
    // patient?: Patient | null;
    // nhisWorker?: NHISWorker | null;
    // publicHealthWorker?: PublicHealthWorker | null;
  };

export interface HospitalDto {
  id: string;
  name: string;
  address: string;
  logo?: string;
  phone: string[];
  email: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  website?: string;
  slogan?: string;
  pobox?: string;
  nfcCardFee: number;
  registrationFee: number;
  paymentPlan?: PaymentPlan;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  deletedBy?: string | null;
}
  