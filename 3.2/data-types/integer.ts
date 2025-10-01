import type { Extension } from "../extensions";
import type { XML } from "../xml";

/**
 * -----
 * Integer Schema
 * -----
 *
 * A schema for integer values. Includes integer-specific validation properties
 * that are only valid when `type: "integer"` is specified.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#data-types | OpenAPI 3.2.0 Data Types} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type: "integer"` - Required The type identifier for integer schemas
 * @property `format` - Optional The format of the integer
 * @property `multipleOf` - Optional Integer must be a multiple of this value
 * @property `maximum` - Optional Maximum value (inclusive)
 * @property `minimum` - Optional Minimum value (inclusive)
 * @property `exclusiveMaximum` - Optional Maximum value (exclusive)
 * @property `exclusiveMinimum` - Optional Minimum value (exclusive)
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `xml` - Optional XML representation metadata
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "integer".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic integer):
 * ```ts
 * const integerSchema: IntegerSchema = {
 *   type: "integer"
 * };
 * ```
 *
 * @example (integer with format and validation):
 * ```ts
 * const integerSchema: IntegerSchema = {
 *   type: "integer",
 *   format: "int32",
 *   minimum: 0,
 *   maximum: 100
 * };
 * ```
 *
 * @example (integer with multipleOf):
 * ```ts
 * const integerSchema: IntegerSchema = {
 *   type: "integer",
 *   multipleOf: 5
 * };
 * ```
 *
 * @example (integer with exclusive bounds):
 * ```ts
 * const integerSchema: IntegerSchema = {
 *   type: "integer",
 *   exclusiveMinimum: 0,
 *   exclusiveMaximum: 100
 * };
 * ```
 */
export interface IntegerSchema extends Extension {
  /**
   * The type identifier for integer schemas.
   * Must be "integer".
   */
  type: "integer";

  /**
   * The format of the integer.
   * See OpenAPI 3.2.0 Data Type Formats for further details.
   *
   * Example: `"int32"`, `"int64"`
   */
  format?: string;

  /**
   * The integer must be a multiple of this value.
   * Must be a positive integer.
   *
   * Example: `5`
   */
  multipleOf?: number;

  /**
   * The maximum value of the integer (inclusive).
   * The integer must be less than or equal to this value.
   *
   * Example: `100`
   */
  maximum?: number;

  /**
   * The minimum value of the integer (inclusive).
   * The integer must be greater than or equal to this value.
   *
   * Example: `0`
   */
  minimum?: number;

  /**
   * The maximum value of the integer (exclusive).
   * The integer must be less than this value.
   *
   * Example: `100`
   */
  exclusiveMaximum?: number;

  /**
   * The minimum value of the integer (exclusive).
   * The integer must be greater than this value.
   *
   * Example: `0`
   */
  exclusiveMinimum?: number;

  /**
   * An array of allowed values for the integer.
   * The value must be one of the values in this array.
   *
   * Example: `[1, 2, 3, 4, 5]`
   */
  enum?: number[];

  /**
   * A single allowed value for the integer.
   * The value must be exactly this value.
   *
   * Example: `42`
   */
  const?: number;

  /**
   * An array of example values for the integer.
   * These are for documentation purposes only.
   *
   * Example: `[1, 2, 3]`
   */
  examples?: number[];

  /**
   * The default value for the integer.
   * This value will be used if no value is provided.
   *
   * Example: `0`
   */
  default?: number;

  /**
   * A short title for the schema.
   * This is for documentation purposes only.
   *
   * Example: `"User ID"`
   */
  title?: string;

  /**
   * A description of the schema.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * Example: `"The unique identifier of the user"`
   */
  description?: string;

  /**
   * XML representation metadata for the schema.
   * Allows for fine-tuned XML model definitions using the modernized
   * nodeType approach in OpenAPI 3.2.0.
   *
   * Example: `{ nodeType: "element", name: "userId" }`
   */
  xml?: XML;
}
