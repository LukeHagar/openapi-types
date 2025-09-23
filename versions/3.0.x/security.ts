import type { Extension } from "./extensions"

/**
 * -----
 * Security Scheme Object
 * -----
 *
 * Defines a security scheme that can be used by the operations.
 * Supported schemes are HTTP authentication, an API key (either as a header or as a query parameter),
 * OAuth2's common flows (implicit, password, application and access code) as defined in RFC6749,
 * and OpenID Connect Discovery.
 *
 * The Security Scheme Object defines a security scheme that can be used by the operations.
 * It supports various authentication methods including HTTP authentication, API keys,
 * OAuth2 flows, and OpenID Connect Discovery.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object | OpenAPI 3.0.4 Security Scheme} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object | OpenAPI 3.0.3 Security Scheme} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object | OpenAPI 3.0.2 Security Scheme} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object | OpenAPI 3.0.1 Security Scheme} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object | OpenAPI 3.0.0 Security Scheme} |
 *
 * -----
 * Fields
 * -----
 *
 * @key `type` - Required The type of the security scheme
 * @key `description` - Optional A short description for security scheme
 * @key `name` - Optional The name of the header, query or cookie parameter to be used
 * @key `in` - Optional The location of the API key
 * @key `scheme` - Optional The name of the HTTP Authorization scheme to be used in the Authorization header
 * @key `bearerFormat` - Optional A hint to the client to identify how the bearer token is formatted
 * @key `flows` - Optional An object containing configuration information for the flow types supported
 * @key `openIdConnectUrl` - Optional OpenId Connect URL to discover OAuth2 configuration values
 * @key `x-${string}` - Specification Extensions
 *
 * @note
 * The `type` field is required. The `name` and `in` fields are required for apiKey type.
 * In OpenAPI 3.0.1+, the `bearerFormat` field was clarified to be a hint to the client
 * about how the bearer token is formatted, and the `openIdConnectUrl` field was clarified
 * to be a URL that can be used to discover OAuth2 configuration values.
 *
 * -----
 * Examples
 * -----
 *
 * @example (API key):
 * ```ts
 * const securityScheme: SecurityScheme = {
 *   type: "apiKey",
 *   in: "header",
 *   name: "X-API-Key"
 * };
 * ```
 *
 * @example (OAuth2):
 * ```ts
 * const securityScheme: SecurityScheme = {
 *   type: "oauth2",
 *   flows: {
 *     authorizationCode: {
 *       authorizationUrl: "https://example.com/oauth/authorize",
 *       tokenUrl: "https://example.com/oauth/token",
 *       scopes: {
 *         "read": "Read access",
 *         "write": "Write access"
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (HTTP Bearer):
 * ```ts
 * const securityScheme: SecurityScheme = {
 *   type: "http",
 *   scheme: "bearer",
 *   bearerFormat: "JWT"
 * };
 * ```
 *
 * @example (OpenID Connect):
 * ```ts
 * const securityScheme: SecurityScheme = {
 *   type: "openIdConnect",
 *   openIdConnectUrl: "https://example.com/.well-known/openid_configuration"
 * };
 * ```
 */
export interface SecurityScheme extends Extension {
  /** 
   * The type of the security scheme. This field is required.
   * 
   * @example "apiKey"
   * @example "http"
   * @example "oauth2"
   * @example "openIdConnect"
   */
  type: "apiKey" | "http" | "oauth2" | "openIdConnect"
  
  /** 
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   * 
   * @example "API key authentication"
   * @example "OAuth 2.0 authentication"
   */
  description?: string
  
  /** 
   * The name of the header, query or cookie parameter to be used.
   * 
   * @example "X-API-Key"
   * @example "Authorization"
   */
  name?: string
  
  /** 
   * The location of the API key. Valid values are "query", "header" or "cookie".
   * 
   * @example "query"
   * @example "header"
   * @example "cookie"
   */
  in?: "query" | "header" | "cookie"
  
  /** 
   * The name of the HTTP Authorization scheme to be used in the Authorization header.
   * 
   * @example "bearer"
   * @example "basic"
   */
  scheme?: string
  
  /** 
   * A hint to the client to identify how the bearer token is formatted.
   * 
   * @example "JWT"
   * @example "Bearer"
   */
  bearerFormat?: string
  
  /** 
   * An object containing configuration information for the flow types supported.
   * 
   * @example { authorizationCode: { authorizationUrl: "https://example.com/oauth/authorize", tokenUrl: "https://example.com/oauth/token" } }
   */
  flows?: OAuthFlows
  
  /** 
   * OpenId Connect URL to discover OAuth2 configuration values.
   * 
   * @example "https://example.com/.well-known/openid_configuration"
   */
  openIdConnectUrl?: string
}

export interface OAuthFlows extends Extension {
  /** 
   * Configuration for the OAuth Implicit flow.
   * 
   * @example { authorizationUrl: "https://example.com/oauth/authorize", scopes: { read: "Read access" } }
   */
  implicit?: OAuthFlow
  
  /** 
   * Configuration for the OAuth Resource Owner Password flow.
   * 
   * @example { tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
   */
  password?: OAuthFlow
  
  /** 
   * Configuration for the OAuth Client Credentials flow.
   * 
   * @example { tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
   */
  clientCredentials?: OAuthFlow
  
  /** 
   * Configuration for the OAuth Authorization Code flow.
   * 
   * @example { authorizationUrl: "https://example.com/oauth/authorize", tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
   */
  authorizationCode?: OAuthFlow
}

export interface OAuthFlow extends Extension {
  /** 
   * The authorization URL to be used for this flow. This MUST be in the form of a URL.
   * 
   * @example "https://example.com/oauth/authorize"
   * @example "https://api.example.com/oauth/authorize"
   */
  authorizationUrl?: string
  
  /** 
   * The token URL to be used for this flow. This MUST be in the form of a URL.
   * 
   * @example "https://example.com/oauth/token"
   * @example "https://api.example.com/oauth/token"
   */
  tokenUrl?: string
  
  /** 
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
   * 
   * @example "https://example.com/oauth/refresh"
   * @example "https://api.example.com/oauth/refresh"
   */
  refreshUrl?: string
  
  /** 
   * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
   * 
   * @example { "read": "Read access", "write": "Write access" }
   * @example { "admin": "Administrative access" }
   */
  scopes?: Record<string, string>
}

export interface SecurityRequirement {
  [schemeName: string]: string[]
}
