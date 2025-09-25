import type { Extension } from "./extensions";

/**
 * Security Scheme Object
 *
 * Defines a security scheme that can be used by the operations. Supported schemes
 * are basic authentication, an API key (either as a header or as a query parameter)
 * and OAuth2's common flows (implicit, password, application and access code).
 *
 * @see https://swagger.io/specification/v2/#security-scheme-object
 * @example
 * ```typescript
 * // API Key authentication
 * const apiKeyScheme: SecurityScheme = {
 *   type: "apiKey",
 *   name: "X-API-Key",
 *   in: "header",
 *   description: "API key for authentication"
 * }
 *
 * // OAuth2 with authorization code flow
 * const oauth2Scheme: SecurityScheme = {
 *   type: "oauth2",
 *   flow: "accessCode",
 *   authorizationUrl: "https://example.com/oauth/authorize",
 *   tokenUrl: "https://example.com/oauth/token",
 *   scopes: {
 *     "read": "Read access to resources",
 *     "write": "Write access to resources"
 *   }
 * }
 *
 * // Basic authentication
 * const basicScheme: SecurityScheme = {
 *   type: "basic",
 *   description: "HTTP Basic Authentication"
 * }
 * ```
 */
export interface SecurityScheme extends Extension {
	/**
	 * The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2".
	 * This field is required.
	 *
	 * - **basic**: Basic HTTP authentication
	 * - **apiKey**: API key authentication (header or query parameter)
	 * - **oauth2**: OAuth 2.0 authentication
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - type}
	 *
	 * @example "apiKey"
	 * @example "oauth2"
	 * @example "basic"
	 */
	type: "basic" | "apiKey" | "oauth2";

	/**
	 * A short description for security scheme. GFM syntax can be used for rich text representation.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - description}
	 *
	 * @example "API key for authentication"
	 * @example "OAuth 2.0 with authorization code flow"
	 */
	description?: string;

	/**
	 * The name of the header or query parameter to be used. This field is required
	 * for apiKey type and applies to apiKey type only.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - name}
	 *
	 * @example "X-API-Key"
	 * @example "Authorization"
	 */
	name?: string;

	/**
	 * The location of the API key. This field is required for apiKey type and
	 * applies to apiKey type only. Valid values are "query" or "header".
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - in}
	 *
	 * @example "header"
	 * @example "query"
	 */
	in?: "query" | "header";

	/**
	 * The flow used by the OAuth2 security scheme. This field is required for
	 * oauth2 type and applies to oauth2 type only. Valid values are "implicit",
	 * "password", "application" or "accessCode".
	 *
	 * - **implicit**: Implicit flow
	 * - **password**: Resource owner password credentials flow
	 * - **application**: Client credentials flow
	 * - **accessCode**: Authorization code flow
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - flow}
	 *
	 * @example "accessCode"
	 * @example "implicit"
	 * @example "password"
	 */
	flow?: "implicit" | "password" | "application" | "accessCode";

	/**
	 * The authorization URL to be used for this flow. This SHOULD be in the form of
	 * a URL. This field is required for oauth2 type and applies to oauth2 type only.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - authorizationUrl}
	 *
	 * @example "https://example.com/oauth/authorize"
	 * @example "https://api.example.com/oauth/authorize"
	 */
	authorizationUrl?: string;

	/**
	 * The token URL to be used for this flow. This SHOULD be in the form of a URL.
	 * This field is required for oauth2 type and applies to oauth2 type only.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - tokenUrl}
	 *
	 * @example "https://example.com/oauth/token"
	 * @example "https://api.example.com/oauth/token"
	 */
	tokenUrl?: string;

	/**
	 * The available scopes for the OAuth2 security scheme. The key is the scope name
	 * and the value is a short description of the scope. This field is required for
	 * oauth2 type and applies to oauth2 type only.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-scheme-object | Swagger 2.0 Specification - scopes}
	 *
	 * @example { "read": "Read access to resources", "write": "Write access to resources" }
	 * @example { "admin": "Administrative access" }
	 */
	scopes?: Scopes;
}

/**
 * Scopes Object
 *
 * Lists the available scopes for an OAuth2 security scheme.
 *
 * @see https://swagger.io/specification/v2/#scopes-object
 * @example
 * ```typescript
 * const scopes: Scopes = {
 *   "write:pets": "modify pets in your account",
 *   "read:pets": "read your pets"
 * }
 * ```
 */
export interface Scopes {
	/**
	 * Maps between a name of a scope to a short description of it (as the value of the property).
	 * The key is the scope name and the value is a short description of the scope.
	 *
	 * @see {@link https://swagger.io/specification/v2/#scopes-object | Swagger 2.0 Specification - scopes}
	 *
	 * @example { "read": "Read access to resources", "write": "Write access to resources" }
	 * @example { "admin": "Administrative access" }
	 */
	[scopeName: string]: string;
}

/**
 * Security Requirement Object
 *
 * Lists the required security schemes to execute this operation. The object can have
 * multiple security schemes declared in it which are all required (that is, there is
 * a logical AND between the schemes). The name used for each property MUST correspond
 * to a security scheme declared in the Security Definitions.
 *
 * @see https://swagger.io/specification/v2/#security-requirement-object
 * @example
 * ```typescript
 * // Non-OAuth2 Security Requirement
 * const nonOAuth2Security: SecurityRequirement = {
 *   "api_key": []
 * }
 *
 * // OAuth2 Security Requirement
 * const oauth2Security: SecurityRequirement = {
 *   "petstore_auth": [
 *     "write:pets",
 *     "read:pets"
 *   ]
 * }
 * ```
 */
export interface SecurityRequirement {
	/**
	 * Each name must correspond to a security scheme which is declared in the Security Definitions.
	 * If the security scheme is of type "oauth2", then the value is a list of scope names
	 * required for the execution. For other security scheme types, the array MUST be empty.
	 *
	 * @see {@link https://swagger.io/specification/v2/#security-requirement-object | Swagger 2.0 Specification - security requirement}
	 *
	 * @example { "api_key": [] }
	 * @example { "oauth2": ["read", "write"] }
	 */
	[schemeName: string]: string[];
}

/**
 * Security Definitions Object
 *
 * A declaration of the security schemes available to be used in the specification.
 * This does not enforce the security schemes on the operations and only serves to
 * provide the relevant details for each scheme.
 *
 * @see https://swagger.io/specification/v2/#security-definitions-object
 * @example
 * ```typescript
 * const securityDefinitions: SecurityDefinitions = {
 *   "api_key": {
 *     "type": "apiKey",
 *     "name": "api_key",
 *     "in": "header"
 *   },
 *   "petstore_auth": {
 *     "type": "oauth2",
 *     "authorizationUrl": "http://swagger.io/api/oauth/dialog",
 *     "flow": "implicit",
 *     "scopes": {
 *       "write:pets": "modify pets in your account",
 *       "read:pets": "read your pets"
 *     }
 *   }
 * }
 * ```
 */
export type SecurityDefinitions = Record<string, SecurityScheme>;
