import type {
  ArraySchema,
  BooleanSchema,
  CompositionSchema,
  IntegerSchema,
  NumberSchema,
  ObjectSchema,
  ReferenceSchema,
  StringSchema,
} from "./data-types";
import type { Extension } from "./extensions";

/**
 * -----
 * Discriminator Object
 * -----
 *
 * The Discriminator Object is used to aid in serialization, deserialization, and validation.
 * It can be used to differentiate between other schemas which may satisfy the payload description.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#discriminator-object | OpenAPI 3.2.0 Discriminator Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `propertyName` - Required The name of the property in the payload that will hold the discriminator value
 * @property `mapping` - Optional An object to hold mappings between payload values and schema names or references
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The discriminator object is legal only when using one of the composite keywords `oneOf`, `anyOf`, `allOf`.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic discriminator):
 * ```ts
 * const discriminator: Discriminator = {
 *   propertyName: "petType"
 * };
 * ```
 *
 * @example (discriminator with mapping):
 * ```ts
 * const discriminator: Discriminator = {
 *   propertyName: "petType",
 *   mapping: {
 *     dog: "#/components/schemas/Dog",
 *     cat: "#/components/schemas/Cat"
 *   }
 * };
 * ```
 */
export interface Discriminator extends Extension {
  /**
   * The name of the property in the payload that will hold the discriminator value.
   * This property must be present in the payload.
   *
   * Example: `"petType"`
   */
  propertyName: string;

  /**
   * An object to hold mappings between payload values and schema names or references.
   * If not provided, the schema name will be used as the discriminator value.
   *
   * Example: `{ dog: "#/components/schemas/Dog", cat: "#/components/schemas/Cat" }`
   */
  mapping?: Record<string, string>;
}

/**
 * -----
 * Schema Object
 * -----
 *
 * The Schema Object allows the definition of input and output data types. These types
 * can be objects, but also primitives and arrays. This object is an extended subset
 * of the JSON Schema Specification Draft 2020-12.
 *
 * The Schema Object is a discriminated union that enforces mutual-exclusion and
 * co-occurrence rules as specified in the OpenAPI 3.2.0 specification.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#schema-object | OpenAPI 3.2.0 Schema Object} |
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
 * @property `const` - A constant string value
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
 * @property `const` - A constant number value
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
 * @property `const` - A constant integer value
 *
 * **Boolean Schema:**
 * @property `type: "boolean"` - The type identifier for boolean schemas
 * @property `enum` - An enumeration of boolean values
 * @property `const` - A constant boolean value
 *
 * **Array Schema:**
 * @property `type: "array"` - The type identifier for array schemas
 * @property `items` - The schema for array items
 * @property `prefixItems` - The schema for array items at specific positions
 * @property `contains` - The schema that array must contain at least one item matching
 * @property `minContains` - The minimum number of items that must match contains
 * @property `maxContains` - The maximum number of items that must match contains
 * @property `minItems` - The minimum number of items in the array
 * @property `maxItems` - The maximum number of items in the array
 * @property `uniqueItems` - Whether array items must be unique
 *
 * **Object Schema:**
 * @property `type: "object"` - The type identifier for object schemas
 * @property `properties` - A map of property names to their schemas
 * @property `required` - An array of required property names
 * @property `additionalProperties` - The schema for additional properties
 * @property `patternProperties` - A map of regex patterns to schemas
 * @property `propertyNames` - The schema for property names
 * @property `minProperties` - The minimum number of properties
 * @property `maxProperties` - The maximum number of properties
 * @property `dependentRequired` - A map of property names to arrays of required properties
 * @property `dependentSchemas` - A map of property names to schemas
 *
 * **Composition Schema:**
 * @property `allOf` - An array of schemas that must all be satisfied
 * @property `anyOf` - An array of schemas where at least one must be satisfied
 * @property `oneOf` - An array of schemas where exactly one must be satisfied
 * @property `not` - A schema that must not be satisfied
 * @property `if` - A schema for conditional validation
 * @property `then` - A schema to apply if if condition is met
 * @property `else` - A schema to apply if if condition is not met
 *
 * **Common Properties:**
 * @property `title` - A short title for the schema
 * @property `description` - A description of the schema
 * @property `default` - The default value for the schema
 * @property `examples` - An array of example values
 * @property `enum` - An enumeration of allowed values
 * @property `const` - A constant allowed value
 * @property `discriminator` - A discriminator object for polymorphism
 * @property `xml` - XML-specific metadata
 * @property `externalDocs` - External documentation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The Schema Object is a discriminated union that enforces mutual-exclusion and
 * co-occurrence rules. When `$ref` is present, no other properties except
 * `description` and extensions are allowed. Composition keywords are mutually
 * exclusive with `$ref`.
 *
 * -----
 * Examples
 * -----
 *
 * @example (reference schema):
 * ```ts
 * const schema: Schema = {
 *   $ref: "#/components/schemas/User"
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
 * @example (composition schema):
 * ```ts
 * const schema: Schema = {
 *   allOf: [
 *     { type: "object", properties: { name: { type: "string" } } },
 *     { type: "object", properties: { age: { type: "number" } } }
 *   ]
 * };
 * ```
 */
export type Schema =
  | ReferenceSchema
  | StringSchema
  | NumberSchema
  | IntegerSchema
  | BooleanSchema
  | ArraySchema
  | ObjectSchema
  | CompositionSchema;
