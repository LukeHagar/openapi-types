import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";
import type { Reference } from "./references";
import type { Schema } from "./schema";
import type { SecurityRequirement } from "./security";
import type { Server } from "./servers";
import type { ResponsesMap } from "./status";

/**
 * -----
 * Paths Object
 * -----
 *
 * Holds the relative paths to the individual endpoints and their operations.
 *
 * The Paths Object holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the Server Object in order to construct the full URL.
 * The Paths MAY be empty, due to ACL constraints.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#paths-object | OpenAPI 3.0.4 Paths} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#paths-object | OpenAPI 3.0.3 Paths} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#paths-object | OpenAPI 3.0.2 Paths} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#paths-object | OpenAPI 3.0.1 Paths} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#paths-object | OpenAPI 3.0.0 Paths} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `/{path}` - A relative path to an individual endpoint
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The field name MUST begin with a slash. The path is appended (no relative URL resolution)
 * to the expanded URL from the Server Object's url field in order to construct the full URL.
 * Path templating is allowed. When matching URLs, concrete (non-templated) paths would be
 * matched before their templated counterparts.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple paths):
 * ```ts
 * const paths: Paths = {
 *   "/pets": {
 *     get: {
 *       summary: "List all pets",
 *       responses: {
 *         "200": {
 *           description: "A list of pets"
 *         }
 *       }
 *     }
 *   },
 *   "/pets/{petId}": {
 *     get: {
 *       summary: "Get a pet by ID",
 *       parameters: [
 *         { name: "petId", in: "path", required: true, schema: { type: "string" } }
 *       ],
 *       responses: {
 *         "200": {
 *           description: "A pet"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Paths = Record<string, PathItem> & Extension;

/**
 * -----
 * Path Item Object
 * -----
 *
 * Describes the operations available on a single path.
 * A Path Item MAY be empty, due to ACL constraints.
 *
 * The Path Item Object describes the operations available on a single path. It can
 * contain a summary and description that apply to all operations on the path, as well
 * as individual operation definitions for each HTTP method.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object | OpenAPI 3.0.4 Path Item} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object | OpenAPI 3.0.3 Path Item} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object | OpenAPI 3.0.2 Path Item} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object | OpenAPI 3.0.1 Path Item} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object | OpenAPI 3.0.0 Path Item} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `$ref` - Optional Allows for an external definition of this path item
 * @property `summary` - Optional An optional, string summary, intended to apply to all operations in this path
 * @property `description` - Optional An optional, string description, intended to apply to all operations in this path
 * @property `get` - Optional A definition of a GET operation on this path
 * @property `put` - Optional A definition of a PUT operation on this path
 * @property `post` - Optional A definition of a POST operation on this path
 * @property `delete` - Optional A definition of a DELETE operation on this path
 * @property `options` - Optional A definition of an OPTIONS operation on this path
 * @property `head` - Optional A definition of a HEAD operation on this path
 * @property `patch` - Optional A definition of a PATCH operation on this path
 * @property `trace` - Optional A definition of a TRACE operation on this path
 * @property `servers` - Optional An alternative server array to service all operations in this path
 * @property `parameters` - Optional A list of parameters that are applicable for all the operations described under this path
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * All operation fields are optional. Parameters can be overridden at the operation level.
 * In OpenAPI 3.0.1+, the `servers` property was clarified to allow alternative server
 * arrays that override the global servers for operations on this specific path.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple path item):
 * ```ts
 * const pathItem: PathItem = {
 *   get: {
 *     summary: "List users",
 *     responses: {
 *       "200": {
 *         description: "A list of users",
 *         content: {
 *           "application/json": {
 *             schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *           }
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (path item with shared parameters):
 * ```ts
 * const pathItem: PathItem = {
 *   summary: "User management operations",
 *   parameters: [
 *     { name: "userId", in: "path", required: true, schema: { type: "string" } }
 *   ],
 *   get: { summary: "Get user" },
 *   put: { summary: "Update user" },
 *   delete: { summary: "Delete user" }
 * };
 * ```
 */
