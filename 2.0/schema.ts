import type {
	ArraySchema,
	BooleanSchema,
	FileSchema,
	IntegerSchema,
	NumberSchema,
	ObjectSchema,
	StringSchema,
} from "./data-types";
import type { BaseReference } from "./references";
import type { XMLObject } from "./xml";

/**
 * -----
 * Schema Object (Swagger 2.0)
 * -----
 *
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays. This object
 * is a subset of JSON Schema Specification Draft 4 and uses the same
 * formatting rules (sections 9-11).
 *
 * In Swagger 2.0, this is a limited subset of JSON Schema. Here we model it
 * as a discriminated union that enforces mutual-exclusion and co-occurrence
 * rules as specified in the Swagger 2.0 specification.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Schema Object} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#data-types | Swagger 2.0 Data Types} |
 *
 * -----
 * Schema Types
 * -----
 *
 * The Schema union includes the following types:
 *
 * **Reference Schema:**
 * @property `$ref` - A reference to a schema (exclusive with other properties)
 * @property `description` - A description of the referenced schema
 *
 * **String Schema:**
 * @property `type: "string"` - The type identifier for string schemas
 * @property `format` - The format of the string (email, date, uuid, etc.)
 * @property `maxLength` - The maximum length of the string
 * @property `minLength` - The minimum length of the string
 * @property `pattern` - A regular expression pattern the string must match
 * @property `enum` - An enumeration of string values
 *
 * **Number Schema:**
 * @property `type: "number"` - The type identifier for number schemas
 * @property `format` - The format of the number (float, double)
 * @property `multipleOf` - A number that must be a multiple of this value
 * @property `maximum` - The maximum value (inclusive)
 * @property `exclusiveMaximum` - The maximum value (exclusive)
 * @property `minimum` - The minimum value (inclusive)
 * @property `exclusiveMinimum` - The minimum value (exclusive)
 * @property `enum` - An enumeration of number values
 *
 * **Integer Schema:**
 * @property `type: "integer"` - The type identifier for integer schemas
 * @property `format` - The format of the integer (int32, int64)
 * @property `multipleOf` - An integer that must be a multiple of this value
 * @property `maximum` - The maximum value (inclusive)
 * @property `exclusiveMaximum` - The maximum value (exclusive)
 * @property `minimum` - The minimum value (inclusive)
 * @property `exclusiveMinimum` - The minimum value (exclusive)
 * @property `enum` - An enumeration of integer values
 *
 * **Boolean Schema:**
 * @property `type: "boolean"` - The type identifier for boolean schemas
 * @property `enum` - An enumeration of boolean values
 *
 * **File Schema:**
 * @property `type: "file"` - The type identifier for file schemas (Swagger 2.0 specific)
 *
 * **Array Schema:**
 * @property `type: "array"` - The type identifier for array schemas
 * @property `items` - The schema for array items
 * @property `minItems` - The minimum number of items in the array
 * @property `maxItems` - The maximum number of items in the array
 * @property `uniqueItems` - Whether array items must be unique
 *
 * **Object Schema:**
 * @property `type: "object"` - The type identifier for object schemas
 * @property `properties` - A map of property names to their schemas
 * @property `required` - An array of required property names
 * @property `additionalProperties` - The schema for additional properties
 * @property `minProperties` - The minimum number of properties
 * @property `maxProperties` - The maximum number of properties
 * @property `allOf` - An array of schemas that must all be satisfied
 *
 * **Common Properties:**
 * @property `title` - A short title for the schema
 * @property `description` - A description of the schema
 * @property `default` - The default value for the schema
 * @property `example` - An example value for the schema
 * @property `enum` - An enumeration of allowed values
 * @property `discriminator` - A discriminator field for polymorphism (Swagger 2.0 specific)
 * @property `readOnly` - Whether the property is read-only (Swagger 2.0 specific)
 * @property `xml` - XML-specific metadata
 * @property `externalDocs` - External documentation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The Schema Object is a discriminated union that enforces mutual-exclusion and
 * co-occurrence rules. When `$ref` is present, no other properties except
 * `description` and extensions are allowed. The `file` type is specific to
 * Swagger 2.0 and not part of the JSON Schema specification.
 *
 * -----
 * Examples
 * -----
 *
 * @example (reference schema):
 * ```ts
 * const schema: Schema = {
 *   $ref: "#/definitions/User"
 * };
 * ```
 *
 * @example (string schema):
 * ```ts
 * const schema: Schema = {
 *   type: "string",
 *   format: "email",
 *   maxLength: 255
 * };
 * ```
 *
 * @example (object schema):
 * ```ts
 * const schema: Schema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" },
 *     age: { type: "number" }
 *   },
 *   required: ["name"]
 * };
 * ```
 *
 * @example (file schema):
 * ```ts
 * const schema: Schema = {
 *   type: "file",
 *   description: "Image file to upload"
 * };
 * ```
 */
