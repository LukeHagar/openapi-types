import type { Extension } from "../extensions";
import type { XML } from "../xml";

/**
 * -----
 * Array Schema
 * -----
 *
 * A schema for array values. Includes array-specific validation properties
 * that are only valid when `type: "array"` is specified.
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
 * @property `type: "array"` - Required The type identifier for array schemas
 * @property `items` - Optional Schema for array items
 * @property `prefixItems` - Optional Schema for array items at specific positions
 * @property `contains` - Optional Schema that array must contain at least one item matching
 * @property `minContains` - Optional Minimum number of items that must match contains
 * @property `maxContains` - Optional Maximum number of items that must match contains
 * @property `minItems` - Optional Minimum number of items in the array
 * @property `maxItems` - Optional Maximum number of items in the array
 * @property `uniqueItems` - Optional Whether array items must be unique
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "array".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic array):
 * ```ts
 * const arraySchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" }
 * };
 * ```
 *
 * @example (array with validation):
 * ```ts
 * const arraySchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" },
 *   minItems: 1,
 *   maxItems: 10,
 *   uniqueItems: true
 * };
 * ```
 *
 * @example (array with prefixItems):
 * ```ts
 * const arraySchema: ArraySchema = {
 *   type: "array",
 *   prefixItems: [
 *     { type: "string" },
 *     { type: "number" }
 *   ]
 * };
 * ```
 *
 * @example (array with contains):
 * ```ts
 * const arraySchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" },
 *   contains: { type: "string", enum: ["admin"] },
 *   minContains: 1
 * };
 * ```
 */
export interface ArraySchema extends Extension {
	/**
	 * The type identifier for array schemas.
	 * Must be "array".
	 */
	type: "array";

	/**
	 * The schema for array items.
	 * All items in the array must conform to this schema.
	 *
	 * Example: `{ type: "string" }`
	 */
	items?: unknown;

	/**
	 * The schema for array items at specific positions.
	 * Items at position i must conform to the schema at index i.
	 *
	 * Example: `[{ type: "string" }, { type: "number" }]`
	 */
	prefixItems?: unknown[];

	/**
	 * The schema that the array must contain at least one item matching.
	 * At least one item in the array must conform to this schema.
	 *
	 * Example: `{ type: "string", enum: ["admin"] }`
	 */
	contains?: unknown;

	/**
	 * The minimum number of items that must match the contains schema.
	 * Must be a non-negative integer.
	 *
	 * Example: `1`
	 */
	minContains?: number;

	/**
	 * The maximum number of items that must match the contains schema.
	 * Must be a non-negative integer.
	 *
	 * Example: `5`
	 */
	maxContains?: number;

	/**
	 * The minimum number of items in the array.
	 * Must be a non-negative integer.
	 *
	 * Example: `1`
	 */
	minItems?: number;

	/**
	 * The maximum number of items in the array.
	 * Must be a non-negative integer.
	 *
	 * Example: `10`
	 */
	maxItems?: number;

	/**
	 * Whether array items must be unique.
	 * If true, all items in the array must be unique.
	 *
	 * Example: `true`
	 */
	uniqueItems?: boolean;

	/**
	 * An array of allowed values for the array.
	 * The value must be one of the values in this array.
	 *
	 * Example: `[["a", "b"], ["c", "d"]]`
	 */
	enum?: unknown[];

	/**
	 * A single allowed value for the array.
	 * The value must be exactly this value.
	 *
	 * Example: `["a", "b"]`
	 */
	const?: unknown;

	/**
	 * An example value for the array.
	 * This is for documentation purposes only.
	 *
	 * Example: `["a", "b"]`
	 */
	example?: unknown[];

	/**
	 * An array of example values for the array.
	 * These are for documentation purposes only.
	 *
	 * Example: `[["a", "b"], ["c", "d"]]`
	 */
	examples?: unknown[][];

	/**
	 * The default value for the array.
	 * This value will be used if no value is provided.
	 *
	 * Example: `[]`
	 */
	default?: unknown[];

	/**
	 * A short title for the schema.
	 * This is for documentation purposes only.
	 *
	 * Example: `"User Tags"`
	 */
	title?: string;

	/**
	 * A description of the schema.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * Example: `"Array of user tags"`
	 */
	description?: string;

	/**
	 * XML representation metadata for the schema.
	 * Allows for fine-tuned XML model definitions.
	 *
	 * Example: `{ name: "users", wrapped: true }`
	 */
	xml?: XML;
}