export type PathItem =
  | ({
      /**
       * Allows for an external definition of this path item. The referenced structure
       * MUST be in the format of a Path Item Object.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - $ref} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - $ref} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - $ref} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - $ref} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - $ref} |
       * @property `$ref` - Optional Allows for an external definition of this path item
       */
      $ref?: string;

      /**
       * An optional, string summary, intended to apply to all operations in this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - summary} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - summary} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - summary} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - summary} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - summary} |
       * @property `summary` - Optional An optional, string summary, intended to apply to all operations in this path
       *
       * @example "User management operations"
       */
      summary?: string;

      /**
       * An optional, string description, intended to apply to all operations in this path.
       * CommonMark syntax MAY be used for rich text representation.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - description} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - description} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - description} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - description} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - description} |
       * @property `description` - Optional An optional, string description, intended to apply to all operations in this path
       *
       * @example "Operations for managing users in the system"
       */
      description?: string;

      /**
       * A definition of a GET operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - get} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - get} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - get} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - get} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - get} |
       * @property `get` - Optional A definition of a GET operation on this path
       *
       * @example { summary: "Get users", responses: { "200": { description: "Success" } } }
       */
      get?: Operation;

      /**
       * A definition of a PUT operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - put} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - put} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - put} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - put} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - put} |
       * @property `put` - Optional A definition of a PUT operation on this path
       *
       * @example { summary: "Update user", responses: { "200": { description: "Success" } } }
       */
      put?: Operation;

      /**
       * A definition of a POST operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - post} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - post} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - post} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - post} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - post} |
       * @property `post` - Optional A definition of a POST operation on this path
       *
       * @example { summary: "Create user", responses: { "201": { description: "Created" } } }
       */
      post?: Operation;

      /**
       * A definition of a DELETE operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - delete} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - delete} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - delete} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - delete} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - delete} |
       * @property `delete` - Optional A definition of a DELETE operation on this path
       *
       * @example { summary: "Delete user", responses: { "204": { description: "No Content" } } }
       */
      delete?: Operation;

      /**
       * A definition of an OPTIONS operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - options} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - options} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - options} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - options} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - options} |
       * @property `options` - Optional A definition of an OPTIONS operation on this path
       *
       * @example { summary: "Get options", responses: { "200": { description: "Options" } } }
       */
      options?: Operation;

      /**
       * A definition of a HEAD operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - head} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - head} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - head} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - head} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - head} |
       * @property `head` - Optional A definition of a HEAD operation on this path
       *
       * @example { summary: "Check if resource exists", responses: { "200": { description: "Exists" } } }
       */
      head?: Operation;

      /**
       * A definition of a PATCH operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - patch} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - patch} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - patch} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - patch} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - patch} |
       * @property `patch` - Optional A definition of a PATCH operation on this path
       *
       * @example { summary: "Partially update user", responses: { "200": { description: "Success" } } }
       */
      patch?: Operation;

      /**
       * A definition of a TRACE operation on this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - trace} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - trace} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - trace} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - trace} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - trace} |
       * @property `trace` - Optional A definition of a TRACE operation on this path
       *
       * @example { summary: "Trace request", responses: { "200": { description: "Success" } } }
       */
      trace?: Operation;

      /**
       * An alternative server array to service all operations in this path.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - servers} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - servers} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - servers} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - servers} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - servers} |
       * @property `servers` - Optional An alternative server array to service all operations in this path
       *
       * @example [{ url: "https://api.example.com/v1" }]
       */
      servers?: Server[];

      /**
       * A list of parameters that are applicable for all the operations described
       * under this path. These parameters can be overridden at the operation level,
       * but cannot be removed there. The list MUST NOT include duplicated parameters.
       * A unique parameter is defined by a combination of a name and location.
       * *
       * | Version | Reference |
       * |---|-----|
       * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#path-item-object  | OpenAPI 3.0.4 Path Item Object - parameters} |
       * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#path-item-object  | OpenAPI 3.0.3 Path Item Object - parameters} |
       * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#path-item-object  | OpenAPI 3.0.2 Path Item Object - parameters} |
       * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#path-item-object  | OpenAPI 3.0.1 Path Item Object - parameters} |
       * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#path-item-object  | OpenAPI 3.0.0 Path Item Object - parameters} |
       * @property `parameters` - Optional A list of parameters that are applicable for all the operations described under this path
       *
       * @example [{ name: "limit", in: "query", schema: { type: "integer" } }]
       */
      parameters?: Array<Parameter | Reference>;
    } & Extension)
  | Reference;

/**
 * -----
 * Operation Object
 * -----
 *
 * Describes a single API operation on a path.
 *
 * The Operation Object describes a single API operation on a path. It contains
 * information about the operation including its parameters, request body, responses,
 * and security requirements.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object | OpenAPI 3.0.4 Operation} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object | OpenAPI 3.0.3 Operation} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object | OpenAPI 3.0.2 Operation} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object | OpenAPI 3.0.1 Operation} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object | OpenAPI 3.0.0 Operation} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `tags` - Optional A list of tags for API documentation control
 * @property `summary` - Optional A short summary of what the operation does
 * @property `description` - Optional A verbose explanation of the operation behavior
 * @property `externalDocs` - Optional Additional external documentation for this operation
 * @property `operationId` - Optional Unique string used to identify the operation
 * @property `parameters` - Optional A list of parameters that are applicable for this operation
 * @property `requestBody` - Optional The request body applicable for this operation
 * @property `responses` - Required The list of possible responses as they are returned from executing this operation
 * @property `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
 * @property `deprecated` - Optional Declares this operation to be deprecated
 * @property `security` - Optional A declaration of which security mechanisms can be used for this operation
 * @property `servers` - Optional An alternative server array to service this operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `responses` field is required and MUST contain at least one response.
 * In OpenAPI 3.0.1+, the `operationId` field was clarified to be case-sensitive
 * and must be unique across all operations in the API. The `servers` property
 * was clarified to allow alternative server arrays that override the global
 * servers for this specific operation.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple operation):
 * ```ts
 * const operation: Operation = {
 *   summary: "Get users",
 *   responses: {
 *     "200": {
 *       description: "A list of users",
 *       content: {
 *         "application/json": {
 *           schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (operation with request body):
 * ```ts
 * const operation: Operation = {
 *   summary: "Create user",
 *   operationId: "createUser",
 *   requestBody: {
 *     description: "User data",
 *     content: {
 *       "application/json": {
 *         schema: { $ref: "#/components/schemas/User" }
 *       }
 *     }
 *   },
 *   responses: {
 *     "201": {
 *       description: "User created",
 *       content: {
 *         "application/json": {
 *           schema: { $ref: "#/components/schemas/User" }
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export interface Operation extends Extension {
  /**
   * A list of tags for API documentation control. Tags can be used for logical
   * grouping of operations by resources or any other qualifier.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - tags} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - tags} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - tags} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - tags} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - tags} |
   * @property `tags` - Optional A list of tags for API documentation control
   *
   * @example ["users", "authentication"]
   * @example ["pets"]
   */
  tags?: string[];

  /**
   * A short summary of what the operation does. For maximum readability in
   * OpenAPI-UI, this field SHOULD be less than 120 characters.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - summary} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - summary} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - summary} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - summary} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - summary} |
   * @property `summary` - Optional A short summary of what the operation does
   *
   * @example "Get user by ID"
   * @example "Create a new pet"
   */
  summary?: string;

  /**
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used
   * for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - description} |
   * @property `description` - Optional A verbose explanation of the operation behavior
   *
   * @example "Retrieves a specific user by their unique identifier. Returns user details including name, email, and profile information."
   */
  description?: string;

  /**
   * Additional external documentation for this operation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - externalDocs} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - externalDocs} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - externalDocs} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - externalDocs} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - externalDocs} |
   * @property `externalDocs` - Optional Additional external documentation for this operation
   *
   * @example { description: "Find out more about this operation", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation;

  /**
   * Unique string used to identify the operation. The id MUST be unique among
   * all operations described in the API. Tools and libraries MAY use the
   * operationId to uniquely identify an operation, therefore, it is recommended
   * to follow common programming naming conventions.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - operationId} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - operationId} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - operationId} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - operationId} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - operationId} |
   * @property `operationId` - Optional Unique string used to identify the operation
   *
   * @example "getUserById"
   * @example "createPet"
   */
  operationId?: string;

  /**
   * A list of parameters that are applicable for this operation. If a parameter
   * is already defined at the Path Item, the new definition will override it
   * but can never remove it. The list MUST NOT include duplicated parameters.
   * A unique parameter is defined by a combination of a name and location.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - parameters} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - parameters} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - parameters} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - parameters} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - parameters} |
   * @property `parameters` - Optional A list of parameters that are applicable for this operation
   *
   * @example [{ name: "id", in: "path", required: true, schema: { type: "string" } }]
   */
  parameters?: Array<Parameter | Reference>;

  /**
   * The request body applicable for this operation. The requestBody is only
   * supported in HTTP methods where the HTTP 1.1 specification has explicitly
   * defined semantics for request bodies.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - requestBody} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - requestBody} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - requestBody} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - requestBody} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - requestBody} |
   * @property `requestBody` - Optional The request body applicable for this operation
   *
   * @example { description: "User data", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } }
   */
  requestBody?: RequestBody | Reference;

  /**
   * The list of possible responses as they are returned from executing this operation.
   * This field MUST be present and MUST contain at least one response.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - responses} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - responses} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - responses} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - responses} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - responses} |
   * @property `responses` - Required The list of possible responses as they are returned from executing this operation
   *
   * @example { "200": { description: "Success", content: { "application/json": { schema: { type: "object" } } } } }
   */
  responses: ResponsesMap;

  /**
   * A map of possible out-of band callbacks related to the parent operation.
   * The key is a unique identifier for the Callback Object. Each value in the map
   * is a Callback Object that describes a request that may be initiated by the API
   * provider and the expected responses.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - callbacks} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - callbacks} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - callbacks} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - callbacks} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - callbacks} |
   * @property `callbacks` - Optional A map of possible out-of band callbacks related to the parent operation
   *
   * @example { "myCallback": { "{$request.body#/callbackUrl}": { post: { ... } } } }
   */
  callbacks?: Record<string, Callback | Reference>;

  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage
   * of the declared operation. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - deprecated} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - deprecated} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - deprecated} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - deprecated} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - deprecated} |
   * @property `deprecated` - Optional Declares this operation to be deprecated
   *
   * @default false
   * @example true
   */
  deprecated?: boolean;

  /**
   * A declaration of which security mechanisms can be used for this operation.
   * The list of values includes alternative security requirement objects that can be used.
   * Only one of the security requirement objects need to be satisfied to authorize a request.
   * This definition overrides any declared top-level security.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - security} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - security} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - security} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - security} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - security} |
   * @property `security` - Optional A declaration of which security mechanisms can be used for this operation
   *
   * @example [{ "api_key": [] }]
   * @example [{ "oauth2": ["read", "write"] }]
   */
  security?: SecurityRequirement[];

  /**
   * An alternative server array to service this operation. If an alternative
   * server object is specified at the Path Item Object or Root level, it will
   * be overridden by this value.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#operation-object  | OpenAPI 3.0.4 Operation Object - servers} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#operation-object  | OpenAPI 3.0.3 Operation Object - servers} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#operation-object  | OpenAPI 3.0.2 Operation Object - servers} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#operation-object  | OpenAPI 3.0.1 Operation Object - servers} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#operation-object  | OpenAPI 3.0.0 Operation Object - servers} |
   * @property `servers` - Optional An alternative server array to service this operation
   *
   * @example [{ url: "https://api.example.com/v1" }]
   */
  servers?: Server[];
}

