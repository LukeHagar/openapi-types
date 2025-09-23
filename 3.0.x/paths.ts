import type { Extension } from "./extensions"
import type { Reference } from "./references"
import type { ExternalDocumentation } from "./external-documentation"
import type { Schema } from "./schema"
import type { Server } from "./servers"
import type { SecurityRequirement } from "./security"

/**
 * -----
 * Path Item Object
 * -----
 *
 * Describes the operations available on a single path.
 * A Path Item MAY be empty, due to ACL constraints.
 *
 * The Path Item Object describes the operations available on a single path. It can
 * contain a summary and description that apply to all operations on the path, as well
 * as individual operation definitions for each HTTP method.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object | OpenAPI 3.0.4 Path Item} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object | OpenAPI 3.0.3 Path Item} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object | OpenAPI 3.0.2 Path Item} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object | OpenAPI 3.0.1 Path Item} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object | OpenAPI 3.0.0 Path Item} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `$ref` - Optional Allows for an external definition of this path item
 * @key `summary` - Optional An optional, string summary, intended to apply to all operations in this path
 * @key `description` - Optional An optional, string description, intended to apply to all operations in this path
 * @key `get` - Optional A definition of a GET operation on this path
 * @key `put` - Optional A definition of a PUT operation on this path
 * @key `post` - Optional A definition of a POST operation on this path
 * @key `delete` - Optional A definition of a DELETE operation on this path
 * @key `options` - Optional A definition of an OPTIONS operation on this path
 * @key `head` - Optional A definition of a HEAD operation on this path
 * @key `patch` - Optional A definition of a PATCH operation on this path
 * @key `trace` - Optional A definition of a TRACE operation on this path
 * @key `servers` - Optional An alternative server array to service all operations in this path
 * @key `parameters` - Optional A list of parameters that are applicable for all the operations described under this path
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * All operation fields are optional. Parameters can be overridden at the operation level.
 * In OpenAPI 3.0.1+, the `servers` property was clarified to allow alternative server
 * arrays that override the global servers for operations on this specific path.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple path item):
 * ```ts
 * const pathItem: PathItemObject = {
 *   get: {
 *     summary: "List users",
 *     responses: {
 *       "200": {
 *         description: "A list of users",
 *         content: {
 *           "application/json": {
 *             schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *           }
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (path item with shared parameters):
 * ```ts
 * const pathItem: PathItemObject = {
 *   summary: "User management operations",
 *   parameters: [
 *     { name: "userId", in: "path", required: true, schema: { type: "string" } }
 *   ],
 *   get: { summary: "Get user" },
 *   put: { summary: "Update user" },
 *   delete: { summary: "Delete user" }
 * };
 * ```
 */
export type PathItemObject = 
  | ({
      /** 
       * Allows for an external definition of this path item. The referenced structure 
       * MUST be in the format of a Path Item Object.
       */
      $ref?: string
      
      /** 
       * An optional, string summary, intended to apply to all operations in this path.
       * 
       * @example "User management operations"
       */
      summary?: string
      
      /** 
       * An optional, string description, intended to apply to all operations in this path. 
       * CommonMark syntax MAY be used for rich text representation.
       * 
       * @example "Operations for managing users in the system"
       */
      description?: string
      
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
       * A definition of a TRACE operation on this path.
       * 
       * @example { summary: "Trace request", responses: { "200": { description: "Success" } } }
       */
      trace?: Operation
      
      /** 
       * An alternative server array to service all operations in this path.
       * 
       * @example [{ url: "https://api.example.com/v1" }]
       */
      servers?: Server[]
      
      /** 
       * A list of parameters that are applicable for all the operations described 
       * under this path. These parameters can be overridden at the operation level, 
       * but cannot be removed there. The list MUST NOT include duplicated parameters. 
       * A unique parameter is defined by a combination of a name and location.
       * 
       * @example [{ name: "limit", in: "query", schema: { type: "integer" } }]
       */
      parameters?: Array<Parameter | Reference>
    } & Extension)
  | Reference

