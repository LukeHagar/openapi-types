import type { BaseReference } from "./references"
import type { Extension } from "./extensions"
import type { ExternalDocumentation } from "./external-documentation"
import type { SwaggerSchema } from "./data-types"

/**
 * Path Item Object
 *
 * Describes the operations available on a single path. A Path Item may be empty,
 * due to ACL constraints. The path itself is still exposed to the documentation
 * viewer but they will not know which operations and parameters are available.
 *
 * @see https://swagger.io/specification/v2/#path-item-object
 * @example
 * ```typescript
 * const pathItem: PathItemObject = {
 *   get: {
 *     summary: "Get users",
 *     operationId: "getUsers",
 *     responses: {
 *       "200": {
 *         description: "List of users",
 *         schema: { type: "array", items: { $ref: "#/definitions/User" } }
 *       }
 *     }
 *   },
 *   post: {
 *     summary: "Create user",
 *     operationId: "createUser",
 *     parameters: [
 *       {
 *         name: "user",
 *         in: "body",
 *         schema: { $ref: "#/definitions/User" }
 *       }
 *     ],
 *     responses: {
 *       "201": {
 *         description: "User created",
 *         schema: { $ref: "#/definitions/User" }
 *       }
 *     }
 *   },
 *   parameters: [
 *     {
 *       name: "limit",
 *       in: "query",
 *       type: "integer",
 *       description: "Maximum number of items to return"
 *     }
 *   ]
 * }
 * ```
 */
export type PathItemObject =
  | ({
      /** 
       * A definition of a GET operation on this path.
       * 
       * @example { summary: "Get users", responses: { "200": { description: "Success" } } }
       */
      get?: Operation
      
      /** 
       * A definition of a PUT operation on this path.
       * 
       * @example { summary: "Update user", responses: { "200": { description: "Success" } } }
       */
      put?: Operation
      
      /** 
       * A definition of a POST operation on this path.
       * 
       * @example { summary: "Create user", responses: { "201": { description: "Created" } } }
       */
      post?: Operation
      
      /** 
       * A definition of a DELETE operation on this path.
       * 
       * @example { summary: "Delete user", responses: { "204": { description: "No Content" } } }
       */
      delete?: Operation
      
      /** 
       * A definition of an OPTIONS operation on this path.
       * 
       * @example { summary: "Get options", responses: { "200": { description: "Options" } } }
       */
      options?: Operation
      
      /** 
       * A definition of a HEAD operation on this path.
       * 
       * @example { summary: "Check if resource exists", responses: { "200": { description: "Exists" } } }
       */
      head?: Operation
      
      /** 
       * A definition of a PATCH operation on this path.
       * 
       * @example { summary: "Partially update user", responses: { "200": { description: "Success" } } }
       */
      patch?: Operation
      
      /** 
       * A list of parameters that are applicable for all the operations described 
       * under this path. These parameters can be overridden at the operation level, 
       * but cannot be removed there. The list MUST NOT include duplicated parameters. 
       * A unique parameter is defined by a combination of a name and location.
       * 
       * @example [{ name: "limit", in: "query", type: "integer" }]
       */
      parameters?: Array<Parameter | BaseReference>
    } & Extension)
  | BaseReference

/**
 * Operation Object
 *
 * Describes a single API operation on a path. A unique operation is defined 
 * by a combination of a path and an HTTP method.
 *
 * @see https://swagger.io/specification/v2/#operation-object
 * @example
 * ```typescript
 * const operation: Operation = {
 *   tags: ["users"],
 *   summary: "Get user by ID",
 *   description: "Retrieves a specific user by their unique identifier",
 *   operationId: "getUserById",
 *   consumes: ["application/json"],
 *   produces: ["application/json"],
 *   parameters: [
 *     {
 *       name: "id",
 *       in: "path",
 *       required: true,
 *       type: "string",
 *       description: "The user ID"
 *     }
 *   ],
 *   responses: {
 *     "200": {
 *       description: "User found",
 *       schema: { $ref: "#/definitions/User" }
 *     },
 *     "404": {
 *       description: "User not found"
 *     }
 *   },
 *   deprecated: false,
 *   security: [{ "api_key": [] }]
 * }
 * ```
 */
export interface Operation extends Extension {
  /** 
   * A list of tags for API documentation control. Tags can be used for logical 
   * grouping of operations by resources or any other qualifier.
   * 
   * @example ["users", "authentication"]
   * @example ["pets"]
   */
  tags?: string[]
  
