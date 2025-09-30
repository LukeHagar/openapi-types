import type { Extension } from "../extensions";
import type { XMLObject } from "../xml";

/**
 * -----
 * Boolean Schema
 * -----
 *
 * Schema for boolean data types in Swagger 2.0.
 *
 * Boolean schemas represent true/false values and are used for flags, switches,
 * and other binary state indicators in APIs. They are simple but essential
 * data types that provide clear semantic meaning for binary choices.
 *
 * Boolean schemas are commonly used for feature flags, status indicators,
 * configuration options, and other binary state representations. They support
 * default values and examples to help API consumers understand the expected
 * behavior.
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
 * @property `type` - Must be "boolean" for boolean schemas.
 * @property `description` - A short description of the boolean schema.
 * @property `title` - A short title for the boolean schema.
 * @property `default` - Declares the default value for the boolean.
 * @property `example` - Example boolean value.
 *
 * @note
 * Boolean schemas inherit common properties from BaseSchemaProperties.
 * No additional validation properties are needed for boolean values as they
 * are inherently simple (true/false only).
 *
 * -----
 * Examples
 * -----
 *
 * @example (feature flag boolean):
 * ```ts
 * const featureFlagSchema: BooleanSchema = {
 *   type: "boolean",
 *   description: "Whether the new feature is enabled",
 *   default: false,
 *   example: true
 * };
 * ```
 *
 * @example (status boolean):
 * ```ts
 * const isActiveSchema: BooleanSchema = {
 *   type: "boolean",
 *   description: "Whether the user account is active",
 *   default: true,
 *   example: true
 * };
 * ```
 *
 * @example (configuration boolean):
 * ```ts
 * const notificationsEnabledSchema: BooleanSchema = {
 *   type: "boolean",
 *   description: "Whether email notifications are enabled",
 *   default: true,
 *   example: false
 * };
 * ```
 *
 * @example (permission boolean):
 * ```ts
 * const canEditSchema: BooleanSchema = {
 *   type: "boolean",
 *   description: "Whether the user can edit this resource",
 *   example: true
 * };
 * ```
 */
export interface BooleanSchema extends Extension {
	/**
	 * The type of the schema. Must be "boolean" for boolean schemas.
	 *
	 * This property is required and must be set to "boolean" to indicate
	 * that this schema represents true/false values.
	 *
	 * @example "boolean"
	 */
	type: "boolean";

	/**
	 * The extending format for the previously mentioned type.
	 * See Swagger 2.0 Data Type Formats for further details.
	 *
	 * Formats provide additional semantic information about the data type,
	 * enabling more precise validation and better tooling support. Swagger 2.0
	 * defines several standard formats, but custom formats are also allowed.
	 *
	 * @see {@link https://swagger.io/specification/v2/#dataTypeFormat | Swagger 2.0 Data Type Formats}
	 *
	 * @example "int32"
	 * @example "date"
	 * @example "email"
	 * @example "uuid"
	 */
	format?: string;

	/**
	 * A short description of the schema. GFM syntax can be used for rich text representation.
	 *
	 * This description should provide clear information about what the schema
	 * represents and how it should be used. It's commonly displayed in API
	 * documentation and code generation tools.
	 *
	 * @example "A user object containing basic information"
	 * @example "Email address in RFC 5322 format"
	 */
	description?: string;

	/**
	 * A short title for the schema.
	 *
	 * The title provides a human-readable name for the schema, often used
	 * in documentation and UI displays. It should be concise but descriptive.
	 *
	 * @example "User"
	 * @example "Pet"
	 * @example "Order"
	 */
	title?: string;

	/**
	 * Declares the value of the schema that the server will use if none is provided.
	 * Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object.
	 *
	 * This is a Swagger 2.0 specific requirement that differs from JSON Schema.
	 * The default value must be valid according to the schema's type and constraints.
	 *
	 * @example "defaultValue"
	 * @example 10
	 * @example { name: "John", age: 30 }
	 * @example ["item1", "item2"]
	 */
	default?: unknown;

	/**
	 * An instance validates successfully against this keyword if its value is equal to one of the elements in this keyword's array value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1 | JSON Schema Validation - enum}
	 *
	 * @example ["option1", "option2", "option3"]
	 * @example ["red", "green", "blue"]
	 * @example [1, 2, 3, 4, 5]
	 */
	enum?: unknown[];

	/**
	 * A free-form property to include an example of an instance for this schema.
	 *
	 * Examples help developers understand how to use the schema and what kind
	 * of data is expected. They are commonly used by documentation generators
	 * and API testing tools.
	 *
	 * @example { name: "Puma", id: 1 }
	 * @example "example string value"
	 * @example 42
	 * @example ["item1", "item2"]
	 */
	example?: unknown;

	/**
	 * XML representation metadata for the schema.
	 * Allows for fine-tuned XML model definitions.
	 *
	 * @example { name: "isActive", attribute: false }
	 */
	xml?: XMLObject;
}
