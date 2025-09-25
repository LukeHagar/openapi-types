import type { Extension } from "./extensions";

/**
 * -----
 * Info Object
 * -----
 *
 * The object provides metadata about the API. The metadata MAY be used by tooling
 * as required. The object may be extended with Specification Extensions.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#info-object | OpenAPI 3.1.1 Info Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#info-object | OpenAPI 3.1.0 Info Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `title` - Required The title of the API
 * @property `summary` - Optional A short summary of the API
 * @property `description` - Optional A description of the API
 * @property `termsOfService` - Optional A URL to the Terms of Service for the API
 * @property `contact` - Optional The contact information for the exposed API
 * @property `license` - Optional The license information for the exposed API
 * @property `version` - Required The version of the OpenAPI document
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `title` and `version` fields are required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (minimal info):
 * ```ts
 * const info: Info = {
 *   title: "Pet Store API",
 *   version: "1.0.0"
 * };
 * ```
 *
 * @example (complete info):
 * ```ts
 * const info: Info = {
 *   title: "Pet Store API",
 *   summary: "A sample API that uses a petstore as an example",
 *   description: "This is a sample server Petstore server.",
 *   termsOfService: "http://example.com/terms/",
 *   contact: {
 *     name: "API Support",
 *     url: "http://www.example.com/support",
 *     email: "support@example.com"
 *   },
 *   license: {
 *     name: "Apache 2.0",
 *     url: "https://www.apache.org/licenses/LICENSE-2.0.html"
 *   },
 *   version: "1.0.0"
 * };
 * ```
 */
export interface Info extends Extension {
	/**
	 * The title of the API. This field is required.
	 *
	 * @example "Pet Store API"
	 * @example "User Management API"
	 */
	title: string;

	/**
	 * A short summary of the API.
	 *
	 * @example "A sample API that uses a petstore as an example"
	 * @example "API for managing users and their data"
	 */
	summary?: string;

	/**
	 * A description of the API. CommonMark syntax MAY be used for rich text representation.
	 *
	 * @example "This is a sample server Petstore server."
	 * @example "This API provides endpoints for user management, authentication, and data operations."
	 */
	description?: string;

	/**
	 * A URL to the Terms of Service for the API. MUST be in the format of a URL.
	 *
	 * @example "http://example.com/terms/"
	 * @example "https://www.example.com/terms-of-service"
	 */
	termsOfService?: string;

	/**
	 * The contact information for the exposed API.
	 *
	 * @example { name: "API Support", email: "support@example.com" }
	 */
	contact?: Contact;

	/**
	 * The license information for the exposed API.
	 *
	 * @example { name: "Apache 2.0", url: "https://www.apache.org/licenses/LICENSE-2.0.html" }
	 */
	license?: License;

	/**
	 * The version of the OpenAPI document. This field is required.
	 *
	 * @example "1.0.0"
	 * @example "2.1.3"
	 */
	version: string;
}

/**
 * -----
 * Contact Object
 * -----
 *
 * Contact information for the exposed API.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#contact-object | OpenAPI 3.1.1 Contact Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#contact-object | OpenAPI 3.1.0 Contact Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Optional The identifying name of the contact person/organization
 * @property `url` - Optional The URL pointing to the contact information
 * @property `email` - Optional The email address of the contact person/organization
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple contact):
 * ```ts
 * const contact: Contact = {
 *   name: "API Support",
 *   email: "support@example.com"
 * };
 * ```
 *
 * @example (complete contact):
 * ```ts
 * const contact: Contact = {
 *   name: "API Support",
 *   url: "http://www.example.com/support",
 *   email: "support@example.com"
 * };
 * ```
 */
export interface Contact extends Extension {
	/**
	 * The identifying name of the contact person/organization.
	 *
	 * @example "API Support"
	 * @example "Development Team"
	 */
	name?: string;

	/**
	 * The URL pointing to the contact information. MUST be in the format of a URL.
	 *
	 * @example "http://www.example.com/support"
	 * @example "https://example.com/contact"
	 */
	url?: string;

	/**
	 * The email address of the contact person/organization. MUST be in the format of an email address.
	 *
	 * @example "support@example.com"
	 * @example "dev@example.com"
	 */
	email?: string;
}

/**
 * -----
 * License Object
 * -----
 *
 * License information for the exposed API.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#license-object | OpenAPI 3.1.1 License Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#license-object | OpenAPI 3.1.0 License Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The license name used for the API
 * @property `identifier` - Optional An SPDX license expression for the API
 * @property `url` - Optional A URL to the license used for the API
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` field is required. Either `identifier` or `url` should be specified.
 *
 * -----
 * Examples
 * -----
 *
 * @example (with URL):
 * ```ts
 * const license: License = {
 *   name: "Apache 2.0",
 *   url: "https://www.apache.org/licenses/LICENSE-2.0.html"
 * };
 * ```
 *
 * @example (with identifier):
 * ```ts
 * const license: License = {
 *   name: "Apache 2.0",
 *   identifier: "Apache-2.0"
 * };
 * ```
 */
export interface License extends Extension {
	/**
	 * The license name used for the API. This field is required.
	 *
	 * @example "Apache 2.0"
	 * @example "MIT"
	 * @example "GPL-3.0"
	 */
	name: string;

	/**
	 * An SPDX license expression for the API. The `identifier` field is mutually
	 * exclusive of the `url` field.
	 *
	 * @example "Apache-2.0"
	 * @example "MIT"
	 * @example "GPL-3.0"
	 */
	identifier?: string;

	/**
	 * A URL to the license used for the API. MUST be in the format of a URL.
	 * The `url` field is mutually exclusive of the `identifier` field.
	 *
	 * @example "https://www.apache.org/licenses/LICENSE-2.0.html"
	 * @example "https://opensource.org/licenses/MIT"
	 */
	url?: string;
}
