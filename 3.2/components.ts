import type { Extension } from "./extensions";
import type { OAuthFlows } from "./oauth";
import type { Parameter, PathItemObject } from "./paths";
import type { Reference } from "./references";
import type { Schema } from "./schema";
import type { Server } from "./servers";

/**
 * -----
 * Components Object
 * -----
 *
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined
 * within the components object will have no effect on the API unless they are explicitly
 * referenced from properties outside the components object.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `schemas` - An object to hold reusable Schema Objects
 * @property `responses` - An object to hold reusable Response Objects
 * @property `parameters` - An object to hold reusable Parameter Objects
 * @property `examples` - An object to hold reusable Example Objects
 * @property `requestBodies` - An object to hold reusable Request Body Objects
 * @property `headers` - An object to hold reusable Header Objects
 * @property `securitySchemes` - An object to hold reusable Security Scheme Objects
 * @property `links` - An object to hold reusable Link Objects
 * @property `callbacks` - An object to hold reusable Callback Objects
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All objects defined within the components object will have no effect on the API unless
 * they are explicitly referenced from properties outside the components object.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic components):
 * ```ts
 * const components: Components = {
 *   schemas: {
 *     User: {
 *       type: "object",
 *       properties: {
 *         id: { type: "integer" },
 *         name: { type: "string" }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface Components extends Extension {
	/**
	 * An object to hold reusable Schema Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - schemas} |
	 *
	 * @property `schemas` - Optional An object to hold reusable Schema Objects
	 *
	 * @example { "User": { type: "object", properties: { id: { type: "integer" } } } }
	 */
	schemas?: Record<string, Schema | Reference>;

	/**
	 * An object to hold reusable Response Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - responses} |
	 *
	 * @property `responses` - Optional An object to hold reusable Response Objects
	 *
	 * @example { "NotFound": { description: "Resource not found" } }
	 */
	responses?: Record<string, Response | Reference>;

	/**
	 * An object to hold reusable Parameter Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - parameters} |
	 *
	 * @property `parameters` - Optional An object to hold reusable Parameter Objects
	 *
	 * @example { "LimitParam": { name: "limit", in: "query", schema: { type: "integer" } } }
	 */
	parameters?: Record<string, Parameter | Reference>;

	/**
	 * An object to hold reusable Example Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - examples} |
	 *
	 * @property `examples` - Optional An object to hold reusable Example Objects
	 *
	 * @example { "UserExample": { summary: "A user example", value: { id: 1, name: "John" } } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * An object to hold reusable Request Body Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - requestBodies} |
	 *
	 * @property `requestBodies` - Optional An object to hold reusable Request Body Objects
	 *
	 * @example { "UserRequest": { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } } }
	 */
	requestBodies?: Record<string, RequestBody | Reference>;

	/**
	 * An object to hold reusable Header Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - headers} |
	 *
	 * @property `headers` - Optional An object to hold reusable Header Objects
	 *
	 * @example { "RateLimit": { description: "Rate limit header", schema: { type: "integer" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * An object to hold reusable Security Scheme Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - securitySchemes} |
	 *
	 * @property `securitySchemes` - Optional An object to hold reusable Security Scheme Objects
	 *
	 * @example { "ApiKeyAuth": { type: "apiKey", in: "header", name: "X-API-Key" } }
	 */
	securitySchemes?: Record<string, SecurityScheme | Reference>;

	/**
	 * An object to hold reusable Link Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - links} |
	 *
	 * @property `links` - Optional An object to hold reusable Link Objects
	 *
	 * @example { "UserRepositories": { operationId: "getUserRepositories", parameters: { username: "$response.body#/username" } } }
	 */
	links?: Record<string, Link | Reference>;

	/**
	 * An object to hold reusable Callback Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#components-object | OpenAPI 3.2.0 Components Object - callbacks} |
	 *
	 * @property `callbacks` - Optional An object to hold reusable Callback Objects
	 *
	 * @example { "MyCallback": { "{$request.body#/callbackUrl}": { post: { requestBody: { $ref: "#/components/requestBodies/SomeRequestBody" } } } } }
	 */
	callbacks?: Record<string, Callback | Reference>;
}

