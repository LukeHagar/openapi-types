import type { Extension } from "./extensions"

/**
 * -----
 * External Documentation Object
 * -----
 *
 * Allows referencing an external resource for extended documentation.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#external-documentation-object | OpenAPI 3.1.1 External Documentation Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#external-documentation-object | OpenAPI 3.1.0 External Documentation Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `description` - Optional A short description of the target documentation
 * @key `url` - Required The URL for the target documentation
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `url` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple external docs):
 * ```ts
 * const externalDocs: ExternalDocumentation = {
 *   url: "https://example.com/docs"
 * };
 * ```
 *
 * @example (external docs with description):
 * ```ts
 * const externalDocs: ExternalDocumentation = {
 *   description: "Find out more about our API",
 *   url: "https://example.com/docs"
 * };
 * ```
 */
export interface ExternalDocumentation extends Extension {
  /**
   * A short description of the target documentation. CommonMark syntax MAY be used
   * for rich text representation.
   *
   * @example "Find out more about our API"
   * @example "Additional documentation for this endpoint"
   */
  description?: string

  /**
   * The URL for the target documentation. This field is required and MUST be in the
   * format of a URL.
   *
   * @example "https://example.com/docs"
   * @example "https://docs.example.com/api"
   */
  url: string
}
