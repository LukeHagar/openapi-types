import type { Extension } from "../extensions"

/**
 * -----
 * Array Schema
 * -----
 *
 * A schema for array data types with array-specific validation constraints.
 * Only valid with `type: "array"` and includes array properties like
 * `items`, `maxItems`, `minItems`, and `uniqueItems`.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object | OpenAPI 3.0.0 Schema Object} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object | OpenAPI 3.0.1 Schema Object} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object | OpenAPI 3.0.2 Schema Object} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object | OpenAPI 3.0.3 Schema Object} |
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object | OpenAPI 3.0.4 Schema Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `type` - Must be "array"
 * @key `items` - Schema for the items in the array
 * @key `maxItems` - Maximum number of items in the array
 * @key `minItems` - Minimum number of items in the array
 * @key `uniqueItems` - Whether all items must be unique
 * @key `title` - A short title for the schema
 * @key `description` - A short description of the schema
 * @key `default` - Default value for the schema
 * @key `example` - Example value for the schema
 * @key `enum` - Enumeration of valid array values
 * @key `readOnly` - Whether the property is read-only
 * @key `writeOnly` - Whether the property is write-only
 * @key `xml` - XML representation metadata
 * @key `externalDocs` - Additional external documentation
 * @key `deprecated` - Whether the schema is deprecated
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * Array-specific constraints (`items`, `maxItems`, `minItems`, `uniqueItems`) are only
 * valid with `type: "array"`. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic array):
 * ```ts
 * const arraySchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" },
 *   description: "Array of strings"
 * };
 * ```
 *
 * @example (array with validation):
 * ```ts
 * const tagsSchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" },
 *   minItems: 1,
 *   maxItems: 10,
 *   uniqueItems: true,
 *   description: "Array of unique tags"
 * };
 * ```
 *
 * @example (array of objects):
 * ```ts
 * const usersSchema: ArraySchema = {
 *   type: "array",
 *   items: { $ref: "#/components/schemas/User" },
 *   description: "Array of user objects"
 * };
 * ```
 *
 * @example (array with enum):
 * ```ts
 * const statusesSchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string", enum: ["active", "inactive"] },
 *   description: "Array of status values"
 * };
 * ```
 */
export interface ArraySchema extends Extension {
  /**
   * The type of the schema. Must be "array" for array schemas.
   * 
   * @example "array"
   */
  type: "array"

  /**
   * A short title for the schema.
   * 
   * @example "Tags"
   * @example "User List"
   */
  title?: string

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "Array of tag strings"
   * @example "List of user objects"
   */
  description?: string

  /**
   * The default value for the schema.
   * 
   * @example ["tag1", "tag2"]
   * @example []
   */
  default?: any[]

  /**
   * Example value for the schema.
   * 
   * @example ["example1", "example2"]
   * @example [1, 2, 3]
   */
  example?: any[]

  /**
   * Enumeration of valid array values.
   * 
   * @example [["a", "b"], ["c", "d"]]
   * @example [[1, 2], [3, 4]]
   */
  enum?: any[][]

  /**
   * Whether the property is read-only. Default value is false.
   * 
   * @default false
   * @example true
   */
  readOnly?: boolean

  /**
   * Whether the property is write-only. Default value is false.
   * 
   * @default false
   * @example true
   */
  writeOnly?: boolean

  /**
   * XML representation metadata for the schema.
   * 
   * @example { name: "tags", wrapped: true }
   */
  xml?: any // Will be properly typed when we import XML type

  /**
   * Additional external documentation for the schema.
   * 
   * @example { description: "Find out more about this field", url: "https://example.com/docs" }
   */
  externalDocs?: any // Will be properly typed when we import ExternalDocumentation type

  /**
   * Whether the schema is deprecated. Default value is false.
   * 
   * @default false
   * @example true
   */
  deprecated?: boolean

  // Array-specific validation constraints
  /**
   * Schema for the items in the array. This field is required for array schemas.
   * 
   * @example { type: "string" }
   * @example { $ref: "#/components/schemas/User" }
   */
  items?: any // Will be properly typed as Schema | Reference when we set up the circular reference

  /**
   * Maximum number of items in the array. The value MUST be a non-negative integer.
   * 
   * @example 10
   * @example 100
   */
  maxItems?: number

  /**
   * Minimum number of items in the array. The value MUST be a non-negative integer.
   * 
   * @example 1
   * @example 0
   */
  minItems?: number

  /**
   * Whether all items in the array must be unique. Default value is false.
   * 
   * @default false
   * @example true
   */
  uniqueItems?: boolean
}
