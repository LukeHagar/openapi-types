import type { Extension } from "./extensions";

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
 * @property `type` - Required The type of the security scheme
 * @property `description` - Optional A short description for security scheme
 * @property `name` - Optional The name of the header, query or cookie parameter to be used
 * @property `in` - Optional The location of the API key
 * @property `scheme` - Optional The name of the HTTP Authorization scheme to be used in the Authorization header
 * @property `bearerFormat` - Optional A hint to the client to identify how the bearer token is formatted
 * @property `flows` - Optional An object containing configuration information for the flow types supported
 * @property `openIdConnectUrl` - Optional OpenId Connect URL to discover OAuth2 configuration values
 * @property `x-${string}` - Specification Extensions
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
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - type} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - type} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - type} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - type} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - type} |
	 * @property `type` - Required The type of the security scheme
	 *
	 * @example "apiKey"
	 * @example "http"
	 * @example "oauth2"
	 * @example "openIdConnect"
	 */
	type: "apiKey" | "http" | "oauth2" | "openIdConnect";

	/**
	 * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - description} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - description} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - description} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - description} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - description} |
	 * @property `description` - Optional A short description for security scheme
	 *
	 * @example "API key authentication"
	 * @example "OAuth 2.0 authentication"
	 */
	description?: string;

	/**
	 * The name of the header, query or cookie parameter to be used.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - name} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - name} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - name} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - name} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - name} |
	 * @property `name` - Optional The name of the header, query or cookie parameter to be used
	 *
	 * @example "X-API-Key"
	 * @example "Authorization"
	 */
	name?: string;

	/**
	 * The location of the API key. Valid values are "query", "header" or "cookie".
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - in} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - in} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - in} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - in} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - in} |
	 * @property `in` - Optional The location of the API key
	 *
	 * @example "query"
	 * @example "header"
	 * @example "cookie"
	 */
	in?: "query" | "header" | "cookie";

	/**
	 * The name of the HTTP Authorization scheme to be used in the Authorization header.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - scheme} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - scheme} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - scheme} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - scheme} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - scheme} |
	 * @property `scheme` - Optional The name of the HTTP Authorization scheme to be used in the Authorization header
	 *
	 * @example "bearer"
	 * @example "basic"
	 */
	scheme?: string;

	/**
	 * A hint to the client to identify how the bearer token is formatted.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - bearerFormat} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - bearerFormat} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - bearerFormat} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - bearerFormat} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - bearerFormat} |
	 * @property `bearerFormat` - Optional A hint to the client to identify how the bearer token is formatted
	 *
	 * @example "JWT"
	 * @example "Bearer"
	 */
	bearerFormat?: string;

	/**
	 * An object containing configuration information for the flow types supported.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - flows} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - flows} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - flows} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - flows} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - flows} |
	 * @property `flows` - Optional An object containing configuration information for the flow types supported
	 *
	 * @example { authorizationCode: { authorizationUrl: "https://example.com/oauth/authorize", tokenUrl: "https://example.com/oauth/token" } }
	 */
	flows?: OAuthFlows;

	/**
	 * OpenId Connect URL to discover OAuth2 configuration values.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-scheme-object  | OpenAPI 3.0.4 Security Scheme Object - openIdConnectUrl} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-scheme-object  | OpenAPI 3.0.3 Security Scheme Object - openIdConnectUrl} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-scheme-object  | OpenAPI 3.0.2 Security Scheme Object - openIdConnectUrl} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-scheme-object  | OpenAPI 3.0.1 Security Scheme Object - openIdConnectUrl} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-scheme-object  | OpenAPI 3.0.0 Security Scheme Object - openIdConnectUrl} |
	 * @property `openIdConnectUrl` - Optional OpenId Connect URL to discover OAuth2 configuration values
	 *
	 * @example "https://example.com/.well-known/openid_configuration"
	 */
	openIdConnectUrl?: string;
}

