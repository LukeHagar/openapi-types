import type { Extension } from "../extensions";
import type { Schema } from "../schema";
import type { XMLObject } from "../xml";

/**
 * -----
 * Object Schema
 * -----
 *
 * Schema for object data types in Swagger 2.0.
 *
 * Object schemas represent structured data with named properties, where each
 * property has its own schema definition. They are based on JSON Schema Draft 4
 * with Swagger-specific adjustments, providing comprehensive validation for
 * complex data structures.
 *
 * Object schemas are commonly used for models, entities, and complex data
 * structures in APIs. They support property definitions, required fields,
 * additional properties, and composition through allOf. The properties
 * reference Swagger Schema Objects instead of JSON Schema definitions.
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
 * @property `type` - Must be "object" for object schemas.
 * @property `properties` - The properties of the object.
 * @property `required` - A list of required properties.
 * @property `additionalProperties` - Additional properties for the object.
 * @property `allOf` - An array of schemas that this schema must validate against.
 * @property `description` - A short description of the object schema.
 * @property `title` - A short title for the object schema.
 * @property `default` - Declares the default value for the object.
 * @property `maxProperties` - Maximum number of properties in the object.
 * @property `minProperties` - Minimum number of properties in the object.
 * @property `example` - Example object value.
 *
 * @note
 * Object schemas inherit common properties from BaseSchemaProperties and add
 * object-specific validation properties. The properties, additionalProperties,
 * and allOf definitions reference the Swagger Schema Object instead of JSON Schema.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple object):
 * ```ts
 * const userSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     id: { type: "integer", format: "int64" },
 *     name: { type: "string" },
 *     email: { type: "string", format: "email" }
 *   },
 *   required: ["id", "name", "email"],
 *   example: { id: 1, name: "John Doe", email: "john@example.com" }
 * };
 * ```
 *
 * @example (object with additional properties):
 * ```ts
 * const configSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     theme: { type: "string", enum: ["light", "dark"] },
 *     language: { type: "string", default: "en" }
 *   },
 *   additionalProperties: { type: "string" },
 *   description: "User configuration with custom properties"
 * };
 * ```
 *
 * @example (object with composition):
 * ```ts
 * const extendedUserSchema: ObjectSchema = {
 *   type: "object",
 *   allOf: [
 *     { $ref: "#/definitions/BaseUser" },
 *     {
 *       type: "object",
 *       properties: {
 *         role: { type: "string", enum: ["admin", "user", "guest"] },
 *         permissions: { type: "array", items: { type: "string" } }
 *       },
 *       required: ["role"]
 *     }
 *   ],
 *   description: "Extended user with role and permissions"
 * };
 * ```
 *
 * @example (nested object):
 * ```ts
 * const addressSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     street: { type: "string" },
 *     city: { type: "string" },
 *     state: { type: "string" },
 *     zipCode: { type: "string", pattern: "^\\d{5}(-\\d{4})?$" },
 *     country: { type: "string", default: "US" }
 *   },
 *   required: ["street", "city", "state", "zipCode"],
 *   example: {
 *     street: "123 Main St",
 *     city: "Anytown",
 *     state: "CA",
 *     zipCode: "12345",
 *     country: "US"
 *   }
 * };
 * ```
 */
export interface ObjectSchema extends Extension {
	/**
	 * The type of the schema. Must be "object" for object schemas.
	 *
	 * This property is required and must be set to "object" to indicate
	 * that this schema represents structured data with named properties.
	 *
	 * @example "object"
	 */
	type?: "object";

	/**
	 * The properties of the object. The definition is the same as the one from
	 * JSON Schema, but references the Swagger Schema Object definition instead.
	 *
	 * Each property name maps to a schema definition that describes the type
	 * and validation rules for that property. Properties can be of any type
	 * supported by Swagger schemas, including primitives, objects, arrays,
	 * and references.
	 *
	 * @example { name: { type: "string" }, age: { type: "integer" } }
	 * @example { address: { $ref: "#/definitions/Address" } }
	 */
	properties?: Record<string, Schema>; // Forward declaration to avoid circular imports

	/**
	 * A list of required properties. Properties marked as required being true
	 * MUST be present in the object.
	 *
	 * This array contains the names of properties that must be present in
	 * any valid instance of this object schema. Properties not listed here
	 * are considered optional.
	 *
	 * @example ["name", "email"]
	 * @example ["id", "type", "createdAt"]
	 */
	required?: string[];

	/**
	 * Additional properties for the object. Can be a boolean or a schema.
	 * The definition is the same as the one from JSON Schema, but references
	 * the Swagger Schema Object definition instead.
	 *
	 * - If true, additional properties of any type are allowed
	 * - If false, no additional properties are allowed
	 * - If a schema, additional properties must conform to that schema
	 *
	 * @example true
	 * @example false
	 * @example { type: "string" }
	 * @example { $ref: "#/definitions/AdditionalProperty" }
	 */
	additionalProperties?: boolean | Schema; // Forward declaration to avoid circular imports

	/**
	 * An array of schemas that this schema must validate against.
	 * All schemas in the array must be valid for the object to be valid.
	 * The definition is the same as the one from JSON Schema, but references
	 * the Swagger Schema Object definition instead.
	 *
	 * This enables schema composition and inheritance patterns, allowing
	 * objects to extend or combine multiple base schemas.
	 *
	 * @example [{ $ref: "#/definitions/BaseUser" }, { type: "object", properties: { ... } }]
	 * @example [{ $ref: "#/definitions/Identifiable" }, { $ref: "#/definitions/Timestamped" }]
	 */
	allOf?: Schema[]; // Forward declaration to avoid circular imports

	/**
	 * An object is valid against "maxProperties" if its number of properties is less than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.1 | JSON Schema Validation - maxProperties}
	 *
	 * @example 10
	 * @example 50
	 */
	maxProperties?: number;

	/**
	 * An object is valid against "minProperties" if its number of properties is greater than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.4.2 | JSON Schema Validation - minProperties}
	 *
	 * @example 1
	 * @example 2
	 */
	minProperties?: number;

	/**
	 * XML representation metadata for the schema.
	 * Allows for fine-tuned XML model definitions.
	 *
	 * @example { name: "user", attribute: false }
	 */
	xml?: XMLObject;
}
