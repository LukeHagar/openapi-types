import type { Extension } from "./extensions";

/**
 * -----
 * XML Object
 * -----
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
 * OpenAPI 3.2.0 introduces a modernized XML modeling approach using `nodeType`
 * to replace the deprecated `attribute` and `wrapped` fields from earlier versions.
 *
 * When using arrays, XML element names are not inferred (for singular/plural forms)
 * and the `name` property SHOULD be used to add that information.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#xml-object | OpenAPI 3.2.0 XML Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `nodeType` - Optional The type of XML node this schema produces
 * @property `name` - Optional Replaces the name of the element/attribute used for the described schema property
 * @property `namespace` - Optional The URI of the namespace definition
 * @property `prefix` - Optional The prefix to be used for the name
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional. The `name`, `namespace`, and `prefix` fields are only
 * effective when `nodeType` is "element" or "attribute". For "text", "cdata", and "none"
 * node types, these fields are ignored.
 *
 * -----
 * Examples
 * -----
 *
 * @example (XML element):
 * ```ts
 * const xml: XML = {
 *   nodeType: "element",
 *   name: "user"
 * };
 * ```
 *
 * @example (XML attribute):
 * ```ts
 * const xml: XML = {
 *   nodeType: "attribute",
 *   name: "id"
 * };
 * ```
 *
 * @example (namespaced element):
 * ```ts
 * const xml: XML = {
 *   nodeType: "element",
 *   name: "user",
 *   namespace: "http://example.com/schema/user",
 *   prefix: "user"
 * };
 * ```
 *
 * @example (array with wrapper element):
 * ```ts
 * const xml: XML = {
 *   nodeType: "element",
 *   name: "users"
 * };
 * ```
 *
 * @example (array without wrapper - only items):
 * ```ts
 * const xml: XML = {
 *   nodeType: "none"
 * };
 * ```
 *
 * @example (text content):
 * ```ts
 * const xml: XML = {
 *   nodeType: "text"
 * };
 * ```
 *
 * @example (CDATA section):
 * ```ts
 * const xml: XML = {
 *   nodeType: "cdata"
 * };
 * ```
 *
 * -----
 * Migration from OpenAPI 3.0/3.1
 * -----
 *
 * @example (attribute migration):
 * ```ts
 * // OpenAPI 3.0/3.1:
 * const oldXml: XML = {
 *   name: "id",
 *   attribute: true
 * };
 *
 * // OpenAPI 3.2:
 * const newXml: XML = {
 *   name: "id",
 *   nodeType: "attribute"
 * };
 * ```
 *
 * @example (wrapped array migration):
 * ```ts
 * // OpenAPI 3.0/3.1:
 * const oldArrayXml: XML = {
 *   name: "users",
 *   wrapped: true
 * };
 *
 * // OpenAPI 3.2 (array with wrapper):
 * const newArrayXml: XML = {
 *   nodeType: "element",
 *   name: "users"
 * };
 *
 * // OpenAPI 3.2 (array without wrapper):
 * const newArrayXmlNoWrapper: XML = {
 *   nodeType: "none"
 * };
 * ```
 */
export interface XML extends Extension {
  /**
   * The type of XML node this schema produces. Determines how the schema
   * is serialized to XML.
   *
   * - `"element"`: Produces an XML element node (may contain attributes, child elements, or text)
   * - `"attribute"`: Produces an XML attribute node on the containing element (value-only)
   * - `"text"`: Contributes character data of the containing element (PCDATA)
   * - `"cdata"`: Contributes a CDATA section of the containing element
   * - `"none"`: Does not directly produce a node (used for structural control, e.g., array wrappers)
   *
   * @example "element"
   * @example "attribute"
   * @example "text"
   * @example "cdata"
   * @example "none"
   */
  nodeType?: "element" | "attribute" | "text" | "cdata" | "none";

  /**
   * Replaces the name of the element/attribute used for the described schema property.
   * Only effective when `nodeType` is "element" or "attribute". When defined within
   * the Items Object (items), it will affect the name of the individual XML elements
   * within the list. When defined alongside type being array (outside the items),
   * it will affect the wrapping element name.
   *
   * @example "user"
   * @example "id"
   * @example "users"
   */
  name?: string;

  /**
   * The URI of the namespace definition. This MUST be in the form of an absolute URI.
   * Only effective when `nodeType` is "element" or "attribute".
   *
   * @example "http://example.com/schema/user"
   * @example "http://www.w3.org/XML/1998/namespace"
   */
  namespace?: string;

  /**
   * The prefix to be used for the name. Only effective when `nodeType` is "element" or "attribute".
   *
   * @example "user"
   * @example "xml"
   */
  prefix?: string;
}
