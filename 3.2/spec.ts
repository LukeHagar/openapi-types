import type { Components } from "./components";
import type { Extension } from "./extensions";
import type { ExternalDocumentation } from "./externalDocs";
import type { Info } from "./info";
import type { Paths } from "./paths";
import type { SecurityRequirement } from "./security";
import type { Server } from "./servers";
import type { Tag } from "./tags";
import type { Webhooks } from "./webhooks";

/**
 * -----
 * OpenAPI Specification
 * -----
 *
 * This is the root object of the OpenAPI document. It contains all the information
 * needed to describe an API, including metadata, servers, paths, components, and more.
 *
 * The OpenAPI Specification (OAS) defines a standard, language-agnostic interface
 * to RESTful APIs which allows both humans and computers to discover and understand
 * the capabilities of the service without access to source code, documentation, or
 * through network traffic inspection.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `openapi` - Required The version number of the OpenAPI Specification
 * @property `info` - Required Provides metadata about the API
 * @property `jsonSchemaDialect` - Optional The default value for the $schema keyword within Schema Objects
 * @property `servers` - Optional An array of Server Objects
 * @property `paths` - Optional The available paths and operations for the API
 * @property `webhooks` - Optional The incoming webhooks that MAY be received as part of this API
 * @property `components` - Optional An element to hold various schemas for the document
 * @property `security` - Optional A declaration of which security mechanisms can be used across the API
 * @property `tags` - Optional A list of tags used by the document with additional metadata
 * @property `externalDocs` - Optional Additional external documentation
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * The `openapi` and `info` fields are required.
 *
 * -----
 * Examples
 * -----
 *
 * @example (minimal specification):
 * ```ts
 * const spec: Specification = {
 *   openapi: "3.2.0",
 *   info: {
 *     title: "Pet Store API",
 *     version: "1.0.0"
 *   }
 * };
 * ```
 *
 * @example (complete specification):
 * ```ts
 * const spec: Specification = {
 *   openapi: "3.2.0",
 *   info: {
 *     title: "Pet Store API",
 *     summary: "A sample API that uses a petstore as an example",
 *     description: "This is a sample server Petstore server.",
 *     termsOfService: "http://example.com/terms/",
 *     contact: {
 *       name: "API Support",
 *       url: "http://www.example.com/support",
 *       email: "support@example.com"
 *     },
 *     license: {
 *       name: "Apache 2.0",
 *       url: "https://www.apache.org/licenses/LICENSE-2.0.html"
 *     },
 *     version: "1.0.0"
 *   },
 *   servers: [
 *     {
 *       url: "https://api.example.com/v1",
 *       description: "The production API server"
 *     }
 *   ],
 *   paths: {
 *     "/pets": {
 *       "get": {
 *         "summary": "List all pets",
 *         "responses": {
 *           "200": {
 *             "description": "A list of pets"
 *           }
 *         }
 *       }
 *     }
 *   },
 *   webhooks: {
 *     "newPet": {
 *       "post": {
 *         "requestBody": {
 *           "description": "Information about a new pet"
 *         },
 *         "responses": {
 *           "200": {
 *             "description": "Webhook processed successfully"
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
 *           name: { type: "string" }
 *         }
 *       }
 *     }
 *   },
 *   tags: [
 *     {
 *       name: "pets",
 *       description: "Pet store operations"
 *     }
 *   ]
 * };
 * ```
 */
export interface Specification extends Extension {
  /**
   * This string MUST be the version number of the OpenAPI Specification that the
   * OpenAPI document uses. The `openapi` field SHOULD be used by tooling to interpret
   * the OpenAPI document. This is not related to the API `info.version` string.
   * This field is required.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - openapi} |
   *
   * @property `openapi` - Required The version number of the OpenAPI Specification
   *
   * @example "3.2.0"
   */
  openapi: string;

  /**
   * Provides metadata about the API. The metadata MAY be used by tooling as required.
   * This field is required.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - info} |
   *
   * @property `info` - Required Provides metadata about the API
   *
   * @example { title: "Pet Store API", version: "1.0.0" }
   */
  info: Info;

  /**
   * The default value for the `$schema` keyword within Schema Objects contained
   * within this OAS document. This MUST be in the form of a URI.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - jsonSchemaDialect} |
   *
   * @property `jsonSchemaDialect` - Optional The default value for the $schema keyword within Schema Objects
   *
   * @example "https://json-schema.org/draft/2020-12/schema"
   */
  jsonSchemaDialect?: string;

  /**
   * An array of Server Objects, which provide connectivity information to a target
   * server. If the `servers` property is not provided, or is an empty array, the
   * default value would be a Server Object with a `url` value of `/`.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - servers} |
   *
   * @property `servers` - Optional An array of Server Objects
   *
   * @example [{ url: "https://api.example.com/v1", description: "The production API server" }]
   */
  servers?: Server[];

  /**
   * The available paths and operations for the API.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - paths} |
   *
   * @property `paths` - Optional The available paths and operations for the API
   *
   * @example { "/pets": { "get": { "summary": "List all pets", "responses": { "200": { "description": "A list of pets" } } } } }
   */
  paths?: Paths;

  /**
   * The incoming webhooks that MAY be received as part of this API and that the
   * API consumer MAY choose to implement. Closely related to the `callbacks` feature,
   * this section describes requests initiated other than by an API call, for example
   * by an out of band registration.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - webhooks} |
   *
   * @property `webhooks` - Optional The incoming webhooks that MAY be received as part of this API
   *
   * @example { "newPet": { "post": { "requestBody": { "description": "Information about a new pet" } } } }
   */
  webhooks?: Webhooks;

  /**
   * An element to hold various schemas for the document.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - components} |
   *
   * @property `components` - Optional An element to hold various schemas for the document
   *
   * @example { schemas: { Pet: { type: "object", properties: { id: { type: "integer" } } } } }
   */
  components?: Components;

  /**
   * A declaration of which security mechanisms can be used across the API. The list
   * of values includes alternative security requirement objects that can be used.
   * Only one of the security requirement objects need to be satisfied to authorize
   * a request. Individual operations can override this definition.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - security} |
   *
   * @property `security` - Optional A declaration of which security mechanisms can be used across the API
   *
   * @example [{ "api_key": [] }]
   */
  security?: SecurityRequirement[];

  /**
   * A list of tags used by the document with additional metadata. The order of the
   * tags can be used to reflect on their order by the parsing tools. Not all tags
   * that are used by the Operation Object must be declared. The tags that are not
   * declared MAY be organized randomly or based on the tools' logic. Each tag name
   * in the list MUST be unique.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - tags} |
   *
   * @property `tags` - Optional A list of tags used by the document with additional metadata
   *
   * @example [{ name: "pets", description: "Pet store operations" }]
   */
  tags?: Tag[];

  /**
   * Additional external documentation.
   *
   * | Version | Reference |
   * |---|-----|
   * | 3.2.0   | {@link https://spec.openapis.org/oas/v3.2.0#openapi-object | OpenAPI 3.2.0 OpenAPI Object - externalDocs} |
   *
   * @property `externalDocs` - Optional Additional external documentation
   *
   * @example { description: "Find out more about our API", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation;
}
