import type { Extension } from "../extensions"

/**
 * -----
 * Number Schema
 * -----
 *
 * Schema for number data types in Swagger 2.0.
 * 
 * Number schemas represent numeric data including both integers and floating-point
 * numbers. They support various formats and validation rules to ensure data
 * integrity and provide meaningful constraints for numeric values.
 *
 * Number schemas are commonly used for quantities, prices, measurements, and
 * other numeric data in APIs. They support range validation, precision control,
 * and multiple format specifications.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#data-types | Swagger 2.0 Data Types} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Schema Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `type` - Must be "number" for number schemas.
 * @key `format` - The extending format for the number type (e.g., "float", "double").
 * @key `description` - A short description of the number schema.
 * @key `title` - A short title for the number schema.
 * @key `default` - Declares the default value for the number.
 * @key `multipleOf` - The number must be a multiple of this value.
 * @key `maximum` - Maximum value for the number.
 * @key `exclusiveMaximum` - Whether the maximum value is exclusive.
 * @key `minimum` - Minimum value for the number.
 * @key `exclusiveMinimum` - Whether the minimum value is exclusive.
 * @key `example` - Example number value.
 *
 * @note
 * Number schemas inherit common properties from BaseSchemaProperties and add
 * numeric-specific validation properties. The `format` property is important
 * for distinguishing between different numeric representations (float vs double).
 *
 * -----
 * Examples
 * -----
 *
 * @example (price number):
 * ```ts
 * const priceSchema: NumberSchema = {
 *   type: "number",
 *   format: "double",
 *   description: "Price in USD",
 *   minimum: 0,
 *   maximum: 999999.99,
 *   multipleOf: 0.01,
 *   example: 29.99
 * };
 * ```
 *
 * @example (percentage number):
 * ```ts
 * const percentageSchema: NumberSchema = {
 *   type: "number",
 *   format: "float",
 *   description: "Percentage value",
 *   minimum: 0,
 *   maximum: 100,
 *   example: 85.5
 * };
 * ```
 *
 * @example (coordinate number):
 * ```ts
 * const coordinateSchema: NumberSchema = {
 *   type: "number",
 *   format: "double",
 *   description: "Geographic coordinate",
 *   minimum: -180,
 *   maximum: 180,
 *   example: -122.4194
 * };
 * ```
 *
 * @example (rating number):
 * ```ts
 * const ratingSchema: NumberSchema = {
 *   type: "number",
 *   format: "float",
 *   description: "User rating",
 *   minimum: 1,
 *   maximum: 5,
 *   multipleOf: 0.1,
 *   example: 4.5
 * };
 * ```
 */
export interface NumberSchema extends Extension {
  /**
   * The type of the schema. Must be "number" for number schemas.
   * 
   * This property is required and must be set to "number" to indicate
   * that this schema represents numeric data (both integers and floating-point).
   * 
   * @example "number"
   */
  type: "number"
  
  /**
   * The extending format for the previously mentioned type. 
   * See Swagger 2.0 Data Type Formats for further details.
   * 
   * Formats provide additional semantic information about the data type,
   * enabling more precise validation and better tooling support. Swagger 2.0
   * defines several standard formats, but custom formats are also allowed.
   * 
   * @see {@link https://swagger.io/specification/v2/#dataTypeFormat | Swagger 2.0 Data Type Formats}
   * 
   * @example "int32"
   * @example "date"
   * @example "email"
   * @example "uuid"
   */
  format?: string
  
  /**
   * A short description of the schema. GFM syntax can be used for rich text representation.
   * 
   * This description should provide clear information about what the schema
   * represents and how it should be used. It's commonly displayed in API
   * documentation and code generation tools.
   * 
   * @example "A user object containing basic information"
   * @example "Email address in RFC 5322 format"
   */
  description?: string
  
  /**
   * A short title for the schema.
   * 
   * The title provides a human-readable name for the schema, often used
   * in documentation and UI displays. It should be concise but descriptive.
   * 
   * @example "User"
   * @example "Pet"
   * @example "Order"
   */
  title?: string
  
  /**
   * Declares the value of the schema that the server will use if none is provided.
   * Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object.
   * 
   * This is a Swagger 2.0 specific requirement that differs from JSON Schema.
   * The default value must be valid according to the schema's type and constraints.
   * 
   * @example "defaultValue"
   * @example 10
   * @example { name: "John", age: 30 }
   * @example ["item1", "item2"]
   */
  default?: unknown
  
  /**
   * An instance validates successfully against this keyword if its value is equal to one of the elements in this keyword's array value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1 | JSON Schema Validation - enum}
   * 
   * @example ["option1", "option2", "option3"]
   * @example ["red", "green", "blue"]
   * @example [1, 2, 3, 4, 5]
   */
  enum?: unknown[]
  
  /**
   * A free-form property to include an example of an instance for this schema.
   * 
   * Examples help developers understand how to use the schema and what kind
   * of data is expected. They are commonly used by documentation generators
   * and API testing tools.
   * 
   * @example { name: "Puma", id: 1 }
   * @example "example string value"
   * @example 42
   * @example ["item1", "item2"]
   */
  example?: unknown
  
  /**
   * A number is valid against "multipleOf" if the result of the division
   * of the instance by this keyword's value is an integer.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.1 | JSON Schema Validation - multipleOf}
   * 
   * @example 2
   * @example 0.01
   */
  multipleOf?: number
  
  /**
   * A number is valid against "maximum" if it is less than or equal to this value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2 | JSON Schema Validation - maximum}
   * 
   * @example 100
   * @example 999.99
   */
  maximum?: number
  
  /**
   * A number is valid against "exclusiveMaximum" if it is strictly less than this value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2 | JSON Schema Validation - exclusiveMaximum}
   * 
   * @example false
   * @example true
   */
  exclusiveMaximum?: boolean
  
  /**
   * A number is valid against "minimum" if it is greater than or equal to this value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3 | JSON Schema Validation - minimum}
   * 
   * @example 0
   * @example 1
   */
  minimum?: number
  
  /**
   * A number is valid against "exclusiveMinimum" if it is strictly greater than this value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.3 | JSON Schema Validation - exclusiveMinimum}
   * 
   * @example false
   * @example true
   */
  exclusiveMinimum?: boolean
}
