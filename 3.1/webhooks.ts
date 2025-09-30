import type { Extension } from "./extensions";
import type { PathItem } from "./paths";
import type { Reference } from "./references";

/**
 * -----
 * Webhooks Object
 * -----
 *
 * The incoming webhooks that MAY be received as part of this API and that the
 * API consumer MAY choose to implement. Closely related to the `callbacks` feature,
 * this section describes requests initiated other than by an API call, for example
 * by an out of band registration.
 *
 * The key name is a unique string to refer to each webhook, while the (optionally
 * referenced) Path Item Object describes a request that may be initiated by the
 * API provider and the expected responses.
 *
 * | Version | Reference |
 * |---|-----|
 * | 3.1.1   | {@link https://spec.openapis.org/oas/v3.1.1#webhooks-object | OpenAPI 3.1.1 Webhooks Object} |
 * | 3.1.0   | {@link https://spec.openapis.org/oas/v3.1.0#webhooks-object | OpenAPI 3.1.0 Webhooks Object} |
 *
 * -----
 * Fields
 * -----
 *
 * @property `{webhookName}` - A unique string to refer to each webhook
 * @property `PathItem` - The Path Item Object describing the webhook request
 * @property `Reference` - A reference to a Path Item Object
 * @property `x-${string}` - Specification Extensions
 *
 * @note
 * Each webhook key must be a unique string identifier. The value can be either
 * a Path Item Object or a Reference to a Path Item Object.
 *
 * -----
 * Examples
 * -----
 *
 * @example (simple webhook):
 * ```ts
 * const webhooks: Webhooks = {
 *   "newPet": {
 *     "post": {
 *       "requestBody": {
 *         "description": "Information about a new pet",
 *         "content": {
 *           "application/json": {
 *             "schema": {
 *               "$ref": "#/components/schemas/Pet"
 *             }
 *           }
 *         }
 *       },
 *       "responses": {
 *         "200": {
 *           "description": "Webhook processed successfully"
 *         }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (webhook with reference):
 * ```ts
 * const webhooks: Webhooks = {
 *   "petUpdated": {
 *     "$ref": "#/components/pathItems/PetUpdateWebhook"
 *   }
 * };
 * ```
 *
 * @example (multiple webhooks):
 * ```ts
 * const webhooks: Webhooks = {
 *   "newPet": {
 *     "post": {
 *       "summary": "New pet created",
 *       "requestBody": {
 *         "content": {
 *           "application/json": {
 *             "schema": { "$ref": "#/components/schemas/Pet" }
 *           }
 *         }
 *       },
 *       "responses": {
 *         "200": { "description": "Success" }
 *       }
 *     }
 *   },
 *   "petDeleted": {
 *     "delete": {
 *       "summary": "Pet deleted",
 *       "responses": {
 *         "200": { "description": "Success" }
 *       }
 *     }
 *   }
 * };
 * ```
 *
 * @example (webhook with multiple operations):
 * ```ts
 * const webhooks: Webhooks = {
 *   "petLifecycle": {
 *     "post": {
 *       "summary": "Pet created or updated",
 *       "requestBody": {
 *         "content": {
 *           "application/json": {
 *             "schema": { "$ref": "#/components/schemas/Pet" }
 *           }
 *         }
 *       },
 *       "responses": {
 *         "200": { "description": "Success" }
 *       }
 *     },
 *     "delete": {
 *       "summary": "Pet deleted",
 *       "responses": {
 *         "200": { "description": "Success" }
 *       }
 *     }
 *   }
 * };
 * ```
 */
export type Webhooks = Record<string, PathItem | Reference> & Extension;
