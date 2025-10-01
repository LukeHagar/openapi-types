import type { Extension } from "./extensions";

/**
 * -----
 * Server Object
 * -----
 *
 * An object representing a Server.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-object | OpenAPI 3.2.0 Server Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `url` - Required A URL to the target host
 * @property `description` - Optional An optional string describing the host designated by the URL
 * @property `variables` - Optional A map between a variable name and its value
 * @property `x-${string}` - Specification Extensions
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
   * A URL to the target host.
   * This URL supports Server Variables and MAY be relative, to indicate that the host
   * location is relative to the location where the OpenAPI document is being served.
   * Variable substitutions will be made when a variable is named in {brackets}.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-object | OpenAPI 3.2.0 Server Object - url} |
   *
   * @property `url` - Required A URL to the target host
   *
   * @example "https://api.example.com/v1"
   */
  url: string;

  /**
   * An optional string describing the host designated by the URL.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-object | OpenAPI 3.2.0 Server Object - description} |
   *
   * @property `description` - Optional An optional string describing the host designated by the URL
   *
   * @example "The production API server"
   */
  description?: string;

  /**
   * A map between a variable name and its value.
   * The value is used for substitution in the server's URL template.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-object | OpenAPI 3.2.0 Server Object - variables} |
   *
   * @property `variables` - Optional A map between a variable name and its value
   *
   * @example { username: { default: "demo" }, port: { default: "8443" } }
   */
  variables?: Record<string, ServerVariable>;
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
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-variable-object | OpenAPI 3.2.0 Server Variable Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `enum` - Optional An enumeration of string values to be used if the substitution options are from a limited set
 * @property `default` - Required The default value to use for substitution
 * @property `description` - Optional An optional description for the server variable
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `default` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple server variable):
 * ```ts
 * const serverVariable: ServerVariable = {
 *   default: "demo"
 * };
 * ```
 *
 * @example (server variable with enum):
 * ```ts
 * const serverVariable: ServerVariable = {
 *   enum: ["8443", "443"],
 *   default: "8443",
 *   description: "The port number"
 * };
 * ```
 */
export interface ServerVariable extends Extension {
  /**
   * An enumeration of string values to be used if the substitution options
   * are from a limited set. The array SHOULD NOT be empty.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-variable-object | OpenAPI 3.2.0 Server Variable Object - enum} |
   *
   * @property `enum` - Optional An enumeration of string values to be used if the substitution options are from a limited set
   *
   * @example ["8443", "443"]
   */
  enum?: string[];

  /**
   * The default value to use for substitution, which SHALL be sent if an
   * alternate value is not supplied. Note this behavior is different than
   * the Schema Object's treatment of default values, because in those cases
   * parameter values are optional.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-variable-object | OpenAPI 3.2.0 Server Variable Object - default} |
   *
   * @property `default` - Required The default value to use for substitution
   *
   * @example "demo"
   */
  default: string;

  /**
   * An optional description for the server variable.
   * CommonMark syntax MAY be used for rich text representation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#server-variable-object | OpenAPI 3.2.0 Server Variable Object - description} |
   *
   * @property `description` - Optional An optional description for the server variable
   *
   * @example "this value is assigned by the service provider"
   */
  description?: string;
}
