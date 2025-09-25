/**
 * @fileoverview OpenAPI 3.1.x TypeScript Type Definitions
 *
 * This module provides comprehensive TypeScript type definitions for OpenAPI 3.1.x specifications.
 * All types are fully documented with JSDoc comments and include links to the official OpenAPI
 * specification documentation.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1.html | OpenAPI 3.1.1 Specification}
 * @see {@link https://spec.openapis.org/oas/v3.1.0.html | OpenAPI 3.1.0 Specification}
 *
 * @version 3.1.x
 * @since 1.0.0
 */

/**
 * Reusable component types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#components-object | OpenAPI 3.1.1 Components Object}
 */
export type { Components } from "./components";

/**
 * Core extension and reference types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#specification-extensions | OpenAPI 3.1.1 Specification Extensions}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#reference-object | OpenAPI 3.1.1 Reference Object}
 */
export type { Extension } from "./extensions";
export type { ExternalDocumentation } from "./externalDocs";

/**
 * API information and metadata types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#info-object | OpenAPI 3.1.1 Info Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#contact-object | OpenAPI 3.1.1 Contact Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#license-object | OpenAPI 3.1.1 License Object}
 */
export type { Contact, Info, License } from "./info";
/**
 * Path and operation definition types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#paths-object | OpenAPI 3.1.1 Paths Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#path-item-object | OpenAPI 3.1.1 Path Item Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#operation-object | OpenAPI 3.1.1 Operation Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#parameter-object | OpenAPI 3.1.1 Parameter Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#request-body-object | OpenAPI 3.1.1 Request Body Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#responses-object | OpenAPI 3.1.1 Responses Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#response-object | OpenAPI 3.1.1 Response Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#header-object | OpenAPI 3.1.1 Header Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#media-type-object | OpenAPI 3.1.1 Media Type Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#encoding-object | OpenAPI 3.1.1 Encoding Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#example-object | OpenAPI 3.1.1 Example Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#link-object | OpenAPI 3.1.1 Link Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#callback-object | OpenAPI 3.1.1 Callback Object}
 */
export type {
	Callback,
	Encoding,
	Example,
	Header,
	Link,
	MediaType,
	Operation,
	Parameter,
	PathItemObject,
	Paths,
	RequestBody,
	Response,
	Responses,
} from "./paths";
export type { Reference } from "./references";
/**
 * Schema definition types based on JSON Schema Draft 2020-12.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#schema-object | OpenAPI 3.1.1 Schema Object}
 * @see {@link https://json-schema.org/draft/2020-12/json-schema-core.html | JSON Schema Draft 2020-12}
 */
export type {
	ArraySchema,
	BooleanSchema,
	CompositionSchema,
	Discriminator,
	IntegerSchema,
	NumberSchema,
	ObjectSchema,
	ReferenceSchema,
	Schema,
	StringSchema,
} from "./schema";
/**
 * Security scheme and authentication types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#security-scheme-object | OpenAPI 3.1.1 Security Scheme Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#oauth-flows-object | OpenAPI 3.1.1 OAuth Flows Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#oauth-flow-object | OpenAPI 3.1.1 OAuth Flow Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#security-requirement-object | OpenAPI 3.1.1 Security Requirement Object}
 */
export type {
	OAuthFlow,
	OAuthFlows,
	SecurityRequirement,
	SecurityScheme,
} from "./security";
/**
 * Server configuration types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#server-object | OpenAPI 3.1.1 Server Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#server-variable-object | OpenAPI 3.1.1 Server Variable Object}
 */
export type { Server, ServerVariable } from "./servers";
/**
 * Main OpenAPI specification document type.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#oas-document | OpenAPI 3.1.1 OAS Document}
 */
export type { Specification } from "./spec";

/**
 * Utility and metadata types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#tag-object | OpenAPI 3.1.1 Tag Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#external-documentation-object | OpenAPI 3.1.1 External Documentation Object}
 * @see {@link https://spec.openapis.org/oas/v3.1.1#xml-object | OpenAPI 3.1.1 XML Object}
 */
export type { Tag } from "./tags";
/**
 * Webhook definition types.
 *
 * @see {@link https://spec.openapis.org/oas/v3.1.1#webhooks-object | OpenAPI 3.1.1 Webhooks Object}
 */
export type { Webhooks } from "./webhooks";
export type { XML } from "./xml";
