import type { Extension } from "./extensions";
import type {
	Callback,
	Example,
	Header,
	Link,
	Parameter,
	RequestBody,
	Response,
} from "./paths";
import type { Reference } from "./references";
import type { Schema } from "./schema";
import type { SecurityScheme } from "./security";

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
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object | OpenAPI 3.0.0 Components Object} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object | OpenAPI 3.0.1 Components Object} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object | OpenAPI 3.0.2 Components Object} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object | OpenAPI 3.0.3 Components Object} |
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object | OpenAPI 3.0.4 Components Object} |
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
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - schemas} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - schemas} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - schemas} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - schemas} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - schemas} |
	 * @property `schemas` - Optional An object to hold reusable Schema Objects
	 *
	 * @example { "User": { type: "object", properties: { id: { type: "integer" } } } }
	 */
	schemas?: Record<string, Schema | Reference>;

	/**
	 * An object to hold reusable Response Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - responses} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - responses} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - responses} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - responses} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - responses} |
	 * @property `responses` - Optional An object to hold reusable Response Objects
	 *
	 * @example { "NotFound": { description: "Resource not found" } }
	 */
	responses?: Record<string, Response | Reference>;

	/**
	 * An object to hold reusable Parameter Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - parameters} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - parameters} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - parameters} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - parameters} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - parameters} |
	 * @property `parameters` - Optional An object to hold reusable Parameter Objects
	 *
	 * @example { "LimitParam": { name: "limit", in: "query", schema: { type: "integer" } } }
	 */
	parameters?: Record<string, Parameter | Reference>;

	/**
	 * An object to hold reusable Example Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - examples} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - examples} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - examples} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - examples} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - examples} |
	 * @property `examples` - Optional An object to hold reusable Example Objects
	 *
	 * @example { "UserExample": { summary: "A user example", value: { id: 1, name: "John" } } }
	 */
	examples?: Record<string, Example | Reference>;

	/**
	 * An object to hold reusable Request Body Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - requestBodies} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - requestBodies} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - requestBodies} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - requestBodies} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - requestBodies} |
	 * @property `requestBodies` - Optional An object to hold reusable Request Body Objects
	 *
	 * @example { "UserRequest": { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } } }
	 */
	requestBodies?: Record<string, RequestBody | Reference>;

	/**
	 * An object to hold reusable Header Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - headers} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - headers} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - headers} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - headers} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - headers} |
	 * @property `headers` - Optional An object to hold reusable Header Objects
	 *
	 * @example { "RateLimit": { description: "Rate limit header", schema: { type: "integer" } } }
	 */
	headers?: Record<string, Header | Reference>;

	/**
	 * An object to hold reusable Security Scheme Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - securitySchemes} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - securitySchemes} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - securitySchemes} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - securitySchemes} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - securitySchemes} |
	 * @property `securitySchemes` - Optional An object to hold reusable Security Scheme Objects
	 *
	 * @example { "ApiKeyAuth": { type: "apiKey", in: "header", name: "X-API-Key" } }
	 */
	securitySchemes?: Record<string, SecurityScheme | Reference>;

	/**
	 * An object to hold reusable Link Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - links} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - links} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - links} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - links} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - links} |
	 * @property `links` - Optional An object to hold reusable Link Objects
	 *
	 * @example { "UserRepositories": { operationId: "getUserRepositories", parameters: { username: "$response.body#/username" } } }
	 */
	links?: Record<string, Link | Reference>;

	/**
	 * An object to hold reusable Callback Objects.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#components-object  | OpenAPI 3.0.4 Components Object - callbacks} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#components-object  | OpenAPI 3.0.3 Components Object - callbacks} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#components-object  | OpenAPI 3.0.2 Components Object - callbacks} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#components-object  | OpenAPI 3.0.1 Components Object - callbacks} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#components-object  | OpenAPI 3.0.0 Components Object - callbacks} |
	 * @property `callbacks` - Optional An object to hold reusable Callback Objects
	 *
	 * @example { "MyCallback": { "{$request.body#/callbackUrl}": { post: { requestBody: { $ref: "#/components/requestBodies/SomeRequestBody" } } } } }
	 */
	callbacks?: Record<string, Callback | Reference>;
}
