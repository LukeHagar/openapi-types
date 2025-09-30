import type { Extension } from "../extensions";
import type { XMLObject } from "../xml";

/**
 * -----
 * File Schema
 * -----
 *
 * Schema for file data types in Swagger 2.0.
 *
 * File schemas represent file uploads and downloads in APIs. This is a Swagger 2.0
 * specific data type that extends the JSON Schema specification to support file
 * operations. File schemas are used by Parameter and Response objects to indicate
 * that the data represents a file rather than a structured data type.
 *
 * File schemas are commonly used for file upload endpoints, document processing,
 * image handling, and other file-based operations. They provide clear indication
 * to API consumers that file data is expected or returned.
 *
 * | Version | Reference |
 * |---|-----|
 * | 2.0     | {@link https://swagger.io/specification/v2/#data-types | Swagger 2.0 Data Types} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#parameter-object | Swagger 2.0 Parameter Object} |
 * | 2.0     | {@link https://swagger.io/specification/v2/#response-object | Swagger 2.0 Response Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `type` - Must be "file" for file schemas.
 * @property `description` - A short description of the file schema.
 * @property `title` - A short title for the file schema.
 * @property `example` - Example file information or description.
 *
 * @note
 * File schemas are specific to Swagger 2.0 and are not part of the JSON Schema
 * specification. They inherit common properties from BaseSchemaProperties.
 * When used in parameters, the consumes property should specify appropriate
 * MIME types like "multipart/form-data" or "application/x-www-form-urlencoded".
 *
 * -----
 * Examples
 * -----
 *
 * @example (file upload parameter):
 * ```ts
 * const fileUploadSchema: FileSchema = {
 *   type: "file",
 *   description: "Image file to upload",
 *   example: "user-avatar.jpg"
 * };
 * ```
 *
 * @example (document upload parameter):
 * ```ts
 * const documentSchema: FileSchema = {
 *   type: "file",
 *   description: "PDF document to process",
 *   example: "contract.pdf"
 * };
 * ```
 *
 * @example (file download response):
 * ```ts
 * const fileDownloadSchema: FileSchema = {
 *   type: "file",
 *   description: "Generated report file",
 *   example: "monthly-report.xlsx"
 * };
 * ```
 *
 * @example (image file parameter):
 * ```ts
 * const imageSchema: FileSchema = {
 *   type: "file",
 *   description: "Profile picture image",
 *   example: "profile-photo.png"
 * };
 * ```
 */
export interface FileSchema extends Extension {
  /**
   * The type of the schema. Must be "file" for file schemas.
   *
   * This property is required and must be set to "file" to indicate
   * that this schema represents file data. This is a Swagger 2.0 specific
   * type that extends JSON Schema.
   *
   * @example "file"
   */
  type: "file";

  /**
   * The extending format for the previously mentioned type.
   * See Swagger 2.0 Data Type Formats for further details.
   *
   * Formats provide additional semantic information about the data type,
   * enabling more precise validation and better tooling support. Swagger 2.0
   * defines several standard formats, but custom formats are also allowed.
   *
   * @see {@link https://swagger.io/specification/v2/#dataTypeFormat | Swagger 2.0 Data Type Formats}
   *
   * @example "int32"
   * @example "date"
   * @example "email"
   * @example "uuid"
   */
  format?: string;

  /**
   * A short description of the schema. GFM syntax can be used for rich text representation.
   *
   * This description should provide clear information about what the schema
   * represents and how it should be used. It's commonly displayed in API
   * documentation and code generation tools.
   *
   * @example "A user object containing basic information"
   * @example "Email address in RFC 5322 format"
   */
  description?: string;

  /**
   * A short title for the schema.
   *
   * The title provides a human-readable name for the schema, often used
   * in documentation and UI displays. It should be concise but descriptive.
   *
   * @example "User"
   * @example "Pet"
   * @example "Order"
   */
  title?: string;

  /**
   * Declares the value of the schema that the server will use if none is provided.
   * Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object.
   *
   * This is a Swagger 2.0 specific requirement that differs from JSON Schema.
   * The default value must be valid according to the schema's type and constraints.
   *
   * @example "defaultValue"
   * @example 10
   * @example { name: "John", age: 30 }
   * @example ["item1", "item2"]
   */
  default?: unknown;

  /**
   * An instance validates successfully against this keyword if its value is equal to one of the elements in this keyword's array value.
   *
   * @see {@link https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1 | JSON Schema Validation - enum}
   *
   * @example ["option1", "option2", "option3"]
   * @example ["red", "green", "blue"]
   * @example [1, 2, 3, 4, 5]
   */
  enum?: unknown[];

  /**
   * A free-form property to include an example of an instance for this schema.
   *
   * Examples help developers understand how to use the schema and what kind
   * of data is expected. They are commonly used by documentation generators
   * and API testing tools.
   *
   * @example { name: "Puma", id: 1 }
   * @example "example string value"
   * @example 42
   * @example ["item1", "item2"]
   */
  example?: unknown;

  /**
   * XML representation metadata for the schema.
   * Allows for fine-tuned XML model definitions.
   *
   * @example { name: "fileData", attribute: false }
   */
  xml?: XMLObject;
}