/**
 * -----
 * Operation Object
 * -----
 *
 * Describes a single API operation on a path.
 *
 * The Operation Object describes a single API operation on a path. It contains
 * information about the operation including its parameters, request body, responses,
 * and security requirements.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object | OpenAPI 3.0.4 Operation} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object | OpenAPI 3.0.3 Operation} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object | OpenAPI 3.0.2 Operation} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object | OpenAPI 3.0.1 Operation} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object | OpenAPI 3.0.0 Operation} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `tags` - Optional A list of tags for API documentation control
 * @key `summary` - Optional A short summary of what the operation does
 * @key `description` - Optional A verbose explanation of the operation behavior
 * @key `externalDocs` - Optional Additional external documentation for this operation
 * @key `operationId` - Optional Unique string used to identify the operation
 * @key `parameters` - Optional A list of parameters that are applicable for this operation
 * @key `requestBody` - Optional The request body applicable for this operation
 * @key `responses` - Required The list of possible responses as they are returned from executing this operation
 * @key `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
 * @key `deprecated` - Optional Declares this operation to be deprecated
 * @key `security` - Optional A declaration of which security mechanisms can be used for this operation
 * @key `servers` - Optional An alternative server array to service this operation
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `responses` field is required and MUST contain at least one response.
 * In OpenAPI 3.0.1+, the `operationId` field was clarified to be case-sensitive
 * and must be unique across all operations in the API. The `servers` property
 * was clarified to allow alternative server arrays that override the global
 * servers for this specific operation.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple operation):
 * ```ts
 * const operation: Operation = {
 *   summary: "Get users",
 *   responses: {
 *     "200": {
 *       description: "A list of users",
 *       content: {
 *         "application/json": {
 *           schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (operation with request body):
 * ```ts
 * const operation: Operation = {
 *   summary: "Create user",
 *   operationId: "createUser",
 *   requestBody: {
 *     description: "User data",
 *     content: {
 *       "application/json": {
 *         schema: { $ref: "#/components/schemas/User" }
 *       }
 *     }
 *   },
 *   responses: {
 *     "201": {
 *       description: "User created",
 *       content: {
 *         "application/json": {
 *           schema: { $ref: "#/components/schemas/User" }
 *         }
 *       }
 *     }
 *   }
 * };
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
   * OpenAPI-UI, this field SHOULD be less than 120 characters.
   * 
   * @example "Get user by ID"
   * @example "Create a new pet"
   */
  summary?: string
  
  /** 
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used 
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
   * A list of parameters that are applicable for this operation. If a parameter 
   * is already defined at the Path Item, the new definition will override it 
   * but can never remove it. The list MUST NOT include duplicated parameters. 
   * A unique parameter is defined by a combination of a name and location.
   * 
   * @example [{ name: "id", in: "path", required: true, schema: { type: "string" } }]
   */
  parameters?: Array<Parameter | Reference>
  
  /** 
   * The request body applicable for this operation. The requestBody is only 
   * supported in HTTP methods where the HTTP 1.1 specification has explicitly 
   * defined semantics for request bodies.
   * 
   * @example { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } }
   */
  requestBody?: RequestBody | Reference
  
  /** 
   * The list of possible responses as they are returned from executing this operation.
   * This field MUST be present and MUST contain at least one response.
   * 
   * @example { "200": { description: "Success", content: { "application/json": { schema: { type: "object" } } } } }
   */
  responses: Record<string, Response | Reference>
  
  /** 
   * A map of possible out-of band callbacks related to the parent operation. 
   * The key is a unique identifier for the Callback Object. Each value in the map 
   * is a Callback Object that describes a request that may be initiated by the API 
   * provider and the expected responses.
   * 
   * @example { "myCallback": { "{$request.body#/callbackUrl}": { post: { ... } } } }
   */
  callbacks?: Record<string, Callback | Reference>
  
  /** 
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage 
   * of the declared operation. Default value is false.
   * 
   * @default false
   * @example true
   */
  deprecated?: boolean
  
  /** 
   * A declaration of which security mechanisms can be used for this operation. 
   * The list of values includes alternative security requirement objects that can be used. 
   * Only one of the security requirement objects need to be satisfied to authorize a request. 
   * This definition overrides any declared top-level security.
   * 
   * @example [{ "api_key": [] }]
   * @example [{ "oauth2": ["read", "write"] }]
   */
  security?: SecurityRequirement[]
  
  /** 
   * An alternative server array to service this operation. If an alternative 
   * server object is specified at the Path Item Object or Root level, it will 
   * be overridden by this value.
   * 
   * @example [{ url: "https://api.example.com/v1" }]
   */
  servers?: Server[]
}

