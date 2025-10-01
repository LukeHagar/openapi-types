import type { Components } from "./components";
import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";
// Import all the major component types
import type { Info } from "./info";
import type { Paths } from "./paths";
import type { SecurityRequirement } from "./security";
import type { Server } from "./servers";
import type { Tag } from "./tags";

/**
 * -----
 * OpenAPI Object
 * -----
 *
 * Root OpenAPI 3.0 Schema (OpenAPI Object)
 *
 * This is the root document object of the OpenAPI specification. It contains
 * all the metadata about the API being described. This object is based on the
 * JSON Schema Specification Wright Draft 00 and uses a predefined subset of it.
 *
 * The OpenAPI Object is the root of the specification document and contains
 * all the information about the API, including its metadata, available paths,
 * data models, security schemes, and more.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 OpenAPI Object} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 OpenAPI Object} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 OpenAPI Object} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 OpenAPI Object} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 OpenAPI Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `openapi` - Required Specifies the OpenAPI specification version
 * @property `info` - Required Provides metadata about the API
 * @property `servers` - Optional An array of Server Objects
 * @property `paths` - Required The available paths and operations for the API
 * @property `components` - Optional An element to hold various schemas
 * @property `security` - Optional A declaration of security mechanisms
 * @property `tags` - Optional A list of tags used by the specification
 * @property `externalDocs` - Optional Additional external documentation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `openapi` field is required and must be "3.0.0" for this specification.
 * The `info` and `paths` fields are also required.
 *
 * -----
 * Examples
 * -----
 * @example
 * ```typescript
 * const openapi: Specification = {
 *   openapi: "3.0.0",
 *   info: {
 *     title: "Sample Pet Store App",
 *     description: "This is a sample server for a pet store.",
 *     version: "1.0.1"
 *   },
 *   servers: [
 *     {
 *       url: "https://petstore.swagger.io/v2",
 *       description: "Petstore server"
 *     }
 *   ],
 *   paths: {
 *     "/pets": {
 *       get: {
 *         summary: "List all pets",
 *         responses: {
 *           "200": {
 *             description: "A list of pets",
 *             content: {
 *               "application/json": {
 *                 schema: {
 *                   type: "array",
 *                   items: { $ref: "#/components/schemas/Pet" }
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   },
 *   components: {
 *     schemas: {
 *       Pet: {
 *         type: "object",
 *         properties: {
 *           id: { type: "integer", format: "int64" },
 *           name: { type: "string" },
 *           tag: { type: "string" }
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 */
export type Specification = {
  /**
   * Specifies the OpenAPI specification version being used.
   * Must be "3.0.0" for this specification.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - openapi} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - openapi} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - openapi} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - openapi} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - openapi} |
   *
   * @property `openapi` - Required The OpenAPI specification version
   */
  openapi: "3.0.0" | "3.0.1" | "3.0.2" | "3.0.3" | "3.0.4";

  /**
   * Provides metadata about the API. The metadata can be used by the clients
   * if needed, and can be presented in the OpenAPI-UI for convenience.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - info} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - info} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - info} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - info} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - info} |
   *
   * @property `info` - Required Metadata about the API
   */
  info: Info;

  /**
   * An array of Server Objects, which provide connectivity information to a target server.
   * If the servers property is not provided, or is an empty array, the default value
   * would be a Server Object with a url value of "/".
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - servers} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - servers} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - servers} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - servers} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - servers} |
   *
   * @property `servers` - Optional Array of server objects
   *
   * @example [{ url: "https://api.example.com/v1", description: "Production server" }]
   * @example [{ url: "https://staging-api.example.com/v1", description: "Staging server" }]
   */
  servers?: Server[];

  /**
   * The available paths and operations for the API. This is the root of the
   * Path Item Object. It does not define a path or a basePath, they are defined
   * in the Paths Object. A relative path to an individual endpoint. The field
   * name MUST begin with a slash. The path is appended to the basePath in order
   * to construct the full URL. Path templating is allowed.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - paths} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - paths} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - paths} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - paths} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - paths} |
   *
   * @property `paths` - Required Available paths and operations for the API
   *
   * @example { "/users": { get: { ... } } }
   * @example { "/users/{id}": { get: { ... } } }
   */
  paths: Paths;

  /**
   * An element to hold various schemas for the specification.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - components} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - components} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - components} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - components} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - components} |
   *
   * @property `components` - Optional Reusable objects for different aspects of the OAS
   *
   * @example { schemas: { User: { type: "object", properties: { ... } } } }
   */
  components?: Components;

  /**
   * A declaration of which security mechanisms can be used across the API.
   * The list of values includes alternative security requirement objects that can be used.
   * Only one of the security requirement objects need to be satisfied to authorize a request.
   * Individual operations can override this definition.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - security} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - security} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - security} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - security} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - security} |
   *
   * @property `security` - Optional Security mechanisms for the API
   *
   * @example [{ "api_key": [] }]
   * @example [{ "oauth2": ["read", "write"] }]
   */
  security?: SecurityRequirement[];

  /**
   * A list of tags used by the specification with additional metadata.
   * The order of the tags can be used to reflect on their order by the
   * parsing tools. Not all tags that are used by the Operation Object must
   * be declared. The tags that are not declared may be organized randomly
   * or based on the tools' logic. Each tag name in the list MUST be unique.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - tags} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - tags} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - tags} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - tags} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - tags} |
   *
   * @property `tags` - Optional List of tags with additional metadata
   *
   * @example [{ name: "users", description: "User management" }]
   */
  tags?: Tag[];

  /**
   * Additional external documentation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#openapi-object | OpenAPI 3.0.4 Specification - externalDocs} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#openapi-object | OpenAPI 3.0.3 Specification - externalDocs} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#openapi-object | OpenAPI 3.0.2 Specification - externalDocs} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#openapi-object | OpenAPI 3.0.1 Specification - externalDocs} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#openapi-object | OpenAPI 3.0.0 Specification - externalDocs} |
   *
   * @property `externalDocs` - Optional Additional external documentation
   *
   * @example { description: "Find out more about our API", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation;
} & Extension;