/**
 * -----
 * Parameter Object
 * -----
 *
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object | OpenAPI 3.0.0 Parameter} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `name` - Required The name of the parameter
 * @property `in` - Required The location of the parameter
 * @property `description` - Optional A brief description of the parameter
 * @property `required` - Optional Determines whether this parameter is mandatory
 * @property `deprecated` - Optional Specifies that a parameter is deprecated
 * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued parameters
 * @property `style` - Optional Describes how the parameter value will be serialized
 * @property `explode` - Optional When this is true, parameter values generate separate parameters
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @property `schema` - Optional The schema defining the type used for the parameter
 * @property `example` - Optional Example of the media type
 * @property `examples` - Optional Examples of the media type
 * @property `content` - Optional A map containing the representations for the parameter
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `name` and `in` fields are required. A parameter MUST contain either a `schema` property, or a `content` property, but not both.
 *
 * -----
 * Examples
 * -----
 *
 * @example (path parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "id",
 *   in: "path",
 *   required: true,
 *   description: "User ID",
 *   schema: { type: "string" }
 * };
 * ```
 *
 * @example (query parameter):
 * ```ts
 * const parameter: Parameter = {
 *   name: "limit",
 *   in: "query",
 *   description: "Number of items to return",
 *   schema: { type: "integer", minimum: 1, maximum: 100 }
 * };
 * ```
 */
export interface Parameter extends Extension {
  /**
   * The name of the parameter. Parameter names are case sensitive.
   * - If in is "path", the name field MUST correspond to the associated path segment
   * - If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored
   * - For all other cases, the name corresponds to the parameter name used by the in property
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - name} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - name} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - name} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - name} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - name} |
   * @property `name` - Required The name of the parameter
   *
   * @example "id"
   * @example "limit"
   * @example "user"
   */
  name: string;

  /**
   * The location of the parameter. Possible values are "query", "header", "path" or "cookie".
   *
   * - **query**: Parameters that are appended to the URL
   * - **header**: Custom headers that are expected as part of the request
   * - **path**: Used together with Path Templating, where the parameter value is actually part of the operation's URL
   * - **cookie**: Used to pass a specific cookie value to the API
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - in} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - in} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - in} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - in} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - in} |
   * @property `in` - Required The location of the parameter
   *
   * @example "query"
   * @example "path"
   * @example "header"
   * @example "cookie"
   */
  in: "query" | "header" | "path" | "cookie";

  /**
   * A brief description of the parameter. This could contain examples of use.
   * CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - description} |
   * @property `description` - Optional A brief description of the parameter
   *
   * @example "User ID to retrieve"
   * @example "Number of items to return"
   */
  description?: string;

