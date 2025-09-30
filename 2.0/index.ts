// Centralized exports for OpenAPI 2.0 types
// This file serves as the main entry point for all OpenAPI 2.0 type definitions

export type {
  ArraySchema,
  BooleanSchema,
  FileSchema,
  IntegerSchema,
  NumberSchema,
  ObjectSchema,
  // Individual schema types
  StringSchema,
} from "./data-types";
export type { Examples } from "./example";
// Re-export all types for convenience
export type {
  // Core types
  Extension,
} from "./extensions";
export type { ExternalDocumentation } from "./externalDocs";
export type {
  Contact,
  // Info types
  Info,
  License,
} from "./info";
export type {
  Header,
  Items,
  Operation,
  Parameter,
  // Path types
  PathItem,
  Paths,
  Response,
} from "./paths";
export type {
  // References
  BaseReference,
  Reference,
} from "./references";
export type {
  Definitions,
  ParametersDefinitions,
  ResponsesDefinitions,
  // Schema types
  Schema,
  XML,
} from "./schema";
export type {
  Scopes,
  SecurityDefinitions,
  SecurityRequirement,
  // Security types
  SecurityScheme,
} from "./security";
// Export the main specification type
export type { Specification } from "./spec";
export type {
  // Utility types
  Tag,
} from "./tags";
export type {
  // XML Object
  XMLObject,
} from "./xml";

// All supporting types are now defined in their respective modules:
// - spec.ts: Specification (main root type)
// - info.ts: Info, Contact, License
// - paths.ts: PathItem, Operation, Parameter, Response, Header, Items
// - schema.ts: Schema, XML, Definitions, ParametersDefinitions, ResponsesDefinitions
// - security.ts: SecurityScheme, SecurityRequirement, Scopes, SecurityDefinitions
// - shallow.ts: Tag, ExternalDocumentation, Reference, Example, Paths
// - data-types/: All individual schema types
// - xml-object.ts: XMLObject
// - references.ts: BaseReference, Reference
