import type { Extension } from "./extensions";

/**
 * -----
 * Example Object
 * -----
 *
 * Allows sharing examples for operation responses. Examples provide concrete
 * instances of what the API response will look like, making it easier for
 * developers to understand the expected data structure and format.
 *
 * Examples are commonly used by documentation generators and API testing tools
 * to provide realistic sample data that developers can use as a reference
 * when implementing client applications.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#example-object | Swagger 2.0 Example Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `[mimeType]` - The name of the property MUST be one of the Operation produces values (either implicit or inherited). The value SHOULD be an example of what such a response would look like.
 *
 * @note
 * The property names correspond to MIME types that the operation can produce.
 *
 * -----
 * Examples
 * -----
 *
 * @example (JSON response example):
 * ```ts
 * const example: Example = {
 *   "application/json": {
 *     "name": "Puma",
 *     "type": "Dog",
 *     "color": "Black",
 *     "gender": "Female",
 *     "breed": "Mixed"
 *   }
 * };
 * ```
 *
 * @example (XML response example):
 * ```ts
 * const example: Example = {
 *   "application/xml": "<pet><name>Puma</name><type>Dog</type></pet>"
 * };
 * ```
 *
 * @example (multiple content types):
 * ```ts
 * const example: Example = {
 *   "application/json": { "id": 1, "name": "John" },
 *   "application/xml": "<user><id>1</id><name>John</name></user>"
 * };
 * ```
 */
export interface Examples extends Extension {
	/**
	 * The name of the property MUST be one of the Operation produces values
	 * (either implicit or inherited). The value SHOULD be an example of what
	 * such a response would look like.
	 *
	 * The property name corresponds to a MIME type that the operation can produce.
	 * The value should be a realistic example of the response data in that format.
	 *
	 * @example { "application/json": { name: "Puma", type: "Dog" } }
	 * @example { "application/xml": "<pet><name>Puma</name></pet>" }
	 * @example { "text/plain": "Success" }
	 */
	[mimeType: string]: unknown;
}
