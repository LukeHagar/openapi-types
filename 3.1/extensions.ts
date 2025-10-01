/**
 * -----
 * Extension Interface
 * -----
 *
 * The Extension interface provides a way to add custom properties to OpenAPI objects
 * using the `x-` prefix. This allows for specification extensions that are not part
 * of the core OpenAPI specification but can be used by tools and implementations
 * to provide additional functionality.
 *
 * Specification Extensions (`x-*`) are always allowed on OpenAPI objects.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#specification-extensions | OpenAPI 3.1.1 Specification Extensions} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#specification-extensions | OpenAPI 3.1.0 Specification Extensions} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All extension properties must start with `x-` and can contain any valid JSON value.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple extension):
 * ```ts
 * const extended: Extension = {
 *   "x-custom-property": "custom value",
 *   "x-internal-id": 123
 * };
 * ```
 *
 * @example (complex extension):
 * ```ts
 * const extended: Extension = {
 *   "x-codegen-settings": {
 *     "packageName": "com.example.api",
 *     "generateTests": true
 *   },
 *   "x-rate-limit": {
 *     "requests": 1000,
 *     "window": "1h"
 *   }
 * };
 * ```
 */
export interface Extension {
  /**
   * Specification Extensions allow adding custom properties to OpenAPI objects.
   * All extension properties must start with `x-` and can contain any valid JSON value.
   *
   * @example "x-custom-property"
   * @example "x-internal-id"
   * @example "x-codegen-settings"
   */
  [key: `x-${string}`]: unknown;
}
