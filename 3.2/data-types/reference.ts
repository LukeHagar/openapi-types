import type { Extension } from "../extensions";

/**
 * -----
 * Reference Schema
 * -----
 *
 * A schema that references another schema. When a schema contains `$ref`,
 * no other sibling keys are allowed except `description` and extensions.
 * This enforces the OpenAPI 3.2.0 rule that `$ref` is exclusive with other properties.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#reference-object | OpenAPI 3.2.0 Reference Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `$ref` - Required A reference to a schema
 * @property `description` - Optional A description of the referenced schema
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * When `$ref` is present, no other properties except `description` and extensions are allowed.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple reference):
 * ```ts
 * const reference: ReferenceSchema = {
 *   $ref: "#/components/schemas/User"
 * };
 * ```
 *
 * @example (reference with description):
 * ```ts
 * const reference: ReferenceSchema = {
 *   $ref: "#/components/schemas/User",
 *   description: "Reference to a user schema"
 * };
 * ```
 *
 * @example (reference with extension):
 * ```ts
 * const reference: ReferenceSchema = {
 *   $ref: "#/components/schemas/User",
 *   "x-custom": "value"
 * };
 * ```
 */
export interface ReferenceSchema extends Extension {
  /**
   * A reference to a schema. This MUST be in the form of a URI.
   * When present, no other properties except `description` and extensions are allowed.
   *
   * Example: `"#/components/schemas/User"`
   */
  $ref: string;

  /**
   * A description of the referenced schema.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * Example: `"Reference to a user schema"`
   */
  description?: string;
}
