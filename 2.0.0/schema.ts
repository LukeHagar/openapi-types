import type {
  StringSchema,
  NumberSchema,
  IntegerSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
  FileSchema,
  SwaggerSchema as BaseSwaggerSchema,
  BaseSchemaProperties,
} from "./data-types"
import type { BaseReference } from "./references"
import type { XMLObject } from "./xml"
import type { ExternalDocumentation } from "./externalDocs"

/**
 * Schema Object (Swagger 2.0)
 *
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays. This object
 * is a subset of JSON Schema Specification Draft 4 and uses the same
 * formatting rules (sections 9-11).
 *
 * In Swagger 2.0, this is a limited subset of JSON Schema. Here we model it
 * as a union of known schema atoms or a reference to a definition.
 *
 * @see https://swagger.io/specification/v2/#schema-object
 * @example
 * ```typescript
 * // String schema
 * const stringSchema: Schema = {
 *   type: "string",
 *   minLength: 1,
 *   maxLength: 100
 * }
 * 
 * // Object schema
 * const objectSchema: Schema = {
 *   type: "object",
 *   properties: {
 *     name: { type: "string" },
 *     age: { type: "integer" }
 *   },
 *   required: ["name"]
 * }
 * 
 * // Reference to a definition
 * const refSchema: Schema = {
 *   $ref: "#/definitions/User"
 * }
 * ```
 */
export type Schema = BaseSwaggerSchema

/**
 * XML Object
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred (for singular/plural forms) 
 * and the name property should be used to add that information.
 *
 * @see https://swagger.io/specification/v2/#xml-object
 * @example
 * ```typescript
 * const xml: XML = {
 *   name: "animal",
 *   namespace: "http://example.com/schema/sample",
 *   prefix: "sample",
 *   attribute: false,
 *   wrapped: true
 * }
 * ```
 */
/**
 * -----
 * Swagger Schema with Extensions
 * -----
 *
 * Extended schema that includes Swagger 2.0 specific properties beyond JSON Schema.
 * This interface combines the base schema properties with Swagger-specific extensions
 * that provide additional functionality for API documentation and validation.
 *
 * Swagger 2.0 extends JSON Schema with several additional properties that are
 * specific to API documentation needs, including polymorphism support, read-only
 * properties, XML representation metadata, and external documentation references.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#schema-object | Swagger 2.0 Schema Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `discriminator` - Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema.
 * @key `readOnly` - Relevant only for Schema "properties" definitions. Declares the property as "read only".
 * @key `xml` - This MAY be used only on properties schemas. It has no effect on root schemas. Adds Additional metadata to describe the XML representation format of this property.
 * @key `externalDocs` - Additional external documentation for this schema.
 *
 * @note
 * All Swagger-specific extension fields are optional. The `discriminator` field
 * is used for polymorphism and must be defined in the schema and included in
 * the required property list when used.
 *
 * -----
 * Examples
 * -----
 *
 * @example (schema with discriminator):
 * ```ts
 * const polymorphicSchema: SwaggerSchemaWithExtensions = {
 *   type: "object",
 *   discriminator: "petType",
 *   properties: {
 *     name: { type: "string" },
 *     petType: { type: "string" }
 *   },
 *   required: ["name", "petType"]
 * };
 * ```
 *
 * @example (read-only property):
 * ```ts
 * const readOnlySchema: SwaggerSchemaWithExtensions = {
 *   type: "object",
 *   properties: {
 *     id: { type: "integer", readOnly: true },
 *     name: { type: "string" },
 *     createdAt: { type: "string", format: "date-time", readOnly: true }
 *   },
 *   required: ["name"]
 * };
 * ```
 *
 * @example (schema with XML metadata):
 * ```ts
 * const xmlSchema: SwaggerSchemaWithExtensions = {
 *   type: "object",
 *   properties: {
 *     id: { 
 *       type: "integer",
 *       xml: { attribute: true }
 *     },
 *     name: { 
 *       type: "string",
 *       xml: { 
 *         name: "personName",
 *         namespace: "http://example.com/schema",
 *         prefix: "ex"
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (schema with external docs):
 * ```ts
 * const documentedSchema: SwaggerSchemaWithExtensions = {
 *   type: "object",
 *   properties: {
 *     data: { type: "string" }
 *   },
 *   externalDocs: {
 *     description: "Find out more about this schema",
 *     url: "https://example.com/docs/schema"
 *   }
 * };
 * ```
 *
 * @example (complete schema with all extensions):
 * ```ts
 * const completeSchema: SwaggerSchemaWithExtensions = {
 *   type: "object",
 *   discriminator: "type",
 *   properties: {
 *     id: { type: "integer", readOnly: true },
 *     type: { type: "string" },
 *     data: { 
 *       type: "string",
 *       xml: { name: "content" }
 *     }
 *   },
 *   required: ["type"],
 *   externalDocs: {
 *     description: "Complete schema documentation",
 *     url: "https://docs.example.com/schema"
 *   }
 * };
 * ```
 */
