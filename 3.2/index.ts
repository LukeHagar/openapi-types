/**
 * @fileoverview OpenAPI 3.2.0 TypeScript Type Definitions
 *
 * This module provides comprehensive TypeScript type definitions for OpenAPI 3.2.0 specifications.
 * All types are fully documented with JSDoc comments and include links to the official OpenAPI
 * specification documentation.
 *
 * @see {@link https://spec.openapis.org/oas/v3.2.0.html | OpenAPI 3.2.0 Specification}
 *
 * @version 3.2.0
 * @since 1.0.0
 */

// Component types
export type { Components } from "./components";
// Re-export data-types for convenience
export type {
	ArraySchema,
	BooleanSchema,
	CompositionSchema,
	IntegerSchema,
	NumberSchema,
	ObjectSchema,
	ReferenceSchema,
	StringSchema,
} from "./data-types";
// Core OpenAPI types
export type { Extension } from "./extensions";
export type { ExternalDocumentation } from "./externalDocs";

// Info and metadata types
export type { Contact, Info, License } from "./info";
export type { OAuthFlow, OAuthFlows } from "./oauth";
// Path types
export type { PathItem, Paths } from "./paths";
export type { Reference } from "./references";
// Schema type
export type { Discriminator, Schema } from "./schema";
// Security types
export type { SecurityRequirement } from "./security";
// Server types
export type { Server, ServerVariable } from "./servers";
// Specification type
export type { Specification } from "./spec";
// Tag types
export type { Tag } from "./tags";
// Webhook types
export type { Webhooks } from "./webhooks";
export type { XML } from "./xml";
