/**
 * OpenAPI Types - Comprehensive TypeScript definitions for all OpenAPI versions
 * @fileoverview Main entry point for OpenAPI type definitions
 * @version 1.0.0
 * @since 2024-12-19
 *
 * This library provides comprehensive TypeScript definitions for all OpenAPI specification versions:
 * - Swagger 2.0 (OpenAPI Specification v2.0)
 * - OpenAPI 3.0.0, 3.0.1, 3.0.2, 3.0.3, 3.0.4
 * - OpenAPI 3.1.0, 3.1.1
 * - OpenAPI 3.2.0
 *
 * The library is organized with atomic building blocks (atoms/) that are shared across versions,
 * and version-specific implementations that extend or override these atoms as needed.
 *
 * ## Import Paths
 *
 * For the best developer experience, use these import paths:
 * - `oas-types/3.1.x` - OpenAPI 3.1.x types (latest)
 * - `oas-types/3.0.x` - OpenAPI 3.0.x types
 * - `oas-types/2.0.0` - Swagger 2.0 types
 * - `oas-types/3.2.0` - OpenAPI 3.2.0 types
 *
 * @see {@link https://swagger.io/specification/v2/ Swagger 2.0 Specification}
 * @see {@link https://spec.openapis.org/oas/v3.0.0 OpenAPI 3.0.0 Specification}
 * @see {@link https://spec.openapis.org/oas/v3.1.0 OpenAPI 3.1.0 Specification}
 * @see {@link https://spec.openapis.org/oas/v3.1.1 OpenAPI 3.1.1 Specification}
 * @see {@link https://spec.openapis.org/oas/v3.2.0 OpenAPI 3.2.0 Specification}
 */

// Version-specific exports
export * as OpenAPI2 from "./2.0";
export * as OpenAPI3 from "./3.0";
export * as OpenAPI3_1 from "./3.1";
export * as OpenAPI3_2 from "./3.2";
export * as schemas from "./schemas";