export interface SwaggerSchemaWithExtensions extends BaseSchemaProperties {
  // String-specific properties
  maxLength?: number
  minLength?: number
  pattern?: string
  
  // Number/Integer-specific properties
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  
  // Array-specific properties
  items?: SwaggerSchema | BaseReference
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  
  // Object-specific properties
  properties?: Record<string, SwaggerSchema | BaseReference>
  required?: string[]
  additionalProperties?: boolean | SwaggerSchema | BaseReference
  allOf?: (SwaggerSchema | BaseReference)[]
  maxProperties?: number
  minProperties?: number
  
  // Swagger-specific extensions
  /**
   * Adds support for polymorphism. The discriminator is the schema property name 
   * that is used to differentiate between other schema that inherit this schema. 
   * The property name used MUST be defined at this schema and it MUST be in the 
   * required property list. When used, the value MUST be the name of this schema 
   * or any schema that inherits it.
   * 
   * @example "petType"
   * @example "type"
   * @example "category"
   */
  discriminator?: string
  
  /**
   * Relevant only for Schema "properties" definitions. Declares the property as "read only". 
   * This means that it MAY be sent as part of a response but MUST NOT be sent as part 
   * of the request. Properties marked as readOnly being true SHOULD NOT be in the 
   * required list of the defined schema. Default value is false.
   * 
   * @default false
   * @example true
   * @example false
   */
  readOnly?: boolean
  
  /**
   * This MAY be used only on properties schemas. It has no effect on root schemas. 
   * Adds Additional metadata to describe the XML representation format of this property.
   * 
   * @example { name: "animal", wrapped: true }
   * @example { attribute: true }
   * @example { namespace: "http://example.com/schema", prefix: "ex" }
   */
  xml?: XMLObject
  
  /**
   * Additional external documentation for this schema.
   * 
   * @example { description: "Find out more about this schema", url: "https://example.com/docs" }
   * @example { description: "Schema reference guide", url: "https://docs.example.com/schema" }
   */
  externalDocs?: ExternalDocumentation
}

/**
 * Extended Schema Object that includes Swagger 2.0 specific properties
 * This combines the base Schema types with Swagger-specific extensions
 */
export type SwaggerSchema = SwaggerSchemaWithExtensions

/**
 * XML Object
 * 
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred (for singular/plural forms) 
 * and the name property should be used to add that information.
 * 
 * @see https://swagger.io/specification/v2/#xml-object
 */
export type XML = XMLObject

/**
 * Definitions Object
 *
 * An object to hold data types that can be consumed and produced by operations. 
 * These data types can be primitives, arrays or models.
 *
 * @see https://swagger.io/specification/v2/#definitions-object
 * @example
 * ```typescript
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
 * }
 * ```
 */
export type Definitions = Record<string, SwaggerSchema>

/**
 * Parameters Definitions Object
 *
 * An object to hold parameters to be reused across operations. Parameter definitions 
 * can be referenced to the ones defined here. This does not define global operation parameters.
 *
 * @see https://swagger.io/specification/v2/#parameters-definitions-object
 * @example
 * ```typescript
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
 * }
 * ```
 */
export type ParametersDefinitions = Record<string, Parameter | BaseReference>

/**
 * Responses Definitions Object
 *
 * An object to hold responses to be reused across operations. Response definitions 
 * can be referenced to the ones defined here. This does not define global operation responses.
 *
 * @see https://swagger.io/specification/v2/#responses-definitions-object
 * @example
 * ```typescript
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
 * }
 * ```
 */
export type ResponsesDefinitions = Record<string, Response | BaseReference>

// Re-export types from paths.ts to avoid circular dependencies
import type { Parameter, Response } from "./paths"