  /**
   * Determines whether this parameter is mandatory. If the parameter location is "path",
   * this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be
   * included and its default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - required} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - required} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - required} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - required} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - required} |
   * @property `required` - Optional Determines whether this parameter is mandatory
   *
   * @example true
   * @example false
   */
  required?: boolean;

  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - deprecated} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - deprecated} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - deprecated} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - deprecated} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - deprecated} |
   * @property `deprecated` - Optional Specifies that a parameter is deprecated and SHOULD be transitioned out of usage
   *
   * @example true
   * @example false
   */
  deprecated?: boolean;

  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for query
   * parameters and allows sending a parameter with an empty value. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - allowEmptyValue} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - allowEmptyValue} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - allowEmptyValue} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - allowEmptyValue} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - allowEmptyValue} |
   * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued parameters
   *
   * @example true
   * @example false
   */
  allowEmptyValue?: boolean;

  /**
   * Describes how the parameter value will be serialized depending on the type of the parameter value.
   * Default values (based on value of in): for query - form; for path - simple; for header - simple; for cookie - form.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - style} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - style} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - style} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - style} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - style} |
   * @property `style` - Optional Describes how the parameter value will be serialized
   *
   * @example "form"
   * @example "simple"
   * @example "matrix"
   * @example "label"
   * @example "spaceDelimited"
   * @example "pipeDelimited"
   * @example "deepObject"
   */
  style?:
    | "matrix"
    | "label"
    | "form"
    | "simple"
    | "spaceDelimited"
    | "pipeDelimited"
    | "deepObject";

  /**
   * When this is true, parameter values of type array or object generate separate parameters
   * for each value of the array or key-value pair of the map. For other types of parameters
   * this property has no effect. When style is form, the default value is true.
   * For all other styles, the default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - explode} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - explode} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - explode} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - explode} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - explode} |
   * @property `explode` - Optional When this is true, parameter values of type array or object generate separate parameters
   *
   * @example true
   * @example false
   */
  explode?: boolean;

  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by
   * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. This property only
   * applies to parameters with an in value of query. The default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - allowReserved} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - allowReserved} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - allowReserved} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - allowReserved} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - allowReserved} |
   * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
   *
   * @example true
   * @example false
   */
  allowReserved?: boolean;

  /**
   * The schema defining the type used for the parameter.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - schema} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - schema} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - schema} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - schema} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - schema} |
   * @property `schema` - Optional The schema defining the type used for the parameter
   *
   * @example { type: "string" }
   * @example { type: "integer", minimum: 1, maximum: 100 }
   */
  schema?: Schema;

  /**
   * Example of the media type. The example SHOULD match the specified schema and encoding
   * properties if present. The example object is mutually exclusive of the examples object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - example} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - example} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - example} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - example} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - example} |
   * @property `example` - Optional Example of the media type
   *
   * @example "example-value"
   * @example 42
   */
  example?: unknown;

  /**
   * Examples of the media type. Each example SHOULD contain a value in the correct format
   * as specified in the parameter encoding. The examples object is mutually exclusive of
   * the example object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - examples} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - examples} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - examples} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - examples} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - examples} |
   * @property `examples` - Optional Examples of the media type
   *
   * @example { "user1": { summary: "A user example", value: "user123" } }
   */
  examples?: Record<string, Example | Reference>;

  /**
   * A map containing the representations for the parameter. The key is the media type
   * and the value describes it. The map MUST only contain one entry.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#parameter-object  | OpenAPI 3.0.4 Parameter Object - content} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#parameter-object  | OpenAPI 3.0.3 Parameter Object - content} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#parameter-object  | OpenAPI 3.0.2 Parameter Object - content} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#parameter-object  | OpenAPI 3.0.1 Parameter Object - content} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#parameter-object  | OpenAPI 3.0.0 Parameter Object - content} |
   * @property `content` - Optional A map containing the representations for the parameter
   *
   * @example { "application/json": { schema: { type: "object" } } }
   */
  content?: Record<string, MediaType>;
}

/**
 * -----
 * Request Body Object
 * -----
 *
 * Describes a single request body.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#request-body-object | OpenAPI 3.0.0 Request Body} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `description` - Optional A brief description of the request body
 * @property `content` - Required The content of the request body
 * @property `required` - Optional Determines if the request body is required in the request
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `content` field is required. The `requestBody` is only supported in HTTP methods where the HTTP 1.1 specification has explicitly defined semantics for request bodies.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple request body):
 * ```ts
 * const requestBody: RequestBody = {
 *   description: "User data",
 *   content: {
 *     "application/json": {
 *       schema: { $ref: "#/components/schemas/User" }
 *     }
 *   }
 * };
 * ```
 */
export interface RequestBody extends Extension {
  /**
   * A brief description of the request body. This could contain examples of use.
   * CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#request-body-object  | OpenAPI 3.0.4 Request Body Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#request-body-object  | OpenAPI 3.0.3 Request Body Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#request-body-object  | OpenAPI 3.0.2 Request Body Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#request-body-object  | OpenAPI 3.0.1 Request Body Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#request-body-object  | OpenAPI 3.0.0 Request Body Object - description} |
   * @property `description` - Optional A brief description of the request body
   *
   * @example "User data to create"
   * @example "Pet information"
   */
  description?: string;

  /**
   * The content of the request body. The key is a media type or media type range
   * and the value describes it. For requests that match multiple keys, only the
   * most specific key is applicable.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#request-body-object  | OpenAPI 3.0.4 Request Body Object - content} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#request-body-object  | OpenAPI 3.0.3 Request Body Object - content} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#request-body-object  | OpenAPI 3.0.2 Request Body Object - content} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#request-body-object  | OpenAPI 3.0.1 Request Body Object - content} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#request-body-object  | OpenAPI 3.0.0 Request Body Object - content} |
   * @property `content` - Required The content of the request body
   *
   * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
   */
  content: Record<string, MediaType>;

  /**
   * Determines if the request body is required in the request. Defaults to false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#request-body-object  | OpenAPI 3.0.4 Request Body Object - required} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#request-body-object  | OpenAPI 3.0.3 Request Body Object - required} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#request-body-object  | OpenAPI 3.0.2 Request Body Object - required} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#request-body-object  | OpenAPI 3.0.1 Request Body Object - required} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#request-body-object  | OpenAPI 3.0.0 Request Body Object - required} |
   * @property `required` - Optional Determines if the request body is required in the request
   *
   * @default false
   * @example true
   */
  required?: boolean;
}

