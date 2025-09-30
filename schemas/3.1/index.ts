/**
 * OpenAPI 3.1 JSON Schemas
 *
 * This file exports all available JSON schemas for OpenAPI 3.1 specification.
 * These schemas can be used to validate OpenAPI 3.1 documents and components.
 */

export { default as specification } from "./main/specification.json";

// Component schemas
export { default as response } from "./components/response.json";
export { default as link } from "./components/link.json";
export { default as requestbody } from "./components/requestbody.json";
export { default as example } from "./components/example.json";
export { default as parameter } from "./components/parameter.json";
export { default as schema } from "./components/schema.json";
export { default as securityscheme } from "./components/securityscheme.json";
export { default as header } from "./components/header.json";
export { default as callback } from "./components/callback.json";
export { default as pathitem } from "./components/pathitem.json";

// Import all schemas for internal use
import specification from "./main/specification.json";
import response from "./components/response.json";
import link from "./components/link.json";
import requestbody from "./components/requestbody.json";
import example from "./components/example.json";
import parameter from "./components/parameter.json";
import schema from "./components/schema.json";
import securityscheme from "./components/securityscheme.json";
import header from "./components/header.json";
import callback from "./components/callback.json";
import pathitem from "./components/pathitem.json";

// Re-export all schemas as a single object for convenience
export const schemas = {
  specification,
  response,
  link,
  requestbody,
  example,
  parameter,
  schema,
  securityscheme,
  header,
  callback,
  pathitem,
} as const;

// Type definitions for better TypeScript support
export type SchemaName = keyof typeof schemas;
