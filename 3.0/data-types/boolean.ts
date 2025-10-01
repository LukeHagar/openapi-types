import type { Extension } from "../extensions";
import type { ExternalDocumentation } from "../externalDocs";
import type { XML } from "../xml";

/**
 * -----
 * Boolean Schema
 * -----
 *
 * A schema for boolean data types (true/false values) with basic validation.
 * Only valid with `type: "boolean"` and includes common metadata properties
 * but no boolean-specific validation constraints.
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
 * @property `type` - Must be "boolean"
 * @property `title` - A short title for the schema
 * @property `description` - A short description of the schema
 * @property `default` - Default value for the schema
 * @property `example` - Example value for the schema
 * @property `enum` - Enumeration of valid boolean values
 * @property `readOnly` - Whether the property is read-only
 * @property `writeOnly` - Whether the property is write-only
 * @property `xml` - XML representation metadata
 * @property `externalDocs` - Additional external documentation
 * @property `deprecated` - Whether the schema is deprecated
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Boolean schemas have no type-specific validation constraints beyond
 * the basic metadata properties. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic boolean):
 * ```ts
 * const booleanSchema: BooleanSchema = {
 *   type: "boolean",
 *   description: "A true/false value"
 * };
 * ```
 *
 * @example (boolean with default):
 * ```ts
 * const enabledSchema: BooleanSchema = {
 *   type: "boolean",
 *   default: false,
 *   description: "Whether the feature is enabled"
 * };
 * ```
 *
 * @example (boolean with enum):
 * ```ts
 * const statusSchema: BooleanSchema = {
 *   type: "boolean",
 *   enum: [true, false],
 *   default: false,
 *   description: "Active status"
 * };
 * ```
 *
 * @example (read-only boolean):
 * ```ts
 * const computedSchema: BooleanSchema = {
 *   type: "boolean",
 *   readOnly: true,
 *   description: "Computed value that cannot be set directly"
 * };
 * ```
 */
export interface BooleanSchema extends Extension {
  /**
   * The type of the schema. Must be "boolean" for boolean schemas.
   *
   * @example "boolean"
   */
  type: "boolean";

  /**
   * A short title for the schema.
   *
   * @example "Is Active"
   * @example "Enabled"
   */
  title?: string;

  /**
   * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
   *
   * @example "Whether the user is active"
   * @example "Feature enabled status"
   */
  description?: string;

  /**
   * The default value for the schema.
   *
   * @example true
   * @example false
   */
  default?: boolean;

  /**
   * Example value for the schema.
   *
   * @example true
   * @example false
   */
  example?: boolean;

  /**
   * Enumeration of valid boolean values.
   *
   * @example [true, false]
   */
  enum?: boolean[];

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
   * @example { name: "isActive", attribute: true }
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
}
