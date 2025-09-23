import type { Extension } from "./extensions"
import type { ExternalDocumentation } from "./external-documentation"

/**
 * -----
 * Tag Object
 * -----
 *
 * A grouping tag for operations. Tags can be used for logical grouping of operations 
 * by resources or any other qualifier. The order of the tags can be used to reflect 
 * on their order by the parsing tools. Not all tags that are used by the Operation 
 * Object must be declared. The tags that are not declared may be organized randomly 
 * or based on the tools' logic. Each tag name in the list MUST be unique.
 *
 * Tags provide a way to organize and categorize API operations, making it easier
 * for developers to understand and navigate the API. They are commonly used to
 * group operations by resource type, functionality, or any other logical division.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#tag-object | Swagger 2.0 Tag Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `name` - The name of the tag. This field is required and MUST be unique.
 * @key `description` - A short description for the tag. GFM syntax can be used for rich text representation.
 * @key `externalDocs` - Additional external documentation for this tag.
 *
 * @note
 * All fields are optional except for `name`. The `name` field must be unique
 * within the specification and is used to reference the tag in Operation objects.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple tag):
 * ```ts
 * const simpleTag: Tag = {
 *   name: "users",
 *   description: "User management operations"
 * };
 * ```
 *
 * @example (detailed tag):
 * ```ts
 * const detailedTag: Tag = {
 *   name: "authentication",
 *   description: "Authentication and authorization operations",
 *   externalDocs: {
 *     description: "Find out more about our authentication system",
 *     url: "https://example.com/docs/auth"
 *   }
 * };
 * ```
 *
 * @example (resource tag):
 * ```ts
 * const resourceTag: Tag = {
 *   name: "pets",
 *   description: "Pet store operations including CRUD operations for pets",
 *   externalDocs: {
 *     description: "Pet management API documentation",
 *     url: "https://petstore.example.com/docs"
 *   }
 * };
 * ```
 *
 * @example (functional tag):
 * ```ts
 * const functionalTag: Tag = {
 *   name: "reports",
 *   description: "Generate and manage various reports",
 *   externalDocs: {
 *     description: "Report generation guide",
 *     url: "https://docs.example.com/reports"
 *   }
 * };
 * ```
 *
 * @example (minimal tag):
 * ```ts
 * const minimalTag: Tag = {
 *   name: "admin"
 * };
 * ```
 */
export interface Tag extends Extension {
  /**
   * The name of the tag. This field is required and MUST be unique.
   * 
   * The tag name is used to reference this tag in Operation objects and
   * must be unique within the entire specification. It should be descriptive
   * and follow a consistent naming convention.
   * 
   * @example "users"
   * @example "pets"
   * @example "authentication"
   * @example "reports"
   */
  name: string
  
  /**
   * A short description for the tag. GFM syntax can be used for rich text representation.
   * 
   * This description provides context about what operations belong to this tag
   * and helps developers understand the purpose and scope of the tag.
   * 
   * @example "User management operations"
   * @example "Pet store operations including CRUD operations for pets"
   * @example "Authentication and authorization operations"
   */
  description?: string
  
  /**
   * Additional external documentation for this tag.
   * 
   * This allows for more detailed documentation about the tag and its
   * associated operations to be provided via external resources.
   * 
   * @example { description: "Find out more about user management", url: "https://example.com/docs/users" }
   * @example { description: "Pet management API documentation", url: "https://petstore.example.com/docs" }
   */
  externalDocs?: ExternalDocumentation
}