/**
 * -----
 * Parameter Object
 * -----
 *
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object | OpenAPI 3.0.0 Parameter} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `name` - Required The name of the parameter
 * @key `in` - Required The location of the parameter
 * @key `description` - Optional A brief description of the parameter
 * @key `required` - Optional Determines whether this parameter is mandatory
 * @key `deprecated` - Optional Specifies that a parameter is deprecated
 * @key `allowEmptyValue` - Optional Sets the ability to pass empty-valued parameters
 * @key `style` - Optional Describes how the parameter value will be serialized
 * @key `explode` - Optional When this is true, parameter values generate separate parameters
 * @key `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @key `schema` - Optional The schema defining the type used for the parameter
 * @key `example` - Optional Example of the media type
 * @key `examples` - Optional Examples of the media type
 * @key `content` - Optional A map containing the representations for the parameter
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` and `in` fields are required. A parameter MUST contain either a `schema` property, or a `content` property, but not both.
 *
 * -----
 * Examples
 * -----
 *
 * @example (path parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "id",
 *   in: "path",
 *   required: true,
 *   description: "User ID",
 *   schema: { type: "string" }
 * };
 * ```
 *
 * @example (query parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "limit",
 *   in: "query",
 *   description: "Number of items to return",
 *   schema: { type: "integer", minimum: 1, maximum: 100 }
 * };
 * ```
 */
export interface Parameter extends Extension {
  /** 
   * The name of the parameter. Parameter names are case sensitive.
   * - If in is "path", the name field MUST correspond to the associated path segment
   * - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored
   * - For all other cases, the name corresponds to the parameter name used by the in property
   * 
   * @example "id"
   * @example "limit"
   * @example "user"
   */
  name: string
  
  /** 
   * The location of the parameter. Possible values are "query", "header", "path" or "cookie".
   * 
   * - **query**: Parameters that are appended to the URL
   * - **header**: Custom headers that are expected as part of the request
   * - **path**: Used together with Path Templating, where the parameter value is actually part of the operation's URL
   * - **cookie**: Used to pass a specific cookie value to the API
   * 
   * @example "query"
   * @example "path"
   * @example "header"
   * @example "cookie"
   */
  in: "query" | "header" | "path" | "cookie"
  
  /** 
   * A brief description of the parameter. This could contain examples of use. 
   * CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "User ID to retrieve"
   * @example "Number of items to return"
   */
  description?: string
  
  /** 
   * Determines whether this parameter is mandatory. If the parameter location is "path", 
   * this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be 
   * included and its default value is false.
   * 
   * @example true
   * @example false
   */
  required?: boolean
  
  /** 
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
   * 
   * @example true
   * @example false
   */
  deprecated?: boolean
  
  /** 
   * Sets the ability to pass empty-valued parameters. This is valid only for query 
   * parameters and allows sending a parameter with an empty value. Default value is false.
   * 
   * @example true
   * @example false
   */
  allowEmptyValue?: boolean
  
