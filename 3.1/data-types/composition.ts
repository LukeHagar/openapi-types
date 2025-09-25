import type { Extension } from "../extensions";

/**
 * -----
 * Composition Schema
 * -----
 *
 * A schema that uses composition keywords (allOf, anyOf, oneOf, not).
 * These keywords are mutually exclusive with $ref, but otherwise can
 * appear with any validation keywords. This schema type supports
 * advanced JSON Schema 2020-12 features like conditional schemas.
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
 * @property `allOf` - Optional Array of schemas that must all be satisfied
 * @property `anyOf` - Optional Array of schemas where at least one must be satisfied
 * @property `oneOf` - Optional Array of schemas where exactly one must be satisfied
 * @property `not` - Optional Schema that must not be satisfied
 * @property `if` - Optional Schema for conditional validation
 * @property `then` - Optional Schema to apply if if condition is met
 * @property `else` - Optional Schema to apply if if condition is not met
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Composition keywords are mutually exclusive with $ref. At least one composition
 * keyword must be present. The `if`/`then`/`else` keywords work together for
 * conditional validation.
 *
 * -----
 * Examples
 * -----
 *
 * @example (allOf composition):
 * ```ts
 * const compositionSchema: CompositionSchema = {
 *   allOf: [
 *     { type: "object", properties: { name: { type: "string" } } },
 *     { type: "object", properties: { age: { type: "number" } } }
 *   ]
 * };
 * ```
 *
 * @example (anyOf composition):
 * ```ts
 * const compositionSchema: CompositionSchema = {
 *   anyOf: [
 *     { type: "string" },
 *     { type: "number" }
 *   ]
 * };
 * ```
 *
 * @example (oneOf composition):
 * ```ts
 * const compositionSchema: CompositionSchema = {
 *   oneOf: [
 *     { type: "string", enum: ["active"] },
 *     { type: "string", enum: ["inactive"] }
 *   ]
 * };
 * ```
 *
 * @example (conditional schema):
 * ```ts
 * const compositionSchema: CompositionSchema = {
 *   if: { type: "object", properties: { type: { const: "user" } } },
 *   then: { type: "object", properties: { name: { type: "string" } } },
 *   else: { type: "object", properties: { id: { type: "string" } } }
 * };
 * ```
 */
export interface CompositionSchema extends Extension {
	/**
	 * An array of schemas that must all be satisfied.
	 * The value must conform to all schemas in the array.
	 *
	 * Example: `[{ type: "object" }, { properties: { name: { type: "string" } } }]`
	 */
	allOf?: unknown[];

	/**
	 * An array of schemas where at least one must be satisfied.
	 * The value must conform to at least one schema in the array.
	 *
	 * Example: `[{ type: "string" }, { type: "number" }]`
	 */
	anyOf?: unknown[];

	/**
	 * An array of schemas where exactly one must be satisfied.
	 * The value must conform to exactly one schema in the array.
	 *
	 * Example: `[{ type: "string" }, { type: "number" }]`
	 */
	oneOf?: unknown[];

	/**
	 * A schema that must not be satisfied.
	 * The value must not conform to this schema.
	 *
	 * Example: `{ type: "string" }`
	 */
	not?: unknown;

	/**
	 * A schema for conditional validation.
	 * Used with `then` and `else` for conditional logic.
	 *
	 * Example: `{ type: "object", properties: { type: { const: "user" } } }`
	 */
	if?: unknown;

	/**
	 * A schema to apply if the `if` condition is met.
	 * The value must conform to this schema if the `if` schema is satisfied.
	 *
	 * Example: `{ type: "object", properties: { name: { type: "string" } } }`
	 */
	then?: unknown;

	/**
	 * A schema to apply if the `if` condition is not met.
	 * The value must conform to this schema if the `if` schema is not satisfied.
	 *
	 * Example: `{ type: "object", properties: { id: { type: "string" } } }`
	 */
	else?: unknown;

	/**
	 * An array of allowed values.
	 * The value must be one of the values in this array.
	 *
	 * Example: `["active", "inactive"]`
	 */
	enum?: unknown[];

	/**
	 * A single allowed value.
	 * The value must be exactly this value.
	 *
	 * Example: `"active"`
	 */
	const?: unknown;

	/**
	 * An example value for the composition.
	 * This is for documentation purposes only.
	 *
	 * Example: `"example"`
	 */
	example?: unknown;

	/**
	 * An array of example values.
	 * These are for documentation purposes only.
	 *
	 * Example: `["example1", "example2"]`
	 */
	examples?: unknown[];

	/**
	 * The default value.
	 * This value will be used if no value is provided.
	 *
	 * Example: `"default"`
	 */
	default?: unknown;

	/**
	 * A short title for the schema.
	 * This is for documentation purposes only.
	 *
	 * Example: `"Composed Schema"`
	 */
	title?: string;

	/**
	 * A description of the schema.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * Example: `"A schema composed of multiple schemas"`
	 */
	description?: string;
}
