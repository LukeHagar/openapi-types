import type { Extension } from "../extensions";

/**
 * -----
 * String Schema
 * -----
 *
 * A schema for string values. Includes string-specific validation properties
 * that are only valid when `type: "string"` is specified.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#data-types | OpenAPI 3.2.0 Data Types} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type: "string"` - Required The type identifier for string schemas
 * @property `format` - Optional The format of the string
 * @property `maxLength` - Optional Maximum length of the string
 * @property `minLength` - Optional Minimum length of the string
 * @property `pattern` - Optional Regular expression pattern
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "string".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic string):
 * ```ts
 * const stringSchema: StringSchema = {
 *   type: "string"
 * };
 * ```
 *
 * @example (string with format and validation):
 * ```ts
 * const stringSchema: StringSchema = {
 *   type: "string",
 *   format: "email",
 *   maxLength: 255,
 *   minLength: 5
 * };
 * ```
 *
 * @example (string with enum):
 * ```ts
 * const stringSchema: StringSchema = {
 *   type: "string",
 *   enum: ["active", "inactive", "pending"]
 * };
 * ```
 *
 * @example (string with pattern):
 * ```ts
 * const stringSchema: StringSchema = {
 *   type: "string",
 *   pattern: "^[A-Za-z0-9]+$"
 * };
 * ```
 */
export interface StringSchema extends Extension {
	/**
	 * The type identifier for string schemas.
	 * Must be "string".
	 */
	type: "string";

	/**
	 * The format of the string.
	 * See OpenAPI 3.2.0 Data Type Formats for further details.
	 *
	 * Example: `"email"`, `"date-time"`, `"uuid"`
	 */
	format?: string;

	/**
	 * The maximum length of the string.
	 * Must be a non-negative integer.
	 *
	 * Example: `255`
	 */
	maxLength?: number;

	/**
	 * The minimum length of the string.
	 * Must be a non-negative integer.
	 *
	 * Example: `1`
	 */
	minLength?: number;

	/**
	 * A regular expression pattern that the string must match.
	 * Should be a valid ECMA 262 regular expression.
	 *
	 * Example: `"^[A-Za-z0-9]+$"`
	 */
	pattern?: string;

	/**
	 * An array of allowed values for the string.
	 * The value must be one of the values in this array.
	 *
	 * Example: `["active", "inactive", "pending"]`
	 */
	enum?: string[];

	/**
	 * A single allowed value for the string.
	 * The value must be exactly this value.
	 *
	 * Example: `"active"`
	 */
	const?: string;

	/**
	 * An array of example values for the string.
	 * These are for documentation purposes only.
	 *
	 * Example: `["example@email.com", "test@domain.com"]`
	 */
	examples?: string[];

	/**
	 * The default value for the string.
	 * This value will be used if no value is provided.
	 *
	 * Example: `"default"`
	 */
	default?: string;

	/**
	 * A short title for the schema.
	 * This is for documentation purposes only.
	 *
	 * Example: `"User Email"`
	 */
	title?: string;

	/**
	 * A description of the schema.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * Example: `"The email address of the user"`
	 */
	description?: string;
}
