import type { Extension } from "../extensions";

/**
 * -----
 * Null Schema
 * -----
 *
 * A schema that represents the null value type. This is part of the JSON Schema
 * specification and is supported in OpenAPI 3.1.x.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#schema-object | OpenAPI 3.1.1 Schema Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#schema-object | OpenAPI 3.1.0 Schema Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type` - Required The type identifier for null schemas
 * @property `title` - Optional A short title for the schema
 * @property `description` - Optional A description of the schema
 * @property `default` - Optional The default value for the schema
 * @property `examples` - Optional An array of example values
 * @property `enum` - Optional An enumeration of allowed values
 * @property `const` - Optional A constant allowed value
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `type` field must be "null". This schema type represents the null value.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic null schema):
 * ```ts
 * const nullSchema: NullSchema = {
 *   type: "null"
 * };
 * ```
 *
 * @example (null schema with description):
 * ```ts
 * const nullSchema: NullSchema = {
 *   type: "null",
 *   description: "Represents a null value"
 * };
 * ```
 *
 * @example (null schema with const):
 * ```ts
 * const nullSchema: NullSchema = {
 *   type: "null",
 *   const: null
 * };
 * ```
 */
export interface NullSchema extends Extension {
  /**
   * The type identifier for null schemas. This field is required.
   *
   * @example "null"
   */
  type: "null";

  /**
   * A short title for the schema.
   *
   * @example "Null Value"
   */
  title?: string;

  /**
   * A description of the schema. CommonMark syntax MAY be used for rich text representation.
   *
   * @example "Represents a null value"
   */
  description?: string;

  /**
   * The default value for the schema.
   *
   * @example null
   */
  default?: null;

  /**
   * An array of example values.
   *
   * @example [null]
   */
  examples?: null[];

  /**
   * An enumeration of allowed values. For null schemas, this should contain only null.
   *
   * @example [null]
   */
  enum?: null[];

  /**
   * A constant allowed value. For null schemas, this should be null.
   *
   * @example null
   */
  const?: null;
}
