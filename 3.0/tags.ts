import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";

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
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#tag-object | OpenAPI 3.0.4 Tag} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#tag-object | OpenAPI 3.0.3 Tag} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#tag-object | OpenAPI 3.0.2 Tag} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#tag-object | OpenAPI 3.0.1 Tag} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#tag-object | OpenAPI 3.0.0 Tag} |
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
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#tag-object  | OpenAPI 3.0.4 Tag Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#tag-object  | OpenAPI 3.0.3 Tag Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#tag-object  | OpenAPI 3.0.2 Tag Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#tag-object  | OpenAPI 3.0.1 Tag Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#tag-object  | OpenAPI 3.0.0 Tag Object - name} |
	 * @property `name` - Required The name of the tag
	 *
	 * @example "users"
	 * @example "pets"
	 * @example "authentication"
	 */
	name: string;

	/**
	 * A short description for the tag. CommonMark syntax MAY be used for rich text representation.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#tag-object  | OpenAPI 3.0.4 Tag Object - description} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#tag-object  | OpenAPI 3.0.3 Tag Object - description} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#tag-object  | OpenAPI 3.0.2 Tag Object - description} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#tag-object  | OpenAPI 3.0.1 Tag Object - description} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#tag-object  | OpenAPI 3.0.0 Tag Object - description} |
	 * @property `description` - Optional A short description for the tag
	 *
	 * @example "User management operations"
	 * @example "Pet store operations"
	 */
	description?: string;

	/**
	 * Additional external documentation for this tag.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#tag-object  | OpenAPI 3.0.4 Tag Object - externalDocs} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#tag-object  | OpenAPI 3.0.3 Tag Object - externalDocs} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#tag-object  | OpenAPI 3.0.2 Tag Object - externalDocs} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#tag-object  | OpenAPI 3.0.1 Tag Object - externalDocs} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#tag-object  | OpenAPI 3.0.0 Tag Object - externalDocs} |
	 * @property `externalDocs` - Optional Additional external documentation for this tag
	 *
	 * @example { description: "Find out more about user management", url: "https://example.com/docs/users" }
	 */
	externalDocs?: ExternalDocumentation;
}
