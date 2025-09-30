/**
 * OpenAPI JSON Schemas
 *
 * This file exports all available JSON schemas for all OpenAPI specification versions.
 * These schemas can be used to validate OpenAPI documents and components.
 */

// Export schemas for each version
export * as schemas2_0 from "./2.0";
export * as schemas3_0 from "./3.0";
export * as schemas3_1 from "./3.1";
export * as schemas3_2 from "./3.2";

import { schemas as schemas2_0 } from "./2.0";
import { schemas as schemas3_0 } from "./3.0";
import { schemas as schemas3_1 } from "./3.1";
import { schemas as schemas3_2 } from "./3.2";

// Export all schemas in a single object organized by version
export const allSchemas = {
	"2.0": schemas2_0,
	"3.0": schemas3_0,
	"3.1": schemas3_1,
	"3.2": schemas3_2,
} as const;
