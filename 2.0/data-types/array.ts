import type { Extension } from "../extensions";
import type { Schema } from "../schema";
import type { XMLObject } from "../xml";

/**
 * -----
 * Array Schema
 * -----
 *
 * Schema for array data types in Swagger 2.0.
 *
 * Array schemas represent ordered collections of items, where each item conforms
 * to a specified schema. They are based on JSON Schema Draft 4 with Swagger-specific
 * adjustments, providing comprehensive validation for array data structures.
 *
 * Array schemas are commonly used for lists, collections, and ordered data in APIs.
 * They support validation of array length, item uniqueness, and item type constraints.
 * The items property defines the schema that each array element must conform to.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#data-types | Swagger 2.0 Data Types} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Schema Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type` - Must be "array" for array schemas.
 * @property `items` - Required. Describes the type of items in the array.
 * @property `description` - A short description of the array schema.
 * @property `title` - A short title for the array schema.
 * @property `default` - Declares the default value for the array.
 * @property `maxItems` - Maximum number of items in the array.
 * @property `minItems` - Minimum number of items in the array.
 * @property `uniqueItems` - Whether all items in the array must be unique.
 * @property `example` - Example array value.
 *
 * @note
 * Array schemas inherit common properties from BaseSchemaProperties and add
 * array-specific validation properties. The `items` property is required and
 * defines the schema for each array element.
 *
 * -----
 * Examples
 * -----
 *
 * @example (string array):
 * ```ts
 * const tagsSchema: ArraySchema = {
 *   type: "array",
 *   items: { type: "string" },
 *   description: "List of tags",
 *   minItems: 1,
 *   maxItems: 10,
 *   uniqueItems: true,
 *   example: ["javascript", "api", "swagger"]
 * };
 * ```
 *
 * @example (object array):
 * ```ts
 * const usersSchema: ArraySchema = {
 *   type: "array",
 *   items: { $ref: "#/definitions/User" },
 *   description: "List of users",
 *   minItems: 0,
 *   maxItems: 100,
 *   example: [
 *     { id: 1, name: "John Doe" },
 *     { id: 2, name: "Jane Smith" }
 *   ]
 * };
 * ```
 *
 * @example (number array):
 * ```ts
 * const scoresSchema: ArraySchema = {
 *   type: "array",
 *   items: {
 *     type: "number",
 *     minimum: 0,
 *     maximum: 100
 *   },
 *   description: "Test scores",
 *   minItems: 1,
 *   maxItems: 50,
 *   example: [85, 92, 78, 96]
 * };
 * ```
 *
 * @example (nested array):
 * ```ts
 * const matrixSchema: ArraySchema = {
 *   type: "array",
 *   items: {
 *     type: "array",
 *     items: { type: "number" },
 *     minItems: 3,
 *     maxItems: 3
 *   },
 *   description: "3x3 matrix",
 *   minItems: 3,
 *   maxItems: 3,
 *   example: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * };
 * ```
 */
export interface ArraySchema extends Extension {
	/**
	 * The type of the schema. Must be "array" for array schemas.
	 *
	 * This property is required and must be set to "array" to indicate
	 * that this schema represents an ordered collection of items.
	 *
	 * @example "array"
	 */
	type: "array";

	/**
	 * Required if type is "array". Describes the type of items in the array.
	 *
	 * The definition is the same as the one from JSON Schema, but references
	 * the Swagger Schema Object definition instead. This allows for complex
	 * nested structures and references to other schema definitions.
	 *
	 * @example { type: "string" }
	 * @example { $ref: "#/definitions/User" }
	 * @example { type: "object", properties: { name: { type: "string" } } }
	 */
	items: Schema; // Forward declaration to avoid circular imports

	/**
	 * An array is valid against "maxItems" if its length is less than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.2 | JSON Schema Validation - maxItems}
	 *
	 * @example 10
	 * @example 100
	 */
	maxItems?: number;

	/**
	 * An array is valid against "minItems" if its length is greater than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.3 | JSON Schema Validation - minItems}
	 *
	 * @example 1
	 * @example 2
	 */
	minItems?: number;

	/**
	 * An array is valid against "uniqueItems" if all its elements are unique.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.3.4 | JSON Schema Validation - uniqueItems}
	 *
	 * @example true
	 * @example false
	 */
	uniqueItems?: boolean;

	/**
	 * XML representation metadata for the schema.
	 * Allows for fine-tuned XML model definitions.
	 *
	 * @example { name: "users", wrapped: true }
	 */
	xml?: XMLObject;
}