/**
 * -----
 * Media Type Object
 * -----
 *
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object | OpenAPI 3.0.0 Media Type} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `schema` - Optional The schema defining the type used for the request body
 * @property `example` - Optional Example of the media type
 * @property `examples` - Optional Examples of the media type
 * @property `encoding` - Optional A map between a property name and its encoding information
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `example` object is mutually exclusive of the `examples` object.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple media type):
 * ```ts
 * const mediaType: MediaType = {
 *   schema: { $ref: "#/components/schemas/User" }
 * };
 * ```
 */
export interface MediaType extends Extension {
  /**
   * The schema defining the type used for the request body.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#media-type-object  | OpenAPI 3.0.4 Media Type Object - schema} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#media-type-object  | OpenAPI 3.0.3 Media Type Object - schema} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#media-type-object  | OpenAPI 3.0.2 Media Type Object - schema} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#media-type-object  | OpenAPI 3.0.1 Media Type Object - schema} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object  | OpenAPI 3.0.0 Media Type Object - schema} |
   * @property `schema` - Optional The schema defining the type used for the request body
   *
   * @example { $ref: "#/components/schemas/User" }
   * @example { type: "object", properties: { name: { type: "string" } } }
   */
  schema?: Schema | Reference;

  /**
   * Example of the media type. The example object SHOULD be in the correct format
   * as specified by the media type. The example object is mutually exclusive of
   * the examples object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#media-type-object  | OpenAPI 3.0.4 Media Type Object - example} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#media-type-object  | OpenAPI 3.0.3 Media Type Object - example} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#media-type-object  | OpenAPI 3.0.2 Media Type Object - example} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#media-type-object  | OpenAPI 3.0.1 Media Type Object - example} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object  | OpenAPI 3.0.0 Media Type Object - example} |
   * @property `example` - Optional Example of the media type
   *
   * @example { name: "John Doe", email: "john@example.com" }
   */
  example?: unknown;

  /**
   * Examples of the media type. Each example object SHOULD match the media type
   * and specified schema if present. The examples object is mutually exclusive of
   * the example object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#media-type-object  | OpenAPI 3.0.4 Media Type Object - examples} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#media-type-object  | OpenAPI 3.0.3 Media Type Object - examples} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#media-type-object  | OpenAPI 3.0.2 Media Type Object - examples} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#media-type-object  | OpenAPI 3.0.1 Media Type Object - examples} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object  | OpenAPI 3.0.0 Media Type Object - examples} |
   * @property `examples` - Optional Examples of the media type
   *
   * @example { "user1": { summary: "A user example", value: { name: "John" } } }
   */
  examples?: Record<string, Example | Reference>;

  /**
   * A map between a property name and its encoding information. The key, being the
   * property name, MUST exist in the schema as a property. The encoding object SHALL
   * only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#media-type-object  | OpenAPI 3.0.4 Media Type Object - encoding} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#media-type-object  | OpenAPI 3.0.3 Media Type Object - encoding} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#media-type-object  | OpenAPI 3.0.2 Media Type Object - encoding} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#media-type-object  | OpenAPI 3.0.1 Media Type Object - encoding} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#media-type-object  | OpenAPI 3.0.0 Media Type Object - encoding} |
   * @property `encoding` - Optional A map between a property name and its encoding information
   *
   * @example { "profileImage": { contentType: "image/png" } }
   */
  encoding?: Record<string, Encoding>;
}

/**
 * -----
 * Encoding Object
 * -----
 *
 * A single encoding definition applied to a single schema property.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object | OpenAPI 3.0.0 Encoding} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `contentType` - Optional The Content-Type for encoding a specific property
 * @property `headers` - Optional A map allowing additional information to be provided as headers
 * @property `style` - Optional Describes how a specific property value will be serialized
 * @property `explode` - Optional When this is true, property values generate separate parameters
 * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * This attribute is only applicable to multipart and application/x-www-form-urlencoded request bodies.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple encoding):
 * ```ts
 * const encoding: Encoding = {
 *   contentType: "image/png"
 * };
 * ```
 */
export interface Encoding extends Extension {
  /**
   * The Content-Type for encoding a specific property. Default value depends on the property type.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#encoding-object  | OpenAPI 3.0.4 Encoding Object - contentType} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#encoding-object  | OpenAPI 3.0.3 Encoding Object - contentType} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#encoding-object  | OpenAPI 3.0.2 Encoding Object - contentType} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#encoding-object  | OpenAPI 3.0.1 Encoding Object - contentType} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object  | OpenAPI 3.0.0 Encoding Object - contentType} |
   * @property `contentType` - Optional The Content-Type for encoding a specific property
   *
   * @example "image/png"
   * @example "application/json"
   * @example "text/plain"
   */
  contentType?: string;

  /**
   * A map allowing additional information to be provided as headers, for example
   * Content-Disposition. Content-Type is described separately and SHALL be ignored in this section.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#encoding-object  | OpenAPI 3.0.4 Encoding Object - headers} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#encoding-object  | OpenAPI 3.0.3 Encoding Object - headers} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#encoding-object  | OpenAPI 3.0.2 Encoding Object - headers} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#encoding-object  | OpenAPI 3.0.1 Encoding Object - headers} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object  | OpenAPI 3.0.0 Encoding Object - headers} |
   * @property `headers` - Optional A map allowing additional information to be provided as headers
   *
   * @example { "Content-Disposition": { schema: { type: "string" } } }
   */
  headers?: Record<string, Header | Reference>;

  /**
   * Describes how a specific property value will be serialized depending on its type.
   * See Parameter Object for details on the style property. The behavior follows the
   * same values as query parameters, including default values.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#encoding-object  | OpenAPI 3.0.4 Encoding Object - style} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#encoding-object  | OpenAPI 3.0.3 Encoding Object - style} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#encoding-object  | OpenAPI 3.0.2 Encoding Object - style} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#encoding-object  | OpenAPI 3.0.1 Encoding Object - style} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object  | OpenAPI 3.0.0 Encoding Object - style} |
   * @property `style` - Optional Describes how a specific property value will be serialized
   *
   * @example "form"
   * @example "simple"
   */
  style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";

