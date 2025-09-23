import type { Extension } from "../extensions"

/**
 * -----
 * String Schema
 * -----
 *
 * A schema for string data types with string-specific validation constraints.
 * Only valid with `type: "string"` and includes string-specific properties
 * like `maxLength`, `minLength`, and `pattern`.
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
 * @key `type` - Must be "string"
 * @key `format` - The extending format for the string type
 * @key `maxLength` - Maximum length of the string
 * @key `minLength` - Minimum length of the string
 * @key `pattern` - Regular expression pattern the string must match
 * @key `title` - A short title for the schema
 * @key `description` - A short description of the schema
 * @key `default` - Default value for the schema
 * @key `example` - Example value for the schema
 * @key `enum` - Enumeration of valid string values
 * @key `readOnly` - Whether the property is read-only
 * @key `writeOnly` - Whether the property is write-only
 * @key `xml` - XML representation metadata
 * @key `externalDocs` - Additional external documentation
 * @key `deprecated` - Whether the schema is deprecated
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * String-specific constraints (`maxLength`, `minLength`, `pattern`) are only
 * valid with `type: "string"`. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic string):
 * ```ts
 * const stringSchema: StringSchema = {
 *   type: "string",
 *   description: "A simple string field"
 * };
 * ```
 *
 * @example (string with format):
 * ```ts
 * const emailSchema: StringSchema = {
 *   type: "string",
 *   format: "email",
 *   description: "Email address"
 * };
 * ```
 *
 * @example (string with validation):
 * ```ts
 * const passwordSchema: StringSchema = {
 *   type: "string",
 *   minLength: 8,
 *   maxLength: 128,
 *   pattern: "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]+$",
 *   description: "Password with length and character requirements"
 * };
 * ```
 *
 * @example (string with enum):
 * ```ts
 * const statusSchema: StringSchema = {
 *   type: "string",
 *   enum: ["active", "inactive", "pending"],
 *   default: "pending",
 *   description: "User status"
 * };
 * ```
 */
export interface StringSchema extends Extension {
  /**
   * The type of the schema. Must be "string" for string schemas.
   * 
   * @example "string"
   */
  type: "string"

  /**
   * The extending format for the string type. See OpenAPI 3.0.x Data Type Formats for details.
   * 
   * @example "email"
   * @example "date"
   * @example "uuid"
   * @example "uri"
   */
  format?: string

  /**
   * A short title for the schema.
   * 
   * @example "User Name"
   * @example "Email Address"
   */
  title?: string

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "The user's full name"
   * @example "Email address in RFC 5322 format"
   */
  description?: string

  /**
   * The default value for the schema.
   * 
   * @example "John Doe"
   * @example "user@example.com"
   */
  default?: string

  /**
   * Example value for the schema.
   * 
   * @example "Jane Smith"
   * @example "admin@example.com"
   */
  example?: string

  /**
   * Enumeration of valid string values.
   * 
   * @example ["active", "inactive", "pending"]
   * @example ["red", "green", "blue"]
   */
  enum?: string[]

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
   * @example { name: "userName", attribute: false }
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

  // String-specific validation constraints
  /**
   * Maximum length of the string. The value MUST be a non-negative integer.
   * 
   * @example 100
   * @example 255
   */
  maxLength?: number

  /**
   * Minimum length of the string. The value MUST be a non-negative integer.
   * 
   * @example 1
   * @example 8
   */
  minLength?: number

  /**
   * Regular expression pattern the string must match. The pattern MUST be a valid regular expression.
   * 
   * @example "^[a-zA-Z0-9]+$"
   * @example "^\\d{4}-\\d{2}-\\d{2}$"
   */
  pattern?: string
}