  /** 
   * A short summary of what the operation does. For maximum readability in 
   * swagger-ui, this field SHOULD be less than 120 characters.
   * 
   * @example "Get user by ID"
   * @example "Create a new pet"
   */
  summary?: string
  
  /** 
   * A verbose explanation of the operation behavior. GFM syntax can be used 
   * for rich text representation.
   * 
   * @example "Retrieves a specific user by their unique identifier. Returns user details including name, email, and profile information."
   */
  description?: string
  
  /** 
   * Additional external documentation for this operation.
   * 
   * @example { description: "Find out more about this operation", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation
  
  /** 
   * Unique string used to identify the operation. The id MUST be unique among 
   * all operations described in the API. Tools and libraries MAY use the 
   * operationId to uniquely identify an operation, therefore, it is recommended 
   * to follow common programming naming conventions.
   * 
   * @example "getUserById"
   * @example "createPet"
   */
  operationId?: string
  
  /** 
   * A list of MIME types the operation can consume. This overrides the consumes 
   * definition at the Swagger Object level. An empty value MAY be used to clear 
   * the global definition. Value MUST be as described under Mime Types.
   * 
   * @example ["application/json"]
   * @example ["application/xml", "application/json"]
   */
  consumes?: string[]
  
  /** 
   * A list of MIME types the operation can produce. This overrides the produces 
   * definition at the Swagger Object level. An empty value MAY be used to clear 
   * the global definition. Value MUST be as described under Mime Types.
   * 
   * @example ["application/json"]
   * @example ["application/xml", "application/json"]
   */
  produces?: string[]
  
  /** 
   * A list of parameters that are applicable for this operation. If a parameter 
   * is already defined at the Path Item, the new definition will override it 
   * but can never remove it. The list MUST NOT include duplicated parameters. 
   * A unique parameter is defined by a combination of a name and location.
   * 
   * @example [{ name: "id", in: "path", required: true, type: "string" }]
   */
  parameters?: Array<Parameter | BaseReference>
  
  /** 
   * The list of possible responses as they are returned from executing this operation.
   * This field MUST be present and MUST contain at least one response.
   * 
   * @example { "200": { description: "Success", schema: { type: "object" } } }
   */
  responses: Record<string, Response | BaseReference>
  
  /** 
   * The transfer protocol for the operation. Values MUST be from the list: 
   * "http", "https", "ws", "wss". The value overrides the Swagger Object 
   * schemes definition.
   * 
   * @example ["https", "http"]
   * @example ["wss"]
   */
  schemes?: Array<"http" | "https" | "ws" | "wss">
  
  /** 
   * Declares this operation to be deprecated. Usage of the declared operation 
   * should be refrained. Default value is false.
   * 
   * @default false
   * @example true
   */
  deprecated?: boolean
  
  /** 
   * A declaration of which security schemes are applied for this operation. 
   * The list of values describes alternative security schemes that can be used 
   * (that is, there is a logical OR between the security requirements). 
   * This definition overrides any declared top-level security. To remove a 
   * top-level security declaration, an empty array can be used.
   * 
   * @example [{ "api_key": [] }]
   * @example [{ "oauth2": ["read", "write"] }]
   */
  security?: Array<Record<string, string[]>>
}

/**
 * Parameter Object
 *
 * Describes a single operation parameter. A unique parameter is defined by a 
 * combination of a name and location.
 *
 * @see https://swagger.io/specification/v2/#parameter-object
 * @example
 * ```typescript
 * // Query parameter
 * const queryParam: Parameter = {
 *   name: "limit",
 *   in: "query",
 *   description: "Maximum number of items to return",
 *   required: false,
 *   type: "integer",
 *   format: "int32"
 * }
 * 
 * // Path parameter
 * const pathParam: Parameter = {
 *   name: "id",
 *   in: "path",
 *   description: "The user ID",
 *   required: true,
 *   type: "string"
 * }
 * 
 * // Body parameter
 * const bodyParam: Parameter = {
 *   name: "user",
 *   in: "body",
 *   description: "User object to create",
 *   required: true,
 *   schema: { $ref: "#/definitions/User" }
 * }
 * ```
 */
export interface Parameter extends Extension {
  /** 
   * The name of the parameter. Parameter names are case sensitive.
   * - If in is "path", the name field MUST correspond to the associated path segment from the path field in the Paths Object
   * - For all other cases, the name corresponds to the parameter name used by the in property
   * 
   * @example "id"
   * @example "limit"
   * @example "user"
   */
  name: string
  
