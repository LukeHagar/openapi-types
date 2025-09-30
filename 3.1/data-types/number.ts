import type { Extension } from "../extensions";
import type { XML } from "../xml";

/**
 * -----
 * Number Schema
 * -----
 *
 * A schema for number values. Includes number-specific validation properties
 * that are only valid when `type: "number"` is specified.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#data-types | OpenAPI 3.1.1 Data Types} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#data-types | OpenAPI 3.1.0 Data Types} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type: "number"` - Required The type identifier for number schemas
 * @property `format` - Optional The format of the number
 * @property `multipleOf` - Optional Number must be a multiple of this value
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
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "number".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic number):
 * ```ts
 * const numberSchema: NumberSchema = {
 *   type: "number"
 * };
 * ```
 *
 * @example (number with format and validation):
 * ```ts
 * const numberSchema: NumberSchema = {
 *   type: "number",
 *   format: "float",
 *   minimum: 0,
 *   maximum: 100
 * };
 * ```
 *
 * @example (number with multipleOf):
 * ```ts
 * const numberSchema: NumberSchema = {
 *   type: "number",
 *   multipleOf: 0.5
 * };
 * ```
 *
 * @example (number with exclusive bounds):
 * ```ts
 * const numberSchema: NumberSchema = {
 *   type: "number",
 *   exclusiveMinimum: 0,
 *   exclusiveMaximum: 100
 * };
 * ```
 */
export interface NumberSchema extends Extension {
  /**
   * The type identifier for number schemas.
   * Must be "number".
   */
  type: "number";

  /**
   * The format of the number.
   * See OpenAPI 3.1.x Data Type Formats for further details.
   *
   * Example: `"float"`, `"double"`
   */
  format?: string;

  /**
   * The number must be a multiple of this value.
   * Must be a positive number.
   *
   * Example: `0.5`
   */
  multipleOf?: number;

  /**
   * The maximum value of the number (inclusive).
   * The number must be less than or equal to this value.
   *
   * Example: `100`
   */
  maximum?: number;

  /**
   * The minimum value of the number (inclusive).
   * The number must be greater than or equal to this value.
   *
   * Example: `0`
   */
  minimum?: number;

  /**
   * The maximum value of the number (exclusive).
   * The number must be less than this value.
   *
   * Example: `100`
   */
  exclusiveMaximum?: number;

  /**
   * The minimum value of the number (exclusive).
   * The number must be greater than this value.
   *
   * Example: `0`
   */
  exclusiveMinimum?: number;

  /**
   * An array of allowed values for the number.
   * The value must be one of the values in this array.
   *
   * Example: `[1, 2, 3, 4, 5]`
   */
  enum?: number[];

  /**
   * A single allowed value for the number.
   * The value must be exactly this value.
   *
   * Example: `42`
   */
  const?: number;

  /**
   * An example value for the number.
   * This is for documentation purposes only.
   *
   * Example: `42`
   */
  example?: number;

  /**
   * An array of example values for the number.
   * These are for documentation purposes only.
   *
   * Example: `[1.5, 2.7, 3.14]`
   */
  examples?: number[];

  /**
   * The default value for the number.
   * This value will be used if no value is provided.
   *
   * Example: `0`
   */
  default?: number;

  /**
   * A short title for the schema.
   * This is for documentation purposes only.
   *
   * Example: `"Price"`
   */
  title?: string;

  /**
   * A description of the schema.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * Example: `"The price of the item"`
   */
  description?: string;

  /**
   * XML representation metadata for the schema.
   * Allows for fine-tuned XML model definitions.
   *
   * Example: `{ name: "price", attribute: false }`
   */
  xml?: XML;
}
