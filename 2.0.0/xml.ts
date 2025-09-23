import type { Extension } from "./extensions"

/**
 * -----
 * XML Object
 * -----
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred (for singular/plural forms) 
 * and the name property should be used to add that information.
 *
 * The XML Object provides additional metadata to describe the XML representation
 * format of schema properties. It allows for precise control over how JSON
 * schema definitions are translated to XML, including element naming, namespaces,
 * attributes, and array wrapping.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#xml-object | Swagger 2.0 XML Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `name` - Replaces the name of the element/attribute used for the described schema property.
 * @key `namespace` - The URL of the namespace definition. Value SHOULD be in the form of a URL.
 * @key `prefix` - The prefix to be used for the name.
 * @key `attribute` - Declares whether the property definition translates to an attribute instead of an element. Default value is false.
 * @key `wrapped` - MAY be used only for an array definition. Signifies whether the array is wrapped. Default value is false.
 *
 * @note
 * All fields are optional. The `wrapped` property only takes effect when defined
 * alongside `type` being `array` (outside the items). When `wrapped` is true,
 * arrays are wrapped in a container element.
 *
 * -----
 * Examples
 * -----
 *
 * @example (basic XML element):
 * ```ts
 * const basicXml: XMLObject = {
 *   name: "animal"
 * };
 * ```
 *
 * @example (XML attribute):
 * ```ts
 * const attributeXml: XMLObject = {
 *   name: "id",
 *   attribute: true
 * };
 * ```
 *
 * @example (namespaced XML):
 * ```ts
 * const namespacedXml: XMLObject = {
 *   name: "name",
 *   namespace: "http://swagger.io/schema/sample",
 *   prefix: "sample"
 * };
 * ```
 *
 * @example (wrapped array):
 * ```ts
 * const wrappedArrayXml: XMLObject = {
 *   name: "animals",
 *   wrapped: true
 * };
 * ```
 *
 * @example (array items with custom name):
 * ```ts
 * const arrayItemsXml: XMLObject = {
 *   name: "animal"
 * };
 * ```
 *
 * @example (complete XML definition):
 * ```ts
 * const completeXml: XMLObject = {
 *   name: "person",
 *   namespace: "http://example.com/schema",
 *   prefix: "ex",
 *   attribute: false,
 *   wrapped: false
 * };
 * ```
 */
export interface XMLObject extends Extension {
  /**
   * Replaces the name of the element/attribute used for the described schema property. 
   * When defined within the Items Object, it will affect the name of the individual 
   * XML elements within the list. When defined alongside type being array (outside 
   * the items), it will affect the wrapping element and only if wrapped is true.
   * 
   * @example "animal"
   * @example "item"
   * @example "person"
   */
  name?: string
  
  /**
   * The URL of the namespace definition. Value SHOULD be in the form of a URL.
   * 
   * @example "http://example.com/schema/sample"
   * @example "http://www.w3.org/2001/XMLSchema"
   * @example "http://swagger.io/schema/sample"
   */
  namespace?: string
  
  /**
   * The prefix to be used for the name.
   * 
   * @example "sample"
   * @example "xs"
   * @example "ex"
   */
  prefix?: string
  
  /**
   * Declares whether the property definition translates to an attribute instead of an element. 
   * Default value is false.
   * 
   * @default false
   * @example true
   * @example false
   */
  attribute?: boolean
  
  /**
   * MAY be used only for an array definition. Signifies whether the array is wrapped 
   * (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>). 
   * Default value is false. The definition takes effect only when defined alongside 
   * type being array (outside the items).
   * 
   * @default false
   * @example true
   * @example false
   */
  wrapped?: boolean
}