  /** 
   * Describes how the parameter value will be serialized depending on the type of the parameter value. 
   * Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
   * 
   * @example "form"
   * @example "simple"
   * @example "matrix"
   * @example "label"
   * @example "spaceDelimited"
   * @example "pipeDelimited"
   * @example "deepObject"
   */
  style?: "matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject"
  
  /** 
   * When this is true, parameter values of type array or object generate separate parameters 
   * for each value of the array or key-value pair of the map. For other types of parameters 
   * this property has no effect. When style is form, the default value is true. 
   * For all other styles, the default value is false.
   * 
   * @example true
   * @example false
   */
  explode?: boolean
  
  /** 
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by 
   * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. This property only 
   * applies to parameters with an in value of query. The default value is false.
   * 
   * @example true
   * @example false
   */
  allowReserved?: boolean
  
  /** 
   * The schema defining the type used for the parameter.
   * 
   * @example { type: "string" }
   * @example { type: "integer", minimum: 1, maximum: 100 }
   */
  schema?: Schema
  
  /** 
   * Example of the media type. The example SHOULD match the specified schema and encoding 
   * properties if present. The example object is mutually exclusive of the examples object.
   * 
   * @example "example-value"
   * @example 42
   */
  example?: unknown
  
  /** 
   * Examples of the media type. Each example SHOULD contain a value in the correct format 
   * as specified in the parameter encoding. The examples object is mutually exclusive of 
   * the example object.
   * 
   * @example { "user1": { summary: "A user example", value: "user123" } }
   */
  examples?: Record<string, Example | Reference>
  
  /** 
   * A map containing the representations for the parameter. The key is the media type 
   * and the value describes it. The map MUST only contain one entry.
   * 
   * @example { "application/json": { schema: { type: "object" } } }
   */
  content?: Record<string, MediaType>
}

/**
 * -----
 * Request Body Object
 * -----
 *
 * Describes a single request body.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#request-body-object | OpenAPI 3.0.0 Request Body} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `description` - Optional A brief description of the request body
 * @key `content` - Required The content of the request body
 * @key `required` - Optional Determines if the request body is required in the request
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `content` field is required. The `requestBody` is only supported in HTTP methods where the HTTP 1.1 specification has explicitly defined semantics for request bodies.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple request body):
 * ```ts
 * const requestBody: RequestBody = {
 *   description: "User data",
 *   content: {
 *     "application/json": {
 *       schema: { $ref: "#/components/schemas/User" }
 *     }
 *   }
 * };
 * ```
 */
export interface RequestBody extends Extension {
  /** 
   * A brief description of the request body. This could contain examples of use. 
   * CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "User data to create"
   * @example "Pet information"
   */
  description?: string
  
  /** 
   * The content of the request body. The key is a media type or media type range 
   * and the value describes it. For requests that match multiple keys, only the 
   * most specific key is applicable.
   * 
   * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
   */
  content: Record<string, MediaType>
  
  /** 
   * Determines if the request body is required in the request. Defaults to false.
   * 
   * @default false
   * @example true
   */
  required?: boolean
}

/**
 * -----
 * Media Type Object
 * -----
 *
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object | OpenAPI 3.0.0 Media Type} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `schema` - Optional The schema defining the type used for the request body
 * @key `example` - Optional Example of the media type
 * @key `examples` - Optional Examples of the media type
 * @key `encoding` - Optional A map between a property name and its encoding information
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `example` object is mutually exclusive of the `examples` object.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple media type):
 * ```ts
 * const mediaType: MediaType = {
 *   schema: { $ref: "#/components/schemas/User" }
 * };
 * ```
 */
export interface MediaType extends Extension {
  /** 
   * The schema defining the type used for the request body.
   * 
   * @example { $ref: "#/components/schemas/User" }
   * @example { type: "object", properties: { name: { type: "string" } } }
   */
  schema?: Schema | Reference
  
