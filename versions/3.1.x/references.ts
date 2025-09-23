/**
 * -----
 * Reference Object
 * -----
 *
 * A simple object to allow referencing other components in the specification,
 * internally and externally. The Reference Object is a special JSON object
 * that allows you to reference other parts of the OpenAPI specification.
 *
 * The `$ref` keyword is used to reference other components, and when present,
 * the Reference Object is the only property that should be present (except
 * for `description` and specification extensions).
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#reference-object | OpenAPI 3.1.1 Reference Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#reference-object | OpenAPI 3.1.0 Reference Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `$ref` - Required The reference string
 * @key `description` - Optional A description of the referenced object
 * @key `summary` - Optional A short summary of the referenced object
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `$ref` field is required and must be a valid JSON Reference.
 *
 * -----
 * Examples
 * -----
 *
 * @example (internal reference):
 * ```ts
 * const reference: Reference = {
 *   "$ref": "#/components/schemas/User"
 * };
 * ```
 *
 * @example (external reference):
 * ```ts
 * const reference: Reference = {
 *   "$ref": "https://example.com/schemas/User.json"
 * };
 * ```
 *
 * @example (reference with description):
 * ```ts
 * const reference: Reference = {
 *   "$ref": "#/components/schemas/User",
 *   "description": "A user object containing user information"
 * };
 * ```
 */
export interface Reference {
  /**
   * The reference string. This field is required and must be a valid JSON Reference.
   * It can reference internal components using `#/` or external resources using URLs.
   *
   * @example "#/components/schemas/User"
   * @example "#/components/responses/NotFound"
   * @example "https://example.com/schemas/User.json"
   */
  $ref: string

  /**
   * A description of the referenced object. This can be used to provide
   * additional context about what the referenced object represents.
   *
   * @example "A user object containing user information"
   * @example "Standard error response for not found resources"
   */
  description?: string

  /**
   * A short summary of the referenced object. This can be used to provide
   * a brief overview of what the referenced object represents.
   *
   * @example "User schema"
   * @example "Not found response"
   */
  summary?: string
}