  /** 
   * The location of the parameter. Possible values are "query", "header", "path", "formData" or "body".
   * 
   * - **query**: Parameters that are appended to the URL. For example, in `/users?role=admin`, the role query parameter has the value admin.
   * - **header**: Custom headers that are expected as part of the request. Note that RFC7230 states header names are case insensitive.
   * - **path**: Used together with Path Templating, where the parameter value is actually part of the operation's URL. This does not include the host or base path of the API.
   * - **formData**: Used to describe the payload of an HTTP request when either application/x-www-form-urlencoded or multipart/form-data is used as the content type of the request.
   * - **body**: The payload that's appended to the HTTP request. Since there can only be one payload, there can only be one body parameter.
   * 
   * @example "query"
   * @example "path"
   * @example "body"
   */
  in: "query" | "header" | "path" | "formData" | "body"
  
  /** 
   * A brief description of the parameter. This could contain examples of use. 
   * GFM syntax can be used for rich text representation.
   * 
   * @example "The user ID"
   * @example "Maximum number of items to return (default: 10)"
   */
  description?: string
  
  /** 
   * Determines whether this parameter is mandatory. If the parameter is in "path", 
   * this property is required and its value MUST be true. Otherwise, the property 
   * MAY be included and its default value is false.
   * 
   * @default false
   * @example true
   */
  required?: boolean
  
  /** 
   * The type of the parameter. Since the parameter is not located at the request body, 
   * it is limited to simple types (that is, not an object). The value MUST be one of 
   * "string", "number", "integer", "boolean", "array" or "file". If type is "file", 
   * the consumes MUST be either "multipart/form-data", "application/x-www-form-urlencoded" 
   * or both and the parameter MUST be in "formData".
   * 
   * @example "string"
   * @example "integer"
   * @example "array"
   */
  type?: string
  
  /** 
   * The extending format for the previously mentioned type. See Data Type Formats 
   * for further details.
   * 
   * @example "int32"
   * @example "date"
   * @example "email"
   */
  format?: string
  
  /** 
   * Sets the ability to pass empty-valued parameters. This is valid only for either 
   * query or formData parameters and allows you to send a parameter with a name only 
   * or an empty value. Default value is false.
   * 
   * @default false
   * @example true
   */
  allowEmptyValue?: boolean
  
  /** 
   * The schema defining the type used for the body parameter. This property is 
   * only applicable for parameters with in: "body".
   * 
   * @example { $ref: "#/definitions/User" }
   * @example { type: "object", properties: { name: { type: "string" } } }
   */
  schema?: SwaggerSchema
  
  /** 
   * Required if type is "array". Describes the type of items in the array.
   * 
   * @example { type: "string" }
   * @example { type: "integer", format: "int32" }
   */
  items?: Items
  
  /** 
   * Determines the format of the array if type array is used. Possible values are:
   * - csv: comma separated values foo,bar
   * - ssv: space separated values foo bar
   * - tsv: tab separated values foo\tbar
   * - pipes: pipe separated values foo|bar
   * - multi: corresponds to multiple parameter instances instead of multiple values for a single instance foo=bar&foo=baz
   * 
   * @default "csv"
   * @example "multi"
   */
  collectionFormat?: "csv" | "ssv" | "tsv" | "pipes" | "multi"
  
  /** 
   * Declares the value of the parameter that the server will use if none is provided.
   * This value MUST conform to the defined type for this parameter.
   * 
   * @example "defaultValue"
   * @example 10
   */
  default?: unknown
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example 100
   */
  maximum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example false
   */
  exclusiveMaximum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example 0
   */
  minimum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example false
   */
  exclusiveMinimum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1
   * 
   * @example 100
   */
  maxLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2
   * 
   * @example 1
   */
  minLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3
   * 
   * @example "^[a-zA-Z0-9]+$"
   */
  pattern?: string
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2
   * 
   * @example 10
   */
  maxItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3
   * 
   * @example 1
   */
  minItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4
   * 
   * @example true
   */
  uniqueItems?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1
   * 
   * @example ["option1", "option2", "option3"]
   */
  enum?: unknown[]
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1
   * 
   * @example 2
   */
  multipleOf?: number
}