  /**
   * When this is true, property values of type array or object generate separate parameters
   * for each value of the array, or key-value-pair of the map. For other types of properties
   * this property has no effect. When style is form, the default value is true.
   * For all other styles, the default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#encoding-object  | OpenAPI 3.0.4 Encoding Object - explode} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#encoding-object  | OpenAPI 3.0.3 Encoding Object - explode} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#encoding-object  | OpenAPI 3.0.2 Encoding Object - explode} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#encoding-object  | OpenAPI 3.0.1 Encoding Object - explode} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object  | OpenAPI 3.0.0 Encoding Object - explode} |
   * @property `explode` - Optional When this is true, property values of type array or object generate separate parameters
   *
   * @example true
   * @example false
   */
  explode?: boolean;

  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by
   * RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#encoding-object  | OpenAPI 3.0.4 Encoding Object - allowReserved} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#encoding-object  | OpenAPI 3.0.3 Encoding Object - allowReserved} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#encoding-object  | OpenAPI 3.0.2 Encoding Object - allowReserved} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#encoding-object  | OpenAPI 3.0.1 Encoding Object - allowReserved} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#encoding-object  | OpenAPI 3.0.0 Encoding Object - allowReserved} |
   * @property `allowReserved` - Optional Determines whether the parameter value SHOULD allow reserved characters
   *
   * @example true
   * @example false
   */
  allowReserved?: boolean;
}

/**
 * -----
 * Response Object
 * -----
 *
 * Describes a single response from an API Operation, including design-time, static
 * links to operations based on the response.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object | OpenAPI 3.0.0 Response} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#response-object | OpenAPI 3.0.1 Response} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#response-object | OpenAPI 3.0.2 Response} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#response-object | OpenAPI 3.0.3 Response} |
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#response-object | OpenAPI 3.0.4 Response} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `description` - Required A short description of the response
 * @property `headers` - Optional Maps a header name to its definition
 * @property `content` - Optional A map containing descriptions of potential response payloads
 * @property `links` - Optional A map of operations links that can be followed from the response
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `description` field is required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple response):
 * ```ts
 * const response: Response = {
 *   description: "A list of users",
 *   content: {
 *     "application/json": {
 *       schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
 *     }
 *   }
 * };
 * ```
 */
export interface Response extends Extension {
  /**
   * A short description of the response. CommonMark syntax MAY be used for rich text representation.
   * This field is required.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#response-object  | OpenAPI 3.0.4 Response Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#response-object  | OpenAPI 3.0.3 Response Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#response-object  | OpenAPI 3.0.2 Response Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#response-object  | OpenAPI 3.0.1 Response Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object  | OpenAPI 3.0.0 Response Object - description} |
   * @property `description` - Required A short description of the response
   *
   * @example "User successfully retrieved"
   * @example "Bad request - invalid input parameters"
   * @example "Internal server error"
   */
  description: string;

  /**
   * Maps a header name to its definition. RFC7230 states header names are case insensitive.
   * If a response header is defined with the name "Content-Type", it SHALL be ignored.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#response-object  | OpenAPI 3.0.4 Response Object - headers} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#response-object  | OpenAPI 3.0.3 Response Object - headers} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#response-object  | OpenAPI 3.0.2 Response Object - headers} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#response-object  | OpenAPI 3.0.1 Response Object - headers} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object  | OpenAPI 3.0.0 Response Object - headers} |
   * @property `headers` - Optional Maps a header name to its definition
   *
   * @example { "X-RateLimit-Limit": { schema: { type: "integer" } } }
   */
  headers?: Record<string, Header | Reference>;

  /**
   * A map containing descriptions of potential response payloads. The key is a media type
   * or media type range and the value describes it. For responses that match multiple keys,
   * only the most specific key is applicable.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#response-object  | OpenAPI 3.0.4 Response Object - content} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#response-object  | OpenAPI 3.0.3 Response Object - content} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#response-object  | OpenAPI 3.0.2 Response Object - content} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#response-object  | OpenAPI 3.0.1 Response Object - content} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object  | OpenAPI 3.0.0 Response Object - content} |
   * @property `content` - Optional A map containing descriptions of potential response payloads
   *
   * @example { "application/json": { schema: { $ref: "#/components/schemas/User" } } }
   */
  content?: Record<string, MediaType>;

  /**
   * A map of operations links that can be followed from the response. The key of the map
   * is a short name for the link, following the naming constraints of the names for Component Objects.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#response-object  | OpenAPI 3.0.4 Response Object - links} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#response-object  | OpenAPI 3.0.3 Response Object - links} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#response-object  | OpenAPI 3.0.2 Response Object - links} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#response-object  | OpenAPI 3.0.1 Response Object - links} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#response-object  | OpenAPI 3.0.0 Response Object - links} |
   * @property `links` - Optional A map of operations links that can be followed from the response
   *
   * @example { "GetUserByUserId": { operationId: "getUserById", parameters: { userId: "$response.body#/id" } } }
   */
  links?: Record<string, Link | Reference>;
}

/**
 * -----
 * Header Object
 * -----
 *
 * The Header Object follows the structure of the Parameter Object with the following changes:
 * 1. name MUST NOT be specified, it is given in the corresponding headers map.
 * 2. in MUST NOT be specified, it is implicitly in header.
 * 3. All traits that are affected by the location MUST be applicable to a location of header.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object | OpenAPI 3.0.0 Header} |
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple header):
 * ```ts
 * const header: Header = {
 *   description: "The number of allowed requests in the current period",
 *   schema: { type: "integer" }
 * };
 * ```
 */
export interface Header extends Extension {
  /**
   * A brief description of the header. CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - description} |
   * @property `description` - Optional A brief description of the header
   *
   * @example "Rate limit for the current period"
   * @example "Content type of the response"
   */
  description?: string;

  /**
   * Determines whether this header is mandatory. The property MAY be included and its default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - required} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - required} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - required} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - required} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - required} |
   * @property `required` - Optional Determines whether this header is mandatory
   *
   * @example true
   * @example false
   */
  required?: boolean;

  /**
   * Specifies that a header is deprecated and SHOULD be transitioned out of usage.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - deprecated} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - deprecated} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - deprecated} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - deprecated} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - deprecated} |
   * @property `deprecated` - Optional Specifies that a header is deprecated and SHOULD be transitioned out of usage
   *
   * @example true
   * @example false
   */
  deprecated?: boolean;