  /** 
   * Example of the media type. The example object SHOULD be in the correct format 
   * as specified by the media type. The example object is mutually exclusive of 
   * the examples object.
   * 
   * @example { name: "John Doe", email: "john@example.com" }
   */
  example?: unknown
  
  /** 
   * Examples of the media type. Each example object SHOULD match the media type 
   * and specified schema if present. The examples object is mutually exclusive of 
   * the example object.
   * 
   * @example { "user1": { summary: "A user example", value: { name: "John" } } }
   */
  examples?: Record<string, Example | Reference>
  
  /** 
   * A map between a property name and its encoding information. The key, being the 
   * property name, MUST exist in the schema as a property. The encoding object SHALL 
   * only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
   * 
   * @example { "profileImage": { contentType: "image/png" } }
   */
  encoding?: Record<string, Encoding>
}

/**
 * -----
 * Encoding Object
 * -----
 *
 * A single encoding definition applied to a single schema property.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object | OpenAPI 3.0.0 Encoding} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `contentType` - Optional The Content-Type for encoding a specific property
 * @key `headers` - Optional A map allowing additional information to be provided as headers
 * @key `style` - Optional Describes how a specific property value will be serialized
 * @key `explode` - Optional When this is true, property values generate separate parameters
 * @key `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * This attribute is only applicable to multipart and application/x-www-form-urlencoded request bodies.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple encoding):
 * ```ts
 * const encoding: Encoding = {
 *   contentType: "image/png"
 * };
 * ```
 */
export interface Encoding extends Extension {
  /** 
   * The Content-Type for encoding a specific property. Default value depends on the property type.
   * 
   * @example "image/png"
   * @example "application/json"
   * @example "text/plain"
   */
  contentType?: string
  
  /** 
   * A map allowing additional information to be provided as headers, for example 
   * Content-Disposition. Content-Type is described separately and SHALL be ignored in this section.
   * 
   * @example { "Content-Disposition": { schema: { type: "string" } } }
   */
  headers?: Record<string, Header | Reference>
  
  /** 
   * Describes how a specific property value will be serialized depending on its type. 
   * See Parameter Object for details on the style property. The behavior follows the 
   * same values as query parameters, including default values.
   * 
   * @example "form"
   * @example "simple"
   */
  style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject"
  
  /** 
   * When this is true, property values of type array or object generate separate parameters 
   * for each value of the array, or key-value-pair of the map. For other types of properties 
   * this property has no effect. When style is form, the default value is true. 
   * For all other styles, the default value is false.
   * 
   * @example true
   * @example false
   */
  explode?: boolean
  
  /** 
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by 
   * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false.
   * 
   * @example true
   * @example false
   */
  allowReserved?: boolean
}

/**
 * -----
 * Response Object
 * -----
 *
 * Describes a single response from an API Operation, including design-time, static 
 * links to operations based on the response.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object | OpenAPI 3.0.0 Response} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `description` - Required A short description of the response
 * @key `headers` - Optional Maps a header name to its definition
 * @key `content` - Optional A map containing descriptions of potential response payloads
 * @key `links` - Optional A map of operations links that can be followed from the response
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `description` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple response):
 * ```ts
 * const response: Response = {
 *   description: "A list of users",
 *   content: {
 *     "application/json": {
 *       schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *     }
 *   }
 * };
 * ```
 */
export interface Response extends Extension {
  /** 
   * A short description of the response. CommonMark syntax MAY be used for rich text representation.
   * This field is required.
   * 
   * @example "User successfully retrieved"
   * @example "Bad request - invalid input parameters"
   * @example "Internal server error"
   */
  description: string
  
  /** 
   * Maps a header name to its definition. RFC7230 states header names are case insensitive. 
   * If a response header is defined with the name "Content-Type", it SHALL be ignored.
   * 
   * @example { "X-RateLimit-Limit": { schema: { type: "integer" } } }
   */
  headers?: Record<string, Header | Reference>
  
