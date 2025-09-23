/**
 * -----
 * Extension Type
 * -----
 *
 * Vendor extensions allow adding custom properties to OpenAPI objects.
 * All extension property names MUST begin with "x-" followed by any valid identifier.
 * The value can be any valid JSON value (null, primitive, array, or object).
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#specification-extensions | OpenAPI 3.0.4 Extensions} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#specification-extensions | OpenAPI 3.0.3 Extensions} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#specification-extensions | OpenAPI 3.0.2 Extensions} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#specification-extensions | OpenAPI 3.0.1 Extensions} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#specification-extensions | OpenAPI 3.0.0 Extensions} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * All extension property names MUST begin with "x-".
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple extension):
 * ```ts
 * const extension: Extension = {
 *   "x-internal-id": "12345"
 * };
 * ```
 *
 * @example (complex extension):
 * ```ts
 * const extension: Extension = {
 *   "x-custom-feature": { enabled: true, version: "1.0" }
 * };
 * ```
 */
export type Extension = {
  [K in `x-${string}`]: unknown
}
