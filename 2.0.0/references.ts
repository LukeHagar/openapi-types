import type { Extension } from "./extensions"

/**
 * -----
 * JSON Reference Object
 * -----
 *
 * A simple object to allow referencing other definitions in the specification.
 * It can be used to reference parameters and responses that are defined at the 
 * top level for reuse. The Reference Object is a JSON Reference that uses a 
 * JSON Pointer as its value. For this specification, only canonical dereferencing 
 * is supported.
 *
 * JSON References enable reusability and modularity in API specifications by
 * allowing the same definition to be referenced multiple times throughout the
 * document. This reduces duplication and makes specifications easier to maintain.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#reference-object | Swagger 2.0 Reference Object} |
 * | 2.0     | {@link https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-02 | JSON Reference Specification} |
 * | 2.0     | {@link https://tools.ietf.org/html/rfc6901 | JSON Pointer Specification} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `$ref` - The reference string. This field is required.
 *
 * @note
 * The reference string follows JSON Pointer syntax and can reference:
 * - Definitions within the same document using "#/definitions/Name"
 * - Parameters within the same document using "#/parameters/Name"
 * - Responses within the same document using "#/responses/Name"
 * - External files using relative or absolute URLs
 * - Specific parts of external files using fragment identifiers
 *
 * -----
 * Examples
 * -----
 *
 * @example (definition reference):
 * ```ts
 * const userRef: BaseReference = {
 *   $ref: "#/definitions/User"
 * };
 * ```
 *
 * @example (parameter reference):
 * ```ts
 * const pageParamRef: BaseReference = {
 *   $ref: "#/parameters/PageParam"
 * };
 * ```
 *
 * @example (response reference):
 * ```ts
 * const notFoundRef: BaseReference = {
 *   $ref: "#/responses/NotFound"
 * };
 * ```
 *
 * @example (external file reference):
 * ```ts
 * const externalRef: BaseReference = {
 *   $ref: "Pet.json"
 * };
 * ```
 *
 * @example (external file with fragment):
 * ```ts
 * const externalFragmentRef: BaseReference = {
 *   $ref: "definitions.json#/Pet"
 * };
 * ```
 *
 * @example (absolute URL reference):
 * ```ts
 * const absoluteRef: BaseReference = {
 *   $ref: "https://api.example.com/schemas/User.json"
 * };
 * ```
 */
export interface BaseReference {
  /**
   * The reference string. This field is required.
   * 
   * The reference string follows JSON Pointer syntax and can reference:
   * - Definitions within the same document using "#/definitions/Name"
   * - Parameters within the same document using "#/parameters/Name"  
   * - Responses within the same document using "#/responses/Name"
   * - External files using relative or absolute URLs
   * - Specific parts of external files using fragment identifiers
   * 
   * @example "#/definitions/Pet"
   * @example "#/parameters/skipParam"
   * @example "#/responses/NotFound"
   * @example "Pet.json"
   * @example "definitions.json#/Pet"
   * @example "https://api.example.com/schemas/User.json"
   */
  $ref: string
}

/**
 * -----
 * Reference Object with Extensions
 * -----
 *
 * A reference object that can be extended with vendor-specific properties.
 * This allows for additional metadata to be attached to references while
 * maintaining the core reference functionality.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#reference-object | Swagger 2.0 Reference Object} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#specification-extensions | Swagger 2.0 Extensions} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (reference with extensions):
 * ```ts
 * const extendedRef: Reference = {
 *   $ref: "#/definitions/User",
 *   "x-deprecated": true,
 *   "x-version": "1.0.0"
 * };
 * ```
 */
export interface Reference extends BaseReference, Extension {}