  /** 
   * A map containing descriptions of potential response payloads. The key is a media type 
   * or media type range and the value describes it. For responses that match multiple keys, 
   * only the most specific key is applicable.
   * 
   * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
   */
  content?: Record<string, MediaType>
  
  /** 
   * A map of operations links that can be followed from the response. The key of the map 
   * is a short name for the link, following the naming constraints of the names for Component Objects.
   * 
   * @example { "GetUserByUserId": { operationId: "getUserById", parameters: { userId: "$response.body#/id" } } }
   */
  links?: Record<string, Link | Reference>
}

/**
 * -----
 * Header Object
 * -----
 *
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * 1. name MUST NOT be specified, it is given in the corresponding headers map.
 * 2. in MUST NOT be specified, it is implicitly in header.
 * 3. All traits that are affected by the location MUST be applicable to a location of header.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object | OpenAPI 3.0.0 Header} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple header):
 * ```ts
 * const header: Header = {
 *   description: "The number of allowed requests in the current period",
 *   schema: { type: "integer" }
 * };
 * ```
 */
export interface Header extends Extension {
  /** 
   * A brief description of the header. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "Rate limit for the current period"
   * @example "Content type of the response"
   */
  description?: string
  
  /** 
   * Determines whether this header is mandatory. The property MAY be included and its default value is false.
   * 
   * @example true
   * @example false
   */
  required?: boolean
  
  /** 
   * Specifies that a header is deprecated and SHOULD be transitioned out of usage.
   * 
   * @example true
   * @example false
   */
  deprecated?: boolean
  
  /** 
   * Sets the ability to pass empty-valued headers. This is valid only for headers 
   * and allows sending a header with an empty value. Default value is false.
   * 
   * @example true
   * @example false
   */
  allowEmptyValue?: boolean
  
  /** 
   * Describes how the header value will be serialized. The default value is simple.
   * 
   * @example "simple"
   */
  style?: "simple"
  
  /** 
   * When this is true, header values of type array or object generate separate headers 
   * for each value of the array or key-value pair of the map. For other types of headers 
   * this property has no effect. The default value is false.
   * 
   * @example true
   * @example false
   */
  explode?: boolean
  
  /** 
   * The schema defining the type used for the header.
   * 
   * @example { type: "integer" }
   * @example { type: "string" }
   */
  schema?: Schema | Reference
  
  /** 
   * Example of the media type. The example SHOULD match the specified schema and encoding 
   * properties if present. The example object is mutually exclusive of the examples object.
   * 
   * @example "example-value"
   * @example 42
   */
  example?: unknown
  
  /** 
   * Examples of the media type. Each example SHOULD contain a value in the correct format 
   * as specified in the header encoding. The examples object is mutually exclusive of 
   * the example object.
   * 
   * @example { "header1": { summary: "A header example", value: "value123" } }
   */
  examples?: Record<string, Example | Reference>
  
  /** 
   * A map containing the representations for the header. The key is the media type 
   * and the value describes it. The map MUST only contain one entry.
   * 
   * @example { "application/json": { schema: { type: "object" } } }
   */
  content?: Record<string, MediaType>
}

/**
 * -----
 * Callback Object
 * -----
 *
 * A map of possible out-of band callbacks related to the parent operation.
 * Each value in the map is a Path Item Object that describes a set of requests 
 * that may be initiated by the API provider and the expected responses.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#callback-object | OpenAPI 3.0.0 Callback} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple callback):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/callbackUrl}": {
 *     post: {
 *       requestBody: {
 *         content: {
 *           "application/json": {
 *             schema: { $ref: "#/components/schemas/SomePayload" }
 *           }
 *         }
 *       },
 *       responses: {
 *         "200": {
 *           description: "webhook successfully processed"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Callback = Record<string, PathItemObject>

/**
 * -----
 * Link Object
 * -----
 *
 * The Link object represents a possible design-time link for a response.
 * The presence of a link does not guarantee the caller's ability to successfully invoke it, 
 * rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object | OpenAPI 3.0.0 Link} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `operationRef` - Optional A relative or absolute reference to an OAS operation
 * @key `operationId` - Optional The name of an existing, resolvable OAS operation
 * @key `parameters` - Optional A map representing parameters to pass to an operation
 * @key `requestBody` - Optional A literal value or expression to use as a request body
 * @key `description` - Optional A description of the link
 * @key `server` - Optional A server object to be used by the target operation
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * A linked operation MUST be identified using either an operationRef or operationId.
 *
 * -----
 * Examples
 * -----
 *
 * @example (link with operationId):
 * ```ts
 * const link: Link = {
 *   operationId: "getUserById",
 *   parameters: {
 *     userId: "$response.body#/id"
 *   }
 * };
 * ```
 */