/**
 * -----
 * Response Object
 * -----
 *
 * Describes a single response from an API Operation.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#response-object | OpenAPI 3.2.0 Response Object} |
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
 * The `description` field is required. The `content` field is required for all responses except 204 No Content.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic response):
 * ```ts
 * const response: Response = {
 *   "description": "A list of pets",
 *   "content": {
 *     "application/json": {
 *       "schema": {
 *         "type": "array",
 *         "items": { "$ref": "#/components/schemas/Pet" }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface Response extends Extension {
	/**
	 * A short description of the response. CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#response-object | OpenAPI 3.2.0 Response Object - description} |
	 *
	 * @property `description` - Required A short description of the response
	 *
	 * @example "A list of pets"
	 * @example "User created successfully"
	 */
	description: string;

	/**
	 * Maps a header name to its definition. Header names are case insensitive.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#response-object | OpenAPI 3.2.0 Response Object - headers} |
	 *
	 * @property `headers` - Optional Maps a header name to its definition
	 *
	 * @example { "X-RateLimit-Limit": { description: "Rate limit", schema: { type: "integer" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#response-object | OpenAPI 3.2.0 Response Object - content} |
	 *
	 * @property `content` - Optional A map containing descriptions of potential response payloads
	 *
	 * @example { "application/json": { schema: { type: "array", items: { $ref: "#/components/schemas/Pet" } } } }
	 */
	content?: Record<string, MediaType>;

	/**
	 * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#response-object | OpenAPI 3.2.0 Response Object - links} |
	 *
	 * @property `links` - Optional A map of operations links that can be followed from the response
	 *
	 * @example { "UserRepositories": { operationId: "getUserRepositories", parameters: { username: "$response.body#/username" } } }
	 */
	links?: Record<string, Link | Reference>;
}

/**
 * -----
 * Header Object
 * -----
 *
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * 1. `name` MUST NOT be specified, it is given in the corresponding `headers` map
 * 2. `in` MUST NOT be specified, it is implicitly in `header`
 * 3. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`)
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object} |
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
 * @property `explode` - Optional When this is true, header values generate separate headers
 * @property `allowReserved` - Optional Determines whether the header value SHOULD allow reserved characters
 * @property `schema` - Optional The schema defining the type used for the header
 * @property `example` - Optional Example of the header
 * @property `examples` - Optional Examples of the header
 * @property `content` - Optional A map containing the representations for the header
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` and `in` fields are not allowed in Header Objects.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic header):
 * ```ts
 * const header: Header = {
 *   "description": "Rate limit header",
 *   "schema": { "type": "integer" }
 * };
 * ```
 */
export interface Header extends Extension {
	/**
	 * A brief description of the header. This could contain examples of use.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - description} |
	 *
	 * @property `description` - Optional A brief description of the header
	 *
	 * @example "Rate limit header"
	 * @example "Authentication token"
	 */
	description?: string;

	/**
	 * Determines whether this header is mandatory. Default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - required} |
	 *
	 * @property `required` - Optional Determines whether this header is mandatory
	 *
	 * @example true
	 * @example false
	 */
	required?: boolean;

	/**
	 * Specifies that a header is deprecated and SHOULD be transitioned out of usage.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - deprecated} |
	 *
	 * @property `deprecated` - Optional Specifies that a header is deprecated and SHOULD be transitioned out of usage
	 *
	 * @example true
	 * @example false
	 */
	deprecated?: boolean;

	/**
	 * Sets the ability to pass empty-valued headers. Default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - allowEmptyValue} |
	 *
	 * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued headers
	 *
	 * @example true
	 * @example false
	 */
	allowEmptyValue?: boolean;

	/**
	 * Describes how the header value will be serialized. Default value is "simple".
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - style} |
	 *
	 * @property `style` - Optional Describes how the header value will be serialized
	 *
	 * @example "simple"
	 */
	style?: "simple";

	/**
	 * When this is true, header values of type array or object generate separate headers
	 * for each value of the array or key-value pair of the map. For other types of headers
	 * this property has no effect. Default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - explode} |
	 *
	 * @property `explode` - Optional When this is true, header values of type array or object generate separate headers
	 *
	 * @example true
	 * @example false
	 */
	explode?: boolean;

