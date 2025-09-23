import type { Extension } from "../extensions"

/**
 * -----
 * Composition Schema
 * -----
 *
 * A schema that uses composition keywords (allOf, anyOf, oneOf, not) for schema
 * composition and logical operations. These keywords are mutually exclusive with
 * `$ref` but can appear with any validation keywords.
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
 * @key `allOf` - Array of schemas that must all be valid
 * @key `anyOf` - Array of schemas where at least one must be valid
 * @key `oneOf` - Array of schemas where exactly one must be valid
 * @key `not` - Schema that must not be valid
 * @key `title` - A short title for the schema
 * @key `description` - A short description of the schema
 * @key `default` - Default value for the schema
 * @key `example` - Example value for the schema
 * @key `enum` - Enumeration of valid values
 * @key `readOnly` - Whether the property is read-only
 * @key `writeOnly` - Whether the property is write-only
 * @key `xml` - XML representation metadata
 * @key `externalDocs` - Additional external documentation
 * @key `deprecated` - Whether the schema is deprecated
 * @key `discriminator` - Discriminator for polymorphism
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * Composition keywords are mutually exclusive with `$ref` but can appear with
 * any validation keywords. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (allOf composition):
 * ```ts
 * const composedSchema: CompositionSchema = {
 *   allOf: [
 *     { $ref: "#/components/schemas/BaseUser" },
 *     { type: "object", required: ["id"] }
 *   ],
 *   description: "User with base properties plus required id"
 * };
 * ```
 *
 * @example (anyOf composition):
 * ```ts
 * const flexibleSchema: CompositionSchema = {
 *   anyOf: [
 *     { type: "string" },
 *     { type: "integer" }
 *   ],
 *   description: "String or integer value"
 * };
 * ```
 *
 * @example (oneOf composition):
 * ```ts
 * const choiceSchema: CompositionSchema = {
 *   oneOf: [
 *     { $ref: "#/components/schemas/Dog" },
 *     { $ref: "#/components/schemas/Cat" }
 *   ],
 *   discriminator: "petType",
 *   description: "Either a dog or cat"
 * };
 * ```
 *
 * @example (not composition):
 * ```ts
 * const exclusionSchema: CompositionSchema = {
 *   not: { type: "null" },
 *   description: "Any value except null"
 * };
 * ```
 */
export interface CompositionSchema extends Extension {
  /**
   * A short title for the schema.
   * 
   * @example "Composed User"
   * @example "Flexible Value"
   */
  title?: string

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "Schema composed from multiple base schemas"
   * @example "Value that can be string or number"
   */
  description?: string

  /**
   * The default value for the schema.
   * 
   * @example "default value"
   * @example { name: "default" }
   */
  default?: any

  /**
   * Example value for the schema.
   * 
   * @example "example value"
   * @example { name: "example" }
   */
  example?: any

  /**
   * Enumeration of valid values.
   * 
   * @example ["value1", "value2"]
   * @example [1, 2, 3]
   */
  enum?: any[]

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
   * @example { name: "composed", wrapped: true }
   */
  xml?: any // Will be properly typed when we import XML type

  /**
   * Additional external documentation for the schema.
   * 
   * @example { description: "Find out more about this schema", url: "https://example.com/docs" }
   */
  externalDocs?: any // Will be properly typed when we import ExternalDocumentation type

  /**
   * Whether the schema is deprecated. Default value is false.
   * 
   * @default false
   * @example true
   */
  deprecated?: boolean

  /**
   * Discriminator for polymorphism. The property name used to differentiate between schemas.
   * 
   * @example "petType"
   * @example "type"
   */
  discriminator?: any // Will be properly typed when we import Discriminator type

  // Composition keywords (mutually exclusive)
  /**
   * Array of schemas that must all be valid for the instance to be valid.
   * 
   * @example [{ $ref: "#/components/schemas/Base" }, { type: "object", required: ["id"] }]
   */
  allOf?: any[] // Will be properly typed as (Schema | Reference)[] when we set up the circular reference

  /**
   * Array of schemas where at least one must be valid for the instance to be valid.
   * 
   * @example [{ type: "string" }, { type: "integer" }]
   */
  anyOf?: any[] // Will be properly typed as (Schema | Reference)[] when we set up the circular reference

  /**
   * Array of schemas where exactly one must be valid for the instance to be valid.
   * 
   * @example [{ $ref: "#/components/schemas/Dog" }, { $ref: "#/components/schemas/Cat" }]
   */
  oneOf?: any[] // Will be properly typed as (Schema | Reference)[] when we set up the circular reference

  /**
   * Schema that must not be valid for the instance to be valid.
   * 
   * @example { type: "null" }
   * @example { type: "string", maxLength: 0 }
   */
  not?: any // Will be properly typed as Schema | Reference when we set up the circular reference
}
