import type { Extension } from "./extensions";

/**
 * -----
 * Server Object
 * -----
 *
 * An object representing a Server.
 *
 * The Server Object represents a server that hosts the API. It can contain a URL,
 * description, and server variables for URL template substitution.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-object | OpenAPI 3.0.4 Server} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-object | OpenAPI 3.0.3 Server} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-object | OpenAPI 3.0.2 Server} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-object | OpenAPI 3.0.1 Server} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-object | OpenAPI 3.0.0 Server} |
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
 * The `url` field is required. The `url` supports Server Variables and MAY be relative.
 * In OpenAPI 3.0.1+, the `url` field was clarified to support Server Variables and
 * MAY be relative to indicate that the host location is relative to the location
 * where the OpenAPI document is being served.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple server):
 * ```ts
 * const server: Server = {
 *   url: "https://development.gigantic-server.com/v1",
 *   description: "Development server"
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
 *
 * @example (relative server):
 * ```ts
 * const server: Server = {
 *   url: "/v1",
 *   description: "Relative server URL"
 * };
 * ```
 */
export interface Server extends Extension {
  /**
   * A URL to the target host. This URL supports Server Variables and MAY be relative,
   * to indicate that the host location is relative to the location where the OpenAPI
   * document is being served. Variable substitutions will be made when a variable
   * is named in {brackets}.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-object  | OpenAPI 3.0.4 Server Object - url} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-object  | OpenAPI 3.0.3 Server Object - url} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-object  | OpenAPI 3.0.2 Server Object - url} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-object  | OpenAPI 3.0.1 Server Object - url} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-object  | OpenAPI 3.0.0 Server Object - url} |
   * @property `url` - Required A URL to the target host
   *
   * @example "https://api.example.com/v1"
   * @example "https://{username}.example.com:{port}/{basePath}"
   * @example "/v1"
   */
  url: string;

  /**
   * An optional string describing the host designated by the URL.
   * CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-object  | OpenAPI 3.0.4 Server Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-object  | OpenAPI 3.0.3 Server Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-object  | OpenAPI 3.0.2 Server Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-object  | OpenAPI 3.0.1 Server Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-object  | OpenAPI 3.0.0 Server Object - description} |
   * @property `description` - Optional An optional string describing the host designated by the URL
   *
   * @example "Development server"
   * @example "Production server"
   */
  description?: string;

  /**
   * A map between a variable name and its value. The value is used for substitution
   * in the server's URL template.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-object  | OpenAPI 3.0.4 Server Object - variables} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-object  | OpenAPI 3.0.3 Server Object - variables} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-object  | OpenAPI 3.0.2 Server Object - variables} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-object  | OpenAPI 3.0.1 Server Object - variables} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-object  | OpenAPI 3.0.0 Server Object - variables} |
   * @property `variables` - Optional A map between a variable name and its value
   *
   * @example { username: { default: "demo" }, port: { default: "8080" } }
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
 * The Server Variable Object represents a server variable for server URL template
 * substitution. It can contain an enumeration of values, a default value, and
 * a description.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-variable-object | OpenAPI 3.0.4 Server Variable} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-variable-object | OpenAPI 3.0.3 Server Variable} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-variable-object | OpenAPI 3.0.2 Server Variable} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-variable-object | OpenAPI 3.0.1 Server Variable} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-variable-object | OpenAPI 3.0.0 Server Variable} |
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
 * The `default` field is required. Unlike the Schema Object's default, this value MUST be provided by the consumer.
 * In OpenAPI 3.0.1+, the `default` field was clarified to be the default value to use
 * for substitution, and to send, if an alternate value is not supplied.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple variable):
 * ```ts
 * const variable: ServerVariable = {
 *   default: "v2",
 *   description: "API version"
 * };
 * ```
 *
 * @example (variable with enum):
 * ```ts
 * const variable: ServerVariable = {
 *   enum: ["8443", "443"],
 *   default: "8443",
 *   description: "Port number"
 * };
 * ```
 *
 * @example (variable with extension):
 * ```ts
 * const variable: ServerVariable = {
 *   default: "production",
 *   description: "Environment",
 *   "x-environment-type": "production"
 * };
 * ```
 */
export interface ServerVariable extends Extension {
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-variable-object  | OpenAPI 3.0.4 Server Variable Object - enum} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-variable-object  | OpenAPI 3.0.3 Server Variable Object - enum} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-variable-object  | OpenAPI 3.0.2 Server Variable Object - enum} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-variable-object  | OpenAPI 3.0.1 Server Variable Object - enum} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-variable-object  | OpenAPI 3.0.0 Server Variable Object - enum} |
   * @property `enum` - Optional An enumeration of string values to be used if the substitution options are from a limited set
   *
   * @example ["8443", "443"]
   * @example ["v1", "v2", "v3"]
   */
  enum?: string[];

  /**
   * The default value to use for substitution, and to send, if an alternate value is not supplied.
   * Unlike the Schema Object's default, this value MUST be provided by the consumer.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-variable-object  | OpenAPI 3.0.4 Server Variable Object - default} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-variable-object  | OpenAPI 3.0.3 Server Variable Object - default} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-variable-object  | OpenAPI 3.0.2 Server Variable Object - default} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-variable-object  | OpenAPI 3.0.1 Server Variable Object - default} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-variable-object  | OpenAPI 3.0.0 Server Variable Object - default} |
   * @property `default` - Required The default value to use for substitution
   *
   * @example "demo"
   * @example "8443"
   * @example "v2"
   */
  default: string;

  /**
   * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#server-variable-object  | OpenAPI 3.0.4 Server Variable Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#server-variable-object  | OpenAPI 3.0.3 Server Variable Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#server-variable-object  | OpenAPI 3.0.2 Server Variable Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#server-variable-object  | OpenAPI 3.0.1 Server Variable Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#server-variable-object  | OpenAPI 3.0.0 Server Variable Object - description} |
   * @property `description` - Optional An optional description for the server variable
   *
   * @example "this value is assigned by the service provider"
   * @example "Port number for the server"
   */
  description?: string;
}
