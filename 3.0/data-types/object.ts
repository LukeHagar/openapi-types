import type { Extension } from "../extensions";
import type { ExternalDocumentation } from "../externalDocs";
import type { Discriminator, Schema } from "../schema";
import type { XML } from "../xml";

/**
 * -----
 * Object Schema
 * -----
 *
 * A schema for object data types with object-specific validation constraints.
 * Only valid with `type: "object"` and includes object properties like
 * `properties`, `required`, `additionalProperties`, etc.
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
 * @property `type` - Must be "object"
 * @property `properties` - Properties of the object
 * @property `required` - Required property names
 * @property `additionalProperties` - Additional properties schema
 * @property `patternProperties` - Pattern-based properties
 * @property `propertyNames` - Schema for property names
 * @property `maxProperties` - Maximum number of properties
 * @property `minProperties` - Minimum number of properties
 * @property `title` - A short title for the schema
 * @property `description` - A short description of the schema
 * @property `default` - Default value for the schema
 * @property `example` - Example value for the schema
 * @property `enum` - Enumeration of valid object values
 * @property `readOnly` - Whether the property is read-only
 * @property `writeOnly` - Whether the property is write-only
 * @property `xml` - XML representation metadata
 * @property `externalDocs` - Additional external documentation
 * @property `deprecated` - Whether the schema is deprecated
 * @property `discriminator` - Discriminator for polymorphism
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Object-specific constraints (`properties`, `required`, `additionalProperties`, etc.) are only
 * valid with `type: "object"`. This is enforced by the type system.
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
 *     age: { type: "integer" }
 *   },
 *   description: "A person object"
 * };
 * ```
 *
 * @example (object with required properties):
 * ```ts
 * const userSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     id: { type: "integer" },
 *     name: { type: "string" },
 *     email: { type: "string", format: "email" }
 *   },
 *   required: ["id", "name", "email"],
 *   description: "User object with required fields"
 * };
 * ```
 *
 * @example (object with additional properties):
 * ```ts
 * const flexibleSchema: ObjectSchema = {
 *   type: "object",
 *   properties: {
 *     id: { type: "integer" }
 *   },
 *   additionalProperties: { type: "string" },
 *   description: "Object allowing additional string properties"
 * };
 * ```
 *
 * @example (object with discriminator):
 * ```ts
 * const petSchema: ObjectSchema = {
 *   type: "object",
 *   discriminator: "petType",
 *   properties: {
 *     name: { type: "string" },
 *     petType: { type: "string" }
 *   },
 *   required: ["name", "petType"],
 *   description: "Base pet object with discriminator"
 * };
 * ```
 */
export interface ObjectSchema extends Extension {
	/**
	 * The type of the schema. Must be "object" for object schemas.
	 *
	 * @example "object"
	 */
	type: "object";

	/**
	 * A short title for the schema.
	 *
	 * @example "User"
	 * @example "Product"
	 */
	title?: string;

	/**
	 * A short description of the schema. CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "A user object containing basic information"
	 * @example "Product information with pricing"
	 */
	description?: string;

	/**
	 * The default value for the schema.
	 *
	 * @example { name: "John", age: 30 }
	 * @example {}
	 */
	default?: Record<string, unknown>;

	/**
	 * Example value for the schema.
	 *
	 * @example { name: "Jane", age: 25 }
	 * @example { id: 1, title: "Sample" }
	 */
	example?: Record<string, unknown>;

	/**
	 * Enumeration of valid object values.
	 *
	 * @example [{ name: "John" }, { name: "Jane" }]
	 * @example [{ status: "active" }, { status: "inactive" }]
	 */
	enum?: Record<string, unknown>[];

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
	 * @example { name: "user", wrapped: false }
	 */
	xml?: XML;

	/**
	 * Additional external documentation for the schema.
	 *
	 * @example { description: "Find out more about this object", url: "https://example.com/docs" }
	 */
	externalDocs?: ExternalDocumentation;

	/**
	 * Whether the schema is deprecated. Default value is false.
	 *
	 * @default false
	 * @example true
	 */
	deprecated?: boolean;

	/**
	 * Discriminator for polymorphism. The property name used to differentiate between schemas.
	 *
	 * @example "petType"
	 * @example "type"
	 */
	discriminator?: Discriminator;

	// Object-specific validation constraints
	/**
	 * Properties of the object. Each property name maps to a schema definition.
	 *
	 * @example { name: { type: "string" }, age: { type: "integer" } }
	 * @example { id: { $ref: "#/components/schemas/Id" } }
	 */
	properties?: Record<string, Schema>;

	/**
	 * Array of property names that are required. Properties not listed here are optional.
	 *
	 * @example ["id", "name"]
	 * @example ["email"]
	 */
	required?: string[];

	/**
	 * Schema for additional properties not defined in the properties object.
	 * Can be a boolean or a schema.
	 *
	 * @example true
	 * @example false
	 * @example { type: "string" }
	 */
	additionalProperties?: boolean | Schema;

	/**
	 * Pattern-based properties using regular expressions as keys.
	 *
	 * @example { "^S_": { type: "string" } }
	 * @example { "^[0-9]+$": { type: "integer" } }
	 */
	patternProperties?: Record<string, Schema>;

	/**
	 * Schema for property names. If present, property names must conform to this schema.
	 *
	 * @example { type: "string", pattern: "^[a-zA-Z][a-zA-Z0-9]*$" }
	 */
	propertyNames?: Schema;

	/**
	 * Maximum number of properties in the object. The value MUST be a non-negative integer.
	 *
	 * @example 10
	 * @example 50
	 */
	maxProperties?: number;

	/**
	 * Minimum number of properties in the object. The value MUST be a non-negative integer.
	 *
	 * @example 1
	 * @example 2
	 */
	minProperties?: number;
}
