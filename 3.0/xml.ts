import type { Extension } from "./extensions";

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
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object | OpenAPI 3.0.4 XML} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object | OpenAPI 3.0.3 XML} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object | OpenAPI 3.0.2 XML} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object | OpenAPI 3.0.1 XML} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object | OpenAPI 3.0.0 XML} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Optional Replaces the name of the element/attribute used for the described schema property
 * @property `namespace` - Optional The URL of the namespace definition
 * @property `prefix` - Optional The prefix to be used for the name
 * @property `attribute` - Optional Declares whether the property definition translates to an attribute instead of an element
 * @property `wrapped` - Optional MAY be used only for an array definition
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional. The `xml` object has no effect when placed on root schemas
 * in OpenAPI 3.0.x - it only affects property schemas (nested schemas).
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple XML element):
 * ```ts
 * const xml: XML = {
 *   name: "animal"
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
 * @example (namespaced XML):
 * ```ts
 * const xml: XML = {
 *   name: "user",
 *   namespace: "http://example.com/schema",
 *   prefix: "ex"
 * };
 * ```
 *
 * @example (wrapped array):
 * ```ts
 * const xml: XML = {
 *   name: "users",
 *   wrapped: true
 * };
 * ```
 *
 * @example (array items with custom name):
 * ```ts
 * const xml: XML = {
 *   name: "user"
 * };
 * ```
 */
export interface XML extends Extension {
	/**
	 * Replaces the name of the element/attribute used for the described schema property.
	 * When defined within items, it will affect the name of the individual XML elements within the list.
	 * When defined alongside type being array (outside the items), it will affect the wrapping element
	 * and only if wrapped is true. If wrapped is false, it will affect the items within the array.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object  | OpenAPI 3.0.4 XML Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object  | OpenAPI 3.0.3 XML Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object  | OpenAPI 3.0.2 XML Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object  | OpenAPI 3.0.1 XML Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object  | OpenAPI 3.0.0 XML Object - name} |
	 * @property `name` - Optional Replaces the name of the element/attribute used for the described schema property
	 *
	 * @example "animal"
	 * @example "item"
	 */
	name?: string;

	/**
	 * The URL of the namespace definition. Value SHOULD be in the form of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object  | OpenAPI 3.0.4 XML Object - namespace} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object  | OpenAPI 3.0.3 XML Object - namespace} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object  | OpenAPI 3.0.2 XML Object - namespace} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object  | OpenAPI 3.0.1 XML Object - namespace} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object  | OpenAPI 3.0.0 XML Object - namespace} |
	 * @property `namespace` - Optional The URL of the namespace definition
	 *
	 * @example "http://example.com/schema"
	 * @example "http://www.w3.org/XML/1998/namespace"
	 */
	namespace?: string;

	/**
	 * The prefix to be used for the name.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object  | OpenAPI 3.0.4 XML Object - prefix} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object  | OpenAPI 3.0.3 XML Object - prefix} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object  | OpenAPI 3.0.2 XML Object - prefix} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object  | OpenAPI 3.0.1 XML Object - prefix} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object  | OpenAPI 3.0.0 XML Object - prefix} |
	 * @property `prefix` - Optional The prefix to be used for the name
	 *
	 * @example "xs"
	 * @example "ns"
	 */
	prefix?: string;

	/**
	 * Declares whether the property definition translates to an attribute instead of an element.
	 * Default value is false.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object  | OpenAPI 3.0.4 XML Object - attribute} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object  | OpenAPI 3.0.3 XML Object - attribute} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object  | OpenAPI 3.0.2 XML Object - attribute} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object  | OpenAPI 3.0.1 XML Object - attribute} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object  | OpenAPI 3.0.0 XML Object - attribute} |
	 * @property `attribute` - Optional Declares whether the property definition translates to an attribute instead of an element
	 *
	 * @example true
	 * @example false
	 */
	attribute?: boolean;

	/**
	 * MAY be used only for an array definition. Signifies whether the array is wrapped (for example,
	 * <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false.
	 * The definition takes effect only when defined alongside type being array (outside the items).
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#xml-object  | OpenAPI 3.0.4 XML Object - wrapped} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#xml-object  | OpenAPI 3.0.3 XML Object - wrapped} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#xml-object  | OpenAPI 3.0.2 XML Object - wrapped} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#xml-object  | OpenAPI 3.0.1 XML Object - wrapped} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#xml-object  | OpenAPI 3.0.0 XML Object - wrapped} |
	 * @property `wrapped` - Optional MAY be used only for an array definition. Signifies whether the array is wrapped
	 *
	 * @example true
	 * @example false
	 */
	wrapped?: boolean;
}
