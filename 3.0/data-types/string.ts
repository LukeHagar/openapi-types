import type { Extension } from "../extensions";
import type { ExternalDocumentation } from "../externalDocs";
import type { XML } from "../xml";

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
 * @property `type` - Must be "string"
 * @property `format` - The extending format for the string type
 * @property `maxLength` - Maximum length of the string
 * @property `minLength` - Minimum length of the string
 * @property `pattern` - Regular expression pattern the string must match
 * @property `title` - A short title for the schema
 * @property `description` - A short description of the schema
 * @property `default` - Default value for the schema
 * @property `example` - Example value for the schema
 * @property `enum` - Enumeration of valid string values
 * @property `readOnly` - Whether the property is read-only
 * @property `writeOnly` - Whether the property is write-only
 * @property `xml` - XML representation metadata
 * @property `externalDocs` - Additional external documentation
 * @property `deprecated` - Whether the schema is deprecated
 * @property `x-${string}` - Specification Extensions
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
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - type} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - type} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - type} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - type} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - type} |
   * @property `type` - Required The type of the schema
   *
   * @example "string"
   */
  type: "string";

  /**
   * The extending format for the string type. See OpenAPI 3.0.x Data Type Formats for details.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - format} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - format} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - format} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - format} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - format} |
   * @property `format` - Optional The extending format for the string type
   *
   * @example "email"
   * @example "date"
   * @example "uuid"
   * @example "uri"
   */
  format?: string;

  /**
   * A short title for the schema.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - title} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - title} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - title} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - title} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - title} |
   * @property `title` - Optional A short title for the schema
   *
   * @example "User Name"
   * @example "Email Address"
   */
  title?: string;

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - description} |
   * @property `description` - Optional A short description of the schema
   *
   * @example "The user's full name"
   * @example "Email address in RFC 5322 format"
   */
  description?: string;

  /**
   * The default value for the schema.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - default} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - default} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - default} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - default} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - default} |
   * @property `default` - Optional The default value for the schema
   *
   * @example "John Doe"
   * @example "user@example.com"
   */
  default?: string;

  /**
   * Example value for the schema.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - example} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - example} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - example} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - example} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - example} |
   * @property `example` - Optional Example value for the schema
   *
   * @example "Jane Smith"
   * @example "admin@example.com"
   */
  example?: string;

  /**
   * Enumeration of valid string values.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - enum} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - enum} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - enum} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - enum} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - enum} |
   * @property `enum` - Optional Enumeration of valid string values
   *
   * @example ["active", "inactive", "pending"]
   * @example ["red", "green", "blue"]
   */
  enum?: string[];

  /**
   * Whether the property is read-only. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - readOnly} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - readOnly} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - readOnly} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - readOnly} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - readOnly} |
   * @property `readOnly` - Optional Whether the property is read-only
   *
   * @default false
   * @example true
   */
  readOnly?: boolean;

  /**
   * Whether the property is write-only. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - writeOnly} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - writeOnly} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - writeOnly} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - writeOnly} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - writeOnly} |
   * @property `writeOnly` - Optional Whether the property is write-only
   *
   * @default false
   * @example true
   */
  writeOnly?: boolean;

  /**
   * XML representation metadata for the schema.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - xml} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - xml} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - xml} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - xml} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - xml} |
   * @property `xml` - Optional XML representation metadata for the schema
   *
   * @example { name: "userName", attribute: false }
   */
  xml?: XML;

  /**
   * Additional external documentation for the schema.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - externalDocs} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - externalDocs} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - externalDocs} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - externalDocs} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - externalDocs} |
   * @property `externalDocs` - Optional Additional external documentation for the schema
   *
   * @example { description: "Find out more about this field", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation;

  /**
   * Whether the schema is deprecated. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - deprecated} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - deprecated} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - deprecated} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - deprecated} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - deprecated} |
   * @property `deprecated` - Optional Whether the schema is deprecated
   *
   * @default false
   * @example true
   */
  deprecated?: boolean;

  // String-specific validation constraints
  /**
   * Maximum length of the string. The value MUST be a non-negative integer.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - maxLength} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - maxLength} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - maxLength} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - maxLength} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - maxLength} |
   * @property `maxLength` - Optional Maximum length of the string
   *
   * @example 100
   * @example 255
   */
  maxLength?: number;

  /**
   * Minimum length of the string. The value MUST be a non-negative integer.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - minLength} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - minLength} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - minLength} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - minLength} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - minLength} |
   * @property `minLength` - Optional Minimum length of the string
   *
   * @example 1
   * @example 8
   */
  minLength?: number;

  /**
   * Regular expression pattern the string must match. The pattern MUST be a valid regular expression.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#schema-object  | OpenAPI 3.0.4 Schema Object - pattern} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#schema-object  | OpenAPI 3.0.3 Schema Object - pattern} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#schema-object  | OpenAPI 3.0.2 Schema Object - pattern} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#schema-object  | OpenAPI 3.0.1 Schema Object - pattern} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#schema-object  | OpenAPI 3.0.0 Schema Object - pattern} |
   * @property `pattern` - Optional Regular expression pattern the string must match
   *
   * @example "^[a-zA-Z0-9]+$"
   * @example "^\\d{4}-\\d{2}-\\d{2}$"
   */
  pattern?: string;
}
