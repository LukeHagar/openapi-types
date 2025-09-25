/**
 * -----
 * Security Requirement Object
 * -----
 *
 * Lists the required security schemes to execute this operation. The name used
 * for each property MUST correspond to a security scheme declared in the
 * Security Schemes under the Components Object.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#security-requirement-object | OpenAPI 3.2.0 Security Requirement Object} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (API key security):
 * ```ts
 * const security: SecurityRequirement[] = [
 *   { "api_key": [] }
 * ];
 * ```
 *
 * @example (OAuth2 security):
 * ```ts
 * const security: SecurityRequirement[] = [
 *   { "oauth2": ["read", "write"] }
 * ];
 * ```
 */
export type SecurityRequirement = Record<string, string[]>;