	/**
	 * Determines whether the header value SHOULD allow reserved characters, as defined by
	 * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. Default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - allowReserved} |
	 *
	 * @property `allowReserved` - Optional Determines whether the header value SHOULD allow reserved characters
	 *
	 * @example true
	 * @example false
	 */
	allowReserved?: boolean;

	/**
	 * The schema defining the type used for the header.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - schema} |
	 *
	 * @property `schema` - Optional The schema defining the type used for the header
	 *
	 * @example { type: "integer" }
	 * @example { type: "string", format: "date-time" }
	 */
	schema?: Schema;

	/**
	 * Example of the header. The example SHOULD match the specified schema and encoding
	 * properties if present. The example object is mutually exclusive of the examples object.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - example} |
	 *
	 * @property `example` - Optional Example of the header
	 *
	 * @example "example-value"
	 * @example 42
	 */
	example?: unknown;

	/**
	 * Examples of the header. Each example SHOULD contain a value in the correct format
	 * as specified in the header encoding. The examples object is mutually exclusive of
	 * the example object.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - examples} |
	 *
	 * @property `examples` - Optional Examples of the header
	 *
	 * @example { "header1": { summary: "A header example", value: "header123" } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * A map containing the representations for the header. The key is the media type
	 * and the value describes it. The map MUST only contain one entry.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#header-object | OpenAPI 3.2.0 Header Object - content} |
	 *
	 * @property `content` - Optional A map containing the representations for the header
	 *
	 * @example { "application/json": { schema: { type: "object" } } }
	 */
	content?: Record<string, MediaType>;
}

/**
 * -----
 * Example Object
 * -----
 *
 * In all cases, the example value is expected to be compatible with the type schema of its associated value.
 * Tooling implementations MAY choose to validate compatibility automatically, and reject the example value(s) if incompatible.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#example-object | OpenAPI 3.2.0 Example Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `summary` - Optional Short description for the example
 * @property `description` - Optional Long description for the example
 * @property `value` - Optional Embedded literal example
 * @property `externalValue` - Optional A URI that points to a literal example
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `value` and `externalValue` fields are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic example):
 * ```ts
 * const example: Example = {
 *   "summary": "A user example",
 *   "value": { "id": 1, "name": "John Doe" }
 * };
 * ```
 */
export interface Example extends Extension {
	/**
	 * Short description for the example.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#example-object | OpenAPI 3.2.0 Example Object - summary} |
	 *
	 * @property `summary` - Optional Short description for the example
	 *
	 * @example "A user example"
	 * @example "Error response"
	 */
	summary?: string;

	/**
	 * Long description for the example. CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#example-object | OpenAPI 3.2.0 Example Object - description} |
	 *
	 * @property `description` - Optional Long description for the example
	 *
	 * @example "An example of a user object with all fields populated"
	 * @example "An example of an error response when the user is not found"
	 */
	description?: string;

	/**
	 * Embedded literal example. The value field and externalValue field are mutually exclusive.
	 * To represent examples of media types that cannot naturally represented in JSON or YAML,
	 * use a string value to contain the example, escaping where necessary.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#example-object | OpenAPI 3.2.0 Example Object - value} |
	 *
	 * @property `value` - Optional Embedded literal example
	 *
	 * @example { "id": 1, "name": "John Doe" }
	 * @example "example-value"
	 * @example 42
	 */
	value?: unknown;

