import type { Extension } from "./extensions"

// Import all the major component types
import type { Info } from "./info"
import type { 
  PathItemObject, 
  Operation, 
  Parameter, 
  Response, 
  Header, 
  Items 
} from "./paths"
import type { 
  Schema, 
  SwaggerSchema, 
  XML, 
  Definitions, 
  ParametersDefinitions, 
  ResponsesDefinitions 
} from "./schema"
import type { 
  SecurityScheme, 
  SecurityRequirement, 
  Scopes, 
  SecurityDefinitions 
} from "./security"
import type { Tag } from "./tags"
import type { ExternalDocumentation } from "./external-documentation"
import type { Reference } from "./references"
import type { Example } from "./example"
import type { Paths } from "./paths"

/**
 * Root Swagger 2.0 Schema (Swagger Object)
 * 
 * This is the root document object of the OpenAPI specification. It contains
 * all the metadata about the API being described. This object is based on the
 * JSON Schema Specification Draft 4 and uses a predefined subset of it.
 * 
 * The Swagger Object is the root of the specification document and contains
 * all the information about the API, including its metadata, available paths,
 * data models, security schemes, and more.
 * 
 * @see https://swagger.io/specification/v2/#swagger-object
 * @example
 * ```typescript
 * const swagger: Specification = {
 *   swagger: "2.0",
 *   info: {
 *     title: "Swagger Sample App",
 *     description: "This is a sample server Petstore server.",
 *     version: "1.0.1"
 *   },
 *   host: "petstore.swagger.io",
 *   basePath: "/v2",
 *   schemes: ["https"],
 *   paths: {
 *     "/pets": {
 *       get: {
 *         summary: "List all pets",
 *         responses: {
 *           "200": {
 *             description: "A list of pets",
 *             schema: {
 *               type: "array",
 *               items: { $ref: "#/definitions/Pet" }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   },
 *   definitions: {
 *     Pet: {
 *       type: "object",
 *       properties: {
 *         id: { type: "integer", format: "int64" },
 *         name: { type: "string" },
 *         tag: { type: "string" }
 *       }
 *     }
 *   }
 * }
 * ```
 */
export type Specification = {
  /** 
   * Specifies the Swagger specification version being used. 
   * Must be "2.0" for this specification.
   */
  swagger: "2.0"
  
  /** 
   * Provides metadata about the API. The metadata can be used by the clients 
   * if needed, and can be presented in the Swagger-UI for convenience.
   */
  info: Info
  
  /** 
   * The host (name or IP) serving the API. This MUST be the host only and does 
   * not include the scheme nor sub-paths. It MAY include a port. If the host 
   * is not included, the host serving the documentation is to be used 
   * (including the port). The host does not support path templating.
   * 
   * @example "api.example.com"
   * @example "api.example.com:8080"
   */
  host?: string
  
  /** 
   * The base path on which the API is served, which is relative to the host. 
   * If it is not included, the API is served directly under the host. 
   * The value MUST start with a leading slash (/). The basePath does not 
   * support path templating.
   * 
   * @example "/v1"
   * @example "/api/v2"
   */
  basePath?: string
  
  /** 
   * The transfer protocol of the API. Values MUST be from the list: 
   * "http", "https", "ws", "wss". If the schemes is not included, the default 
   * scheme to be used is the one used to access the specification.
   * 
   * @example ["https", "http"]
   * @example ["wss"]
   */
  schemes?: Array<"http" | "https" | "ws" | "wss">
  
  /** 
   * A list of MIME types the APIs can consume. This is global to all APIs 
   * but can be overridden on specific API calls. Value MUST be as described 
   * under Mime Types.
   * 
   * @example ["application/json"]
   * @example ["application/xml", "application/json"]
   */
  consumes?: string[]
  
  /** 
   * A list of MIME types the APIs can produce. This is global to all APIs 
   * but can be overridden on specific API calls. Value MUST be as described 
   * under Mime Types.
   * 
   * @example ["application/json"]
   * @example ["application/xml", "application/json"]
   */
  produces?: string[]
  
  /** 
   * The available paths and operations for the API. This is the root of the 
   * Path Item Object. It does not define a path or a basePath, they are defined 
   * in the Paths Object. A relative path to an individual endpoint. The field 
   * name MUST begin with a slash. The path is appended to the basePath in order 
   * to construct the full URL. Path templating is allowed.
   * 
   * @example { "/users": { get: { ... } } }
   * @example { "/users/{id}": { get: { ... } } }
   */
  paths: Paths
  
  /** 
   * An object to hold data types produced and consumed by operations. 
   * These data types can be primitives, arrays or models.
   * 
   * @example { "User": { type: "object", properties: { ... } } }
   */
  definitions?: Definitions
  
  /** 
   * An object to hold parameters that can be used across operations. 
   * This property does not define global parameters for all operations.
   * 
   * @example { "pageParam": { name: "page", in: "query", type: "integer" } }
   */
  parameters?: ParametersDefinitions
  
  /** 
   * An object to hold responses that can be used across operations. 
   * This property does not define global responses for all operations.
   * 
   * @example { "NotFound": { description: "Entity not found" } }
   */
  responses?: ResponsesDefinitions
  
  /** 
   * Security scheme definitions that can be used by the operations. 
   * Supported schemes are basic authentication, an API key (either as a header 
   * or as a query parameter) and OAuth2's common flows (implicit, password, 
   * application and access code).
   * 
   * @example { "api_key": { type: "apiKey", in: "header", name: "X-API-Key" } }
   */
  securityDefinitions?: SecurityDefinitions
  
  /** 
   * A declaration of which security schemes are applied for the API as a whole. 
   * The list of values describes alternative security schemes that can be used 
   * (that is, there is a logical OR between the security requirements). 
   * Individual operations can override this definition.
   * 
   * @example [{ "api_key": [] }]
   * @example [{ "oauth2": ["read", "write"] }]
   */
  security?: SecurityRequirement[]
  
  /** 
   * A list of tags used by the specification with additional metadata. 
   * The order of the tags can be used to reflect on their order by the 
   * parsing tools. Not all tags that are used by the Operation Object must 
   * be declared. The tags that are not declared may be organized randomly 
   * or based on the tools' logic. Each tag name in the list MUST be unique.
   * 
   * @example [{ name: "users", description: "User management" }]
   */
  tags?: Tag[]
  
  /** 
   * Additional external documentation.
   * 
   * @example { description: "Find out more about our API", url: "https://example.com/docs" }
   */
  externalDocs?: ExternalDocumentation
} & Extension