/**
 * -----
 * OAuth Flows Object
 * -----
 *
 * Allows configuration of the supported OAuth Flows.
 *
 * The OAuth Flows Object allows configuration of the supported OAuth Flows. Each property
 * represents a specific OAuth flow type and contains configuration details for that flow.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flows-object | OpenAPI 3.0.4 OAuth Flows} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flows-object | OpenAPI 3.0.3 OAuth Flows} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flows-object | OpenAPI 3.0.2 OAuth Flows} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flows-object | OpenAPI 3.0.1 OAuth Flows} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flows-object | OpenAPI 3.0.0 OAuth Flows} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `implicit` - Optional Configuration for the OAuth Implicit flow
 * @property `password` - Optional Configuration for the OAuth Resource Owner Password flow
 * @property `clientCredentials` - Optional Configuration for the OAuth Client Credentials flow
 * @property `authorizationCode` - Optional Configuration for the OAuth Authorization Code flow
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All OAuth flow configurations are optional. At least one flow type should be provided
 * for a complete OAuth2 security scheme configuration.
 *
 * -----
 * Examples
 * -----
 *
 * @example (authorization code flow):
 * ```ts
 * const flows: OAuthFlows = {
 *   authorizationCode: {
 *     authorizationUrl: "https://example.com/oauth/authorize",
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "read": "Read access to resources",
 *       "write": "Write access to resources"
 *     }
 *   }
 * };
 * ```
 *
 * @example (multiple flows):
 * ```ts
 * const flows: OAuthFlows = {
 *   implicit: {
 *     authorizationUrl: "https://example.com/oauth/authorize",
 *     scopes: {
 *       "read": "Read access"
 *     }
 *   },
 *   clientCredentials: {
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "admin": "Administrative access"
 *     }
 *   }
 * };
 * ```
 */
export interface OAuthFlows extends Extension {
	/**
	 * Configuration for the OAuth Implicit flow.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flows-object  | OpenAPI 3.0.4 OAuth Flows Object - implicit} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flows-object  | OpenAPI 3.0.3 OAuth Flows Object - implicit} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flows-object  | OpenAPI 3.0.2 OAuth Flows Object - implicit} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flows-object  | OpenAPI 3.0.1 OAuth Flows Object - implicit} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flows-object  | OpenAPI 3.0.0 OAuth Flows Object - implicit} |
	 * @property `implicit` - Optional Configuration for the OAuth Implicit flow
	 *
	 * @example { authorizationUrl: "https://example.com/oauth/authorize", scopes: { read: "Read access" } }
	 */
	implicit?: OAuthFlow;

	/**
	 * Configuration for the OAuth Resource Owner Password flow.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flows-object  | OpenAPI 3.0.4 OAuth Flows Object - password} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flows-object  | OpenAPI 3.0.3 OAuth Flows Object - password} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flows-object  | OpenAPI 3.0.2 OAuth Flows Object - password} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flows-object  | OpenAPI 3.0.1 OAuth Flows Object - password} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flows-object  | OpenAPI 3.0.0 OAuth Flows Object - password} |
	 * @property `password` - Optional Configuration for the OAuth Resource Owner Password flow
	 *
	 * @example { tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
	 */
	password?: OAuthFlow;

	/**
	 * Configuration for the OAuth Client Credentials flow.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flows-object  | OpenAPI 3.0.4 OAuth Flows Object - clientCredentials} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flows-object  | OpenAPI 3.0.3 OAuth Flows Object - clientCredentials} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flows-object  | OpenAPI 3.0.2 OAuth Flows Object - clientCredentials} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flows-object  | OpenAPI 3.0.1 OAuth Flows Object - clientCredentials} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flows-object  | OpenAPI 3.0.0 OAuth Flows Object - clientCredentials} |
	 * @property `clientCredentials` - Optional Configuration for the OAuth Client Credentials flow
	 *
	 * @example { tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
	 */
	clientCredentials?: OAuthFlow;

