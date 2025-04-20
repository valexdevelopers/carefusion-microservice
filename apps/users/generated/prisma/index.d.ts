
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Hospital
 * 
 */
export type Hospital = $Result.DefaultSelection<Prisma.$HospitalPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordHistory
 * 
 */
export type PasswordHistory = $Result.DefaultSelection<Prisma.$PasswordHistoryPayload>
/**
 * Model PersonalAccessToken
 * PersonalAccessToken - for all types of code verification
 */
export type PersonalAccessToken = $Result.DefaultSelection<Prisma.$PersonalAccessTokenPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model NextOfKin
 * 
 */
export type NextOfKin = $Result.DefaultSelection<Prisma.$NextOfKinPayload>
/**
 * Model NHISWorker
 * 
 */
export type NHISWorker = $Result.DefaultSelection<Prisma.$NHISWorkerPayload>
/**
 * Model PublicHealthWorker
 * 
 */
export type PublicHealthWorker = $Result.DefaultSelection<Prisma.$PublicHealthWorkerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PermissionAction: {
  READ: 'READ',
  WRITE: 'WRITE',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

export type PermissionAction = (typeof PermissionAction)[keyof typeof PermissionAction]


export const PublicHealthRole: {
  INSPECTOR: 'INSPECTOR',
  DATA_ANALYST: 'DATA_ANALYST',
  SUPERVISOR: 'SUPERVISOR',
  OTHER: 'OTHER'
};

export type PublicHealthRole = (typeof PublicHealthRole)[keyof typeof PublicHealthRole]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const NHISRole: {
  ADMIN: 'ADMIN',
  VERIFIER: 'VERIFIER',
  CLAIMS_PROCESSOR: 'CLAIMS_PROCESSOR',
  OTHER: 'OTHER'
};

export type NHISRole = (typeof NHISRole)[keyof typeof NHISRole]


export const PaymentPlan: {
  EPIC: 'EPIC',
  PREMIUM: 'PREMIUM',
  EXQUISITE: 'EXQUISITE'
};

export type PaymentPlan = (typeof PaymentPlan)[keyof typeof PaymentPlan]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  NOTAPPROVED: 'NOTAPPROVED',
  RESTRICTED: 'RESTRICTED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  DIVORCED: 'DIVORCED',
  WIDOWED: 'WIDOWED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const AddressType: {
  RESIDENCE: 'RESIDENCE',
  WORK: 'WORK',
  ORIGIN: 'ORIGIN'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]


export const TokenType: {
  SESSION: 'SESSION',
  API: 'API',
  PASSWORDRESET: 'PASSWORDRESET',
  DELETEACCOUNT: 'DELETEACCOUNT',
  VERIFYACCOUNT: 'VERIFYACCOUNT'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const UserType: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  HOSPITAL_ADMIN: 'HOSPITAL_ADMIN',
  HOSPITAL_SUPERADMIN: 'HOSPITAL_SUPERADMIN',
  HOSPITAL_MANAGER: 'HOSPITAL_MANAGER',
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
  OTHER: 'OTHER',
  PATIENT: 'PATIENT',
  NHIS_WORKER: 'NHIS_WORKER',
  PUBLIC_HEALTH_WORKER: 'PUBLIC_HEALTH_WORKER',
  INSURANCE_PROVIDER: 'INSURANCE_PROVIDER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const BloodGroup: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const Genotype: {
  AA: 'AA',
  AS: 'AS',
  SS: 'SS',
  AC: 'AC',
  SC: 'SC',
  CC: 'CC',
  AE: 'AE',
  EE: 'EE'
};

export type Genotype = (typeof Genotype)[keyof typeof Genotype]

}

export type PermissionAction = $Enums.PermissionAction

export const PermissionAction: typeof $Enums.PermissionAction

export type PublicHealthRole = $Enums.PublicHealthRole

export const PublicHealthRole: typeof $Enums.PublicHealthRole

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type NHISRole = $Enums.NHISRole

export const NHISRole: typeof $Enums.NHISRole

export type PaymentPlan = $Enums.PaymentPlan

export const PaymentPlan: typeof $Enums.PaymentPlan

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type Genotype = $Enums.Genotype

