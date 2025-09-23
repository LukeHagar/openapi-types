import type { Extension } from "./extensions"
import type { Reference } from "./references"
import type { Schema } from "./schema"
import type { Response, Parameter, Example, RequestBody, Header, Link, Callback, PathItemObject } from "./paths"
import type { SecurityScheme } from "./security"

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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#components-object | OpenAPI 3.1.1 Components Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#components-object | OpenAPI 3.1.0 Components Object} |
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
 * @key `pathItems` - An object to hold reusable Path Item Objects
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * All the fixed fields declared above are objects that MUST use keys that match the regular expression: `^[a-zA-Z0-9\.\-_]+$`.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple components):
 * ```ts
 * const components: Components = {
 *   schemas: {
 *     User: {
 *       type: "object",
 *       properties: {
 *         id: { type: "integer", format: "int64" },
 *         name: { type: "string" }
 *       }
 *     }
 *   },
 *   responses: {
 *     NotFound: {
 *       description: "Resource not found"
 *     }
 *   }
 * };
 * ```
 */
export interface Components extends Extension {
  /**
   * An object to hold reusable Schema Objects.
   *
   * @example { User: { type: "object", properties: { id: { type: "integer" } } } }
   */
  schemas?: Record<string, Schema | Reference>

  /**
   * An object to hold reusable Response Objects.
   *
   * @example { NotFound: { description: "Resource not found" } }
   */
  responses?: Record<string, Response | Reference>

  /**
   * An object to hold reusable Parameter Objects.
   *
   * @example { UserId: { name: "userId", in: "path", required: true, schema: { type: "string" } } }
   */
  parameters?: Record<string, Parameter | Reference>

  /**
   * An object to hold reusable Example Objects.
   *
   * @example { UserExample: { value: { id: 1, name: "John Doe" } } }
   */
  examples?: Record<string, Example | Reference>

  /**
   * An object to hold reusable Request Body Objects.
   *
   * @example { UserRequestBody: { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } } }
   */
  requestBodies?: Record<string, RequestBody | Reference>

  /**
   * An object to hold reusable Header Objects.
   *
   * @example { RateLimit: { description: "Rate limit per hour", schema: { type: "integer" } } }
   */
  headers?: Record<string, Header | Reference>

  /**
   * An object to hold reusable Security Scheme Objects.
   *
   * @example { ApiKeyAuth: { type: "apiKey", in: "header", name: "X-API-KEY" } }
   */
  securitySchemes?: Record<string, SecurityScheme | Reference>

  /**
   * An object to hold reusable Link Objects.
   *
   * @example { UserOrders: { operationId: "getOrdersByUserId", parameters: { userId: "$response.body#/id" } } }
   */
  links?: Record<string, Link | Reference>

  /**
   * An object to hold reusable Callback Objects.
   *
   * @example { UserCreatedCallback: { "{$request.body#/callbackUrl}": { post: { requestBody: { description: "User created event" } } } } }
   */
  callbacks?: Record<string, Callback | Reference>

  /**
   * An object to hold reusable Path Item Objects.
   *
   * @example { UserPath: { get: { summary: "Get user by ID" } } }
   */
  pathItems?: Record<string, PathItemObject | Reference>
}
