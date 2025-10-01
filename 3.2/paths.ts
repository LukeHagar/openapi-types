import type { Callback, Example, MediaType, RequestBody } from "./components";
import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";
import type { Reference } from "./references";
import type { Schema } from "./schema";
import type { SecurityRequirement } from "./security";
import type { Server } from "./servers";
import type { ResponsesMap } from "./status";

/**
 * -----
 * Path Item Object
 * -----
 *
 * Describes the operations available on a single path. A Path Item MAY be empty,
 * due to ACL constraints. The path itself is still exposed to the documentation
 * viewer but they will not know which operations and parameters are available.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `summary` - Optional An optional, string summary, intended to apply to all operations in this path
 * @property `description` - Optional An optional, string description, intended to apply to all operations in this path
 * @property `get` - Optional A definition of a GET operation on this path
 * @property `put` - Optional A definition of a PUT operation on this path
 * @property `post` - Optional A definition of a POST operation on this path
 * @property `delete` - Optional A definition of a DELETE operation on this path
 * @property `options` - Optional A definition of an OPTIONS operation on this path
 * @property `head` - Optional A definition of a HEAD operation on this path
 * @property `patch` - Optional A definition of a PATCH operation on this path
 * @property `trace` - Optional A definition of a TRACE operation on this path
 * @property `servers` - Optional An alternative server array to service all operations in this path
 * @property `parameters` - Optional A list of parameters that are applicable for all the operations described under this path
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional. The HTTP methods are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple path item):
 * ```ts
 * const pathItem: PathItem = {
 *   "get": {
 *     "summary": "List all pets",
 *     "responses": {
 *       "200": {
 *         "description": "A list of pets"
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface PathItem extends Extension {
  /**
   * An optional, string summary, intended to apply to all operations in this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - summary} |
   *
   * @property `summary` - Optional An optional, string summary, intended to apply to all operations in this path
   *
   * @example "Pet operations"
   * @example "User management"
   */
  summary?: string;

  /**
   * An optional, string description, intended to apply to all operations in this path.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - description} |
   *
   * @property `description` - Optional An optional, string description, intended to apply to all operations in this path
   *
   * @example "Operations related to pet management"
   * @example "All user-related operations"
   */
  description?: string;

  /**
   * A definition of a GET operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - get} |
   *
   * @property `get` - Optional A definition of a GET operation on this path
   */
  get?: Operation;

  /**
   * A definition of a PUT operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - put} |
   *
   * @property `put` - Optional A definition of a PUT operation on this path
   */
  put?: Operation;

  /**
   * A definition of a POST operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - post} |
   *
   * @property `post` - Optional A definition of a POST operation on this path
   */
  post?: Operation;

  /**
   * A definition of a DELETE operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - delete} |
   *
   * @property `delete` - Optional A definition of a DELETE operation on this path
   */
  delete?: Operation;

  /**
   * A definition of an OPTIONS operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - options} |
   *
   * @property `options` - Optional A definition of an OPTIONS operation on this path
   */
  options?: Operation;

  /**
   * A definition of a HEAD operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - head} |
   *
   * @property `head` - Optional A definition of a HEAD operation on this path
   */
  head?: Operation;

  /**
   * A definition of a PATCH operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - patch} |
   *
   * @property `patch` - Optional A definition of a PATCH operation on this path
   */
  patch?: Operation;

  /**
   * A definition of a TRACE operation on this path.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - trace} |
   *
   * @property `trace` - Optional A definition of a TRACE operation on this path
   */
  trace?: Operation;

  /**
   * An alternative server array to service all operations in this path.
   * If an alternative server object is specified at the Path Item Object level,
   * it will override the server object defined at the root level.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - servers} |
   *
   * @property `servers` - Optional An alternative server array to service all operations in this path
   */
  servers?: Server[];

  /**
   * A list of parameters that are applicable for all the operations described under this path.
   * These parameters can be overridden at the operation level, but cannot be removed there.
   * The list MUST NOT include duplicated parameters. A unique parameter is defined by a
   * combination of a name and location.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#path-item-object | OpenAPI 3.2.0 Path Item Object - parameters} |
   *
   * @property `parameters` - Optional A list of parameters that are applicable for all the operations described under this path
   */
  parameters?: Parameter[];
}

