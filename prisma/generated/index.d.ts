
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Cerita
 * 
 */
export type Cerita = $Result.DefaultSelection<Prisma.$CeritaPayload>
/**
 * Model Scene
 * 
 */
export type Scene = $Result.DefaultSelection<Prisma.$ScenePayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model PilihanJawaban
 * 
 */
export type PilihanJawaban = $Result.DefaultSelection<Prisma.$PilihanJawabanPayload>
/**
 * Model HasilQuiz
 * 
 */
export type HasilQuiz = $Result.DefaultSelection<Prisma.$HasilQuizPayload>
/**
 * Model Progres
 * 
 */
export type Progres = $Result.DefaultSelection<Prisma.$ProgresPayload>
/**
 * Model Favorit
 * 
 */
export type Favorit = $Result.DefaultSelection<Prisma.$FavoritPayload>
/**
 * Model AppSetting
 * 
 */
export type AppSetting = $Result.DefaultSelection<Prisma.$AppSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusCerita: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type StatusCerita = (typeof StatusCerita)[keyof typeof StatusCerita]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusCerita = $Enums.StatusCerita

export const StatusCerita: typeof $Enums.StatusCerita

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs>;

  /**
   * `prisma.cerita`: Exposes CRUD operations for the **Cerita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ceritas
    * const ceritas = await prisma.cerita.findMany()
    * ```
    */
  get cerita(): Prisma.CeritaDelegate<ExtArgs>;

  /**
   * `prisma.scene`: Exposes CRUD operations for the **Scene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenes
    * const scenes = await prisma.scene.findMany()
    * ```
    */
  get scene(): Prisma.SceneDelegate<ExtArgs>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs>;

  /**
   * `prisma.pilihanJawaban`: Exposes CRUD operations for the **PilihanJawaban** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PilihanJawabans
    * const pilihanJawabans = await prisma.pilihanJawaban.findMany()
    * ```
    */
  get pilihanJawaban(): Prisma.PilihanJawabanDelegate<ExtArgs>;

  /**
   * `prisma.hasilQuiz`: Exposes CRUD operations for the **HasilQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HasilQuizs
    * const hasilQuizs = await prisma.hasilQuiz.findMany()
    * ```
    */
  get hasilQuiz(): Prisma.HasilQuizDelegate<ExtArgs>;

  /**
   * `prisma.progres`: Exposes CRUD operations for the **Progres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progres
    * const progres = await prisma.progres.findMany()
    * ```
    */
  get progres(): Prisma.ProgresDelegate<ExtArgs>;

  /**
   * `prisma.favorit`: Exposes CRUD operations for the **Favorit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorits
    * const favorits = await prisma.favorit.findMany()
    * ```
    */
  get favorit(): Prisma.FavoritDelegate<ExtArgs>;

  /**
   * `prisma.appSetting`: Exposes CRUD operations for the **AppSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSetting.findMany()
    * ```
    */
  get appSetting(): Prisma.AppSettingDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Kategori: 'Kategori',
    Cerita: 'Cerita',
    Scene: 'Scene',
    Quiz: 'Quiz',
    PilihanJawaban: 'PilihanJawaban',
    HasilQuiz: 'HasilQuiz',
    Progres: 'Progres',
    Favorit: 'Favorit',
    AppSetting: 'AppSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'kategori' | 'cerita' | 'scene' | 'quiz' | 'pilihanJawaban' | 'hasilQuiz' | 'progres' | 'favorit' | 'appSetting'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>,
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Cerita: {
        payload: Prisma.$CeritaPayload<ExtArgs>
        fields: Prisma.CeritaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CeritaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CeritaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          findFirst: {
            args: Prisma.CeritaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CeritaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          findMany: {
            args: Prisma.CeritaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>[]
          }
          create: {
            args: Prisma.CeritaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          createMany: {
            args: Prisma.CeritaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CeritaCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>[]
          }
          delete: {
            args: Prisma.CeritaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          update: {
            args: Prisma.CeritaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          deleteMany: {
            args: Prisma.CeritaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CeritaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CeritaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CeritaPayload>
          }
          aggregate: {
            args: Prisma.CeritaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCerita>
          }
          groupBy: {
            args: Prisma.CeritaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CeritaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CeritaCountArgs<ExtArgs>,
            result: $Utils.Optional<CeritaCountAggregateOutputType> | number
          }
        }
      }
      Scene: {
        payload: Prisma.$ScenePayload<ExtArgs>
        fields: Prisma.SceneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SceneFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SceneFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findFirst: {
            args: Prisma.SceneFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SceneFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findMany: {
            args: Prisma.SceneFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          create: {
            args: Prisma.SceneCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          createMany: {
            args: Prisma.SceneCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SceneCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          delete: {
            args: Prisma.SceneDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          update: {
            args: Prisma.SceneUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          deleteMany: {
            args: Prisma.SceneDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SceneUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SceneUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          aggregate: {
            args: Prisma.SceneAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScene>
          }
          groupBy: {
            args: Prisma.SceneGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SceneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SceneCountArgs<ExtArgs>,
            result: $Utils.Optional<SceneCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>,
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      PilihanJawaban: {
        payload: Prisma.$PilihanJawabanPayload<ExtArgs>
        fields: Prisma.PilihanJawabanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PilihanJawabanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PilihanJawabanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          findFirst: {
            args: Prisma.PilihanJawabanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PilihanJawabanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          findMany: {
            args: Prisma.PilihanJawabanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>[]
          }
          create: {
            args: Prisma.PilihanJawabanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          createMany: {
            args: Prisma.PilihanJawabanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PilihanJawabanCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>[]
          }
          delete: {
            args: Prisma.PilihanJawabanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          update: {
            args: Prisma.PilihanJawabanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          deleteMany: {
            args: Prisma.PilihanJawabanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PilihanJawabanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PilihanJawabanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PilihanJawabanPayload>
          }
          aggregate: {
            args: Prisma.PilihanJawabanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePilihanJawaban>
          }
          groupBy: {
            args: Prisma.PilihanJawabanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PilihanJawabanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PilihanJawabanCountArgs<ExtArgs>,
            result: $Utils.Optional<PilihanJawabanCountAggregateOutputType> | number
          }
        }
      }
      HasilQuiz: {
        payload: Prisma.$HasilQuizPayload<ExtArgs>
        fields: Prisma.HasilQuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HasilQuizFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HasilQuizFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          findFirst: {
            args: Prisma.HasilQuizFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HasilQuizFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          findMany: {
            args: Prisma.HasilQuizFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>[]
          }
          create: {
            args: Prisma.HasilQuizCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          createMany: {
            args: Prisma.HasilQuizCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HasilQuizCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>[]
          }
          delete: {
            args: Prisma.HasilQuizDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          update: {
            args: Prisma.HasilQuizUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          deleteMany: {
            args: Prisma.HasilQuizDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HasilQuizUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HasilQuizUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HasilQuizPayload>
          }
          aggregate: {
            args: Prisma.HasilQuizAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHasilQuiz>
          }
          groupBy: {
            args: Prisma.HasilQuizGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HasilQuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.HasilQuizCountArgs<ExtArgs>,
            result: $Utils.Optional<HasilQuizCountAggregateOutputType> | number
          }
        }
      }
      Progres: {
        payload: Prisma.$ProgresPayload<ExtArgs>
        fields: Prisma.ProgresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          findFirst: {
            args: Prisma.ProgresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          findMany: {
            args: Prisma.ProgresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>[]
          }
          create: {
            args: Prisma.ProgresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          createMany: {
            args: Prisma.ProgresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgresCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>[]
          }
          delete: {
            args: Prisma.ProgresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          update: {
            args: Prisma.ProgresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          deleteMany: {
            args: Prisma.ProgresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgresPayload>
          }
          aggregate: {
            args: Prisma.ProgresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgres>
          }
          groupBy: {
            args: Prisma.ProgresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgresGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgresCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgresCountAggregateOutputType> | number
          }
        }
      }
      Favorit: {
        payload: Prisma.$FavoritPayload<ExtArgs>
        fields: Prisma.FavoritFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          findFirst: {
            args: Prisma.FavoritFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          findMany: {
            args: Prisma.FavoritFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>[]
          }
          create: {
            args: Prisma.FavoritCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          createMany: {
            args: Prisma.FavoritCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>[]
          }
          delete: {
            args: Prisma.FavoritDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          update: {
            args: Prisma.FavoritUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          deleteMany: {
            args: Prisma.FavoritDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoritUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FavoritPayload>
          }
          aggregate: {
            args: Prisma.FavoritAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorit>
          }
          groupBy: {
            args: Prisma.FavoritGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoritGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoritCountAggregateOutputType> | number
          }
        }
      }
      AppSetting: {
        payload: Prisma.$AppSettingPayload<ExtArgs>
        fields: Prisma.AppSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findFirst: {
            args: Prisma.AppSettingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findMany: {
            args: Prisma.AppSettingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          create: {
            args: Prisma.AppSettingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          createMany: {
            args: Prisma.AppSettingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          delete: {
            args: Prisma.AppSettingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          update: {
            args: Prisma.AppSettingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppSettingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          aggregate: {
            args: Prisma.AppSettingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppSetting>
          }
          groupBy: {
            args: Prisma.AppSettingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingCountArgs<ExtArgs>,
            result: $Utils.Optional<AppSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    progres: number
    favorit: number
    hasilQuiz: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progres?: boolean | UserCountOutputTypeCountProgresArgs
    favorit?: boolean | UserCountOutputTypeCountFavoritArgs
    hasilQuiz?: boolean | UserCountOutputTypeCountHasilQuizArgs
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
  export type UserCountOutputTypeCountProgresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHasilQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilQuizWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    cerita: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cerita?: boolean | KategoriCountOutputTypeCountCeritaArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountCeritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CeritaWhereInput
  }


  /**
   * Count Type CeritaCountOutputType
   */

  export type CeritaCountOutputType = {
    scenes: number
    quizzes: number
    progres: number
    favorit: number
    hasilQuiz: number
  }

  export type CeritaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenes?: boolean | CeritaCountOutputTypeCountScenesArgs
    quizzes?: boolean | CeritaCountOutputTypeCountQuizzesArgs
    progres?: boolean | CeritaCountOutputTypeCountProgresArgs
    favorit?: boolean | CeritaCountOutputTypeCountFavoritArgs
    hasilQuiz?: boolean | CeritaCountOutputTypeCountHasilQuizArgs
  }

  // Custom InputTypes
  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CeritaCountOutputType
     */
    select?: CeritaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeCountProgresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresWhereInput
  }

  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeCountFavoritArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritWhereInput
  }

  /**
   * CeritaCountOutputType without action
   */
  export type CeritaCountOutputTypeCountHasilQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilQuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    pilihan: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilihan?: boolean | QuizCountOutputTypeCountPilihanArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountPilihanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PilihanJawabanWhereInput
  }


  /**
   * Models
   */

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
    nama: string | null
    avatar: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    avatar: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nama: number
    avatar: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    avatar?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    avatar?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    avatar?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    nama: string
    avatar: string | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    nama?: boolean
    avatar?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    progres?: boolean | User$progresArgs<ExtArgs>
    favorit?: boolean | User$favoritArgs<ExtArgs>
    hasilQuiz?: boolean | User$hasilQuizArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    avatar?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progres?: boolean | User$progresArgs<ExtArgs>
    favorit?: boolean | User$favoritArgs<ExtArgs>
    hasilQuiz?: boolean | User$hasilQuizArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      progres: Prisma.$ProgresPayload<ExtArgs>[]
      favorit: Prisma.$FavoritPayload<ExtArgs>[]
      hasilQuiz: Prisma.$HasilQuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nama: string
      avatar: string | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    progres<T extends User$progresArgs<ExtArgs> = {}>(args?: Subset<T, User$progresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findMany'> | Null>;

    favorit<T extends User$favoritArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findMany'> | Null>;

    hasilQuiz<T extends User$hasilQuizArgs<ExtArgs> = {}>(args?: Subset<T, User$hasilQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User.progres
   */
  export type User$progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    where?: ProgresWhereInput
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    cursor?: ProgresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresScalarFieldEnum | ProgresScalarFieldEnum[]
  }

  /**
   * User.favorit
   */
  export type User$favoritArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    where?: FavoritWhereInput
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    cursor?: FavoritWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritScalarFieldEnum | FavoritScalarFieldEnum[]
  }

  /**
   * User.hasilQuiz
   */
  export type User$hasilQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    where?: HasilQuizWhereInput
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    cursor?: HasilQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilQuizScalarFieldEnum | HasilQuizScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriMinAggregateOutputType = {
    id: string | null
    nama: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    icon: number
    createdAt: number
    _all: number
  }


  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
    icon?: true
    createdAt?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    icon?: true
    createdAt?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: string
    nama: string
    icon: string | null
    createdAt: Date
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    icon?: boolean
    createdAt?: boolean
    cerita?: boolean | Kategori$ceritaArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    icon?: boolean
    createdAt?: boolean
  }


  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cerita?: boolean | Kategori$ceritaArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      cerita: Prisma.$CeritaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      icon: string | null
      createdAt: Date
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }


  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KategoriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KategoriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KategoriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
    **/
    create<T extends KategoriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends KategoriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
    **/
    delete<T extends KategoriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KategoriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KategoriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KategoriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
    **/
    upsert<T extends KategoriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>
    ): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cerita<T extends Kategori$ceritaArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$ceritaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Kategori model
   */ 
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'String'>
    readonly nama: FieldRef<"Kategori", 'String'>
    readonly icon: FieldRef<"Kategori", 'String'>
    readonly createdAt: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
  }

  /**
   * Kategori.cerita
   */
  export type Kategori$ceritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    where?: CeritaWhereInput
    orderBy?: CeritaOrderByWithRelationInput | CeritaOrderByWithRelationInput[]
    cursor?: CeritaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CeritaScalarFieldEnum | CeritaScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Cerita
   */

  export type AggregateCerita = {
    _count: CeritaCountAggregateOutputType | null
    _avg: CeritaAvgAggregateOutputType | null
    _sum: CeritaSumAggregateOutputType | null
    _min: CeritaMinAggregateOutputType | null
    _max: CeritaMaxAggregateOutputType | null
  }

  export type CeritaAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type CeritaSumAggregateOutputType = {
    viewCount: number | null
  }

  export type CeritaMinAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    thumbnail: string | null
    status: $Enums.StatusCerita | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    kategoriId: string | null
  }

  export type CeritaMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    deskripsi: string | null
    thumbnail: string | null
    status: $Enums.StatusCerita | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    kategoriId: string | null
  }

  export type CeritaCountAggregateOutputType = {
    id: number
    judul: number
    deskripsi: number
    thumbnail: number
    status: number
    viewCount: number
    createdAt: number
    updatedAt: number
    kategoriId: number
    _all: number
  }


  export type CeritaAvgAggregateInputType = {
    viewCount?: true
  }

  export type CeritaSumAggregateInputType = {
    viewCount?: true
  }

  export type CeritaMinAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    status?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    kategoriId?: true
  }

  export type CeritaMaxAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    status?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    kategoriId?: true
  }

  export type CeritaCountAggregateInputType = {
    id?: true
    judul?: true
    deskripsi?: true
    thumbnail?: true
    status?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    kategoriId?: true
    _all?: true
  }

  export type CeritaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cerita to aggregate.
     */
    where?: CeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceritas to fetch.
     */
    orderBy?: CeritaOrderByWithRelationInput | CeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ceritas
    **/
    _count?: true | CeritaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CeritaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CeritaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CeritaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CeritaMaxAggregateInputType
  }

  export type GetCeritaAggregateType<T extends CeritaAggregateArgs> = {
        [P in keyof T & keyof AggregateCerita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCerita[P]>
      : GetScalarType<T[P], AggregateCerita[P]>
  }




  export type CeritaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CeritaWhereInput
    orderBy?: CeritaOrderByWithAggregationInput | CeritaOrderByWithAggregationInput[]
    by: CeritaScalarFieldEnum[] | CeritaScalarFieldEnum
    having?: CeritaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CeritaCountAggregateInputType | true
    _avg?: CeritaAvgAggregateInputType
    _sum?: CeritaSumAggregateInputType
    _min?: CeritaMinAggregateInputType
    _max?: CeritaMaxAggregateInputType
  }

  export type CeritaGroupByOutputType = {
    id: string
    judul: string
    deskripsi: string | null
    thumbnail: string | null
    status: $Enums.StatusCerita
    viewCount: number
    createdAt: Date
    updatedAt: Date
    kategoriId: string
    _count: CeritaCountAggregateOutputType | null
    _avg: CeritaAvgAggregateOutputType | null
    _sum: CeritaSumAggregateOutputType | null
    _min: CeritaMinAggregateOutputType | null
    _max: CeritaMaxAggregateOutputType | null
  }

  type GetCeritaGroupByPayload<T extends CeritaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CeritaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CeritaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CeritaGroupByOutputType[P]>
            : GetScalarType<T[P], CeritaGroupByOutputType[P]>
        }
      >
    >


  export type CeritaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    thumbnail?: boolean
    status?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategoriId?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    scenes?: boolean | Cerita$scenesArgs<ExtArgs>
    quizzes?: boolean | Cerita$quizzesArgs<ExtArgs>
    progres?: boolean | Cerita$progresArgs<ExtArgs>
    favorit?: boolean | Cerita$favoritArgs<ExtArgs>
    hasilQuiz?: boolean | Cerita$hasilQuizArgs<ExtArgs>
    _count?: boolean | CeritaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cerita"]>

  export type CeritaSelectScalar = {
    id?: boolean
    judul?: boolean
    deskripsi?: boolean
    thumbnail?: boolean
    status?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategoriId?: boolean
  }


  export type CeritaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    scenes?: boolean | Cerita$scenesArgs<ExtArgs>
    quizzes?: boolean | Cerita$quizzesArgs<ExtArgs>
    progres?: boolean | Cerita$progresArgs<ExtArgs>
    favorit?: boolean | Cerita$favoritArgs<ExtArgs>
    hasilQuiz?: boolean | Cerita$hasilQuizArgs<ExtArgs>
    _count?: boolean | CeritaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CeritaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cerita"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      scenes: Prisma.$ScenePayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      progres: Prisma.$ProgresPayload<ExtArgs>[]
      favorit: Prisma.$FavoritPayload<ExtArgs>[]
      hasilQuiz: Prisma.$HasilQuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      deskripsi: string | null
      thumbnail: string | null
      status: $Enums.StatusCerita
      viewCount: number
      createdAt: Date
      updatedAt: Date
      kategoriId: string
    }, ExtArgs["result"]["cerita"]>
    composites: {}
  }


  type CeritaGetPayload<S extends boolean | null | undefined | CeritaDefaultArgs> = $Result.GetResult<Prisma.$CeritaPayload, S>

  type CeritaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CeritaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CeritaCountAggregateInputType | true
    }

  export interface CeritaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cerita'], meta: { name: 'Cerita' } }
    /**
     * Find zero or one Cerita that matches the filter.
     * @param {CeritaFindUniqueArgs} args - Arguments to find a Cerita
     * @example
     * // Get one Cerita
     * const cerita = await prisma.cerita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CeritaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaFindUniqueArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cerita that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CeritaFindUniqueOrThrowArgs} args - Arguments to find a Cerita
     * @example
     * // Get one Cerita
     * const cerita = await prisma.cerita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CeritaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cerita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaFindFirstArgs} args - Arguments to find a Cerita
     * @example
     * // Get one Cerita
     * const cerita = await prisma.cerita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CeritaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaFindFirstArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cerita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaFindFirstOrThrowArgs} args - Arguments to find a Cerita
     * @example
     * // Get one Cerita
     * const cerita = await prisma.cerita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CeritaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ceritas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ceritas
     * const ceritas = await prisma.cerita.findMany()
     * 
     * // Get first 10 Ceritas
     * const ceritas = await prisma.cerita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ceritaWithIdOnly = await prisma.cerita.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CeritaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cerita.
     * @param {CeritaCreateArgs} args - Arguments to create a Cerita.
     * @example
     * // Create one Cerita
     * const Cerita = await prisma.cerita.create({
     *   data: {
     *     // ... data to create a Cerita
     *   }
     * })
     * 
    **/
    create<T extends CeritaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaCreateArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ceritas.
     * @param {CeritaCreateManyArgs} args - Arguments to create many Ceritas.
     * @example
     * // Create many Ceritas
     * const cerita = await prisma.cerita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CeritaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ceritas and returns the data saved in the database.
     * @param {CeritaCreateManyAndReturnArgs} args - Arguments to create many Ceritas.
     * @example
     * // Create many Ceritas
     * const cerita = await prisma.cerita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ceritas and only return the `id`
     * const ceritaWithIdOnly = await prisma.cerita.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CeritaCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Cerita.
     * @param {CeritaDeleteArgs} args - Arguments to delete one Cerita.
     * @example
     * // Delete one Cerita
     * const Cerita = await prisma.cerita.delete({
     *   where: {
     *     // ... filter to delete one Cerita
     *   }
     * })
     * 
    **/
    delete<T extends CeritaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaDeleteArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cerita.
     * @param {CeritaUpdateArgs} args - Arguments to update one Cerita.
     * @example
     * // Update one Cerita
     * const cerita = await prisma.cerita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CeritaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaUpdateArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ceritas.
     * @param {CeritaDeleteManyArgs} args - Arguments to filter Ceritas to delete.
     * @example
     * // Delete a few Ceritas
     * const { count } = await prisma.cerita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CeritaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CeritaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ceritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ceritas
     * const cerita = await prisma.cerita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CeritaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cerita.
     * @param {CeritaUpsertArgs} args - Arguments to update or create a Cerita.
     * @example
     * // Update or create a Cerita
     * const cerita = await prisma.cerita.upsert({
     *   create: {
     *     // ... data to create a Cerita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cerita we want to update
     *   }
     * })
    **/
    upsert<T extends CeritaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CeritaUpsertArgs<ExtArgs>>
    ): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ceritas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaCountArgs} args - Arguments to filter Ceritas to count.
     * @example
     * // Count the number of Ceritas
     * const count = await prisma.cerita.count({
     *   where: {
     *     // ... the filter for the Ceritas we want to count
     *   }
     * })
    **/
    count<T extends CeritaCountArgs>(
      args?: Subset<T, CeritaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CeritaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CeritaAggregateArgs>(args: Subset<T, CeritaAggregateArgs>): Prisma.PrismaPromise<GetCeritaAggregateType<T>>

    /**
     * Group by Cerita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CeritaGroupByArgs} args - Group by arguments.
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
      T extends CeritaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CeritaGroupByArgs['orderBy'] }
        : { orderBy?: CeritaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CeritaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCeritaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cerita model
   */
  readonly fields: CeritaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cerita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CeritaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    scenes<T extends Cerita$scenesArgs<ExtArgs> = {}>(args?: Subset<T, Cerita$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findMany'> | Null>;

    quizzes<T extends Cerita$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Cerita$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findMany'> | Null>;

    progres<T extends Cerita$progresArgs<ExtArgs> = {}>(args?: Subset<T, Cerita$progresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findMany'> | Null>;

    favorit<T extends Cerita$favoritArgs<ExtArgs> = {}>(args?: Subset<T, Cerita$favoritArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findMany'> | Null>;

    hasilQuiz<T extends Cerita$hasilQuizArgs<ExtArgs> = {}>(args?: Subset<T, Cerita$hasilQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cerita model
   */ 
  interface CeritaFieldRefs {
    readonly id: FieldRef<"Cerita", 'String'>
    readonly judul: FieldRef<"Cerita", 'String'>
    readonly deskripsi: FieldRef<"Cerita", 'String'>
    readonly thumbnail: FieldRef<"Cerita", 'String'>
    readonly status: FieldRef<"Cerita", 'StatusCerita'>
    readonly viewCount: FieldRef<"Cerita", 'Int'>
    readonly createdAt: FieldRef<"Cerita", 'DateTime'>
    readonly updatedAt: FieldRef<"Cerita", 'DateTime'>
    readonly kategoriId: FieldRef<"Cerita", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cerita findUnique
   */
  export type CeritaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter, which Cerita to fetch.
     */
    where: CeritaWhereUniqueInput
  }

  /**
   * Cerita findUniqueOrThrow
   */
  export type CeritaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter, which Cerita to fetch.
     */
    where: CeritaWhereUniqueInput
  }

  /**
   * Cerita findFirst
   */
  export type CeritaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter, which Cerita to fetch.
     */
    where?: CeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceritas to fetch.
     */
    orderBy?: CeritaOrderByWithRelationInput | CeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceritas.
     */
    cursor?: CeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceritas.
     */
    distinct?: CeritaScalarFieldEnum | CeritaScalarFieldEnum[]
  }

  /**
   * Cerita findFirstOrThrow
   */
  export type CeritaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter, which Cerita to fetch.
     */
    where?: CeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceritas to fetch.
     */
    orderBy?: CeritaOrderByWithRelationInput | CeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ceritas.
     */
    cursor?: CeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceritas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ceritas.
     */
    distinct?: CeritaScalarFieldEnum | CeritaScalarFieldEnum[]
  }

  /**
   * Cerita findMany
   */
  export type CeritaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter, which Ceritas to fetch.
     */
    where?: CeritaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ceritas to fetch.
     */
    orderBy?: CeritaOrderByWithRelationInput | CeritaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ceritas.
     */
    cursor?: CeritaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ceritas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ceritas.
     */
    skip?: number
    distinct?: CeritaScalarFieldEnum | CeritaScalarFieldEnum[]
  }

  /**
   * Cerita create
   */
  export type CeritaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cerita.
     */
    data: XOR<CeritaCreateInput, CeritaUncheckedCreateInput>
  }

  /**
   * Cerita createMany
   */
  export type CeritaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ceritas.
     */
    data: CeritaCreateManyInput | CeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cerita createManyAndReturn
   */
  export type CeritaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * The data used to create many Ceritas.
     */
    data: CeritaCreateManyInput | CeritaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cerita update
   */
  export type CeritaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cerita.
     */
    data: XOR<CeritaUpdateInput, CeritaUncheckedUpdateInput>
    /**
     * Choose, which Cerita to update.
     */
    where: CeritaWhereUniqueInput
  }

  /**
   * Cerita updateMany
   */
  export type CeritaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ceritas.
     */
    data: XOR<CeritaUpdateManyMutationInput, CeritaUncheckedUpdateManyInput>
    /**
     * Filter which Ceritas to update
     */
    where?: CeritaWhereInput
  }

  /**
   * Cerita upsert
   */
  export type CeritaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cerita to update in case it exists.
     */
    where: CeritaWhereUniqueInput
    /**
     * In case the Cerita found by the `where` argument doesn't exist, create a new Cerita with this data.
     */
    create: XOR<CeritaCreateInput, CeritaUncheckedCreateInput>
    /**
     * In case the Cerita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CeritaUpdateInput, CeritaUncheckedUpdateInput>
  }

  /**
   * Cerita delete
   */
  export type CeritaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
    /**
     * Filter which Cerita to delete.
     */
    where: CeritaWhereUniqueInput
  }

  /**
   * Cerita deleteMany
   */
  export type CeritaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ceritas to delete
     */
    where?: CeritaWhereInput
  }

  /**
   * Cerita.scenes
   */
  export type Cerita$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Cerita.quizzes
   */
  export type Cerita$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Cerita.progres
   */
  export type Cerita$progresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    where?: ProgresWhereInput
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    cursor?: ProgresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgresScalarFieldEnum | ProgresScalarFieldEnum[]
  }

  /**
   * Cerita.favorit
   */
  export type Cerita$favoritArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    where?: FavoritWhereInput
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    cursor?: FavoritWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritScalarFieldEnum | FavoritScalarFieldEnum[]
  }

  /**
   * Cerita.hasilQuiz
   */
  export type Cerita$hasilQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    where?: HasilQuizWhereInput
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    cursor?: HasilQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilQuizScalarFieldEnum | HasilQuizScalarFieldEnum[]
  }

  /**
   * Cerita without action
   */
  export type CeritaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cerita
     */
    select?: CeritaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CeritaInclude<ExtArgs> | null
  }


  /**
   * Model Scene
   */

  export type AggregateScene = {
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  export type SceneAvgAggregateOutputType = {
    urutan: number | null
  }

  export type SceneSumAggregateOutputType = {
    urutan: number | null
  }

  export type SceneMinAggregateOutputType = {
    id: string | null
    urutan: number | null
    gambar: string | null
    teks: string | null
    audio: string | null
    ceritaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SceneMaxAggregateOutputType = {
    id: string | null
    urutan: number | null
    gambar: string | null
    teks: string | null
    audio: string | null
    ceritaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SceneCountAggregateOutputType = {
    id: number
    urutan: number
    gambar: number
    teks: number
    audio: number
    ceritaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SceneAvgAggregateInputType = {
    urutan?: true
  }

  export type SceneSumAggregateInputType = {
    urutan?: true
  }

  export type SceneMinAggregateInputType = {
    id?: true
    urutan?: true
    gambar?: true
    teks?: true
    audio?: true
    ceritaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SceneMaxAggregateInputType = {
    id?: true
    urutan?: true
    gambar?: true
    teks?: true
    audio?: true
    ceritaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SceneCountAggregateInputType = {
    id?: true
    urutan?: true
    gambar?: true
    teks?: true
    audio?: true
    ceritaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SceneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scene to aggregate.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenes
    **/
    _count?: true | SceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SceneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SceneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SceneMaxAggregateInputType
  }

  export type GetSceneAggregateType<T extends SceneAggregateArgs> = {
        [P in keyof T & keyof AggregateScene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScene[P]>
      : GetScalarType<T[P], AggregateScene[P]>
  }




  export type SceneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithAggregationInput | SceneOrderByWithAggregationInput[]
    by: SceneScalarFieldEnum[] | SceneScalarFieldEnum
    having?: SceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SceneCountAggregateInputType | true
    _avg?: SceneAvgAggregateInputType
    _sum?: SceneSumAggregateInputType
    _min?: SceneMinAggregateInputType
    _max?: SceneMaxAggregateInputType
  }

  export type SceneGroupByOutputType = {
    id: string
    urutan: number
    gambar: string | null
    teks: string
    audio: string | null
    ceritaId: string
    createdAt: Date
    updatedAt: Date
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  type GetSceneGroupByPayload<T extends SceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SceneGroupByOutputType[P]>
            : GetScalarType<T[P], SceneGroupByOutputType[P]>
        }
      >
    >


  export type SceneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    urutan?: boolean
    gambar?: boolean
    teks?: boolean
    audio?: boolean
    ceritaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectScalar = {
    id?: boolean
    urutan?: boolean
    gambar?: boolean
    teks?: boolean
    audio?: boolean
    ceritaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SceneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }


  export type $ScenePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scene"
    objects: {
      cerita: Prisma.$CeritaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      urutan: number
      gambar: string | null
      teks: string
      audio: string | null
      ceritaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scene"]>
    composites: {}
  }


  type SceneGetPayload<S extends boolean | null | undefined | SceneDefaultArgs> = $Result.GetResult<Prisma.$ScenePayload, S>

  type SceneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SceneFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SceneCountAggregateInputType | true
    }

  export interface SceneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scene'], meta: { name: 'Scene' } }
    /**
     * Find zero or one Scene that matches the filter.
     * @param {SceneFindUniqueArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SceneFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SceneFindUniqueArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Scene that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SceneFindUniqueOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SceneFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Scene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SceneFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneFindFirstArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Scene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SceneFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenes
     * const scenes = await prisma.scene.findMany()
     * 
     * // Get first 10 Scenes
     * const scenes = await prisma.scene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sceneWithIdOnly = await prisma.scene.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SceneFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Scene.
     * @param {SceneCreateArgs} args - Arguments to create a Scene.
     * @example
     * // Create one Scene
     * const Scene = await prisma.scene.create({
     *   data: {
     *     // ... data to create a Scene
     *   }
     * })
     * 
    **/
    create<T extends SceneCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SceneCreateArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Scenes.
     * @param {SceneCreateManyArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SceneCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenes and returns the data saved in the database.
     * @param {SceneCreateManyAndReturnArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SceneCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Scene.
     * @param {SceneDeleteArgs} args - Arguments to delete one Scene.
     * @example
     * // Delete one Scene
     * const Scene = await prisma.scene.delete({
     *   where: {
     *     // ... filter to delete one Scene
     *   }
     * })
     * 
    **/
    delete<T extends SceneDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SceneDeleteArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Scene.
     * @param {SceneUpdateArgs} args - Arguments to update one Scene.
     * @example
     * // Update one Scene
     * const scene = await prisma.scene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SceneUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SceneUpdateArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Scenes.
     * @param {SceneDeleteManyArgs} args - Arguments to filter Scenes to delete.
     * @example
     * // Delete a few Scenes
     * const { count } = await prisma.scene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SceneDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SceneDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SceneUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SceneUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scene.
     * @param {SceneUpsertArgs} args - Arguments to update or create a Scene.
     * @example
     * // Update or create a Scene
     * const scene = await prisma.scene.upsert({
     *   create: {
     *     // ... data to create a Scene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scene we want to update
     *   }
     * })
    **/
    upsert<T extends SceneUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SceneUpsertArgs<ExtArgs>>
    ): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneCountArgs} args - Arguments to filter Scenes to count.
     * @example
     * // Count the number of Scenes
     * const count = await prisma.scene.count({
     *   where: {
     *     // ... the filter for the Scenes we want to count
     *   }
     * })
    **/
    count<T extends SceneCountArgs>(
      args?: Subset<T, SceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SceneAggregateArgs>(args: Subset<T, SceneAggregateArgs>): Prisma.PrismaPromise<GetSceneAggregateType<T>>

    /**
     * Group by Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneGroupByArgs} args - Group by arguments.
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
      T extends SceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SceneGroupByArgs['orderBy'] }
        : { orderBy?: SceneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scene model
   */
  readonly fields: SceneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SceneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cerita<T extends CeritaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CeritaDefaultArgs<ExtArgs>>): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Scene model
   */ 
  interface SceneFieldRefs {
    readonly id: FieldRef<"Scene", 'String'>
    readonly urutan: FieldRef<"Scene", 'Int'>
    readonly gambar: FieldRef<"Scene", 'String'>
    readonly teks: FieldRef<"Scene", 'String'>
    readonly audio: FieldRef<"Scene", 'String'>
    readonly ceritaId: FieldRef<"Scene", 'String'>
    readonly createdAt: FieldRef<"Scene", 'DateTime'>
    readonly updatedAt: FieldRef<"Scene", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scene findUnique
   */
  export type SceneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findUniqueOrThrow
   */
  export type SceneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findFirst
   */
  export type SceneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findFirstOrThrow
   */
  export type SceneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findMany
   */
  export type SceneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scenes to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene create
   */
  export type SceneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to create a Scene.
     */
    data: XOR<SceneCreateInput, SceneUncheckedCreateInput>
  }

  /**
   * Scene createMany
   */
  export type SceneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scene createManyAndReturn
   */
  export type SceneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scene update
   */
  export type SceneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to update a Scene.
     */
    data: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
    /**
     * Choose, which Scene to update.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene updateMany
   */
  export type SceneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenes.
     */
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyInput>
    /**
     * Filter which Scenes to update
     */
    where?: SceneWhereInput
  }

  /**
   * Scene upsert
   */
  export type SceneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The filter to search for the Scene to update in case it exists.
     */
    where: SceneWhereUniqueInput
    /**
     * In case the Scene found by the `where` argument doesn't exist, create a new Scene with this data.
     */
    create: XOR<SceneCreateInput, SceneUncheckedCreateInput>
    /**
     * In case the Scene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
  }

  /**
   * Scene delete
   */
  export type SceneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter which Scene to delete.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene deleteMany
   */
  export type SceneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenes to delete
     */
    where?: SceneWhereInput
  }

  /**
   * Scene without action
   */
  export type SceneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    urutan: number | null
  }

  export type QuizSumAggregateOutputType = {
    urutan: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    urutan: number | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    pertanyaan: string | null
    urutan: number | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    pertanyaan: number
    urutan: number
    ceritaId: number
    createdAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    urutan?: true
  }

  export type QuizSumAggregateInputType = {
    urutan?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    pertanyaan?: true
    urutan?: true
    ceritaId?: true
    createdAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    pertanyaan?: true
    urutan?: true
    ceritaId?: true
    createdAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    pertanyaan?: true
    urutan?: true
    ceritaId?: true
    createdAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    pertanyaan: string
    urutan: number
    ceritaId: string
    createdAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pertanyaan?: boolean
    urutan?: boolean
    ceritaId?: boolean
    createdAt?: boolean
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
    pilihan?: boolean | Quiz$pilihanArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    pertanyaan?: boolean
    urutan?: boolean
    ceritaId?: boolean
    createdAt?: boolean
  }


  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
    pilihan?: boolean | Quiz$pilihanArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      cerita: Prisma.$CeritaPayload<ExtArgs>
      pilihan: Prisma.$PilihanJawabanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pertanyaan: string
      urutan: number
      ceritaId: string
      createdAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }


  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
    **/
    create<T extends QuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizCreateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends QuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
    **/
    delete<T extends QuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
    **/
    upsert<T extends QuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>
    ): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cerita<T extends CeritaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CeritaDefaultArgs<ExtArgs>>): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    pilihan<T extends Quiz$pilihanArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$pilihanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Quiz model
   */ 
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly pertanyaan: FieldRef<"Quiz", 'String'>
    readonly urutan: FieldRef<"Quiz", 'Int'>
    readonly ceritaId: FieldRef<"Quiz", 'String'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
  }

  /**
   * Quiz.pilihan
   */
  export type Quiz$pilihanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    where?: PilihanJawabanWhereInput
    orderBy?: PilihanJawabanOrderByWithRelationInput | PilihanJawabanOrderByWithRelationInput[]
    cursor?: PilihanJawabanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PilihanJawabanScalarFieldEnum | PilihanJawabanScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model PilihanJawaban
   */

  export type AggregatePilihanJawaban = {
    _count: PilihanJawabanCountAggregateOutputType | null
    _min: PilihanJawabanMinAggregateOutputType | null
    _max: PilihanJawabanMaxAggregateOutputType | null
  }

  export type PilihanJawabanMinAggregateOutputType = {
    id: string | null
    teks: string | null
    isBenar: boolean | null
    quizId: string | null
    createdAt: Date | null
  }

  export type PilihanJawabanMaxAggregateOutputType = {
    id: string | null
    teks: string | null
    isBenar: boolean | null
    quizId: string | null
    createdAt: Date | null
  }

  export type PilihanJawabanCountAggregateOutputType = {
    id: number
    teks: number
    isBenar: number
    quizId: number
    createdAt: number
    _all: number
  }


  export type PilihanJawabanMinAggregateInputType = {
    id?: true
    teks?: true
    isBenar?: true
    quizId?: true
    createdAt?: true
  }

  export type PilihanJawabanMaxAggregateInputType = {
    id?: true
    teks?: true
    isBenar?: true
    quizId?: true
    createdAt?: true
  }

  export type PilihanJawabanCountAggregateInputType = {
    id?: true
    teks?: true
    isBenar?: true
    quizId?: true
    createdAt?: true
    _all?: true
  }

  export type PilihanJawabanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PilihanJawaban to aggregate.
     */
    where?: PilihanJawabanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PilihanJawabans to fetch.
     */
    orderBy?: PilihanJawabanOrderByWithRelationInput | PilihanJawabanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PilihanJawabanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PilihanJawabans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PilihanJawabans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PilihanJawabans
    **/
    _count?: true | PilihanJawabanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PilihanJawabanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PilihanJawabanMaxAggregateInputType
  }

  export type GetPilihanJawabanAggregateType<T extends PilihanJawabanAggregateArgs> = {
        [P in keyof T & keyof AggregatePilihanJawaban]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePilihanJawaban[P]>
      : GetScalarType<T[P], AggregatePilihanJawaban[P]>
  }




  export type PilihanJawabanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PilihanJawabanWhereInput
    orderBy?: PilihanJawabanOrderByWithAggregationInput | PilihanJawabanOrderByWithAggregationInput[]
    by: PilihanJawabanScalarFieldEnum[] | PilihanJawabanScalarFieldEnum
    having?: PilihanJawabanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PilihanJawabanCountAggregateInputType | true
    _min?: PilihanJawabanMinAggregateInputType
    _max?: PilihanJawabanMaxAggregateInputType
  }

  export type PilihanJawabanGroupByOutputType = {
    id: string
    teks: string
    isBenar: boolean
    quizId: string
    createdAt: Date
    _count: PilihanJawabanCountAggregateOutputType | null
    _min: PilihanJawabanMinAggregateOutputType | null
    _max: PilihanJawabanMaxAggregateOutputType | null
  }

  type GetPilihanJawabanGroupByPayload<T extends PilihanJawabanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PilihanJawabanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PilihanJawabanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PilihanJawabanGroupByOutputType[P]>
            : GetScalarType<T[P], PilihanJawabanGroupByOutputType[P]>
        }
      >
    >


  export type PilihanJawabanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teks?: boolean
    isBenar?: boolean
    quizId?: boolean
    createdAt?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pilihanJawaban"]>

  export type PilihanJawabanSelectScalar = {
    id?: boolean
    teks?: boolean
    isBenar?: boolean
    quizId?: boolean
    createdAt?: boolean
  }


  export type PilihanJawabanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }


  export type $PilihanJawabanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PilihanJawaban"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teks: string
      isBenar: boolean
      quizId: string
      createdAt: Date
    }, ExtArgs["result"]["pilihanJawaban"]>
    composites: {}
  }


  type PilihanJawabanGetPayload<S extends boolean | null | undefined | PilihanJawabanDefaultArgs> = $Result.GetResult<Prisma.$PilihanJawabanPayload, S>

  type PilihanJawabanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PilihanJawabanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PilihanJawabanCountAggregateInputType | true
    }

  export interface PilihanJawabanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PilihanJawaban'], meta: { name: 'PilihanJawaban' } }
    /**
     * Find zero or one PilihanJawaban that matches the filter.
     * @param {PilihanJawabanFindUniqueArgs} args - Arguments to find a PilihanJawaban
     * @example
     * // Get one PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PilihanJawabanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanFindUniqueArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PilihanJawaban that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PilihanJawabanFindUniqueOrThrowArgs} args - Arguments to find a PilihanJawaban
     * @example
     * // Get one PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PilihanJawabanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PilihanJawaban that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanFindFirstArgs} args - Arguments to find a PilihanJawaban
     * @example
     * // Get one PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PilihanJawabanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanFindFirstArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PilihanJawaban that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanFindFirstOrThrowArgs} args - Arguments to find a PilihanJawaban
     * @example
     * // Get one PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PilihanJawabanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PilihanJawabans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PilihanJawabans
     * const pilihanJawabans = await prisma.pilihanJawaban.findMany()
     * 
     * // Get first 10 PilihanJawabans
     * const pilihanJawabans = await prisma.pilihanJawaban.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pilihanJawabanWithIdOnly = await prisma.pilihanJawaban.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PilihanJawabanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PilihanJawaban.
     * @param {PilihanJawabanCreateArgs} args - Arguments to create a PilihanJawaban.
     * @example
     * // Create one PilihanJawaban
     * const PilihanJawaban = await prisma.pilihanJawaban.create({
     *   data: {
     *     // ... data to create a PilihanJawaban
     *   }
     * })
     * 
    **/
    create<T extends PilihanJawabanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanCreateArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PilihanJawabans.
     * @param {PilihanJawabanCreateManyArgs} args - Arguments to create many PilihanJawabans.
     * @example
     * // Create many PilihanJawabans
     * const pilihanJawaban = await prisma.pilihanJawaban.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PilihanJawabanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PilihanJawabans and returns the data saved in the database.
     * @param {PilihanJawabanCreateManyAndReturnArgs} args - Arguments to create many PilihanJawabans.
     * @example
     * // Create many PilihanJawabans
     * const pilihanJawaban = await prisma.pilihanJawaban.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PilihanJawabans and only return the `id`
     * const pilihanJawabanWithIdOnly = await prisma.pilihanJawaban.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PilihanJawabanCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a PilihanJawaban.
     * @param {PilihanJawabanDeleteArgs} args - Arguments to delete one PilihanJawaban.
     * @example
     * // Delete one PilihanJawaban
     * const PilihanJawaban = await prisma.pilihanJawaban.delete({
     *   where: {
     *     // ... filter to delete one PilihanJawaban
     *   }
     * })
     * 
    **/
    delete<T extends PilihanJawabanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanDeleteArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PilihanJawaban.
     * @param {PilihanJawabanUpdateArgs} args - Arguments to update one PilihanJawaban.
     * @example
     * // Update one PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PilihanJawabanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanUpdateArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PilihanJawabans.
     * @param {PilihanJawabanDeleteManyArgs} args - Arguments to filter PilihanJawabans to delete.
     * @example
     * // Delete a few PilihanJawabans
     * const { count } = await prisma.pilihanJawaban.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PilihanJawabanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PilihanJawabanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PilihanJawabans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PilihanJawabans
     * const pilihanJawaban = await prisma.pilihanJawaban.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PilihanJawabanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PilihanJawaban.
     * @param {PilihanJawabanUpsertArgs} args - Arguments to update or create a PilihanJawaban.
     * @example
     * // Update or create a PilihanJawaban
     * const pilihanJawaban = await prisma.pilihanJawaban.upsert({
     *   create: {
     *     // ... data to create a PilihanJawaban
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PilihanJawaban we want to update
     *   }
     * })
    **/
    upsert<T extends PilihanJawabanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PilihanJawabanUpsertArgs<ExtArgs>>
    ): Prisma__PilihanJawabanClient<$Result.GetResult<Prisma.$PilihanJawabanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PilihanJawabans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanCountArgs} args - Arguments to filter PilihanJawabans to count.
     * @example
     * // Count the number of PilihanJawabans
     * const count = await prisma.pilihanJawaban.count({
     *   where: {
     *     // ... the filter for the PilihanJawabans we want to count
     *   }
     * })
    **/
    count<T extends PilihanJawabanCountArgs>(
      args?: Subset<T, PilihanJawabanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PilihanJawabanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PilihanJawaban.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PilihanJawabanAggregateArgs>(args: Subset<T, PilihanJawabanAggregateArgs>): Prisma.PrismaPromise<GetPilihanJawabanAggregateType<T>>

    /**
     * Group by PilihanJawaban.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PilihanJawabanGroupByArgs} args - Group by arguments.
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
      T extends PilihanJawabanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PilihanJawabanGroupByArgs['orderBy'] }
        : { orderBy?: PilihanJawabanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PilihanJawabanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPilihanJawabanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PilihanJawaban model
   */
  readonly fields: PilihanJawabanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PilihanJawaban.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PilihanJawabanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PilihanJawaban model
   */ 
  interface PilihanJawabanFieldRefs {
    readonly id: FieldRef<"PilihanJawaban", 'String'>
    readonly teks: FieldRef<"PilihanJawaban", 'String'>
    readonly isBenar: FieldRef<"PilihanJawaban", 'Boolean'>
    readonly quizId: FieldRef<"PilihanJawaban", 'String'>
    readonly createdAt: FieldRef<"PilihanJawaban", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PilihanJawaban findUnique
   */
  export type PilihanJawabanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter, which PilihanJawaban to fetch.
     */
    where: PilihanJawabanWhereUniqueInput
  }

  /**
   * PilihanJawaban findUniqueOrThrow
   */
  export type PilihanJawabanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter, which PilihanJawaban to fetch.
     */
    where: PilihanJawabanWhereUniqueInput
  }

  /**
   * PilihanJawaban findFirst
   */
  export type PilihanJawabanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter, which PilihanJawaban to fetch.
     */
    where?: PilihanJawabanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PilihanJawabans to fetch.
     */
    orderBy?: PilihanJawabanOrderByWithRelationInput | PilihanJawabanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PilihanJawabans.
     */
    cursor?: PilihanJawabanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PilihanJawabans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PilihanJawabans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PilihanJawabans.
     */
    distinct?: PilihanJawabanScalarFieldEnum | PilihanJawabanScalarFieldEnum[]
  }

  /**
   * PilihanJawaban findFirstOrThrow
   */
  export type PilihanJawabanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter, which PilihanJawaban to fetch.
     */
    where?: PilihanJawabanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PilihanJawabans to fetch.
     */
    orderBy?: PilihanJawabanOrderByWithRelationInput | PilihanJawabanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PilihanJawabans.
     */
    cursor?: PilihanJawabanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PilihanJawabans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PilihanJawabans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PilihanJawabans.
     */
    distinct?: PilihanJawabanScalarFieldEnum | PilihanJawabanScalarFieldEnum[]
  }

  /**
   * PilihanJawaban findMany
   */
  export type PilihanJawabanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter, which PilihanJawabans to fetch.
     */
    where?: PilihanJawabanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PilihanJawabans to fetch.
     */
    orderBy?: PilihanJawabanOrderByWithRelationInput | PilihanJawabanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PilihanJawabans.
     */
    cursor?: PilihanJawabanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PilihanJawabans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PilihanJawabans.
     */
    skip?: number
    distinct?: PilihanJawabanScalarFieldEnum | PilihanJawabanScalarFieldEnum[]
  }

  /**
   * PilihanJawaban create
   */
  export type PilihanJawabanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * The data needed to create a PilihanJawaban.
     */
    data: XOR<PilihanJawabanCreateInput, PilihanJawabanUncheckedCreateInput>
  }

  /**
   * PilihanJawaban createMany
   */
  export type PilihanJawabanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PilihanJawabans.
     */
    data: PilihanJawabanCreateManyInput | PilihanJawabanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PilihanJawaban createManyAndReturn
   */
  export type PilihanJawabanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * The data used to create many PilihanJawabans.
     */
    data: PilihanJawabanCreateManyInput | PilihanJawabanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PilihanJawaban update
   */
  export type PilihanJawabanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * The data needed to update a PilihanJawaban.
     */
    data: XOR<PilihanJawabanUpdateInput, PilihanJawabanUncheckedUpdateInput>
    /**
     * Choose, which PilihanJawaban to update.
     */
    where: PilihanJawabanWhereUniqueInput
  }

  /**
   * PilihanJawaban updateMany
   */
  export type PilihanJawabanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PilihanJawabans.
     */
    data: XOR<PilihanJawabanUpdateManyMutationInput, PilihanJawabanUncheckedUpdateManyInput>
    /**
     * Filter which PilihanJawabans to update
     */
    where?: PilihanJawabanWhereInput
  }

  /**
   * PilihanJawaban upsert
   */
  export type PilihanJawabanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * The filter to search for the PilihanJawaban to update in case it exists.
     */
    where: PilihanJawabanWhereUniqueInput
    /**
     * In case the PilihanJawaban found by the `where` argument doesn't exist, create a new PilihanJawaban with this data.
     */
    create: XOR<PilihanJawabanCreateInput, PilihanJawabanUncheckedCreateInput>
    /**
     * In case the PilihanJawaban was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PilihanJawabanUpdateInput, PilihanJawabanUncheckedUpdateInput>
  }

  /**
   * PilihanJawaban delete
   */
  export type PilihanJawabanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
    /**
     * Filter which PilihanJawaban to delete.
     */
    where: PilihanJawabanWhereUniqueInput
  }

  /**
   * PilihanJawaban deleteMany
   */
  export type PilihanJawabanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PilihanJawabans to delete
     */
    where?: PilihanJawabanWhereInput
  }

  /**
   * PilihanJawaban without action
   */
  export type PilihanJawabanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PilihanJawaban
     */
    select?: PilihanJawabanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PilihanJawabanInclude<ExtArgs> | null
  }


  /**
   * Model HasilQuiz
   */

  export type AggregateHasilQuiz = {
    _count: HasilQuizCountAggregateOutputType | null
    _avg: HasilQuizAvgAggregateOutputType | null
    _sum: HasilQuizSumAggregateOutputType | null
    _min: HasilQuizMinAggregateOutputType | null
    _max: HasilQuizMaxAggregateOutputType | null
  }

  export type HasilQuizAvgAggregateOutputType = {
    skor: number | null
    totalSoal: number | null
  }

  export type HasilQuizSumAggregateOutputType = {
    skor: number | null
    totalSoal: number | null
  }

  export type HasilQuizMinAggregateOutputType = {
    id: string | null
    skor: number | null
    totalSoal: number | null
    userId: string | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type HasilQuizMaxAggregateOutputType = {
    id: string | null
    skor: number | null
    totalSoal: number | null
    userId: string | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type HasilQuizCountAggregateOutputType = {
    id: number
    skor: number
    totalSoal: number
    userId: number
    ceritaId: number
    createdAt: number
    _all: number
  }


  export type HasilQuizAvgAggregateInputType = {
    skor?: true
    totalSoal?: true
  }

  export type HasilQuizSumAggregateInputType = {
    skor?: true
    totalSoal?: true
  }

  export type HasilQuizMinAggregateInputType = {
    id?: true
    skor?: true
    totalSoal?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
  }

  export type HasilQuizMaxAggregateInputType = {
    id?: true
    skor?: true
    totalSoal?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
  }

  export type HasilQuizCountAggregateInputType = {
    id?: true
    skor?: true
    totalSoal?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
    _all?: true
  }

  export type HasilQuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilQuiz to aggregate.
     */
    where?: HasilQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilQuizs to fetch.
     */
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HasilQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HasilQuizs
    **/
    _count?: true | HasilQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HasilQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HasilQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HasilQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HasilQuizMaxAggregateInputType
  }

  export type GetHasilQuizAggregateType<T extends HasilQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateHasilQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHasilQuiz[P]>
      : GetScalarType<T[P], AggregateHasilQuiz[P]>
  }




  export type HasilQuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilQuizWhereInput
    orderBy?: HasilQuizOrderByWithAggregationInput | HasilQuizOrderByWithAggregationInput[]
    by: HasilQuizScalarFieldEnum[] | HasilQuizScalarFieldEnum
    having?: HasilQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HasilQuizCountAggregateInputType | true
    _avg?: HasilQuizAvgAggregateInputType
    _sum?: HasilQuizSumAggregateInputType
    _min?: HasilQuizMinAggregateInputType
    _max?: HasilQuizMaxAggregateInputType
  }

  export type HasilQuizGroupByOutputType = {
    id: string
    skor: number
    totalSoal: number
    userId: string
    ceritaId: string
    createdAt: Date
    _count: HasilQuizCountAggregateOutputType | null
    _avg: HasilQuizAvgAggregateOutputType | null
    _sum: HasilQuizSumAggregateOutputType | null
    _min: HasilQuizMinAggregateOutputType | null
    _max: HasilQuizMaxAggregateOutputType | null
  }

  type GetHasilQuizGroupByPayload<T extends HasilQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HasilQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HasilQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HasilQuizGroupByOutputType[P]>
            : GetScalarType<T[P], HasilQuizGroupByOutputType[P]>
        }
      >
    >


  export type HasilQuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skor?: boolean
    totalSoal?: boolean
    userId?: boolean
    ceritaId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilQuiz"]>

  export type HasilQuizSelectScalar = {
    id?: boolean
    skor?: boolean
    totalSoal?: boolean
    userId?: boolean
    ceritaId?: boolean
    createdAt?: boolean
  }


  export type HasilQuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }


  export type $HasilQuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HasilQuiz"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cerita: Prisma.$CeritaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skor: number
      totalSoal: number
      userId: string
      ceritaId: string
      createdAt: Date
    }, ExtArgs["result"]["hasilQuiz"]>
    composites: {}
  }


  type HasilQuizGetPayload<S extends boolean | null | undefined | HasilQuizDefaultArgs> = $Result.GetResult<Prisma.$HasilQuizPayload, S>

  type HasilQuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HasilQuizFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HasilQuizCountAggregateInputType | true
    }

  export interface HasilQuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HasilQuiz'], meta: { name: 'HasilQuiz' } }
    /**
     * Find zero or one HasilQuiz that matches the filter.
     * @param {HasilQuizFindUniqueArgs} args - Arguments to find a HasilQuiz
     * @example
     * // Get one HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HasilQuizFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizFindUniqueArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HasilQuiz that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HasilQuizFindUniqueOrThrowArgs} args - Arguments to find a HasilQuiz
     * @example
     * // Get one HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HasilQuizFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HasilQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizFindFirstArgs} args - Arguments to find a HasilQuiz
     * @example
     * // Get one HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HasilQuizFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizFindFirstArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HasilQuiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizFindFirstOrThrowArgs} args - Arguments to find a HasilQuiz
     * @example
     * // Get one HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HasilQuizFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HasilQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HasilQuizs
     * const hasilQuizs = await prisma.hasilQuiz.findMany()
     * 
     * // Get first 10 HasilQuizs
     * const hasilQuizs = await prisma.hasilQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hasilQuizWithIdOnly = await prisma.hasilQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HasilQuizFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HasilQuiz.
     * @param {HasilQuizCreateArgs} args - Arguments to create a HasilQuiz.
     * @example
     * // Create one HasilQuiz
     * const HasilQuiz = await prisma.hasilQuiz.create({
     *   data: {
     *     // ... data to create a HasilQuiz
     *   }
     * })
     * 
    **/
    create<T extends HasilQuizCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizCreateArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HasilQuizs.
     * @param {HasilQuizCreateManyArgs} args - Arguments to create many HasilQuizs.
     * @example
     * // Create many HasilQuizs
     * const hasilQuiz = await prisma.hasilQuiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends HasilQuizCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HasilQuizs and returns the data saved in the database.
     * @param {HasilQuizCreateManyAndReturnArgs} args - Arguments to create many HasilQuizs.
     * @example
     * // Create many HasilQuizs
     * const hasilQuiz = await prisma.hasilQuiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HasilQuizs and only return the `id`
     * const hasilQuizWithIdOnly = await prisma.hasilQuiz.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends HasilQuizCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a HasilQuiz.
     * @param {HasilQuizDeleteArgs} args - Arguments to delete one HasilQuiz.
     * @example
     * // Delete one HasilQuiz
     * const HasilQuiz = await prisma.hasilQuiz.delete({
     *   where: {
     *     // ... filter to delete one HasilQuiz
     *   }
     * })
     * 
    **/
    delete<T extends HasilQuizDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizDeleteArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HasilQuiz.
     * @param {HasilQuizUpdateArgs} args - Arguments to update one HasilQuiz.
     * @example
     * // Update one HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HasilQuizUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizUpdateArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HasilQuizs.
     * @param {HasilQuizDeleteManyArgs} args - Arguments to filter HasilQuizs to delete.
     * @example
     * // Delete a few HasilQuizs
     * const { count } = await prisma.hasilQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HasilQuizDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HasilQuizDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HasilQuizs
     * const hasilQuiz = await prisma.hasilQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HasilQuizUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HasilQuiz.
     * @param {HasilQuizUpsertArgs} args - Arguments to update or create a HasilQuiz.
     * @example
     * // Update or create a HasilQuiz
     * const hasilQuiz = await prisma.hasilQuiz.upsert({
     *   create: {
     *     // ... data to create a HasilQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HasilQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends HasilQuizUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HasilQuizUpsertArgs<ExtArgs>>
    ): Prisma__HasilQuizClient<$Result.GetResult<Prisma.$HasilQuizPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HasilQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizCountArgs} args - Arguments to filter HasilQuizs to count.
     * @example
     * // Count the number of HasilQuizs
     * const count = await prisma.hasilQuiz.count({
     *   where: {
     *     // ... the filter for the HasilQuizs we want to count
     *   }
     * })
    **/
    count<T extends HasilQuizCountArgs>(
      args?: Subset<T, HasilQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HasilQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HasilQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HasilQuizAggregateArgs>(args: Subset<T, HasilQuizAggregateArgs>): Prisma.PrismaPromise<GetHasilQuizAggregateType<T>>

    /**
     * Group by HasilQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilQuizGroupByArgs} args - Group by arguments.
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
      T extends HasilQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HasilQuizGroupByArgs['orderBy'] }
        : { orderBy?: HasilQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HasilQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHasilQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HasilQuiz model
   */
  readonly fields: HasilQuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HasilQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HasilQuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cerita<T extends CeritaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CeritaDefaultArgs<ExtArgs>>): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HasilQuiz model
   */ 
  interface HasilQuizFieldRefs {
    readonly id: FieldRef<"HasilQuiz", 'String'>
    readonly skor: FieldRef<"HasilQuiz", 'Int'>
    readonly totalSoal: FieldRef<"HasilQuiz", 'Int'>
    readonly userId: FieldRef<"HasilQuiz", 'String'>
    readonly ceritaId: FieldRef<"HasilQuiz", 'String'>
    readonly createdAt: FieldRef<"HasilQuiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HasilQuiz findUnique
   */
  export type HasilQuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter, which HasilQuiz to fetch.
     */
    where: HasilQuizWhereUniqueInput
  }

  /**
   * HasilQuiz findUniqueOrThrow
   */
  export type HasilQuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter, which HasilQuiz to fetch.
     */
    where: HasilQuizWhereUniqueInput
  }

  /**
   * HasilQuiz findFirst
   */
  export type HasilQuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter, which HasilQuiz to fetch.
     */
    where?: HasilQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilQuizs to fetch.
     */
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilQuizs.
     */
    cursor?: HasilQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilQuizs.
     */
    distinct?: HasilQuizScalarFieldEnum | HasilQuizScalarFieldEnum[]
  }

  /**
   * HasilQuiz findFirstOrThrow
   */
  export type HasilQuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter, which HasilQuiz to fetch.
     */
    where?: HasilQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilQuizs to fetch.
     */
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilQuizs.
     */
    cursor?: HasilQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilQuizs.
     */
    distinct?: HasilQuizScalarFieldEnum | HasilQuizScalarFieldEnum[]
  }

  /**
   * HasilQuiz findMany
   */
  export type HasilQuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter, which HasilQuizs to fetch.
     */
    where?: HasilQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilQuizs to fetch.
     */
    orderBy?: HasilQuizOrderByWithRelationInput | HasilQuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HasilQuizs.
     */
    cursor?: HasilQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilQuizs.
     */
    skip?: number
    distinct?: HasilQuizScalarFieldEnum | HasilQuizScalarFieldEnum[]
  }

  /**
   * HasilQuiz create
   */
  export type HasilQuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * The data needed to create a HasilQuiz.
     */
    data: XOR<HasilQuizCreateInput, HasilQuizUncheckedCreateInput>
  }

  /**
   * HasilQuiz createMany
   */
  export type HasilQuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HasilQuizs.
     */
    data: HasilQuizCreateManyInput | HasilQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HasilQuiz createManyAndReturn
   */
  export type HasilQuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * The data used to create many HasilQuizs.
     */
    data: HasilQuizCreateManyInput | HasilQuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HasilQuiz update
   */
  export type HasilQuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * The data needed to update a HasilQuiz.
     */
    data: XOR<HasilQuizUpdateInput, HasilQuizUncheckedUpdateInput>
    /**
     * Choose, which HasilQuiz to update.
     */
    where: HasilQuizWhereUniqueInput
  }

  /**
   * HasilQuiz updateMany
   */
  export type HasilQuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HasilQuizs.
     */
    data: XOR<HasilQuizUpdateManyMutationInput, HasilQuizUncheckedUpdateManyInput>
    /**
     * Filter which HasilQuizs to update
     */
    where?: HasilQuizWhereInput
  }

  /**
   * HasilQuiz upsert
   */
  export type HasilQuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * The filter to search for the HasilQuiz to update in case it exists.
     */
    where: HasilQuizWhereUniqueInput
    /**
     * In case the HasilQuiz found by the `where` argument doesn't exist, create a new HasilQuiz with this data.
     */
    create: XOR<HasilQuizCreateInput, HasilQuizUncheckedCreateInput>
    /**
     * In case the HasilQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HasilQuizUpdateInput, HasilQuizUncheckedUpdateInput>
  }

  /**
   * HasilQuiz delete
   */
  export type HasilQuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
    /**
     * Filter which HasilQuiz to delete.
     */
    where: HasilQuizWhereUniqueInput
  }

  /**
   * HasilQuiz deleteMany
   */
  export type HasilQuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilQuizs to delete
     */
    where?: HasilQuizWhereInput
  }

  /**
   * HasilQuiz without action
   */
  export type HasilQuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilQuiz
     */
    select?: HasilQuizSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilQuizInclude<ExtArgs> | null
  }


  /**
   * Model Progres
   */

  export type AggregateProgres = {
    _count: ProgresCountAggregateOutputType | null
    _avg: ProgresAvgAggregateOutputType | null
    _sum: ProgresSumAggregateOutputType | null
    _min: ProgresMinAggregateOutputType | null
    _max: ProgresMaxAggregateOutputType | null
  }

  export type ProgresAvgAggregateOutputType = {
    lastScene: number | null
  }

  export type ProgresSumAggregateOutputType = {
    lastScene: number | null
  }

  export type ProgresMinAggregateOutputType = {
    id: string | null
    lastScene: number | null
    isSelesai: boolean | null
    userId: string | null
    ceritaId: string | null
    updatedAt: Date | null
  }

  export type ProgresMaxAggregateOutputType = {
    id: string | null
    lastScene: number | null
    isSelesai: boolean | null
    userId: string | null
    ceritaId: string | null
    updatedAt: Date | null
  }

  export type ProgresCountAggregateOutputType = {
    id: number
    lastScene: number
    isSelesai: number
    userId: number
    ceritaId: number
    updatedAt: number
    _all: number
  }


  export type ProgresAvgAggregateInputType = {
    lastScene?: true
  }

  export type ProgresSumAggregateInputType = {
    lastScene?: true
  }

  export type ProgresMinAggregateInputType = {
    id?: true
    lastScene?: true
    isSelesai?: true
    userId?: true
    ceritaId?: true
    updatedAt?: true
  }

  export type ProgresMaxAggregateInputType = {
    id?: true
    lastScene?: true
    isSelesai?: true
    userId?: true
    ceritaId?: true
    updatedAt?: true
  }

  export type ProgresCountAggregateInputType = {
    id?: true
    lastScene?: true
    isSelesai?: true
    userId?: true
    ceritaId?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progres to aggregate.
     */
    where?: ProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progres to fetch.
     */
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progres
    **/
    _count?: true | ProgresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgresMaxAggregateInputType
  }

  export type GetProgresAggregateType<T extends ProgresAggregateArgs> = {
        [P in keyof T & keyof AggregateProgres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgres[P]>
      : GetScalarType<T[P], AggregateProgres[P]>
  }




  export type ProgresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgresWhereInput
    orderBy?: ProgresOrderByWithAggregationInput | ProgresOrderByWithAggregationInput[]
    by: ProgresScalarFieldEnum[] | ProgresScalarFieldEnum
    having?: ProgresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgresCountAggregateInputType | true
    _avg?: ProgresAvgAggregateInputType
    _sum?: ProgresSumAggregateInputType
    _min?: ProgresMinAggregateInputType
    _max?: ProgresMaxAggregateInputType
  }

  export type ProgresGroupByOutputType = {
    id: string
    lastScene: number
    isSelesai: boolean
    userId: string
    ceritaId: string
    updatedAt: Date
    _count: ProgresCountAggregateOutputType | null
    _avg: ProgresAvgAggregateOutputType | null
    _sum: ProgresSumAggregateOutputType | null
    _min: ProgresMinAggregateOutputType | null
    _max: ProgresMaxAggregateOutputType | null
  }

  type GetProgresGroupByPayload<T extends ProgresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgresGroupByOutputType[P]>
            : GetScalarType<T[P], ProgresGroupByOutputType[P]>
        }
      >
    >


  export type ProgresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastScene?: boolean
    isSelesai?: boolean
    userId?: boolean
    ceritaId?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progres"]>

  export type ProgresSelectScalar = {
    id?: boolean
    lastScene?: boolean
    isSelesai?: boolean
    userId?: boolean
    ceritaId?: boolean
    updatedAt?: boolean
  }


  export type ProgresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }


  export type $ProgresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progres"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cerita: Prisma.$CeritaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastScene: number
      isSelesai: boolean
      userId: string
      ceritaId: string
      updatedAt: Date
    }, ExtArgs["result"]["progres"]>
    composites: {}
  }


  type ProgresGetPayload<S extends boolean | null | undefined | ProgresDefaultArgs> = $Result.GetResult<Prisma.$ProgresPayload, S>

  type ProgresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgresCountAggregateInputType | true
    }

  export interface ProgresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progres'], meta: { name: 'Progres' } }
    /**
     * Find zero or one Progres that matches the filter.
     * @param {ProgresFindUniqueArgs} args - Arguments to find a Progres
     * @example
     * // Get one Progres
     * const progres = await prisma.progres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresFindUniqueArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Progres that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgresFindUniqueOrThrowArgs} args - Arguments to find a Progres
     * @example
     * // Get one Progres
     * const progres = await prisma.progres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Progres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresFindFirstArgs} args - Arguments to find a Progres
     * @example
     * // Get one Progres
     * const progres = await prisma.progres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresFindFirstArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Progres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresFindFirstOrThrowArgs} args - Arguments to find a Progres
     * @example
     * // Get one Progres
     * const progres = await prisma.progres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Progres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progres
     * const progres = await prisma.progres.findMany()
     * 
     * // Get first 10 Progres
     * const progres = await prisma.progres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progresWithIdOnly = await prisma.progres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Progres.
     * @param {ProgresCreateArgs} args - Arguments to create a Progres.
     * @example
     * // Create one Progres
     * const Progres = await prisma.progres.create({
     *   data: {
     *     // ... data to create a Progres
     *   }
     * })
     * 
    **/
    create<T extends ProgresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresCreateArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Progres.
     * @param {ProgresCreateManyArgs} args - Arguments to create many Progres.
     * @example
     * // Create many Progres
     * const progres = await prisma.progres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProgresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progres and returns the data saved in the database.
     * @param {ProgresCreateManyAndReturnArgs} args - Arguments to create many Progres.
     * @example
     * // Create many Progres
     * const progres = await prisma.progres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progres and only return the `id`
     * const progresWithIdOnly = await prisma.progres.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProgresCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Progres.
     * @param {ProgresDeleteArgs} args - Arguments to delete one Progres.
     * @example
     * // Delete one Progres
     * const Progres = await prisma.progres.delete({
     *   where: {
     *     // ... filter to delete one Progres
     *   }
     * })
     * 
    **/
    delete<T extends ProgresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresDeleteArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Progres.
     * @param {ProgresUpdateArgs} args - Arguments to update one Progres.
     * @example
     * // Update one Progres
     * const progres = await prisma.progres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresUpdateArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Progres.
     * @param {ProgresDeleteManyArgs} args - Arguments to filter Progres to delete.
     * @example
     * // Delete a few Progres
     * const { count } = await prisma.progres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progres
     * const progres = await prisma.progres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progres.
     * @param {ProgresUpsertArgs} args - Arguments to update or create a Progres.
     * @example
     * // Update or create a Progres
     * const progres = await prisma.progres.upsert({
     *   create: {
     *     // ... data to create a Progres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progres we want to update
     *   }
     * })
    **/
    upsert<T extends ProgresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgresUpsertArgs<ExtArgs>>
    ): Prisma__ProgresClient<$Result.GetResult<Prisma.$ProgresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Progres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresCountArgs} args - Arguments to filter Progres to count.
     * @example
     * // Count the number of Progres
     * const count = await prisma.progres.count({
     *   where: {
     *     // ... the filter for the Progres we want to count
     *   }
     * })
    **/
    count<T extends ProgresCountArgs>(
      args?: Subset<T, ProgresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgresAggregateArgs>(args: Subset<T, ProgresAggregateArgs>): Prisma.PrismaPromise<GetProgresAggregateType<T>>

    /**
     * Group by Progres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgresGroupByArgs} args - Group by arguments.
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
      T extends ProgresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgresGroupByArgs['orderBy'] }
        : { orderBy?: ProgresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progres model
   */
  readonly fields: ProgresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cerita<T extends CeritaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CeritaDefaultArgs<ExtArgs>>): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Progres model
   */ 
  interface ProgresFieldRefs {
    readonly id: FieldRef<"Progres", 'String'>
    readonly lastScene: FieldRef<"Progres", 'Int'>
    readonly isSelesai: FieldRef<"Progres", 'Boolean'>
    readonly userId: FieldRef<"Progres", 'String'>
    readonly ceritaId: FieldRef<"Progres", 'String'>
    readonly updatedAt: FieldRef<"Progres", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Progres findUnique
   */
  export type ProgresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter, which Progres to fetch.
     */
    where: ProgresWhereUniqueInput
  }

  /**
   * Progres findUniqueOrThrow
   */
  export type ProgresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter, which Progres to fetch.
     */
    where: ProgresWhereUniqueInput
  }

  /**
   * Progres findFirst
   */
  export type ProgresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter, which Progres to fetch.
     */
    where?: ProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progres to fetch.
     */
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progres.
     */
    cursor?: ProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progres.
     */
    distinct?: ProgresScalarFieldEnum | ProgresScalarFieldEnum[]
  }

  /**
   * Progres findFirstOrThrow
   */
  export type ProgresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter, which Progres to fetch.
     */
    where?: ProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progres to fetch.
     */
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progres.
     */
    cursor?: ProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progres.
     */
    distinct?: ProgresScalarFieldEnum | ProgresScalarFieldEnum[]
  }

  /**
   * Progres findMany
   */
  export type ProgresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter, which Progres to fetch.
     */
    where?: ProgresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progres to fetch.
     */
    orderBy?: ProgresOrderByWithRelationInput | ProgresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progres.
     */
    cursor?: ProgresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progres.
     */
    skip?: number
    distinct?: ProgresScalarFieldEnum | ProgresScalarFieldEnum[]
  }

  /**
   * Progres create
   */
  export type ProgresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * The data needed to create a Progres.
     */
    data: XOR<ProgresCreateInput, ProgresUncheckedCreateInput>
  }

  /**
   * Progres createMany
   */
  export type ProgresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progres.
     */
    data: ProgresCreateManyInput | ProgresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progres createManyAndReturn
   */
  export type ProgresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * The data used to create many Progres.
     */
    data: ProgresCreateManyInput | ProgresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progres update
   */
  export type ProgresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * The data needed to update a Progres.
     */
    data: XOR<ProgresUpdateInput, ProgresUncheckedUpdateInput>
    /**
     * Choose, which Progres to update.
     */
    where: ProgresWhereUniqueInput
  }

  /**
   * Progres updateMany
   */
  export type ProgresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progres.
     */
    data: XOR<ProgresUpdateManyMutationInput, ProgresUncheckedUpdateManyInput>
    /**
     * Filter which Progres to update
     */
    where?: ProgresWhereInput
  }

  /**
   * Progres upsert
   */
  export type ProgresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * The filter to search for the Progres to update in case it exists.
     */
    where: ProgresWhereUniqueInput
    /**
     * In case the Progres found by the `where` argument doesn't exist, create a new Progres with this data.
     */
    create: XOR<ProgresCreateInput, ProgresUncheckedCreateInput>
    /**
     * In case the Progres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgresUpdateInput, ProgresUncheckedUpdateInput>
  }

  /**
   * Progres delete
   */
  export type ProgresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
    /**
     * Filter which Progres to delete.
     */
    where: ProgresWhereUniqueInput
  }

  /**
   * Progres deleteMany
   */
  export type ProgresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progres to delete
     */
    where?: ProgresWhereInput
  }

  /**
   * Progres without action
   */
  export type ProgresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progres
     */
    select?: ProgresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgresInclude<ExtArgs> | null
  }


  /**
   * Model Favorit
   */

  export type AggregateFavorit = {
    _count: FavoritCountAggregateOutputType | null
    _min: FavoritMinAggregateOutputType | null
    _max: FavoritMaxAggregateOutputType | null
  }

  export type FavoritMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type FavoritMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ceritaId: string | null
    createdAt: Date | null
  }

  export type FavoritCountAggregateOutputType = {
    id: number
    userId: number
    ceritaId: number
    createdAt: number
    _all: number
  }


  export type FavoritMinAggregateInputType = {
    id?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
  }

  export type FavoritMaxAggregateInputType = {
    id?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
  }

  export type FavoritCountAggregateInputType = {
    id?: true
    userId?: true
    ceritaId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoritAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorit to aggregate.
     */
    where?: FavoritWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorits to fetch.
     */
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorits
    **/
    _count?: true | FavoritCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritMaxAggregateInputType
  }

  export type GetFavoritAggregateType<T extends FavoritAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorit[P]>
      : GetScalarType<T[P], AggregateFavorit[P]>
  }




  export type FavoritGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritWhereInput
    orderBy?: FavoritOrderByWithAggregationInput | FavoritOrderByWithAggregationInput[]
    by: FavoritScalarFieldEnum[] | FavoritScalarFieldEnum
    having?: FavoritScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritCountAggregateInputType | true
    _min?: FavoritMinAggregateInputType
    _max?: FavoritMaxAggregateInputType
  }

  export type FavoritGroupByOutputType = {
    id: string
    userId: string
    ceritaId: string
    createdAt: Date
    _count: FavoritCountAggregateOutputType | null
    _min: FavoritMinAggregateOutputType | null
    _max: FavoritMaxAggregateOutputType | null
  }

  type GetFavoritGroupByPayload<T extends FavoritGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritGroupByOutputType[P]>
        }
      >
    >


  export type FavoritSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ceritaId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorit"]>

  export type FavoritSelectScalar = {
    id?: boolean
    userId?: boolean
    ceritaId?: boolean
    createdAt?: boolean
  }


  export type FavoritInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cerita?: boolean | CeritaDefaultArgs<ExtArgs>
  }


  export type $FavoritPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cerita: Prisma.$CeritaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ceritaId: string
      createdAt: Date
    }, ExtArgs["result"]["favorit"]>
    composites: {}
  }


  type FavoritGetPayload<S extends boolean | null | undefined | FavoritDefaultArgs> = $Result.GetResult<Prisma.$FavoritPayload, S>

  type FavoritCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoritFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoritCountAggregateInputType | true
    }

  export interface FavoritDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorit'], meta: { name: 'Favorit' } }
    /**
     * Find zero or one Favorit that matches the filter.
     * @param {FavoritFindUniqueArgs} args - Arguments to find a Favorit
     * @example
     * // Get one Favorit
     * const favorit = await prisma.favorit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoritFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritFindUniqueArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FavoritFindUniqueOrThrowArgs} args - Arguments to find a Favorit
     * @example
     * // Get one Favorit
     * const favorit = await prisma.favorit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoritFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritFindFirstArgs} args - Arguments to find a Favorit
     * @example
     * // Get one Favorit
     * const favorit = await prisma.favorit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoritFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritFindFirstArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritFindFirstOrThrowArgs} args - Arguments to find a Favorit
     * @example
     * // Get one Favorit
     * const favorit = await prisma.favorit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoritFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorits
     * const favorits = await prisma.favorit.findMany()
     * 
     * // Get first 10 Favorits
     * const favorits = await prisma.favorit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritWithIdOnly = await prisma.favorit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoritFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorit.
     * @param {FavoritCreateArgs} args - Arguments to create a Favorit.
     * @example
     * // Create one Favorit
     * const Favorit = await prisma.favorit.create({
     *   data: {
     *     // ... data to create a Favorit
     *   }
     * })
     * 
    **/
    create<T extends FavoritCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritCreateArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorits.
     * @param {FavoritCreateManyArgs} args - Arguments to create many Favorits.
     * @example
     * // Create many Favorits
     * const favorit = await prisma.favorit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FavoritCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorits and returns the data saved in the database.
     * @param {FavoritCreateManyAndReturnArgs} args - Arguments to create many Favorits.
     * @example
     * // Create many Favorits
     * const favorit = await prisma.favorit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorits and only return the `id`
     * const favoritWithIdOnly = await prisma.favorit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends FavoritCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Favorit.
     * @param {FavoritDeleteArgs} args - Arguments to delete one Favorit.
     * @example
     * // Delete one Favorit
     * const Favorit = await prisma.favorit.delete({
     *   where: {
     *     // ... filter to delete one Favorit
     *   }
     * })
     * 
    **/
    delete<T extends FavoritDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritDeleteArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorit.
     * @param {FavoritUpdateArgs} args - Arguments to update one Favorit.
     * @example
     * // Update one Favorit
     * const favorit = await prisma.favorit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoritUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritUpdateArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorits.
     * @param {FavoritDeleteManyArgs} args - Arguments to filter Favorits to delete.
     * @example
     * // Delete a few Favorits
     * const { count } = await prisma.favorit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoritDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoritDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorits
     * const favorit = await prisma.favorit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoritUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorit.
     * @param {FavoritUpsertArgs} args - Arguments to update or create a Favorit.
     * @example
     * // Update or create a Favorit
     * const favorit = await prisma.favorit.upsert({
     *   create: {
     *     // ... data to create a Favorit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorit we want to update
     *   }
     * })
    **/
    upsert<T extends FavoritUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoritUpsertArgs<ExtArgs>>
    ): Prisma__FavoritClient<$Result.GetResult<Prisma.$FavoritPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Favorits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritCountArgs} args - Arguments to filter Favorits to count.
     * @example
     * // Count the number of Favorits
     * const count = await prisma.favorit.count({
     *   where: {
     *     // ... the filter for the Favorits we want to count
     *   }
     * })
    **/
    count<T extends FavoritCountArgs>(
      args?: Subset<T, FavoritCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritAggregateArgs>(args: Subset<T, FavoritAggregateArgs>): Prisma.PrismaPromise<GetFavoritAggregateType<T>>

    /**
     * Group by Favorit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritGroupByArgs} args - Group by arguments.
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
      T extends FavoritGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritGroupByArgs['orderBy'] }
        : { orderBy?: FavoritGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoritGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorit model
   */
  readonly fields: FavoritFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cerita<T extends CeritaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CeritaDefaultArgs<ExtArgs>>): Prisma__CeritaClient<$Result.GetResult<Prisma.$CeritaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Favorit model
   */ 
  interface FavoritFieldRefs {
    readonly id: FieldRef<"Favorit", 'String'>
    readonly userId: FieldRef<"Favorit", 'String'>
    readonly ceritaId: FieldRef<"Favorit", 'String'>
    readonly createdAt: FieldRef<"Favorit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorit findUnique
   */
  export type FavoritFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter, which Favorit to fetch.
     */
    where: FavoritWhereUniqueInput
  }

  /**
   * Favorit findUniqueOrThrow
   */
  export type FavoritFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter, which Favorit to fetch.
     */
    where: FavoritWhereUniqueInput
  }

  /**
   * Favorit findFirst
   */
  export type FavoritFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter, which Favorit to fetch.
     */
    where?: FavoritWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorits to fetch.
     */
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorits.
     */
    cursor?: FavoritWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorits.
     */
    distinct?: FavoritScalarFieldEnum | FavoritScalarFieldEnum[]
  }

  /**
   * Favorit findFirstOrThrow
   */
  export type FavoritFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter, which Favorit to fetch.
     */
    where?: FavoritWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorits to fetch.
     */
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorits.
     */
    cursor?: FavoritWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorits.
     */
    distinct?: FavoritScalarFieldEnum | FavoritScalarFieldEnum[]
  }

  /**
   * Favorit findMany
   */
  export type FavoritFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter, which Favorits to fetch.
     */
    where?: FavoritWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorits to fetch.
     */
    orderBy?: FavoritOrderByWithRelationInput | FavoritOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorits.
     */
    cursor?: FavoritWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorits.
     */
    skip?: number
    distinct?: FavoritScalarFieldEnum | FavoritScalarFieldEnum[]
  }

  /**
   * Favorit create
   */
  export type FavoritCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorit.
     */
    data: XOR<FavoritCreateInput, FavoritUncheckedCreateInput>
  }

  /**
   * Favorit createMany
   */
  export type FavoritCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorits.
     */
    data: FavoritCreateManyInput | FavoritCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorit createManyAndReturn
   */
  export type FavoritCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * The data used to create many Favorits.
     */
    data: FavoritCreateManyInput | FavoritCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorit update
   */
  export type FavoritUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorit.
     */
    data: XOR<FavoritUpdateInput, FavoritUncheckedUpdateInput>
    /**
     * Choose, which Favorit to update.
     */
    where: FavoritWhereUniqueInput
  }

  /**
   * Favorit updateMany
   */
  export type FavoritUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorits.
     */
    data: XOR<FavoritUpdateManyMutationInput, FavoritUncheckedUpdateManyInput>
    /**
     * Filter which Favorits to update
     */
    where?: FavoritWhereInput
  }

  /**
   * Favorit upsert
   */
  export type FavoritUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorit to update in case it exists.
     */
    where: FavoritWhereUniqueInput
    /**
     * In case the Favorit found by the `where` argument doesn't exist, create a new Favorit with this data.
     */
    create: XOR<FavoritCreateInput, FavoritUncheckedCreateInput>
    /**
     * In case the Favorit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritUpdateInput, FavoritUncheckedUpdateInput>
  }

  /**
   * Favorit delete
   */
  export type FavoritDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
    /**
     * Filter which Favorit to delete.
     */
    where: FavoritWhereUniqueInput
  }

  /**
   * Favorit deleteMany
   */
  export type FavoritDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorits to delete
     */
    where?: FavoritWhereInput
  }

  /**
   * Favorit without action
   */
  export type FavoritDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorit
     */
    select?: FavoritSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritInclude<ExtArgs> | null
  }


  /**
   * Model AppSetting
   */

  export type AggregateAppSetting = {
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  export type AppSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetting to aggregate.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingMaxAggregateInputType
  }

  export type GetAppSettingAggregateType<T extends AppSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetting[P]>
      : GetScalarType<T[P], AggregateAppSetting[P]>
  }




  export type AppSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingWhereInput
    orderBy?: AppSettingOrderByWithAggregationInput | AppSettingOrderByWithAggregationInput[]
    by: AppSettingScalarFieldEnum[] | AppSettingScalarFieldEnum
    having?: AppSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingCountAggregateInputType | true
    _min?: AppSettingMinAggregateInputType
    _max?: AppSettingMaxAggregateInputType
  }

  export type AppSettingGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  type GetAppSettingGroupByPayload<T extends AppSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $AppSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appSetting"]>
    composites: {}
  }


  type AppSettingGetPayload<S extends boolean | null | undefined | AppSettingDefaultArgs> = $Result.GetResult<Prisma.$AppSettingPayload, S>

  type AppSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppSettingCountAggregateInputType | true
    }

  export interface AppSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetting'], meta: { name: 'AppSetting' } }
    /**
     * Find zero or one AppSetting that matches the filter.
     * @param {AppSettingFindUniqueArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppSettingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingFindUniqueArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppSettingFindUniqueOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppSettingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppSettingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingFindFirstArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppSettingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSetting.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppSettingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppSetting.
     * @param {AppSettingCreateArgs} args - Arguments to create a AppSetting.
     * @example
     * // Create one AppSetting
     * const AppSetting = await prisma.appSetting.create({
     *   data: {
     *     // ... data to create a AppSetting
     *   }
     * })
     * 
    **/
    create<T extends AppSettingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingCreateArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppSettings.
     * @param {AppSettingCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AppSettingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `id`
     * const appSettingWithIdOnly = await prisma.appSetting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AppSettingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AppSetting.
     * @param {AppSettingDeleteArgs} args - Arguments to delete one AppSetting.
     * @example
     * // Delete one AppSetting
     * const AppSetting = await prisma.appSetting.delete({
     *   where: {
     *     // ... filter to delete one AppSetting
     *   }
     * })
     * 
    **/
    delete<T extends AppSettingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingDeleteArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppSetting.
     * @param {AppSettingUpdateArgs} args - Arguments to update one AppSetting.
     * @example
     * // Update one AppSetting
     * const appSetting = await prisma.appSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppSettingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingUpdateArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppSettingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppSettingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppSettingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppSetting.
     * @param {AppSettingUpsertArgs} args - Arguments to update or create a AppSetting.
     * @example
     * // Update or create a AppSetting
     * const appSetting = await prisma.appSetting.upsert({
     *   create: {
     *     // ... data to create a AppSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetting we want to update
     *   }
     * })
    **/
    upsert<T extends AppSettingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppSettingUpsertArgs<ExtArgs>>
    ): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSetting.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingCountArgs>(
      args?: Subset<T, AppSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSettingAggregateArgs>(args: Subset<T, AppSettingAggregateArgs>): Prisma.PrismaPromise<GetAppSettingAggregateType<T>>

    /**
     * Group by AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingGroupByArgs} args - Group by arguments.
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
      T extends AppSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetting model
   */
  readonly fields: AppSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppSetting model
   */ 
  interface AppSettingFieldRefs {
    readonly id: FieldRef<"AppSetting", 'String'>
    readonly key: FieldRef<"AppSetting", 'String'>
    readonly value: FieldRef<"AppSetting", 'String'>
    readonly createdAt: FieldRef<"AppSetting", 'DateTime'>
    readonly updatedAt: FieldRef<"AppSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetting findUnique
   */
  export type AppSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findUniqueOrThrow
   */
  export type AppSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findFirst
   */
  export type AppSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findFirstOrThrow
   */
  export type AppSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findMany
   */
  export type AppSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting create
   */
  export type AppSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a AppSetting.
     */
    data: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
  }

  /**
   * AppSetting createMany
   */
  export type AppSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting createManyAndReturn
   */
  export type AppSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting update
   */
  export type AppSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a AppSetting.
     */
    data: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
    /**
     * Choose, which AppSetting to update.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting updateMany
   */
  export type AppSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
  }

  /**
   * AppSetting upsert
   */
  export type AppSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the AppSetting to update in case it exists.
     */
    where: AppSettingWhereUniqueInput
    /**
     * In case the AppSetting found by the `where` argument doesn't exist, create a new AppSetting with this data.
     */
    create: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
    /**
     * In case the AppSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
  }

  /**
   * AppSetting delete
   */
  export type AppSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter which AppSetting to delete.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting deleteMany
   */
  export type AppSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingWhereInput
  }

  /**
   * AppSetting without action
   */
  export type AppSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nama: 'nama',
    avatar: 'avatar',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const CeritaScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    deskripsi: 'deskripsi',
    thumbnail: 'thumbnail',
    status: 'status',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    kategoriId: 'kategoriId'
  };

  export type CeritaScalarFieldEnum = (typeof CeritaScalarFieldEnum)[keyof typeof CeritaScalarFieldEnum]


  export const SceneScalarFieldEnum: {
    id: 'id',
    urutan: 'urutan',
    gambar: 'gambar',
    teks: 'teks',
    audio: 'audio',
    ceritaId: 'ceritaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SceneScalarFieldEnum = (typeof SceneScalarFieldEnum)[keyof typeof SceneScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    pertanyaan: 'pertanyaan',
    urutan: 'urutan',
    ceritaId: 'ceritaId',
    createdAt: 'createdAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const PilihanJawabanScalarFieldEnum: {
    id: 'id',
    teks: 'teks',
    isBenar: 'isBenar',
    quizId: 'quizId',
    createdAt: 'createdAt'
  };

  export type PilihanJawabanScalarFieldEnum = (typeof PilihanJawabanScalarFieldEnum)[keyof typeof PilihanJawabanScalarFieldEnum]


  export const HasilQuizScalarFieldEnum: {
    id: 'id',
    skor: 'skor',
    totalSoal: 'totalSoal',
    userId: 'userId',
    ceritaId: 'ceritaId',
    createdAt: 'createdAt'
  };

  export type HasilQuizScalarFieldEnum = (typeof HasilQuizScalarFieldEnum)[keyof typeof HasilQuizScalarFieldEnum]


  export const ProgresScalarFieldEnum: {
    id: 'id',
    lastScene: 'lastScene',
    isSelesai: 'isSelesai',
    userId: 'userId',
    ceritaId: 'ceritaId',
    updatedAt: 'updatedAt'
  };

  export type ProgresScalarFieldEnum = (typeof ProgresScalarFieldEnum)[keyof typeof ProgresScalarFieldEnum]


  export const FavoritScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ceritaId: 'ceritaId',
    createdAt: 'createdAt'
  };

  export type FavoritScalarFieldEnum = (typeof FavoritScalarFieldEnum)[keyof typeof FavoritScalarFieldEnum]


  export const AppSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppSettingScalarFieldEnum = (typeof AppSettingScalarFieldEnum)[keyof typeof AppSettingScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusCerita'
   */
  export type EnumStatusCeritaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCerita'>
    


  /**
   * Reference to a field of type 'StatusCerita[]'
   */
  export type ListEnumStatusCeritaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusCerita[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    progres?: ProgresListRelationFilter
    favorit?: FavoritListRelationFilter
    hasilQuiz?: HasilQuizListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    progres?: ProgresOrderByRelationAggregateInput
    favorit?: FavoritOrderByRelationAggregateInput
    hasilQuiz?: HasilQuizOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    progres?: ProgresListRelationFilter
    favorit?: FavoritListRelationFilter
    hasilQuiz?: HasilQuizListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    nama?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: StringFilter<"Kategori"> | string
    nama?: StringFilter<"Kategori"> | string
    icon?: StringNullableFilter<"Kategori"> | string | null
    createdAt?: DateTimeFilter<"Kategori"> | Date | string
    cerita?: CeritaListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cerita?: CeritaOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    icon?: StringNullableFilter<"Kategori"> | string | null
    createdAt?: DateTimeFilter<"Kategori"> | Date | string
    cerita?: CeritaListRelationFilter
  }, "id" | "nama">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kategori"> | string
    nama?: StringWithAggregatesFilter<"Kategori"> | string
    icon?: StringNullableWithAggregatesFilter<"Kategori"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
  }

  export type CeritaWhereInput = {
    AND?: CeritaWhereInput | CeritaWhereInput[]
    OR?: CeritaWhereInput[]
    NOT?: CeritaWhereInput | CeritaWhereInput[]
    id?: StringFilter<"Cerita"> | string
    judul?: StringFilter<"Cerita"> | string
    deskripsi?: StringNullableFilter<"Cerita"> | string | null
    thumbnail?: StringNullableFilter<"Cerita"> | string | null
    status?: EnumStatusCeritaFilter<"Cerita"> | $Enums.StatusCerita
    viewCount?: IntFilter<"Cerita"> | number
    createdAt?: DateTimeFilter<"Cerita"> | Date | string
    updatedAt?: DateTimeFilter<"Cerita"> | Date | string
    kategoriId?: StringFilter<"Cerita"> | string
    kategori?: XOR<KategoriRelationFilter, KategoriWhereInput>
    scenes?: SceneListRelationFilter
    quizzes?: QuizListRelationFilter
    progres?: ProgresListRelationFilter
    favorit?: FavoritListRelationFilter
    hasilQuiz?: HasilQuizListRelationFilter
  }

  export type CeritaOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategoriId?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
    scenes?: SceneOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
    progres?: ProgresOrderByRelationAggregateInput
    favorit?: FavoritOrderByRelationAggregateInput
    hasilQuiz?: HasilQuizOrderByRelationAggregateInput
  }

  export type CeritaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CeritaWhereInput | CeritaWhereInput[]
    OR?: CeritaWhereInput[]
    NOT?: CeritaWhereInput | CeritaWhereInput[]
    judul?: StringFilter<"Cerita"> | string
    deskripsi?: StringNullableFilter<"Cerita"> | string | null
    thumbnail?: StringNullableFilter<"Cerita"> | string | null
    status?: EnumStatusCeritaFilter<"Cerita"> | $Enums.StatusCerita
    viewCount?: IntFilter<"Cerita"> | number
    createdAt?: DateTimeFilter<"Cerita"> | Date | string
    updatedAt?: DateTimeFilter<"Cerita"> | Date | string
    kategoriId?: StringFilter<"Cerita"> | string
    kategori?: XOR<KategoriRelationFilter, KategoriWhereInput>
    scenes?: SceneListRelationFilter
    quizzes?: QuizListRelationFilter
    progres?: ProgresListRelationFilter
    favorit?: FavoritListRelationFilter
    hasilQuiz?: HasilQuizListRelationFilter
  }, "id">

  export type CeritaOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategoriId?: SortOrder
    _count?: CeritaCountOrderByAggregateInput
    _avg?: CeritaAvgOrderByAggregateInput
    _max?: CeritaMaxOrderByAggregateInput
    _min?: CeritaMinOrderByAggregateInput
    _sum?: CeritaSumOrderByAggregateInput
  }

  export type CeritaScalarWhereWithAggregatesInput = {
    AND?: CeritaScalarWhereWithAggregatesInput | CeritaScalarWhereWithAggregatesInput[]
    OR?: CeritaScalarWhereWithAggregatesInput[]
    NOT?: CeritaScalarWhereWithAggregatesInput | CeritaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cerita"> | string
    judul?: StringWithAggregatesFilter<"Cerita"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Cerita"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Cerita"> | string | null
    status?: EnumStatusCeritaWithAggregatesFilter<"Cerita"> | $Enums.StatusCerita
    viewCount?: IntWithAggregatesFilter<"Cerita"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cerita"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cerita"> | Date | string
    kategoriId?: StringWithAggregatesFilter<"Cerita"> | string
  }

  export type SceneWhereInput = {
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    id?: StringFilter<"Scene"> | string
    urutan?: IntFilter<"Scene"> | number
    gambar?: StringNullableFilter<"Scene"> | string | null
    teks?: StringFilter<"Scene"> | string
    audio?: StringNullableFilter<"Scene"> | string | null
    ceritaId?: StringFilter<"Scene"> | string
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }

  export type SceneOrderByWithRelationInput = {
    id?: SortOrder
    urutan?: SortOrder
    gambar?: SortOrderInput | SortOrder
    teks?: SortOrder
    audio?: SortOrderInput | SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cerita?: CeritaOrderByWithRelationInput
  }

  export type SceneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ceritaId_urutan?: SceneCeritaIdUrutanCompoundUniqueInput
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    urutan?: IntFilter<"Scene"> | number
    gambar?: StringNullableFilter<"Scene"> | string | null
    teks?: StringFilter<"Scene"> | string
    audio?: StringNullableFilter<"Scene"> | string | null
    ceritaId?: StringFilter<"Scene"> | string
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }, "id" | "ceritaId_urutan">

  export type SceneOrderByWithAggregationInput = {
    id?: SortOrder
    urutan?: SortOrder
    gambar?: SortOrderInput | SortOrder
    teks?: SortOrder
    audio?: SortOrderInput | SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SceneCountOrderByAggregateInput
    _avg?: SceneAvgOrderByAggregateInput
    _max?: SceneMaxOrderByAggregateInput
    _min?: SceneMinOrderByAggregateInput
    _sum?: SceneSumOrderByAggregateInput
  }

  export type SceneScalarWhereWithAggregatesInput = {
    AND?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    OR?: SceneScalarWhereWithAggregatesInput[]
    NOT?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scene"> | string
    urutan?: IntWithAggregatesFilter<"Scene"> | number
    gambar?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    teks?: StringWithAggregatesFilter<"Scene"> | string
    audio?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    ceritaId?: StringWithAggregatesFilter<"Scene"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Scene"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scene"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    pertanyaan?: StringFilter<"Quiz"> | string
    urutan?: IntFilter<"Quiz"> | number
    ceritaId?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
    pilihan?: PilihanJawabanListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    urutan?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    cerita?: CeritaOrderByWithRelationInput
    pilihan?: PilihanJawabanOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    pertanyaan?: StringFilter<"Quiz"> | string
    urutan?: IntFilter<"Quiz"> | number
    ceritaId?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
    pilihan?: PilihanJawabanListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    urutan?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    pertanyaan?: StringWithAggregatesFilter<"Quiz"> | string
    urutan?: IntWithAggregatesFilter<"Quiz"> | number
    ceritaId?: StringWithAggregatesFilter<"Quiz"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type PilihanJawabanWhereInput = {
    AND?: PilihanJawabanWhereInput | PilihanJawabanWhereInput[]
    OR?: PilihanJawabanWhereInput[]
    NOT?: PilihanJawabanWhereInput | PilihanJawabanWhereInput[]
    id?: StringFilter<"PilihanJawaban"> | string
    teks?: StringFilter<"PilihanJawaban"> | string
    isBenar?: BoolFilter<"PilihanJawaban"> | boolean
    quizId?: StringFilter<"PilihanJawaban"> | string
    createdAt?: DateTimeFilter<"PilihanJawaban"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
  }

  export type PilihanJawabanOrderByWithRelationInput = {
    id?: SortOrder
    teks?: SortOrder
    isBenar?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    quiz?: QuizOrderByWithRelationInput
  }

  export type PilihanJawabanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PilihanJawabanWhereInput | PilihanJawabanWhereInput[]
    OR?: PilihanJawabanWhereInput[]
    NOT?: PilihanJawabanWhereInput | PilihanJawabanWhereInput[]
    teks?: StringFilter<"PilihanJawaban"> | string
    isBenar?: BoolFilter<"PilihanJawaban"> | boolean
    quizId?: StringFilter<"PilihanJawaban"> | string
    createdAt?: DateTimeFilter<"PilihanJawaban"> | Date | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput>
  }, "id">

  export type PilihanJawabanOrderByWithAggregationInput = {
    id?: SortOrder
    teks?: SortOrder
    isBenar?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    _count?: PilihanJawabanCountOrderByAggregateInput
    _max?: PilihanJawabanMaxOrderByAggregateInput
    _min?: PilihanJawabanMinOrderByAggregateInput
  }

  export type PilihanJawabanScalarWhereWithAggregatesInput = {
    AND?: PilihanJawabanScalarWhereWithAggregatesInput | PilihanJawabanScalarWhereWithAggregatesInput[]
    OR?: PilihanJawabanScalarWhereWithAggregatesInput[]
    NOT?: PilihanJawabanScalarWhereWithAggregatesInput | PilihanJawabanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PilihanJawaban"> | string
    teks?: StringWithAggregatesFilter<"PilihanJawaban"> | string
    isBenar?: BoolWithAggregatesFilter<"PilihanJawaban"> | boolean
    quizId?: StringWithAggregatesFilter<"PilihanJawaban"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PilihanJawaban"> | Date | string
  }

  export type HasilQuizWhereInput = {
    AND?: HasilQuizWhereInput | HasilQuizWhereInput[]
    OR?: HasilQuizWhereInput[]
    NOT?: HasilQuizWhereInput | HasilQuizWhereInput[]
    id?: StringFilter<"HasilQuiz"> | string
    skor?: IntFilter<"HasilQuiz"> | number
    totalSoal?: IntFilter<"HasilQuiz"> | number
    userId?: StringFilter<"HasilQuiz"> | string
    ceritaId?: StringFilter<"HasilQuiz"> | string
    createdAt?: DateTimeFilter<"HasilQuiz"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }

  export type HasilQuizOrderByWithRelationInput = {
    id?: SortOrder
    skor?: SortOrder
    totalSoal?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cerita?: CeritaOrderByWithRelationInput
  }

  export type HasilQuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HasilQuizWhereInput | HasilQuizWhereInput[]
    OR?: HasilQuizWhereInput[]
    NOT?: HasilQuizWhereInput | HasilQuizWhereInput[]
    skor?: IntFilter<"HasilQuiz"> | number
    totalSoal?: IntFilter<"HasilQuiz"> | number
    userId?: StringFilter<"HasilQuiz"> | string
    ceritaId?: StringFilter<"HasilQuiz"> | string
    createdAt?: DateTimeFilter<"HasilQuiz"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }, "id">

  export type HasilQuizOrderByWithAggregationInput = {
    id?: SortOrder
    skor?: SortOrder
    totalSoal?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    _count?: HasilQuizCountOrderByAggregateInput
    _avg?: HasilQuizAvgOrderByAggregateInput
    _max?: HasilQuizMaxOrderByAggregateInput
    _min?: HasilQuizMinOrderByAggregateInput
    _sum?: HasilQuizSumOrderByAggregateInput
  }

  export type HasilQuizScalarWhereWithAggregatesInput = {
    AND?: HasilQuizScalarWhereWithAggregatesInput | HasilQuizScalarWhereWithAggregatesInput[]
    OR?: HasilQuizScalarWhereWithAggregatesInput[]
    NOT?: HasilQuizScalarWhereWithAggregatesInput | HasilQuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HasilQuiz"> | string
    skor?: IntWithAggregatesFilter<"HasilQuiz"> | number
    totalSoal?: IntWithAggregatesFilter<"HasilQuiz"> | number
    userId?: StringWithAggregatesFilter<"HasilQuiz"> | string
    ceritaId?: StringWithAggregatesFilter<"HasilQuiz"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HasilQuiz"> | Date | string
  }

  export type ProgresWhereInput = {
    AND?: ProgresWhereInput | ProgresWhereInput[]
    OR?: ProgresWhereInput[]
    NOT?: ProgresWhereInput | ProgresWhereInput[]
    id?: StringFilter<"Progres"> | string
    lastScene?: IntFilter<"Progres"> | number
    isSelesai?: BoolFilter<"Progres"> | boolean
    userId?: StringFilter<"Progres"> | string
    ceritaId?: StringFilter<"Progres"> | string
    updatedAt?: DateTimeFilter<"Progres"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }

  export type ProgresOrderByWithRelationInput = {
    id?: SortOrder
    lastScene?: SortOrder
    isSelesai?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cerita?: CeritaOrderByWithRelationInput
  }

  export type ProgresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_ceritaId?: ProgresUserIdCeritaIdCompoundUniqueInput
    AND?: ProgresWhereInput | ProgresWhereInput[]
    OR?: ProgresWhereInput[]
    NOT?: ProgresWhereInput | ProgresWhereInput[]
    lastScene?: IntFilter<"Progres"> | number
    isSelesai?: BoolFilter<"Progres"> | boolean
    userId?: StringFilter<"Progres"> | string
    ceritaId?: StringFilter<"Progres"> | string
    updatedAt?: DateTimeFilter<"Progres"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }, "id" | "userId_ceritaId">

  export type ProgresOrderByWithAggregationInput = {
    id?: SortOrder
    lastScene?: SortOrder
    isSelesai?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgresCountOrderByAggregateInput
    _avg?: ProgresAvgOrderByAggregateInput
    _max?: ProgresMaxOrderByAggregateInput
    _min?: ProgresMinOrderByAggregateInput
    _sum?: ProgresSumOrderByAggregateInput
  }

  export type ProgresScalarWhereWithAggregatesInput = {
    AND?: ProgresScalarWhereWithAggregatesInput | ProgresScalarWhereWithAggregatesInput[]
    OR?: ProgresScalarWhereWithAggregatesInput[]
    NOT?: ProgresScalarWhereWithAggregatesInput | ProgresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Progres"> | string
    lastScene?: IntWithAggregatesFilter<"Progres"> | number
    isSelesai?: BoolWithAggregatesFilter<"Progres"> | boolean
    userId?: StringWithAggregatesFilter<"Progres"> | string
    ceritaId?: StringWithAggregatesFilter<"Progres"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Progres"> | Date | string
  }

  export type FavoritWhereInput = {
    AND?: FavoritWhereInput | FavoritWhereInput[]
    OR?: FavoritWhereInput[]
    NOT?: FavoritWhereInput | FavoritWhereInput[]
    id?: StringFilter<"Favorit"> | string
    userId?: StringFilter<"Favorit"> | string
    ceritaId?: StringFilter<"Favorit"> | string
    createdAt?: DateTimeFilter<"Favorit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }

  export type FavoritOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cerita?: CeritaOrderByWithRelationInput
  }

  export type FavoritWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_ceritaId?: FavoritUserIdCeritaIdCompoundUniqueInput
    AND?: FavoritWhereInput | FavoritWhereInput[]
    OR?: FavoritWhereInput[]
    NOT?: FavoritWhereInput | FavoritWhereInput[]
    userId?: StringFilter<"Favorit"> | string
    ceritaId?: StringFilter<"Favorit"> | string
    createdAt?: DateTimeFilter<"Favorit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cerita?: XOR<CeritaRelationFilter, CeritaWhereInput>
  }, "id" | "userId_ceritaId">

  export type FavoritOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoritCountOrderByAggregateInput
    _max?: FavoritMaxOrderByAggregateInput
    _min?: FavoritMinOrderByAggregateInput
  }

  export type FavoritScalarWhereWithAggregatesInput = {
    AND?: FavoritScalarWhereWithAggregatesInput | FavoritScalarWhereWithAggregatesInput[]
    OR?: FavoritScalarWhereWithAggregatesInput[]
    NOT?: FavoritScalarWhereWithAggregatesInput | FavoritScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorit"> | string
    userId?: StringWithAggregatesFilter<"Favorit"> | string
    ceritaId?: StringWithAggregatesFilter<"Favorit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorit"> | Date | string
  }

  export type AppSettingWhereInput = {
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    id?: StringFilter<"AppSetting"> | string
    key?: StringFilter<"AppSetting"> | string
    value?: StringFilter<"AppSetting"> | string
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }

  export type AppSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    value?: StringFilter<"AppSetting"> | string
    createdAt?: DateTimeFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }, "id" | "key">

  export type AppSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingCountOrderByAggregateInput
    _max?: AppSettingMaxOrderByAggregateInput
    _min?: AppSettingMinOrderByAggregateInput
  }

  export type AppSettingScalarWhereWithAggregatesInput = {
    AND?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    OR?: AppSettingScalarWhereWithAggregatesInput[]
    NOT?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSetting"> | string
    key?: StringWithAggregatesFilter<"AppSetting"> | string
    value?: StringWithAggregatesFilter<"AppSetting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresCreateNestedManyWithoutUserInput
    favorit?: FavoritCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresUncheckedCreateNestedManyWithoutUserInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUpdateManyWithoutUserNestedInput
    favorit?: FavoritUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUncheckedUpdateManyWithoutUserNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriCreateInput = {
    id?: string
    nama: string
    icon?: string | null
    createdAt?: Date | string
    cerita?: CeritaCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: string
    nama: string
    icon?: string | null
    createdAt?: Date | string
    cerita?: CeritaUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: string
    nama: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type KategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeritaCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaCreateManyInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
  }

  export type CeritaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeritaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
  }

  export type SceneCreateInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutScenesInput
  }

  export type SceneUncheckedCreateInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    ceritaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutScenesNestedInput
  }

  export type SceneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateManyInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    ceritaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    createdAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutQuizzesInput
    pilihan?: PilihanJawabanCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    ceritaId: string
    createdAt?: Date | string
    pilihan?: PilihanJawabanUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutQuizzesNestedInput
    pilihan?: PilihanJawabanUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilihan?: PilihanJawabanUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    ceritaId: string
    createdAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanCreateInput = {
    id?: string
    teks: string
    isBenar?: boolean
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutPilihanInput
  }

  export type PilihanJawabanUncheckedCreateInput = {
    id?: string
    teks: string
    isBenar?: boolean
    quizId: string
    createdAt?: Date | string
  }

  export type PilihanJawabanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutPilihanNestedInput
  }

  export type PilihanJawabanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    quizId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanCreateManyInput = {
    id?: string
    teks: string
    isBenar?: boolean
    quizId: string
    createdAt?: Date | string
  }

  export type PilihanJawabanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    quizId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizCreateInput = {
    id?: string
    skor: number
    totalSoal: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHasilQuizInput
    cerita: CeritaCreateNestedOneWithoutHasilQuizInput
  }

  export type HasilQuizUncheckedCreateInput = {
    id?: string
    skor: number
    totalSoal: number
    userId: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type HasilQuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHasilQuizNestedInput
    cerita?: CeritaUpdateOneRequiredWithoutHasilQuizNestedInput
  }

  export type HasilQuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizCreateManyInput = {
    id?: string
    skor: number
    totalSoal: number
    userId: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type HasilQuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresCreateInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgresInput
    cerita: CeritaCreateNestedOneWithoutProgresInput
  }

  export type ProgresUncheckedCreateInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    userId: string
    ceritaId: string
    updatedAt?: Date | string
  }

  export type ProgresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgresNestedInput
    cerita?: CeritaUpdateOneRequiredWithoutProgresNestedInput
  }

  export type ProgresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresCreateManyInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    userId: string
    ceritaId: string
    updatedAt?: Date | string
  }

  export type ProgresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritInput
    cerita: CeritaCreateNestedOneWithoutFavoritInput
  }

  export type FavoritUncheckedCreateInput = {
    id?: string
    userId: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type FavoritUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritNestedInput
    cerita?: CeritaUpdateOneRequiredWithoutFavoritNestedInput
  }

  export type FavoritUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritCreateManyInput = {
    id?: string
    userId: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type FavoritUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProgresListRelationFilter = {
    every?: ProgresWhereInput
    some?: ProgresWhereInput
    none?: ProgresWhereInput
  }

  export type FavoritListRelationFilter = {
    every?: FavoritWhereInput
    some?: FavoritWhereInput
    none?: FavoritWhereInput
  }

  export type HasilQuizListRelationFilter = {
    every?: HasilQuizWhereInput
    some?: HasilQuizWhereInput
    none?: HasilQuizWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HasilQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CeritaListRelationFilter = {
    every?: CeritaWhereInput
    some?: CeritaWhereInput
    none?: CeritaWhereInput
  }

  export type CeritaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusCeritaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCerita | EnumStatusCeritaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCeritaFilter<$PrismaModel> | $Enums.StatusCerita
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KategoriRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type SceneListRelationFilter = {
    every?: SceneWhereInput
    some?: SceneWhereInput
    none?: SceneWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type SceneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CeritaCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategoriId?: SortOrder
  }

  export type CeritaAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type CeritaMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategoriId?: SortOrder
  }

  export type CeritaMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategoriId?: SortOrder
  }

  export type CeritaSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type EnumStatusCeritaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCerita | EnumStatusCeritaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCeritaWithAggregatesFilter<$PrismaModel> | $Enums.StatusCerita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCeritaFilter<$PrismaModel>
    _max?: NestedEnumStatusCeritaFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CeritaRelationFilter = {
    is?: CeritaWhereInput
    isNot?: CeritaWhereInput
  }

  export type SceneCeritaIdUrutanCompoundUniqueInput = {
    ceritaId: string
    urutan: number
  }

  export type SceneCountOrderByAggregateInput = {
    id?: SortOrder
    urutan?: SortOrder
    gambar?: SortOrder
    teks?: SortOrder
    audio?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type SceneMaxOrderByAggregateInput = {
    id?: SortOrder
    urutan?: SortOrder
    gambar?: SortOrder
    teks?: SortOrder
    audio?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneMinOrderByAggregateInput = {
    id?: SortOrder
    urutan?: SortOrder
    gambar?: SortOrder
    teks?: SortOrder
    audio?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SceneSumOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type PilihanJawabanListRelationFilter = {
    every?: PilihanJawabanWhereInput
    some?: PilihanJawabanWhereInput
    none?: PilihanJawabanWhereInput
  }

  export type PilihanJawabanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    urutan?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    urutan?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    pertanyaan?: SortOrder
    urutan?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    urutan?: SortOrder
  }

  export type QuizRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type PilihanJawabanCountOrderByAggregateInput = {
    id?: SortOrder
    teks?: SortOrder
    isBenar?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
  }

  export type PilihanJawabanMaxOrderByAggregateInput = {
    id?: SortOrder
    teks?: SortOrder
    isBenar?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
  }

  export type PilihanJawabanMinOrderByAggregateInput = {
    id?: SortOrder
    teks?: SortOrder
    isBenar?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HasilQuizCountOrderByAggregateInput = {
    id?: SortOrder
    skor?: SortOrder
    totalSoal?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type HasilQuizAvgOrderByAggregateInput = {
    skor?: SortOrder
    totalSoal?: SortOrder
  }

  export type HasilQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    skor?: SortOrder
    totalSoal?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type HasilQuizMinOrderByAggregateInput = {
    id?: SortOrder
    skor?: SortOrder
    totalSoal?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type HasilQuizSumOrderByAggregateInput = {
    skor?: SortOrder
    totalSoal?: SortOrder
  }

  export type ProgresUserIdCeritaIdCompoundUniqueInput = {
    userId: string
    ceritaId: string
  }

  export type ProgresCountOrderByAggregateInput = {
    id?: SortOrder
    lastScene?: SortOrder
    isSelesai?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresAvgOrderByAggregateInput = {
    lastScene?: SortOrder
  }

  export type ProgresMaxOrderByAggregateInput = {
    id?: SortOrder
    lastScene?: SortOrder
    isSelesai?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresMinOrderByAggregateInput = {
    id?: SortOrder
    lastScene?: SortOrder
    isSelesai?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresSumOrderByAggregateInput = {
    lastScene?: SortOrder
  }

  export type FavoritUserIdCeritaIdCompoundUniqueInput = {
    userId: string
    ceritaId: string
  }

  export type FavoritCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ceritaId?: SortOrder
    createdAt?: SortOrder
  }

  export type AppSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgresCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput> | ProgresCreateWithoutUserInput[] | ProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutUserInput | ProgresCreateOrConnectWithoutUserInput[]
    createMany?: ProgresCreateManyUserInputEnvelope
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
  }

  export type FavoritCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput> | FavoritCreateWithoutUserInput[] | FavoritUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutUserInput | FavoritCreateOrConnectWithoutUserInput[]
    createMany?: FavoritCreateManyUserInputEnvelope
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
  }

  export type HasilQuizCreateNestedManyWithoutUserInput = {
    create?: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput> | HasilQuizCreateWithoutUserInput[] | HasilQuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutUserInput | HasilQuizCreateOrConnectWithoutUserInput[]
    createMany?: HasilQuizCreateManyUserInputEnvelope
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
  }

  export type ProgresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput> | ProgresCreateWithoutUserInput[] | ProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutUserInput | ProgresCreateOrConnectWithoutUserInput[]
    createMany?: ProgresCreateManyUserInputEnvelope
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
  }

  export type FavoritUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput> | FavoritCreateWithoutUserInput[] | FavoritUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutUserInput | FavoritCreateOrConnectWithoutUserInput[]
    createMany?: FavoritCreateManyUserInputEnvelope
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
  }

  export type HasilQuizUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput> | HasilQuizCreateWithoutUserInput[] | HasilQuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutUserInput | HasilQuizCreateOrConnectWithoutUserInput[]
    createMany?: HasilQuizCreateManyUserInputEnvelope
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProgresUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput> | ProgresCreateWithoutUserInput[] | ProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutUserInput | ProgresCreateOrConnectWithoutUserInput[]
    upsert?: ProgresUpsertWithWhereUniqueWithoutUserInput | ProgresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgresCreateManyUserInputEnvelope
    set?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    disconnect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    delete?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    update?: ProgresUpdateWithWhereUniqueWithoutUserInput | ProgresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgresUpdateManyWithWhereWithoutUserInput | ProgresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
  }

  export type FavoritUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput> | FavoritCreateWithoutUserInput[] | FavoritUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutUserInput | FavoritCreateOrConnectWithoutUserInput[]
    upsert?: FavoritUpsertWithWhereUniqueWithoutUserInput | FavoritUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritCreateManyUserInputEnvelope
    set?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    disconnect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    delete?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    update?: FavoritUpdateWithWhereUniqueWithoutUserInput | FavoritUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritUpdateManyWithWhereWithoutUserInput | FavoritUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
  }

  export type HasilQuizUpdateManyWithoutUserNestedInput = {
    create?: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput> | HasilQuizCreateWithoutUserInput[] | HasilQuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutUserInput | HasilQuizCreateOrConnectWithoutUserInput[]
    upsert?: HasilQuizUpsertWithWhereUniqueWithoutUserInput | HasilQuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HasilQuizCreateManyUserInputEnvelope
    set?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    disconnect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    delete?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    update?: HasilQuizUpdateWithWhereUniqueWithoutUserInput | HasilQuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HasilQuizUpdateManyWithWhereWithoutUserInput | HasilQuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
  }

  export type ProgresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput> | ProgresCreateWithoutUserInput[] | ProgresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutUserInput | ProgresCreateOrConnectWithoutUserInput[]
    upsert?: ProgresUpsertWithWhereUniqueWithoutUserInput | ProgresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgresCreateManyUserInputEnvelope
    set?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    disconnect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    delete?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    update?: ProgresUpdateWithWhereUniqueWithoutUserInput | ProgresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgresUpdateManyWithWhereWithoutUserInput | ProgresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
  }

  export type FavoritUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput> | FavoritCreateWithoutUserInput[] | FavoritUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutUserInput | FavoritCreateOrConnectWithoutUserInput[]
    upsert?: FavoritUpsertWithWhereUniqueWithoutUserInput | FavoritUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritCreateManyUserInputEnvelope
    set?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    disconnect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    delete?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    update?: FavoritUpdateWithWhereUniqueWithoutUserInput | FavoritUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritUpdateManyWithWhereWithoutUserInput | FavoritUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
  }

  export type HasilQuizUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput> | HasilQuizCreateWithoutUserInput[] | HasilQuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutUserInput | HasilQuizCreateOrConnectWithoutUserInput[]
    upsert?: HasilQuizUpsertWithWhereUniqueWithoutUserInput | HasilQuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HasilQuizCreateManyUserInputEnvelope
    set?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    disconnect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    delete?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    update?: HasilQuizUpdateWithWhereUniqueWithoutUserInput | HasilQuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HasilQuizUpdateManyWithWhereWithoutUserInput | HasilQuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
  }

  export type CeritaCreateNestedManyWithoutKategoriInput = {
    create?: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput> | CeritaCreateWithoutKategoriInput[] | CeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: CeritaCreateOrConnectWithoutKategoriInput | CeritaCreateOrConnectWithoutKategoriInput[]
    createMany?: CeritaCreateManyKategoriInputEnvelope
    connect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
  }

  export type CeritaUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput> | CeritaCreateWithoutKategoriInput[] | CeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: CeritaCreateOrConnectWithoutKategoriInput | CeritaCreateOrConnectWithoutKategoriInput[]
    createMany?: CeritaCreateManyKategoriInputEnvelope
    connect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
  }

  export type CeritaUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput> | CeritaCreateWithoutKategoriInput[] | CeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: CeritaCreateOrConnectWithoutKategoriInput | CeritaCreateOrConnectWithoutKategoriInput[]
    upsert?: CeritaUpsertWithWhereUniqueWithoutKategoriInput | CeritaUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: CeritaCreateManyKategoriInputEnvelope
    set?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    disconnect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    delete?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    connect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    update?: CeritaUpdateWithWhereUniqueWithoutKategoriInput | CeritaUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: CeritaUpdateManyWithWhereWithoutKategoriInput | CeritaUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: CeritaScalarWhereInput | CeritaScalarWhereInput[]
  }

  export type CeritaUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput> | CeritaCreateWithoutKategoriInput[] | CeritaUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: CeritaCreateOrConnectWithoutKategoriInput | CeritaCreateOrConnectWithoutKategoriInput[]
    upsert?: CeritaUpsertWithWhereUniqueWithoutKategoriInput | CeritaUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: CeritaCreateManyKategoriInputEnvelope
    set?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    disconnect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    delete?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    connect?: CeritaWhereUniqueInput | CeritaWhereUniqueInput[]
    update?: CeritaUpdateWithWhereUniqueWithoutKategoriInput | CeritaUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: CeritaUpdateManyWithWhereWithoutKategoriInput | CeritaUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: CeritaScalarWhereInput | CeritaScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutCeritaInput = {
    create?: XOR<KategoriCreateWithoutCeritaInput, KategoriUncheckedCreateWithoutCeritaInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutCeritaInput
    connect?: KategoriWhereUniqueInput
  }

  export type SceneCreateNestedManyWithoutCeritaInput = {
    create?: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput> | SceneCreateWithoutCeritaInput[] | SceneUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCeritaInput | SceneCreateOrConnectWithoutCeritaInput[]
    createMany?: SceneCreateManyCeritaInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutCeritaInput = {
    create?: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput> | QuizCreateWithoutCeritaInput[] | QuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCeritaInput | QuizCreateOrConnectWithoutCeritaInput[]
    createMany?: QuizCreateManyCeritaInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ProgresCreateNestedManyWithoutCeritaInput = {
    create?: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput> | ProgresCreateWithoutCeritaInput[] | ProgresUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutCeritaInput | ProgresCreateOrConnectWithoutCeritaInput[]
    createMany?: ProgresCreateManyCeritaInputEnvelope
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
  }

  export type FavoritCreateNestedManyWithoutCeritaInput = {
    create?: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput> | FavoritCreateWithoutCeritaInput[] | FavoritUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutCeritaInput | FavoritCreateOrConnectWithoutCeritaInput[]
    createMany?: FavoritCreateManyCeritaInputEnvelope
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
  }

  export type HasilQuizCreateNestedManyWithoutCeritaInput = {
    create?: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput> | HasilQuizCreateWithoutCeritaInput[] | HasilQuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutCeritaInput | HasilQuizCreateOrConnectWithoutCeritaInput[]
    createMany?: HasilQuizCreateManyCeritaInputEnvelope
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutCeritaInput = {
    create?: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput> | SceneCreateWithoutCeritaInput[] | SceneUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCeritaInput | SceneCreateOrConnectWithoutCeritaInput[]
    createMany?: SceneCreateManyCeritaInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCeritaInput = {
    create?: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput> | QuizCreateWithoutCeritaInput[] | QuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCeritaInput | QuizCreateOrConnectWithoutCeritaInput[]
    createMany?: QuizCreateManyCeritaInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type ProgresUncheckedCreateNestedManyWithoutCeritaInput = {
    create?: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput> | ProgresCreateWithoutCeritaInput[] | ProgresUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutCeritaInput | ProgresCreateOrConnectWithoutCeritaInput[]
    createMany?: ProgresCreateManyCeritaInputEnvelope
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
  }

  export type FavoritUncheckedCreateNestedManyWithoutCeritaInput = {
    create?: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput> | FavoritCreateWithoutCeritaInput[] | FavoritUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutCeritaInput | FavoritCreateOrConnectWithoutCeritaInput[]
    createMany?: FavoritCreateManyCeritaInputEnvelope
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
  }

  export type HasilQuizUncheckedCreateNestedManyWithoutCeritaInput = {
    create?: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput> | HasilQuizCreateWithoutCeritaInput[] | HasilQuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutCeritaInput | HasilQuizCreateOrConnectWithoutCeritaInput[]
    createMany?: HasilQuizCreateManyCeritaInputEnvelope
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
  }

  export type EnumStatusCeritaFieldUpdateOperationsInput = {
    set?: $Enums.StatusCerita
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KategoriUpdateOneRequiredWithoutCeritaNestedInput = {
    create?: XOR<KategoriCreateWithoutCeritaInput, KategoriUncheckedCreateWithoutCeritaInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutCeritaInput
    upsert?: KategoriUpsertWithoutCeritaInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutCeritaInput, KategoriUpdateWithoutCeritaInput>, KategoriUncheckedUpdateWithoutCeritaInput>
  }

  export type SceneUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput> | SceneCreateWithoutCeritaInput[] | SceneUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCeritaInput | SceneCreateOrConnectWithoutCeritaInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutCeritaInput | SceneUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: SceneCreateManyCeritaInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutCeritaInput | SceneUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutCeritaInput | SceneUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput> | QuizCreateWithoutCeritaInput[] | QuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCeritaInput | QuizCreateOrConnectWithoutCeritaInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCeritaInput | QuizUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: QuizCreateManyCeritaInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCeritaInput | QuizUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCeritaInput | QuizUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ProgresUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput> | ProgresCreateWithoutCeritaInput[] | ProgresUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutCeritaInput | ProgresCreateOrConnectWithoutCeritaInput[]
    upsert?: ProgresUpsertWithWhereUniqueWithoutCeritaInput | ProgresUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: ProgresCreateManyCeritaInputEnvelope
    set?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    disconnect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    delete?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    update?: ProgresUpdateWithWhereUniqueWithoutCeritaInput | ProgresUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: ProgresUpdateManyWithWhereWithoutCeritaInput | ProgresUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
  }

  export type FavoritUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput> | FavoritCreateWithoutCeritaInput[] | FavoritUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutCeritaInput | FavoritCreateOrConnectWithoutCeritaInput[]
    upsert?: FavoritUpsertWithWhereUniqueWithoutCeritaInput | FavoritUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: FavoritCreateManyCeritaInputEnvelope
    set?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    disconnect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    delete?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    update?: FavoritUpdateWithWhereUniqueWithoutCeritaInput | FavoritUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: FavoritUpdateManyWithWhereWithoutCeritaInput | FavoritUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
  }

  export type HasilQuizUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput> | HasilQuizCreateWithoutCeritaInput[] | HasilQuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutCeritaInput | HasilQuizCreateOrConnectWithoutCeritaInput[]
    upsert?: HasilQuizUpsertWithWhereUniqueWithoutCeritaInput | HasilQuizUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: HasilQuizCreateManyCeritaInputEnvelope
    set?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    disconnect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    delete?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    update?: HasilQuizUpdateWithWhereUniqueWithoutCeritaInput | HasilQuizUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: HasilQuizUpdateManyWithWhereWithoutCeritaInput | HasilQuizUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput> | SceneCreateWithoutCeritaInput[] | SceneUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutCeritaInput | SceneCreateOrConnectWithoutCeritaInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutCeritaInput | SceneUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: SceneCreateManyCeritaInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutCeritaInput | SceneUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutCeritaInput | SceneUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput> | QuizCreateWithoutCeritaInput[] | QuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCeritaInput | QuizCreateOrConnectWithoutCeritaInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCeritaInput | QuizUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: QuizCreateManyCeritaInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCeritaInput | QuizUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCeritaInput | QuizUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ProgresUncheckedUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput> | ProgresCreateWithoutCeritaInput[] | ProgresUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: ProgresCreateOrConnectWithoutCeritaInput | ProgresCreateOrConnectWithoutCeritaInput[]
    upsert?: ProgresUpsertWithWhereUniqueWithoutCeritaInput | ProgresUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: ProgresCreateManyCeritaInputEnvelope
    set?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    disconnect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    delete?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    connect?: ProgresWhereUniqueInput | ProgresWhereUniqueInput[]
    update?: ProgresUpdateWithWhereUniqueWithoutCeritaInput | ProgresUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: ProgresUpdateManyWithWhereWithoutCeritaInput | ProgresUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
  }

  export type FavoritUncheckedUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput> | FavoritCreateWithoutCeritaInput[] | FavoritUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: FavoritCreateOrConnectWithoutCeritaInput | FavoritCreateOrConnectWithoutCeritaInput[]
    upsert?: FavoritUpsertWithWhereUniqueWithoutCeritaInput | FavoritUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: FavoritCreateManyCeritaInputEnvelope
    set?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    disconnect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    delete?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    connect?: FavoritWhereUniqueInput | FavoritWhereUniqueInput[]
    update?: FavoritUpdateWithWhereUniqueWithoutCeritaInput | FavoritUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: FavoritUpdateManyWithWhereWithoutCeritaInput | FavoritUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
  }

  export type HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput = {
    create?: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput> | HasilQuizCreateWithoutCeritaInput[] | HasilQuizUncheckedCreateWithoutCeritaInput[]
    connectOrCreate?: HasilQuizCreateOrConnectWithoutCeritaInput | HasilQuizCreateOrConnectWithoutCeritaInput[]
    upsert?: HasilQuizUpsertWithWhereUniqueWithoutCeritaInput | HasilQuizUpsertWithWhereUniqueWithoutCeritaInput[]
    createMany?: HasilQuizCreateManyCeritaInputEnvelope
    set?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    disconnect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    delete?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    connect?: HasilQuizWhereUniqueInput | HasilQuizWhereUniqueInput[]
    update?: HasilQuizUpdateWithWhereUniqueWithoutCeritaInput | HasilQuizUpdateWithWhereUniqueWithoutCeritaInput[]
    updateMany?: HasilQuizUpdateManyWithWhereWithoutCeritaInput | HasilQuizUpdateManyWithWhereWithoutCeritaInput[]
    deleteMany?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
  }

  export type CeritaCreateNestedOneWithoutScenesInput = {
    create?: XOR<CeritaCreateWithoutScenesInput, CeritaUncheckedCreateWithoutScenesInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutScenesInput
    connect?: CeritaWhereUniqueInput
  }

  export type CeritaUpdateOneRequiredWithoutScenesNestedInput = {
    create?: XOR<CeritaCreateWithoutScenesInput, CeritaUncheckedCreateWithoutScenesInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutScenesInput
    upsert?: CeritaUpsertWithoutScenesInput
    connect?: CeritaWhereUniqueInput
    update?: XOR<XOR<CeritaUpdateToOneWithWhereWithoutScenesInput, CeritaUpdateWithoutScenesInput>, CeritaUncheckedUpdateWithoutScenesInput>
  }

  export type CeritaCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<CeritaCreateWithoutQuizzesInput, CeritaUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutQuizzesInput
    connect?: CeritaWhereUniqueInput
  }

  export type PilihanJawabanCreateNestedManyWithoutQuizInput = {
    create?: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput> | PilihanJawabanCreateWithoutQuizInput[] | PilihanJawabanUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PilihanJawabanCreateOrConnectWithoutQuizInput | PilihanJawabanCreateOrConnectWithoutQuizInput[]
    createMany?: PilihanJawabanCreateManyQuizInputEnvelope
    connect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
  }

  export type PilihanJawabanUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput> | PilihanJawabanCreateWithoutQuizInput[] | PilihanJawabanUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PilihanJawabanCreateOrConnectWithoutQuizInput | PilihanJawabanCreateOrConnectWithoutQuizInput[]
    createMany?: PilihanJawabanCreateManyQuizInputEnvelope
    connect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
  }

  export type CeritaUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<CeritaCreateWithoutQuizzesInput, CeritaUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutQuizzesInput
    upsert?: CeritaUpsertWithoutQuizzesInput
    connect?: CeritaWhereUniqueInput
    update?: XOR<XOR<CeritaUpdateToOneWithWhereWithoutQuizzesInput, CeritaUpdateWithoutQuizzesInput>, CeritaUncheckedUpdateWithoutQuizzesInput>
  }

  export type PilihanJawabanUpdateManyWithoutQuizNestedInput = {
    create?: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput> | PilihanJawabanCreateWithoutQuizInput[] | PilihanJawabanUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PilihanJawabanCreateOrConnectWithoutQuizInput | PilihanJawabanCreateOrConnectWithoutQuizInput[]
    upsert?: PilihanJawabanUpsertWithWhereUniqueWithoutQuizInput | PilihanJawabanUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: PilihanJawabanCreateManyQuizInputEnvelope
    set?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    disconnect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    delete?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    connect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    update?: PilihanJawabanUpdateWithWhereUniqueWithoutQuizInput | PilihanJawabanUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: PilihanJawabanUpdateManyWithWhereWithoutQuizInput | PilihanJawabanUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: PilihanJawabanScalarWhereInput | PilihanJawabanScalarWhereInput[]
  }

  export type PilihanJawabanUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput> | PilihanJawabanCreateWithoutQuizInput[] | PilihanJawabanUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: PilihanJawabanCreateOrConnectWithoutQuizInput | PilihanJawabanCreateOrConnectWithoutQuizInput[]
    upsert?: PilihanJawabanUpsertWithWhereUniqueWithoutQuizInput | PilihanJawabanUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: PilihanJawabanCreateManyQuizInputEnvelope
    set?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    disconnect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    delete?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    connect?: PilihanJawabanWhereUniqueInput | PilihanJawabanWhereUniqueInput[]
    update?: PilihanJawabanUpdateWithWhereUniqueWithoutQuizInput | PilihanJawabanUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: PilihanJawabanUpdateManyWithWhereWithoutQuizInput | PilihanJawabanUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: PilihanJawabanScalarWhereInput | PilihanJawabanScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutPilihanInput = {
    create?: XOR<QuizCreateWithoutPilihanInput, QuizUncheckedCreateWithoutPilihanInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPilihanInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizUpdateOneRequiredWithoutPilihanNestedInput = {
    create?: XOR<QuizCreateWithoutPilihanInput, QuizUncheckedCreateWithoutPilihanInput>
    connectOrCreate?: QuizCreateOrConnectWithoutPilihanInput
    upsert?: QuizUpsertWithoutPilihanInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutPilihanInput, QuizUpdateWithoutPilihanInput>, QuizUncheckedUpdateWithoutPilihanInput>
  }

  export type UserCreateNestedOneWithoutHasilQuizInput = {
    create?: XOR<UserCreateWithoutHasilQuizInput, UserUncheckedCreateWithoutHasilQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutHasilQuizInput
    connect?: UserWhereUniqueInput
  }

  export type CeritaCreateNestedOneWithoutHasilQuizInput = {
    create?: XOR<CeritaCreateWithoutHasilQuizInput, CeritaUncheckedCreateWithoutHasilQuizInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutHasilQuizInput
    connect?: CeritaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHasilQuizNestedInput = {
    create?: XOR<UserCreateWithoutHasilQuizInput, UserUncheckedCreateWithoutHasilQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutHasilQuizInput
    upsert?: UserUpsertWithoutHasilQuizInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHasilQuizInput, UserUpdateWithoutHasilQuizInput>, UserUncheckedUpdateWithoutHasilQuizInput>
  }

  export type CeritaUpdateOneRequiredWithoutHasilQuizNestedInput = {
    create?: XOR<CeritaCreateWithoutHasilQuizInput, CeritaUncheckedCreateWithoutHasilQuizInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutHasilQuizInput
    upsert?: CeritaUpsertWithoutHasilQuizInput
    connect?: CeritaWhereUniqueInput
    update?: XOR<XOR<CeritaUpdateToOneWithWhereWithoutHasilQuizInput, CeritaUpdateWithoutHasilQuizInput>, CeritaUncheckedUpdateWithoutHasilQuizInput>
  }

  export type UserCreateNestedOneWithoutProgresInput = {
    create?: XOR<UserCreateWithoutProgresInput, UserUncheckedCreateWithoutProgresInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgresInput
    connect?: UserWhereUniqueInput
  }

  export type CeritaCreateNestedOneWithoutProgresInput = {
    create?: XOR<CeritaCreateWithoutProgresInput, CeritaUncheckedCreateWithoutProgresInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutProgresInput
    connect?: CeritaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgresNestedInput = {
    create?: XOR<UserCreateWithoutProgresInput, UserUncheckedCreateWithoutProgresInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgresInput
    upsert?: UserUpsertWithoutProgresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgresInput, UserUpdateWithoutProgresInput>, UserUncheckedUpdateWithoutProgresInput>
  }

  export type CeritaUpdateOneRequiredWithoutProgresNestedInput = {
    create?: XOR<CeritaCreateWithoutProgresInput, CeritaUncheckedCreateWithoutProgresInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutProgresInput
    upsert?: CeritaUpsertWithoutProgresInput
    connect?: CeritaWhereUniqueInput
    update?: XOR<XOR<CeritaUpdateToOneWithWhereWithoutProgresInput, CeritaUpdateWithoutProgresInput>, CeritaUncheckedUpdateWithoutProgresInput>
  }

  export type UserCreateNestedOneWithoutFavoritInput = {
    create?: XOR<UserCreateWithoutFavoritInput, UserUncheckedCreateWithoutFavoritInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritInput
    connect?: UserWhereUniqueInput
  }

  export type CeritaCreateNestedOneWithoutFavoritInput = {
    create?: XOR<CeritaCreateWithoutFavoritInput, CeritaUncheckedCreateWithoutFavoritInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutFavoritInput
    connect?: CeritaWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritNestedInput = {
    create?: XOR<UserCreateWithoutFavoritInput, UserUncheckedCreateWithoutFavoritInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritInput
    upsert?: UserUpsertWithoutFavoritInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritInput, UserUpdateWithoutFavoritInput>, UserUncheckedUpdateWithoutFavoritInput>
  }

  export type CeritaUpdateOneRequiredWithoutFavoritNestedInput = {
    create?: XOR<CeritaCreateWithoutFavoritInput, CeritaUncheckedCreateWithoutFavoritInput>
    connectOrCreate?: CeritaCreateOrConnectWithoutFavoritInput
    upsert?: CeritaUpsertWithoutFavoritInput
    connect?: CeritaWhereUniqueInput
    update?: XOR<XOR<CeritaUpdateToOneWithWhereWithoutFavoritInput, CeritaUpdateWithoutFavoritInput>, CeritaUncheckedUpdateWithoutFavoritInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatusCeritaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCerita | EnumStatusCeritaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCeritaFilter<$PrismaModel> | $Enums.StatusCerita
  }

  export type NestedEnumStatusCeritaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusCerita | EnumStatusCeritaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusCerita[] | ListEnumStatusCeritaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusCeritaWithAggregatesFilter<$PrismaModel> | $Enums.StatusCerita
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusCeritaFilter<$PrismaModel>
    _max?: NestedEnumStatusCeritaFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProgresCreateWithoutUserInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    updatedAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutProgresInput
  }

  export type ProgresUncheckedCreateWithoutUserInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    ceritaId: string
    updatedAt?: Date | string
  }

  export type ProgresCreateOrConnectWithoutUserInput = {
    where: ProgresWhereUniqueInput
    create: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput>
  }

  export type ProgresCreateManyUserInputEnvelope = {
    data: ProgresCreateManyUserInput | ProgresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoritCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutFavoritInput
  }

  export type FavoritUncheckedCreateWithoutUserInput = {
    id?: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type FavoritCreateOrConnectWithoutUserInput = {
    where: FavoritWhereUniqueInput
    create: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput>
  }

  export type FavoritCreateManyUserInputEnvelope = {
    data: FavoritCreateManyUserInput | FavoritCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HasilQuizCreateWithoutUserInput = {
    id?: string
    skor: number
    totalSoal: number
    createdAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutHasilQuizInput
  }

  export type HasilQuizUncheckedCreateWithoutUserInput = {
    id?: string
    skor: number
    totalSoal: number
    ceritaId: string
    createdAt?: Date | string
  }

  export type HasilQuizCreateOrConnectWithoutUserInput = {
    where: HasilQuizWhereUniqueInput
    create: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput>
  }

  export type HasilQuizCreateManyUserInputEnvelope = {
    data: HasilQuizCreateManyUserInput | HasilQuizCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgresUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgresWhereUniqueInput
    update: XOR<ProgresUpdateWithoutUserInput, ProgresUncheckedUpdateWithoutUserInput>
    create: XOR<ProgresCreateWithoutUserInput, ProgresUncheckedCreateWithoutUserInput>
  }

  export type ProgresUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgresWhereUniqueInput
    data: XOR<ProgresUpdateWithoutUserInput, ProgresUncheckedUpdateWithoutUserInput>
  }

  export type ProgresUpdateManyWithWhereWithoutUserInput = {
    where: ProgresScalarWhereInput
    data: XOR<ProgresUpdateManyMutationInput, ProgresUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgresScalarWhereInput = {
    AND?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
    OR?: ProgresScalarWhereInput[]
    NOT?: ProgresScalarWhereInput | ProgresScalarWhereInput[]
    id?: StringFilter<"Progres"> | string
    lastScene?: IntFilter<"Progres"> | number
    isSelesai?: BoolFilter<"Progres"> | boolean
    userId?: StringFilter<"Progres"> | string
    ceritaId?: StringFilter<"Progres"> | string
    updatedAt?: DateTimeFilter<"Progres"> | Date | string
  }

  export type FavoritUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritWhereUniqueInput
    update: XOR<FavoritUpdateWithoutUserInput, FavoritUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritCreateWithoutUserInput, FavoritUncheckedCreateWithoutUserInput>
  }

  export type FavoritUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritWhereUniqueInput
    data: XOR<FavoritUpdateWithoutUserInput, FavoritUncheckedUpdateWithoutUserInput>
  }

  export type FavoritUpdateManyWithWhereWithoutUserInput = {
    where: FavoritScalarWhereInput
    data: XOR<FavoritUpdateManyMutationInput, FavoritUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritScalarWhereInput = {
    AND?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
    OR?: FavoritScalarWhereInput[]
    NOT?: FavoritScalarWhereInput | FavoritScalarWhereInput[]
    id?: StringFilter<"Favorit"> | string
    userId?: StringFilter<"Favorit"> | string
    ceritaId?: StringFilter<"Favorit"> | string
    createdAt?: DateTimeFilter<"Favorit"> | Date | string
  }

  export type HasilQuizUpsertWithWhereUniqueWithoutUserInput = {
    where: HasilQuizWhereUniqueInput
    update: XOR<HasilQuizUpdateWithoutUserInput, HasilQuizUncheckedUpdateWithoutUserInput>
    create: XOR<HasilQuizCreateWithoutUserInput, HasilQuizUncheckedCreateWithoutUserInput>
  }

  export type HasilQuizUpdateWithWhereUniqueWithoutUserInput = {
    where: HasilQuizWhereUniqueInput
    data: XOR<HasilQuizUpdateWithoutUserInput, HasilQuizUncheckedUpdateWithoutUserInput>
  }

  export type HasilQuizUpdateManyWithWhereWithoutUserInput = {
    where: HasilQuizScalarWhereInput
    data: XOR<HasilQuizUpdateManyMutationInput, HasilQuizUncheckedUpdateManyWithoutUserInput>
  }

  export type HasilQuizScalarWhereInput = {
    AND?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
    OR?: HasilQuizScalarWhereInput[]
    NOT?: HasilQuizScalarWhereInput | HasilQuizScalarWhereInput[]
    id?: StringFilter<"HasilQuiz"> | string
    skor?: IntFilter<"HasilQuiz"> | number
    totalSoal?: IntFilter<"HasilQuiz"> | number
    userId?: StringFilter<"HasilQuiz"> | string
    ceritaId?: StringFilter<"HasilQuiz"> | string
    createdAt?: DateTimeFilter<"HasilQuiz"> | Date | string
  }

  export type CeritaCreateWithoutKategoriInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutKategoriInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutKategoriInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput>
  }

  export type CeritaCreateManyKategoriInputEnvelope = {
    data: CeritaCreateManyKategoriInput | CeritaCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type CeritaUpsertWithWhereUniqueWithoutKategoriInput = {
    where: CeritaWhereUniqueInput
    update: XOR<CeritaUpdateWithoutKategoriInput, CeritaUncheckedUpdateWithoutKategoriInput>
    create: XOR<CeritaCreateWithoutKategoriInput, CeritaUncheckedCreateWithoutKategoriInput>
  }

  export type CeritaUpdateWithWhereUniqueWithoutKategoriInput = {
    where: CeritaWhereUniqueInput
    data: XOR<CeritaUpdateWithoutKategoriInput, CeritaUncheckedUpdateWithoutKategoriInput>
  }

  export type CeritaUpdateManyWithWhereWithoutKategoriInput = {
    where: CeritaScalarWhereInput
    data: XOR<CeritaUpdateManyMutationInput, CeritaUncheckedUpdateManyWithoutKategoriInput>
  }

  export type CeritaScalarWhereInput = {
    AND?: CeritaScalarWhereInput | CeritaScalarWhereInput[]
    OR?: CeritaScalarWhereInput[]
    NOT?: CeritaScalarWhereInput | CeritaScalarWhereInput[]
    id?: StringFilter<"Cerita"> | string
    judul?: StringFilter<"Cerita"> | string
    deskripsi?: StringNullableFilter<"Cerita"> | string | null
    thumbnail?: StringNullableFilter<"Cerita"> | string | null
    status?: EnumStatusCeritaFilter<"Cerita"> | $Enums.StatusCerita
    viewCount?: IntFilter<"Cerita"> | number
    createdAt?: DateTimeFilter<"Cerita"> | Date | string
    updatedAt?: DateTimeFilter<"Cerita"> | Date | string
    kategoriId?: StringFilter<"Cerita"> | string
  }

  export type KategoriCreateWithoutCeritaInput = {
    id?: string
    nama: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type KategoriUncheckedCreateWithoutCeritaInput = {
    id?: string
    nama: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type KategoriCreateOrConnectWithoutCeritaInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutCeritaInput, KategoriUncheckedCreateWithoutCeritaInput>
  }

  export type SceneCreateWithoutCeritaInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneUncheckedCreateWithoutCeritaInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SceneCreateOrConnectWithoutCeritaInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput>
  }

  export type SceneCreateManyCeritaInputEnvelope = {
    data: SceneCreateManyCeritaInput | SceneCreateManyCeritaInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutCeritaInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    createdAt?: Date | string
    pilihan?: PilihanJawabanCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCeritaInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    createdAt?: Date | string
    pilihan?: PilihanJawabanUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCeritaInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput>
  }

  export type QuizCreateManyCeritaInputEnvelope = {
    data: QuizCreateManyCeritaInput | QuizCreateManyCeritaInput[]
    skipDuplicates?: boolean
  }

  export type ProgresCreateWithoutCeritaInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgresInput
  }

  export type ProgresUncheckedCreateWithoutCeritaInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    userId: string
    updatedAt?: Date | string
  }

  export type ProgresCreateOrConnectWithoutCeritaInput = {
    where: ProgresWhereUniqueInput
    create: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput>
  }

  export type ProgresCreateManyCeritaInputEnvelope = {
    data: ProgresCreateManyCeritaInput | ProgresCreateManyCeritaInput[]
    skipDuplicates?: boolean
  }

  export type FavoritCreateWithoutCeritaInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritInput
  }

  export type FavoritUncheckedCreateWithoutCeritaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoritCreateOrConnectWithoutCeritaInput = {
    where: FavoritWhereUniqueInput
    create: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput>
  }

  export type FavoritCreateManyCeritaInputEnvelope = {
    data: FavoritCreateManyCeritaInput | FavoritCreateManyCeritaInput[]
    skipDuplicates?: boolean
  }

  export type HasilQuizCreateWithoutCeritaInput = {
    id?: string
    skor: number
    totalSoal: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHasilQuizInput
  }

  export type HasilQuizUncheckedCreateWithoutCeritaInput = {
    id?: string
    skor: number
    totalSoal: number
    userId: string
    createdAt?: Date | string
  }

  export type HasilQuizCreateOrConnectWithoutCeritaInput = {
    where: HasilQuizWhereUniqueInput
    create: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput>
  }

  export type HasilQuizCreateManyCeritaInputEnvelope = {
    data: HasilQuizCreateManyCeritaInput | HasilQuizCreateManyCeritaInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutCeritaInput = {
    update: XOR<KategoriUpdateWithoutCeritaInput, KategoriUncheckedUpdateWithoutCeritaInput>
    create: XOR<KategoriCreateWithoutCeritaInput, KategoriUncheckedCreateWithoutCeritaInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutCeritaInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutCeritaInput, KategoriUncheckedUpdateWithoutCeritaInput>
  }

  export type KategoriUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUpsertWithWhereUniqueWithoutCeritaInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutCeritaInput, SceneUncheckedUpdateWithoutCeritaInput>
    create: XOR<SceneCreateWithoutCeritaInput, SceneUncheckedCreateWithoutCeritaInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutCeritaInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutCeritaInput, SceneUncheckedUpdateWithoutCeritaInput>
  }

  export type SceneUpdateManyWithWhereWithoutCeritaInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutCeritaInput>
  }

  export type SceneScalarWhereInput = {
    AND?: SceneScalarWhereInput | SceneScalarWhereInput[]
    OR?: SceneScalarWhereInput[]
    NOT?: SceneScalarWhereInput | SceneScalarWhereInput[]
    id?: StringFilter<"Scene"> | string
    urutan?: IntFilter<"Scene"> | number
    gambar?: StringNullableFilter<"Scene"> | string | null
    teks?: StringFilter<"Scene"> | string
    audio?: StringNullableFilter<"Scene"> | string | null
    ceritaId?: StringFilter<"Scene"> | string
    createdAt?: DateTimeFilter<"Scene"> | Date | string
    updatedAt?: DateTimeFilter<"Scene"> | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutCeritaInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCeritaInput, QuizUncheckedUpdateWithoutCeritaInput>
    create: XOR<QuizCreateWithoutCeritaInput, QuizUncheckedCreateWithoutCeritaInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCeritaInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCeritaInput, QuizUncheckedUpdateWithoutCeritaInput>
  }

  export type QuizUpdateManyWithWhereWithoutCeritaInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCeritaInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    pertanyaan?: StringFilter<"Quiz"> | string
    urutan?: IntFilter<"Quiz"> | number
    ceritaId?: StringFilter<"Quiz"> | string
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type ProgresUpsertWithWhereUniqueWithoutCeritaInput = {
    where: ProgresWhereUniqueInput
    update: XOR<ProgresUpdateWithoutCeritaInput, ProgresUncheckedUpdateWithoutCeritaInput>
    create: XOR<ProgresCreateWithoutCeritaInput, ProgresUncheckedCreateWithoutCeritaInput>
  }

  export type ProgresUpdateWithWhereUniqueWithoutCeritaInput = {
    where: ProgresWhereUniqueInput
    data: XOR<ProgresUpdateWithoutCeritaInput, ProgresUncheckedUpdateWithoutCeritaInput>
  }

  export type ProgresUpdateManyWithWhereWithoutCeritaInput = {
    where: ProgresScalarWhereInput
    data: XOR<ProgresUpdateManyMutationInput, ProgresUncheckedUpdateManyWithoutCeritaInput>
  }

  export type FavoritUpsertWithWhereUniqueWithoutCeritaInput = {
    where: FavoritWhereUniqueInput
    update: XOR<FavoritUpdateWithoutCeritaInput, FavoritUncheckedUpdateWithoutCeritaInput>
    create: XOR<FavoritCreateWithoutCeritaInput, FavoritUncheckedCreateWithoutCeritaInput>
  }

  export type FavoritUpdateWithWhereUniqueWithoutCeritaInput = {
    where: FavoritWhereUniqueInput
    data: XOR<FavoritUpdateWithoutCeritaInput, FavoritUncheckedUpdateWithoutCeritaInput>
  }

  export type FavoritUpdateManyWithWhereWithoutCeritaInput = {
    where: FavoritScalarWhereInput
    data: XOR<FavoritUpdateManyMutationInput, FavoritUncheckedUpdateManyWithoutCeritaInput>
  }

  export type HasilQuizUpsertWithWhereUniqueWithoutCeritaInput = {
    where: HasilQuizWhereUniqueInput
    update: XOR<HasilQuizUpdateWithoutCeritaInput, HasilQuizUncheckedUpdateWithoutCeritaInput>
    create: XOR<HasilQuizCreateWithoutCeritaInput, HasilQuizUncheckedCreateWithoutCeritaInput>
  }

  export type HasilQuizUpdateWithWhereUniqueWithoutCeritaInput = {
    where: HasilQuizWhereUniqueInput
    data: XOR<HasilQuizUpdateWithoutCeritaInput, HasilQuizUncheckedUpdateWithoutCeritaInput>
  }

  export type HasilQuizUpdateManyWithWhereWithoutCeritaInput = {
    where: HasilQuizScalarWhereInput
    data: XOR<HasilQuizUpdateManyMutationInput, HasilQuizUncheckedUpdateManyWithoutCeritaInput>
  }

  export type CeritaCreateWithoutScenesInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutScenesInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutScenesInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutScenesInput, CeritaUncheckedCreateWithoutScenesInput>
  }

  export type CeritaUpsertWithoutScenesInput = {
    update: XOR<CeritaUpdateWithoutScenesInput, CeritaUncheckedUpdateWithoutScenesInput>
    create: XOR<CeritaCreateWithoutScenesInput, CeritaUncheckedCreateWithoutScenesInput>
    where?: CeritaWhereInput
  }

  export type CeritaUpdateToOneWithWhereWithoutScenesInput = {
    where?: CeritaWhereInput
    data: XOR<CeritaUpdateWithoutScenesInput, CeritaUncheckedUpdateWithoutScenesInput>
  }

  export type CeritaUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutScenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaCreateWithoutQuizzesInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutQuizzesInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutQuizzesInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutQuizzesInput, CeritaUncheckedCreateWithoutQuizzesInput>
  }

  export type PilihanJawabanCreateWithoutQuizInput = {
    id?: string
    teks: string
    isBenar?: boolean
    createdAt?: Date | string
  }

  export type PilihanJawabanUncheckedCreateWithoutQuizInput = {
    id?: string
    teks: string
    isBenar?: boolean
    createdAt?: Date | string
  }

  export type PilihanJawabanCreateOrConnectWithoutQuizInput = {
    where: PilihanJawabanWhereUniqueInput
    create: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput>
  }

  export type PilihanJawabanCreateManyQuizInputEnvelope = {
    data: PilihanJawabanCreateManyQuizInput | PilihanJawabanCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type CeritaUpsertWithoutQuizzesInput = {
    update: XOR<CeritaUpdateWithoutQuizzesInput, CeritaUncheckedUpdateWithoutQuizzesInput>
    create: XOR<CeritaCreateWithoutQuizzesInput, CeritaUncheckedCreateWithoutQuizzesInput>
    where?: CeritaWhereInput
  }

  export type CeritaUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: CeritaWhereInput
    data: XOR<CeritaUpdateWithoutQuizzesInput, CeritaUncheckedUpdateWithoutQuizzesInput>
  }

  export type CeritaUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type PilihanJawabanUpsertWithWhereUniqueWithoutQuizInput = {
    where: PilihanJawabanWhereUniqueInput
    update: XOR<PilihanJawabanUpdateWithoutQuizInput, PilihanJawabanUncheckedUpdateWithoutQuizInput>
    create: XOR<PilihanJawabanCreateWithoutQuizInput, PilihanJawabanUncheckedCreateWithoutQuizInput>
  }

  export type PilihanJawabanUpdateWithWhereUniqueWithoutQuizInput = {
    where: PilihanJawabanWhereUniqueInput
    data: XOR<PilihanJawabanUpdateWithoutQuizInput, PilihanJawabanUncheckedUpdateWithoutQuizInput>
  }

  export type PilihanJawabanUpdateManyWithWhereWithoutQuizInput = {
    where: PilihanJawabanScalarWhereInput
    data: XOR<PilihanJawabanUpdateManyMutationInput, PilihanJawabanUncheckedUpdateManyWithoutQuizInput>
  }

  export type PilihanJawabanScalarWhereInput = {
    AND?: PilihanJawabanScalarWhereInput | PilihanJawabanScalarWhereInput[]
    OR?: PilihanJawabanScalarWhereInput[]
    NOT?: PilihanJawabanScalarWhereInput | PilihanJawabanScalarWhereInput[]
    id?: StringFilter<"PilihanJawaban"> | string
    teks?: StringFilter<"PilihanJawaban"> | string
    isBenar?: BoolFilter<"PilihanJawaban"> | boolean
    quizId?: StringFilter<"PilihanJawaban"> | string
    createdAt?: DateTimeFilter<"PilihanJawaban"> | Date | string
  }

  export type QuizCreateWithoutPilihanInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    createdAt?: Date | string
    cerita: CeritaCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutPilihanInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    ceritaId: string
    createdAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutPilihanInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutPilihanInput, QuizUncheckedCreateWithoutPilihanInput>
  }

  export type QuizUpsertWithoutPilihanInput = {
    update: XOR<QuizUpdateWithoutPilihanInput, QuizUncheckedUpdateWithoutPilihanInput>
    create: XOR<QuizCreateWithoutPilihanInput, QuizUncheckedCreateWithoutPilihanInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutPilihanInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutPilihanInput, QuizUncheckedUpdateWithoutPilihanInput>
  }

  export type QuizUpdateWithoutPilihanInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutPilihanInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHasilQuizInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresCreateNestedManyWithoutUserInput
    favorit?: FavoritCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHasilQuizInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresUncheckedCreateNestedManyWithoutUserInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHasilQuizInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHasilQuizInput, UserUncheckedCreateWithoutHasilQuizInput>
  }

  export type CeritaCreateWithoutHasilQuizInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutHasilQuizInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutHasilQuizInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutHasilQuizInput, CeritaUncheckedCreateWithoutHasilQuizInput>
  }

  export type UserUpsertWithoutHasilQuizInput = {
    update: XOR<UserUpdateWithoutHasilQuizInput, UserUncheckedUpdateWithoutHasilQuizInput>
    create: XOR<UserCreateWithoutHasilQuizInput, UserUncheckedCreateWithoutHasilQuizInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHasilQuizInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHasilQuizInput, UserUncheckedUpdateWithoutHasilQuizInput>
  }

  export type UserUpdateWithoutHasilQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUpdateManyWithoutUserNestedInput
    favorit?: FavoritUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHasilQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUncheckedUpdateManyWithoutUserNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CeritaUpsertWithoutHasilQuizInput = {
    update: XOR<CeritaUpdateWithoutHasilQuizInput, CeritaUncheckedUpdateWithoutHasilQuizInput>
    create: XOR<CeritaCreateWithoutHasilQuizInput, CeritaUncheckedCreateWithoutHasilQuizInput>
    where?: CeritaWhereInput
  }

  export type CeritaUpdateToOneWithWhereWithoutHasilQuizInput = {
    where?: CeritaWhereInput
    data: XOR<CeritaUpdateWithoutHasilQuizInput, CeritaUncheckedUpdateWithoutHasilQuizInput>
  }

  export type CeritaUpdateWithoutHasilQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutHasilQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type UserCreateWithoutProgresInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    favorit?: FavoritCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgresInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    favorit?: FavoritUncheckedCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgresInput, UserUncheckedCreateWithoutProgresInput>
  }

  export type CeritaCreateWithoutProgresInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    favorit?: FavoritCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutProgresInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    favorit?: FavoritUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutProgresInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutProgresInput, CeritaUncheckedCreateWithoutProgresInput>
  }

  export type UserUpsertWithoutProgresInput = {
    update: XOR<UserUpdateWithoutProgresInput, UserUncheckedUpdateWithoutProgresInput>
    create: XOR<UserCreateWithoutProgresInput, UserUncheckedCreateWithoutProgresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgresInput, UserUncheckedUpdateWithoutProgresInput>
  }

  export type UserUpdateWithoutProgresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorit?: FavoritUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgresInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorit?: FavoritUncheckedUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CeritaUpsertWithoutProgresInput = {
    update: XOR<CeritaUpdateWithoutProgresInput, CeritaUncheckedUpdateWithoutProgresInput>
    create: XOR<CeritaCreateWithoutProgresInput, CeritaUncheckedCreateWithoutProgresInput>
    where?: CeritaWhereInput
  }

  export type CeritaUpdateToOneWithWhereWithoutProgresInput = {
    where?: CeritaWhereInput
    data: XOR<CeritaUpdateWithoutProgresInput, CeritaUncheckedUpdateWithoutProgresInput>
  }

  export type CeritaUpdateWithoutProgresInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutProgresInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type UserCreateWithoutFavoritInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritInput = {
    id?: string
    email: string
    password: string
    nama: string
    avatar?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progres?: ProgresUncheckedCreateNestedManyWithoutUserInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritInput, UserUncheckedCreateWithoutFavoritInput>
  }

  export type CeritaCreateWithoutFavoritInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutCeritaInput
    scenes?: SceneCreateNestedManyWithoutCeritaInput
    quizzes?: QuizCreateNestedManyWithoutCeritaInput
    progres?: ProgresCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizCreateNestedManyWithoutCeritaInput
  }

  export type CeritaUncheckedCreateWithoutFavoritInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategoriId: string
    scenes?: SceneUncheckedCreateNestedManyWithoutCeritaInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutCeritaInput
    progres?: ProgresUncheckedCreateNestedManyWithoutCeritaInput
    hasilQuiz?: HasilQuizUncheckedCreateNestedManyWithoutCeritaInput
  }

  export type CeritaCreateOrConnectWithoutFavoritInput = {
    where: CeritaWhereUniqueInput
    create: XOR<CeritaCreateWithoutFavoritInput, CeritaUncheckedCreateWithoutFavoritInput>
  }

  export type UserUpsertWithoutFavoritInput = {
    update: XOR<UserUpdateWithoutFavoritInput, UserUncheckedUpdateWithoutFavoritInput>
    create: XOR<UserCreateWithoutFavoritInput, UserUncheckedCreateWithoutFavoritInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritInput, UserUncheckedUpdateWithoutFavoritInput>
  }

  export type UserUpdateWithoutFavoritInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progres?: ProgresUncheckedUpdateManyWithoutUserNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CeritaUpsertWithoutFavoritInput = {
    update: XOR<CeritaUpdateWithoutFavoritInput, CeritaUncheckedUpdateWithoutFavoritInput>
    create: XOR<CeritaCreateWithoutFavoritInput, CeritaUncheckedCreateWithoutFavoritInput>
    where?: CeritaWhereInput
  }

  export type CeritaUpdateToOneWithWhereWithoutFavoritInput = {
    where?: CeritaWhereInput
    data: XOR<CeritaUpdateWithoutFavoritInput, CeritaUncheckedUpdateWithoutFavoritInput>
  }

  export type CeritaUpdateWithoutFavoritInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutCeritaNestedInput
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutFavoritInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriId?: StringFieldUpdateOperationsInput | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type ProgresCreateManyUserInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    ceritaId: string
    updatedAt?: Date | string
  }

  export type FavoritCreateManyUserInput = {
    id?: string
    ceritaId: string
    createdAt?: Date | string
  }

  export type HasilQuizCreateManyUserInput = {
    id?: string
    skor: number
    totalSoal: number
    ceritaId: string
    createdAt?: Date | string
  }

  export type ProgresUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutProgresNestedInput
  }

  export type ProgresUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    ceritaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    ceritaId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutFavoritNestedInput
  }

  export type FavoritUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cerita?: CeritaUpdateOneRequiredWithoutHasilQuizNestedInput
  }

  export type HasilQuizUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    ceritaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CeritaCreateManyKategoriInput = {
    id?: string
    judul: string
    deskripsi?: string | null
    thumbnail?: string | null
    status?: $Enums.StatusCerita
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CeritaUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: SceneUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scenes?: SceneUncheckedUpdateManyWithoutCeritaNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutCeritaNestedInput
    progres?: ProgresUncheckedUpdateManyWithoutCeritaNestedInput
    favorit?: FavoritUncheckedUpdateManyWithoutCeritaNestedInput
    hasilQuiz?: HasilQuizUncheckedUpdateManyWithoutCeritaNestedInput
  }

  export type CeritaUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusCeritaFieldUpdateOperationsInput | $Enums.StatusCerita
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneCreateManyCeritaInput = {
    id?: string
    urutan: number
    gambar?: string | null
    teks: string
    audio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyCeritaInput = {
    id?: string
    pertanyaan: string
    urutan?: number
    createdAt?: Date | string
  }

  export type ProgresCreateManyCeritaInput = {
    id?: string
    lastScene?: number
    isSelesai?: boolean
    userId: string
    updatedAt?: Date | string
  }

  export type FavoritCreateManyCeritaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type HasilQuizCreateManyCeritaInput = {
    id?: string
    skor: number
    totalSoal: number
    userId: string
    createdAt?: Date | string
  }

  export type SceneUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SceneUncheckedUpdateManyWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    teks?: StringFieldUpdateOperationsInput | string
    audio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilihan?: PilihanJawabanUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilihan?: PilihanJawabanUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pertanyaan?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgresNestedInput
  }

  export type ProgresUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgresUncheckedUpdateManyWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScene?: IntFieldUpdateOperationsInput | number
    isSelesai?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritNestedInput
  }

  export type FavoritUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritUncheckedUpdateManyWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHasilQuizNestedInput
  }

  export type HasilQuizUncheckedUpdateWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HasilQuizUncheckedUpdateManyWithoutCeritaInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: IntFieldUpdateOperationsInput | number
    totalSoal?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanCreateManyQuizInput = {
    id?: string
    teks: string
    isBenar?: boolean
    createdAt?: Date | string
  }

  export type PilihanJawabanUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PilihanJawabanUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    teks?: StringFieldUpdateOperationsInput | string
    isBenar?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KategoriCountOutputTypeDefaultArgs instead
     */
    export type KategoriCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CeritaCountOutputTypeDefaultArgs instead
     */
    export type CeritaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CeritaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizCountOutputTypeDefaultArgs instead
     */
    export type QuizCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KategoriDefaultArgs instead
     */
    export type KategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KategoriDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CeritaDefaultArgs instead
     */
    export type CeritaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CeritaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SceneDefaultArgs instead
     */
    export type SceneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SceneDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuizDefaultArgs instead
     */
    export type QuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PilihanJawabanDefaultArgs instead
     */
    export type PilihanJawabanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PilihanJawabanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HasilQuizDefaultArgs instead
     */
    export type HasilQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HasilQuizDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgresDefaultArgs instead
     */
    export type ProgresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoritDefaultArgs instead
     */
    export type FavoritArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoritDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppSettingDefaultArgs instead
     */
    export type AppSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppSettingDefaultArgs<ExtArgs>

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