export const Genotype: typeof $Enums.Genotype

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Hospitals
 * const hospitals = await prisma.hospital.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Hospitals
   * const hospitals = await prisma.hospital.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hospital`: Exposes CRUD operations for the **Hospital** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitals
    * const hospitals = await prisma.hospital.findMany()
    * ```
    */
  get hospital(): Prisma.HospitalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordHistory`: Exposes CRUD operations for the **PasswordHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordHistories
    * const passwordHistories = await prisma.passwordHistory.findMany()
    * ```
    */
  get passwordHistory(): Prisma.PasswordHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalAccessToken`: Exposes CRUD operations for the **PersonalAccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalAccessTokens
    * const personalAccessTokens = await prisma.personalAccessToken.findMany()
    * ```
    */
  get personalAccessToken(): Prisma.PersonalAccessTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nextOfKin`: Exposes CRUD operations for the **NextOfKin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NextOfKins
    * const nextOfKins = await prisma.nextOfKin.findMany()
    * ```
    */
  get nextOfKin(): Prisma.NextOfKinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nHISWorker`: Exposes CRUD operations for the **NHISWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NHISWorkers
    * const nHISWorkers = await prisma.nHISWorker.findMany()
    * ```
    */
  get nHISWorker(): Prisma.NHISWorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicHealthWorker`: Exposes CRUD operations for the **PublicHealthWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicHealthWorkers
    * const publicHealthWorkers = await prisma.publicHealthWorker.findMany()
    * ```
    */
  get publicHealthWorker(): Prisma.PublicHealthWorkerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Hospital: 'Hospital',
    Role: 'Role',
    Resource: 'Resource',
    RolePermission: 'RolePermission',
    User: 'User',
    PasswordHistory: 'PasswordHistory',
    PersonalAccessToken: 'PersonalAccessToken',
    Staff: 'Staff',
    Address: 'Address',
    Patient: 'Patient',
    NextOfKin: 'NextOfKin',
    NHISWorker: 'NHISWorker',
    PublicHealthWorker: 'PublicHealthWorker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hospital" | "role" | "resource" | "rolePermission" | "user" | "passwordHistory" | "personalAccessToken" | "staff" | "address" | "patient" | "nextOfKin" | "nHISWorker" | "publicHealthWorker"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hospital: {
        payload: Prisma.$HospitalPayload<ExtArgs>
        fields: Prisma.HospitalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findFirst: {
            args: Prisma.HospitalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          findMany: {
            args: Prisma.HospitalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          create: {
            args: Prisma.HospitalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          createMany: {
            args: Prisma.HospitalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          delete: {
            args: Prisma.HospitalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          update: {
            args: Prisma.HospitalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          deleteMany: {
            args: Prisma.HospitalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>[]
          }
          upsert: {
            args: Prisma.HospitalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalPayload>
          }
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospital>
          }
          groupBy: {
            args: Prisma.HospitalGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordHistory: {
        payload: Prisma.$PasswordHistoryPayload<ExtArgs>
        fields: Prisma.PasswordHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          findFirst: {
            args: Prisma.PasswordHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          findMany: {
            args: Prisma.PasswordHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>[]
          }
          create: {
            args: Prisma.PasswordHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          createMany: {
            args: Prisma.PasswordHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>[]
          }
          delete: {
            args: Prisma.PasswordHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          update: {
            args: Prisma.PasswordHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PasswordHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PasswordHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordHistoryPayload>
          }
          aggregate: {
            args: Prisma.PasswordHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordHistory>
          }
          groupBy: {
            args: Prisma.PasswordHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordHistoryCountAggregateOutputType> | number
          }
        }
      }
      PersonalAccessToken: {
        payload: Prisma.$PersonalAccessTokenPayload<ExtArgs>
        fields: Prisma.PersonalAccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalAccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalAccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          findFirst: {
            args: Prisma.PersonalAccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalAccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          findMany: {
            args: Prisma.PersonalAccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>[]
          }
          create: {
            args: Prisma.PersonalAccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          createMany: {
            args: Prisma.PersonalAccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalAccessTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>[]
          }
          delete: {
            args: Prisma.PersonalAccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          update: {
            args: Prisma.PersonalAccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.PersonalAccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalAccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalAccessTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>[]
          }
          upsert: {
            args: Prisma.PersonalAccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalAccessTokenPayload>
          }
          aggregate: {
            args: Prisma.PersonalAccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalAccessToken>
          }
          groupBy: {
            args: Prisma.PersonalAccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalAccessTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalAccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalAccessTokenCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      NextOfKin: {
        payload: Prisma.$NextOfKinPayload<ExtArgs>
        fields: Prisma.NextOfKinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NextOfKinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NextOfKinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          findFirst: {
            args: Prisma.NextOfKinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NextOfKinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          findMany: {
            args: Prisma.NextOfKinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>[]
          }
          create: {
            args: Prisma.NextOfKinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          createMany: {
            args: Prisma.NextOfKinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NextOfKinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>[]
          }
          delete: {
            args: Prisma.NextOfKinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          update: {
            args: Prisma.NextOfKinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          deleteMany: {
            args: Prisma.NextOfKinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NextOfKinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NextOfKinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>[]
          }
          upsert: {
            args: Prisma.NextOfKinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NextOfKinPayload>
          }
          aggregate: {
            args: Prisma.NextOfKinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNextOfKin>
          }
          groupBy: {
            args: Prisma.NextOfKinGroupByArgs<ExtArgs>
            result: $Utils.Optional<NextOfKinGroupByOutputType>[]
          }
          count: {
            args: Prisma.NextOfKinCountArgs<ExtArgs>
            result: $Utils.Optional<NextOfKinCountAggregateOutputType> | number
          }
        }
      }
      NHISWorker: {
        payload: Prisma.$NHISWorkerPayload<ExtArgs>
        fields: Prisma.NHISWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NHISWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NHISWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          findFirst: {
            args: Prisma.NHISWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NHISWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          findMany: {
            args: Prisma.NHISWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>[]
          }
          create: {
            args: Prisma.NHISWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          createMany: {
            args: Prisma.NHISWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NHISWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>[]
          }
          delete: {
            args: Prisma.NHISWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          update: {
            args: Prisma.NHISWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          deleteMany: {
            args: Prisma.NHISWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NHISWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NHISWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>[]
          }
          upsert: {
            args: Prisma.NHISWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NHISWorkerPayload>
          }
          aggregate: {
            args: Prisma.NHISWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNHISWorker>
          }
          groupBy: {
            args: Prisma.NHISWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<NHISWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.NHISWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<NHISWorkerCountAggregateOutputType> | number
          }
        }
      }
      PublicHealthWorker: {
        payload: Prisma.$PublicHealthWorkerPayload<ExtArgs>
        fields: Prisma.PublicHealthWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicHealthWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicHealthWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          findFirst: {
            args: Prisma.PublicHealthWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicHealthWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          findMany: {
            args: Prisma.PublicHealthWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>[]
          }
          create: {
            args: Prisma.PublicHealthWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          createMany: {
            args: Prisma.PublicHealthWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicHealthWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>[]
          }
          delete: {
            args: Prisma.PublicHealthWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          update: {
            args: Prisma.PublicHealthWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          deleteMany: {
            args: Prisma.PublicHealthWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicHealthWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicHealthWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>[]
          }
          upsert: {
            args: Prisma.PublicHealthWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicHealthWorkerPayload>
          }
          aggregate: {
            args: Prisma.PublicHealthWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicHealthWorker>
          }
          groupBy: {
            args: Prisma.PublicHealthWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicHealthWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicHealthWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<PublicHealthWorkerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    hospital?: HospitalOmit
    role?: RoleOmit
    resource?: ResourceOmit
    rolePermission?: RolePermissionOmit
    user?: UserOmit
    passwordHistory?: PasswordHistoryOmit
    personalAccessToken?: PersonalAccessTokenOmit
    staff?: StaffOmit
    address?: AddressOmit
    patient?: PatientOmit
    nextOfKin?: NextOfKinOmit
    nHISWorker?: NHISWorkerOmit
    publicHealthWorker?: PublicHealthWorkerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    users: number
  }

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | HospitalCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    rolePermissions: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    rolePermissions: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | ResourceCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    personalAccessTokens: number
    passwordHistory: number
    addresss: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalAccessTokens?: boolean | UserCountOutputTypeCountPersonalAccessTokensArgs
    passwordHistory?: boolean | UserCountOutputTypeCountPasswordHistoryArgs
    addresss?: boolean | UserCountOutputTypeCountAddresssArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPersonalAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalAccessTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddresssArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    emergencyContact: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyContact?: boolean | PatientCountOutputTypeCountEmergencyContactArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountEmergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextOfKinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  export type HospitalMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    logo: string | null
    email: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    website: string | null
    slogan: string | null
    pobox: string | null
    paymentPlan: $Enums.PaymentPlan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    logo: string | null
    email: string | null
    city: string | null
    state: string | null
    country: string | null
    zipCode: string | null
    website: string | null
    slogan: string | null
    pobox: string | null
    paymentPlan: $Enums.PaymentPlan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HospitalCountAggregateOutputType = {
    id: number
    name: number
    address: number
    logo: number
    phone: number
    email: number
    city: number
    state: number
    country: number
    zipCode: number
    website: number
    slogan: number
    pobox: number
    paymentPlan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HospitalMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    logo?: true
    email?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    website?: true
    slogan?: true
    pobox?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    logo?: true
    email?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    website?: true
    slogan?: true
    pobox?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HospitalCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    logo?: true
    phone?: true
    email?: true
    city?: true
    state?: true
    country?: true
    zipCode?: true
    website?: true
    slogan?: true
    pobox?: true
    paymentPlan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospital to aggregate.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitals
    **/
    _count?: true | HospitalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalMaxAggregateInputType
  }

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
        [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>
  }




  export type HospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalWhereInput
    orderBy?: HospitalOrderByWithAggregationInput | HospitalOrderByWithAggregationInput[]
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum
    having?: HospitalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalCountAggregateInputType | true
    _min?: HospitalMinAggregateInputType
    _max?: HospitalMaxAggregateInputType
  }

  export type HospitalGroupByOutputType = {
    id: string
    name: string
    address: string
    logo: string | null
    phone: string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website: string | null
    slogan: string | null
    pobox: string | null
    paymentPlan: $Enums.PaymentPlan | null
    createdAt: Date
    updatedAt: Date
    _count: HospitalCountAggregateOutputType | null
    _min: HospitalMinAggregateOutputType | null
    _max: HospitalMaxAggregateOutputType | null
  }

  type GetHospitalGroupByPayload<T extends HospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
        }
      >
    >


  export type HospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    logo?: boolean
    phone?: boolean
    email?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    website?: boolean
    slogan?: boolean
    pobox?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Hospital$usersArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    logo?: boolean
    phone?: boolean
    email?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    website?: boolean
    slogan?: boolean
    pobox?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    logo?: boolean
    phone?: boolean
    email?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    website?: boolean
    slogan?: boolean
    pobox?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hospital"]>

  export type HospitalSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    logo?: boolean
    phone?: boolean
    email?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    zipCode?: boolean
    website?: boolean
    slogan?: boolean
    pobox?: boolean
    paymentPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HospitalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "logo" | "phone" | "email" | "city" | "state" | "country" | "zipCode" | "website" | "slogan" | "pobox" | "paymentPlan" | "createdAt" | "updatedAt", ExtArgs["result"]["hospital"]>
  export type HospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Hospital$usersArgs<ExtArgs>
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospitalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospitalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospital"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      logo: string | null
      phone: string[]
      email: string
      city: string
      state: string
      country: string
      zipCode: string
      website: string | null
      slogan: string | null
      pobox: string | null
      paymentPlan: $Enums.PaymentPlan | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hospital"]>
    composites: {}
  }

  type HospitalGetPayload<S extends boolean | null | undefined | HospitalDefaultArgs> = $Result.GetResult<Prisma.$HospitalPayload, S>

  type HospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalCountAggregateInputType | true
    }

  export interface HospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospital'], meta: { name: 'Hospital' } }
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {HospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalFindUniqueArgs>(args: SelectSubset<T, HospitalFindUniqueArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalFindFirstArgs>(args?: SelectSubset<T, HospitalFindFirstArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     * 
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalFindManyArgs>(args?: SelectSubset<T, HospitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospital.
     * @param {HospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     * 
     */
    create<T extends HospitalCreateArgs>(args: SelectSubset<T, HospitalCreateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitals.
     * @param {HospitalCreateManyArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalCreateManyArgs>(args?: SelectSubset<T, HospitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitals and returns the data saved in the database.
     * @param {HospitalCreateManyAndReturnArgs} args - Arguments to create many Hospitals.
     * @example
     * // Create many Hospitals
     * const hospital = await prisma.hospital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospital.
     * @param {HospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     * 
     */
    delete<T extends HospitalDeleteArgs>(args: SelectSubset<T, HospitalDeleteArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospital.
     * @param {HospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalUpdateArgs>(args: SelectSubset<T, HospitalUpdateArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitals.
     * @param {HospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalDeleteManyArgs>(args?: SelectSubset<T, HospitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalUpdateManyArgs>(args: SelectSubset<T, HospitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitals and returns the data updated in the database.
     * @param {HospitalUpdateManyAndReturnArgs} args - Arguments to update many Hospitals.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitals and only return the `id`
     * const hospitalWithIdOnly = await prisma.hospital.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospital.
     * @param {HospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     */
    upsert<T extends HospitalUpsertArgs>(args: SelectSubset<T, HospitalUpsertArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
    **/
    count<T extends HospitalCountArgs>(
      args?: Subset<T, HospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalAggregateArgs>(args: Subset<T, HospitalAggregateArgs>): Prisma.PrismaPromise<GetHospitalAggregateType<T>>

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalGroupByArgs['orderBy'] }
        : { orderBy?: HospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospital model
   */
  readonly fields: HospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Hospital$usersArgs<ExtArgs> = {}>(args?: Subset<T, Hospital$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospital model
   */
  interface HospitalFieldRefs {
    readonly id: FieldRef<"Hospital", 'String'>
    readonly name: FieldRef<"Hospital", 'String'>
    readonly address: FieldRef<"Hospital", 'String'>
    readonly logo: FieldRef<"Hospital", 'String'>
    readonly phone: FieldRef<"Hospital", 'String[]'>
    readonly email: FieldRef<"Hospital", 'String'>
    readonly city: FieldRef<"Hospital", 'String'>
    readonly state: FieldRef<"Hospital", 'String'>
    readonly country: FieldRef<"Hospital", 'String'>
    readonly zipCode: FieldRef<"Hospital", 'String'>
    readonly website: FieldRef<"Hospital", 'String'>
    readonly slogan: FieldRef<"Hospital", 'String'>
    readonly pobox: FieldRef<"Hospital", 'String'>
    readonly paymentPlan: FieldRef<"Hospital", 'PaymentPlan'>
    readonly createdAt: FieldRef<"Hospital", 'DateTime'>
    readonly updatedAt: FieldRef<"Hospital", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospital findUnique
   */
  export type HospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findUniqueOrThrow
   */
  export type HospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital findFirst
   */
  export type HospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findFirstOrThrow
   */
  export type HospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospital to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital findMany
   */
  export type HospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter, which Hospitals to fetch.
     */
    where?: HospitalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitals to fetch.
     */
    orderBy?: HospitalOrderByWithRelationInput | HospitalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitals.
     */
    cursor?: HospitalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitals.
     */
    skip?: number
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[]
  }

  /**
   * Hospital create
   */
  export type HospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospital.
     */
    data: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
  }

  /**
   * Hospital createMany
   */
  export type HospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital createManyAndReturn
   */
  export type HospitalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitals.
     */
    data: HospitalCreateManyInput | HospitalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospital update
   */
  export type HospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospital.
     */
    data: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
    /**
     * Choose, which Hospital to update.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital updateMany
   */
  export type HospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital updateManyAndReturn
   */
  export type HospitalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * The data used to update Hospitals.
     */
    data: XOR<HospitalUpdateManyMutationInput, HospitalUncheckedUpdateManyInput>
    /**
     * Filter which Hospitals to update
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to update.
     */
    limit?: number
  }

  /**
   * Hospital upsert
   */
  export type HospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospital to update in case it exists.
     */
    where: HospitalWhereUniqueInput
    /**
     * In case the Hospital found by the `where` argument doesn't exist, create a new Hospital with this data.
     */
    create: XOR<HospitalCreateInput, HospitalUncheckedCreateInput>
    /**
     * In case the Hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalUpdateInput, HospitalUncheckedUpdateInput>
  }

  /**
   * Hospital delete
   */
  export type HospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    /**
     * Filter which Hospital to delete.
     */
    where: HospitalWhereUniqueInput
  }

  /**
   * Hospital deleteMany
   */
  export type HospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitals to delete
     */
    where?: HospitalWhereInput
    /**
     * Limit how many Hospitals to delete.
     */
    limit?: number
  }

  /**
   * Hospital.users
   */
  export type Hospital$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Hospital without action
   */
  export type HospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly updatedBy: FieldRef<"Role", 'String'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedBy: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.rolePermissions
   */
  export type Role$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    rolePermissions?: boolean | Resource$rolePermissionsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | Resource$rolePermissionsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends Resource$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly name: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly updatedAt: FieldRef<"Resource", 'DateTime'>
    readonly updatedBy: FieldRef<"Resource", 'String'>
    readonly deletedAt: FieldRef<"Resource", 'DateTime'>
    readonly deletedBy: FieldRef<"Resource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.rolePermissions
   */
  export type Resource$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    resourceId: string | null
    action: $Enums.PermissionAction | null
    path: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    resourceId: string | null
    action: $Enums.PermissionAction | null
    path: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    resourceId: number
    action: number
    path: number
    description: number
    createdAt: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    path?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    path?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    resourceId?: true
    action?: true
    path?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: string
    roleId: string
    resourceId: string
    action: $Enums.PermissionAction
    path: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    path?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    path?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    path?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    resourceId?: boolean
    action?: boolean
    path?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "resourceId" | "action" | "path" | "description" | "createdAt" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      resourceId: string
      action: $Enums.PermissionAction
      path: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'String'>
    readonly roleId: FieldRef<"RolePermission", 'String'>
    readonly resourceId: FieldRef<"RolePermission", 'String'>
    readonly action: FieldRef<"RolePermission", 'PermissionAction'>
    readonly path: FieldRef<"RolePermission", 'String'>
    readonly description: FieldRef<"RolePermission", 'String'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly updatedBy: FieldRef<"RolePermission", 'String'>
    readonly deletedAt: FieldRef<"RolePermission", 'DateTime'>
    readonly deletedBy: FieldRef<"RolePermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    type: $Enums.UserType | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    hospitalId: string | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    type: $Enums.UserType | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    hospitalId: string | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    middleName: number
    lastName: number
    phone: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    hospitalId: number
    roleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    hospitalId?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    hospitalId?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    phone?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    hospitalId?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone: string[]
    type: $Enums.UserType
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    hospitalId: string | null
    roleId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    hospitalId?: boolean
    roleId?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    personalAccessTokens?: boolean | User$personalAccessTokensArgs<ExtArgs>
    passwordHistory?: boolean | User$passwordHistoryArgs<ExtArgs>
    addresss?: boolean | User$addresssArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    nhisWorker?: boolean | User$nhisWorkerArgs<ExtArgs>
    publicHealthWorker?: boolean | User$publicHealthWorkerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    hospitalId?: boolean
    roleId?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    hospitalId?: boolean
    roleId?: boolean
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    phone?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    hospitalId?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "middleName" | "lastName" | "phone" | "type" | "status" | "createdAt" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "hospitalId" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
    personalAccessTokens?: boolean | User$personalAccessTokensArgs<ExtArgs>
    passwordHistory?: boolean | User$passwordHistoryArgs<ExtArgs>
    addresss?: boolean | User$addresssArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
    nhisWorker?: boolean | User$nhisWorkerArgs<ExtArgs>
    publicHealthWorker?: boolean | User$publicHealthWorkerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | User$hospitalArgs<ExtArgs>
    role?: boolean | User$roleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hospital: Prisma.$HospitalPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs> | null
      personalAccessTokens: Prisma.$PersonalAccessTokenPayload<ExtArgs>[]
      passwordHistory: Prisma.$PasswordHistoryPayload<ExtArgs>[]
      addresss: Prisma.$AddressPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
      nhisWorker: Prisma.$NHISWorkerPayload<ExtArgs> | null
      publicHealthWorker: Prisma.$PublicHealthWorkerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      middleName: string
      lastName: string
      phone: string[]
      type: $Enums.UserType
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
      hospitalId: string | null
      roleId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospital<T extends User$hospitalArgs<ExtArgs> = {}>(args?: Subset<T, User$hospitalArgs<ExtArgs>>): Prisma__HospitalClient<$Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    personalAccessTokens<T extends User$personalAccessTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$personalAccessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordHistory<T extends User$passwordHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresss<T extends User$addresssArgs<ExtArgs> = {}>(args?: Subset<T, User$addresssArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nhisWorker<T extends User$nhisWorkerArgs<ExtArgs> = {}>(args?: Subset<T, User$nhisWorkerArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    publicHealthWorker<T extends User$publicHealthWorkerArgs<ExtArgs> = {}>(args?: Subset<T, User$publicHealthWorkerArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String[]'>
    readonly type: FieldRef<"User", 'UserType'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly updatedBy: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly deletedBy: FieldRef<"User", 'String'>
    readonly hospitalId: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hospital
   */
  export type User$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: HospitalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospital
     */
    omit?: HospitalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalInclude<ExtArgs> | null
    where?: HospitalWhereInput
  }

  /**
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.personalAccessTokens
   */
  export type User$personalAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    where?: PersonalAccessTokenWhereInput
    orderBy?: PersonalAccessTokenOrderByWithRelationInput | PersonalAccessTokenOrderByWithRelationInput[]
    cursor?: PersonalAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonalAccessTokenScalarFieldEnum | PersonalAccessTokenScalarFieldEnum[]
  }

  /**
   * User.passwordHistory
   */
  export type User$passwordHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    where?: PasswordHistoryWhereInput
    orderBy?: PasswordHistoryOrderByWithRelationInput | PasswordHistoryOrderByWithRelationInput[]
    cursor?: PasswordHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordHistoryScalarFieldEnum | PasswordHistoryScalarFieldEnum[]
  }

  /**
   * User.addresss
   */
  export type User$addresssArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.nhisWorker
   */
  export type User$nhisWorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    where?: NHISWorkerWhereInput
  }

  /**
   * User.publicHealthWorker
   */
  export type User$publicHealthWorkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    where?: PublicHealthWorkerWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordHistory
   */

  export type AggregatePasswordHistory = {
    _count: PasswordHistoryCountAggregateOutputType | null
    _min: PasswordHistoryMinAggregateOutputType | null
    _max: PasswordHistoryMaxAggregateOutputType | null
  }

  export type PasswordHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasswordHistoryCountAggregateOutputType = {
    id: number
    userId: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasswordHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasswordHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasswordHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordHistory to aggregate.
     */
    where?: PasswordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordHistories to fetch.
     */
    orderBy?: PasswordHistoryOrderByWithRelationInput | PasswordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordHistories
    **/
    _count?: true | PasswordHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordHistoryMaxAggregateInputType
  }

  export type GetPasswordHistoryAggregateType<T extends PasswordHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordHistory[P]>
      : GetScalarType<T[P], AggregatePasswordHistory[P]>
  }




  export type PasswordHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordHistoryWhereInput
    orderBy?: PasswordHistoryOrderByWithAggregationInput | PasswordHistoryOrderByWithAggregationInput[]
    by: PasswordHistoryScalarFieldEnum[] | PasswordHistoryScalarFieldEnum
    having?: PasswordHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordHistoryCountAggregateInputType | true
    _min?: PasswordHistoryMinAggregateInputType
    _max?: PasswordHistoryMaxAggregateInputType
  }

  export type PasswordHistoryGroupByOutputType = {
    id: string
    userId: string
    password: string
    createdAt: Date
    updatedAt: Date | null
    _count: PasswordHistoryCountAggregateOutputType | null
    _min: PasswordHistoryMinAggregateOutputType | null
    _max: PasswordHistoryMaxAggregateOutputType | null
  }

  type GetPasswordHistoryGroupByPayload<T extends PasswordHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PasswordHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordHistory"]>

  export type PasswordHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordHistory"]>

  export type PasswordHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordHistory"]>

  export type PasswordHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PasswordHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["passwordHistory"]>
  export type PasswordHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      password: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["passwordHistory"]>
    composites: {}
  }

  type PasswordHistoryGetPayload<S extends boolean | null | undefined | PasswordHistoryDefaultArgs> = $Result.GetResult<Prisma.$PasswordHistoryPayload, S>

  type PasswordHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordHistoryCountAggregateInputType | true
    }

  export interface PasswordHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordHistory'], meta: { name: 'PasswordHistory' } }
    /**
     * Find zero or one PasswordHistory that matches the filter.
     * @param {PasswordHistoryFindUniqueArgs} args - Arguments to find a PasswordHistory
     * @example
     * // Get one PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordHistoryFindUniqueArgs>(args: SelectSubset<T, PasswordHistoryFindUniqueArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordHistoryFindUniqueOrThrowArgs} args - Arguments to find a PasswordHistory
     * @example
     * // Get one PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryFindFirstArgs} args - Arguments to find a PasswordHistory
     * @example
     * // Get one PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordHistoryFindFirstArgs>(args?: SelectSubset<T, PasswordHistoryFindFirstArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryFindFirstOrThrowArgs} args - Arguments to find a PasswordHistory
     * @example
     * // Get one PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordHistories
     * const passwordHistories = await prisma.passwordHistory.findMany()
     * 
     * // Get first 10 PasswordHistories
     * const passwordHistories = await prisma.passwordHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordHistoryWithIdOnly = await prisma.passwordHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordHistoryFindManyArgs>(args?: SelectSubset<T, PasswordHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordHistory.
     * @param {PasswordHistoryCreateArgs} args - Arguments to create a PasswordHistory.
     * @example
     * // Create one PasswordHistory
     * const PasswordHistory = await prisma.passwordHistory.create({
     *   data: {
     *     // ... data to create a PasswordHistory
     *   }
     * })
     * 
     */
    create<T extends PasswordHistoryCreateArgs>(args: SelectSubset<T, PasswordHistoryCreateArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordHistories.
     * @param {PasswordHistoryCreateManyArgs} args - Arguments to create many PasswordHistories.
     * @example
     * // Create many PasswordHistories
     * const passwordHistory = await prisma.passwordHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordHistoryCreateManyArgs>(args?: SelectSubset<T, PasswordHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordHistories and returns the data saved in the database.
     * @param {PasswordHistoryCreateManyAndReturnArgs} args - Arguments to create many PasswordHistories.
     * @example
     * // Create many PasswordHistories
     * const passwordHistory = await prisma.passwordHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordHistories and only return the `id`
     * const passwordHistoryWithIdOnly = await prisma.passwordHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordHistory.
     * @param {PasswordHistoryDeleteArgs} args - Arguments to delete one PasswordHistory.
     * @example
     * // Delete one PasswordHistory
     * const PasswordHistory = await prisma.passwordHistory.delete({
     *   where: {
     *     // ... filter to delete one PasswordHistory
     *   }
     * })
     * 
     */
    delete<T extends PasswordHistoryDeleteArgs>(args: SelectSubset<T, PasswordHistoryDeleteArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordHistory.
     * @param {PasswordHistoryUpdateArgs} args - Arguments to update one PasswordHistory.
     * @example
     * // Update one PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordHistoryUpdateArgs>(args: SelectSubset<T, PasswordHistoryUpdateArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordHistories.
     * @param {PasswordHistoryDeleteManyArgs} args - Arguments to filter PasswordHistories to delete.
     * @example
     * // Delete a few PasswordHistories
     * const { count } = await prisma.passwordHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordHistoryDeleteManyArgs>(args?: SelectSubset<T, PasswordHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordHistories
     * const passwordHistory = await prisma.passwordHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordHistoryUpdateManyArgs>(args: SelectSubset<T, PasswordHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordHistories and returns the data updated in the database.
     * @param {PasswordHistoryUpdateManyAndReturnArgs} args - Arguments to update many PasswordHistories.
     * @example
     * // Update many PasswordHistories
     * const passwordHistory = await prisma.passwordHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordHistories and only return the `id`
     * const passwordHistoryWithIdOnly = await prisma.passwordHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordHistory.
     * @param {PasswordHistoryUpsertArgs} args - Arguments to update or create a PasswordHistory.
     * @example
     * // Update or create a PasswordHistory
     * const passwordHistory = await prisma.passwordHistory.upsert({
     *   create: {
     *     // ... data to create a PasswordHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordHistory we want to update
     *   }
     * })
     */
    upsert<T extends PasswordHistoryUpsertArgs>(args: SelectSubset<T, PasswordHistoryUpsertArgs<ExtArgs>>): Prisma__PasswordHistoryClient<$Result.GetResult<Prisma.$PasswordHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryCountArgs} args - Arguments to filter PasswordHistories to count.
     * @example
     * // Count the number of PasswordHistories
     * const count = await prisma.passwordHistory.count({
     *   where: {
     *     // ... the filter for the PasswordHistories we want to count
     *   }
     * })
    **/
    count<T extends PasswordHistoryCountArgs>(
      args?: Subset<T, PasswordHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordHistoryAggregateArgs>(args: Subset<T, PasswordHistoryAggregateArgs>): Prisma.PrismaPromise<GetPasswordHistoryAggregateType<T>>

    /**
     * Group by PasswordHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PasswordHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordHistory model
   */
  readonly fields: PasswordHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordHistory model
   */
  interface PasswordHistoryFieldRefs {
    readonly id: FieldRef<"PasswordHistory", 'String'>
    readonly userId: FieldRef<"PasswordHistory", 'String'>
    readonly password: FieldRef<"PasswordHistory", 'String'>
    readonly createdAt: FieldRef<"PasswordHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"PasswordHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordHistory findUnique
   */
  export type PasswordHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordHistory to fetch.
     */
    where: PasswordHistoryWhereUniqueInput
  }

  /**
   * PasswordHistory findUniqueOrThrow
   */
  export type PasswordHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordHistory to fetch.
     */
    where: PasswordHistoryWhereUniqueInput
  }

  /**
   * PasswordHistory findFirst
   */
  export type PasswordHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordHistory to fetch.
     */
    where?: PasswordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordHistories to fetch.
     */
    orderBy?: PasswordHistoryOrderByWithRelationInput | PasswordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordHistories.
     */
    cursor?: PasswordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordHistories.
     */
    distinct?: PasswordHistoryScalarFieldEnum | PasswordHistoryScalarFieldEnum[]
  }

  /**
   * PasswordHistory findFirstOrThrow
   */
  export type PasswordHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordHistory to fetch.
     */
    where?: PasswordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordHistories to fetch.
     */
    orderBy?: PasswordHistoryOrderByWithRelationInput | PasswordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordHistories.
     */
    cursor?: PasswordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordHistories.
     */
    distinct?: PasswordHistoryScalarFieldEnum | PasswordHistoryScalarFieldEnum[]
  }

  /**
   * PasswordHistory findMany
   */
  export type PasswordHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PasswordHistories to fetch.
     */
    where?: PasswordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordHistories to fetch.
     */
    orderBy?: PasswordHistoryOrderByWithRelationInput | PasswordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordHistories.
     */
    cursor?: PasswordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordHistories.
     */
    skip?: number
    distinct?: PasswordHistoryScalarFieldEnum | PasswordHistoryScalarFieldEnum[]
  }

  /**
   * PasswordHistory create
   */
  export type PasswordHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordHistory.
     */
    data: XOR<PasswordHistoryCreateInput, PasswordHistoryUncheckedCreateInput>
  }

  /**
   * PasswordHistory createMany
   */
  export type PasswordHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordHistories.
     */
    data: PasswordHistoryCreateManyInput | PasswordHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordHistory createManyAndReturn
   */
  export type PasswordHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordHistories.
     */
    data: PasswordHistoryCreateManyInput | PasswordHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordHistory update
   */
  export type PasswordHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordHistory.
     */
    data: XOR<PasswordHistoryUpdateInput, PasswordHistoryUncheckedUpdateInput>
    /**
     * Choose, which PasswordHistory to update.
     */
    where: PasswordHistoryWhereUniqueInput
  }

  /**
   * PasswordHistory updateMany
   */
  export type PasswordHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordHistories.
     */
    data: XOR<PasswordHistoryUpdateManyMutationInput, PasswordHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PasswordHistories to update
     */
    where?: PasswordHistoryWhereInput
    /**
     * Limit how many PasswordHistories to update.
     */
    limit?: number
  }

  /**
   * PasswordHistory updateManyAndReturn
   */
  export type PasswordHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PasswordHistories.
     */
    data: XOR<PasswordHistoryUpdateManyMutationInput, PasswordHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PasswordHistories to update
     */
    where?: PasswordHistoryWhereInput
    /**
     * Limit how many PasswordHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordHistory upsert
   */
  export type PasswordHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordHistory to update in case it exists.
     */
    where: PasswordHistoryWhereUniqueInput
    /**
     * In case the PasswordHistory found by the `where` argument doesn't exist, create a new PasswordHistory with this data.
     */
    create: XOR<PasswordHistoryCreateInput, PasswordHistoryUncheckedCreateInput>
    /**
     * In case the PasswordHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordHistoryUpdateInput, PasswordHistoryUncheckedUpdateInput>
  }

  /**
   * PasswordHistory delete
   */
  export type PasswordHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
    /**
     * Filter which PasswordHistory to delete.
     */
    where: PasswordHistoryWhereUniqueInput
  }

  /**
   * PasswordHistory deleteMany
   */
  export type PasswordHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordHistories to delete
     */
    where?: PasswordHistoryWhereInput
    /**
     * Limit how many PasswordHistories to delete.
     */
    limit?: number
  }

  /**
   * PasswordHistory without action
   */
  export type PasswordHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordHistory
     */
    select?: PasswordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordHistory
     */
    omit?: PasswordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PersonalAccessToken
   */

  export type AggregatePersonalAccessToken = {
    _count: PersonalAccessTokenCountAggregateOutputType | null
    _min: PersonalAccessTokenMinAggregateOutputType | null
    _max: PersonalAccessTokenMaxAggregateOutputType | null
  }

  export type PersonalAccessTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PersonalAccessTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PersonalAccessTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    type: number
    expiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PersonalAccessTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PersonalAccessTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PersonalAccessTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    type?: true
    expiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PersonalAccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalAccessToken to aggregate.
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAccessTokens to fetch.
     */
    orderBy?: PersonalAccessTokenOrderByWithRelationInput | PersonalAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalAccessTokens
    **/
    _count?: true | PersonalAccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalAccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalAccessTokenMaxAggregateInputType
  }

  export type GetPersonalAccessTokenAggregateType<T extends PersonalAccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalAccessToken[P]>
      : GetScalarType<T[P], AggregatePersonalAccessToken[P]>
  }




  export type PersonalAccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalAccessTokenWhereInput
    orderBy?: PersonalAccessTokenOrderByWithAggregationInput | PersonalAccessTokenOrderByWithAggregationInput[]
    by: PersonalAccessTokenScalarFieldEnum[] | PersonalAccessTokenScalarFieldEnum
    having?: PersonalAccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalAccessTokenCountAggregateInputType | true
    _min?: PersonalAccessTokenMinAggregateInputType
    _max?: PersonalAccessTokenMaxAggregateInputType
  }

  export type PersonalAccessTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    type: $Enums.TokenType
    expiry: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PersonalAccessTokenCountAggregateOutputType | null
    _min: PersonalAccessTokenMinAggregateOutputType | null
    _max: PersonalAccessTokenMaxAggregateOutputType | null
  }

  type GetPersonalAccessTokenGroupByPayload<T extends PersonalAccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalAccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalAccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalAccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalAccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type PersonalAccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalAccessToken"]>

  export type PersonalAccessTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalAccessToken"]>

  export type PersonalAccessTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalAccessToken"]>

  export type PersonalAccessTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    type?: boolean
    expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PersonalAccessTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "type" | "expiry" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["personalAccessToken"]>
  export type PersonalAccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalAccessTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PersonalAccessTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PersonalAccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalAccessToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      type: $Enums.TokenType
      expiry: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["personalAccessToken"]>
    composites: {}
  }

  type PersonalAccessTokenGetPayload<S extends boolean | null | undefined | PersonalAccessTokenDefaultArgs> = $Result.GetResult<Prisma.$PersonalAccessTokenPayload, S>

  type PersonalAccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalAccessTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalAccessTokenCountAggregateInputType | true
    }

  export interface PersonalAccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalAccessToken'], meta: { name: 'PersonalAccessToken' } }
    /**
     * Find zero or one PersonalAccessToken that matches the filter.
     * @param {PersonalAccessTokenFindUniqueArgs} args - Arguments to find a PersonalAccessToken
     * @example
     * // Get one PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalAccessTokenFindUniqueArgs>(args: SelectSubset<T, PersonalAccessTokenFindUniqueArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalAccessToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalAccessTokenFindUniqueOrThrowArgs} args - Arguments to find a PersonalAccessToken
     * @example
     * // Get one PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalAccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalAccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalAccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenFindFirstArgs} args - Arguments to find a PersonalAccessToken
     * @example
     * // Get one PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalAccessTokenFindFirstArgs>(args?: SelectSubset<T, PersonalAccessTokenFindFirstArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalAccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenFindFirstOrThrowArgs} args - Arguments to find a PersonalAccessToken
     * @example
     * // Get one PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalAccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalAccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalAccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalAccessTokens
     * const personalAccessTokens = await prisma.personalAccessToken.findMany()
     * 
     * // Get first 10 PersonalAccessTokens
     * const personalAccessTokens = await prisma.personalAccessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalAccessTokenWithIdOnly = await prisma.personalAccessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalAccessTokenFindManyArgs>(args?: SelectSubset<T, PersonalAccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalAccessToken.
     * @param {PersonalAccessTokenCreateArgs} args - Arguments to create a PersonalAccessToken.
     * @example
     * // Create one PersonalAccessToken
     * const PersonalAccessToken = await prisma.personalAccessToken.create({
     *   data: {
     *     // ... data to create a PersonalAccessToken
     *   }
     * })
     * 
     */
    create<T extends PersonalAccessTokenCreateArgs>(args: SelectSubset<T, PersonalAccessTokenCreateArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalAccessTokens.
     * @param {PersonalAccessTokenCreateManyArgs} args - Arguments to create many PersonalAccessTokens.
     * @example
     * // Create many PersonalAccessTokens
     * const personalAccessToken = await prisma.personalAccessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalAccessTokenCreateManyArgs>(args?: SelectSubset<T, PersonalAccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalAccessTokens and returns the data saved in the database.
     * @param {PersonalAccessTokenCreateManyAndReturnArgs} args - Arguments to create many PersonalAccessTokens.
     * @example
     * // Create many PersonalAccessTokens
     * const personalAccessToken = await prisma.personalAccessToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalAccessTokens and only return the `id`
     * const personalAccessTokenWithIdOnly = await prisma.personalAccessToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalAccessTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalAccessTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PersonalAccessToken.
     * @param {PersonalAccessTokenDeleteArgs} args - Arguments to delete one PersonalAccessToken.
     * @example
     * // Delete one PersonalAccessToken
     * const PersonalAccessToken = await prisma.personalAccessToken.delete({
     *   where: {
     *     // ... filter to delete one PersonalAccessToken
     *   }
     * })
     * 
     */
    delete<T extends PersonalAccessTokenDeleteArgs>(args: SelectSubset<T, PersonalAccessTokenDeleteArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalAccessToken.
     * @param {PersonalAccessTokenUpdateArgs} args - Arguments to update one PersonalAccessToken.
     * @example
     * // Update one PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalAccessTokenUpdateArgs>(args: SelectSubset<T, PersonalAccessTokenUpdateArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalAccessTokens.
     * @param {PersonalAccessTokenDeleteManyArgs} args - Arguments to filter PersonalAccessTokens to delete.
     * @example
     * // Delete a few PersonalAccessTokens
     * const { count } = await prisma.personalAccessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalAccessTokenDeleteManyArgs>(args?: SelectSubset<T, PersonalAccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalAccessTokens
     * const personalAccessToken = await prisma.personalAccessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalAccessTokenUpdateManyArgs>(args: SelectSubset<T, PersonalAccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalAccessTokens and returns the data updated in the database.
     * @param {PersonalAccessTokenUpdateManyAndReturnArgs} args - Arguments to update many PersonalAccessTokens.
     * @example
     * // Update many PersonalAccessTokens
     * const personalAccessToken = await prisma.personalAccessToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalAccessTokens and only return the `id`
     * const personalAccessTokenWithIdOnly = await prisma.personalAccessToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalAccessTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalAccessTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PersonalAccessToken.
     * @param {PersonalAccessTokenUpsertArgs} args - Arguments to update or create a PersonalAccessToken.
     * @example
     * // Update or create a PersonalAccessToken
     * const personalAccessToken = await prisma.personalAccessToken.upsert({
     *   create: {
     *     // ... data to create a PersonalAccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalAccessToken we want to update
     *   }
     * })
     */
    upsert<T extends PersonalAccessTokenUpsertArgs>(args: SelectSubset<T, PersonalAccessTokenUpsertArgs<ExtArgs>>): Prisma__PersonalAccessTokenClient<$Result.GetResult<Prisma.$PersonalAccessTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenCountArgs} args - Arguments to filter PersonalAccessTokens to count.
     * @example
     * // Count the number of PersonalAccessTokens
     * const count = await prisma.personalAccessToken.count({
     *   where: {
     *     // ... the filter for the PersonalAccessTokens we want to count
     *   }
     * })
    **/
    count<T extends PersonalAccessTokenCountArgs>(
      args?: Subset<T, PersonalAccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalAccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalAccessTokenAggregateArgs>(args: Subset<T, PersonalAccessTokenAggregateArgs>): Prisma.PrismaPromise<GetPersonalAccessTokenAggregateType<T>>

    /**
     * Group by PersonalAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalAccessTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalAccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalAccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: PersonalAccessTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalAccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalAccessToken model
   */
  readonly fields: PersonalAccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalAccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalAccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalAccessToken model
   */
  interface PersonalAccessTokenFieldRefs {
    readonly id: FieldRef<"PersonalAccessToken", 'String'>
    readonly userId: FieldRef<"PersonalAccessToken", 'String'>
    readonly token: FieldRef<"PersonalAccessToken", 'String'>
    readonly type: FieldRef<"PersonalAccessToken", 'TokenType'>
    readonly expiry: FieldRef<"PersonalAccessToken", 'DateTime'>
    readonly createdAt: FieldRef<"PersonalAccessToken", 'DateTime'>
    readonly updatedAt: FieldRef<"PersonalAccessToken", 'DateTime'>
    readonly deletedAt: FieldRef<"PersonalAccessToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PersonalAccessToken findUnique
   */
  export type PersonalAccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAccessToken to fetch.
     */
    where: PersonalAccessTokenWhereUniqueInput
  }

  /**
   * PersonalAccessToken findUniqueOrThrow
   */
  export type PersonalAccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAccessToken to fetch.
     */
    where: PersonalAccessTokenWhereUniqueInput
  }

  /**
   * PersonalAccessToken findFirst
   */
  export type PersonalAccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAccessToken to fetch.
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAccessTokens to fetch.
     */
    orderBy?: PersonalAccessTokenOrderByWithRelationInput | PersonalAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalAccessTokens.
     */
    cursor?: PersonalAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalAccessTokens.
     */
    distinct?: PersonalAccessTokenScalarFieldEnum | PersonalAccessTokenScalarFieldEnum[]
  }

  /**
   * PersonalAccessToken findFirstOrThrow
   */
  export type PersonalAccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAccessToken to fetch.
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAccessTokens to fetch.
     */
    orderBy?: PersonalAccessTokenOrderByWithRelationInput | PersonalAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalAccessTokens.
     */
    cursor?: PersonalAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalAccessTokens.
     */
    distinct?: PersonalAccessTokenScalarFieldEnum | PersonalAccessTokenScalarFieldEnum[]
  }

  /**
   * PersonalAccessToken findMany
   */
  export type PersonalAccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which PersonalAccessTokens to fetch.
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalAccessTokens to fetch.
     */
    orderBy?: PersonalAccessTokenOrderByWithRelationInput | PersonalAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalAccessTokens.
     */
    cursor?: PersonalAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalAccessTokens.
     */
    skip?: number
    distinct?: PersonalAccessTokenScalarFieldEnum | PersonalAccessTokenScalarFieldEnum[]
  }

  /**
   * PersonalAccessToken create
   */
  export type PersonalAccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalAccessToken.
     */
    data: XOR<PersonalAccessTokenCreateInput, PersonalAccessTokenUncheckedCreateInput>
  }

  /**
   * PersonalAccessToken createMany
   */
  export type PersonalAccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalAccessTokens.
     */
    data: PersonalAccessTokenCreateManyInput | PersonalAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalAccessToken createManyAndReturn
   */
  export type PersonalAccessTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalAccessTokens.
     */
    data: PersonalAccessTokenCreateManyInput | PersonalAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalAccessToken update
   */
  export type PersonalAccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalAccessToken.
     */
    data: XOR<PersonalAccessTokenUpdateInput, PersonalAccessTokenUncheckedUpdateInput>
    /**
     * Choose, which PersonalAccessToken to update.
     */
    where: PersonalAccessTokenWhereUniqueInput
  }

  /**
   * PersonalAccessToken updateMany
   */
  export type PersonalAccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalAccessTokens.
     */
    data: XOR<PersonalAccessTokenUpdateManyMutationInput, PersonalAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which PersonalAccessTokens to update
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * Limit how many PersonalAccessTokens to update.
     */
    limit?: number
  }

  /**
   * PersonalAccessToken updateManyAndReturn
   */
  export type PersonalAccessTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to update PersonalAccessTokens.
     */
    data: XOR<PersonalAccessTokenUpdateManyMutationInput, PersonalAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which PersonalAccessTokens to update
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * Limit how many PersonalAccessTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PersonalAccessToken upsert
   */
  export type PersonalAccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalAccessToken to update in case it exists.
     */
    where: PersonalAccessTokenWhereUniqueInput
    /**
     * In case the PersonalAccessToken found by the `where` argument doesn't exist, create a new PersonalAccessToken with this data.
     */
    create: XOR<PersonalAccessTokenCreateInput, PersonalAccessTokenUncheckedCreateInput>
    /**
     * In case the PersonalAccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalAccessTokenUpdateInput, PersonalAccessTokenUncheckedUpdateInput>
  }

  /**
   * PersonalAccessToken delete
   */
  export type PersonalAccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
    /**
     * Filter which PersonalAccessToken to delete.
     */
    where: PersonalAccessTokenWhereUniqueInput
  }

  /**
   * PersonalAccessToken deleteMany
   */
  export type PersonalAccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalAccessTokens to delete
     */
    where?: PersonalAccessTokenWhereInput
    /**
     * Limit how many PersonalAccessTokens to delete.
     */
    limit?: number
  }

  /**
   * PersonalAccessToken without action
   */
  export type PersonalAccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalAccessToken
     */
    select?: PersonalAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalAccessToken
     */
    omit?: PersonalAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalAccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    department: string | null
    createdAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    department: string | null
    createdAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    department: number
    createdAt: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    department?: true
    createdAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    department?: true
    createdAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    department?: true
    createdAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    department: string | null
    createdAt: Date
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    department?: boolean
    createdAt?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "department" | "createdAt", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      department: string | null
      createdAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly department: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    type: $Enums.AddressType | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    type: $Enums.AddressType | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    city: number
    state: number
    country: number
    postalCode: number
    type: number
    userId: number
    createdAt: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    type?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string | null
    type: $Enums.AddressType
    userId: string | null
    createdAt: Date
    updatedAt: Date
    updatedBy: string | null
    deletedAt: Date | null
    deletedBy: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    type?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "city" | "state" | "country" | "postalCode" | "type" | "userId" | "createdAt" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      street: string
      city: string
      state: string
      country: string
      postalCode: string | null
      type: $Enums.AddressType
      userId: string | null
      createdAt: Date
      updatedAt: Date
      updatedBy: string | null
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Address$userArgs<ExtArgs> = {}>(args?: Subset<T, Address$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly type: FieldRef<"Address", 'AddressType'>
    readonly userId: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly updatedBy: FieldRef<"Address", 'String'>
    readonly deletedAt: FieldRef<"Address", 'DateTime'>
    readonly deletedBy: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.user
   */
  export type Address$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    nfcId: string | null
    nfcLinkedAt: Date | null
    nfcLinkedBy: string | null
    dateOfBirth: Date | null
    sex: $Enums.Gender | null
    maritalStatus: $Enums.MaritalStatus | null
    nationality: string | null
    occupation: string | null
    religion: string | null
    ethnicity: string | null
    bloodGroup: $Enums.BloodGroup | null
    genotype: $Enums.Genotype | null
    emergencyContactId: string | null
    billingtype: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    nfcId: string | null
    nfcLinkedAt: Date | null
    nfcLinkedBy: string | null
    dateOfBirth: Date | null
    sex: $Enums.Gender | null
    maritalStatus: $Enums.MaritalStatus | null
    nationality: string | null
    occupation: string | null
    religion: string | null
    ethnicity: string | null
    bloodGroup: $Enums.BloodGroup | null
    genotype: $Enums.Genotype | null
    emergencyContactId: string | null
    billingtype: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    patientId: number
    nfcId: number
    nfcLinkedAt: number
    nfcLinkedBy: number
    dateOfBirth: number
    sex: number
    maritalStatus: number
    nationality: number
    occupation: number
    religion: number
    ethnicity: number
    spokenLanguages: number
    bloodGroup: number
    genotype: number
    emergencyContactId: number
    billingtype: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    patientId?: true
    nfcId?: true
    nfcLinkedAt?: true
    nfcLinkedBy?: true
    dateOfBirth?: true
    sex?: true
    maritalStatus?: true
    nationality?: true
    occupation?: true
    religion?: true
    ethnicity?: true
    bloodGroup?: true
    genotype?: true
    emergencyContactId?: true
    billingtype?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    patientId?: true
    nfcId?: true
    nfcLinkedAt?: true
    nfcLinkedBy?: true
    dateOfBirth?: true
    sex?: true
    maritalStatus?: true
    nationality?: true
    occupation?: true
    religion?: true
    ethnicity?: true
    bloodGroup?: true
    genotype?: true
    emergencyContactId?: true
    billingtype?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    patientId?: true
    nfcId?: true
    nfcLinkedAt?: true
    nfcLinkedBy?: true
    dateOfBirth?: true
    sex?: true
    maritalStatus?: true
    nationality?: true
    occupation?: true
    religion?: true
    ethnicity?: true
    spokenLanguages?: true
    bloodGroup?: true
    genotype?: true
    emergencyContactId?: true
    billingtype?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    patientId: string
    nfcId: string | null
    nfcLinkedAt: Date | null
    nfcLinkedBy: string | null
    dateOfBirth: Date
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality: string | null
    occupation: string | null
    religion: string | null
    ethnicity: string | null
    spokenLanguages: string[]
    bloodGroup: $Enums.BloodGroup | null
    genotype: $Enums.Genotype | null
    emergencyContactId: string
    billingtype: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nfcId?: boolean
    nfcLinkedAt?: boolean
    nfcLinkedBy?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    occupation?: boolean
    religion?: boolean
    ethnicity?: boolean
    spokenLanguages?: boolean
    bloodGroup?: boolean
    genotype?: boolean
    emergencyContactId?: boolean
    billingtype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emergencyContact?: boolean | Patient$emergencyContactArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nfcId?: boolean
    nfcLinkedAt?: boolean
    nfcLinkedBy?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    occupation?: boolean
    religion?: boolean
    ethnicity?: boolean
    spokenLanguages?: boolean
    bloodGroup?: boolean
    genotype?: boolean
    emergencyContactId?: boolean
    billingtype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nfcId?: boolean
    nfcLinkedAt?: boolean
    nfcLinkedBy?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    occupation?: boolean
    religion?: boolean
    ethnicity?: boolean
    spokenLanguages?: boolean
    bloodGroup?: boolean
    genotype?: boolean
    emergencyContactId?: boolean
    billingtype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    patientId?: boolean
    nfcId?: boolean
    nfcLinkedAt?: boolean
    nfcLinkedBy?: boolean
    dateOfBirth?: boolean
    sex?: boolean
    maritalStatus?: boolean
    nationality?: boolean
    occupation?: boolean
    religion?: boolean
    ethnicity?: boolean
    spokenLanguages?: boolean
    bloodGroup?: boolean
    genotype?: boolean
    emergencyContactId?: boolean
    billingtype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "nfcId" | "nfcLinkedAt" | "nfcLinkedBy" | "dateOfBirth" | "sex" | "maritalStatus" | "nationality" | "occupation" | "religion" | "ethnicity" | "spokenLanguages" | "bloodGroup" | "genotype" | "emergencyContactId" | "billingtype" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emergencyContact?: boolean | Patient$emergencyContactArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emergencyContact: Prisma.$NextOfKinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      nfcId: string | null
      nfcLinkedAt: Date | null
      nfcLinkedBy: string | null
      dateOfBirth: Date
      sex: $Enums.Gender
      maritalStatus: $Enums.MaritalStatus
      nationality: string | null
      occupation: string | null
      religion: string | null
      ethnicity: string | null
      spokenLanguages: string[]
      bloodGroup: $Enums.BloodGroup | null
      genotype: $Enums.Genotype | null
      emergencyContactId: string
      billingtype: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emergencyContact<T extends Patient$emergencyContactArgs<ExtArgs> = {}>(args?: Subset<T, Patient$emergencyContactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly patientId: FieldRef<"Patient", 'String'>
    readonly nfcId: FieldRef<"Patient", 'String'>
    readonly nfcLinkedAt: FieldRef<"Patient", 'DateTime'>
    readonly nfcLinkedBy: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly sex: FieldRef<"Patient", 'Gender'>
    readonly maritalStatus: FieldRef<"Patient", 'MaritalStatus'>
    readonly nationality: FieldRef<"Patient", 'String'>
    readonly occupation: FieldRef<"Patient", 'String'>
    readonly religion: FieldRef<"Patient", 'String'>
    readonly ethnicity: FieldRef<"Patient", 'String'>
    readonly spokenLanguages: FieldRef<"Patient", 'String[]'>
    readonly bloodGroup: FieldRef<"Patient", 'BloodGroup'>
    readonly genotype: FieldRef<"Patient", 'Genotype'>
    readonly emergencyContactId: FieldRef<"Patient", 'String'>
    readonly billingtype: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.emergencyContact
   */
  export type Patient$emergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    where?: NextOfKinWhereInput
    orderBy?: NextOfKinOrderByWithRelationInput | NextOfKinOrderByWithRelationInput[]
    cursor?: NextOfKinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NextOfKinScalarFieldEnum | NextOfKinScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model NextOfKin
   */

  export type AggregateNextOfKin = {
    _count: NextOfKinCountAggregateOutputType | null
    _min: NextOfKinMinAggregateOutputType | null
    _max: NextOfKinMaxAggregateOutputType | null
  }

  export type NextOfKinMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    relationship: string | null
    email: string | null
    address: string | null
    isEmergencyContact: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextOfKinMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    relationship: string | null
    email: string | null
    address: string | null
    isEmergencyContact: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NextOfKinCountAggregateOutputType = {
    id: number
    patientId: number
    firstName: number
    middleName: number
    lastName: number
    relationship: number
    phone: number
    email: number
    address: number
    isEmergencyContact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NextOfKinMinAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    relationship?: true
    email?: true
    address?: true
    isEmergencyContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextOfKinMaxAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    relationship?: true
    email?: true
    address?: true
    isEmergencyContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NextOfKinCountAggregateInputType = {
    id?: true
    patientId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    relationship?: true
    phone?: true
    email?: true
    address?: true
    isEmergencyContact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NextOfKinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextOfKin to aggregate.
     */
    where?: NextOfKinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextOfKins to fetch.
     */
    orderBy?: NextOfKinOrderByWithRelationInput | NextOfKinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NextOfKinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextOfKins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextOfKins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NextOfKins
    **/
    _count?: true | NextOfKinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NextOfKinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NextOfKinMaxAggregateInputType
  }

  export type GetNextOfKinAggregateType<T extends NextOfKinAggregateArgs> = {
        [P in keyof T & keyof AggregateNextOfKin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNextOfKin[P]>
      : GetScalarType<T[P], AggregateNextOfKin[P]>
  }




  export type NextOfKinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NextOfKinWhereInput
    orderBy?: NextOfKinOrderByWithAggregationInput | NextOfKinOrderByWithAggregationInput[]
    by: NextOfKinScalarFieldEnum[] | NextOfKinScalarFieldEnum
    having?: NextOfKinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NextOfKinCountAggregateInputType | true
    _min?: NextOfKinMinAggregateInputType
    _max?: NextOfKinMaxAggregateInputType
  }

  export type NextOfKinGroupByOutputType = {
    id: string
    patientId: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone: string[]
    email: string | null
    address: string | null
    isEmergencyContact: boolean
    createdAt: Date
    updatedAt: Date
    _count: NextOfKinCountAggregateOutputType | null
    _min: NextOfKinMinAggregateOutputType | null
    _max: NextOfKinMaxAggregateOutputType | null
  }

  type GetNextOfKinGroupByPayload<T extends NextOfKinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NextOfKinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NextOfKinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NextOfKinGroupByOutputType[P]>
            : GetScalarType<T[P], NextOfKinGroupByOutputType[P]>
        }
      >
    >


  export type NextOfKinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    relationship?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isEmergencyContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nextOfKin"]>

  export type NextOfKinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    relationship?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isEmergencyContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nextOfKin"]>

  export type NextOfKinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    relationship?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isEmergencyContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nextOfKin"]>

  export type NextOfKinSelectScalar = {
    id?: boolean
    patientId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    relationship?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    isEmergencyContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NextOfKinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "firstName" | "middleName" | "lastName" | "relationship" | "phone" | "email" | "address" | "isEmergencyContact" | "createdAt" | "updatedAt", ExtArgs["result"]["nextOfKin"]>
  export type NextOfKinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type NextOfKinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type NextOfKinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $NextOfKinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NextOfKin"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      firstName: string
      middleName: string
      lastName: string
      relationship: string
      phone: string[]
      email: string | null
      address: string | null
      isEmergencyContact: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nextOfKin"]>
    composites: {}
  }

  type NextOfKinGetPayload<S extends boolean | null | undefined | NextOfKinDefaultArgs> = $Result.GetResult<Prisma.$NextOfKinPayload, S>

  type NextOfKinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NextOfKinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NextOfKinCountAggregateInputType | true
    }

  export interface NextOfKinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NextOfKin'], meta: { name: 'NextOfKin' } }
    /**
     * Find zero or one NextOfKin that matches the filter.
     * @param {NextOfKinFindUniqueArgs} args - Arguments to find a NextOfKin
     * @example
     * // Get one NextOfKin
     * const nextOfKin = await prisma.nextOfKin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NextOfKinFindUniqueArgs>(args: SelectSubset<T, NextOfKinFindUniqueArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NextOfKin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NextOfKinFindUniqueOrThrowArgs} args - Arguments to find a NextOfKin
     * @example
     * // Get one NextOfKin
     * const nextOfKin = await prisma.nextOfKin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NextOfKinFindUniqueOrThrowArgs>(args: SelectSubset<T, NextOfKinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextOfKin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinFindFirstArgs} args - Arguments to find a NextOfKin
     * @example
     * // Get one NextOfKin
     * const nextOfKin = await prisma.nextOfKin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NextOfKinFindFirstArgs>(args?: SelectSubset<T, NextOfKinFindFirstArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NextOfKin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinFindFirstOrThrowArgs} args - Arguments to find a NextOfKin
     * @example
     * // Get one NextOfKin
     * const nextOfKin = await prisma.nextOfKin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NextOfKinFindFirstOrThrowArgs>(args?: SelectSubset<T, NextOfKinFindFirstOrThrowArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NextOfKins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NextOfKins
     * const nextOfKins = await prisma.nextOfKin.findMany()
     * 
     * // Get first 10 NextOfKins
     * const nextOfKins = await prisma.nextOfKin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nextOfKinWithIdOnly = await prisma.nextOfKin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NextOfKinFindManyArgs>(args?: SelectSubset<T, NextOfKinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NextOfKin.
     * @param {NextOfKinCreateArgs} args - Arguments to create a NextOfKin.
     * @example
     * // Create one NextOfKin
     * const NextOfKin = await prisma.nextOfKin.create({
     *   data: {
     *     // ... data to create a NextOfKin
     *   }
     * })
     * 
     */
    create<T extends NextOfKinCreateArgs>(args: SelectSubset<T, NextOfKinCreateArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NextOfKins.
     * @param {NextOfKinCreateManyArgs} args - Arguments to create many NextOfKins.
     * @example
     * // Create many NextOfKins
     * const nextOfKin = await prisma.nextOfKin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NextOfKinCreateManyArgs>(args?: SelectSubset<T, NextOfKinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NextOfKins and returns the data saved in the database.
     * @param {NextOfKinCreateManyAndReturnArgs} args - Arguments to create many NextOfKins.
     * @example
     * // Create many NextOfKins
     * const nextOfKin = await prisma.nextOfKin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NextOfKins and only return the `id`
     * const nextOfKinWithIdOnly = await prisma.nextOfKin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NextOfKinCreateManyAndReturnArgs>(args?: SelectSubset<T, NextOfKinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NextOfKin.
     * @param {NextOfKinDeleteArgs} args - Arguments to delete one NextOfKin.
     * @example
     * // Delete one NextOfKin
     * const NextOfKin = await prisma.nextOfKin.delete({
     *   where: {
     *     // ... filter to delete one NextOfKin
     *   }
     * })
     * 
     */
    delete<T extends NextOfKinDeleteArgs>(args: SelectSubset<T, NextOfKinDeleteArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NextOfKin.
     * @param {NextOfKinUpdateArgs} args - Arguments to update one NextOfKin.
     * @example
     * // Update one NextOfKin
     * const nextOfKin = await prisma.nextOfKin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NextOfKinUpdateArgs>(args: SelectSubset<T, NextOfKinUpdateArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NextOfKins.
     * @param {NextOfKinDeleteManyArgs} args - Arguments to filter NextOfKins to delete.
     * @example
     * // Delete a few NextOfKins
     * const { count } = await prisma.nextOfKin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NextOfKinDeleteManyArgs>(args?: SelectSubset<T, NextOfKinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextOfKins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NextOfKins
     * const nextOfKin = await prisma.nextOfKin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NextOfKinUpdateManyArgs>(args: SelectSubset<T, NextOfKinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NextOfKins and returns the data updated in the database.
     * @param {NextOfKinUpdateManyAndReturnArgs} args - Arguments to update many NextOfKins.
     * @example
     * // Update many NextOfKins
     * const nextOfKin = await prisma.nextOfKin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NextOfKins and only return the `id`
     * const nextOfKinWithIdOnly = await prisma.nextOfKin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NextOfKinUpdateManyAndReturnArgs>(args: SelectSubset<T, NextOfKinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NextOfKin.
     * @param {NextOfKinUpsertArgs} args - Arguments to update or create a NextOfKin.
     * @example
     * // Update or create a NextOfKin
     * const nextOfKin = await prisma.nextOfKin.upsert({
     *   create: {
     *     // ... data to create a NextOfKin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NextOfKin we want to update
     *   }
     * })
     */
    upsert<T extends NextOfKinUpsertArgs>(args: SelectSubset<T, NextOfKinUpsertArgs<ExtArgs>>): Prisma__NextOfKinClient<$Result.GetResult<Prisma.$NextOfKinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NextOfKins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinCountArgs} args - Arguments to filter NextOfKins to count.
     * @example
     * // Count the number of NextOfKins
     * const count = await prisma.nextOfKin.count({
     *   where: {
     *     // ... the filter for the NextOfKins we want to count
     *   }
     * })
    **/
    count<T extends NextOfKinCountArgs>(
      args?: Subset<T, NextOfKinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NextOfKinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NextOfKin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NextOfKinAggregateArgs>(args: Subset<T, NextOfKinAggregateArgs>): Prisma.PrismaPromise<GetNextOfKinAggregateType<T>>

    /**
     * Group by NextOfKin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NextOfKinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NextOfKinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NextOfKinGroupByArgs['orderBy'] }
        : { orderBy?: NextOfKinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NextOfKinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNextOfKinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NextOfKin model
   */
  readonly fields: NextOfKinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NextOfKin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NextOfKinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NextOfKin model
   */
  interface NextOfKinFieldRefs {
    readonly id: FieldRef<"NextOfKin", 'String'>
    readonly patientId: FieldRef<"NextOfKin", 'String'>
    readonly firstName: FieldRef<"NextOfKin", 'String'>
    readonly middleName: FieldRef<"NextOfKin", 'String'>
    readonly lastName: FieldRef<"NextOfKin", 'String'>
    readonly relationship: FieldRef<"NextOfKin", 'String'>
    readonly phone: FieldRef<"NextOfKin", 'String[]'>
    readonly email: FieldRef<"NextOfKin", 'String'>
    readonly address: FieldRef<"NextOfKin", 'String'>
    readonly isEmergencyContact: FieldRef<"NextOfKin", 'Boolean'>
    readonly createdAt: FieldRef<"NextOfKin", 'DateTime'>
    readonly updatedAt: FieldRef<"NextOfKin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NextOfKin findUnique
   */
  export type NextOfKinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter, which NextOfKin to fetch.
     */
    where: NextOfKinWhereUniqueInput
  }

  /**
   * NextOfKin findUniqueOrThrow
   */
  export type NextOfKinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter, which NextOfKin to fetch.
     */
    where: NextOfKinWhereUniqueInput
  }

  /**
   * NextOfKin findFirst
   */
  export type NextOfKinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter, which NextOfKin to fetch.
     */
    where?: NextOfKinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextOfKins to fetch.
     */
    orderBy?: NextOfKinOrderByWithRelationInput | NextOfKinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextOfKins.
     */
    cursor?: NextOfKinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextOfKins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextOfKins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextOfKins.
     */
    distinct?: NextOfKinScalarFieldEnum | NextOfKinScalarFieldEnum[]
  }

  /**
   * NextOfKin findFirstOrThrow
   */
  export type NextOfKinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter, which NextOfKin to fetch.
     */
    where?: NextOfKinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextOfKins to fetch.
     */
    orderBy?: NextOfKinOrderByWithRelationInput | NextOfKinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NextOfKins.
     */
    cursor?: NextOfKinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextOfKins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextOfKins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NextOfKins.
     */
    distinct?: NextOfKinScalarFieldEnum | NextOfKinScalarFieldEnum[]
  }

  /**
   * NextOfKin findMany
   */
  export type NextOfKinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter, which NextOfKins to fetch.
     */
    where?: NextOfKinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NextOfKins to fetch.
     */
    orderBy?: NextOfKinOrderByWithRelationInput | NextOfKinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NextOfKins.
     */
    cursor?: NextOfKinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NextOfKins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NextOfKins.
     */
    skip?: number
    distinct?: NextOfKinScalarFieldEnum | NextOfKinScalarFieldEnum[]
  }

  /**
   * NextOfKin create
   */
  export type NextOfKinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * The data needed to create a NextOfKin.
     */
    data: XOR<NextOfKinCreateInput, NextOfKinUncheckedCreateInput>
  }

  /**
   * NextOfKin createMany
   */
  export type NextOfKinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NextOfKins.
     */
    data: NextOfKinCreateManyInput | NextOfKinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NextOfKin createManyAndReturn
   */
  export type NextOfKinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * The data used to create many NextOfKins.
     */
    data: NextOfKinCreateManyInput | NextOfKinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NextOfKin update
   */
  export type NextOfKinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * The data needed to update a NextOfKin.
     */
    data: XOR<NextOfKinUpdateInput, NextOfKinUncheckedUpdateInput>
    /**
     * Choose, which NextOfKin to update.
     */
    where: NextOfKinWhereUniqueInput
  }

  /**
   * NextOfKin updateMany
   */
  export type NextOfKinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NextOfKins.
     */
    data: XOR<NextOfKinUpdateManyMutationInput, NextOfKinUncheckedUpdateManyInput>
    /**
     * Filter which NextOfKins to update
     */
    where?: NextOfKinWhereInput
    /**
     * Limit how many NextOfKins to update.
     */
    limit?: number
  }

  /**
   * NextOfKin updateManyAndReturn
   */
  export type NextOfKinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * The data used to update NextOfKins.
     */
    data: XOR<NextOfKinUpdateManyMutationInput, NextOfKinUncheckedUpdateManyInput>
    /**
     * Filter which NextOfKins to update
     */
    where?: NextOfKinWhereInput
    /**
     * Limit how many NextOfKins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NextOfKin upsert
   */
  export type NextOfKinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * The filter to search for the NextOfKin to update in case it exists.
     */
    where: NextOfKinWhereUniqueInput
    /**
     * In case the NextOfKin found by the `where` argument doesn't exist, create a new NextOfKin with this data.
     */
    create: XOR<NextOfKinCreateInput, NextOfKinUncheckedCreateInput>
    /**
     * In case the NextOfKin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NextOfKinUpdateInput, NextOfKinUncheckedUpdateInput>
  }

  /**
   * NextOfKin delete
   */
  export type NextOfKinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
    /**
     * Filter which NextOfKin to delete.
     */
    where: NextOfKinWhereUniqueInput
  }

  /**
   * NextOfKin deleteMany
   */
  export type NextOfKinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NextOfKins to delete
     */
    where?: NextOfKinWhereInput
    /**
     * Limit how many NextOfKins to delete.
     */
    limit?: number
  }

  /**
   * NextOfKin without action
   */
  export type NextOfKinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NextOfKin
     */
    select?: NextOfKinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NextOfKin
     */
    omit?: NextOfKinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NextOfKinInclude<ExtArgs> | null
  }


  /**
   * Model NHISWorker
   */

  export type AggregateNHISWorker = {
    _count: NHISWorkerCountAggregateOutputType | null
    _min: NHISWorkerMinAggregateOutputType | null
    _max: NHISWorkerMaxAggregateOutputType | null
  }

  export type NHISWorkerMinAggregateOutputType = {
    id: string | null
    role: $Enums.NHISRole | null
  }

  export type NHISWorkerMaxAggregateOutputType = {
    id: string | null
    role: $Enums.NHISRole | null
  }

  export type NHISWorkerCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type NHISWorkerMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type NHISWorkerMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type NHISWorkerCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type NHISWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NHISWorker to aggregate.
     */
    where?: NHISWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NHISWorkers to fetch.
     */
    orderBy?: NHISWorkerOrderByWithRelationInput | NHISWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NHISWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NHISWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NHISWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NHISWorkers
    **/
    _count?: true | NHISWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NHISWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NHISWorkerMaxAggregateInputType
  }

  export type GetNHISWorkerAggregateType<T extends NHISWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateNHISWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNHISWorker[P]>
      : GetScalarType<T[P], AggregateNHISWorker[P]>
  }




  export type NHISWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NHISWorkerWhereInput
    orderBy?: NHISWorkerOrderByWithAggregationInput | NHISWorkerOrderByWithAggregationInput[]
    by: NHISWorkerScalarFieldEnum[] | NHISWorkerScalarFieldEnum
    having?: NHISWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NHISWorkerCountAggregateInputType | true
    _min?: NHISWorkerMinAggregateInputType
    _max?: NHISWorkerMaxAggregateInputType
  }

  export type NHISWorkerGroupByOutputType = {
    id: string
    role: $Enums.NHISRole | null
    _count: NHISWorkerCountAggregateOutputType | null
    _min: NHISWorkerMinAggregateOutputType | null
    _max: NHISWorkerMaxAggregateOutputType | null
  }

  type GetNHISWorkerGroupByPayload<T extends NHISWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NHISWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NHISWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NHISWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], NHISWorkerGroupByOutputType[P]>
        }
      >
    >


  export type NHISWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nHISWorker"]>

  export type NHISWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nHISWorker"]>

  export type NHISWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nHISWorker"]>

  export type NHISWorkerSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type NHISWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["nHISWorker"]>
  export type NHISWorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NHISWorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NHISWorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NHISWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NHISWorker"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.NHISRole | null
    }, ExtArgs["result"]["nHISWorker"]>
    composites: {}
  }

  type NHISWorkerGetPayload<S extends boolean | null | undefined | NHISWorkerDefaultArgs> = $Result.GetResult<Prisma.$NHISWorkerPayload, S>

  type NHISWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NHISWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NHISWorkerCountAggregateInputType | true
    }

  export interface NHISWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NHISWorker'], meta: { name: 'NHISWorker' } }
    /**
     * Find zero or one NHISWorker that matches the filter.
     * @param {NHISWorkerFindUniqueArgs} args - Arguments to find a NHISWorker
     * @example
     * // Get one NHISWorker
     * const nHISWorker = await prisma.nHISWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NHISWorkerFindUniqueArgs>(args: SelectSubset<T, NHISWorkerFindUniqueArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NHISWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NHISWorkerFindUniqueOrThrowArgs} args - Arguments to find a NHISWorker
     * @example
     * // Get one NHISWorker
     * const nHISWorker = await prisma.nHISWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NHISWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, NHISWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NHISWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerFindFirstArgs} args - Arguments to find a NHISWorker
     * @example
     * // Get one NHISWorker
     * const nHISWorker = await prisma.nHISWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NHISWorkerFindFirstArgs>(args?: SelectSubset<T, NHISWorkerFindFirstArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NHISWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerFindFirstOrThrowArgs} args - Arguments to find a NHISWorker
     * @example
     * // Get one NHISWorker
     * const nHISWorker = await prisma.nHISWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NHISWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, NHISWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NHISWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NHISWorkers
     * const nHISWorkers = await prisma.nHISWorker.findMany()
     * 
     * // Get first 10 NHISWorkers
     * const nHISWorkers = await prisma.nHISWorker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nHISWorkerWithIdOnly = await prisma.nHISWorker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NHISWorkerFindManyArgs>(args?: SelectSubset<T, NHISWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NHISWorker.
     * @param {NHISWorkerCreateArgs} args - Arguments to create a NHISWorker.
     * @example
     * // Create one NHISWorker
     * const NHISWorker = await prisma.nHISWorker.create({
     *   data: {
     *     // ... data to create a NHISWorker
     *   }
     * })
     * 
     */
    create<T extends NHISWorkerCreateArgs>(args: SelectSubset<T, NHISWorkerCreateArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NHISWorkers.
     * @param {NHISWorkerCreateManyArgs} args - Arguments to create many NHISWorkers.
     * @example
     * // Create many NHISWorkers
     * const nHISWorker = await prisma.nHISWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NHISWorkerCreateManyArgs>(args?: SelectSubset<T, NHISWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NHISWorkers and returns the data saved in the database.
     * @param {NHISWorkerCreateManyAndReturnArgs} args - Arguments to create many NHISWorkers.
     * @example
     * // Create many NHISWorkers
     * const nHISWorker = await prisma.nHISWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NHISWorkers and only return the `id`
     * const nHISWorkerWithIdOnly = await prisma.nHISWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NHISWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, NHISWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NHISWorker.
     * @param {NHISWorkerDeleteArgs} args - Arguments to delete one NHISWorker.
     * @example
     * // Delete one NHISWorker
     * const NHISWorker = await prisma.nHISWorker.delete({
     *   where: {
     *     // ... filter to delete one NHISWorker
     *   }
     * })
     * 
     */
    delete<T extends NHISWorkerDeleteArgs>(args: SelectSubset<T, NHISWorkerDeleteArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NHISWorker.
     * @param {NHISWorkerUpdateArgs} args - Arguments to update one NHISWorker.
     * @example
     * // Update one NHISWorker
     * const nHISWorker = await prisma.nHISWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NHISWorkerUpdateArgs>(args: SelectSubset<T, NHISWorkerUpdateArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NHISWorkers.
     * @param {NHISWorkerDeleteManyArgs} args - Arguments to filter NHISWorkers to delete.
     * @example
     * // Delete a few NHISWorkers
     * const { count } = await prisma.nHISWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NHISWorkerDeleteManyArgs>(args?: SelectSubset<T, NHISWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NHISWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NHISWorkers
     * const nHISWorker = await prisma.nHISWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NHISWorkerUpdateManyArgs>(args: SelectSubset<T, NHISWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NHISWorkers and returns the data updated in the database.
     * @param {NHISWorkerUpdateManyAndReturnArgs} args - Arguments to update many NHISWorkers.
     * @example
     * // Update many NHISWorkers
     * const nHISWorker = await prisma.nHISWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NHISWorkers and only return the `id`
     * const nHISWorkerWithIdOnly = await prisma.nHISWorker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NHISWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, NHISWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NHISWorker.
     * @param {NHISWorkerUpsertArgs} args - Arguments to update or create a NHISWorker.
     * @example
     * // Update or create a NHISWorker
     * const nHISWorker = await prisma.nHISWorker.upsert({
     *   create: {
     *     // ... data to create a NHISWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NHISWorker we want to update
     *   }
     * })
     */
    upsert<T extends NHISWorkerUpsertArgs>(args: SelectSubset<T, NHISWorkerUpsertArgs<ExtArgs>>): Prisma__NHISWorkerClient<$Result.GetResult<Prisma.$NHISWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NHISWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerCountArgs} args - Arguments to filter NHISWorkers to count.
     * @example
     * // Count the number of NHISWorkers
     * const count = await prisma.nHISWorker.count({
     *   where: {
     *     // ... the filter for the NHISWorkers we want to count
     *   }
     * })
    **/
    count<T extends NHISWorkerCountArgs>(
      args?: Subset<T, NHISWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NHISWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NHISWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NHISWorkerAggregateArgs>(args: Subset<T, NHISWorkerAggregateArgs>): Prisma.PrismaPromise<GetNHISWorkerAggregateType<T>>

    /**
     * Group by NHISWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NHISWorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NHISWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NHISWorkerGroupByArgs['orderBy'] }
        : { orderBy?: NHISWorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NHISWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNHISWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NHISWorker model
   */
  readonly fields: NHISWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NHISWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NHISWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NHISWorker model
   */
  interface NHISWorkerFieldRefs {
    readonly id: FieldRef<"NHISWorker", 'String'>
    readonly role: FieldRef<"NHISWorker", 'NHISRole'>
  }
    

  // Custom InputTypes
  /**
   * NHISWorker findUnique
   */
  export type NHISWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter, which NHISWorker to fetch.
     */
    where: NHISWorkerWhereUniqueInput
  }

  /**
   * NHISWorker findUniqueOrThrow
   */
  export type NHISWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter, which NHISWorker to fetch.
     */
    where: NHISWorkerWhereUniqueInput
  }

  /**
   * NHISWorker findFirst
   */
  export type NHISWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter, which NHISWorker to fetch.
     */
    where?: NHISWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NHISWorkers to fetch.
     */
    orderBy?: NHISWorkerOrderByWithRelationInput | NHISWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NHISWorkers.
     */
    cursor?: NHISWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NHISWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NHISWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NHISWorkers.
     */
    distinct?: NHISWorkerScalarFieldEnum | NHISWorkerScalarFieldEnum[]
  }

  /**
   * NHISWorker findFirstOrThrow
   */
  export type NHISWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter, which NHISWorker to fetch.
     */
    where?: NHISWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NHISWorkers to fetch.
     */
    orderBy?: NHISWorkerOrderByWithRelationInput | NHISWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NHISWorkers.
     */
    cursor?: NHISWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NHISWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NHISWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NHISWorkers.
     */
    distinct?: NHISWorkerScalarFieldEnum | NHISWorkerScalarFieldEnum[]
  }

  /**
   * NHISWorker findMany
   */
  export type NHISWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter, which NHISWorkers to fetch.
     */
    where?: NHISWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NHISWorkers to fetch.
     */
    orderBy?: NHISWorkerOrderByWithRelationInput | NHISWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NHISWorkers.
     */
    cursor?: NHISWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NHISWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NHISWorkers.
     */
    skip?: number
    distinct?: NHISWorkerScalarFieldEnum | NHISWorkerScalarFieldEnum[]
  }

  /**
   * NHISWorker create
   */
  export type NHISWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a NHISWorker.
     */
    data: XOR<NHISWorkerCreateInput, NHISWorkerUncheckedCreateInput>
  }

  /**
   * NHISWorker createMany
   */
  export type NHISWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NHISWorkers.
     */
    data: NHISWorkerCreateManyInput | NHISWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NHISWorker createManyAndReturn
   */
  export type NHISWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many NHISWorkers.
     */
    data: NHISWorkerCreateManyInput | NHISWorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NHISWorker update
   */
  export type NHISWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a NHISWorker.
     */
    data: XOR<NHISWorkerUpdateInput, NHISWorkerUncheckedUpdateInput>
    /**
     * Choose, which NHISWorker to update.
     */
    where: NHISWorkerWhereUniqueInput
  }

  /**
   * NHISWorker updateMany
   */
  export type NHISWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NHISWorkers.
     */
    data: XOR<NHISWorkerUpdateManyMutationInput, NHISWorkerUncheckedUpdateManyInput>
    /**
     * Filter which NHISWorkers to update
     */
    where?: NHISWorkerWhereInput
    /**
     * Limit how many NHISWorkers to update.
     */
    limit?: number
  }

  /**
   * NHISWorker updateManyAndReturn
   */
  export type NHISWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * The data used to update NHISWorkers.
     */
    data: XOR<NHISWorkerUpdateManyMutationInput, NHISWorkerUncheckedUpdateManyInput>
    /**
     * Filter which NHISWorkers to update
     */
    where?: NHISWorkerWhereInput
    /**
     * Limit how many NHISWorkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NHISWorker upsert
   */
  export type NHISWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the NHISWorker to update in case it exists.
     */
    where: NHISWorkerWhereUniqueInput
    /**
     * In case the NHISWorker found by the `where` argument doesn't exist, create a new NHISWorker with this data.
     */
    create: XOR<NHISWorkerCreateInput, NHISWorkerUncheckedCreateInput>
    /**
     * In case the NHISWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NHISWorkerUpdateInput, NHISWorkerUncheckedUpdateInput>
  }

  /**
   * NHISWorker delete
   */
  export type NHISWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
    /**
     * Filter which NHISWorker to delete.
     */
    where: NHISWorkerWhereUniqueInput
  }

  /**
   * NHISWorker deleteMany
   */
  export type NHISWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NHISWorkers to delete
     */
    where?: NHISWorkerWhereInput
    /**
     * Limit how many NHISWorkers to delete.
     */
    limit?: number
  }

  /**
   * NHISWorker without action
   */
  export type NHISWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NHISWorker
     */
    select?: NHISWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NHISWorker
     */
    omit?: NHISWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NHISWorkerInclude<ExtArgs> | null
  }


  /**
   * Model PublicHealthWorker
   */

  export type AggregatePublicHealthWorker = {
    _count: PublicHealthWorkerCountAggregateOutputType | null
    _min: PublicHealthWorkerMinAggregateOutputType | null
    _max: PublicHealthWorkerMaxAggregateOutputType | null
  }

  export type PublicHealthWorkerMinAggregateOutputType = {
    id: string | null
    role: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerMaxAggregateOutputType = {
    id: string | null
    role: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type PublicHealthWorkerMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type PublicHealthWorkerMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type PublicHealthWorkerCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type PublicHealthWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicHealthWorker to aggregate.
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicHealthWorkers to fetch.
     */
    orderBy?: PublicHealthWorkerOrderByWithRelationInput | PublicHealthWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicHealthWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicHealthWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicHealthWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicHealthWorkers
    **/
    _count?: true | PublicHealthWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicHealthWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicHealthWorkerMaxAggregateInputType
  }

  export type GetPublicHealthWorkerAggregateType<T extends PublicHealthWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicHealthWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicHealthWorker[P]>
      : GetScalarType<T[P], AggregatePublicHealthWorker[P]>
  }




  export type PublicHealthWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicHealthWorkerWhereInput
    orderBy?: PublicHealthWorkerOrderByWithAggregationInput | PublicHealthWorkerOrderByWithAggregationInput[]
    by: PublicHealthWorkerScalarFieldEnum[] | PublicHealthWorkerScalarFieldEnum
    having?: PublicHealthWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicHealthWorkerCountAggregateInputType | true
    _min?: PublicHealthWorkerMinAggregateInputType
    _max?: PublicHealthWorkerMaxAggregateInputType
  }

  export type PublicHealthWorkerGroupByOutputType = {
    id: string
    role: $Enums.PublicHealthRole | null
    _count: PublicHealthWorkerCountAggregateOutputType | null
    _min: PublicHealthWorkerMinAggregateOutputType | null
    _max: PublicHealthWorkerMaxAggregateOutputType | null
  }

  type GetPublicHealthWorkerGroupByPayload<T extends PublicHealthWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicHealthWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicHealthWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicHealthWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], PublicHealthWorkerGroupByOutputType[P]>
        }
      >
    >


  export type PublicHealthWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicHealthWorker"]>

  export type PublicHealthWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicHealthWorker"]>

  export type PublicHealthWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicHealthWorker"]>

  export type PublicHealthWorkerSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type PublicHealthWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["publicHealthWorker"]>
  export type PublicHealthWorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PublicHealthWorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PublicHealthWorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PublicHealthWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicHealthWorker"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.PublicHealthRole | null
    }, ExtArgs["result"]["publicHealthWorker"]>
    composites: {}
  }

  type PublicHealthWorkerGetPayload<S extends boolean | null | undefined | PublicHealthWorkerDefaultArgs> = $Result.GetResult<Prisma.$PublicHealthWorkerPayload, S>

  type PublicHealthWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicHealthWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicHealthWorkerCountAggregateInputType | true
    }

  export interface PublicHealthWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicHealthWorker'], meta: { name: 'PublicHealthWorker' } }
    /**
     * Find zero or one PublicHealthWorker that matches the filter.
     * @param {PublicHealthWorkerFindUniqueArgs} args - Arguments to find a PublicHealthWorker
     * @example
     * // Get one PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicHealthWorkerFindUniqueArgs>(args: SelectSubset<T, PublicHealthWorkerFindUniqueArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicHealthWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicHealthWorkerFindUniqueOrThrowArgs} args - Arguments to find a PublicHealthWorker
     * @example
     * // Get one PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicHealthWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicHealthWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicHealthWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerFindFirstArgs} args - Arguments to find a PublicHealthWorker
     * @example
     * // Get one PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicHealthWorkerFindFirstArgs>(args?: SelectSubset<T, PublicHealthWorkerFindFirstArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicHealthWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerFindFirstOrThrowArgs} args - Arguments to find a PublicHealthWorker
     * @example
     * // Get one PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicHealthWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicHealthWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicHealthWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicHealthWorkers
     * const publicHealthWorkers = await prisma.publicHealthWorker.findMany()
     * 
     * // Get first 10 PublicHealthWorkers
     * const publicHealthWorkers = await prisma.publicHealthWorker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicHealthWorkerWithIdOnly = await prisma.publicHealthWorker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicHealthWorkerFindManyArgs>(args?: SelectSubset<T, PublicHealthWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicHealthWorker.
     * @param {PublicHealthWorkerCreateArgs} args - Arguments to create a PublicHealthWorker.
     * @example
     * // Create one PublicHealthWorker
     * const PublicHealthWorker = await prisma.publicHealthWorker.create({
     *   data: {
     *     // ... data to create a PublicHealthWorker
     *   }
     * })
     * 
     */
    create<T extends PublicHealthWorkerCreateArgs>(args: SelectSubset<T, PublicHealthWorkerCreateArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicHealthWorkers.
     * @param {PublicHealthWorkerCreateManyArgs} args - Arguments to create many PublicHealthWorkers.
     * @example
     * // Create many PublicHealthWorkers
     * const publicHealthWorker = await prisma.publicHealthWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicHealthWorkerCreateManyArgs>(args?: SelectSubset<T, PublicHealthWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicHealthWorkers and returns the data saved in the database.
     * @param {PublicHealthWorkerCreateManyAndReturnArgs} args - Arguments to create many PublicHealthWorkers.
     * @example
     * // Create many PublicHealthWorkers
     * const publicHealthWorker = await prisma.publicHealthWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicHealthWorkers and only return the `id`
     * const publicHealthWorkerWithIdOnly = await prisma.publicHealthWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicHealthWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicHealthWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicHealthWorker.
     * @param {PublicHealthWorkerDeleteArgs} args - Arguments to delete one PublicHealthWorker.
     * @example
     * // Delete one PublicHealthWorker
     * const PublicHealthWorker = await prisma.publicHealthWorker.delete({
     *   where: {
     *     // ... filter to delete one PublicHealthWorker
     *   }
     * })
     * 
     */
    delete<T extends PublicHealthWorkerDeleteArgs>(args: SelectSubset<T, PublicHealthWorkerDeleteArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicHealthWorker.
     * @param {PublicHealthWorkerUpdateArgs} args - Arguments to update one PublicHealthWorker.
     * @example
     * // Update one PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicHealthWorkerUpdateArgs>(args: SelectSubset<T, PublicHealthWorkerUpdateArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicHealthWorkers.
     * @param {PublicHealthWorkerDeleteManyArgs} args - Arguments to filter PublicHealthWorkers to delete.
     * @example
     * // Delete a few PublicHealthWorkers
     * const { count } = await prisma.publicHealthWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicHealthWorkerDeleteManyArgs>(args?: SelectSubset<T, PublicHealthWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicHealthWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicHealthWorkers
     * const publicHealthWorker = await prisma.publicHealthWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicHealthWorkerUpdateManyArgs>(args: SelectSubset<T, PublicHealthWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicHealthWorkers and returns the data updated in the database.
     * @param {PublicHealthWorkerUpdateManyAndReturnArgs} args - Arguments to update many PublicHealthWorkers.
     * @example
     * // Update many PublicHealthWorkers
     * const publicHealthWorker = await prisma.publicHealthWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicHealthWorkers and only return the `id`
     * const publicHealthWorkerWithIdOnly = await prisma.publicHealthWorker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicHealthWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicHealthWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicHealthWorker.
     * @param {PublicHealthWorkerUpsertArgs} args - Arguments to update or create a PublicHealthWorker.
     * @example
     * // Update or create a PublicHealthWorker
     * const publicHealthWorker = await prisma.publicHealthWorker.upsert({
     *   create: {
     *     // ... data to create a PublicHealthWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicHealthWorker we want to update
     *   }
     * })
     */
    upsert<T extends PublicHealthWorkerUpsertArgs>(args: SelectSubset<T, PublicHealthWorkerUpsertArgs<ExtArgs>>): Prisma__PublicHealthWorkerClient<$Result.GetResult<Prisma.$PublicHealthWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicHealthWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerCountArgs} args - Arguments to filter PublicHealthWorkers to count.
     * @example
     * // Count the number of PublicHealthWorkers
     * const count = await prisma.publicHealthWorker.count({
     *   where: {
     *     // ... the filter for the PublicHealthWorkers we want to count
     *   }
     * })
    **/
    count<T extends PublicHealthWorkerCountArgs>(
      args?: Subset<T, PublicHealthWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicHealthWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicHealthWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicHealthWorkerAggregateArgs>(args: Subset<T, PublicHealthWorkerAggregateArgs>): Prisma.PrismaPromise<GetPublicHealthWorkerAggregateType<T>>

    /**
     * Group by PublicHealthWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicHealthWorkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicHealthWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicHealthWorkerGroupByArgs['orderBy'] }
        : { orderBy?: PublicHealthWorkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicHealthWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicHealthWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicHealthWorker model
   */
  readonly fields: PublicHealthWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicHealthWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicHealthWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicHealthWorker model
   */
  interface PublicHealthWorkerFieldRefs {
    readonly id: FieldRef<"PublicHealthWorker", 'String'>
    readonly role: FieldRef<"PublicHealthWorker", 'PublicHealthRole'>
  }
    

  // Custom InputTypes
  /**
   * PublicHealthWorker findUnique
   */
  export type PublicHealthWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter, which PublicHealthWorker to fetch.
     */
    where: PublicHealthWorkerWhereUniqueInput
  }

  /**
   * PublicHealthWorker findUniqueOrThrow
   */
  export type PublicHealthWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter, which PublicHealthWorker to fetch.
     */
    where: PublicHealthWorkerWhereUniqueInput
  }

  /**
   * PublicHealthWorker findFirst
   */
  export type PublicHealthWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter, which PublicHealthWorker to fetch.
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicHealthWorkers to fetch.
     */
    orderBy?: PublicHealthWorkerOrderByWithRelationInput | PublicHealthWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicHealthWorkers.
     */
    cursor?: PublicHealthWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicHealthWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicHealthWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicHealthWorkers.
     */
    distinct?: PublicHealthWorkerScalarFieldEnum | PublicHealthWorkerScalarFieldEnum[]
  }

  /**
   * PublicHealthWorker findFirstOrThrow
   */
  export type PublicHealthWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter, which PublicHealthWorker to fetch.
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicHealthWorkers to fetch.
     */
    orderBy?: PublicHealthWorkerOrderByWithRelationInput | PublicHealthWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicHealthWorkers.
     */
    cursor?: PublicHealthWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicHealthWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicHealthWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicHealthWorkers.
     */
    distinct?: PublicHealthWorkerScalarFieldEnum | PublicHealthWorkerScalarFieldEnum[]
  }

  /**
   * PublicHealthWorker findMany
   */
  export type PublicHealthWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter, which PublicHealthWorkers to fetch.
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicHealthWorkers to fetch.
     */
    orderBy?: PublicHealthWorkerOrderByWithRelationInput | PublicHealthWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicHealthWorkers.
     */
    cursor?: PublicHealthWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicHealthWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicHealthWorkers.
     */
    skip?: number
    distinct?: PublicHealthWorkerScalarFieldEnum | PublicHealthWorkerScalarFieldEnum[]
  }

  /**
   * PublicHealthWorker create
   */
  export type PublicHealthWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicHealthWorker.
     */
    data: XOR<PublicHealthWorkerCreateInput, PublicHealthWorkerUncheckedCreateInput>
  }

  /**
   * PublicHealthWorker createMany
   */
  export type PublicHealthWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicHealthWorkers.
     */
    data: PublicHealthWorkerCreateManyInput | PublicHealthWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicHealthWorker createManyAndReturn
   */
  export type PublicHealthWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many PublicHealthWorkers.
     */
    data: PublicHealthWorkerCreateManyInput | PublicHealthWorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicHealthWorker update
   */
  export type PublicHealthWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicHealthWorker.
     */
    data: XOR<PublicHealthWorkerUpdateInput, PublicHealthWorkerUncheckedUpdateInput>
    /**
     * Choose, which PublicHealthWorker to update.
     */
    where: PublicHealthWorkerWhereUniqueInput
  }

  /**
   * PublicHealthWorker updateMany
   */
  export type PublicHealthWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicHealthWorkers.
     */
    data: XOR<PublicHealthWorkerUpdateManyMutationInput, PublicHealthWorkerUncheckedUpdateManyInput>
    /**
     * Filter which PublicHealthWorkers to update
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * Limit how many PublicHealthWorkers to update.
     */
    limit?: number
  }

  /**
   * PublicHealthWorker updateManyAndReturn
   */
  export type PublicHealthWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * The data used to update PublicHealthWorkers.
     */
    data: XOR<PublicHealthWorkerUpdateManyMutationInput, PublicHealthWorkerUncheckedUpdateManyInput>
    /**
     * Filter which PublicHealthWorkers to update
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * Limit how many PublicHealthWorkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicHealthWorker upsert
   */
  export type PublicHealthWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicHealthWorker to update in case it exists.
     */
    where: PublicHealthWorkerWhereUniqueInput
    /**
     * In case the PublicHealthWorker found by the `where` argument doesn't exist, create a new PublicHealthWorker with this data.
     */
    create: XOR<PublicHealthWorkerCreateInput, PublicHealthWorkerUncheckedCreateInput>
    /**
     * In case the PublicHealthWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicHealthWorkerUpdateInput, PublicHealthWorkerUncheckedUpdateInput>
  }

  /**
   * PublicHealthWorker delete
   */
  export type PublicHealthWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
    /**
     * Filter which PublicHealthWorker to delete.
     */
    where: PublicHealthWorkerWhereUniqueInput
  }

  /**
   * PublicHealthWorker deleteMany
   */
  export type PublicHealthWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicHealthWorkers to delete
     */
    where?: PublicHealthWorkerWhereInput
    /**
     * Limit how many PublicHealthWorkers to delete.
     */
    limit?: number
  }

  /**
   * PublicHealthWorker without action
   */
  export type PublicHealthWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicHealthWorker
     */
    select?: PublicHealthWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicHealthWorker
     */
    omit?: PublicHealthWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicHealthWorkerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HospitalScalarFieldEnum: {
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
    paymentPlan: 'paymentPlan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
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

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    phone: 'phone',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    hospitalId: 'hospitalId',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasswordHistoryScalarFieldEnum = (typeof PasswordHistoryScalarFieldEnum)[keyof typeof PasswordHistoryScalarFieldEnum]


  export const PersonalAccessTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    type: 'type',
    expiry: 'expiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PersonalAccessTokenScalarFieldEnum = (typeof PersonalAccessTokenScalarFieldEnum)[keyof typeof PersonalAccessTokenScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    department: 'department',
    createdAt: 'createdAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const AddressScalarFieldEnum: {
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

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PatientScalarFieldEnum: {
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
    billingtype: 'billingtype',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const NextOfKinScalarFieldEnum: {
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

  export type NextOfKinScalarFieldEnum = (typeof NextOfKinScalarFieldEnum)[keyof typeof NextOfKinScalarFieldEnum]


  export const NHISWorkerScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type NHISWorkerScalarFieldEnum = (typeof NHISWorkerScalarFieldEnum)[keyof typeof NHISWorkerScalarFieldEnum]


  export const PublicHealthWorkerScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type PublicHealthWorkerScalarFieldEnum = (typeof PublicHealthWorkerScalarFieldEnum)[keyof typeof PublicHealthWorkerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PaymentPlan'
   */
  export type EnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan'>
    


  /**
   * Reference to a field of type 'PaymentPlan[]'
   */
  export type ListEnumPaymentPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentPlan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PermissionAction'
   */
  export type EnumPermissionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionAction'>
    


  /**
   * Reference to a field of type 'PermissionAction[]'
   */
  export type ListEnumPermissionActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionAction[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'AddressType[]'
   */
  export type ListEnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'Genotype'
   */
  export type EnumGenotypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genotype'>
    


  /**
   * Reference to a field of type 'Genotype[]'
   */
  export type ListEnumGenotypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genotype[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NHISRole'
   */
  export type EnumNHISRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NHISRole'>
    


  /**
   * Reference to a field of type 'NHISRole[]'
   */
  export type ListEnumNHISRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NHISRole[]'>
    


  /**
   * Reference to a field of type 'PublicHealthRole'
   */
  export type EnumPublicHealthRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicHealthRole'>
    


  /**
   * Reference to a field of type 'PublicHealthRole[]'
   */
  export type ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublicHealthRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type HospitalWhereInput = {
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    id?: StringFilter<"Hospital"> | string
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    logo?: StringNullableFilter<"Hospital"> | string | null
    phone?: StringNullableListFilter<"Hospital">
    email?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    country?: StringFilter<"Hospital"> | string
    zipCode?: StringFilter<"Hospital"> | string
    website?: StringNullableFilter<"Hospital"> | string | null
    slogan?: StringNullableFilter<"Hospital"> | string | null
    pobox?: StringNullableFilter<"Hospital"> | string | null
    paymentPlan?: EnumPaymentPlanNullableFilter<"Hospital"> | $Enums.PaymentPlan | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    users?: UserListRelationFilter
  }

  export type HospitalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    logo?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    website?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    pobox?: SortOrderInput | SortOrder
    paymentPlan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type HospitalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HospitalWhereInput | HospitalWhereInput[]
    OR?: HospitalWhereInput[]
    NOT?: HospitalWhereInput | HospitalWhereInput[]
    name?: StringFilter<"Hospital"> | string
    address?: StringFilter<"Hospital"> | string
    logo?: StringNullableFilter<"Hospital"> | string | null
    phone?: StringNullableListFilter<"Hospital">
    email?: StringFilter<"Hospital"> | string
    city?: StringFilter<"Hospital"> | string
    state?: StringFilter<"Hospital"> | string
    country?: StringFilter<"Hospital"> | string
    zipCode?: StringFilter<"Hospital"> | string
    website?: StringNullableFilter<"Hospital"> | string | null
    slogan?: StringNullableFilter<"Hospital"> | string | null
    pobox?: StringNullableFilter<"Hospital"> | string | null
    paymentPlan?: EnumPaymentPlanNullableFilter<"Hospital"> | $Enums.PaymentPlan | null
    createdAt?: DateTimeFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeFilter<"Hospital"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type HospitalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    logo?: SortOrderInput | SortOrder
    phone?: SortOrder
    email?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    website?: SortOrderInput | SortOrder
    slogan?: SortOrderInput | SortOrder
    pobox?: SortOrderInput | SortOrder
    paymentPlan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HospitalCountOrderByAggregateInput
    _max?: HospitalMaxOrderByAggregateInput
    _min?: HospitalMinOrderByAggregateInput
  }

  export type HospitalScalarWhereWithAggregatesInput = {
    AND?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    OR?: HospitalScalarWhereWithAggregatesInput[]
    NOT?: HospitalScalarWhereWithAggregatesInput | HospitalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hospital"> | string
    name?: StringWithAggregatesFilter<"Hospital"> | string
    address?: StringWithAggregatesFilter<"Hospital"> | string
    logo?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    phone?: StringNullableListFilter<"Hospital">
    email?: StringWithAggregatesFilter<"Hospital"> | string
    city?: StringWithAggregatesFilter<"Hospital"> | string
    state?: StringWithAggregatesFilter<"Hospital"> | string
    country?: StringWithAggregatesFilter<"Hospital"> | string
    zipCode?: StringWithAggregatesFilter<"Hospital"> | string
    website?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    slogan?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    pobox?: StringNullableWithAggregatesFilter<"Hospital"> | string | null
    paymentPlan?: EnumPaymentPlanNullableWithAggregatesFilter<"Hospital"> | $Enums.PaymentPlan | null
    createdAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hospital"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    updatedBy?: StringNullableFilter<"Role"> | string | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: StringNullableFilter<"Role"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    updatedBy?: StringNullableFilter<"Role"> | string | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: StringNullableFilter<"Role"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Role"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    name?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
    updatedBy?: StringNullableFilter<"Resource"> | string | null
    deletedAt?: DateTimeNullableFilter<"Resource"> | Date | string | null
    deletedBy?: StringNullableFilter<"Resource"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    description?: StringNullableFilter<"Resource"> | string | null
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    updatedAt?: DateTimeFilter<"Resource"> | Date | string
    updatedBy?: StringNullableFilter<"Resource"> | string | null
    deletedAt?: DateTimeNullableFilter<"Resource"> | Date | string | null
    deletedBy?: StringNullableFilter<"Resource"> | string | null
    rolePermissions?: RolePermissionListRelationFilter
  }, "id" | "name">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    name?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Resource"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    resourceId?: StringFilter<"RolePermission"> | string
    action?: EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction
    path?: StringNullableFilter<"RolePermission"> | string | null
    description?: StringNullableFilter<"RolePermission"> | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedBy?: StringNullableFilter<"RolePermission"> | string | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: StringNullableFilter<"RolePermission"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    path?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_resourceId?: RolePermissionRoleIdResourceIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    resourceId?: StringFilter<"RolePermission"> | string
    action?: EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction
    path?: StringNullableFilter<"RolePermission"> | string | null
    description?: StringNullableFilter<"RolePermission"> | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedBy?: StringNullableFilter<"RolePermission"> | string | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: StringNullableFilter<"RolePermission"> | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "id" | "roleId_resourceId">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    path?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolePermission"> | string
    roleId?: StringWithAggregatesFilter<"RolePermission"> | string
    resourceId?: StringWithAggregatesFilter<"RolePermission"> | string
    action?: EnumPermissionActionWithAggregatesFilter<"RolePermission"> | $Enums.PermissionAction
    path?: StringNullableWithAggregatesFilter<"RolePermission"> | string | null
    description?: StringNullableWithAggregatesFilter<"RolePermission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"RolePermission"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RolePermission"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"RolePermission"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableListFilter<"User">
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    updatedBy?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedBy?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    personalAccessTokens?: PersonalAccessTokenListRelationFilter
    passwordHistory?: PasswordHistoryListRelationFilter
    addresss?: AddressListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    nhisWorker?: XOR<NHISWorkerNullableScalarRelationFilter, NHISWorkerWhereInput> | null
    publicHealthWorker?: XOR<PublicHealthWorkerNullableScalarRelationFilter, PublicHealthWorkerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    hospitalId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    hospital?: HospitalOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    personalAccessTokens?: PersonalAccessTokenOrderByRelationAggregateInput
    passwordHistory?: PasswordHistoryOrderByRelationAggregateInput
    addresss?: AddressOrderByRelationAggregateInput
    staff?: StaffOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    nhisWorker?: NHISWorkerOrderByWithRelationInput
    publicHealthWorker?: PublicHealthWorkerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableListFilter<"User">
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    updatedBy?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedBy?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
    hospital?: XOR<HospitalNullableScalarRelationFilter, HospitalWhereInput> | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    personalAccessTokens?: PersonalAccessTokenListRelationFilter
    passwordHistory?: PasswordHistoryListRelationFilter
    addresss?: AddressListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    nhisWorker?: XOR<NHISWorkerNullableScalarRelationFilter, NHISWorkerWhereInput> | null
    publicHealthWorker?: XOR<PublicHealthWorkerNullableScalarRelationFilter, PublicHealthWorkerWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    hospitalId?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableListFilter<"User">
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    hospitalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PasswordHistoryWhereInput = {
    AND?: PasswordHistoryWhereInput | PasswordHistoryWhereInput[]
    OR?: PasswordHistoryWhereInput[]
    NOT?: PasswordHistoryWhereInput | PasswordHistoryWhereInput[]
    id?: StringFilter<"PasswordHistory"> | string
    userId?: StringFilter<"PasswordHistory"> | string
    password?: StringFilter<"PasswordHistory"> | string
    createdAt?: DateTimeFilter<"PasswordHistory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PasswordHistory"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordHistoryWhereInput | PasswordHistoryWhereInput[]
    OR?: PasswordHistoryWhereInput[]
    NOT?: PasswordHistoryWhereInput | PasswordHistoryWhereInput[]
    userId?: StringFilter<"PasswordHistory"> | string
    password?: StringFilter<"PasswordHistory"> | string
    createdAt?: DateTimeFilter<"PasswordHistory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PasswordHistory"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasswordHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PasswordHistoryCountOrderByAggregateInput
    _max?: PasswordHistoryMaxOrderByAggregateInput
    _min?: PasswordHistoryMinOrderByAggregateInput
  }

  export type PasswordHistoryScalarWhereWithAggregatesInput = {
    AND?: PasswordHistoryScalarWhereWithAggregatesInput | PasswordHistoryScalarWhereWithAggregatesInput[]
    OR?: PasswordHistoryScalarWhereWithAggregatesInput[]
    NOT?: PasswordHistoryScalarWhereWithAggregatesInput | PasswordHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordHistory"> | string
    userId?: StringWithAggregatesFilter<"PasswordHistory"> | string
    password?: StringWithAggregatesFilter<"PasswordHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordHistory"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PasswordHistory"> | Date | string | null
  }

  export type PersonalAccessTokenWhereInput = {
    AND?: PersonalAccessTokenWhereInput | PersonalAccessTokenWhereInput[]
    OR?: PersonalAccessTokenWhereInput[]
    NOT?: PersonalAccessTokenWhereInput | PersonalAccessTokenWhereInput[]
    id?: StringFilter<"PersonalAccessToken"> | string
    userId?: StringFilter<"PersonalAccessToken"> | string
    token?: StringFilter<"PersonalAccessToken"> | string
    type?: EnumTokenTypeFilter<"PersonalAccessToken"> | $Enums.TokenType
    expiry?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    createdAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PersonalAccessToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonalAccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PersonalAccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    userId_type?: PersonalAccessTokenUserIdTypeCompoundUniqueInput
    AND?: PersonalAccessTokenWhereInput | PersonalAccessTokenWhereInput[]
    OR?: PersonalAccessTokenWhereInput[]
    NOT?: PersonalAccessTokenWhereInput | PersonalAccessTokenWhereInput[]
    userId?: StringFilter<"PersonalAccessToken"> | string
    type?: EnumTokenTypeFilter<"PersonalAccessToken"> | $Enums.TokenType
    expiry?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    createdAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PersonalAccessToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token" | "userId_type">

  export type PersonalAccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PersonalAccessTokenCountOrderByAggregateInput
    _max?: PersonalAccessTokenMaxOrderByAggregateInput
    _min?: PersonalAccessTokenMinOrderByAggregateInput
  }

  export type PersonalAccessTokenScalarWhereWithAggregatesInput = {
    AND?: PersonalAccessTokenScalarWhereWithAggregatesInput | PersonalAccessTokenScalarWhereWithAggregatesInput[]
    OR?: PersonalAccessTokenScalarWhereWithAggregatesInput[]
    NOT?: PersonalAccessTokenScalarWhereWithAggregatesInput | PersonalAccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalAccessToken"> | string
    userId?: StringWithAggregatesFilter<"PersonalAccessToken"> | string
    token?: StringWithAggregatesFilter<"PersonalAccessToken"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"PersonalAccessToken"> | $Enums.TokenType
    expiry?: DateTimeWithAggregatesFilter<"PersonalAccessToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PersonalAccessToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PersonalAccessToken"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PersonalAccessToken"> | Date | string | null
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    department?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    department?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    department?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringNullableFilter<"Address"> | string | null
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    userId?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    updatedBy?: StringNullableFilter<"Address"> | string | null
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    deletedBy?: StringNullableFilter<"Address"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_type?: AddressUserIdTypeCompoundUniqueInput
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringNullableFilter<"Address"> | string | null
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    userId?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    updatedBy?: StringNullableFilter<"Address"> | string | null
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    deletedBy?: StringNullableFilter<"Address"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId_type">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    type?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    type?: EnumAddressTypeWithAggregatesFilter<"Address"> | $Enums.AddressType
    userId?: StringNullableWithAggregatesFilter<"Address"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Address"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    patientId?: StringFilter<"Patient"> | string
    nfcId?: StringNullableFilter<"Patient"> | string | null
    nfcLinkedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    nfcLinkedBy?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    sex?: EnumGenderFilter<"Patient"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFilter<"Patient"> | $Enums.MaritalStatus
    nationality?: StringNullableFilter<"Patient"> | string | null
    occupation?: StringNullableFilter<"Patient"> | string | null
    religion?: StringNullableFilter<"Patient"> | string | null
    ethnicity?: StringNullableFilter<"Patient"> | string | null
    spokenLanguages?: StringNullableListFilter<"Patient">
    bloodGroup?: EnumBloodGroupNullableFilter<"Patient"> | $Enums.BloodGroup | null
    genotype?: EnumGenotypeNullableFilter<"Patient"> | $Enums.Genotype | null
    emergencyContactId?: StringFilter<"Patient"> | string
    billingtype?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emergencyContact?: NextOfKinListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    nfcId?: SortOrderInput | SortOrder
    nfcLinkedAt?: SortOrderInput | SortOrder
    nfcLinkedBy?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    spokenLanguages?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    genotype?: SortOrderInput | SortOrder
    emergencyContactId?: SortOrder
    billingtype?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    emergencyContact?: NextOfKinOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId?: string
    nfcId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    nfcLinkedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    nfcLinkedBy?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    sex?: EnumGenderFilter<"Patient"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFilter<"Patient"> | $Enums.MaritalStatus
    nationality?: StringNullableFilter<"Patient"> | string | null
    occupation?: StringNullableFilter<"Patient"> | string | null
    religion?: StringNullableFilter<"Patient"> | string | null
    ethnicity?: StringNullableFilter<"Patient"> | string | null
    spokenLanguages?: StringNullableListFilter<"Patient">
    bloodGroup?: EnumBloodGroupNullableFilter<"Patient"> | $Enums.BloodGroup | null
    genotype?: EnumGenotypeNullableFilter<"Patient"> | $Enums.Genotype | null
    emergencyContactId?: StringFilter<"Patient"> | string
    billingtype?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emergencyContact?: NextOfKinListRelationFilter
  }, "id" | "patientId" | "nfcId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    nfcId?: SortOrderInput | SortOrder
    nfcLinkedAt?: SortOrderInput | SortOrder
    nfcLinkedBy?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    spokenLanguages?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    genotype?: SortOrderInput | SortOrder
    emergencyContactId?: SortOrder
    billingtype?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    patientId?: StringWithAggregatesFilter<"Patient"> | string
    nfcId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    nfcLinkedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    nfcLinkedBy?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    sex?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"Patient"> | $Enums.MaritalStatus
    nationality?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    religion?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    ethnicity?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    spokenLanguages?: StringNullableListFilter<"Patient">
    bloodGroup?: EnumBloodGroupNullableWithAggregatesFilter<"Patient"> | $Enums.BloodGroup | null
    genotype?: EnumGenotypeNullableWithAggregatesFilter<"Patient"> | $Enums.Genotype | null
    emergencyContactId?: StringWithAggregatesFilter<"Patient"> | string
    billingtype?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type NextOfKinWhereInput = {
    AND?: NextOfKinWhereInput | NextOfKinWhereInput[]
    OR?: NextOfKinWhereInput[]
    NOT?: NextOfKinWhereInput | NextOfKinWhereInput[]
    id?: StringFilter<"NextOfKin"> | string
    patientId?: StringFilter<"NextOfKin"> | string
    firstName?: StringFilter<"NextOfKin"> | string
    middleName?: StringFilter<"NextOfKin"> | string
    lastName?: StringFilter<"NextOfKin"> | string
    relationship?: StringFilter<"NextOfKin"> | string
    phone?: StringNullableListFilter<"NextOfKin">
    email?: StringNullableFilter<"NextOfKin"> | string | null
    address?: StringNullableFilter<"NextOfKin"> | string | null
    isEmergencyContact?: BoolFilter<"NextOfKin"> | boolean
    createdAt?: DateTimeFilter<"NextOfKin"> | Date | string
    updatedAt?: DateTimeFilter<"NextOfKin"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type NextOfKinOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    relationship?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isEmergencyContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type NextOfKinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId_isEmergencyContact?: NextOfKinPatientIdIsEmergencyContactCompoundUniqueInput
    AND?: NextOfKinWhereInput | NextOfKinWhereInput[]
    OR?: NextOfKinWhereInput[]
    NOT?: NextOfKinWhereInput | NextOfKinWhereInput[]
    patientId?: StringFilter<"NextOfKin"> | string
    firstName?: StringFilter<"NextOfKin"> | string
    middleName?: StringFilter<"NextOfKin"> | string
    lastName?: StringFilter<"NextOfKin"> | string
    relationship?: StringFilter<"NextOfKin"> | string
    phone?: StringNullableListFilter<"NextOfKin">
    email?: StringNullableFilter<"NextOfKin"> | string | null
    address?: StringNullableFilter<"NextOfKin"> | string | null
    isEmergencyContact?: BoolFilter<"NextOfKin"> | boolean
    createdAt?: DateTimeFilter<"NextOfKin"> | Date | string
    updatedAt?: DateTimeFilter<"NextOfKin"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId_isEmergencyContact">

  export type NextOfKinOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    relationship?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isEmergencyContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NextOfKinCountOrderByAggregateInput
    _max?: NextOfKinMaxOrderByAggregateInput
    _min?: NextOfKinMinOrderByAggregateInput
  }

  export type NextOfKinScalarWhereWithAggregatesInput = {
    AND?: NextOfKinScalarWhereWithAggregatesInput | NextOfKinScalarWhereWithAggregatesInput[]
    OR?: NextOfKinScalarWhereWithAggregatesInput[]
    NOT?: NextOfKinScalarWhereWithAggregatesInput | NextOfKinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NextOfKin"> | string
    patientId?: StringWithAggregatesFilter<"NextOfKin"> | string
    firstName?: StringWithAggregatesFilter<"NextOfKin"> | string
    middleName?: StringWithAggregatesFilter<"NextOfKin"> | string
    lastName?: StringWithAggregatesFilter<"NextOfKin"> | string
    relationship?: StringWithAggregatesFilter<"NextOfKin"> | string
    phone?: StringNullableListFilter<"NextOfKin">
    email?: StringNullableWithAggregatesFilter<"NextOfKin"> | string | null
    address?: StringNullableWithAggregatesFilter<"NextOfKin"> | string | null
    isEmergencyContact?: BoolWithAggregatesFilter<"NextOfKin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NextOfKin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NextOfKin"> | Date | string
  }

  export type NHISWorkerWhereInput = {
    AND?: NHISWorkerWhereInput | NHISWorkerWhereInput[]
    OR?: NHISWorkerWhereInput[]
    NOT?: NHISWorkerWhereInput | NHISWorkerWhereInput[]
    id?: StringFilter<"NHISWorker"> | string
    role?: EnumNHISRoleNullableFilter<"NHISWorker"> | $Enums.NHISRole | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NHISWorkerOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NHISWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NHISWorkerWhereInput | NHISWorkerWhereInput[]
    OR?: NHISWorkerWhereInput[]
    NOT?: NHISWorkerWhereInput | NHISWorkerWhereInput[]
    role?: EnumNHISRoleNullableFilter<"NHISWorker"> | $Enums.NHISRole | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NHISWorkerOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: NHISWorkerCountOrderByAggregateInput
    _max?: NHISWorkerMaxOrderByAggregateInput
    _min?: NHISWorkerMinOrderByAggregateInput
  }

  export type NHISWorkerScalarWhereWithAggregatesInput = {
    AND?: NHISWorkerScalarWhereWithAggregatesInput | NHISWorkerScalarWhereWithAggregatesInput[]
    OR?: NHISWorkerScalarWhereWithAggregatesInput[]
    NOT?: NHISWorkerScalarWhereWithAggregatesInput | NHISWorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NHISWorker"> | string
    role?: EnumNHISRoleNullableWithAggregatesFilter<"NHISWorker"> | $Enums.NHISRole | null
  }

  export type PublicHealthWorkerWhereInput = {
    AND?: PublicHealthWorkerWhereInput | PublicHealthWorkerWhereInput[]
    OR?: PublicHealthWorkerWhereInput[]
    NOT?: PublicHealthWorkerWhereInput | PublicHealthWorkerWhereInput[]
    id?: StringFilter<"PublicHealthWorker"> | string
    role?: EnumPublicHealthRoleNullableFilter<"PublicHealthWorker"> | $Enums.PublicHealthRole | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PublicHealthWorkerOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PublicHealthWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicHealthWorkerWhereInput | PublicHealthWorkerWhereInput[]
    OR?: PublicHealthWorkerWhereInput[]
    NOT?: PublicHealthWorkerWhereInput | PublicHealthWorkerWhereInput[]
    role?: EnumPublicHealthRoleNullableFilter<"PublicHealthWorker"> | $Enums.PublicHealthRole | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PublicHealthWorkerOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: PublicHealthWorkerCountOrderByAggregateInput
    _max?: PublicHealthWorkerMaxOrderByAggregateInput
    _min?: PublicHealthWorkerMinOrderByAggregateInput
  }

  export type PublicHealthWorkerScalarWhereWithAggregatesInput = {
    AND?: PublicHealthWorkerScalarWhereWithAggregatesInput | PublicHealthWorkerScalarWhereWithAggregatesInput[]
    OR?: PublicHealthWorkerScalarWhereWithAggregatesInput[]
    NOT?: PublicHealthWorkerScalarWhereWithAggregatesInput | PublicHealthWorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicHealthWorker"> | string
    role?: EnumPublicHealthRoleNullableWithAggregatesFilter<"PublicHealthWorker"> | $Enums.PublicHealthRole | null
  }

  export type HospitalCreateInput = {
    id?: string
    name: string
    address: string
    logo?: string | null
    phone?: HospitalCreatephoneInput | string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website?: string | null
    slogan?: string | null
    pobox?: string | null
    paymentPlan?: $Enums.PaymentPlan | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    logo?: string | null
    phone?: HospitalCreatephoneInput | string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website?: string | null
    slogan?: string | null
    pobox?: string | null
    paymentPlan?: $Enums.PaymentPlan | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutHospitalInput
  }

  export type HospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutHospitalNestedInput
  }

  export type HospitalCreateManyInput = {
    id?: string
    name: string
    address: string
    logo?: string | null
    phone?: HospitalCreatephoneInput | string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website?: string | null
    slogan?: string | null
    pobox?: string | null
    paymentPlan?: $Enums.PaymentPlan | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateInput = {
    id?: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    role: RoleCreateNestedOneWithoutRolePermissionsInput
    resource: ResourceCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: string
    roleId: string
    resourceId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RolePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    resource?: ResourceUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateManyInput = {
    id?: string
    roleId: string
    resourceId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RolePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PasswordHistoryCreateInput = {
    id?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPasswordHistoryInput
  }

  export type PasswordHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PasswordHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPasswordHistoryNestedInput
  }

  export type PasswordHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordHistoryCreateManyInput = {
    id?: string
    userId: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PasswordHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonalAccessTokenCreateInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPersonalAccessTokensInput
  }

  export type PersonalAccessTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PersonalAccessTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPersonalAccessTokensNestedInput
  }

  export type PersonalAccessTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonalAccessTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PersonalAccessTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonalAccessTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffCreateInput = {
    department?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    department?: string | null
    createdAt?: Date | string
  }

  export type StaffUpdateInput = {
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateManyInput = {
    id?: string
    department?: string | null
    createdAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    user?: UserCreateNestedOneWithoutAddresssInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutAddresssNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientCreateInput = {
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
    emergencyContact?: NextOfKinCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: NextOfKinUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    emergencyContact?: NextOfKinUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: NextOfKinUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextOfKinCreateInput = {
    id?: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutEmergencyContactInput
  }

  export type NextOfKinUncheckedCreateInput = {
    id?: string
    patientId: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextOfKinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutEmergencyContactNestedInput
  }

  export type NextOfKinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextOfKinCreateManyInput = {
    id?: string
    patientId: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextOfKinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextOfKinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NHISWorkerCreateInput = {
    role?: $Enums.NHISRole | null
    user?: UserCreateNestedOneWithoutNhisWorkerInput
  }

  export type NHISWorkerUncheckedCreateInput = {
    id?: string
    role?: $Enums.NHISRole | null
  }

  export type NHISWorkerUpdateInput = {
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
    user?: UserUpdateOneRequiredWithoutNhisWorkerNestedInput
  }

  export type NHISWorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
  }

  export type NHISWorkerCreateManyInput = {
    id?: string
    role?: $Enums.NHISRole | null
  }

  export type NHISWorkerUpdateManyMutationInput = {
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
  }

  export type NHISWorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
  }

  export type PublicHealthWorkerCreateInput = {
    role?: $Enums.PublicHealthRole | null
    user?: UserCreateNestedOneWithoutPublicHealthWorkerInput
  }

  export type PublicHealthWorkerUncheckedCreateInput = {
    id?: string
    role?: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerUpdateInput = {
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
    user?: UserUpdateOneRequiredWithoutPublicHealthWorkerNestedInput
  }

  export type PublicHealthWorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerCreateManyInput = {
    id?: string
    role?: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerUpdateManyMutationInput = {
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPaymentPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentPlanNullableFilter<$PrismaModel> | $Enums.PaymentPlan | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    website?: SortOrder
    slogan?: SortOrder
    pobox?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    email?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    website?: SortOrder
    slogan?: SortOrder
    pobox?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HospitalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    logo?: SortOrder
    email?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    website?: SortOrder
    slogan?: SortOrder
    pobox?: SortOrder
    paymentPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPaymentPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPermissionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | EnumPermissionActionFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionActionFilter<$PrismaModel> | $Enums.PermissionAction
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ResourceScalarRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type RolePermissionRoleIdResourceIdCompoundUniqueInput = {
    roleId: string
    resourceId: string
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    path?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    path?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    resourceId?: SortOrder
    action?: SortOrder
    path?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPermissionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | EnumPermissionActionFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel> | $Enums.PermissionAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionActionFilter<$PrismaModel>
    _max?: NestedEnumPermissionActionFilter<$PrismaModel>
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type HospitalNullableScalarRelationFilter = {
    is?: HospitalWhereInput | null
    isNot?: HospitalWhereInput | null
  }

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type PersonalAccessTokenListRelationFilter = {
    every?: PersonalAccessTokenWhereInput
    some?: PersonalAccessTokenWhereInput
    none?: PersonalAccessTokenWhereInput
  }

  export type PasswordHistoryListRelationFilter = {
    every?: PasswordHistoryWhereInput
    some?: PasswordHistoryWhereInput
    none?: PasswordHistoryWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type NHISWorkerNullableScalarRelationFilter = {
    is?: NHISWorkerWhereInput | null
    isNot?: NHISWorkerWhereInput | null
  }

  export type PublicHealthWorkerNullableScalarRelationFilter = {
    is?: PublicHealthWorkerWhereInput | null
    isNot?: PublicHealthWorkerWhereInput | null
  }

  export type PersonalAccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    hospitalId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    hospitalId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    hospitalId?: SortOrder
    roleId?: SortOrder
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasswordHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasswordHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type PersonalAccessTokenUserIdTypeCompoundUniqueInput = {
    userId: string
    type: $Enums.TokenType
  }

  export type PersonalAccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PersonalAccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PersonalAccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AddressUserIdTypeCompoundUniqueInput = {
    userId: string
    type: $Enums.AddressType
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type EnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type EnumGenotypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genotype | EnumGenotypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenotypeNullableFilter<$PrismaModel> | $Enums.Genotype | null
  }

  export type NextOfKinListRelationFilter = {
    every?: NextOfKinWhereInput
    some?: NextOfKinWhereInput
    none?: NextOfKinWhereInput
  }

  export type NextOfKinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nfcId?: SortOrder
    nfcLinkedAt?: SortOrder
    nfcLinkedBy?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    spokenLanguages?: SortOrder
    bloodGroup?: SortOrder
    genotype?: SortOrder
    emergencyContactId?: SortOrder
    billingtype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nfcId?: SortOrder
    nfcLinkedAt?: SortOrder
    nfcLinkedBy?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    bloodGroup?: SortOrder
    genotype?: SortOrder
    emergencyContactId?: SortOrder
    billingtype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nfcId?: SortOrder
    nfcLinkedAt?: SortOrder
    nfcLinkedBy?: SortOrder
    dateOfBirth?: SortOrder
    sex?: SortOrder
    maritalStatus?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    religion?: SortOrder
    ethnicity?: SortOrder
    bloodGroup?: SortOrder
    genotype?: SortOrder
    emergencyContactId?: SortOrder
    billingtype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type EnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type EnumGenotypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genotype | EnumGenotypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenotypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genotype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenotypeNullableFilter<$PrismaModel>
    _max?: NestedEnumGenotypeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type NextOfKinPatientIdIsEmergencyContactCompoundUniqueInput = {
    patientId: string
    isEmergencyContact: boolean
  }

  export type NextOfKinCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    relationship?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isEmergencyContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextOfKinMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    relationship?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isEmergencyContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NextOfKinMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    relationship?: SortOrder
    email?: SortOrder
    address?: SortOrder
    isEmergencyContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumNHISRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NHISRole | EnumNHISRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNHISRoleNullableFilter<$PrismaModel> | $Enums.NHISRole | null
  }

  export type NHISWorkerCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type NHISWorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type NHISWorkerMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type EnumNHISRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NHISRole | EnumNHISRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNHISRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.NHISRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNHISRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumNHISRoleNullableFilter<$PrismaModel>
  }

  export type EnumPublicHealthRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicHealthRole | EnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel> | $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type PublicHealthWorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type PublicHealthWorkerMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type EnumPublicHealthRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicHealthRole | EnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPublicHealthRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.PublicHealthRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel>
  }

  export type HospitalCreatephoneInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HospitalUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumPaymentPlanFieldUpdateOperationsInput = {
    set?: $Enums.PaymentPlan | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput> | UserCreateWithoutHospitalInput[] | UserUncheckedCreateWithoutHospitalInput[]
    connectOrCreate?: UserCreateOrConnectWithoutHospitalInput | UserCreateOrConnectWithoutHospitalInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutHospitalInput | UserUpsertWithWhereUniqueWithoutHospitalInput[]
    createMany?: UserCreateManyHospitalInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutHospitalInput | UserUpdateWithWhereUniqueWithoutHospitalInput[]
    updateMany?: UserUpdateManyWithWhereWithoutHospitalInput | UserUpdateManyWithWhereWithoutHospitalInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutResourceInput = {
    create?: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput> | RolePermissionCreateWithoutResourceInput[] | RolePermissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutResourceInput | RolePermissionCreateOrConnectWithoutResourceInput[]
    createMany?: RolePermissionCreateManyResourceInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput> | RolePermissionCreateWithoutResourceInput[] | RolePermissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutResourceInput | RolePermissionCreateOrConnectWithoutResourceInput[]
    createMany?: RolePermissionCreateManyResourceInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutResourceNestedInput = {
    create?: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput> | RolePermissionCreateWithoutResourceInput[] | RolePermissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutResourceInput | RolePermissionCreateOrConnectWithoutResourceInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutResourceInput | RolePermissionUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: RolePermissionCreateManyResourceInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutResourceInput | RolePermissionUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutResourceInput | RolePermissionUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput> | RolePermissionCreateWithoutResourceInput[] | RolePermissionUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutResourceInput | RolePermissionCreateOrConnectWithoutResourceInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutResourceInput | RolePermissionUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: RolePermissionCreateManyResourceInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutResourceInput | RolePermissionUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutResourceInput | RolePermissionUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<ResourceCreateWithoutRolePermissionsInput, ResourceUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRolePermissionsInput
    connect?: ResourceWhereUniqueInput
  }

  export type EnumPermissionActionFieldUpdateOperationsInput = {
    set?: $Enums.PermissionAction
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: RoleUpsertWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionsInput, RoleUpdateWithoutRolePermissionsInput>, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type ResourceUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<ResourceCreateWithoutRolePermissionsInput, ResourceUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRolePermissionsInput
    upsert?: ResourceUpsertWithoutRolePermissionsInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutRolePermissionsInput, ResourceUpdateWithoutRolePermissionsInput>, ResourceUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type UserCreatephoneInput = {
    set: string[]
  }

  export type HospitalCreateNestedOneWithoutUsersInput = {
    create?: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUsersInput
    connect?: HospitalWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PersonalAccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput> | PersonalAccessTokenCreateWithoutUserInput[] | PersonalAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalAccessTokenCreateOrConnectWithoutUserInput | PersonalAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: PersonalAccessTokenCreateManyUserInputEnvelope
    connect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
  }

  export type PasswordHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput> | PasswordHistoryCreateWithoutUserInput[] | PasswordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput | PasswordHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PasswordHistoryCreateManyUserInputEnvelope
    connect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type StaffCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type NHISWorkerCreateNestedOneWithoutUserInput = {
    create?: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: NHISWorkerCreateOrConnectWithoutUserInput
    connect?: NHISWorkerWhereUniqueInput
  }

  export type PublicHealthWorkerCreateNestedOneWithoutUserInput = {
    create?: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublicHealthWorkerCreateOrConnectWithoutUserInput
    connect?: PublicHealthWorkerWhereUniqueInput
  }

  export type PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput> | PersonalAccessTokenCreateWithoutUserInput[] | PersonalAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalAccessTokenCreateOrConnectWithoutUserInput | PersonalAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: PersonalAccessTokenCreateManyUserInputEnvelope
    connect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
  }

  export type PasswordHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput> | PasswordHistoryCreateWithoutUserInput[] | PasswordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput | PasswordHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PasswordHistoryCreateManyUserInputEnvelope
    connect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type NHISWorkerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: NHISWorkerCreateOrConnectWithoutUserInput
    connect?: NHISWorkerWhereUniqueInput
  }

  export type PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublicHealthWorkerCreateOrConnectWithoutUserInput
    connect?: PublicHealthWorkerWhereUniqueInput
  }

  export type UserUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type HospitalUpdateOneWithoutUsersNestedInput = {
    create?: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    connectOrCreate?: HospitalCreateOrConnectWithoutUsersInput
    upsert?: HospitalUpsertWithoutUsersInput
    disconnect?: HospitalWhereInput | boolean
    delete?: HospitalWhereInput | boolean
    connect?: HospitalWhereUniqueInput
    update?: XOR<XOR<HospitalUpdateToOneWithWhereWithoutUsersInput, HospitalUpdateWithoutUsersInput>, HospitalUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PersonalAccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput> | PersonalAccessTokenCreateWithoutUserInput[] | PersonalAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalAccessTokenCreateOrConnectWithoutUserInput | PersonalAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: PersonalAccessTokenUpsertWithWhereUniqueWithoutUserInput | PersonalAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalAccessTokenCreateManyUserInputEnvelope
    set?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    disconnect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    delete?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    connect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    update?: PersonalAccessTokenUpdateWithWhereUniqueWithoutUserInput | PersonalAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalAccessTokenUpdateManyWithWhereWithoutUserInput | PersonalAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalAccessTokenScalarWhereInput | PersonalAccessTokenScalarWhereInput[]
  }

  export type PasswordHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput> | PasswordHistoryCreateWithoutUserInput[] | PasswordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput | PasswordHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PasswordHistoryUpsertWithWhereUniqueWithoutUserInput | PasswordHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordHistoryCreateManyUserInputEnvelope
    set?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    disconnect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    delete?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    connect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    update?: PasswordHistoryUpdateWithWhereUniqueWithoutUserInput | PasswordHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordHistoryUpdateManyWithWhereWithoutUserInput | PasswordHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordHistoryScalarWhereInput | PasswordHistoryScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type StaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type NHISWorkerUpdateOneWithoutUserNestedInput = {
    create?: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: NHISWorkerCreateOrConnectWithoutUserInput
    upsert?: NHISWorkerUpsertWithoutUserInput
    disconnect?: NHISWorkerWhereInput | boolean
    delete?: NHISWorkerWhereInput | boolean
    connect?: NHISWorkerWhereUniqueInput
    update?: XOR<XOR<NHISWorkerUpdateToOneWithWhereWithoutUserInput, NHISWorkerUpdateWithoutUserInput>, NHISWorkerUncheckedUpdateWithoutUserInput>
  }

  export type PublicHealthWorkerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublicHealthWorkerCreateOrConnectWithoutUserInput
    upsert?: PublicHealthWorkerUpsertWithoutUserInput
    disconnect?: PublicHealthWorkerWhereInput | boolean
    delete?: PublicHealthWorkerWhereInput | boolean
    connect?: PublicHealthWorkerWhereUniqueInput
    update?: XOR<XOR<PublicHealthWorkerUpdateToOneWithWhereWithoutUserInput, PublicHealthWorkerUpdateWithoutUserInput>, PublicHealthWorkerUncheckedUpdateWithoutUserInput>
  }

  export type PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput> | PersonalAccessTokenCreateWithoutUserInput[] | PersonalAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PersonalAccessTokenCreateOrConnectWithoutUserInput | PersonalAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: PersonalAccessTokenUpsertWithWhereUniqueWithoutUserInput | PersonalAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PersonalAccessTokenCreateManyUserInputEnvelope
    set?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    disconnect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    delete?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    connect?: PersonalAccessTokenWhereUniqueInput | PersonalAccessTokenWhereUniqueInput[]
    update?: PersonalAccessTokenUpdateWithWhereUniqueWithoutUserInput | PersonalAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PersonalAccessTokenUpdateManyWithWhereWithoutUserInput | PersonalAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PersonalAccessTokenScalarWhereInput | PersonalAccessTokenScalarWhereInput[]
  }

  export type PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput> | PasswordHistoryCreateWithoutUserInput[] | PasswordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordHistoryCreateOrConnectWithoutUserInput | PasswordHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PasswordHistoryUpsertWithWhereUniqueWithoutUserInput | PasswordHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordHistoryCreateManyUserInputEnvelope
    set?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    disconnect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    delete?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    connect?: PasswordHistoryWhereUniqueInput | PasswordHistoryWhereUniqueInput[]
    update?: PasswordHistoryUpdateWithWhereUniqueWithoutUserInput | PasswordHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordHistoryUpdateManyWithWhereWithoutUserInput | PasswordHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordHistoryScalarWhereInput | PasswordHistoryScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type StaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type NHISWorkerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: NHISWorkerCreateOrConnectWithoutUserInput
    upsert?: NHISWorkerUpsertWithoutUserInput
    disconnect?: NHISWorkerWhereInput | boolean
    delete?: NHISWorkerWhereInput | boolean
    connect?: NHISWorkerWhereUniqueInput
    update?: XOR<XOR<NHISWorkerUpdateToOneWithWhereWithoutUserInput, NHISWorkerUpdateWithoutUserInput>, NHISWorkerUncheckedUpdateWithoutUserInput>
  }

  export type PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublicHealthWorkerCreateOrConnectWithoutUserInput
    upsert?: PublicHealthWorkerUpsertWithoutUserInput
    disconnect?: PublicHealthWorkerWhereInput | boolean
    delete?: PublicHealthWorkerWhereInput | boolean
    connect?: PublicHealthWorkerWhereUniqueInput
    update?: XOR<XOR<PublicHealthWorkerUpdateToOneWithWhereWithoutUserInput, PublicHealthWorkerUpdateWithoutUserInput>, PublicHealthWorkerUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPasswordHistoryInput = {
    create?: XOR<UserCreateWithoutPasswordHistoryInput, UserUncheckedCreateWithoutPasswordHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPasswordHistoryInput, UserUncheckedCreateWithoutPasswordHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordHistoryInput
    upsert?: UserUpsertWithoutPasswordHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordHistoryInput, UserUpdateWithoutPasswordHistoryInput>, UserUncheckedUpdateWithoutPasswordHistoryInput>
  }

  export type UserCreateNestedOneWithoutPersonalAccessTokensInput = {
    create?: XOR<UserCreateWithoutPersonalAccessTokensInput, UserUncheckedCreateWithoutPersonalAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalAccessTokensInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutPersonalAccessTokensNestedInput = {
    create?: XOR<UserCreateWithoutPersonalAccessTokensInput, UserUncheckedCreateWithoutPersonalAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalAccessTokensInput
    upsert?: UserUpsertWithoutPersonalAccessTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalAccessTokensInput, UserUpdateWithoutPersonalAccessTokensInput>, UserUncheckedUpdateWithoutPersonalAccessTokensInput>
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserCreateNestedOneWithoutAddresssInput = {
    create?: XOR<UserCreateWithoutAddresssInput, UserUncheckedCreateWithoutAddresssInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddresssInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type UserUpdateOneWithoutAddresssNestedInput = {
    create?: XOR<UserCreateWithoutAddresssInput, UserUncheckedCreateWithoutAddresssInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddresssInput
    upsert?: UserUpsertWithoutAddresssInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddresssInput, UserUpdateWithoutAddresssInput>, UserUncheckedUpdateWithoutAddresssInput>
  }

  export type PatientCreatespokenLanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type NextOfKinCreateNestedManyWithoutPatientInput = {
    create?: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput> | NextOfKinCreateWithoutPatientInput[] | NextOfKinUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NextOfKinCreateOrConnectWithoutPatientInput | NextOfKinCreateOrConnectWithoutPatientInput[]
    createMany?: NextOfKinCreateManyPatientInputEnvelope
    connect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
  }

  export type NextOfKinUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput> | NextOfKinCreateWithoutPatientInput[] | NextOfKinUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NextOfKinCreateOrConnectWithoutPatientInput | NextOfKinCreateOrConnectWithoutPatientInput[]
    createMany?: NextOfKinCreateManyPatientInputEnvelope
    connect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type PatientUpdatespokenLanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup | null
  }

  export type NullableEnumGenotypeFieldUpdateOperationsInput = {
    set?: $Enums.Genotype | null
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type NextOfKinUpdateManyWithoutPatientNestedInput = {
    create?: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput> | NextOfKinCreateWithoutPatientInput[] | NextOfKinUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NextOfKinCreateOrConnectWithoutPatientInput | NextOfKinCreateOrConnectWithoutPatientInput[]
    upsert?: NextOfKinUpsertWithWhereUniqueWithoutPatientInput | NextOfKinUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: NextOfKinCreateManyPatientInputEnvelope
    set?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    disconnect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    delete?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    connect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    update?: NextOfKinUpdateWithWhereUniqueWithoutPatientInput | NextOfKinUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: NextOfKinUpdateManyWithWhereWithoutPatientInput | NextOfKinUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: NextOfKinScalarWhereInput | NextOfKinScalarWhereInput[]
  }

  export type NextOfKinUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput> | NextOfKinCreateWithoutPatientInput[] | NextOfKinUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: NextOfKinCreateOrConnectWithoutPatientInput | NextOfKinCreateOrConnectWithoutPatientInput[]
    upsert?: NextOfKinUpsertWithWhereUniqueWithoutPatientInput | NextOfKinUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: NextOfKinCreateManyPatientInputEnvelope
    set?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    disconnect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    delete?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    connect?: NextOfKinWhereUniqueInput | NextOfKinWhereUniqueInput[]
    update?: NextOfKinUpdateWithWhereUniqueWithoutPatientInput | NextOfKinUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: NextOfKinUpdateManyWithWhereWithoutPatientInput | NextOfKinUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: NextOfKinScalarWhereInput | NextOfKinScalarWhereInput[]
  }

  export type NextOfKinCreatephoneInput = {
    set: string[]
  }

  export type PatientCreateNestedOneWithoutEmergencyContactInput = {
    create?: XOR<PatientCreateWithoutEmergencyContactInput, PatientUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyContactInput
    connect?: PatientWhereUniqueInput
  }

  export type NextOfKinUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatientUpdateOneRequiredWithoutEmergencyContactNestedInput = {
    create?: XOR<PatientCreateWithoutEmergencyContactInput, PatientUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: PatientCreateOrConnectWithoutEmergencyContactInput
    upsert?: PatientUpsertWithoutEmergencyContactInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutEmergencyContactInput, PatientUpdateWithoutEmergencyContactInput>, PatientUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type UserCreateNestedOneWithoutNhisWorkerInput = {
    create?: XOR<UserCreateWithoutNhisWorkerInput, UserUncheckedCreateWithoutNhisWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutNhisWorkerInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumNHISRoleFieldUpdateOperationsInput = {
    set?: $Enums.NHISRole | null
  }

  export type UserUpdateOneRequiredWithoutNhisWorkerNestedInput = {
    create?: XOR<UserCreateWithoutNhisWorkerInput, UserUncheckedCreateWithoutNhisWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutNhisWorkerInput
    upsert?: UserUpsertWithoutNhisWorkerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNhisWorkerInput, UserUpdateWithoutNhisWorkerInput>, UserUncheckedUpdateWithoutNhisWorkerInput>
  }

  export type UserCreateNestedOneWithoutPublicHealthWorkerInput = {
    create?: XOR<UserCreateWithoutPublicHealthWorkerInput, UserUncheckedCreateWithoutPublicHealthWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicHealthWorkerInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumPublicHealthRoleFieldUpdateOperationsInput = {
    set?: $Enums.PublicHealthRole | null
  }

  export type UserUpdateOneRequiredWithoutPublicHealthWorkerNestedInput = {
    create?: XOR<UserCreateWithoutPublicHealthWorkerInput, UserUncheckedCreateWithoutPublicHealthWorkerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicHealthWorkerInput
    upsert?: UserUpsertWithoutPublicHealthWorkerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublicHealthWorkerInput, UserUpdateWithoutPublicHealthWorkerInput>, UserUncheckedUpdateWithoutPublicHealthWorkerInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPaymentPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentPlanNullableFilter<$PrismaModel> | $Enums.PaymentPlan | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentPlan | EnumPaymentPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentPlan[] | ListEnumPaymentPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentPlanNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPermissionActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | EnumPermissionActionFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionActionFilter<$PrismaModel> | $Enums.PermissionAction
  }

  export type NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionAction | EnumPermissionActionFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionAction[] | ListEnumPermissionActionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionActionWithAggregatesFilter<$PrismaModel> | $Enums.PermissionAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionActionFilter<$PrismaModel>
    _max?: NestedEnumPermissionActionFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type NestedEnumGenotypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genotype | EnumGenotypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenotypeNullableFilter<$PrismaModel> | $Enums.Genotype | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenotypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genotype | EnumGenotypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genotype[] | ListEnumGenotypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenotypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genotype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenotypeNullableFilter<$PrismaModel>
    _max?: NestedEnumGenotypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumNHISRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NHISRole | EnumNHISRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNHISRoleNullableFilter<$PrismaModel> | $Enums.NHISRole | null
  }

  export type NestedEnumNHISRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NHISRole | EnumNHISRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NHISRole[] | ListEnumNHISRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNHISRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.NHISRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNHISRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumNHISRoleNullableFilter<$PrismaModel>
  }

  export type NestedEnumPublicHealthRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicHealthRole | EnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel> | $Enums.PublicHealthRole | null
  }

  export type NestedEnumPublicHealthRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublicHealthRole | EnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PublicHealthRole[] | ListEnumPublicHealthRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPublicHealthRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.PublicHealthRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumPublicHealthRoleNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutHospitalInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHospitalInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHospitalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserCreateManyHospitalInputEnvelope = {
    data: UserCreateManyHospitalInput | UserCreateManyHospitalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
    create: XOR<UserCreateWithoutHospitalInput, UserUncheckedCreateWithoutHospitalInput>
  }

  export type UserUpdateWithWhereUniqueWithoutHospitalInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutHospitalInput, UserUncheckedUpdateWithoutHospitalInput>
  }

  export type UserUpdateManyWithWhereWithoutHospitalInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutHospitalInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableListFilter<"User">
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    updatedBy?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedBy?: StringNullableFilter<"User"> | string | null
    hospitalId?: StringNullableFilter<"User"> | string | null
    roleId?: StringNullableFilter<"User"> | string | null
  }

  export type RolePermissionCreateWithoutRoleInput = {
    id?: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    resource: ResourceCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    resourceId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    resourceId?: StringFilter<"RolePermission"> | string
    action?: EnumPermissionActionFilter<"RolePermission"> | $Enums.PermissionAction
    path?: StringNullableFilter<"RolePermission"> | string | null
    description?: StringNullableFilter<"RolePermission"> | string | null
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedAt?: DateTimeFilter<"RolePermission"> | Date | string
    updatedBy?: StringNullableFilter<"RolePermission"> | string | null
    deletedAt?: DateTimeNullableFilter<"RolePermission"> | Date | string | null
    deletedBy?: StringNullableFilter<"RolePermission"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionCreateWithoutResourceInput = {
    id?: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    role: RoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutResourceInput = {
    id?: string
    roleId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RolePermissionCreateOrConnectWithoutResourceInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput>
  }

  export type RolePermissionCreateManyResourceInputEnvelope = {
    data: RolePermissionCreateManyResourceInput | RolePermissionCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutResourceInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutResourceInput, RolePermissionUncheckedUpdateWithoutResourceInput>
    create: XOR<RolePermissionCreateWithoutResourceInput, RolePermissionUncheckedCreateWithoutResourceInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutResourceInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutResourceInput, RolePermissionUncheckedUpdateWithoutResourceInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutResourceInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutResourceInput>
  }

  export type RoleCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type ResourceCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ResourceUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ResourceCreateOrConnectWithoutRolePermissionsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutRolePermissionsInput, ResourceUncheckedCreateWithoutRolePermissionsInput>
  }

  export type RoleUpsertWithoutRolePermissionsInput = {
    update: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RoleUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ResourceUpsertWithoutRolePermissionsInput = {
    update: XOR<ResourceUpdateWithoutRolePermissionsInput, ResourceUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<ResourceCreateWithoutRolePermissionsInput, ResourceUncheckedCreateWithoutRolePermissionsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutRolePermissionsInput, ResourceUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type ResourceUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HospitalCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    logo?: string | null
    phone?: HospitalCreatephoneInput | string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website?: string | null
    slogan?: string | null
    pobox?: string | null
    paymentPlan?: $Enums.PaymentPlan | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address: string
    logo?: string | null
    phone?: HospitalCreatephoneInput | string[]
    email: string
    city: string
    state: string
    country: string
    zipCode: string
    website?: string | null
    slogan?: string | null
    pobox?: string | null
    paymentPlan?: $Enums.PaymentPlan | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HospitalCreateOrConnectWithoutUsersInput = {
    where: HospitalWhereUniqueInput
    create: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PersonalAccessTokenCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PersonalAccessTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PersonalAccessTokenCreateOrConnectWithoutUserInput = {
    where: PersonalAccessTokenWhereUniqueInput
    create: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type PersonalAccessTokenCreateManyUserInputEnvelope = {
    data: PersonalAccessTokenCreateManyUserInput | PersonalAccessTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordHistoryCreateWithoutUserInput = {
    id?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PasswordHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PasswordHistoryCreateOrConnectWithoutUserInput = {
    where: PasswordHistoryWhereUniqueInput
    create: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput>
  }

  export type PasswordHistoryCreateManyUserInputEnvelope = {
    data: PasswordHistoryCreateManyUserInput | PasswordHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutUserInput = {
    department?: string | null
    createdAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutUserInput = {
    department?: string | null
    createdAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutUserInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: NextOfKinCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencyContact?: NextOfKinUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type NHISWorkerCreateWithoutUserInput = {
    role?: $Enums.NHISRole | null
  }

  export type NHISWorkerUncheckedCreateWithoutUserInput = {
    role?: $Enums.NHISRole | null
  }

  export type NHISWorkerCreateOrConnectWithoutUserInput = {
    where: NHISWorkerWhereUniqueInput
    create: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
  }

  export type PublicHealthWorkerCreateWithoutUserInput = {
    role?: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerUncheckedCreateWithoutUserInput = {
    role?: $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerCreateOrConnectWithoutUserInput = {
    where: PublicHealthWorkerWhereUniqueInput
    create: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
  }

  export type HospitalUpsertWithoutUsersInput = {
    update: XOR<HospitalUpdateWithoutUsersInput, HospitalUncheckedUpdateWithoutUsersInput>
    create: XOR<HospitalCreateWithoutUsersInput, HospitalUncheckedCreateWithoutUsersInput>
    where?: HospitalWhereInput
  }

  export type HospitalUpdateToOneWithWhereWithoutUsersInput = {
    where?: HospitalWhereInput
    data: XOR<HospitalUpdateWithoutUsersInput, HospitalUncheckedUpdateWithoutUsersInput>
  }

  export type HospitalUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospitalUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: HospitalUpdatephoneInput | string[]
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    pobox?: NullableStringFieldUpdateOperationsInput | string | null
    paymentPlan?: NullableEnumPaymentPlanFieldUpdateOperationsInput | $Enums.PaymentPlan | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PersonalAccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PersonalAccessTokenWhereUniqueInput
    update: XOR<PersonalAccessTokenUpdateWithoutUserInput, PersonalAccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PersonalAccessTokenCreateWithoutUserInput, PersonalAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type PersonalAccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PersonalAccessTokenWhereUniqueInput
    data: XOR<PersonalAccessTokenUpdateWithoutUserInput, PersonalAccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type PersonalAccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: PersonalAccessTokenScalarWhereInput
    data: XOR<PersonalAccessTokenUpdateManyMutationInput, PersonalAccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PersonalAccessTokenScalarWhereInput = {
    AND?: PersonalAccessTokenScalarWhereInput | PersonalAccessTokenScalarWhereInput[]
    OR?: PersonalAccessTokenScalarWhereInput[]
    NOT?: PersonalAccessTokenScalarWhereInput | PersonalAccessTokenScalarWhereInput[]
    id?: StringFilter<"PersonalAccessToken"> | string
    userId?: StringFilter<"PersonalAccessToken"> | string
    token?: StringFilter<"PersonalAccessToken"> | string
    type?: EnumTokenTypeFilter<"PersonalAccessToken"> | $Enums.TokenType
    expiry?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    createdAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    updatedAt?: DateTimeFilter<"PersonalAccessToken"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PersonalAccessToken"> | Date | string | null
  }

  export type PasswordHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordHistoryWhereUniqueInput
    update: XOR<PasswordHistoryUpdateWithoutUserInput, PasswordHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordHistoryCreateWithoutUserInput, PasswordHistoryUncheckedCreateWithoutUserInput>
  }

  export type PasswordHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordHistoryWhereUniqueInput
    data: XOR<PasswordHistoryUpdateWithoutUserInput, PasswordHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PasswordHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PasswordHistoryScalarWhereInput
    data: XOR<PasswordHistoryUpdateManyMutationInput, PasswordHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordHistoryScalarWhereInput = {
    AND?: PasswordHistoryScalarWhereInput | PasswordHistoryScalarWhereInput[]
    OR?: PasswordHistoryScalarWhereInput[]
    NOT?: PasswordHistoryScalarWhereInput | PasswordHistoryScalarWhereInput[]
    id?: StringFilter<"PasswordHistory"> | string
    userId?: StringFilter<"PasswordHistory"> | string
    password?: StringFilter<"PasswordHistory"> | string
    createdAt?: DateTimeFilter<"PasswordHistory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PasswordHistory"> | Date | string | null
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringNullableFilter<"Address"> | string | null
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    userId?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    updatedBy?: StringNullableFilter<"Address"> | string | null
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    deletedBy?: StringNullableFilter<"Address"> | string | null
  }

  export type StaffUpsertWithoutUserInput = {
    update: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateWithoutUserInput = {
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutUserInput = {
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: NextOfKinUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencyContact?: NextOfKinUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type NHISWorkerUpsertWithoutUserInput = {
    update: XOR<NHISWorkerUpdateWithoutUserInput, NHISWorkerUncheckedUpdateWithoutUserInput>
    create: XOR<NHISWorkerCreateWithoutUserInput, NHISWorkerUncheckedCreateWithoutUserInput>
    where?: NHISWorkerWhereInput
  }

  export type NHISWorkerUpdateToOneWithWhereWithoutUserInput = {
    where?: NHISWorkerWhereInput
    data: XOR<NHISWorkerUpdateWithoutUserInput, NHISWorkerUncheckedUpdateWithoutUserInput>
  }

  export type NHISWorkerUpdateWithoutUserInput = {
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
  }

  export type NHISWorkerUncheckedUpdateWithoutUserInput = {
    role?: NullableEnumNHISRoleFieldUpdateOperationsInput | $Enums.NHISRole | null
  }

  export type PublicHealthWorkerUpsertWithoutUserInput = {
    update: XOR<PublicHealthWorkerUpdateWithoutUserInput, PublicHealthWorkerUncheckedUpdateWithoutUserInput>
    create: XOR<PublicHealthWorkerCreateWithoutUserInput, PublicHealthWorkerUncheckedCreateWithoutUserInput>
    where?: PublicHealthWorkerWhereInput
  }

  export type PublicHealthWorkerUpdateToOneWithWhereWithoutUserInput = {
    where?: PublicHealthWorkerWhereInput
    data: XOR<PublicHealthWorkerUpdateWithoutUserInput, PublicHealthWorkerUncheckedUpdateWithoutUserInput>
  }

  export type PublicHealthWorkerUpdateWithoutUserInput = {
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
  }

  export type PublicHealthWorkerUncheckedUpdateWithoutUserInput = {
    role?: NullableEnumPublicHealthRoleFieldUpdateOperationsInput | $Enums.PublicHealthRole | null
  }

  export type UserCreateWithoutPasswordHistoryInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordHistoryInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordHistoryInput, UserUncheckedCreateWithoutPasswordHistoryInput>
  }

  export type UserUpsertWithoutPasswordHistoryInput = {
    update: XOR<UserUpdateWithoutPasswordHistoryInput, UserUncheckedUpdateWithoutPasswordHistoryInput>
    create: XOR<UserCreateWithoutPasswordHistoryInput, UserUncheckedCreateWithoutPasswordHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordHistoryInput, UserUncheckedUpdateWithoutPasswordHistoryInput>
  }

  export type UserUpdateWithoutPasswordHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPersonalAccessTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalAccessTokensInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalAccessTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalAccessTokensInput, UserUncheckedCreateWithoutPersonalAccessTokensInput>
  }

  export type UserUpsertWithoutPersonalAccessTokensInput = {
    update: XOR<UserUpdateWithoutPersonalAccessTokensInput, UserUncheckedUpdateWithoutPersonalAccessTokensInput>
    create: XOR<UserCreateWithoutPersonalAccessTokensInput, UserUncheckedCreateWithoutPersonalAccessTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalAccessTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalAccessTokensInput, UserUncheckedUpdateWithoutPersonalAccessTokensInput>
  }

  export type UserUpdateWithoutPersonalAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAddresssInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddresssInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddresssInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddresssInput, UserUncheckedCreateWithoutAddresssInput>
  }

  export type UserUpsertWithoutAddresssInput = {
    update: XOR<UserUpdateWithoutAddresssInput, UserUncheckedUpdateWithoutAddresssInput>
    create: XOR<UserCreateWithoutAddresssInput, UserUncheckedCreateWithoutAddresssInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddresssInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddresssInput, UserUncheckedUpdateWithoutAddresssInput>
  }

  export type UserUpdateWithoutAddresssInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddresssInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type NextOfKinCreateWithoutPatientInput = {
    id?: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextOfKinUncheckedCreateWithoutPatientInput = {
    id?: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextOfKinCreateOrConnectWithoutPatientInput = {
    where: NextOfKinWhereUniqueInput
    create: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput>
  }

  export type NextOfKinCreateManyPatientInputEnvelope = {
    data: NextOfKinCreateManyPatientInput | NextOfKinCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NextOfKinUpsertWithWhereUniqueWithoutPatientInput = {
    where: NextOfKinWhereUniqueInput
    update: XOR<NextOfKinUpdateWithoutPatientInput, NextOfKinUncheckedUpdateWithoutPatientInput>
    create: XOR<NextOfKinCreateWithoutPatientInput, NextOfKinUncheckedCreateWithoutPatientInput>
  }

  export type NextOfKinUpdateWithWhereUniqueWithoutPatientInput = {
    where: NextOfKinWhereUniqueInput
    data: XOR<NextOfKinUpdateWithoutPatientInput, NextOfKinUncheckedUpdateWithoutPatientInput>
  }

  export type NextOfKinUpdateManyWithWhereWithoutPatientInput = {
    where: NextOfKinScalarWhereInput
    data: XOR<NextOfKinUpdateManyMutationInput, NextOfKinUncheckedUpdateManyWithoutPatientInput>
  }

  export type NextOfKinScalarWhereInput = {
    AND?: NextOfKinScalarWhereInput | NextOfKinScalarWhereInput[]
    OR?: NextOfKinScalarWhereInput[]
    NOT?: NextOfKinScalarWhereInput | NextOfKinScalarWhereInput[]
    id?: StringFilter<"NextOfKin"> | string
    patientId?: StringFilter<"NextOfKin"> | string
    firstName?: StringFilter<"NextOfKin"> | string
    middleName?: StringFilter<"NextOfKin"> | string
    lastName?: StringFilter<"NextOfKin"> | string
    relationship?: StringFilter<"NextOfKin"> | string
    phone?: StringNullableListFilter<"NextOfKin">
    email?: StringNullableFilter<"NextOfKin"> | string | null
    address?: StringNullableFilter<"NextOfKin"> | string | null
    isEmergencyContact?: BoolFilter<"NextOfKin"> | boolean
    createdAt?: DateTimeFilter<"NextOfKin"> | Date | string
    updatedAt?: DateTimeFilter<"NextOfKin"> | Date | string
  }

  export type PatientCreateWithoutEmergencyContactInput = {
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutEmergencyContactInput = {
    id?: string
    patientId: string
    nfcId?: string | null
    nfcLinkedAt?: Date | string | null
    nfcLinkedBy?: string | null
    dateOfBirth: Date | string
    sex: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    nationality?: string | null
    occupation?: string | null
    religion?: string | null
    ethnicity?: string | null
    spokenLanguages?: PatientCreatespokenLanguagesInput | string[]
    bloodGroup?: $Enums.BloodGroup | null
    genotype?: $Enums.Genotype | null
    emergencyContactId: string
    billingtype?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateOrConnectWithoutEmergencyContactInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutEmergencyContactInput, PatientUncheckedCreateWithoutEmergencyContactInput>
  }

  export type PatientUpsertWithoutEmergencyContactInput = {
    update: XOR<PatientUpdateWithoutEmergencyContactInput, PatientUncheckedUpdateWithoutEmergencyContactInput>
    create: XOR<PatientCreateWithoutEmergencyContactInput, PatientUncheckedCreateWithoutEmergencyContactInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutEmergencyContactInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutEmergencyContactInput, PatientUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type PatientUpdateWithoutEmergencyContactInput = {
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutEmergencyContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nfcId?: NullableStringFieldUpdateOperationsInput | string | null
    nfcLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nfcLinkedBy?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    spokenLanguages?: PatientUpdatespokenLanguagesInput | string[]
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    genotype?: NullableEnumGenotypeFieldUpdateOperationsInput | $Enums.Genotype | null
    emergencyContactId?: StringFieldUpdateOperationsInput | string
    billingtype?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNhisWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNhisWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    publicHealthWorker?: PublicHealthWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNhisWorkerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNhisWorkerInput, UserUncheckedCreateWithoutNhisWorkerInput>
  }

  export type UserUpsertWithoutNhisWorkerInput = {
    update: XOR<UserUpdateWithoutNhisWorkerInput, UserUncheckedUpdateWithoutNhisWorkerInput>
    create: XOR<UserCreateWithoutNhisWorkerInput, UserUncheckedCreateWithoutNhisWorkerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNhisWorkerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNhisWorkerInput, UserUncheckedUpdateWithoutNhisWorkerInput>
  }

  export type UserUpdateWithoutNhisWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNhisWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPublicHealthWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospital?: HospitalCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    personalAccessTokens?: PersonalAccessTokenCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryCreateNestedManyWithoutUserInput
    addresss?: AddressCreateNestedManyWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPublicHealthWorkerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
    roleId?: string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedCreateNestedManyWithoutUserInput
    passwordHistory?: PasswordHistoryUncheckedCreateNestedManyWithoutUserInput
    addresss?: AddressUncheckedCreateNestedManyWithoutUserInput
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
    nhisWorker?: NHISWorkerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPublicHealthWorkerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicHealthWorkerInput, UserUncheckedCreateWithoutPublicHealthWorkerInput>
  }

  export type UserUpsertWithoutPublicHealthWorkerInput = {
    update: XOR<UserUpdateWithoutPublicHealthWorkerInput, UserUncheckedUpdateWithoutPublicHealthWorkerInput>
    create: XOR<UserCreateWithoutPublicHealthWorkerInput, UserUncheckedCreateWithoutPublicHealthWorkerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublicHealthWorkerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublicHealthWorkerInput, UserUncheckedUpdateWithoutPublicHealthWorkerInput>
  }

  export type UserUpdateWithoutPublicHealthWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicHealthWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyHospitalInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    roleId?: string | null
  }

  export type UserUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateManyRoleInput = {
    id?: string
    resourceId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    password: string
    firstName: string
    middleName: string
    lastName: string
    phone?: UserCreatephoneInput | string[]
    type: $Enums.UserType
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
    hospitalId?: string | null
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    resource?: ResourceUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    resourceId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospital?: HospitalUpdateOneWithoutUsersNestedInput
    personalAccessTokens?: PersonalAccessTokenUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUpdateManyWithoutUserNestedInput
    addresss?: AddressUpdateManyWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
    personalAccessTokens?: PersonalAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordHistory?: PasswordHistoryUncheckedUpdateManyWithoutUserNestedInput
    addresss?: AddressUncheckedUpdateManyWithoutUserNestedInput
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
    nhisWorker?: NHISWorkerUncheckedUpdateOneWithoutUserNestedInput
    publicHealthWorker?: PublicHealthWorkerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: UserUpdatephoneInput | string[]
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    hospitalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionCreateManyResourceInput = {
    id?: string
    roleId: string
    action: $Enums.PermissionAction
    path?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type RolePermissionUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    action?: EnumPermissionActionFieldUpdateOperationsInput | $Enums.PermissionAction
    path?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalAccessTokenCreateManyUserInput = {
    id?: string
    token: string
    type: $Enums.TokenType
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PasswordHistoryCreateManyUserInput = {
    id?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressCreateManyUserInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode?: string | null
    type: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedBy?: string | null
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type PersonalAccessTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonalAccessTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PersonalAccessTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NextOfKinCreateManyPatientInput = {
    id?: string
    firstName: string
    middleName: string
    lastName: string
    relationship: string
    phone?: NextOfKinCreatephoneInput | string[]
    email?: string | null
    address?: string | null
    isEmergencyContact?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NextOfKinUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextOfKinUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NextOfKinUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    phone?: NextOfKinUpdatephoneInput | string[]
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isEmergencyContact?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}