export interface Link extends Extension {
  /** 
   * A relative or absolute reference to an OAS operation. This field is mutually 
   * exclusive of the operationId field, and MUST point to an Operation Object.
   * 
   * @example "#/paths/~12.0~1repositories~1{username}/get"
   * @example "https://na2.gigantic-server.com/#/paths/~12.0~1repositories~1{username}/get"
   */
  operationRef?: string
  
  /** 
   * The name of an existing, resolvable OAS operation, as defined with a unique operationId. 
   * This field is mutually exclusive of the operationRef field.
   * 
   * @example "getUserById"
   * @example "createPet"
   */
  operationId?: string
  
  /** 
   * A map representing parameters to pass to an operation as specified with operationId 
   * or identified via operationRef. The key is the parameter name to be used, whereas 
   * the value can be a constant or an expression to be evaluated and passed to the linked operation.
   * 
   * @example { userId: "$response.body#/id" }
   * @example { limit: 10 }
   */
  parameters?: Record<string, unknown>
  
  /** 
   * A literal value or expression to use as a request body when calling the target operation.
   * 
   * @example { name: "John Doe" }
   * @example "$request.body#/user"
   */
  requestBody?: unknown
  
  /** 
   * A description of the link. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "Get user by ID"
   * @example "Create a new pet"
   */
  description?: string
  
  /** 
   * A server object to be used by the target operation.
   * 
   * @example { url: "https://api.example.com/v1" }
   */
  server?: Server
}

/**
 * -----
 * Example Object
 * -----
 *
 * In all cases, the example value is expected to be compatible with the type schema 
 * of its associated value. Tooling implementations MAY choose to validate compatibility 
 * automatically, and reject the example value(s) if incompatible.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object | OpenAPI 3.0.0 Example} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `summary` - Optional Short description for the example
 * @key `description` - Optional Long description for the example
 * @key `value` - Optional Embedded literal example
 * @key `externalValue` - Optional A URL that points to the literal example
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `value` field and `externalValue` field are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple example):
 * ```ts
 * const example: Example = {
 *   summary: "A user example",
 *   value: { name: "John Doe", email: "john@example.com" }
 * };
 * ```
 */
export interface Example extends Extension {
  /** 
   * Short description for the example.
   * 
   * @example "A user example"
   * @example "An error response"
   */
  summary?: string
  
  /** 
   * Long description for the example. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "A complete user object with all fields populated"
   * @example "An error response when the user is not found"
   */
  description?: string
  
  /** 
   * Embedded literal example. The value field and externalValue field are mutually exclusive. 
   * To represent examples of media types that cannot naturally represented in JSON or YAML, 
   * use a string value to contain the example, escaping where necessary.
   * 
   * @example { name: "John Doe", email: "john@example.com" }
   * @example "example string value"
   */
  value?: unknown
  
  /** 
   * A URL that points to the literal example. This provides the capability to reference 
   * examples that cannot easily be included in JSON or YAML documents. The value field 
   * and externalValue field are mutually exclusive.
   * 
   * @example "https://example.com/examples/user-example.json"
   * @example "https://example.com/examples/error-example.xml"
   */
  externalValue?: string
}
