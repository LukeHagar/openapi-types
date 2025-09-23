import type { Extension } from "../extensions"

/**
 * -----
 * Integer Schema
 * -----
 *
 * Schema for integer data types in Swagger 2.0.
 * 
 * Integer schemas represent whole numbers without fractional components.
 * They support various formats and validation rules to ensure data integrity
 * and provide meaningful constraints for integer values.
 *
 * Integer schemas are commonly used for counts, IDs, timestamps, and other
 * discrete numeric values in APIs. They support range validation and multiple
 * format specifications including int32 and int64.
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
 * @key `type` - Must be "integer" for integer schemas.
 * @key `format` - The extending format for the integer type (e.g., "int32", "int64").
 * @key `description` - A short description of the integer schema.
 * @key `title` - A short title for the integer schema.
 * @key `default` - Declares the default value for the integer.
 * @key `multipleOf` - The integer must be a multiple of this value.
 * @key `maximum` - Maximum value for the integer.
 * @key `exclusiveMaximum` - Whether the maximum value is exclusive.
 * @key `minimum` - Minimum value for the integer.
 * @key `exclusiveMinimum` - Whether the minimum value is exclusive.
 * @key `example` - Example integer value.
 *
 * @note
 * Integer schemas inherit common properties from BaseSchemaProperties and add
 * numeric-specific validation properties. The `format` property is important
 * for distinguishing between different integer representations (int32 vs int64).
 *
 * -----
 * Examples
 * -----
 *
 * @example (user ID integer):
 * ```ts
 * const userIdSchema: IntegerSchema = {
 *   type: "integer",
 *   format: "int64",
 *   description: "Unique user identifier",
 *   minimum: 1,
 *   example: 12345
 * };
 * ```
 *
 * @example (age integer):
 * ```ts
 * const ageSchema: IntegerSchema = {
 *   type: "integer",
 *   format: "int32",
 *   description: "Person's age in years",
 *   minimum: 0,
 *   maximum: 150,
 *   example: 25
 * };
 * ```
 *
 * @example (quantity integer):
 * ```ts
 * const quantitySchema: IntegerSchema = {
 *   type: "integer",
 *   format: "int32",
 *   description: "Item quantity",
 *   minimum: 0,
 *   maximum: 1000,
 *   multipleOf: 1,
 *   example: 5
 * };
 * ```
 *
 * @example (timestamp integer):
 * ```ts
 * const timestampSchema: IntegerSchema = {
 *   type: "integer",
 *   format: "int64",
 *   description: "Unix timestamp in seconds",
 *   minimum: 0,
 *   example: 1640995200
 * };
 * ```
 */
export interface IntegerSchema extends Extension {
  /**
   * The type of the schema. Must be "integer" for integer schemas.
   * 
   * This property is required and must be set to "integer" to indicate
   * that this schema represents whole number data without fractional components.
   * 
   * @example "integer"
   */
  type: "integer"
  
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
   * @example "int64"
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
   * @example 1
   */
  multipleOf?: number
  
  /**
   * A number is valid against "maximum" if it is less than or equal to this value.
   * 
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.1.2 | JSON Schema Validation - maximum}
   * 
   * @example 100
   * @example 2147483647
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