  /**
   * Sets the ability to pass empty-valued headers. This is valid only for headers
   * and allows sending a header with an empty value. Default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - allowEmptyValue} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - allowEmptyValue} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - allowEmptyValue} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - allowEmptyValue} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - allowEmptyValue} |
   * @property `allowEmptyValue` - Optional Sets the ability to pass empty-valued headers
   *
   * @example true
   * @example false
   */
  allowEmptyValue?: boolean;

  /**
   * Describes how the header value will be serialized. The default value is simple.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - style} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - style} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - style} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - style} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - style} |
   * @property `style` - Optional Describes how the header value will be serialized
   *
   * @example "simple"
   */
  style?: "simple";

  /**
   * When this is true, header values of type array or object generate separate headers
   * for each value of the array or key-value pair of the map. For other types of headers
   * this property has no effect. The default value is false.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - explode} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - explode} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - explode} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - explode} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - explode} |
   * @property `explode` - Optional When this is true, header values of type array or object generate separate headers
   *
   * @example true
   * @example false
   */
  explode?: boolean;

  /**
   * The schema defining the type used for the header.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - schema} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - schema} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - schema} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - schema} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - schema} |
   * @property `schema` - Optional The schema defining the type used for the header
   *
   * @example { type: "integer" }
   * @example { type: "string" }
   */
  schema?: Schema | Reference;

  /**
   * Example of the media type. The example SHOULD match the specified schema and encoding
   * properties if present. The example object is mutually exclusive of the examples object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - example} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - example} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - example} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - example} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - example} |
   * @property `example` - Optional Example of the media type
   *
   * @example "example-value"
   * @example 42
   */
  example?: unknown;

  /**
   * Examples of the media type. Each example SHOULD contain a value in the correct format
   * as specified in the header encoding. The examples object is mutually exclusive of
   * the example object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - examples} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - examples} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - examples} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - examples} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - examples} |
   * @property `examples` - Optional Examples of the media type
   *
   * @example { "header1": { summary: "A header example", value: "value123" } }
   */
  examples?: Record<string, Example | Reference>;

  /**
   * A map containing the representations for the header. The key is the media type
   * and the value describes it. The map MUST only contain one entry.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#header-object  | OpenAPI 3.0.4 Header Object - content} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#header-object  | OpenAPI 3.0.3 Header Object - content} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#header-object  | OpenAPI 3.0.2 Header Object - content} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#header-object  | OpenAPI 3.0.1 Header Object - content} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#header-object  | OpenAPI 3.0.0 Header Object - content} |
   * @property `content` - Optional A map containing the representations for the header
   *
   * @example { "application/json": { schema: { type: "object" } } }
   */
  content?: Record<string, MediaType>;
}

/**
 * -----
 * Callback Object
 * -----
 *
 * A map of possible out-of band callbacks related to the parent operation.
 * Each value in the map is a Path Item Object that describes a set of requests
 * that may be initiated by the API provider and the expected responses.
 *
 * The key that identifies the Path Item Object is a runtime expression that can be
 * evaluated in the context of a runtime HTTP request/response to identify the URL
 * to be used for the callback request. A simple example might be `$request.body#/id`.
 * A more complex example that uses a number of runtime expressions is
 * `$request.body#/url~1callback`.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#callback-object | OpenAPI 3.0.4 Callback} |
 * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#callback-object | OpenAPI 3.0.3 Callback} |
 * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#callback-object | OpenAPI 3.0.2 Callback} |
 * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#callback-object | OpenAPI 3.0.1 Callback} |
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#callback-object | OpenAPI 3.0.0 Callback} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `{expression}` - A runtime expression that evaluates to a URL for the callback
 * @property `PathItem` - The Path Item Object that describes the callback request
 *
 * @note
 * The key is a runtime expression that can be evaluated in the context of a runtime
 * HTTP request/response to identify the URL to be used for the callback request.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple callback):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/callbackUrl}": {
 *     post: {
 *       requestBody: {
 *         content: {
 *           "application/json": {
 *             schema: { $ref: "#/components/schemas/SomePayload" }
 *           }
 *         }
 *       },
 *       responses: {
 *         "200": {
 *           description: "webhook successfully processed"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (callback with multiple operations):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/callbackUrl}": {
 *     post: {
 *       summary: "Callback for successful operation",
 *       requestBody: {
 *         content: {
 *           "application/json": {
 *             schema: { $ref: "#/components/schemas/SuccessPayload" }
 *           }
 *         }
 *       },
 *       responses: {
 *         "200": { description: "Callback processed successfully" }
 *       }
 *     },
 *     get: {
 *       summary: "Callback for status check",
 *       responses: {
 *         "200": { description: "Status retrieved" }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (callback with complex expression):
 * ```ts
 * const callback: Callback = {
 *   "{$request.body#/url~1callback}": {
 *     post: {
 *       requestBody: {
 *         content: {
 *           "application/json": {
 *             schema: { $ref: "#/components/schemas/CallbackPayload" }
 *           }
 *         }
 *       },
 *       responses: {
 *         "200": { description: "Callback received" }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Callback = Record<string, PathItem>;

/**
 * -----
 * Link Object
 * -----
 *
 * The Link object represents a possible design-time link for a response.
 * The presence of a link does not guarantee the caller's ability to successfully invoke it,
 * rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object | OpenAPI 3.0.0 Link} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `operationRef` - Optional A relative or absolute reference to an OAS operation
 * @property `operationId` - Optional The name of an existing, resolvable OAS operation
 * @property `parameters` - Optional A map representing parameters to pass to an operation
 * @property `requestBody` - Optional A literal value or expression to use as a request body
 * @property `description` - Optional A description of the link
 * @property `server` - Optional A server object to be used by the target operation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * A linked operation MUST be identified using either an operationRef or operationId.
 *
 * -----
 * Examples
 * -----
 *
 * @example (link with operationId):
 * ```ts
 * const link: Link = {
 *   operationId: "getUserById",
 *   parameters: {
 *     userId: "$response.body#/id"
 *   }
 * };
 * ```
 */
