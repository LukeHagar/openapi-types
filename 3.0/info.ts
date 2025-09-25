import type { LicenseName, LicenseURL } from "../License";
import type { Extension } from "./extensions";

/**
 * -----
 * Info Object
 * -----
 *
 * The object provides metadata about the API.
 * The metadata MAY be used by the clients if needed, and MAY be presented in
 * editing or documentation generation tools for convenience.
 *
 * The Info Object provides metadata about the API. This metadata can be used by
 * clients if needed, and can be presented in the OpenAPI-UI for convenience.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object | OpenAPI 3.0.4 Info} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object | OpenAPI 3.0.3 Info} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object | OpenAPI 3.0.2 Info} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object | OpenAPI 3.0.1 Info} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object | OpenAPI 3.0.0 Info} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `title` - Required The title of the application
 * @property `description` - Optional A short description of the application
 * @property `termsOfService` - Optional A URL to the Terms of Service for the API
 * @property `contact` - Optional The contact information for the exposed API
 * @property `license` - Optional The license information for the exposed API
 * @property `version` - Required The version of the OpenAPI document
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `title` and `version` fields are required. In OpenAPI 3.0.1+, the `description`
 * field was clarified to support CommonMark syntax for rich text representation.
 * The `termsOfService` field must be a valid URL format.
 *
 * -----
 * Examples
 * -----
 *
 * @example (minimal info):
 * ```ts
 * const info: Info = {
 *   title: "Sample Pet Store App",
 *   version: "1.0.1"
 * };
 * ```
 *
 * @example (full info object):
 * ```ts
 * const info: Info = {
 *   title: "Sample Pet Store App",
 *   description: "This is a sample server for a pet store.",
 *   termsOfService: "http://example.com/terms/",
 *   contact: {
 *     name: "API Support",
 *     url: "http://www.example.com/support",
 *     email: "support@example.com"
 *   },
 *   license: {
 *     name: "Apache 2.0",
 *     url: "http://www.apache.org/licenses/LICENSE-2.0.html"
 *   },
 *   version: "1.0.1"
 * };
 * ```
 */
export interface Info extends Extension {
	/**
	 * The title of the application. This field is required.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object | OpenAPI 3.0.4 Info Object - title} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object | OpenAPI 3.0.3 Info Object - title} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object | OpenAPI 3.0.2 Info Object - title} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object | OpenAPI 3.0.1 Info Object - title} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object | OpenAPI 3.0.0 Info Object - title} |
	 *
	 * @property `title` - Required The title of the application
	 *
	 * @example "Sample Pet Store App"
	 * @example "My API"
	 */
	title: string;

	/**
	 * A short description of the application. CommonMark syntax MAY be used for rich text representation.
	 *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object | OpenAPI 3.0.4 Info Object - description} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object | OpenAPI 3.0.3 Info Object - description} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object | OpenAPI 3.0.2 Info Object - description} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object | OpenAPI 3.0.1 Info Object - description} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object | OpenAPI 3.0.0 Info Object - description} |
	 *
	 * @property `description` - Optional A short description of the application
	 *
	 * @example "This is a sample server for a pet store."
	 * @example "A comprehensive API for managing user data"
	 */
	description?: string;

	/**
	 * A URL to the Terms of Service for the API. MUST be in the format of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - termsOfService} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - termsOfService} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - termsOfService} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - termsOfService} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - termsOfService} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - termsOfService} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - termsOfService} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - termsOfService} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - termsOfService} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - termsOfService} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - termsOfService} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - termsOfService} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - termsOfService} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - termsOfService} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - termsOfService} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - termsOfService} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - termsOfService} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - termsOfService} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - termsOfService} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - termsOfService} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - termsOfService} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - termsOfService} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - termsOfService} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - termsOfService} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - termsOfService} |
	 * @property `termsOfService` - Optional A URL to the Terms of Service for the API
	 *
	 * @example "http://example.com/terms/"
	 * @example "https://example.com/terms"
	 */
	termsOfService?: string;

	/**
	 * The contact information for the exposed API.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - contact} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - contact} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - contact} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - contact} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - contact} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - contact} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - contact} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - contact} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - contact} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - contact} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - contact} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - contact} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - contact} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - contact} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - contact} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - contact} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - contact} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - contact} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - contact} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - contact} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - contact} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - contact} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - contact} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - contact} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - contact} |
	 * @property `contact` - Optional The contact information for the exposed API
	 *
	 * @example { name: "API Support", email: "support@example.com" }
	 */
	contact?: Contact;

	/**
	 * The license information for the exposed API.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - license} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - license} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - license} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - license} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - license} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - license} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - license} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - license} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - license} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - license} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - license} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - license} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - license} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - license} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - license} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - license} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - license} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - license} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - license} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - license} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - license} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - license} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - license} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - license} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - license} |
	 * @property `license` - Optional The license information for the exposed API
	 *
	 * @example { name: "Apache 2.0", url: "http://www.apache.org/licenses/LICENSE-2.0.html" }
	 */
	license?: License;

