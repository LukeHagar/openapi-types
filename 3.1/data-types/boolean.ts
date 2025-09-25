import type { Extension } from "../extensions";

/**
 * -----
 * Boolean Schema
 * -----
 *
 * A schema for boolean values. Includes common validation properties
 * that are only valid when `type: "boolean"` is specified.
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
 * @property `type: "boolean"` - Required The type identifier for boolean schemas
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "boolean".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic boolean):
 * ```ts
 * const booleanSchema: BooleanSchema = {
 *   type: "boolean"
 * };
 * ```
 *
 * @example (boolean with default):
 * ```ts
 * const booleanSchema: BooleanSchema = {
 *   type: "boolean",
 *   default: false
 * };
 * ```
 *
 * @example (boolean with enum):
 * ```ts
 * const booleanSchema: BooleanSchema = {
 *   type: "boolean",
 *   enum: [true, false]
 * };
 * ```
 *
 * @example (boolean with const):
 * ```ts
 * const booleanSchema: BooleanSchema = {
 *   type: "boolean",
 *   const: true
 * };
 * ```
 */
export interface BooleanSchema extends Extension {
	/**
	 * The type identifier for boolean schemas.
	 * Must be "boolean".
	 */
	type: "boolean";

	/**
	 * An array of allowed values for the boolean.
	 * The value must be one of the values in this array.
	 *
	 * Example: `[true, false]`
	 */
	enum?: boolean[];

	/**
	 * A single allowed value for the boolean.
	 * The value must be exactly this value.
	 *
	 * Example: `true`
	 */
	const?: boolean;

	/**
	 * An example value for the boolean.
	 * This is for documentation purposes only.
	 *
	 * Example: `true`
	 */
	example?: boolean;

	/**
	 * An array of example values for the boolean.
	 * These are for documentation purposes only.
	 *
	 * Example: `[true, false]`
	 */
	examples?: boolean[];

	/**
	 * The default value for the boolean.
	 * This value will be used if no value is provided.
	 *
	 * Example: `false`
	 */
	default?: boolean;

	/**
	 * A short title for the schema.
	 * This is for documentation purposes only.
	 *
	 * Example: `"Is Active"`
	 */
	title?: string;

	/**
	 * A description of the schema.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * Example: `"Whether the user is active"`
	 */
	description?: string;
}