/**
 * Paths Object
 *
 * Holds the relative paths to the individual endpoints. The path is appended to the 
 * basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints.
 *
 * @see https://swagger.io/specification/v2/#paths-object
 * @example
 * ```typescript
 * const paths: Paths = {
 *   "/pets": {
 *     "get": {
 *       "description": "Returns all pets from the system that the user has access to",
 *       "produces": ["application/json"],
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets.",
 *           "schema": {
 *             "type": "array",
 *             "items": {
 *               "$ref": "#/definitions/pet"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 */
export type Paths = Record<string, PathItemObject>

/**
 * Items Object
 *
 * A limited subset of JSON-Schema's items object. It is used by parameter definitions 
 * that are not located in "body".
 *
 * @see https://swagger.io/specification/v2/#items-object
 * @example
 * ```typescript
 * const items: Items = {
 *   type: "string",
 *   minLength: 2
 * }
 * ```
 */
export interface Items extends Extension {
  /** 
   * The internal type of the array. The value MUST be one of "string", "number", 
   * "integer", "boolean", or "array". Files and models are not allowed.
   * 
   * @example "string"
   * @example "integer"
   * @example "array"
   */
  type: string
  
  /** 
   * The extending format for the previously mentioned type. See Data Type Formats 
   * for further details.
   * 
   * @example "int32"
   * @example "date"
   * @example "email"
   */
  format?: string
  
  /** 
   * Required if type is "array". Describes the type of items in the array.
   * 
   * @example { type: "string" }
   * @example { type: "integer", format: "int32" }
   */
  items?: Items
  
  /** 
   * Determines the format of the array if type array is used. Possible values are:
   * - csv: comma separated values foo,bar
   * - ssv: space separated values foo bar
   * - tsv: tab separated values foo\tbar
   * - pipes: pipe separated values foo|bar
   * 
   * @default "csv"
   * @example "multi"
   */
  collectionFormat?: "csv" | "ssv" | "tsv" | "pipes"
  
  /** 
   * Declares the value of the item that the server will use if none is provided.
   * This value MUST conform to the defined type for the data type.
   * 
   * @example "defaultValue"
   * @example 10
   */
  default?: unknown
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example 100
   */
  maximum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example false
   */
  exclusiveMaximum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example 0
   */
  minimum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example false
   */
  exclusiveMinimum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1
   * 
   * @example 100
   */
  maxLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2
   * 
   * @example 1
   */
  minLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3
   * 
   * @example "^[a-zA-Z0-9]+$"
   */
  pattern?: string
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2
   * 
   * @example 10
   */
  maxItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3
   * 
   * @example 1
   */
  minItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4
   * 
   * @example true
   */
  uniqueItems?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1
   * 
   * @example ["option1", "option2", "option3"]
   */
  enum?: unknown[]
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1
   * 
   * @example 2
   */
  multipleOf?: number
}

/**
 * Paths Object
 *
 * Holds the relative paths to the individual endpoints. The path is appended to the 
 * basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints.
 *
 * @see https://swagger.io/specification/v2/#paths-object
 * @example
 * ```typescript
 * const paths: Paths = {
 *   "/pets": {
 *     "get": {
 *       "description": "Returns all pets from the system that the user has access to",
 *       "produces": ["application/json"],
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets.",
 *           "schema": {
 *             "type": "array",
 *             "items": {
 *               "$ref": "#/definitions/pet"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 */

/**
 * Response Object
 *
 * Describes a single response from an API Operation. A container for the expected 
 * responses of an operation. The container maps a HTTP response code to the expected 
 * response. It is not expected from the documentation to necessarily cover all 
 * possible HTTP response codes because they may not be known in advance. However, 
 * it is expected from the documentation to cover a successful operation response 
 * and any known errors.
 *
 * @see https://swagger.io/specification/v2/#response-object
 * @example
 * ```typescript
 * const response: Response = {
 *   description: "User successfully retrieved",
 *   schema: { $ref: "#/definitions/User" },
 *   headers: {
 *     "X-RateLimit-Limit": {
 *       type: "integer",
 *       description: "Rate limit for the current period"
 *     }
 *   },
 *   examples: {
 *     "application/json": {
 *       id: 1,
 *       name: "John Doe",
 *       email: "john@example.com"
 *     }
 *   }
 * }
 * ```
 */