export type Schema =
	| StringSchema
	| NumberSchema
	| IntegerSchema
	| BooleanSchema
	| FileSchema
	| ArraySchema
	| ObjectSchema
	| BaseReference;

/**
 * -----
 * XML Object
 * -----
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred (for singular/plural forms)
 * and the name property should be used to add that information.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#xml-object | Swagger 2.0 XML Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple XML):
 * ```ts
 * const xml: XML = {
 *   name: "animal",
 *   namespace: "http://example.com/schema/sample",
 *   prefix: "sample",
 *   attribute: false,
 *   wrapped: true
 * };
 * ```
 */
export type XML = XMLObject;

/**
 * -----
 * Definitions Object
 * -----
 *
 * An object to hold data types that can be consumed and produced by operations.
 * These data types can be primitives, arrays or models.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#definitions-object | Swagger 2.0 Definitions Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic definitions):
 * ```ts
 * const definitions: Definitions = {
 *   "Category": {
 *     "type": "object",
 *     "properties": {
 *       "id": {
 *         "type": "integer",
 *         "format": "int64"
 *       },
 *       "name": {
 *         "type": "string"
 *       }
 *     }
 *   },
 *   "Tag": {
 *     "type": "object",
 *     "properties": {
 *       "id": {
 *         "type": "integer",
 *         "format": "int64"
 *       },
 *       "name": {
 *         "type": "string"
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Definitions = Record<string, Schema>;

/**
 * -----
 * Parameters Definitions Object
 * -----
 *
 * An object to hold parameters to be reused across operations. Parameter definitions
 * can be referenced to the ones defined here. This does not define global operation parameters.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#parameters-definitions-object | Swagger 2.0 Parameters Definitions Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (parameter definitions):
 * ```ts
 * const parameters: ParametersDefinitions = {
 *   "skipParam": {
 *     "name": "skip",
 *     "in": "query",
 *     "description": "number of items to skip",
 *     "required": true,
 *     "type": "integer",
 *     "format": "int32"
 *   },
 *   "limitParam": {
 *     "name": "limit",
 *     "in": "query",
 *     "description": "max records to return",
 *     "required": true,
 *     "type": "integer",
 *     "format": "int32"
 *   }
 * };
 * ```
 */
export type ParametersDefinitions = Record<string, Parameter | BaseReference>;

/**
 * -----
 * Responses Definitions Object
 * -----
 *
 * An object to hold responses to be reused across operations. Response definitions
 * can be referenced to the ones defined here. This does not define global operation responses.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#responses-definitions-object | Swagger 2.0 Responses Definitions Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (response definitions):
 * ```ts
 * const responses: ResponsesDefinitions = {
 *   "NotFound": {
 *     "description": "Entity not found."
 *   },
 *   "IllegalInput": {
 *     "description": "Illegal input for operation."
 *   },
 *   "GeneralError": {
 *     "description": "General Error",
 *     "schema": {
 *       "$ref": "#/definitions/GeneralError"
 *     }
 *   }
 * };
 * ```
 */
export type ResponsesDefinitions = Record<string, Response | BaseReference>;

// Re-export types from paths.ts to avoid circular dependencies
import type { Parameter, Response } from "./paths";
