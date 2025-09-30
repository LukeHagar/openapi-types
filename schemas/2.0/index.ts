/**
 * OpenAPI 2.0 JSON Schemas
 *
 * This file exports all available JSON schemas for OpenAPI 2.0 specification.
 * These schemas can be used to validate OpenAPI 2.0 documents and components.
 */

export { default as specification } from "./main/specification.json";

// Component schemas
export { default as response } from "./components/response.json";
export { default as parameter } from "./components/parameter.json";
export { default as schema } from "./components/schema.json";
export { default as pathitem } from "./components/pathitem.json";

// Import all schemas for internal use
import specification from "./main/specification.json";
import response from "./components/response.json";
import parameter from "./components/parameter.json";
import schema from "./components/schema.json";
import pathitem from "./components/pathitem.json";

// Re-export all schemas as a single object for convenience
export const schemas = {
  specification,
  response,
  parameter,
  schema,
  pathitem,
} as const;

// Type definitions for better TypeScript support
export type SchemaName = keyof typeof schemas;