export interface Response extends Extension {
  /** 
   * A short description of the response. GFM syntax can be used for rich text representation.
   * This field is required.
   * 
   * @example "User successfully retrieved"
   * @example "Bad request - invalid input parameters"
   * @example "Internal server error"
   */
  description: string
  
  /** 
   * A definition of the response structure. It can be a primitive, an array or an object. 
   * If this field does not exist, it means no content is returned as part of the response. 
   * As an extension to the Schema Object, its root type value may also be "file". 
   * This SHOULD be accompanied by a relevant produces mime-type.
   * 
   * @example { $ref: "#/definitions/User" }
   * @example { type: "array", items: { $ref: "#/definitions/User" } }
   * @example { type: "string" }
   */
  schema?: SwaggerSchema
  
  /** 
   * A list of headers that are sent with the response.
   * 
   * @example { "X-RateLimit-Limit": { type: "integer", description: "Rate limit" } }
   */
  headers?: Record<string, Header>
  
  /** 
   * An example of the response message. This property is not part of the OpenAPI 
   * specification but is commonly used by tools to provide example responses.
   * 
   * @example { "application/json": { id: 1, name: "John Doe" } }
   */
  examples?: Record<string, unknown>
}

/**
 * Header Object
 *
 * Describes a single header parameter. A list of all headers that are sent with 
 * the response. The name is used to refer to the respective header definition. 
 * The value of the header is of type string.
 *
 * @see https://swagger.io/specification/v2/#header-object
 * @example
 * ```typescript
 * const header: Header = {
 *   description: "Rate limit for the current period",
 *   type: "integer",
 *   format: "int32"
 * }
 * ```
 */
export interface Header extends Extension {
  /** 
   * A brief description of the header. GFM syntax can be used for rich text representation.
   * 
   * @example "Rate limit for the current period"
   * @example "Content type of the response"
   */
  description?: string
  
  /** 
   * The type of the object. The value MUST be one of "string", "number", "integer", 
   * "boolean", or "array".
   * This field is required.
   * 
   * @example "string"
   * @example "integer"
   * @example "array"
   */
  type: string
  
  /** 
   * The extending format for the previously mentioned type. See Data Type Formats 
   * for further details.
   * 
   * @example "int32"
   * @example "date"
   * @example "email"
   */
  format?: string
  
  /** 
   * Required if type is "array". Describes the type of items in the array.
   * 
   * @example { type: "string" }
   * @example { type: "integer", format: "int32" }
   */
  items?: Items
  
  /** 
   * Determines the format of the array if type array is used. Possible values are:
   * - csv: comma separated values foo,bar
   * - ssv: space separated values foo bar
   * - tsv: tab separated values foo\tbar
   * - pipes: pipe separated values foo|bar
   * 
   * @default "csv"
   * @example "multi"
   */
  collectionFormat?: "csv" | "ssv" | "tsv" | "pipes"
  
  /** 
   * Declares the value of the header that the server will use if none is provided.
   * This value MUST conform to the defined type for the header.
   * 
   * @example "defaultValue"
   * @example 10
   */
  default?: unknown
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example 100
   */
  maximum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2
   * 
   * @example false
   */
  exclusiveMaximum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example 0
   */
  minimum?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3
   * 
   * @example false
   */
  exclusiveMinimum?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1
   * 
   * @example 100
   */
  maxLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2
   * 
   * @example 1
   */
  minLength?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3
   * 
   * @example "^[a-zA-Z0-9]+$"
   */
  pattern?: string
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2
   * 
   * @example 10
   */
  maxItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3
   * 
   * @example 1
   */
  minItems?: number
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4
   * 
   * @example true
   */
  uniqueItems?: boolean
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1
   * 
   * @example ["option1", "option2", "option3"]
   */
  enum?: unknown[]
  
  /** 
   * See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1
   * 
   * @example 2
   */
  multipleOf?: number
}

/**
 * Paths Object
 *
 * Holds the relative paths to the individual endpoints. The path is appended to the 
 * basePath in order to construct the full URL. The Paths may be empty, due to ACL constraints.
 *
 * @see https://swagger.io/specification/v2/#paths-object
 * @example
 * ```typescript
 * const paths: Paths = {
 *   "/pets": {
 *     "get": {
 *       "description": "Returns all pets from the system that the user has access to",
 *       "produces": ["application/json"],
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets.",
 *           "schema": {
 *             "type": "array",
 *             "items": {
 *               "$ref": "#/definitions/pet"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 */
export type Paths = Record<string, PathItemObject>
