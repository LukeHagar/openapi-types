import type { Extension } from "../extensions";
import type { ExternalDocumentation } from "../externalDocs";
import type { XML } from "../xml";

/**
 * -----
 * Integer Schema
 * -----
 *
 * A schema for integer data types (whole numbers) with integer-specific
 * validation constraints. Only valid with `type: "integer"` and includes
 * numeric properties like `multipleOf`, `maximum`, `minimum`, etc.
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
 * @property `type` - Must be "integer"
 * @property `format` - The extending format for the integer type
 * @property `multipleOf` - Number must be a multiple of this value
 * @property `maximum` - Maximum value (inclusive)
 * @property `exclusiveMaximum` - Maximum value (exclusive)
 * @property `minimum` - Minimum value (inclusive)
 * @property `exclusiveMinimum` - Minimum value (exclusive)
 * @property `title` - A short title for the schema
 * @property `description` - A short description of the schema
 * @property `default` - Default value for the schema
 * @property `example` - Example value for the schema
 * @property `enum` - Enumeration of valid integer values
 * @property `readOnly` - Whether the property is read-only
 * @property `writeOnly` - Whether the property is write-only
 * @property `xml` - XML representation metadata
 * @property `externalDocs` - Additional external documentation
 * @property `deprecated` - Whether the schema is deprecated
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Integer-specific constraints (`multipleOf`, `maximum`, `minimum`, etc.) are only
 * valid with `type: "integer"`. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic integer):
 * ```ts
 * const integerSchema: IntegerSchema = {
 *   type: "integer",
 *   description: "A whole number"
 * };
 * ```
 *
 * @example (integer with format):
 * ```ts
 * const int32Schema: IntegerSchema = {
 *   type: "integer",
 *   format: "int32",
 *   description: "32-bit signed integer"
 * };
 * ```
 *
 * @example (integer with validation):
 * ```ts
 * const ageSchema: IntegerSchema = {
 *   type: "integer",
 *   minimum: 0,
 *   maximum: 150,
 *   description: "Person's age in years"
 * };
 * ```
 *
 * @example (integer with enum):
 * ```ts
 * const statusCodeSchema: IntegerSchema = {
 *   type: "integer",
 *   enum: [200, 201, 400, 401, 404, 500],
 *   description: "HTTP status code"
 * };
 * ```
 */
export interface IntegerSchema extends Extension {
  /**
   * The type of the schema. Must be "integer" for integer schemas.
   *
   * @example "integer"
   */
  type: "integer";

  /**
   * The extending format for the integer type. See OpenAPI 3.0.x Data Type Formats for details.
   *
   * @example "int32"
   * @example "int64"
   */
  format?: string;

  /**
   * A short title for the schema.
   *
   * @example "User ID"
   * @example "Age"
   */
  title?: string;

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   *
   * @example "The user's unique identifier"
   * @example "Age in years"
   */
  description?: string;

  /**
   * The default value for the schema.
   *
   * @example 0
   * @example 1
   */
  default?: number;

  /**
   * Example value for the schema.
   *
   * @example 42
   * @example 100
   */
  example?: number;

  /**
   * Enumeration of valid integer values.
   *
   * @example [1, 2, 3, 4, 5]
   * @example [0, 1, 2]
   */
  enum?: number[];

  /**
   * Whether the property is read-only. Default value is false.
   *
   * @default false
   * @example true
   */
  readOnly?: boolean;

  /**
   * Whether the property is write-only. Default value is false.
   *
   * @default false
   * @example true
   */
  writeOnly?: boolean;

  /**
   * XML representation metadata for the schema.
   *
   * @example { name: "userId", attribute: true }
   */
  xml?: XML;

  /**
   * Additional external documentation for the schema.
   *
   * @example { description: "Find out more about this field", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation;

  /**
   * Whether the schema is deprecated. Default value is false.
   *
   * @default false
   * @example true
   */
  deprecated?: boolean;

  // Integer-specific validation constraints
  /**
   * A number is valid against "multipleOf" if the result of the division
   * of the instance by this keyword's value is an integer.
   *
   * @example 1
   * @example 2
   * @example 5
   */
  multipleOf?: number;

  /**
   * A number is valid against "maximum" if it is less than or equal to this value.
   *
   * @example 100
   * @example 2147483647
   */
  maximum?: number;

  /**
   * A number is valid against "exclusiveMaximum" if it is strictly less than this value.
   *
   * @example 100
   * @example 1000
   */
  exclusiveMaximum?: number;

  /**
   * A number is valid against "minimum" if it is greater than or equal to this value.
   *
   * @example 0
   * @example 1
   */
  minimum?: number;

  /**
   * A number is valid against "exclusiveMinimum" if it is strictly greater than this value.
   *
   * @example 0
   * @example -1
   */
  exclusiveMinimum?: number;
}
