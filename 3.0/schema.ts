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
// Discriminator will be defined below to avoid circular reference

/**
 * -----
 * Schema Object (OpenAPI 3.0.x)
 * -----
 *
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays. This object
 * is based on JSON Schema Specification Draft 7 and uses the same
 * formatting rules.
 *
 * This discriminated union enforces the OpenAPI 3.0.x mutual-exclusion and
 * co-occurrence rules, ensuring that only valid combinations of properties
 * can be used together.
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
 * Schema Types
 * -----
 *
 * @property `ReferenceSchema` - Reference-only schemas ($ref with optional description)
 * @property `StringSchema` - String schemas with string-specific constraints
 * @property `NumberSchema` - Number schemas with numeric constraints
 * @property `IntegerSchema` - Integer schemas with integer constraints
 * @property `BooleanSchema` - Boolean schemas with basic validation
 * @property `ArraySchema` - Array schemas with array-specific constraints
 * @property `ObjectSchema` - Object schemas with object-specific constraints
 * @property `CompositionSchema` - Composition schemas (allOf/anyOf/oneOf/not)
 *
 * @note
 * The discriminated union enforces these OpenAPI 3.0.x rules:
 * - `$ref` is mutually exclusive with all other properties except description and extensions
 * - Type-specific constraints are only valid with their corresponding type
 * - Composition keywords are mutually exclusive with `$ref` but can appear with validation keywords
 * - Metadata keywords can appear with any valid combination
 *
 * -----
 * Examples
 * -----
 *
 * @example (reference schema):
 * ```ts
 * const refSchema: Schema = {
 *   $ref: "#/components/schemas/User",
 *   description: "A reference to the User schema"
 * };
 * ```
 *
 * @example (string schema):
 * ```ts
 * const stringSchema: Schema = {
 *   type: "string",
 *   minLength: 1,
 *   maxLength: 100,
 *   pattern: "^[a-zA-Z]+$"
 * };
 * ```
 *
 * @example (object schema):
 * ```ts
 * const objectSchema: Schema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" },
 *     age: { type: "integer" }
 *   },
 *   required: ["name"]
 * };
 * ```
 *
 * @example (composition schema):
 * ```ts
 * const composedSchema: Schema = {
 *   allOf: [
 *     { $ref: "#/components/schemas/BaseUser" },
 *     { type: "object", required: ["id"] }
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

/**
 * -----
 * Discriminator Object
 * -----
 *
 * When request bodies or response payloads may be one of a number of different schemas,
 * a discriminator object can be used to aid in serialization, deserialization, and validation.
 * The discriminator is a specific object in a schema which is used to inform the consumer
 * of the specification of an alternative schema based on the value associated with it.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#discriminator-object | OpenAPI 3.0.0 Discriminator Object} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#discriminator-object | OpenAPI 3.0.1 Discriminator Object} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#discriminator-object | OpenAPI 3.0.2 Discriminator Object} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#discriminator-object | OpenAPI 3.0.3 Discriminator Object} |
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#discriminator-object | OpenAPI 3.0.4 Discriminator Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `propertyName` - The name of the property in the schema that is used as a discriminator
 * @property `mapping` - An object to hold mappings between payload values and schema names or references
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The discriminator property name MUST be defined at this schema and it MUST be in the
 * required property list. When used, the value MUST be the name of this schema or any
 * schema that inherits it.
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
 *     "dog": "#/components/schemas/Dog",
 *     "cat": "#/components/schemas/Cat"
 *   }
 * };
 * ```
 */
export interface Discriminator {
  /**
   * The name of the property in the schema that is used as a discriminator.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#discriminator-object  | OpenAPI 3.0.4 Discriminator Object - propertyName} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#discriminator-object  | OpenAPI 3.0.3 Discriminator Object - propertyName} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#discriminator-object  | OpenAPI 3.0.2 Discriminator Object - propertyName} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#discriminator-object  | OpenAPI 3.0.1 Discriminator Object - propertyName} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#discriminator-object  | OpenAPI 3.0.0 Discriminator Object - propertyName} |
   * @property `propertyName` - Required The name of the property in the schema that is used as a discriminator
   *
   * @example "petType"
   * @example "type"
   * @example "kind"
   */
  propertyName: string;

  /**
   * An object to hold mappings between payload values and schema names or references.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#discriminator-object  | OpenAPI 3.0.4 Discriminator Object - mapping} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#discriminator-object  | OpenAPI 3.0.3 Discriminator Object - mapping} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#discriminator-object  | OpenAPI 3.0.2 Discriminator Object - mapping} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#discriminator-object  | OpenAPI 3.0.1 Discriminator Object - mapping} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#discriminator-object  | OpenAPI 3.0.0 Discriminator Object - mapping} |
   * @property `mapping` - Optional An object to hold mappings between payload values and schema names or references
   *
   * @example { "dog": "Dog", "cat": "Cat" }
   * @example { "admin": "AdminUser", "user": "RegularUser" }
   */
  mapping?: Record<string, string>;
}

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
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object | OpenAPI 3.0.0 XML Object} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object | OpenAPI 3.0.1 XML Object} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object | OpenAPI 3.0.2 XML Object} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object | OpenAPI 3.0.3 XML Object} |
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object | OpenAPI 3.0.4 XML Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Replaces the name of the element/attribute used for the described schema property
 * @property `namespace` - The URL of the namespace definition
 * @property `prefix` - The prefix to be used for the name
 * @property `attribute` - Declares whether the property definition translates to an attribute instead of an element
 * @property `wrapped` - Signifies whether the array is wrapped
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * When defined within items, it will affect the name of the individual XML elements within the list.
 * When defined alongside type being array (outside the items), it will affect the wrapping element
 * and only if wrapped is true.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic XML):
 * ```ts
 * const xml: XML = {
 *   name: "animal",
 *   namespace: "http://example.com/schema",
 *   prefix: "ex"
 * };
 * ```
 *
 * @example (XML attribute):
 * ```ts
 * const xml: XML = {
 *   name: "id",
 *   attribute: true
 * };
 * ```
 *
 * @example (wrapped array):
 * ```ts
 * const xml: XML = {
 *   name: "items",
 *   wrapped: true
 * };
 * ```
 */
