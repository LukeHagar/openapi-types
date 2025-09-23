// Centralized exports for OpenAPI 2.0 types
// This file serves as the main entry point for all OpenAPI 2.0 type definitions

// Export the main specification type
export type { Specification } from "./spec"

// Re-export all types for convenience
export type {
  // Core types
  Extension,
} from "./extensions"

export type {
  // Info types
    Info,
  Contact,
  License,
} from "./info"

export type {
  // Path types
  PathItemObject,
  Operation,
  Parameter,
  Response,
  Header,
  Items,
} from "./paths"

export type {
  // Schema types
  Schema,
  SwaggerSchema,
  XML,
  Definitions,
  ParametersDefinitions,
  ResponsesDefinitions,
} from "./schema"

export type {
  // Security types
  SecurityScheme,
  SecurityRequirement,
  Scopes,
  SecurityDefinitions,
} from "./security"

export type {
  // Utility types
  Tag,
} from "./tags"

export type {
  ExternalDocumentation,
} from "./external-documentation"

export type {
  Example,
} from "./example"

export type {
  Paths,
} from "./paths"

// Re-export data types
export type {
  // Base schema
  BaseSchemaProperties,
} from "./data-types/base-schema"

export type {
  // Individual schema types
    StringSchema,
    NumberSchema,
    IntegerSchema,
    BooleanSchema,
  FileSchema,
    ArraySchema,
    ObjectSchema,
} from "./data-types"

export type {
  // XML Object
  XMLObject,
} from "./xml"

export type {
  // Swagger Schema with Extensions
  SwaggerSchemaWithExtensions,
} from "./schema"

export type {
  // References
  BaseReference,
  Reference,
} from "./references"

// All supporting types are now defined in their respective modules:
// - spec.ts: Specification (main root type)
// - info.ts: Info, Contact, License
// - paths.ts: PathItemObject, Operation, Parameter, Response, Header, Items
// - schema.ts: Schema, SwaggerSchema, SwaggerSchemaWithExtensions, XML, Definitions, ParametersDefinitions, ResponsesDefinitions
// - security.ts: SecurityScheme, SecurityRequirement, Scopes, SecurityDefinitions
// - shallow.ts: Tag, ExternalDocumentation, Reference, Example, Paths
// - data-types/: All individual schema types
// - xml-object.ts: XMLObject
// - references.ts: BaseReference, Reference