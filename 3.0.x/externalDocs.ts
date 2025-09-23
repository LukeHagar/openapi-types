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
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#external-documentation-object | OpenAPI 3.0.4 External Documentation} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#external-documentation-object | OpenAPI 3.0.3 External Documentation} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#external-documentation-object | OpenAPI 3.0.2 External Documentation} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#external-documentation-object | OpenAPI 3.0.1 External Documentation} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#external-documentation-object | OpenAPI 3.0.0 External Documentation} |
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
 *   description: "Find more info here",
 *   url: "https://example.com/docs"
 * };
 * ```
 */
export interface ExternalDocumentation extends Extension {
  /** 
   * A short description of the target documentation. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "Find more info here"
   * @example "Additional documentation for this API"
   */
  description?: string
  
  /** 
   * The URL for the target documentation. MUST be in the format of a URL.
   * 
   * @example "https://example.com/docs"
   * @example "https://api.example.com/documentation"
   */
  url: string
}