/**
 * -----
 * Operation Object
 * -----
 *
 * Describes a single API operation on a path.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `tags` - Optional A list of tags for API documentation control
 * @property `summary` - Optional A short summary of what the operation does
 * @property `description` - Optional A verbose explanation of the operation behavior
 * @property `externalDocs` - Optional Additional external documentation for this operation
 * @property `operationId` - Optional Unique string used to identify the operation
 * @property `parameters` - Optional A list of parameters that are applicable for this operation
 * @property `requestBody` - Optional The request body applicable for this operation
 * @property `responses` - Optional The list of possible responses as they are returned from executing this operation
 * @property `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
 * @property `deprecated` - Optional Declares this operation to be deprecated
 * @property `security` - Optional A declaration of which security mechanisms can be used for this operation
 * @property `servers` - Optional An alternative server array to service this operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional. The `responses` field is required for all operations.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic operation):
 * ```ts
 * const operation: Operation = {
 *   "summary": "List all pets",
 *   "responses": {
 *     "200": {
 *       "description": "A list of pets"
 *     }
 *   }
 * };
 * ```
 */
export interface Operation extends Extension {
  /**
   * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - tags} |
   *
   * @property `tags` - Optional A list of tags for API documentation control
   *
   * @example ["pets", "list"]
   * @example ["users", "authentication"]
   */
  tags?: string[];

  /**
   * A short summary of what the operation does.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - summary} |
   *
   * @property `summary` - Optional A short summary of what the operation does
   *
   * @example "List all pets"
   * @example "Create a new user"
   */
  summary?: string;

  /**
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - description} |
   *
   * @property `description` - Optional A verbose explanation of the operation behavior
   *
   * @example "Returns a list of all pets in the system"
   * @example "Creates a new user account with the provided information"
   */
  description?: string;

