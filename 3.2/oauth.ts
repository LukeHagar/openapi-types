import type { Extension } from "./extensions";

/**
 * -----
 * OAuth Flow Object
 * -----
 *
 * Configuration details for a supported OAuth Flow.
 * This object describes the OAuth flow configuration for a specific OAuth flow type.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#oauth-flow-object | OpenAPI 3.2.0 OAuth Flow Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `authorizationUrl` - Optional The authorization URL to be used for this flow
 * @property `tokenUrl` - Optional The token URL to be used for this flow
 * @property `refreshUrl` - Optional The URL to be used for obtaining refresh tokens
 * @property `scopes` - Required A map between the scope name and a short description
 * @property `oauth2MetadataUrl` - Optional The URL to be used for OAuth 2.0 metadata
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `scopes` field is required and must contain at least one scope.
 * The `authorizationUrl` and `tokenUrl` fields are required for certain flow types.
 *
 * -----
 * Examples
 * -----
 *
 * @example (authorization code flow):
 * ```ts
 * const oauthFlow: OAuthFlow = {
 *   authorizationUrl: "https://example.com/oauth/authorize",
 *   tokenUrl: "https://example.com/oauth/token",
 *   scopes: {
 *     "read": "Read access to user data",
 *     "write": "Write access to user data"
 *   }
 * };
 * ```
 *
 * @example (client credentials flow):
 * ```ts
 * const oauthFlow: OAuthFlow = {
 *   tokenUrl: "https://example.com/oauth/token",
 *   scopes: {
 *     "api": "Full API access"
 *   }
 * };
 * ```
 *
 * @example (implicit flow):
 * ```ts
 * const oauthFlow: OAuthFlow = {
 *   authorizationUrl: "https://example.com/oauth/authorize",
 *   scopes: {
 *     "read": "Read access to user data"
 *   }
 * };
 * ```
 */
export interface OAuthFlow extends Extension {
  /**
   * The authorization URL to be used for this flow.
   * This MUST be in the form of a URL.
   *
   * Example: `"https://example.com/oauth/authorize"`
   */
  authorizationUrl?: string;

  /**
   * The token URL to be used for this flow.
   * This MUST be in the form of a URL.
   *
   * Example: `"https://example.com/oauth/token"`
   */
  tokenUrl?: string;

  /**
   * The URL to be used for obtaining refresh tokens.
   * This MUST be in the form of a URL.
   *
   * Example: `"https://example.com/oauth/refresh"`
   */
  refreshUrl?: string;

  /**
   * A map between the scope name and a short description for it.
   * The map MAY be empty.
   *
   * Example: `{ "read": "Read access to user data", "write": "Write access to user data" }`
   */
  scopes: Record<string, string>;

  /**
   * The URL to be used for OAuth 2.0 metadata.
   * This MUST be in the form of a URL.
   *
   * Example: `"https://example.com/.well-known/oauth-authorization-server"`
   */
  oauth2MetadataUrl?: string;
}

/**
 * -----
 * OAuth Flows Object
 * -----
 *
 * Allows configuration of the supported OAuth Flows.
 * This object describes the OAuth flows that are available for this API.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#oauth-flows-object | OpenAPI 3.2.0 OAuth Flows Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `implicit` - Optional Configuration for the OAuth Implicit flow
 * @property `password` - Optional Configuration for the OAuth Resource Owner Password flow
 * @property `clientCredentials` - Optional Configuration for the OAuth Client Credentials flow
 * @property `authorizationCode` - Optional Configuration for the OAuth Authorization Code flow
 * @property `deviceAuthorization` - Optional Configuration for the OAuth Device Authorization flow
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * At least one flow must be specified. The flows are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (authorization code flow):
 * ```ts
 * const oauthFlows: OAuthFlows = {
 *   authorizationCode: {
 *     authorizationUrl: "https://example.com/oauth/authorize",
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "read": "Read access to user data",
 *       "write": "Write access to user data"
 *     }
 *   }
 * };
 * ```
 *
 * @example (client credentials flow):
 * ```ts
 * const oauthFlows: OAuthFlows = {
 *   clientCredentials: {
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "api": "Full API access"
 *     }
 *   }
 * };
 * ```
 *
 * @example (multiple flows):
 * ```ts
 * const oauthFlows: OAuthFlows = {
 *   authorizationCode: {
 *     authorizationUrl: "https://example.com/oauth/authorize",
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "read": "Read access to user data"
 *     }
 *   },
 *   clientCredentials: {
 *     tokenUrl: "https://example.com/oauth/token",
 *     scopes: {
 *       "api": "Full API access"
 *     }
 *   }
 * };
 * ```
 */
export interface OAuthFlows extends Extension {
  /**
   * Configuration for the OAuth Implicit flow.
   * This flow is deprecated in OAuth 2.1.
   *
   * Example: `{ authorizationUrl: "https://example.com/oauth/authorize", scopes: { "read": "Read access" } }`
   */
  implicit?: OAuthFlow;

  /**
   * Configuration for the OAuth Resource Owner Password flow.
   * This flow is deprecated in OAuth 2.1.
   *
   * Example: `{ tokenUrl: "https://example.com/oauth/token", scopes: { "read": "Read access" } }`
   */
  password?: OAuthFlow;

  /**
   * Configuration for the OAuth Client Credentials flow.
   * This flow is suitable for machine-to-machine authentication.
   *
   * Example: `{ tokenUrl: "https://example.com/oauth/token", scopes: { "api": "Full API access" } }`
   */
  clientCredentials?: OAuthFlow;

  /**
   * Configuration for the OAuth Authorization Code flow.
   * This is the recommended flow for web applications.
   *
   * Example: `{ authorizationUrl: "https://example.com/oauth/authorize", tokenUrl: "https://example.com/oauth/token", scopes: { "read": "Read access" } }`
   */
  authorizationCode?: OAuthFlow;

  /**
   * Configuration for the OAuth Device Authorization flow.
   * This flow is suitable for devices with limited input capabilities.
   *
   * Example: `{ deviceCodeUrl: "https://example.com/oauth/device", tokenUrl: "https://example.com/oauth/token", scopes: { "read": "Read access" } }`
   */
  deviceAuthorization?: OAuthFlow;
}