	/**
	 * A URI that points to a literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#example-object | OpenAPI 3.2.0 Example Object - externalValue} |
	 *
	 * @property `externalValue` - Optional A URI that points to a literal example
	 *
	 * @example "https://example.org/examples/user-example.json"
	 * @example "https://example.org/examples/error-example.xml"
	 */
	externalValue?: string;
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
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#request-body-object | OpenAPI 3.2.0 Request Body Object} |
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
 * The `content` field is required. The `required` field defaults to false.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic request body):
 * ```ts
 * const requestBody: RequestBody = {
 *   "description": "User data",
 *   "content": {
 *     "application/json": {
 *       "schema": { "$ref": "#/components/schemas/User" }
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
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#request-body-object | OpenAPI 3.2.0 Request Body Object - description} |
	 *
	 * @property `description` - Optional A brief description of the request body
	 *
	 * @example "User data"
	 * @example "Pet information to add to the store"
	 */
	description?: string;

	/**
	 * The content of the request body. The key is a media type or media type range and the value describes it.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#request-body-object | OpenAPI 3.2.0 Request Body Object - content} |
	 *
	 * @property `content` - Required The content of the request body
	 *
	 * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
	 */
	content: Record<string, MediaType>;

	/**
	 * Determines if the request body is required in the request. Defaults to false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#request-body-object | OpenAPI 3.2.0 Request Body Object - required} |
	 *
	 * @property `required` - Optional Determines if the request body is required in the request
	 *
	 * @example true
	 * @example false
	 */
	required?: boolean;
}

/**
 * -----
 * Security Scheme Object
 * -----
 *
 * Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication,
 * an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows
 * (implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type` - Required The type of the security scheme
 * @property `description` - Optional A short description for security scheme
 * @property `name` - Optional The name of the header, query or cookie parameter to be used
 * @property `in` - Optional The location of the API key
 * @property `scheme` - Optional The name of the HTTP Authorization scheme to be used in the Authorization header
 * @property `bearerFormat` - Optional A hint to the client to identify how the bearer token is formatted
 * @property `flows` - Optional An object containing configuration information for the flow types supported
 * @property `openIdConnectUrl` - Optional OpenId Connect URL to discover OAuth2 configuration values
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `type` field is required. Other fields depend on the security scheme type.
 *
 * -----
 * Examples
 * -----
 *
 * @example (API key):
 * ```ts
 * const securityScheme: SecurityScheme = {
 *   "type": "apiKey",
 *   "in": "header",
 *   "name": "X-API-Key"
 * };
 * ```
 */
export interface SecurityScheme extends Extension {
	/**
	 * The type of the security scheme. Valid values are "apiKey", "http", "oauth2", "openIdConnect".
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - type} |
	 *
	 * @property `type` - Required The type of the security scheme
	 *
	 * @example "apiKey"
	 * @example "http"
	 * @example "oauth2"
	 * @example "openIdConnect"
	 */
	type: "apiKey" | "http" | "oauth2" | "openIdConnect";

	/**
	 * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - description} |
	 *
	 * @property `description` - Optional A short description for security scheme
	 *
	 * @example "API key authentication"
	 * @example "OAuth2 authentication"
	 */
	description?: string;

	/**
	 * The name of the header, query or cookie parameter to be used.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - name} |
	 *
	 * @property `name` - Optional The name of the header, query or cookie parameter to be used
	 *
	 * @example "X-API-Key"
	 * @example "Authorization"
	 */
	name?: string;

	/**
	 * The location of the API key. Valid values are "query", "header" or "cookie".
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - in} |
	 *
	 * @property `in` - Optional The location of the API key
	 *
	 * @example "query"
	 * @example "header"
	 * @example "cookie"
	 */
	in?: "query" | "header" | "cookie";

	/**
	 * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - scheme} |
	 *
	 * @property `scheme` - Optional The name of the HTTP Authorization scheme to be used in the Authorization header
	 *
	 * @example "basic"
	 * @example "bearer"
	 * @example "digest"
	 */
	scheme?: string;

	/**
	 * A hint to the client to identify how the bearer token is formatted. Bearer tokens are not necessarily
	 * generated by an authorization server, so this field is a hint only.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - bearerFormat} |
	 *
	 * @property `bearerFormat` - Optional A hint to the client to identify how the bearer token is formatted
	 *
	 * @example "JWT"
	 * @example "OAuth2"
	 */
	bearerFormat?: string;

	/**
	 * An object containing configuration information for the flow types supported.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - flows} |
	 *
	 * @property `flows` - Optional An object containing configuration information for the flow types supported
	 *
	 * @example { "implicit": { authorizationUrl: "https://example.com/oauth/authorize", scopes: { "read": "Read access" } } }
	 */
	flows?: OAuthFlows;

	/**
	 * OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-scheme-object | OpenAPI 3.2.0 Security Scheme Object - openIdConnectUrl} |
	 *
	 * @property `openIdConnectUrl` - Optional OpenId Connect URL to discover OAuth2 configuration values
	 *
	 * @example "https://example.com/.well-known/openid_configuration"
	 */
	openIdConnectUrl?: string;
}

