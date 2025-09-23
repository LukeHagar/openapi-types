import type { Extension } from "./extensions"

/**
 * -----
 * External Documentation Object
 * -----
 *
 * Allows referencing an external resource for extended documentation.
 * This object provides a way to link to additional documentation that
 * supplements the API specification, such as detailed guides, tutorials,
 * or reference materials.
 *
 * External documentation is commonly used to provide:
 * - Detailed API guides and tutorials
 * - SDK documentation and examples
 * - Integration guides and best practices
 * - Additional reference materials
 * - Community resources and support
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#external-documentation-object | Swagger 2.0 External Documentation Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `description` - A short description of the target documentation. GFM syntax can be used for rich text representation.
 * @key `url` - The URL for the target documentation. Value MUST be in the format of a URL. This field is required.
 *
 * @note
 * The `url` field is required and must be a valid URL. The `description` field
 * is optional but recommended to provide context about the external documentation.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple external docs):
 * ```ts
 * const simpleDocs: ExternalDocumentation = {
 *   description: "Find more info here",
 *   url: "https://swagger.io"
 * };
 * ```
 *
 * @example (detailed external docs):
 * ```ts
 * const detailedDocs: ExternalDocumentation = {
 *   description: "Complete API documentation with examples and tutorials",
 *   url: "https://docs.example.com/api"
 * };
 * ```
 *
 * @example (SDK documentation):
 * ```ts
 * const sdkDocs: ExternalDocumentation = {
 *   description: "SDK documentation and code examples",
 *   url: "https://github.com/example/sdk"
 * };
 * ```
 *
 * @example (integration guide):
 * ```ts
 * const integrationDocs: ExternalDocumentation = {
 *   description: "Step-by-step integration guide",
 *   url: "https://example.com/integration-guide"
 * };
 * ```
 *
 * @example (community resources):
 * ```ts
 * const communityDocs: ExternalDocumentation = {
 *   description: "Community forum and support resources",
 *   url: "https://community.example.com/api-support"
 * };
 * ```
 *
 * @example (minimal external docs):
 * ```ts
 * const minimalDocs: ExternalDocumentation = {
 *   url: "https://example.com/docs"
 * };
 * ```
 */
export interface ExternalDocumentation extends Extension {
  /**
   * A short description of the target documentation. GFM syntax can be used for 
   * rich text representation.
   * 
   * This description provides context about what the external documentation
   * contains and helps developers understand when and why they should
   * reference it.
   * 
   * @example "Find more info here"
   * @example "Complete API documentation with examples and tutorials"
   * @example "SDK documentation and code examples"
   * @example "Step-by-step integration guide"
   */
  description?: string
  
  /**
   * The URL for the target documentation. Value MUST be in the format of a URL.
   * This field is required.
   * 
   * The URL should point to a valid, accessible resource that provides
   * additional documentation about the API or specific aspects of it.
   * 
   * @example "https://swagger.io"
   * @example "https://docs.example.com/api"
   * @example "https://github.com/example/sdk"
   * @example "https://example.com/integration-guide"
   */
  url: string
}
