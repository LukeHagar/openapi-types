import type { Extension } from "./extensions";

/**
 * -----
 * XML Object
 * -----
 *
 * A metadata object that allows for more fine-tuned XML model definitions.
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
 * @property `name` - Optional Replaces the name of the element/attribute used for the described schema property
 * @property `namespace` - Optional The URI of the namespace definition
 * @property `prefix` - Optional The prefix to be used for the name
 * @property `attribute` - Optional Declares whether the property definition translates to an attribute instead of an element
 * @property `wrapped` - Optional MAY be used only for an array definition. Signifies whether the array is wrapped
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple XML):
 * ```ts
 * const xml: XML = {
 *   name: "user"
 * };
 * ```
 *
 * @example (XML with namespace):
 * ```ts
 * const xml: XML = {
 *   name: "user",
 *   namespace: "http://example.com/schema/user",
 *   prefix: "user"
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
 *   name: "users",
 *   wrapped: true
 * };
 * ```
 */
export interface XML extends Extension {
	/**
	 * Replaces the name of the element/attribute used for the described schema property.
	 * When defined within the Items Object (items), it will affect the name of the individual
	 * XML elements within the list. When defined alongside type being array (outside the items),
	 * it will affect the wrapping element and only if wrapped is true. If wrapped is false,
	 * it will be ignored.
	 *
	 * @example "user"
	 * @example "id"
	 * @example "users"
	 */
	name?: string;

	/**
	 * The URI of the namespace definition. This MUST be in the form of an absolute URI.
	 *
	 * @example "http://example.com/schema/user"
	 * @example "http://www.w3.org/XML/1998/namespace"
	 */
	namespace?: string;

	/**
	 * The prefix to be used for the name.
	 *
	 * @example "user"
	 * @example "xml"
	 */
	prefix?: string;

	/**
	 * Declares whether the property definition translates to an attribute instead of an element.
	 * Default value is false.
	 *
	 * @example true
	 * @example false
	 */
	attribute?: boolean;

	/**
	 * MAY be used only for an array definition. Signifies whether the array is wrapped
	 * (for example, `<books><book/><book/></books>`) or unwrapped
	 * (for example, `<book/><book/>`). Default value is false. The definition takes effect
	 * only when defined alongside type being array (outside the items).
	 *
	 * @example true
	 * @example false
	 */
	wrapped?: boolean;
}