/**
 * -----
 * Link Object
 * -----
 *
 * The Link object represents a possible design-time link for a response. The presence of a link does not guarantee
 * the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism
 * between responses and other operations.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `operationRef` - Optional A relative or absolute reference to an OAS operation
 * @property `operationId` - Optional The name of an existing, resolvable OAS operation
 * @property `parameters` - Optional A map representing parameters to pass to an operation
 * @property `requestBody` - Optional A literal value or expression to be evaluated and passed to the linked operation
 * @property `description` - Optional A description of the link
 * @property `server` - Optional A server object to be used by the target operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Either `operationRef` or `operationId` MUST be specified.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic link):
 * ```ts
 * const link: Link = {
 *   "operationId": "getUserRepositories",
 *   "parameters": {
 *     "username": "$response.body#/username"
 *   }
 * };
 * ```
 */
export interface Link extends Extension {
	/**
	 * A relative or absolute reference to an OAS operation. This field is mutually exclusive of the operationId field.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - operationRef} |
	 *
	 * @property `operationRef` - Optional A relative or absolute reference to an OAS operation
	 *
	 * @example "#/paths/~12.0~1repositories~1{username}/get"
	 * @example "https://example.com/openapi.json#/paths/~12.0~1repositories~1{username}/get"
	 */
	operationRef?: string;

	/**
	 * The name of an existing, resolvable OAS operation. This field is mutually exclusive of the operationRef field.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - operationId} |
	 *
	 * @property `operationId` - Optional The name of an existing, resolvable OAS operation
	 *
	 * @example "getUserRepositories"
	 * @example "getUserById"
	 */
	operationId?: string;

	/**
	 * A map representing parameters to pass to an operation as specified with operationId or identified via operationRef.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - parameters} |
	 *
	 * @property `parameters` - Optional A map representing parameters to pass to an operation
	 *
	 * @example { "username": "$response.body#/username" }
	 * @example { "id": "$response.body#/id" }
	 */
	parameters?: Record<string, unknown>;

	/**
	 * A literal value or expression to be evaluated and passed to the linked operation as a request body.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - requestBody} |
	 *
	 * @property `requestBody` - Optional A literal value or expression to be evaluated and passed to the linked operation
	 *
	 * @example "$request.body#/user"
	 * @example { "name": "John Doe" }
	 */
	requestBody?: RequestBody | Reference;

	/**
	 * A description of the link. CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - description} |
	 *
	 * @property `description` - Optional A description of the link
	 *
	 * @example "Link to user repositories"
	 * @example "Link to user profile"
	 */
	description?: string;

	/**
	 * A server object to be used by the target operation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#link-object | OpenAPI 3.2.0 Link Object - server} |
	 *
	 * @property `server` - Optional A server object to be used by the target operation
	 *
	 * @example { "url": "https://api.example.com/v2" }
	 */
	server?: Server;
}

/**
 * -----
 * Callback Object
 * -----
 *
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object
 * that describes a set of requests that may be initiated by the API provider and the expected responses.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#callback-object | OpenAPI 3.2.0 Callback Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `{expression}` - A Path Item Object that describes a set of requests that may be initiated by the API provider
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The key is a runtime expression that can be evaluated in the context of a runtime HTTP request/response to identify the URL to be used for the callback request.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic callback):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/callbackUrl}": {
 *     "post": {
 *       "requestBody": {
 *         "$ref": "#/components/requestBodies/SomeRequestBody"
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface Callback {
	[expression: string]: PathItemObject | Reference | unknown;
}

/**
 * -----
 * Encoding Object
 * -----
 *
 * A single encoding definition applied to a single schema property.
 * The Encoding Object is used to describe how a specific property value will be serialized.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `contentType` - Optional The Content-Type for encoding a specific property
 * @property `headers` - Optional A map allowing additional information to be provided as headers
 * @property `style` - Optional Describes how a specific property value will be serialized
 * @property `explode` - Optional When this is true, property values of type array or object generate separate parameters
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 *
 * @note
 * The Encoding Object is used in Media Type Objects for multipart and form-urlencoded content.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic encoding):
 * ```ts
 * const encoding: Encoding = {
 *   contentType: "text/plain"
 * };
 * ```
 *
 * @example (with style and explode):
 * ```ts
 * const encoding: Encoding = {
 *   style: "form",
 *   explode: true,
 *   allowReserved: false
 * };
 * ```
 */
