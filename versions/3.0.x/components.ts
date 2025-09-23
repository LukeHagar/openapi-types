import type { Schema } from "./schema"
import type { Reference } from "./references"
import type { Extension } from "./extensions"

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
 * @key `schemas` - An object to hold reusable Schema Objects
 * @key `responses` - An object to hold reusable Response Objects
 * @key `parameters` - An object to hold reusable Parameter Objects
 * @key `examples` - An object to hold reusable Example Objects
 * @key `requestBodies` - An object to hold reusable Request Body Objects
 * @key `headers` - An object to hold reusable Header Objects
 * @key `securitySchemes` - An object to hold reusable Security Scheme Objects
 * @key `links` - An object to hold reusable Link Objects
 * @key `callbacks` - An object to hold reusable Callback Objects
 * @key `x-${string}` - Specification Extensions
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
   * @example { "User": { type: "object", properties: { id: { type: "integer" } } } }
   */
  schemas?: Record<string, Schema | Reference>

  /**
   * An object to hold reusable Response Objects.
   * 
   * @example { "NotFound": { description: "Resource not found" } }
   */
  responses?: Record<string, any>

  /**
   * An object to hold reusable Parameter Objects.
   * 
   * @example { "LimitParam": { name: "limit", in: "query", schema: { type: "integer" } } }
   */
  parameters?: Record<string, any>

  /**
   * An object to hold reusable Example Objects.
   * 
   * @example { "UserExample": { summary: "A user example", value: { id: 1, name: "John" } } }
   */
  examples?: Record<string, any>

  /**
   * An object to hold reusable Request Body Objects.
   * 
   * @example { "UserRequest": { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } } }
   */
  requestBodies?: Record<string, any>

  /**
   * An object to hold reusable Header Objects.
   * 
   * @example { "RateLimit": { description: "Rate limit header", schema: { type: "integer" } } }
   */
  headers?: Record<string, any>

  /**
   * An object to hold reusable Security Scheme Objects.
   * 
   * @example { "ApiKeyAuth": { type: "apiKey", in: "header", name: "X-API-Key" } }
   */
  securitySchemes?: Record<string, any>

  /**
   * An object to hold reusable Link Objects.
   * 
   * @example { "UserRepositories": { operationId: "getUserRepositories", parameters: { username: "$response.body#/username" } } }
   */
  links?: Record<string, any>

  /**
   * An object to hold reusable Callback Objects.
   * 
   * @example { "MyCallback": { "{$request.body#/callbackUrl}": { post: { requestBody: { $ref: "#/components/requestBodies/SomeRequestBody" } } } } }
   */
  callbacks?: Record<string, any>
}
