
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HospitalScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  logo: 'logo',
  phone: 'phone',
  email: 'email',
  city: 'city',
  state: 'state',
  country: 'country',
  zipCode: 'zipCode',
  website: 'website',
  slogan: 'slogan',
  pobox: 'pobox',
  nfcCardFee: 'nfcCardFee',
  registrationFee: 'registrationFee',
  paymentPlan: 'paymentPlan',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.InsuranceSchemeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  address: 'address',
  phone: 'phone',
  email: 'email',
  website: 'website',
  registrationFee: 'registrationFee',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.RolePermissionScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  resourceId: 'resourceId',
  action: 'action',
  path: 'path',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  phone: 'phone',
  type: 'type',
  status: 'status',
  loginAttempts: 'loginAttempts',
  refreshToken: 'refreshToken',
  lastLogin: 'lastLogin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy',
  roleId: 'roleId',
  balance: 'balance'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  type: 'type',
  status: 'status',
  description: 'description',
  reference: 'reference',
  modeOfPayment: 'modeOfPayment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.PasswordHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PersonalAccessTokenScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  type: 'type',
  expiry: 'expiry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.HospitalStaffScalarFieldEnum = {
  id: 'id',
  department: 'department',
  hospitalId: 'hospitalId',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  street: 'street',
  city: 'city',
  state: 'state',
  country: 'country',
  postalCode: 'postalCode',
  type: 'type',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy',
  deletedAt: 'deletedAt',
  deletedBy: 'deletedBy'
};

exports.Prisma.PatientScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  nfcId: 'nfcId',
  nfcLinkedAt: 'nfcLinkedAt',
  nfcLinkedBy: 'nfcLinkedBy',
  dateOfBirth: 'dateOfBirth',
  sex: 'sex',
  maritalStatus: 'maritalStatus',
  nationality: 'nationality',
  occupation: 'occupation',
  religion: 'religion',
  ethnicity: 'ethnicity',
  spokenLanguages: 'spokenLanguages',
  bloodGroup: 'bloodGroup',
  genotype: 'genotype',
  emergencyContactId: 'emergencyContactId',
  hospitalId: 'hospitalId',
  insuranceSchemeId: 'insuranceSchemeId',
  billingtype: 'billingtype',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NextOfKinScalarFieldEnum = {
  id: 'id',
  patientId: 'patientId',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  relationship: 'relationship',
  phone: 'phone',
  email: 'email',
  address: 'address',
  isEmergencyContact: 'isEmergencyContact',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NHISWorkerScalarFieldEnum = {
  id: 'id',
  role: 'role',
  insuranceSchemeId: 'insuranceSchemeId'
};

exports.Prisma.PublicHealthWorkerScalarFieldEnum = {
  id: 'id',
  role: 'role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.PaymentPlan = exports.$Enums.PaymentPlan = {
  EPIC: 'EPIC',
  PREMIUM: 'PREMIUM',
  EXQUISITE: 'EXQUISITE'
};

exports.PermissionAction = exports.$Enums.PermissionAction = {
  READ: 'READ',
  WRITE: 'WRITE',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

exports.UserType = exports.$Enums.UserType = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  HOSPITAL_STAFF: 'HOSPITAL_STAFF',
  PATIENT: 'PATIENT',
  NHIS_WORKER: 'NHIS_WORKER',
  PUBLIC_HEALTH_WORKER: 'PUBLIC_HEALTH_WORKER'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  ACTIVE: 'ACTIVE',
  NOTAPPROVED: 'NOTAPPROVED',
  RESTRICTED: 'RESTRICTED',
  DELETED: 'DELETED'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  DISPUTED: 'DISPUTED',
  CANCELLED: 'CANCELLED',
  CHARGEBACK: 'CHARGEBACK'
};

exports.TransactionMode = exports.$Enums.TransactionMode = {
  CASH: 'CASH',
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  ONLINE: 'ONLINE',
  SYSTEM_DEBIT: 'SYSTEM_DEBIT',
  SYSTEM_CREDIT: 'SYSTEM_CREDIT'
};

exports.TokenType = exports.$Enums.TokenType = {
  SESSION: 'SESSION',
  API: 'API',
  PASSWORDRESET: 'PASSWORDRESET',
  DELETEACCOUNT: 'DELETEACCOUNT',
  VERIFYACCOUNT: 'VERIFYACCOUNT'
};

exports.HospitalStaffRole = exports.$Enums.HospitalStaffRole = {
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN',
  MANAGER: 'MANAGER',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  LAB_ADMIN: 'LAB_ADMIN',
  PHARMACIST: 'PHARMACIST',
  RECEPTIONIST: 'RECEPTIONIST',
  ACCOUNTANT: 'ACCOUNTANT',
  LAB_TECHNICIAN: 'LAB_TECHNICIAN',
  PHARMACY_TECHNICIAN: 'PHARMACY_TECHNICIAN',
  RADIOLOGIST: 'RADIOLOGIST',
  PHLEBOTOMIST: 'PHLEBOTOMIST',
  OPTOMETRIST: 'OPTOMETRIST',
  DENTIST: 'DENTIST',
  OTHER: 'OTHER'
};

exports.AddressType = exports.$Enums.AddressType = {
  RESIDENCE: 'RESIDENCE',
  WORK: 'WORK',
  ORIGIN: 'ORIGIN'
};

exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

exports.MaritalStatus = exports.$Enums.MaritalStatus = {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED'
};

exports.BloodGroup = exports.$Enums.BloodGroup = {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

exports.Genotype = exports.$Enums.Genotype = {
  AA: 'AA',
  AS: 'AS',
  SS: 'SS',
  AC: 'AC',
  SC: 'SC',
  CC: 'CC',
  AE: 'AE',
  EE: 'EE'
};

exports.BillingType = exports.$Enums.BillingType = {
  SELF_PAYING: 'SELF_PAYING',
  INSURANCE: 'INSURANCE',
  STAFF_INSURANCE: 'STAFF_INSURANCE'
};

exports.NHISRole = exports.$Enums.NHISRole = {
  ADMIN: 'ADMIN',
  VERIFIER: 'VERIFIER',
  CLAIMS_PROCESSOR: 'CLAIMS_PROCESSOR',
  OTHER: 'OTHER'
};

exports.PublicHealthRole = exports.$Enums.PublicHealthRole = {
  INSPECTOR: 'INSPECTOR',
  DATA_ANALYST: 'DATA_ANALYST',
  SUPERVISOR: 'SUPERVISOR',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  Hospital: 'Hospital',
  InsuranceScheme: 'InsuranceScheme',
  Role: 'Role',
  Resource: 'Resource',
  RolePermission: 'RolePermission',
  User: 'User',
  Transaction: 'Transaction',
  PasswordHistory: 'PasswordHistory',
  PersonalAccessToken: 'PersonalAccessToken',
  HospitalStaff: 'HospitalStaff',
  Address: 'Address',
  Patient: 'Patient',
  NextOfKin: 'NextOfKin',
  NHISWorker: 'NHISWorker',
  PublicHealthWorker: 'PublicHealthWorker'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
