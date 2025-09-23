// Centralized exports for OpenAPI 3.0 types
// This file serves as the main entry point for all OpenAPI 3.0 type definitions

// Export the main specification type
export type { Specification } from "./spec"

// Re-export all types for convenience
export type {
  // Core types
  Extension
} from "./extensions"

export type {
  Contact,
  // Info types
  Info, License
} from "./info"

export type {
  // Server types
  Server,
  ServerVariable
} from "./servers"

export type {
  Callback, Encoding, Example, Header, Link, MediaType, Operation,
  Parameter,
  // Path types
  PathItemObject, RequestBody, Response
} from "./paths"

export type {
  // Components types
  Components
} from "./components"

export type {
  Discriminator,
  // Schema types
  Schema
} from "./schema"

export type {
  // XML types
  XML
} from "./xml"

export type {
  OAuthFlow, OAuthFlows, SecurityRequirement,
  // Security types
  SecurityScheme
} from "./security"

export type {
  // Utility types
  Tag
} from "./tags"

export type {
  ExternalDocumentation,
} from "./external-documentation"

export type {
  Reference,
} from "./references"
