import type { BaseReference } from "../references"
import type { StringSchema } from "./string"
import type { NumberSchema } from "./number"
import type { IntegerSchema } from "./integer"
import type { BooleanSchema } from "./boolean"
import type { FileSchema } from "./file"
import type { ArraySchema } from "./array"
import type { ObjectSchema } from "./object"

/**
 * -----
 * Schema
 * -----
 *
 * The complete schema type for Swagger 2.0, which includes all possible schema types
 * plus Swagger-specific extensions. This is the union type that represents any valid
 * schema definition in a Swagger 2.0 specification.
 *
 * Swagger schemas are based on JSON Schema Draft 4 with Swagger-specific extensions
 * and the additional "file" type. They provide comprehensive validation capabilities
 * for all data types supported by the Swagger 2.0 specification.
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
 * @key `StringSchema` - String data types with format and validation
 * @key `NumberSchema` - Numeric data types (floating-point)
 * @key `IntegerSchema` - Integer data types (whole numbers)
 * @key `BooleanSchema` - Boolean data types (true/false)
 * @key `FileSchema` - File data types (Swagger 2.0 specific)
 * @key `ArraySchema` - Array data types with item validation
 * @key `ObjectSchema` - Object data types with property definitions
 * @key `BaseReference` - JSON Reference to other schema definitions
 *
 * @note
 * All schema types inherit from BaseSchemaProperties and support
 * comprehensive validation rules. The "file" type is specific to
 * Swagger 2.0 and not part of the JSON Schema specification.
 *
 * -----
 * Examples
 * -----
 *
 * @example (string schema):
 * ```ts
 * const stringSchema: Schema = {
 *   type: "string",
 *   format: "email",
 *   description: "User email address",
 *   pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
 * };
 * ```
 *
 * @example (object schema):
 * ```ts
 * const userSchema: Schema = {
 *   type: "object",
 *   properties: {
 *     id: { type: "integer", format: "int64" },
 *     name: { type: "string" },
 *     email: { type: "string", format: "email" }
 *   },
 *   required: ["id", "name", "email"]
 * };
 * ```
 *
 * @example (array schema):
 * ```ts
 * const tagsSchema: Schema = {
 *   type: "array",
 *   items: { type: "string" },
 *   minItems: 1,
 *   maxItems: 10,
 *   uniqueItems: true
 * };
 * ```
 *
 * @example (reference schema):
 * ```ts
 * const refSchema: Schema = {
 *   $ref: "#/definitions/User"
 * };
 * ```
 *
 * @example (file schema):
 * ```ts
 * const fileSchema: Schema = {
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
  | BaseReference
