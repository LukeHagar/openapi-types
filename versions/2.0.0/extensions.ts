/**
 * -----
 * Base Extension Type
 * -----
 *
 * All Swagger objects can be extended with vendor-specific properties.
 * Extension properties MUST begin with "x-" and can have any valid JSON value.
 * This enables API providers to add custom functionality and metadata to their
 * specifications without breaking compatibility with standard Swagger tools.
 *
 * Extensions are a powerful mechanism for adding custom features to API
 * specifications while maintaining interoperability. They allow for:
 * - Custom metadata and annotations
 * - Tool-specific configuration
 * - API versioning information
 * - Custom validation rules
 * - Integration with proprietary systems
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#specification-extensions | Swagger 2.0 Specification Extensions} |
 *
 * -----
 * Extension Rules
 * -----
 *
 * @key `x-${string}` - Vendor extensions allow adding custom properties to Swagger objects.
 *
 * @note
 * - All extension property names MUST begin with "x-" followed by any valid identifier
 * - The value can be any valid JSON value (null, primitive, array, or object)
 * - Extensions may or may not be supported by available tooling
 * - Tools can be extended to add support for custom extensions
 * - Extensions should be documented and used consistently within an organization
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple extension):
 * ```ts
 * const simpleExtension: Extension = {
 *   "x-internal-id": "12345"
 * };
 * ```
 *
 * @example (complex extension):
 * ```ts
 * const complexExtension: Extension = {
 *   "x-custom-feature": {
 *     enabled: true,
 *     version: "1.0",
 *     configuration: {
 *       timeout: 5000,
 *       retries: 3
 *     }
 *   }
 * };
 * ```
 *
 * @example (array extension):
 * ```ts
 * const arrayExtension: Extension = {
 *   "x-tags": ["internal", "beta", "experimental"]
 * };
 * ```
 *
 * @example (boolean extension):
 * ```ts
 * const booleanExtension: Extension = {
 *   "x-deprecated": true,
 *   "x-experimental": false
 * };
 * ```
 *
 * @example (null extension):
 * ```ts
 * const nullExtension: Extension = {
 *   "x-optional-field": null
 * };
 * ```
 *
 * @example (multiple extensions):
 * ```ts
 * const multipleExtensions: Extension = {
 *   "x-api-version": "2.1.0",
 *   "x-rate-limit": {
 *     requests: 1000,
 *     window: "1h"
 *   },
 *   "x-monitoring": {
 *     enabled: true,
 *     alerts: ["error", "warning"]
 *   }
 * };
 * ```
 */
export type Extension = {
  /**
   * Vendor extensions allow adding custom properties to Swagger objects.
   * All extension property names MUST begin with "x-" followed by any valid identifier.
   * The value can be any valid JSON value (null, primitive, array, or object).
   * 
   * Extensions enable API providers to add custom functionality and metadata
   * to their specifications without breaking compatibility with standard
   * Swagger tools. They should be used consistently and documented properly.
   * 
   * @example { "x-internal-id": "12345" }
   * @example { "x-custom-feature": { enabled: true, version: "1.0" } }
   * @example { "x-tags": ["internal", "beta"] }
   * @example { "x-deprecated": true }
   * @example { "x-optional-field": null }
   */
  [K in `x-${string}`]: unknown
}
