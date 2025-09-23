import type { Extension } from "../extensions"

/**
 * -----
 * Reference Schema
 * -----
 *
 * A schema that contains only a reference to another schema definition.
 * When a schema contains `$ref`, no other sibling keys are allowed except
 * `description` and extensions (`x-...`).
 *
 * This enforces the OpenAPI 3.0.x rule that `$ref` is mutually exclusive
 * with all other schema properties except description and extensions.
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
 * @key `$ref` - The reference string. MUST be a valid JSON Reference.
 * @key `description` - A short description of the referenced schema.
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * When using `$ref`, no other schema properties are allowed except
 * `description` and extensions. This is enforced by the type system.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple reference):
 * ```ts
 * const refSchema: ReferenceSchema = {
 *   $ref: "#/components/schemas/User"
 * };
 * ```
 *
 * @example (reference with description):
 * ```ts
 * const refSchema: ReferenceSchema = {
 *   $ref: "#/components/schemas/Pet",
 *   description: "A reference to the Pet schema"
 * };
 * ```
 *
 * @example (reference with extensions):
 * ```ts
 * const refSchema: ReferenceSchema = {
 *   $ref: "#/components/schemas/Order",
 *   description: "Order information",
 *   "x-custom-property": "value"
 * };
 * ```
 */
export interface ReferenceSchema extends Extension {
  /**
   * The reference string. MUST be a valid JSON Reference.
   * 
   * @example "#/components/schemas/User"
   * @example "#/components/responses/NotFound"
   * @example "#/components/parameters/LimitParam"
   */
  $ref: string

  /**
   * A short description of the referenced schema. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "A reference to the User schema"
   * @example "Pet object definition"
   */
  description?: string
}
