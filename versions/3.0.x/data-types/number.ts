import type { Extension } from "../extensions"

/**
 * -----
 * Number Schema
 * -----
 *
 * A schema for numeric data types (floating-point numbers) with numeric-specific
 * validation constraints. Only valid with `type: "number"` and includes numeric
 * properties like `multipleOf`, `maximum`, `minimum`, etc.
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
 * @key `type` - Must be "number"
 * @key `format` - The extending format for the number type
 * @key `multipleOf` - Number must be a multiple of this value
 * @key `maximum` - Maximum value (inclusive)
 * @key `exclusiveMaximum` - Maximum value (exclusive)
 * @key `minimum` - Minimum value (inclusive)
 * @key `exclusiveMinimum` - Minimum value (exclusive)
 * @key `title` - A short title for the schema
 * @key `description` - A short description of the schema
 * @key `default` - Default value for the schema
 * @key `example` - Example value for the schema
 * @key `enum` - Enumeration of valid number values
 * @key `readOnly` - Whether the property is read-only
 * @key `writeOnly` - Whether the property is write-only
 * @key `xml` - XML representation metadata
 * @key `externalDocs` - Additional external documentation
 * @key `deprecated` - Whether the schema is deprecated
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * Numeric constraints (`multipleOf`, `maximum`, `minimum`, etc.) are only
 * valid with `type: "number"` or `type: "integer"`. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic number):
 * ```ts
 * const numberSchema: NumberSchema = {
 *   type: "number",
 *   description: "A floating-point number"
 * };
 * ```
 *
 * @example (number with format):
 * ```ts
 * const floatSchema: NumberSchema = {
 *   type: "number",
 *   format: "float",
 *   description: "Single precision floating-point number"
 * };
 * ```
 *
 * @example (number with validation):
 * ```ts
 * const priceSchema: NumberSchema = {
 *   type: "number",
 *   minimum: 0,
 *   maximum: 999.99,
 *   multipleOf: 0.01,
 *   description: "Price in dollars with cent precision"
 * };
 * ```
 *
 * @example (number with enum):
 * ```ts
 * const ratingSchema: NumberSchema = {
 *   type: "number",
 *   enum: [1.0, 2.0, 3.0, 4.0, 5.0],
 *   default: 3.0,
 *   description: "Product rating from 1 to 5"
 * };
 * ```
 */
export interface NumberSchema extends Extension {
  /**
   * The type of the schema. Must be "number" for number schemas.
   * 
   * @example "number"
   */
  type: "number"

  /**
   * The extending format for the number type. See OpenAPI 3.0.x Data Type Formats for details.
   * 
   * @example "float"
   * @example "double"
   */
  format?: string

  /**
   * A short title for the schema.
   * 
   * @example "Price"
   * @example "Temperature"
   */
  title?: string

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "The price in dollars"
   * @example "Temperature in Celsius"
   */
  description?: string

  /**
   * The default value for the schema.
   * 
   * @example 0
   * @example 25.5
   */
  default?: number

  /**
   * Example value for the schema.
   * 
   * @example 19.99
   * @example 98.6
   */
  example?: number

  /**
   * Enumeration of valid number values.
   * 
   * @example [1.0, 2.0, 3.0, 4.0, 5.0]
   * @example [0.0, 0.5, 1.0]
   */
  enum?: number[]

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
   * @example { name: "price", attribute: true }
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

  // Number-specific validation constraints
  /**
   * A number is valid against "multipleOf" if the result of the division
   * of the instance by this keyword's value is an integer.
   * 
   * @example 0.01
   * @example 0.1
   * @example 2
   */
  multipleOf?: number

  /**
   * A number is valid against "maximum" if it is less than or equal to this value.
   * 
   * @example 100
   * @example 999.99
   */
  maximum?: number

  /**
   * A number is valid against "exclusiveMaximum" if it is strictly less than this value.
   * 
   * @example 100
   * @example 1000
   */
  exclusiveMaximum?: number

  /**
   * A number is valid against "minimum" if it is greater than or equal to this value.
   * 
   * @example 0
   * @example -273.15
   */
  minimum?: number

  /**
   * A number is valid against "exclusiveMinimum" if it is strictly greater than this value.
   * 
   * @example 0
   * @example -100
   */
  exclusiveMinimum?: number
}