export interface Link extends Extension {
  /**
   * A relative or absolute reference to an OAS operation. This field is mutually
   * exclusive of the operationId field, and MUST point to an Operation Object.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - operationRef} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - operationRef} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - operationRef} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - operationRef} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - operationRef} |
   * @property `operationRef` - Optional A relative or absolute reference to an OAS operation
   *
   * @example "#/paths/~12.0~1repositories~1{username}/get"
   * @example "https://na2.gigantic-server.com/#/paths/~12.0~1repositories~1{username}/get"
   */
  operationRef?: string;

  /**
   * The name of an existing, resolvable OAS operation, as defined with a unique operationId.
   * This field is mutually exclusive of the operationRef field.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - operationId} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - operationId} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - operationId} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - operationId} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - operationId} |
   * @property `operationId` - Optional The name of an existing, resolvable OAS operation
   *
   * @example "getUserById"
   * @example "createPet"
   */
  operationId?: string;

  /**
   * A map representing parameters to pass to an operation as specified with operationId
   * or identified via operationRef. The key is the parameter name to be used, whereas
   * the value can be a constant or an expression to be evaluated and passed to the linked operation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - parameters} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - parameters} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - parameters} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - parameters} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - parameters} |
   * @property `parameters` - Optional A map representing parameters to pass to an operation
   *
   * @example { userId: "$response.body#/id" }
   * @example { limit: 10 }
   */
  parameters?: Record<string, unknown>;

  /**
   * A literal value or expression to use as a request body when calling the target operation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - requestBody} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - requestBody} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - requestBody} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - requestBody} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - requestBody} |
   * @property `requestBody` - Optional A literal value or expression to use as a request body
   *
   * @example { name: "John Doe" }
   * @example "$request.body#/user"
   */
  requestBody?: unknown;

  /**
   * A description of the link. CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - description} |
   * @property `description` - Optional A description of the link
   *
   * @example "Get user by ID"
   * @example "Create a new pet"
   */
  description?: string;

  /**
   * A server object to be used by the target operation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#link-object  | OpenAPI 3.0.4 Link Object - server} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#link-object  | OpenAPI 3.0.3 Link Object - server} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#link-object  | OpenAPI 3.0.2 Link Object - server} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#link-object  | OpenAPI 3.0.1 Link Object - server} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#link-object  | OpenAPI 3.0.0 Link Object - server} |
   * @property `server` - Optional A server object to be used by the target operation
   *
   * @example { url: "https://api.example.com/v1" }
   */
  server?: Server;
}

/**
 * -----
 * Example Object
 * -----
 *
 * In all cases, the example value is expected to be compatible with the type schema
 * of its associated value. Tooling implementations MAY choose to validate compatibility
 * automatically, and reject the example value(s) if incompatible.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object | OpenAPI 3.0.0 Example} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `summary` - Optional Short description for the example
 * @property `description` - Optional Long description for the example
 * @property `value` - Optional Embedded literal example
 * @property `externalValue` - Optional A URL that points to the literal example
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `value` field and `externalValue` field are mutually exclusive.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple example):
 * ```ts
 * const example: Example = {
 *   summary: "A user example",
 *   value: { name: "John Doe", email: "john@example.com" }
 * };
 * ```
 */
export interface Example extends Extension {
  /**
   * Short description for the example.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#example-object  | OpenAPI 3.0.4 Example Object - summary} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#example-object  | OpenAPI 3.0.3 Example Object - summary} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#example-object  | OpenAPI 3.0.2 Example Object - summary} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#example-object  | OpenAPI 3.0.1 Example Object - summary} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object  | OpenAPI 3.0.0 Example Object - summary} |
   * @property `summary` - Optional Short description for the example
   *
   * @example "A user example"
   * @example "An error response"
   */
  summary?: string;

  /**
   * Long description for the example. CommonMark syntax MAY be used for rich text representation.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#example-object  | OpenAPI 3.0.4 Example Object - description} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#example-object  | OpenAPI 3.0.3 Example Object - description} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#example-object  | OpenAPI 3.0.2 Example Object - description} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#example-object  | OpenAPI 3.0.1 Example Object - description} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object  | OpenAPI 3.0.0 Example Object - description} |
   * @property `description` - Optional Long description for the example
   *
   * @example "A complete user object with all fields populated"
   * @example "An error response when the user is not found"
   */
  description?: string;

  /**
   * Embedded literal example. The value field and externalValue field are mutually exclusive.
   * To represent examples of media types that cannot naturally represented in JSON or YAML,
   * use a string value to contain the example, escaping where necessary.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#example-object  | OpenAPI 3.0.4 Example Object - value} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#example-object  | OpenAPI 3.0.3 Example Object - value} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#example-object  | OpenAPI 3.0.2 Example Object - value} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#example-object  | OpenAPI 3.0.1 Example Object - value} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object  | OpenAPI 3.0.0 Example Object - value} |
   * @property `value` - Optional Embedded literal example
   *
   * @example { name: "John Doe", email: "john@example.com" }
   * @example "example string value"
   */
  value?: unknown;

  /**
   * A URL that points to the literal example. This provides the capability to reference
   * examples that cannot easily be included in JSON or YAML documents. The value field
   * and externalValue field are mutually exclusive.
   * *
   * | Version | Reference |
   * |---|-----|
   * | 3.0.4   | {@link https://spec.openapis.org/oas/v3.0.4#example-object  | OpenAPI 3.0.4 Example Object - externalValue} |
   * | 3.0.3   | {@link https://spec.openapis.org/oas/v3.0.3#example-object  | OpenAPI 3.0.3 Example Object - externalValue} |
   * | 3.0.2   | {@link https://spec.openapis.org/oas/v3.0.2#example-object  | OpenAPI 3.0.2 Example Object - externalValue} |
   * | 3.0.1   | {@link https://spec.openapis.org/oas/v3.0.1#example-object  | OpenAPI 3.0.1 Example Object - externalValue} |
   * | 3.0.0   | {@link https://spec.openapis.org/oas/v3.0.0#example-object  | OpenAPI 3.0.0 Example Object - externalValue} |
   * @property `externalValue` - Optional A URL that points to the literal example
   *
   * @example "https://example.com/examples/user-example.json"
   * @example "https://example.com/examples/error-example.xml"
   */
  externalValue?: string;
}
