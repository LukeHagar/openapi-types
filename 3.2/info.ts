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
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object} |
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
   * The title of the API.
   * This field is required and should be descriptive of the API.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - title} |
   *
   * @property `title` - Required The title of the API
   *
   * @example "Pet Store API"
   */
  title: string;

  /**
   * A short summary of the API.
   * This should be a brief description of what the API does.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - summary} |
   *
   * @property `summary` - Optional A short summary of the API
   *
   * @example "A sample API that uses a petstore as an example"
   */
  summary?: string;

  /**
   * A description of the API.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - description} |
   *
   * @property `description` - Optional A description of the API
   *
   * @example "This is a sample server Petstore server."
   */
  description?: string;

  /**
   * A URL to the Terms of Service for the API.
   * This MUST be in the format of a URL.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - termsOfService} |
   *
   * @property `termsOfService` - Optional A URL to the Terms of Service for the API
   *
   * @example "http://example.com/terms/"
   */
  termsOfService?: string;

  /**
   * The contact information for the exposed API.
   * This object contains contact details for the API.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - contact} |
   *
   * @property `contact` - Optional The contact information for the exposed API
   *
   * @example { name: "API Support", email: "support@example.com" }
   */
  contact?: Contact;

  /**
   * The license information for the exposed API.
   * This object contains license details for the API.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - license} |
   *
   * @property `license` - Optional The license information for the exposed API
   *
   * @example { name: "Apache 2.0", url: "https://www.apache.org/licenses/LICENSE-2.0.html" }
   */
  license?: License;

  /**
   * The version of the OpenAPI document.
   * This field is required and should follow semantic versioning.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#info-object | OpenAPI 3.2.0 Info Object - version} |
   *
   * @property `version` - Required The version of the OpenAPI document
   *
   * @example "1.0.0"
   */
  version: string;
}

/**
 * -----
 * Contact Object
 * -----
 *
 * The Contact Object provides contact information for the exposed API.
 * It appears in the OpenAPI and Swagger specifications from v2.0 through v3.2.x.
 *
 * Specification Extensions (`x-*`) are always allowed.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#contact-object | OpenAPI 3.2.0 Contact} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Optional The identifying name of the contact person/organization.
 * @property `url` - Optional A URL pointing to the contact information.
 * @property `email` - Optional The email address of the contact person/organization.
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All fields are optional.
 *
 * -----
 * Examples
 * -----
 *
 * @example (full contact object):
 * ```ts
 * const contact: Contact = {
 *   name: "API Support",
 *   url: "http://www.acme.com/support",
 *   email: "support@acme.com"
 * };
 * ```
 *
 * @example (just name + email):
 * ```ts
 * const contact: Contact = {
 *   name: "Jane Doe",
 *   email: "jane.doe@acme.com"
 * };
 * ```
 *
 * @example (with extension):
 * ```ts
 * const contact: Contact = {
 *   name: "Internal API Team",
 *   email: "api-team@acme.com",
 *   "x-slack": "#api-support"
 * };
 * ```
 */
export interface Contact extends Extension {
  /**
   * The identifying name of the contact person/organization.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#contact-object | OpenAPI 3.2.0 Contact Object - name} |
   *
   * @property `name` - Optional The identifying name of the contact person/organization
   *
   * @example "API Support"
   * @example "John Doe"
   */
  name?: string;

  /**
   * The URL pointing to the contact information.
   * MUST be in the format of a URL.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#contact-object | OpenAPI 3.2.0 Contact Object - url} |
   *
   * @property `url` - Optional A URL pointing to the contact information
   *
   * @example "http://www.acme.com/support"
   * @example "https://example.com/contact"
   */
  url?: string;

  /**
   * The email address of the contact person/organization.
   * MUST be in the format of an email address.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#contact-object | OpenAPI 3.2.0 Contact Object - email} |
   *
   * @property `email` - Optional The email address of the contact person/organization
   *
   * @example "support@acme.com"
   * @example "contact@example.com"
   */
  email?: string;
}

/**
 * -----
 * License Object
 * -----
 *
 * The License Object provides license information for the exposed API.
 * It appears in the OpenAPI and Swagger specifications from v2.0 through v3.2.x.
 *
 * Specification Extensions (`x-*`) are always allowed.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#license-object | OpenAPI 3.2.0 License} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The license name used for the API.
 * @property `url` - Optional A URL to the license used for the API.
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (license with name only):
 * ```ts
 * const license: License = {
 *   name: "Apache 2.0"
 * };
 * ```
 *
 * @example (license with name and URL):
 * ```ts
 * const license: License = {
 *   name: "Apache 2.0",
 *   url: "https://www.apache.org/licenses/LICENSE-2.0.html"
 * };
 * ```
 *
 * @example (license with extension):
 * ```ts
 * const license: License = {
 *   name: "MIT",
 *   url: "https://opensource.org/licenses/MIT",
 *   "x-spdx-id": "MIT"
 * };
 * ```
 */
export interface License extends Extension {
  /**
   * The license name used for the API.
   * This field is required.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#license-object | OpenAPI 3.2.0 License Object - name} |
   *
   * @property `name` - Required The license name used for the API
   *
   * @example "Apache 2.0"
   * @example "MIT"
   * @example "Proprietary License"
   */
  name: string;

  /**
   * A URL to the license used for the API.
   * MUST be in the format of a URL.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#license-object | OpenAPI 3.2.0 License Object - url} |
   *
   * @property `url` - Optional A URL to the license used for the API
   *
   * @example "https://www.apache.org/licenses/LICENSE-2.0.html"
   * @example "https://opensource.org/licenses/MIT"
   * @example "https://example.com/licenses/proprietary-1.0"
   */
  url?: string;
}
