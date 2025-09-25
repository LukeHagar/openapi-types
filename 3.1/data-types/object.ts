import type { Extension } from "../extensions";

/**
 * -----
 * Object Schema
 * -----
 *
 * A schema for object values. Includes object-specific validation properties
 * that are only valid when `type: "object"` is specified.
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
 * @property `type: "object"` - Required The type identifier for object schemas
 * @property `properties` - Optional Map of property names to their schemas
 * @property `required` - Optional Array of required property names
 * @property `additionalProperties` - Optional Schema for additional properties
 * @property `patternProperties` - Optional Map of regex patterns to schemas
 * @property `propertyNames` - Optional Schema for property names
 * @property `minProperties` - Optional Minimum number of properties
 * @property `maxProperties` - Optional Maximum number of properties
 * @property `dependentRequired` - Optional Map of property names to arrays of required properties
 * @property `dependentSchemas` - Optional Map of property names to schemas
 * @property `enum` - Optional Array of allowed values
 * @property `const` - Optional Single allowed value
 * @property `examples` - Optional Array of example values
 * @property `default` - Optional Default value
 * @property `title` - Optional Short title for the schema
 * @property `description` - Optional Description of the schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All validation properties are optional. The `type` field must be "object".
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic object):
 * ```ts
 * const objectSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" },
 *     age: { type: "number" }
 *   }
 * };
 * ```
 *
 * @example (object with required properties):
 * ```ts
 * const objectSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" },
 *     age: { type: "number" }
 *   },
 *   required: ["name"]
 * };
 * ```
 *
 * @example (object with additionalProperties):
 * ```ts
 * const objectSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" }
 *   },
 *   additionalProperties: { type: "string" }
 * };
 * ```
 *
 * @example (object with patternProperties):
 * ```ts
 * const objectSchema: ObjectSchema = {
 *   type: "object",
 *   patternProperties: {
 *     "^S_": { type: "string" }
 *   }
 * };
 * ```
 */
export interface ObjectSchema extends Extension {
	/**
	 * The type identifier for object schemas.
	 * Must be "object".
	 */
	type: "object";

	/**
	 * A map of property names to their schemas.
	 * Each property in the object must conform to its corresponding schema.
	 *
	 * Example: `{ name: { type: "string" }, age: { type: "number" } }`
	 */
	properties?: Record<string, unknown>;

	/**
	 * An array of required property names.
	 * These properties must be present in the object.
	 *
	 * Example: `["name", "email"]`
	 */
	required?: string[];

	/**
	 * The schema for additional properties not defined in properties.
	 * If false, no additional properties are allowed.
	 * If true, any additional properties are allowed.
	 * If a schema, additional properties must conform to this schema.
	 *
	 * Example: `{ type: "string" }` or `false` or `true`
	 */
	additionalProperties?: unknown | boolean;

	/**
	 * A map of regex patterns to schemas.
	 * Properties whose names match a pattern must conform to the corresponding schema.
	 *
	 * Example: `{ "^S_": { type: "string" } }`
	 */
	patternProperties?: Record<string, unknown>;

	/**
	 * The schema for property names.
	 * All property names in the object must conform to this schema.
	 *
	 * Example: `{ type: "string", pattern: "^[A-Za-z][A-Za-z0-9]*$" }`
	 */
	propertyNames?: unknown;

	/**
	 * The minimum number of properties in the object.
	 * Must be a non-negative integer.
	 *
	 * Example: `1`
	 */
	minProperties?: number;

	/**
	 * The maximum number of properties in the object.
	 * Must be a non-negative integer.
	 *
	 * Example: `10`
	 */
	maxProperties?: number;

	/**
	 * A map of property names to arrays of required properties.
	 * If a property is present, the properties in its array must also be present.
	 *
	 * Example: `{ credit_card: ["billing_address"] }`
	 */
	dependentRequired?: Record<string, string[]>;

	/**
	 * A map of property names to schemas.
	 * If a property is present, the object must conform to the corresponding schema.
	 *
	 * Example: `{ credit_card: { type: "object", properties: { number: { type: "string" } } } }`
	 */
	dependentSchemas?: Record<string, unknown>;

	/**
	 * An array of allowed values for the object.
	 * The value must be one of the values in this array.
	 *
	 * Example: `[{ name: "John" }, { name: "Jane" }]`
	 */
	enum?: Record<string, unknown>[];

	/**
	 * A single allowed value for the object.
	 * The value must be exactly this value.
	 *
	 * Example: `{ name: "John" }`
	 */
	const?: Record<string, unknown>;

	/**
	 * An example value for the object.
	 * This is for documentation purposes only.
	 *
	 * Example: `{ name: "John" }`
	 */
	example?: Record<string, unknown>;

	/**
	 * An array of example values for the object.
	 * These are for documentation purposes only.
	 *
	 * Example: `[{ name: "John", age: 30 }]`
	 */
	examples?: Record<string, unknown>[];

	/**
	 * The default value for the object.
	 * This value will be used if no value is provided.
	 *
	 * Example: `{}`
	 */
	default?: Record<string, unknown>;

	/**
	 * A short title for the schema.
	 * This is for documentation purposes only.
	 *
	 * Example: `"User"`
	 */
	title?: string;

	/**
	 * A description of the schema.
	 * CommonMark syntax MAY be used for rich text representation.
	 *
	 * Example: `"A user object"`
	 */
	description?: string;
}