	/**
	 * Configuration for the OAuth Authorization Code flow.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flows-object  | OpenAPI 3.0.4 OAuth Flows Object - authorizationCode} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flows-object  | OpenAPI 3.0.3 OAuth Flows Object - authorizationCode} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flows-object  | OpenAPI 3.0.2 OAuth Flows Object - authorizationCode} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flows-object  | OpenAPI 3.0.1 OAuth Flows Object - authorizationCode} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flows-object  | OpenAPI 3.0.0 OAuth Flows Object - authorizationCode} |
	 * @property `authorizationCode` - Optional Configuration for the OAuth Authorization Code flow
	 *
	 * @example { authorizationUrl: "https://example.com/oauth/authorize", tokenUrl: "https://example.com/oauth/token", scopes: { read: "Read access" } }
	 */
	authorizationCode?: OAuthFlow;
}

/**
 * -----
 * OAuth Flow Object
 * -----
 *
 * Configuration details for a supported OAuth Flow.
 *
 * The OAuth Flow Object contains configuration details for a specific OAuth flow.
 * Different OAuth flows require different combinations of URLs and parameters.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flow-object | OpenAPI 3.0.4 OAuth Flow} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flow-object | OpenAPI 3.0.3 OAuth Flow} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flow-object | OpenAPI 3.0.2 OAuth Flow} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flow-object | OpenAPI 3.0.1 OAuth Flow} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flow-object | OpenAPI 3.0.0 OAuth Flow} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `authorizationUrl` - Optional The authorization URL to be used for this flow
 * @property `tokenUrl` - Optional The token URL to be used for this flow
 * @property `refreshUrl` - Optional The URL to be used for obtaining refresh tokens
 * @property `scopes` - Required The available scopes for the OAuth2 security scheme
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `scopes` field is required for all OAuth flows. The `authorizationUrl` is required for
 * `implicit` and `authorizationCode` flows. The `tokenUrl` is required for `password`,
 * `clientCredentials`, and `authorizationCode` flows.
 *
 * -----
 * Examples
 * -----
 *
 * @example (authorization code flow):
 * ```ts
 * const flow: OAuthFlow = {
 *   authorizationUrl: "https://example.com/oauth/authorize",
 *   tokenUrl: "https://example.com/oauth/token",
 *   scopes: {
 *     "read": "Read access to resources",
 *     "write": "Write access to resources"
 *   }
 * };
 * ```
 *
 * @example (implicit flow):
 * ```ts
 * const flow: OAuthFlow = {
 *   authorizationUrl: "https://example.com/oauth/authorize",
 *   scopes: {
 *     "read": "Read access",
 *     "write": "Write access"
 *   }
 * };
 * ```
 *
 * @example (client credentials flow):
 * ```ts
 * const flow: OAuthFlow = {
 *   tokenUrl: "https://example.com/oauth/token",
 *   scopes: {
 *     "admin": "Administrative access"
 *   }
 * };
 * ```
 */
export interface OAuthFlow extends Extension {
	/**
	 * The authorization URL to be used for this flow. This MUST be in the form of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flow-object  | OpenAPI 3.0.4 OAuth Flow Object - authorizationUrl} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flow-object  | OpenAPI 3.0.3 OAuth Flow Object - authorizationUrl} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flow-object  | OpenAPI 3.0.2 OAuth Flow Object - authorizationUrl} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flow-object  | OpenAPI 3.0.1 OAuth Flow Object - authorizationUrl} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flow-object  | OpenAPI 3.0.0 OAuth Flow Object - authorizationUrl} |
	 * @property `authorizationUrl` - Optional The authorization URL to be used for this flow
	 *
	 * @example "https://example.com/oauth/authorize"
	 * @example "https://api.example.com/oauth/authorize"
	 */
	authorizationUrl?: string;