export interface Encoding extends Extension {
	/**
	 * The Content-Type for encoding a specific property.
	 * Default value depends on the property type: for string with format being binary – application/octet-stream;
	 * for other primitive types – text/plain; for object – application/json; for array – the default is defined based on the inner type.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object - contentType} |
	 *
	 * @property `contentType` - Optional The Content-Type for encoding a specific property
	 *
	 * @example "text/plain"
	 * @example "application/json"
	 * @example "image/png"
	 */
	contentType?: string;

	/**
	 * A map allowing additional information to be provided as headers.
	 * For example, Content-Disposition. Content-Type is described separately and SHALL be ignored in this section.
	 * This property SHALL be ignored if the request body media is not a multipart.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object - headers} |
	 *
	 * @property `headers` - Optional A map allowing additional information to be provided as headers
	 *
	 * @example { "Content-Disposition": { schema: { type: "string" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * Describes how a specific property value will be serialized depending on its type.
	 * See Parameter Object for details on the style property. The behavior follows the same values as query parameters.
	 * Default value depends on the property type: for string with format being binary – binary; for other primitive types – form.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object - style} |
	 *
	 * @property `style` - Optional Describes how a specific property value will be serialized
	 *
	 * @example "form"
	 * @example "spaceDelimited"
	 * @example "pipeDelimited"
	 * @example "deepObject"
	 */
	style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";

	/**
	 * When this is true, property values of type array or object generate separate parameters
	 * for each value of the array or key-value pair of the map. For other types of properties
	 * this property has no effect. When style is form, the default value is true.
	 * For all other styles, the default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object - explode} |
	 *
	 * @property `explode` - Optional When this is true, property values of type array or object generate separate parameters
	 *
	 * @example true
	 * @example false
	 */
	explode?: boolean;

	/**
	 * Determines whether the parameter value SHOULD allow reserved characters, as defined by
	 * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#encoding-object | OpenAPI 3.2.0 Encoding Object - allowReserved} |
	 *
	 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
	 *
	 * @example true
	 * @example false
	 */
	allowReserved?: boolean;
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
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#media-type-object | OpenAPI 3.2.0 Media Type Object} |
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
 * @example (basic media type):
 * ```ts
 * const mediaType: MediaType = {
 *   "schema": {
 *     "type": "object",
 *     "properties": {
 *       "id": { "type": "integer" },
 *       "name": { "type": "string" }
 *     }
 *   }
 * };
 * ```
 */
export interface MediaType extends Extension {
	/**
	 * The schema defining the content of the request, response, or parameter.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#media-type-object | OpenAPI 3.2.0 Media Type Object - schema} |
	 *
	 * @property `schema` - Optional The schema defining the content of the request, response, or parameter
	 *
	 * @example { type: "object", properties: { id: { type: "integer" } } }
	 * @example { $ref: "#/components/schemas/User" }
	 */
	schema?: Schema;

	/**
	 * Example of the media type. The example SHOULD match the specified schema and encoding
	 * properties if present. The example object is mutually exclusive of the examples object.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#media-type-object | OpenAPI 3.2.0 Media Type Object - example} |
	 *
	 * @property `example` - Optional Example of the media type
	 *
	 * @example { "id": 1, "name": "John Doe" }
	 * @example "example-value"
	 */
	example?: unknown;

	/**
	 * Examples of the media type. Each example SHOULD contain a value in the correct format
	 * as specified in the media type encoding. The examples object is mutually exclusive of
	 * the example object.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#media-type-object | OpenAPI 3.2.0 Media Type Object - examples} |
	 *
	 * @property `examples` - Optional Examples of the media type
	 *
	 * @example { "user1": { summary: "A user example", value: { id: 1, name: "John" } } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * A map between a property name and its encoding information. The key, being the property name,
	 * MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody
	 * objects when the media type is multipart or application/x-www-form-urlencoded.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#media-type-object | OpenAPI 3.2.0 Media Type Object - encoding} |
	 *
	 * @property `encoding` - Optional A map between a property name and its encoding information
	 *
	 * @example { "name": { contentType: "text/plain" } }
	 */
	encoding?: Record<string, Encoding>;
}
