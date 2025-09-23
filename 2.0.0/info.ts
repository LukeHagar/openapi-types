import type { Extension } from "./extensions"
import type { ExternalDocumentation } from "./externalDocs"

/**
 * Info Object
 *
 * The object provides metadata about the API. The metadata can be used by the clients
 * if needed, and can be presented in the Swagger-UI for convenience.
 *
 * @see https://swagger.io/specification/v2/#info-object
 * @example
 * ```typescript
 * const info: Info = {
 *   title: "Swagger Sample App",
 *   description: "This is a sample server Petstore server.",
 *   termsOfService: "http://swagger.io/terms/",
 *   contact: {
 *     name: "API Support",
 *     url: "http://www.swagger.io/support",
 *     email: "support@swagger.io"
 *   },
 *   license: {
 *     name: "Apache 2.0",
 *     url: "http://www.apache.org/licenses/LICENSE-2.0.html"
 *   },
 *   version: "1.0.1"
 * }
 * ```
 */
export interface Info extends Extension {
  /** 
   * The title of the application. This field is required.
   * 
   * @example "Swagger Sample App"
   * @example "My API"
   */
  title: string
  
  /** 
   * A short description of the application. GFM syntax can be used for rich text representation.
   * 
   * @example "This is a sample server Petstore server."
   * @example "A comprehensive API for managing user data"
   */
  description?: string
  
  /** 
   * The Terms of Service for the API.
   * 
   * @example "http://swagger.io/terms/"
   * @example "https://example.com/terms"
   */
  termsOfService?: string
  
  /** 
   * The contact information for the exposed API.
   * 
   * @example { name: "API Support", email: "support@example.com" }
   */
  contact?: Contact
  
  /** 
   * The license information for the exposed API.
   * 
   * @example { name: "Apache 2.0", url: "http://www.apache.org/licenses/LICENSE-2.0.html" }
   */
  license?: License
  
  /** 
   * Provides the version of the application API (not to be confused with the specification version).
   * This field is required.
   * 
   * @example "1.0.1"
   * @example "2.0.0"
   */
  version: string
}

/**
 * Contact Object
 *
 * Contact information for the exposed API.
 *
 * @see https://swagger.io/specification/v2/#contact-object
 * @example
 * ```typescript
 * const contact: Contact = {
 *   name: "API Support",
 *   url: "http://www.swagger.io/support",
 *   email: "support@swagger.io"
 * }
 * ```
 */
export interface Contact extends Extension {
  /** 
   * The identifying name of the contact person/organization.
   * 
   * @example "API Support"
   * @example "John Doe"
   */
  name?: string
  
  /** 
   * The URL pointing to the contact information. MUST be in the format of a URL.
   * 
   * @example "http://www.swagger.io/support"
   * @example "https://example.com/contact"
   */
  url?: string
  
  /** 
   * The email address of the contact person/organization. MUST be in the format of an email address.
   * 
   * @example "support@swagger.io"
   * @example "contact@example.com"
   */
  email?: string
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
 * | 2.0     | {@link https://swagger.io/specification/v2/#license-object | Swagger 2.0 License} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `name` - Required The license name used for the API
 * @key `url` - Optional A URL to the license used for the API
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` field is required. The `url` field is optional but recommended.
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
 *   name: "Apache License 2.0",
 *   url: "https://www.apache.org/licenses/LICENSE-2.0"
 * };
 * ```
 *
 * @example (custom license):
 * ```ts
 * const license: License = {
 *   name: "Proprietary Foo License",
 *   url: "https://example.com/licenses/foo-1.0"
 * };
 * ```
 *
 * @example (license without URL):
 * ```ts
 * const license: License = {
 *   name: "Custom License"
 * };
 * ```
 *
 * @example (license with extensions):
 * ```ts
 * const license: License = {
 *   name: "MIT License",
 *   url: "https://opensource.org/license/mit/",
 *   "x-custom": "value",
 *   "x-internal": true
 * };
 * ```
 */
export interface License extends Extension {
  /** 
   * The license name used for the API. This field is required.
   * 
   * @example "MIT License"
   * @example "Apache License 2.0"
   * @example "Proprietary Foo License"
   */
  name: string
  
  /** 
   * A URL to the license used for the API. MUST be in the format of a URL.
   * 
   * @example "https://opensource.org/license/mit/"
   * @example "https://www.apache.org/licenses/LICENSE-2.0"
   * @example "https://example.com/licenses/foo-1.0"
   */
  url?: string
}