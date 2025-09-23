import type { Extension } from "./extensions"
import type { Reference } from "./references"
import type { XML } from "./xml"
import type { ExternalDocumentation } from "./externalDocs"
import type {
  ReferenceSchema,
  StringSchema,
  NumberSchema,
  IntegerSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
  CompositionSchema,
} from "./data-types"

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
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#discriminator-object | OpenAPI 3.1.1 Discriminator Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#discriminator-object | OpenAPI 3.1.0 Discriminator Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `propertyName` - Required The name of the property in the payload that will hold the discriminator value
 * @key `mapping` - Optional An object to hold mappings between payload values and schema names or references
 * @key `x-${string}` - Specification Extensions
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
  propertyName: string

  /**
   * An object to hold mappings between payload values and schema names or references.
   * If not provided, the schema name will be used as the discriminator value.
   *
   * Example: `{ dog: "#/components/schemas/Dog", cat: "#/components/schemas/Cat" }`
   */
  mapping?: Record<string, string>
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
 * co-occurrence rules as specified in the OpenAPI 3.1.x specification.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#schema-object | OpenAPI 3.1.1 Schema Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#schema-object | OpenAPI 3.1.0 Schema Object} |
 *
 * -----
 * Schema Types
 * -----
 *
 * The Schema union includes the following types:
 *
 * **Reference Schema:**
 * @key `$ref` - A reference to a schema (exclusive with other properties)
 * @key `description` - A description of the referenced schema
 *
 * **String Schema:**
 * @key `type: "string"` - The type identifier for string schemas
 * @key `format` - The format of the string (email, date, uuid, etc.)
 * @key `maxLength` - The maximum length of the string
 * @key `minLength` - The minimum length of the string
 * @key `pattern` - A regular expression pattern the string must match
 * @key `enum` - An enumeration of string values
 * @key `const` - A constant string value
 *
 * **Number Schema:**
 * @key `type: "number"` - The type identifier for number schemas
 * @key `format` - The format of the number (float, double)
 * @key `multipleOf` - A number that must be a multiple of this value
 * @key `maximum` - The maximum value (inclusive)
 * @key `exclusiveMaximum` - The maximum value (exclusive)
 * @key `minimum` - The minimum value (inclusive)
 * @key `exclusiveMinimum` - The minimum value (exclusive)
 * @key `enum` - An enumeration of number values
 * @key `const` - A constant number value
 *
 * **Integer Schema:**
 * @key `type: "integer"` - The type identifier for integer schemas
 * @key `format` - The format of the integer (int32, int64)
 * @key `multipleOf` - An integer that must be a multiple of this value
 * @key `maximum` - The maximum value (inclusive)
 * @key `exclusiveMaximum` - The maximum value (exclusive)
 * @key `minimum` - The minimum value (inclusive)
 * @key `exclusiveMinimum` - The minimum value (exclusive)
 * @key `enum` - An enumeration of integer values
 * @key `const` - A constant integer value
 *
 * **Boolean Schema:**
 * @key `type: "boolean"` - The type identifier for boolean schemas
 * @key `enum` - An enumeration of boolean values
 * @key `const` - A constant boolean value
 *
 * **Array Schema:**
 * @key `type: "array"` - The type identifier for array schemas
 * @key `items` - The schema for array items
 * @key `prefixItems` - The schema for array items at specific positions
 * @key `contains` - The schema that array must contain at least one item matching
 * @key `minContains` - The minimum number of items that must match contains
 * @key `maxContains` - The maximum number of items that must match contains
 * @key `minItems` - The minimum number of items in the array
 * @key `maxItems` - The maximum number of items in the array
 * @key `uniqueItems` - Whether array items must be unique
 *
 * **Object Schema:**
 * @key `type: "object"` - The type identifier for object schemas
 * @key `properties` - A map of property names to their schemas
 * @key `required` - An array of required property names
 * @key `additionalProperties` - The schema for additional properties
 * @key `patternProperties` - A map of regex patterns to schemas
 * @key `propertyNames` - The schema for property names
 * @key `minProperties` - The minimum number of properties
 * @key `maxProperties` - The maximum number of properties
 * @key `dependentRequired` - A map of property names to arrays of required properties
 * @key `dependentSchemas` - A map of property names to schemas
 *
 * **Composition Schema:**
 * @key `allOf` - An array of schemas that must all be satisfied
 * @key `anyOf` - An array of schemas where at least one must be satisfied
 * @key `oneOf` - An array of schemas where exactly one must be satisfied
 * @key `not` - A schema that must not be satisfied
 * @key `if` - A schema for conditional validation
 * @key `then` - A schema to apply if if condition is met
 * @key `else` - A schema to apply if if condition is not met
 *
 * **Common Properties:**
 * @key `title` - A short title for the schema
 * @key `description` - A description of the schema
 * @key `default` - The default value for the schema
 * @key `examples` - An array of example values
 * @key `enum` - An enumeration of allowed values
 * @key `const` - A constant allowed value
 * @key `discriminator` - A discriminator object for polymorphism
 * @key `xml` - XML-specific metadata
 * @key `externalDocs` - External documentation
 * @key `x-${string}` - Specification Extensions
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
  | CompositionSchema

// Re-export individual schema types for convenience
export type {
  ReferenceSchema,
  StringSchema,
  NumberSchema,
  IntegerSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
  CompositionSchema,
} from "./data-types"
