
export enum  PaymentPlan {
    EPIC = 'EPIC',
    PREMIUM = 'PREMIUM',
    EXQUISITE = 'EXQUISITE',
  }

export enum UserType {
SUPERADMIN = "SUPERADMIN",
ADMIN = "ADMIN",
HOSPITAL_ADMIN = "HOSPITAL_ADMIN",
HOSPITAL_SUPERADMIN = "HOSPITAL_SUPERADMIN",
HOSPITAL_MANAGER = "HOSPITAL_MANAGER",
DOCTOR = "DOCTOR",
NURSE = "NURSE",
LAB_ADMIN = "LAB_ADMIN",
PHARMACIST = "PHARMACIST",
RECEPTIONIST = "RECEPTIONIST",
ACCOUNTANT = "ACCOUNTANT",
LAB_TECHNICIAN = "LAB_TECHNICIAN",
PHARMACY_TECHNICIAN = "PHARMACY_TECHNICIAN",
RADIOLOGIST = "RADIOLOGIST",
PHLEBOTOMIST = "PHLEBOTOMIST",
OPTOMETRIST = "OPTOMETRIST",
DENTIST = "DENTIST",
OTHER = "OTHER",
PATIENT = "PATIENT",
NHIS_WORKER = "NHIS_WORKER",
PUBLIC_HEALTH_WORKER = "PUBLIC_HEALTH_WORKER",
INSURANCE_PROVIDER = "INSURANCE_PROVIDER",
}
  
export enum BLOOD_GROUP {
    A_POS = "A_POS",
    A_NEG = "A_NEG",
    B_POS = "B_POS",
    B_NEG = "B_NEG",
    AB_POS = "AB_POS",
    AB_NEG = "AB_NEG",
    O_POS = "O_POS",
    O_NEG = "O_NEG",
}

export enum GENOTYPE {
    AA = "AA",
    AS = "AS",
    SS = "SS",
    AC = "AC",
    SC = "SC",
    CC = "CC",
    AE = "AE",
    EE = "EE",
}
  

export enum PermissionAction {
    READ = "READ",
    WRITE = "WRITE",
    DELETE = "DELETE",
    UPDATE = "UPDATE",
  }
  
  export enum PublicHealthRole {
    INSPECTOR = "INSPECTOR",
    DATA_ANALYST = "DATA_ANALYST",
    SUPERVISOR = "SUPERVISOR",
    OTHER = "OTHER",
  }
  
  export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
  }
  
  export enum NHISRole {
    ADMIN = "ADMIN",
    VERIFIER = "VERIFIER",
    CLAIMS_PROCESSOR = "CLAIMS_PROCESSOR",
    OTHER = "OTHER",
  }
  

  export enum UserStatus {
    ACTIVE = "ACTIVE",
    NOTAPPROVED = "NOTAPPROVED", // sticking to your original name
    RESTRICTED = "RESTRICTED",
    DELETED = "DELETED",
  }
  
  export enum MaritalStatus {
    SINGLE = "SINGLE",
    MARRIED = "MARRIED",
    DIVORCED = "DIVORCED",
    WIDOWED = "WIDOWED",
  }
  
  export enum AddressType {
    RESIDENCE = "RESIDENCE",
    WORK = "WORK",
    ORIGIN = "ORIGIN",
  }
  
  export enum TokenType {
    SESSION = "SESSION",
    API = "API",
    PASSWORDRESET = "PASSWORDRESET",
    DELETEACCOUNT = "DELETEACCOUNT",
    VERIFYACCOUNT = "VERIFYACCOUNT",
  }
  