	/**
	 * The token URL to be used for this flow. This MUST be in the form of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flow-object  | OpenAPI 3.0.4 OAuth Flow Object - tokenUrl} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flow-object  | OpenAPI 3.0.3 OAuth Flow Object - tokenUrl} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flow-object  | OpenAPI 3.0.2 OAuth Flow Object - tokenUrl} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flow-object  | OpenAPI 3.0.1 OAuth Flow Object - tokenUrl} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flow-object  | OpenAPI 3.0.0 OAuth Flow Object - tokenUrl} |
	 * @property `tokenUrl` - Optional The token URL to be used for this flow
	 *
	 * @example "https://example.com/oauth/token"
	 * @example "https://api.example.com/oauth/token"
	 */
	tokenUrl?: string;

	/**
	 * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flow-object  | OpenAPI 3.0.4 OAuth Flow Object - refreshUrl} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flow-object  | OpenAPI 3.0.3 OAuth Flow Object - refreshUrl} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flow-object  | OpenAPI 3.0.2 OAuth Flow Object - refreshUrl} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flow-object  | OpenAPI 3.0.1 OAuth Flow Object - refreshUrl} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flow-object  | OpenAPI 3.0.0 OAuth Flow Object - refreshUrl} |
	 * @property `refreshUrl` - Optional The URL to be used for obtaining refresh tokens
	 *
	 * @example "https://example.com/oauth/refresh"
	 * @example "https://api.example.com/oauth/refresh"
	 */
	refreshUrl?: string;

	/**
	 * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
	 * *
	 * | Version | Reference |
	 * |---|-----|
	 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#oauth-flow-object  | OpenAPI 3.0.4 OAuth Flow Object - scopes} |
	 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#oauth-flow-object  | OpenAPI 3.0.3 OAuth Flow Object - scopes} |
	 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#oauth-flow-object  | OpenAPI 3.0.2 OAuth Flow Object - scopes} |
	 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#oauth-flow-object  | OpenAPI 3.0.1 OAuth Flow Object - scopes} |
	 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#oauth-flow-object  | OpenAPI 3.0.0 OAuth Flow Object - scopes} |
	 * @property `scopes` - Required The available scopes for the OAuth2 security scheme
	 *
	 * @example { "read": "Read access", "write": "Write access" }
	 * @example { "admin": "Administrative access" }
	 */
	scopes: Record<string, string>;
}

/**
 * -----
 * Security Requirement Object
 * -----
 *
 * Lists the required security schemes to execute this operation.
 *
 * The Security Requirement Object lists the required security schemes to execute
 * this operation. The name used for each property MUST correspond to a security
 * scheme declared in the Security Schemes under the Components Object.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#security-requirement-object | OpenAPI 3.0.4 Security Requirement} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#security-requirement-object | OpenAPI 3.0.3 Security Requirement} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#security-requirement-object | OpenAPI 3.0.2 Security Requirement} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#security-requirement-object | OpenAPI 3.0.1 Security Requirement} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#security-requirement-object | OpenAPI 3.0.0 Security Requirement} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `{name}` - Each name MUST correspond to a security scheme declared in the Security Schemes
 *
 * @note
 * Security Requirement Objects that contain multiple schemes require that all schemes
 * MUST be satisfied for a request to be authorized. When a list of Security Requirement
 * Objects is defined, only one of the Security Requirement Objects in the list needs to
 * be satisfied to authorize the request.
 *
 * If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list
 * of scope names required for the execution. For other security scheme types, the array
 * MUST be empty.
 *
 * -----
 * Examples
 * -----
 *
 * @example (API key security):
 * ```ts
 * const requirement: SecurityRequirement = {
 *   "api_key": []
 * };
 * ```
 *
 * @example (OAuth2 security with scopes):
 * ```ts
 * const requirement: SecurityRequirement = {
 *   "petstore_auth": [
 *     "write:pets",
 *     "read:pets"
 *   ]
 * };
 * ```
 *
 * @example (multiple schemes required):
 * ```ts
 * const requirement: SecurityRequirement = {
 *   "api_key": [],
 *   "oauth2": ["read", "write"]
 * };
 * ```
 */
export interface SecurityRequirement {
	[schemeName: string]: string[];
}