	/**
	 * The version of the OpenAPI document (which is distinct from the OpenAPI Specification version
	 * or the API implementation version). This field is required.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - version} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - version} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - version} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - version} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#info-object  | OpenAPI 3.0.4 Info Object - version} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - version} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - version} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - version} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - version} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#info-object  | OpenAPI 3.0.3 Info Object - version} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - version} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - version} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - version} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - version} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#info-object  | OpenAPI 3.0.2 Info Object - version} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - version} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - version} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - version} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - version} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#info-object  | OpenAPI 3.0.1 Info Object - version} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - version} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - version} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - version} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - version} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#info-object  | OpenAPI 3.0.0 Info Object - version} |
	 * @property `version` - Required The version of the OpenAPI document
	 *
	 * @example "1.0.1"
	 * @example "2.0.0"
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
 * The Contact Object provides contact information for the exposed API. It can
 * include the name, URL, and email address of the contact person or organization.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object | OpenAPI 3.0.4 Contact} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object | OpenAPI 3.0.3 Contact} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object | OpenAPI 3.0.2 Contact} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object | OpenAPI 3.0.1 Contact} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object | OpenAPI 3.0.0 Contact} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Optional The identifying name of the contact person/organization
 * @property `url` - Optional A URL pointing to the contact information
 * @property `email` - Optional The email address of the contact person/organization
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional. In OpenAPI 3.0.1+, the `url` field was clarified to
 * must be in the format of a URL, and the `email` field must be in the format
 * of an email address.
 *
 * -----
 * Examples
 * -----
 *
 * @example (full contact object):
 * ```ts
 * const contact: Contact = {
 *   name: "API Support",
 *   url: "http://www.example.com/support",
 *   email: "support@example.com"
 * };
 * ```
 *
 * @example (just name + email):
 * ```ts
 * const contact: Contact = {
 *   name: "Jane Doe",
 *   email: "jane.doe@example.com"
 * };
 * ```
 *
 * @example (with extension):
 * ```ts
 * const contact: Contact = {
 *   name: "Internal API Team",
 *   email: "api-team@example.com",
 *   "x-slack": "#api-support"
 * };
 * ```
 */
export interface Contact extends Extension {
	/**
	 * The identifying name of the contact person/organization.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - name} |
	 * @property `name` - Optional The identifying name of the contact person/organization
	 *
	 * @example "API Support"
	 * @example "John Doe"
	 */
	name?: string;

	/**
	 * The URL pointing to the contact information. MUST be in the format of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - url} |
	 * @property `url` - Optional A URL pointing to the contact information
	 *
	 * @example "http://www.example.com/support"
	 * @example "https://example.com/contact"
	 */
	url?: string;

	/**
	 * The email address of the contact person/organization. MUST be in the format of an email address.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - email} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - email} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - email} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - email} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#contact-object  | OpenAPI 3.0.4 Contact Object - email} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - email} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - email} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - email} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - email} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#contact-object  | OpenAPI 3.0.3 Contact Object - email} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - email} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - email} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - email} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - email} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#contact-object  | OpenAPI 3.0.2 Contact Object - email} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - email} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - email} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - email} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - email} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#contact-object  | OpenAPI 3.0.1 Contact Object - email} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - email} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - email} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - email} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - email} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#contact-object  | OpenAPI 3.0.0 Contact Object - email} |
	 * @property `email` - Optional The email address of the contact person/organization
	 *
	 * @example "support@example.com"
	 * @example "contact@example.com"
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
 * The License Object provides license information for the exposed API. It can
 * include the name of the license and optionally a URL to the license text.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object | OpenAPI 3.0.4 License} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object | OpenAPI 3.0.3 License} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object | OpenAPI 3.0.2 License} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object | OpenAPI 3.0.1 License} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object | OpenAPI 3.0.0 License} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The license name used for the API
 * @property `url` - Optional A URL to the license used for the API
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` field is required. The `url` field is optional but recommended.
 * In OpenAPI 3.0.1+, the `url` field was clarified to must be in the format
 * of a URL when provided.
 *
 * -----
 * Examples
 * -----
 *
 * @example (MIT License):
 * ```ts
 * const license: License = {
 *   name: "MIT License",
 *   url: "https://opensource.org/license/mit/"
 * };
 * ```
 *
 * @example (Apache 2.0):
 * ```ts
 * const license: License = {
 *   name: "Apache 2.0",
 *   url: "http://www.apache.org/licenses/LICENSE-2.0.html"
 * };
 * ```
 *
 * @example (license without URL):
 * ```ts
 * const license: License = {
 *   name: "Proprietary License"
 * };
 * ```
 *
 * @example (with extension):
 * ```ts
 * const license: License = {
 *   name: "Custom License",
 *   url: "https://example.com/license",
 *   "x-license-version": "1.0"
 * };
 * ```
 */
export interface License extends Extension {
	/**
	 * The license name used for the API. This field is required.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - name} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - name} |
	 * @property `name` - Required The license name used for the API
	 *
	 * @example "MIT License"
	 * @example "Apache 2.0"
	 * @example "Proprietary License"
	 */
	name: LicenseName;

	/**
	 * A URL to the license used for the API. MUST be in the format of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - url} |
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#license-object  | OpenAPI 3.0.4 License Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - url} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#license-object  | OpenAPI 3.0.3 License Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - url} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#license-object  | OpenAPI 3.0.2 License Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - url} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#license-object  | OpenAPI 3.0.1 License Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - url} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#license-object  | OpenAPI 3.0.0 License Object - url} |
	 * @property `url` - Optional A URL to the license used for the API
	 *
	 * @example "https://opensource.org/license/mit/"
	 * @example "http://www.apache.org/licenses/LICENSE-2.0.html"
	 * @example "https://example.com/licenses/proprietary-1.0"
	 */
	url?: LicenseURL;
}
