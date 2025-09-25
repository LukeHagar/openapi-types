import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";
import type { Reference } from "./references";
import type { Schema } from "./schema";
import type { SecurityRequirement } from "./security";
import type { Server } from "./servers";
import type { ResponsesMap } from "./status";

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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#paths-object | OpenAPI 3.1.1 Paths Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#paths-object | OpenAPI 3.1.0 Paths Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `/{path}` - A relative path to an individual endpoint
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The path keys must start with `/` and can contain path parameters in `{brackets}`.
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
export type Paths = Record<string, PathItemObject | Reference>;

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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#path-item-object | OpenAPI 3.1.1 Path Item Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#path-item-object | OpenAPI 3.1.0 Path Item Object} |
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
 * const pathItem: PathItemObject = {
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
export interface PathItemObject extends Extension {
	/**
	 * An optional, string summary, intended to apply to all operations in this path.
	 *
	 * @example "Pet operations"
	 * @example "User management"
	 */
	summary?: string;

	/**
	 * An optional, string description, intended to apply to all operations in this path.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "Operations related to pet management"
	 * @example "All user-related operations"
	 */
	description?: string;

	/**
	 * A definition of a GET operation on this path.
	 */
	get?: Operation;

	/**
	 * A definition of a PUT operation on this path.
	 */
	put?: Operation;

	/**
	 * A definition of a POST operation on this path.
	 */
	post?: Operation;

	/**
	 * A definition of a DELETE operation on this path.
	 */
	delete?: Operation;

	/**
	 * A definition of an OPTIONS operation on this path.
	 */
	options?: Operation;

	/**
	 * A definition of a HEAD operation on this path.
	 */
	head?: Operation;

	/**
	 * A definition of a PATCH operation on this path.
	 */
	patch?: Operation;

	/**
	 * A definition of a TRACE operation on this path.
	 */
	trace?: Operation;

	/**
	 * An alternative server array to service all operations in this path.
	 *
	 * @example [{ url: "https://api.example.com/v1" }]
	 */
	servers?: Server[];

	/**
	 * A list of parameters that are applicable for all the operations described under
	 * this path. These parameters can be overridden at the operation level, but cannot
	 * be removed there. The list MUST NOT include duplicated parameters. A unique
	 * parameter is defined by a combination of a name and location.
	 *
	 * @example [{ name: "id", in: "path", required: true, schema: { type: "string" } }]
	 */
	parameters?: (Parameter | Reference)[];
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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#operation-object | OpenAPI 3.1.1 Operation Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#operation-object | OpenAPI 3.1.0 Operation Object} |
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
 * @property `responses` - Required The list of possible responses as they are returned from executing this operation
 * @property `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
 * @property `deprecated` - Optional Declares this operation to be deprecated
 * @property `security` - Optional A declaration of which security mechanisms can be used for this operation
 * @property `servers` - Optional An alternative server array to service this operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `responses` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple operation):
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
	 * A list of tags for API documentation control. Tags can be used for logical
	 * grouping of operations by resources or any other qualifier.
	 *
	 * @example ["pets", "list"]
	 * @example ["users", "authentication"]
	 */
	tags?: string[];

	/**
	 * A short summary of what the operation does.
	 *
	 * @example "List all pets"
	 * @example "Create a new user"
	 */
	summary?: string;

	/**
	 * A verbose explanation of the operation behavior. CommonMark syntax MAY be used
	 * for rich text representation.
	 *
	 * @example "Returns all pets from the system that the user has access to"
	 * @example "Creates a new user account with the provided information"
	 */
	description?: string;

	/**
	 * Additional external documentation for this operation.
	 *
	 * @example { description: "Find out more about pet operations", url: "https://example.com/docs/pets" }
	 */
	externalDocs?: ExternalDocumentation;

	/**
	 * Unique string used to identify the operation. The id MUST be unique among all
	 * operations described in the API. The operationId value is case-sensitive.
	 *
	 * @example "listPets"
	 * @example "createUser"
	 */
	operationId?: string;

	/**
	 * A list of parameters that are applicable for this operation. If a parameter
	 * is already defined at the Path Item, the new definition will override it but
	 * can never remove it. The list MUST NOT include duplicated parameters.
	 *
	 * @example [{ name: "limit", in: "query", schema: { type: "integer" } }]
	 */
	parameters?: (Parameter | Reference)[];

	/**
	 * The request body applicable for this operation. The requestBody is only supported
	 * in HTTP methods where the HTTP 1.1 specification RFC7231 has explicitly defined
	 * semantics for request bodies.
	 *
	 * @example { description: "Pet to add to the store", content: { "application/json": { schema: { $ref: "#/components/schemas/Pet" } } } }
	 */
	requestBody?: RequestBody | Reference;

	/**
	 * The list of possible responses as they are returned from executing this operation.
	 * This field is required.
	 *
	 * @example { "200": { description: "A list of pets" }, "default": { description: "Unexpected error" } }
	 */
	responses: ResponsesMap;

	/**
	 * A map of possible out-of band callbacks related to the parent operation. The key
	 * is a unique identifier for the Callback Object. Each value in the map is a
	 * Callback Object that describes a request that may be initiated by the API
	 * provider and the expected responses.
	 *
	 * @example { "myCallback": { "{$request.body#/callbackUrl}": { post: { requestBody: { description: "Callback payload" } } } } }
	 */
	callbacks?: Record<string, Callback | Reference>;

	/**
	 * Declares this operation to be deprecated. Consumers SHOULD refrain from using
	 * the declared operation. Default value is false.
	 *
	 * @example true
	 * @example false
	 * @default false
	 */
	deprecated?: boolean;

	/**
	 * A declaration of which security mechanisms can be used for this operation.
	 * The list of values includes alternative security requirement objects that can
	 * be used. Only one of the security requirement objects need to be satisfied
	 * to authorize a request.
	 *
	 * @example [{ "petstore_auth": ["write:pets", "read:pets"] }]
	 */
	security?: SecurityRequirement[];

	/**
	 * An alternative server array to service this operation. If an alternative
	 * server object is specified at the Path Item Object level, it will be
	 * overridden by this value.
	 *
	 * @example [{ url: "https://api.example.com/v1" }]
	 */
	servers?: Server[];
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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#example-object | OpenAPI 3.1.1 Example Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#example-object | OpenAPI 3.1.0 Example Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `summary` - Optional Short description for the example
 * @property `description` - Optional Long description for the example
 * @property `value` - Optional Embedded literal example
 * @property `externalValue` - Optional A URI that points to the literal example
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `value` and `externalValue` fields are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (embedded example):
 * ```ts
 * const example: Example = {
 *   summary: "A user example",
 *   value: {
 *     id: 1,
 *     name: "John Doe",
 *     email: "john@example.com"
 *   }
 * };
 * ```
 *
 * @example (external example):
 * ```ts
 * const example: Example = {
 *   summary: "External user example",
 *   externalValue: "https://example.com/examples/user-example.json"
 * };
 * ```
 */
export interface Example extends Extension {
	/**
	 * Short description for the example.
	 *
	 * @example "A user example"
	 * @example "Error response example"
	 */
	summary?: string;

	/**
	 * Long description for the example. CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "This example shows a typical user object with all required fields"
	 * @example "This example demonstrates an error response when validation fails"
	 */
	description?: string;

	/**
	 * Embedded literal example. The value field and externalValue field are mutually exclusive.
	 * To represent examples of media types that cannot naturally represented in JSON or YAML,
	 * use a string value to contain the example, escaping where necessary.
	 *
	 * @example { id: 1, name: "John Doe" }
	 * @example "example string"
	 * @example 42
	 */
	value?: unknown;

	/**
	 * A URI that points to the literal example. This provides the capability to reference
	 * examples that cannot easily be included in JSON or YAML documents. The value field
	 * and externalValue field are mutually exclusive.
	 *
	 * @example "https://example.com/examples/user-example.json"
	 * @example "https://example.com/examples/error-example.xml"
	 */
	externalValue?: string;
}

/**
 * -----
 * Parameter Object
 * -----
 *
 * Describes a single operation parameter. A unique parameter is defined by a combination
 * of a name and location. The parameter name is case sensitive.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#parameter-object | OpenAPI 3.1.1 Parameter Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#parameter-object | OpenAPI 3.1.0 Parameter Object} |
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
 * @property `explode` - Optional When this is true, parameter values of type array or object generate separate parameters for each value
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @property `schema` - Optional The schema defining the type used for the parameter
 * @property `example` - Optional Example of the parameter's potential value
 * @property `examples` - Optional Examples of the parameter's potential value
 * @property `content` - Optional A map containing the representations for the parameter
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `schema` and `content` fields are mutually exclusive. For path parameters, `required` must be true.
 *
 * -----
 * Examples
 * -----
 *
 * @example (query parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "limit",
 *   in: "query",
 *   description: "Maximum number of items to return",
 *   required: false,
 *   schema: { type: "integer", minimum: 1, maximum: 100 }
 * };
 * ```
 *
 * @example (path parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "userId",
 *   in: "path",
 *   description: "The user ID",
 *   required: true,
 *   schema: { type: "string" }
 * };
 * ```
 */
export interface Parameter extends Extension {
	/**
	 * The name of the parameter. Parameter names are case sensitive.
	 *
	 * @example "userId"
	 * @example "limit"
	 * @example "X-API-Key"
	 */
	name: string;

	/**
	 * The location of the parameter. Possible values are "query", "header", "path" or "cookie".
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
	 * @example "The user ID to retrieve"
	 * @example "Maximum number of items to return"
	 */
	description?: string;

	/**
	 * Determines whether this parameter is mandatory. If the parameter location is "path",
	 * this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be
	 * included and its default value is false.
	 *
	 * @example true
	 * @example false
	 */
	required?: boolean;

	/**
	 * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
	 * Default value is false.
	 *
	 * @example true
	 * @example false
	 */
	deprecated?: boolean;

	/**
	 * Sets the ability to pass empty-valued parameters. This is valid only for query
	 * parameters and allows sending a parameter with an empty value. Default value is false.
	 *
	 * @example true
	 * @example false
	 */
	allowEmptyValue?: boolean;

	/**
	 * Describes how the parameter value will be serialized depending on the type of the
	 * parameter value. Default values (based on value of in): for query - form; for path - simple;
	 * for header - simple; for cookie - form.
	 *
	 * @example "simple"
	 * @example "form"
	 * @example "matrix"
	 * @example "label"
	 * @example "spaceDelimited"
	 * @example "pipeDelimited"
	 * @example "deepObject"
	 */
	style?: string;

	/**
	 * When this is true, parameter values of type array or object generate separate parameters
	 * for each value of the array or key-value pair of the map. For other types of parameters
	 * this property has no effect. When style is form, the default value is true. For all other
	 * styles, the default value is false.
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
	 * @example true
	 * @example false
	 */
	allowReserved?: boolean;

	/**
	 * The schema defining the type used for the parameter. This field is mutually exclusive
	 * with the content field.
	 *
	 * @example { type: "string" }
	 * @example { type: "integer", minimum: 1 }
	 */
	schema?: Schema;

	/**
	 * Example of the parameter's potential value. The example SHOULD match the specified
	 * schema and encoding properties if present. The example field is mutually exclusive
	 * of the examples field. Furthermore, if referencing a schema that contains an example,
	 * the example value SHALL override the example provided by the schema.
	 *
	 * @example "example value"
	 * @example 42
	 * @example { id: 1, name: "John" }
	 */
	example?: unknown;

	/**
	 * Examples of the parameter's potential value. Each example SHOULD contain a value in
	 * the correct format as specified in the parameter encoding. The examples field is
	 * mutually exclusive of the example field. Furthermore, if referencing a schema that
	 * contains an example, the examples value SHALL override the example provided by the schema.
	 *
	 * @example { "user1": { summary: "A user example", value: { id: 1, name: "John" } } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * A map containing the representations for the parameter. The key is the media type
	 * and the value describes it. The map MUST only contain one entry. This field is
	 * mutually exclusive with the schema field.
	 *
	 * @example { "application/json": { schema: { type: "string" } } }
	 */
	content?: Record<string, MediaType>;
}

/**
 * -----
 * Request Body Object
 * -----
 *
 * Describes a single request body. A request body is the payload sent with an HTTP request.
 * The request body is only supported in HTTP methods where the HTTP 1.1 specification
 * RFC7231 has explicitly defined semantics for request bodies.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#request-body-object | OpenAPI 3.1.1 Request Body Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#request-body-object | OpenAPI 3.1.0 Request Body Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `description` - Optional A brief description of the request body
 * @property `content` - Required The content of the request body
 * @property `required` - Optional Determines if the request body is required in the request
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `content` field is required and must contain at least one media type.
 *
 * -----
 * Examples
 * -----
 *
 * @example (JSON request body):
 * ```ts
 * const requestBody: RequestBody = {
 *   description: "User data to create",
 *   required: true,
 *   content: {
 *     "application/json": {
 *       schema: { $ref: "#/components/schemas/User" }
 *     }
 *   }
 * };
 * ```
 *
 * @example (multipart request body):
 * ```ts
 * const requestBody: RequestBody = {
 *   description: "File upload",
 *   content: {
 *     "multipart/form-data": {
 *       schema: {
 *         type: "object",
 *         properties: {
 *           file: { type: "string", format: "binary" }
 *         }
 *       }
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
	 * @example "File upload with metadata"
	 */
	description?: string;

	/**
	 * The content of the request body. The key is a media type or media type range and
	 * the value describes it. For request bodies that are sent using multipart/form-data,
	 * the encoding property is used to describe the encoding of the request body.
	 *
	 * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
	 * @example { "multipart/form-data": { schema: { type: "object", properties: { file: { type: "string", format: "binary" } } } } }
	 */
	content: Record<string, MediaType>;

	/**
	 * Determines if the request body is required in the request. Defaults to false.
	 *
	 * @example true
	 * @example false
	 */
	required?: boolean;
}

/**
 * -----
 * Response Object
 * -----
 *
 * Describes a single response from an API Operation, including design-time, static links
 * to operations based on the response.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#response-object | OpenAPI 3.1.1 Response Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#response-object | OpenAPI 3.1.0 Response Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `description` - Required A short description of the response
 * @property `headers` - Optional Maps a header name to its definition
 * @property `content` - Optional A map containing descriptions of potential response payloads
 * @property `links` - Optional A map of operations links that can be followed from the response
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `description` field is required and should describe the response.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic response):
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
 *
 * @example (response with headers):
 * ```ts
 * const response: Response = {
 *   description: "User created successfully",
 *   headers: {
 *     "Location": {
 *       description: "URL of the created user",
 *       schema: { type: "string" }
 *     }
 *   },
 *   content: {
 *     "application/json": {
 *       schema: { $ref: "#/components/schemas/User" }
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
	 * @example "A list of users"
	 * @example "User created successfully"
	 * @example "Bad request - validation failed"
	 */
	description: string;

	/**
	 * Maps a header name to its definition. RFC7230 states header names are case insensitive.
	 * If a response header is defined with the name "Content-Type", it SHALL be ignored.
	 *
	 * @example { "X-RateLimit-Limit": { description: "Rate limit per hour", schema: { type: "integer" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * A map containing descriptions of potential response payloads. The key is a media type
	 * or media type range and the value describes it. For responses that match multiple keys,
	 * only the most specific key is applicable. e.g. text/plain overrides text/*
	 *
	 * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
	 * @example { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/User" } } } }
	 */
	content?: Record<string, MediaType>;

	/**
	 * A map of operations links that can be followed from the response. The key of the map
	 * is a short name for the link, following the naming constraints of the names for
	 * Component Objects.
	 *
	 * @example { "GetUser": { operationId: "getUserById", parameters: { userId: "$response.body#/id" } } }
	 */
	links?: Record<string, Link | Reference>;
}

/**
 * -----
 * Header Object
 * -----
 *
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * 1. `name` MUST NOT be specified, it is given in the corresponding headers map.
 * 2. `in` MUST NOT be specified, it is implicitly in header.
 * 3. All traits that are affected by the location MUST be applicable to a location of header
 *    (for example, style).
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#header-object | OpenAPI 3.1.1 Header Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#header-object | OpenAPI 3.1.0 Header Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `description` - Optional A brief description of the header
 * @property `required` - Optional Determines whether this header is mandatory
 * @property `deprecated` - Optional Specifies that a header is deprecated
 * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued headers
 * @property `style` - Optional Describes how the header value will be serialized
 * @property `explode` - Optional When this is true, header values of type array or object generate separate headers for each value
 * @property `allowReserved` - Optional Determines whether the header value SHOULD allow reserved characters
 * @property `schema` - Optional The schema defining the type used for the header
 * @property `example` - Optional Example of the header's potential value
 * @property `examples` - Optional Examples of the header's potential value
 * @property `content` - Optional A map containing the representations for the header
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `schema` and `content` fields are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple header):
 * ```ts
 * const header: Header = {
 *   description: "Rate limit per hour",
 *   required: false,
 *   schema: { type: "integer" }
 * };
 * ```
 *
 * @example (header with content):
 * ```ts
 * const header: Header = {
 *   description: "Custom header with JSON content",
 *   content: {
 *     "application/json": {
 *       schema: { type: "object", properties: { value: { type: "string" } } }
 *     }
 *   }
 * };
 * ```
 */
export interface Header extends Extension {
	/**
	 * A brief description of the header. This could contain examples of use.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "Rate limit per hour"
	 * @example "Custom authentication token"
	 */
	description?: string;

	/**
	 * Determines whether this header is mandatory. The property MAY be included and its
	 * default value is false.
	 *
	 * @example true
	 * @example false
	 */
	required?: boolean;

	/**
	 * Specifies that a header is deprecated and SHOULD be transitioned out of usage.
	 * Default value is false.
	 *
	 * @example true
	 * @example false
	 */
	deprecated?: boolean;

	/**
	 * Sets the ability to pass empty-valued headers. This is valid only for headers
	 * and allows sending a header with an empty value. Default value is false.
	 *
	 * @example true
	 * @example false
	 */
	allowEmptyValue?: boolean;

	/**
	 * Describes how the header value will be serialized. The default value is "simple".
	 *
	 * @example "simple"
	 * @example "form"
	 */
	style?: string;

	/**
	 * When this is true, header values of type array or object generate separate headers
	 * for each value of the array or key-value pair of the map. For other types of headers
	 * this property has no effect. When style is form, the default value is true. For all other
	 * styles, the default value is false.
	 *
	 * @example true
	 * @example false
	 */
	explode?: boolean;

	/**
	 * Determines whether the header value SHOULD allow reserved characters, as defined by
	 * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false.
	 *
	 * @example true
	 * @example false
	 */
	allowReserved?: boolean;

	/**
	 * The schema defining the type used for the header. This field is mutually exclusive
	 * with the content field.
	 *
	 * @example { type: "string" }
	 * @example { type: "integer", minimum: 0 }
	 */
	schema?: Schema;

	/**
	 * Example of the header's potential value. The example SHOULD match the specified
	 * schema and encoding properties if present. The example field is mutually exclusive
	 * of the examples field.
	 *
	 * @example "example value"
	 * @example 42
	 */
	example?: unknown;

	/**
	 * Examples of the header's potential value. Each example SHOULD contain a value in
	 * the correct format as specified in the header encoding. The examples field is
	 * mutually exclusive of the example field.
	 *
	 * @example { "header1": { summary: "A header example", value: "example value" } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * A map containing the representations for the header. The key is the media type
	 * and the value describes it. The map MUST only contain one entry. This field is
	 * mutually exclusive with the schema field.
	 *
	 * @example { "application/json": { schema: { type: "string" } } }
	 */
	content?: Record<string, MediaType>;
}

/**
 * -----
 * Media Type Object
 * -----
 *
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 * Media Type Objects can be used in a Content Object.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#media-type-object | OpenAPI 3.1.1 Media Type Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#media-type-object | OpenAPI 3.1.0 Media Type Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `schema` - Optional The schema defining the content of the request, response, or parameter
 * @property `example` - Optional Example of the media type
 * @property `examples` - Optional Examples of the media type
 * @property `encoding` - Optional A map between a property name and its encoding information
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `example` and `examples` fields are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (JSON media type):
 * ```ts
 * const mediaType: MediaType = {
 *   schema: { $ref: "#/components/schemas/User" },
 *   example: { id: 1, name: "John Doe" }
 * };
 * ```
 *
 * @example (multipart media type with encoding):
 * ```ts
 * const mediaType: MediaType = {
 *   schema: {
 *     type: "object",
 *     properties: {
 *       file: { type: "string", format: "binary" },
 *       description: { type: "string" }
 *     }
 *   },
 *   encoding: {
 *     file: { contentType: "image/png" },
 *     description: { contentType: "text/plain" }
 *   }
 * };
 * ```
 */
export interface MediaType extends Extension {
	/**
	 * The schema defining the content of the request, response, or parameter.
	 *
	 * @example { $ref: "#/components/schemas/User" }
	 * @example { type: "array", items: { type: "string" } }
	 */
	schema?: Schema;

	/**
	 * Example of the media type. The example SHOULD match the specified schema and encoding
	 * properties if present. The example field is mutually exclusive of the examples field.
	 * Furthermore, if referencing a schema that contains an example, the example value
	 * SHALL override the example provided by the schema.
	 *
	 * @example { id: 1, name: "John Doe" }
	 * @example "example string"
	 * @example 42
	 */
	example?: unknown;

	/**
	 * Examples of the media type. Each example SHOULD contain a value in the correct format
	 * as specified in the media type encoding. The examples field is mutually exclusive
	 * of the example field. Furthermore, if referencing a schema that contains an example,
	 * the examples value SHALL override the example provided by the schema.
	 *
	 * @example { "user1": { summary: "A user example", value: { id: 1, name: "John" } } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * A map between a property name and its encoding information. The key, being the property
	 * name, MUST exist in the schema as a property. The encoding object SHALL only apply to
	 * requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
	 *
	 * @example { "file": { contentType: "image/png" }, "description": { contentType: "text/plain" } }
	 */
	encoding?: Record<string, Encoding>;
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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#encoding-object | OpenAPI 3.1.1 Encoding Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#encoding-object | OpenAPI 3.1.0 Encoding Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `contentType` - Optional The Content-Type for encoding a specific property
 * @property `headers` - Optional A map allowing additional information to be provided as headers
 * @property `style` - Optional Describes how a specific property value will be serialized
 * @property `explode` - Optional When this is true, property values of type array or object generate separate parameters for each value
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `style` property only applies to form data and query parameters.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic encoding):
 * ```ts
 * const encoding: Encoding = {
 *   contentType: "image/png",
 *   style: "form"
 * };
 * ```
 *
 * @example (encoding with headers):
 * ```ts
 * const encoding: Encoding = {
 *   contentType: "application/json",
 *   headers: {
 *     "X-Custom-Header": {
 *       description: "Custom header for this encoding",
 *       schema: { type: "string" }
 *     }
 *   }
 * };
 * ```
 */
export interface Encoding extends Extension {
	/**
	 * The Content-Type for encoding a specific property. Default value depends on the
	 * property type: for string with format being binary – application/octet-stream;
	 * for other primitive types – text/plain; for object – application/json;
	 * for array – the default is determined based on the inner type.
	 *
	 * @example "image/png"
	 * @example "application/json"
	 * @example "text/plain"
	 */
	contentType?: string;

	/**
	 * A map allowing additional information to be provided as headers, for example
	 * Content-Disposition. Content-Type is described separately and SHALL be ignored
	 * in this section. This property SHALL be ignored if the request body media type
	 * is not a multipart.
	 *
	 * @example { "Content-Disposition": { description: "File attachment", schema: { type: "string" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * Describes how a specific property value will be serialized depending on its type.
	 * See Parameter Object for details on the style property. The behavior follows the
	 * same values as query parameters, including default values. This property SHALL be
	 * ignored if the request body media type is not application/x-www-form-urlencoded
	 * or multipart/form-data.
	 *
	 * @example "form"
	 * @example "spaceDelimited"
	 * @example "pipeDelimited"
	 * @example "deepObject"
	 */
	style?: string;

	/**
	 * When this is true, property values of type array or object generate separate
	 * parameters for each value of the array or key-value pair of the map. For other
	 * types of properties this property has no effect. When style is form, the default
	 * value is true. For all other styles, the default value is false. This property
	 * SHALL be ignored if the request body media type is not application/x-www-form-urlencoded
	 * or multipart/form-data.
	 *
	 * @example true
	 * @example false
	 */
	explode?: boolean;

	/**
	 * Determines whether the parameter value SHOULD allow reserved characters, as defined
	 * by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default
	 * value is false. This property SHALL be ignored if the request body media type is
	 * not application/x-www-form-urlencoded.
	 *
	 * @example true
	 * @example false
	 */
	allowReserved?: boolean;
}

/**
 * -----
 * Link Object
 * -----
 *
 * The Link object represents a possible design-time link for a response. The presence of a link
 * does not guarantee the caller's ability to successfully invoke it, rather it provides a known
 * relationship and traversal mechanism between responses and other operations.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#link-object | OpenAPI 3.1.1 Link Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#link-object | OpenAPI 3.1.0 Link Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `operationRef` - Optional A relative or absolute reference to an OAS operation
 * @property `operationId` - Optional The name of an existing, resolvable OAS operation
 * @property `parameters` - Optional A map representing parameters to pass to an operation
 * @property `requestBody` - Optional A literal value or expression to use as a request body
 * @property `description` - Optional A description of the link
 * @property `server` - Optional A server object to be used by the target operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `operationRef` and `operationId` fields are mutually exclusive.
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
 *   },
 *   description: "Get the user by ID"
 * };
 * ```
 *
 * @example (link with operationRef):
 * ```ts
 * const link: Link = {
 *   operationRef: "#/paths/~1users~1{userId}/get",
 *   parameters: {
 *     userId: "$response.body#/id"
 *   }
 * };
 * ```
 */
export interface Link extends Extension {
	/**
	 * A relative or absolute reference to an OAS operation. This field is mutually exclusive
	 * of the operationId field, and MUST point to an Operation Object. Relative operationRef
	 * values MAY be used to locate an existing Operation Object in the OpenAPI definition.
	 *
	 * @example "#/paths/~1users~1{userId}/get"
	 * @example "https://example.com/openapi.json#/paths/~1users~1{userId}/get"
	 */
	operationRef?: string;

	/**
	 * The name of an existing, resolvable OAS operation, as defined with a unique operationId.
	 * This field is mutually exclusive of the operationRef field.
	 *
	 * @example "getUserById"
	 * @example "createUser"
	 */
	operationId?: string;

	/**
	 * A map representing parameters to pass to an operation as specified with operationId
	 * or identified via operationRef. The key is the parameter name to be used, whereas
	 * the value can be a constant or an expression to be evaluated and passed to the linked
	 * operation. The parameter name can be qualified using the parameter location [{in}.]{name}
	 * for operations that use the same parameter name in different locations (e.g. path.id).
	 *
	 * @example { "userId": "$response.body#/id" }
	 * @example { "path.id": "$response.body#/id", "query.limit": 10 }
	 */
	parameters?: Record<string, unknown>;

	/**
	 * A literal value or expression to use as a request body when calling the target operation.
	 *
	 * @example { "name": "John Doe", "email": "john@example.com" }
	 * @example "$request.body"
	 */
	requestBody?: unknown;

	/**
	 * A description of the link. CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "Get the user by ID"
	 * @example "Create a new user with the provided data"
	 */
	description?: string;

	/**
	 * A server object to be used by the target operation.
	 *
	 * @example { url: "https://api.example.com/v1" }
	 */
	server?: Server;
}

/**
 * -----
 * Callback Object
 * -----
 *
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map
 * is a Path Item Object that describes a set of requests that may be initiated by the API provider
 * and the expected responses. The key value used to identify the callback object is an expression,
 * evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#callback-object | OpenAPI 3.1.1 Callback Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#callback-object | OpenAPI 3.1.0 Callback Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `{expression}` - A Path Item Object or Reference to a Path Item Object
 *
 * @note
 * The key is a runtime expression that identifies a URL to use for the callback operation.
 * The expression is evaluated at runtime and MUST resolve to a URL.
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
 *         description: "Callback payload",
 *         content: {
 *           "application/json": {
 *             schema: { $ref: "#/components/schemas/CallbackPayload" }
 *           }
 *         }
 *       },
 *       responses: {
 *         "200": {
 *           description: "Callback received successfully"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (callback with multiple operations):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/callbackUrl}": {
 *     post: {
 *       summary: "Success callback",
 *       requestBody: { description: "Success payload" }
 *     },
 *     put: {
 *       summary: "Update callback",
 *       requestBody: { description: "Update payload" }
 *     }
 *   }
 * };
 * ```
 */
export interface Callback {
	/**
	 * A runtime expression that identifies a URL to use for the callback operation.
	 * The expression is evaluated at runtime and MUST resolve to a URL. The value
	 * is a Path Item Object that describes the callback operations.
	 *
	 * @example "{$request.body#/callbackUrl}"
	 * @example "{$request.body#/webhookUrl}"
	 * @example "{$request.body#/notificationUrl}"
	 */
	[expression: string]: PathItemObject | Reference;
}
