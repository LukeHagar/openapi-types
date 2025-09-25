import type { Extension } from "../extensions";

/**
 * -----
 * String Schema
 * -----
 *
 * Schema for string data types in Swagger 2.0.
 *
 * String schemas represent textual data and support various formats and validation
 * rules. They are one of the most commonly used schema types in API specifications,
 * used for names, descriptions, identifiers, and other text-based data.
 *
 * String schemas support a wide range of formats including standard formats like
 * email, date, and UUID, as well as custom formats defined by the API provider.
 * They also support comprehensive validation through pattern matching, length
 * constraints, and enumeration.
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
 * @property `type` - Must be "string" for string schemas.
 * @property `format` - The extending format for the string type. See Data Type Formats for further details.
 * @property `description` - A short description of the string schema.
 * @property `title` - A short title for the string schema.
 * @property `default` - Declares the default value for the string.
 * @property `maxLength` - Maximum length of the string.
 * @property `minLength` - Minimum length of the string.
 * @property `pattern` - Regular expression pattern the string must match.
 * @property `enum` - Array of allowed string values.
 * @property `example` - Example string value.
 *
 * @note
 * String schemas include only properties that are valid for string types.
 * This ensures type safety and prevents invalid property combinations.
 *
 * -----
 * Examples
 * -----
 *
 * @example (email string):
 * ```ts
 * const emailSchema: StringSchema = {
 *   type: "string",
 *   format: "email",
 *   description: "User email address",
 *   pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
 *   maxLength: 254,
 *   minLength: 5,
 *   example: "user@example.com"
 * };
 * ```
 *
 * @example (date string):
 * ```ts
 * const dateSchema: StringSchema = {
 *   type: "string",
 *   format: "date",
 *   description: "Date in YYYY-MM-DD format",
 *   pattern: "^\\d{4}-\\d{2}-\\d{2}$",
 *   example: "2023-12-25"
 * };
 * ```
 *
 * @example (enum string):
 * ```ts
 * const statusSchema: StringSchema = {
 *   type: "string",
 *   description: "Order status",
 *   enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
 *   default: "pending",
 *   example: "pending"
 * };
 * ```
 *
 * @example (custom format string):
 * ```ts
 * const uuidSchema: StringSchema = {
 *   type: "string",
 *   format: "uuid",
 *   description: "Universally unique identifier",
 *   pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
 *   example: "550e8400-e29b-41d4-a716-446655440000"
 * };
 * ```
 */
export interface StringSchema extends Extension {
	/**
	 * The type of the schema. Must be "string" for string schemas.
	 *
	 * This property is required and must be set to "string" to indicate
	 * that this schema represents string data.
	 *
	 * @see {@link https://swagger.io/specification/v2/#data-types | Swagger 2.0 Specification - type}
	 *
	 * @example "string"
	 */
	type: "string";

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
	 * @see {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Specification - description}
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
	 * @see {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Specification - title}
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
	 * @see {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Specification - default}
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
	 * @see {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Specification - example}
	 *
	 * @example { name: "Puma", id: 1 }
	 * @example "example string value"
	 * @example 42
	 * @example ["item1", "item2"]
	 */
	example?: unknown;

	/**
	 * A string is valid against "maxLength" if its length is less than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.1 | JSON Schema Validation - maxLength}
	 *
	 * @example 100
	 * @example 255
	 */
	maxLength?: number;

	/**
	 * A string is valid against "minLength" if its length is greater than or equal to this value.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.2 | JSON Schema Validation - minLength}
	 *
	 * @example 1
	 * @example 8
	 */
	minLength?: number;

	/**
	 * A string is valid against "pattern" if the regular expression matches the string successfully.
	 * The regular expression syntax follows ECMA 262.
	 *
	 * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3 | JSON Schema Validation - pattern}
	 * @see {@link https://www.ecma-international.org/ecma-262/5.1/#sec-15.10 | ECMA 262 Regular Expression Syntax}
	 *
	 * @example "^[a-zA-Z0-9]+$"
	 * @example "^\\d{4}-\\d{2}-\\d{2}$"
	 */
	pattern?: string;
}
