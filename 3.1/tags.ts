import type { Extension } from "./extensions";

/**
 * -----
 * Tag Object
 * -----
 *
 * Adds metadata to a single tag that is used by the Tag Object.
 * It is not mandatory to have a Tag Object per tag used there.
 *
 * Tags provide a way to organize and categorize API operations, making it easier
 * for developers to understand and navigate the API. They are commonly used to
 * group operations by resource type, functionality, or any other logical division.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#tag-object | OpenAPI 3.1.1 Tag Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#tag-object | OpenAPI 3.1.0 Tag Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The name of the tag
 * @property `description` - Optional A short description for the tag
 * @property `externalDocs` - Optional Additional external documentation for this tag
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple tag):
 * ```ts
 * const tag: Tag = {
 *   name: "users",
 *   description: "User management operations"
 * };
 * ```
 *
 * @example (tag with external documentation):
 * ```ts
 * const tag: Tag = {
 *   name: "pets",
 *   description: "Pet store operations",
 *   externalDocs: {
 *     description: "Find out more about pet management",
 *     url: "https://example.com/docs/pets"
 *   }
 * };
 * ```
 */
export interface Tag extends Extension {
	/**
	 * The name of the tag. This field is required.
	 *
	 * @example "users"
	 * @example "pets"
	 * @example "authentication"
	 */
	name: string;

	/**
	 * A short description for the tag. CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "User management operations"
	 * @example "Pet store operations"
	 */
	description?: string;

	/**
	 * Additional external documentation for this tag.
	 *
	 * @example { description: "Find out more about user management", url: "https://example.com/docs/users" }
	 */
	externalDocs?: ExternalDocumentation;
}

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
 * @property `description` - Optional A short description of the target documentation
 * @property `url` - Required The URL for the target documentation
 * @property `x-${string}` - Specification Extensions
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
	description?: string;

	/**
	 * The URL for the target documentation. This field is required and MUST be in the
	 * format of a URL.
	 *
	 * @example "https://example.com/docs"
	 * @example "https://docs.example.com/api"
	 */
	url: string;
}
