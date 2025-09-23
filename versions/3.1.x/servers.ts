import type { Extension } from "./extensions"

/**
 * -----
 * Server Object
 * -----
 *
 * An object representing a Server.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#server-object | OpenAPI 3.1.1 Server Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#server-object | OpenAPI 3.1.0 Server Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `url` - Required A URL to the target host
 * @key `description` - Optional An optional string describing the host designated by the URL
 * @key `variables` - Optional A map between a variable name and its value
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `url` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple server):
 * ```ts
 * const server: Server = {
 *   url: "https://api.example.com/v1"
 * };
 * ```
 *
 * @example (server with variables):
 * ```ts
 * const server: Server = {
 *   url: "https://{username}.gigantic-server.com:{port}/{basePath}",
 *   description: "The production API server",
 *   variables: {
 *     username: {
 *       default: "demo",
 *       description: "this value is assigned by the service provider"
 *     },
 *     port: {
 *       enum: ["8443", "443"],
 *       default: "8443"
 *     },
 *     basePath: {
 *       default: "v2"
 *     }
 *   }
 * };
 * ```
 */
export interface Server extends Extension {
  /**
   * A URL to the target host. This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI
   * document is being served. Variable substitutions will be made when a variable
   * is named in `{brackets}`.
   *
   * @example "https://api.example.com/v1"
   * @example "https://{username}.gigantic-server.com:{port}/{basePath}"
   * @example "/v1"
   */
  url: string

  /**
   * An optional string describing the host designated by the URL. CommonMark syntax
   * MAY be used for rich text representation.
   *
   * @example "The production API server"
   * @example "The staging API server"
   */
  description?: string

  /**
   * A map between a variable name and its value. The value is used for substitution
   * in the server's URL template.
   *
   * @example { username: { default: "demo" }, port: { default: "8443" } }
   */
  variables?: Record<string, ServerVariable>
}

/**
 * -----
 * Server Variable Object
 * -----
 *
 * An object representing a Server Variable for server URL template substitution.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#server-variable-object | OpenAPI 3.1.1 Server Variable Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#server-variable-object | OpenAPI 3.1.0 Server Variable Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `enum` - Optional An enumeration of string values to be used if the substitution options are from a limited set
 * @key `default` - Required The default value to use for substitution
 * @key `description` - Optional An optional description for the server variable
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `default` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple variable):
 * ```ts
 * const variable: ServerVariable = {
 *   default: "demo"
 * };
 * ```
 *
 * @example (variable with enum):
 * ```ts
 * const variable: ServerVariable = {
 *   enum: ["8443", "443"],
 *   default: "8443",
 *   description: "The port number"
 * };
 * ```
 */
export interface ServerVariable extends Extension {
  /**
   * An enumeration of string values to be used if the substitution options are
   * from a limited set. The array SHOULD NOT be empty.
   *
   * @example ["8443", "443"]
   * @example ["v1", "v2", "v3"]
   */
  enum?: string[]

  /**
   * The default value to use for substitution, which SHALL be sent if an alternate
   * value is not supplied. Note this behavior is different than the Schema Object's
   * treatment of default values, because in those cases parameter values are optional.
   * If the enum is defined, the value SHOULD exist in the enum's values.
   *
   * @example "demo"
   * @example "8443"
   * @example "v1"
   */
  default: string

  /**
   * An optional description for the server variable. CommonMark syntax MAY be used
   * for rich text representation.
   *
   * @example "this value is assigned by the service provider"
   * @example "The port number"
   */
  description?: string
}