  /**
   * Additional external documentation for this operation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - externalDocs} |
   *
   * @property `externalDocs` - Optional Additional external documentation for this operation
   */
  externalDocs?: ExternalDocumentation;

  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - operationId} |
   *
   * @property `operationId` - Optional Unique string used to identify the operation
   *
   * @example "listPets"
   * @example "createUser"
   */
  operationId?: string;

  /**
   * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item level, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - parameters} |
   *
   * @property `parameters` - Optional A list of parameters that are applicable for this operation
   */
  parameters?: Parameter[];

  /**
   * The request body applicable for this operation. The requestBody is only supported in HTTP methods where the HTTP 1.1 specification [RFC7231] has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, requestBody SHALL be ignored by consumers.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - requestBody} |
   *
   * @property `requestBody` - Optional The request body applicable for this operation
   */
  requestBody?: RequestBody;

  /**
   * The list of possible responses as they are returned from executing this operation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - responses} |
   *
   * @property `responses` - Optional The list of possible responses as they are returned from executing this operation
   */
  responses?: ResponsesMap;

  /**
   * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by the API provider and the expected responses.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - callbacks} |
   *
   * @property `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
   */
  callbacks?: Record<string, Callback | Reference>;

  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - deprecated} |
   *
   * @property `deprecated` - Optional Declares this operation to be deprecated
   *
   * @example true
   * @example false
   */
  deprecated?: boolean;

  /**
   * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. This definition overrides any declared top-level security.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - security} |
   *
   * @property `security` - Optional A declaration of which security mechanisms can be used for this operation
   */
  security?: SecurityRequirement[];

  /**
   * An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#operation-object | OpenAPI 3.2.0 Operation Object - servers} |
   *
   * @property `servers` - Optional An alternative server array to service this operation
   */
  servers?: Server[];
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
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The name of the parameter
 * @property `in` - Required The location of the parameter
 * @property `description` - Optional A brief description of the parameter
 * @property `required` - Optional Determines whether this parameter is mandatory
 * @property `deprecated` - Optional Specifies that a parameter is deprecated
 * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued parameters
 * @property `style` - Optional Describes how the parameter value will be serialized
 * @property `explode` - Optional When this is true, parameter values generate separate parameters
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @property `schema` - Optional The schema defining the type used for the parameter
 * @property `example` - Optional Example of the media type
 * @property `examples` - Optional Examples of the media type
 * @property `content` - Optional A map containing the representations for the parameter
 * @property `x-${string}` - Specification Extensions
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
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - name} |
   *
   * @property `name` - Required The name of the parameter
   *
   * @example "id"
   * @example "limit"
   * @example "user"
   */
  name: string;

  /**
   * The location of the parameter. Possible values are "query", "header", "path" or "cookie".
   *
   * - **query**: Parameters that are appended to the URL
   * - **header**: Custom headers that are expected as part of the request
   * - **path**: Used together with Path Templating, where the parameter value is actually part of the operation's URL
   * - **cookie**: Used to pass a specific cookie value to the API
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - in} |
   *
   * @property `in` - Required The location of the parameter
   *
   * @example "query"
   * @example "path"
   * @example "header"
   * @example "cookie"
   */
  in: "query" | "header" | "path" | "cookie";

  /**
   * A brief description of the parameter. This could contain examples of use.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - description} |
   *
   * @property `description` - Optional A brief description of the parameter
   *
   * @example "User ID to retrieve"
   * @example "Number of items to return"
   */
  description?: string;

  /**
   * Determines whether this parameter is mandatory. If the parameter location is "path",
   * this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be
   * included and its default value is false.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - required} |
   *
   * @property `required` - Optional Determines whether this parameter is mandatory
   *
   * @example true
   * @example false
   */
  required?: boolean;

  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - deprecated} |
   *
   * @property `deprecated` - Optional Specifies that a parameter is deprecated and SHOULD be transitioned out of usage
   *
   * @example true
   * @example false
   */
  deprecated?: boolean;

  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for query
   * parameters and allows sending a parameter with an empty value. Default value is false.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - allowEmptyValue} |
   *
   * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued parameters
   *
   * @example true
   * @example false
   */
  allowEmptyValue?: boolean;

  /**
   * Describes how the parameter value will be serialized depending on the type of the parameter value.
   * Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - style} |
   *
   * @property `style` - Optional Describes how the parameter value will be serialized
   *
   * @example "form"
   * @example "simple"
   * @example "matrix"
   * @example "label"
   * @example "spaceDelimited"
   * @example "pipeDelimited"
   * @example "deepObject"
   */
  style?:
    | "matrix"
    | "label"
    | "form"
    | "simple"
    | "spaceDelimited"
    | "pipeDelimited"
    | "deepObject";

  /**
   * When this is true, parameter values of type array or object generate separate parameters
   * for each value of the array or key-value pair of the map. For other types of parameters
   * this property has no effect. When style is form, the default value is true.
   * For all other styles, the default value is false.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - explode} |
   *
   * @property `explode` - Optional When this is true, parameter values of type array or object generate separate parameters
   *
   * @example true
   * @example false
   */
  explode?: boolean;

  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by
   * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. This property only
   * applies to parameters with an in value of query. The default value is false.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - allowReserved} |
   *
   * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
   *
   * @example true
   * @example false
   */
  allowReserved?: boolean;

  /**
   * The schema defining the type used for the parameter.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - schema} |
   *
   * @property `schema` - Optional The schema defining the type used for the parameter
   *
   * @example { type: "string" }
   * @example { type: "integer", minimum: 1, maximum: 100 }
   */
  schema?: Schema;

  /**
   * Example of the media type. The example SHOULD match the specified schema and encoding
   * properties if present. The example object is mutually exclusive of the examples object.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - example} |
   *
   * @property `example` - Optional Example of the media type
   *
   * @example "example-value"
   * @example 42
   */
  example?: unknown;

  /**
   * Examples of the media type. Each example SHOULD contain a value in the correct format
   * as specified in the parameter encoding. The examples object is mutually exclusive of
   * the example object.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - examples} |
   *
   * @property `examples` - Optional Examples of the media type
   *
   * @example { "user1": { summary: "A user example", value: "user123" } }
   */
  examples?: Record<string, Example | Reference>;

  /**
   * A map containing the representations for the parameter. The key is the media type
   * and the value describes it. The map MUST only contain one entry.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#parameter-object | OpenAPI 3.2.0 Parameter Object - content} |
   *
   * @property `content` - Optional A map containing the representations for the parameter
   *
   * @example { "application/json": { schema: { type: "object" } } }
   */
  content?: Record<string, MediaType>;
}

/**
 * -----
 * Paths Object
 * -----
 *
 * Holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the Server Object in order to construct
 * the full URL. The Paths may be empty, due to ACL constraints.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#paths-object | OpenAPI 3.2.0 Paths Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple paths):
 * ```ts
 * const paths: Paths = {
 *   "/pets": {
 *     "get": {
 *       "summary": "List all pets",
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Paths = Record<string, PathItem | Reference>;
