import type { Extension } from "./extensions";

/**
 * -----
 * Reference Object
 * -----
 *
 * A simple object to allow referencing other components in the specification,
 * internally and externally.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#reference-object | OpenAPI 3.0.4 Reference} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#reference-object | OpenAPI 3.0.3 Reference} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#reference-object | OpenAPI 3.0.2 Reference} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#reference-object | OpenAPI 3.0.1 Reference} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#reference-object | OpenAPI 3.0.0 Reference} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `$ref` - Required The reference string
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `$ref` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple reference):
 * ```ts
 * const reference: Reference = {
 *   $ref: "#/components/schemas/User"
 * };
 * ```
 */
export interface Reference extends Extension {
	/**
	 * The reference string. MUST be a valid JSON Reference.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#reference-object  | OpenAPI 3.0.4 Reference Object - $ref} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#reference-object  | OpenAPI 3.0.3 Reference Object - $ref} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#reference-object  | OpenAPI 3.0.2 Reference Object - $ref} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#reference-object  | OpenAPI 3.0.1 Reference Object - $ref} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#reference-object  | OpenAPI 3.0.0 Reference Object - $ref} |
	 * @property `$ref` - Required The reference string
	 *
	 * @example "#/components/schemas/User"
	 * @example "#/components/responses/NotFound"
	 * @example "#/components/parameters/LimitParam"
	 */
	$ref: string;
}
