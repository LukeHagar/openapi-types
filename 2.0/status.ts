import type { Response } from "./paths";

/**
 * Swagger 2.0 Valid HTTP Status Codes
 *
 * Enumerates individual HTTP status codes (as keys) plus the special `"default"` key,
 * per the IANA HTTP Status Code Registry. JSDoc reason phrases and references mirror
 * the registry entries. See also RFC 9110 (HTTP Semantics) section mappings.
 *
 * @see {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml | IANA: HTTP Status Code Registry}
 * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html | RFC 9110: HTTP Semantics}
 */
export interface ResponsesMap {
  //#region 1xx — Informational

  /** 100 Continue
   *
   * Indicates that the initial part of the request has been received and the client should continue with the request.
   *
   * The server has received the request headers and the client should proceed to send the request body.
   *
   * Used in scenarios where the client needs to send a large request body and wants to confirm the server is ready to receive it before sending the data. Commonly used with `Expect: 100-continue` header for file uploads, API requests with large payloads, or when implementing optimistic request patterns.
   *
   * The server is ready to process the request and the client can proceed with sending the request body. This prevents unnecessary data transmission if the server would reject the request based on headers alone.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-100-continue | RFC 9110 §15.2.1}
   */
  "100"?: Response;

  /** 101 Switching Protocols
   *
   * Indicates that the server is switching protocols as requested by the client.
   *
   * The server agrees to change the application protocol within the current connection, typically from HTTP to WebSocket or other protocols.
   *
   * Primarily used for WebSocket connections where the client sends an `Upgrade: websocket` header and the server responds with 101 to establish the WebSocket connection. Also used for HTTP/2 upgrades, Server-Sent Events (SSE), or other protocol switching scenarios.
   *
   * The connection will continue using a different protocol. The response headers will contain the new protocol information, and subsequent communication will use the upgraded protocol.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-101-switching-protocols | RFC 9110 §15.2.2}
   */
  "101"?: Response;

  /** 102 Processing
   *
   * Indicates that the server has received and is processing the request, but no response is available yet.
   *
   * The server has accepted the request and is processing it, but the processing is taking longer than normal and the client should continue waiting.
   *
   * Primarily used in WebDAV (Web Distributed Authoring and Versioning) environments for long-running operations like file uploads, batch operations, or complex data processing. Helps prevent client timeouts during extended processing periods.
   *
   * The request is being processed and the client should continue waiting. This prevents timeout issues during long-running operations and provides feedback that the server is actively working on the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc2518 | RFC 2518 (WebDAV)}
   */
  "102"?: Response;

  /** 103 Early Hints
   *
   * Provides early hints about the response that will be sent, allowing the client to start processing before the full response is ready.
   *
   * The server is sending preliminary information about the response headers and resources that will be needed, enabling the client to start optimization processes early.
   *
   * Used for performance optimization, particularly in web applications where the server can hint about resources (CSS, JavaScript, fonts) that will be needed for the final response. Allows browsers to start preloading resources before the main response is ready, significantly improving perceived performance.
   *
   * The client can start preparing for the response based on the hints provided. This is especially valuable for web applications where resource preloading can improve user experience.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc8297 | RFC 8297}
   */
  "103"?: Response;

  /** 104 Upload Resumption Supported — TEMPORARY
   *
   * Indicates that the server supports resumable uploads for the requested resource.
   *
   * The server is indicating that it can handle interrupted uploads and allows the client to resume uploading from where it left off.
   *
   * Used in file upload scenarios where large files might be interrupted due to network issues, browser crashes, or other problems. Enables clients to resume uploads without starting over, improving reliability for large file transfers and reducing bandwidth waste.
   *
   * The client can implement resumable upload logic, typically using range requests or specialized upload protocols. This is particularly valuable for mobile applications and unreliable network conditions.
   *
   * @note Temporary registration; see IANA entry for current status/expiry.
   * @see {@link https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-resumable-upload-05 | draft-ietf-httpbis-resumable-upload-05}
   * @see {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml | IANA registry}
   */
  "104"?: Response;

  //#endregion

  //#region 2xx — Success

  /** 200 OK
   *
   * Indicates that the request has succeeded and the response contains the requested data.
   *
   * The request was processed successfully and the response body contains the requested resource or data.
   *
   * The most common success response for GET requests, API endpoints that return data, and successful operations. Used for retrieving resources, executing queries, and any operation that completes successfully with data to return.
   *
   * The operation completed successfully and the response body contains the requested information. This is the standard success response for most API operations.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok | RFC 9110 §15.3.1}
   */
  "200"?: Response;

  /** 201 Created
   *
   * Indicates that the request has succeeded and a new resource has been created as a result.
   *
   * The request was processed successfully and resulted in the creation of a new resource. The response typically includes the location of the newly created resource.
   *
   * Used for POST requests that create new resources (users, posts, files, etc.). The response should include a `Location` header pointing to the newly created resource. Common in REST APIs for resource creation operations.
   *
   * A new resource was successfully created and the response contains information about the created resource, typically including its ID and location.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-201-created | RFC 9110 §15.3.2}
   */
  "201"?: Response;

  /** 202 Accepted
   *
   * Indicates that the request has been accepted for processing, but the processing has not been completed.
   *
   * The request was valid and accepted, but the server will process it asynchronously. The processing may or may not eventually succeed.
   *
   * Used for asynchronous operations like background jobs, batch processing, email sending, or any operation that takes time to complete. The client should not assume the operation succeeded based on this response alone.
   *
   * The request was accepted and is being processed asynchronously. The client should check the status separately or wait for a callback/webhook to know the final result.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-202-accepted | RFC 9110 §15.3.3}
   */
  "202"?: Response;

  /** 203 Non-Authoritative Information
   *
   * Indicates that the request was successful, but the information returned is from a transformed or cached version of the original resource.
   *
   * The response is successful but the data may have been modified by a transforming proxy or cache, and may not be the authoritative version.
   *
   * Used when responses come from caches, proxies, or transformation services where the data might be slightly different from the original. Common in CDN scenarios or when data is processed through middleware.
   *
   * The request succeeded but the response data may not be the most current or authoritative version. The client should be aware that the data might be cached or transformed.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-203-non-authoritative-informat | RFC 9110 §15.3.4}
   */
  "203"?: Response;

  /** 204 No Content
   *
   * Indicates that the request has succeeded but there is no content to return in the response body.
   *
   * The request was processed successfully but the response body is intentionally empty. The client should not expect any content.
   *
   * Used for DELETE operations, PUT requests that don't return data, or any operation where success is indicated by the absence of content. Common in REST APIs for operations that modify state without returning data.
   *
   * The operation completed successfully but no data is returned. The client should not attempt to parse a response body.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-204-no-content | RFC 9110 §15.3.5}
   */
  "204"?: Response;

  /** 205 Reset Content
   *
   * Indicates that the request has succeeded and the client should reset the document view that caused the request to be sent.
   *
   * The request was processed successfully and the client should clear any form data or reset the user interface state.
   *
   * Used in web applications where form submissions should clear the form after successful processing, or when the client needs to reset its state. Common in form handling and user interface operations.
   *
   * The operation succeeded and the client should reset its current state, typically clearing forms or resetting the user interface.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-205-reset-content | RFC 9110 §15.3.6}
   */
  "205"?: Response;

  /** 206 Partial Content
   *
   * Indicates that the server is delivering only part of the resource due to a range request.
   *
   * The request included a Range header and the server is returning only the requested portion of the resource, along with information about the range delivered.
   *
   * Used for resumable downloads, video streaming, large file transfers, and any scenario where the client requests a specific portion of a resource. Enables efficient handling of large files and interrupted downloads.
   *
   * The response contains only a portion of the requested resource. The client should expect partial content and may need to make additional requests for the complete resource.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-206-partial-content | RFC 9110 §15.3.7}
   */
  "206"?: Response;

  /** 207 Multi-Status
   *
   * Indicates that multiple independent operations might have been performed, and the status of each operation is reported in the response body.
   *
   * The response contains multiple status codes for different operations, typically in XML format with individual operation results.
   *
   * Used in WebDAV environments for batch operations, bulk file operations, or any scenario where multiple independent operations are performed in a single request. Common in file management systems and collaborative editing platforms.
   *
   * Multiple operations were attempted and the response contains the status of each individual operation. The client should parse the response body to determine which operations succeeded or failed.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc4918 | RFC 4918 (WebDAV)}
   */
  "207"?: Response;

  /** 208 Already Reported
   *
   * Indicates that the members of a DAV binding have already been enumerated in a previous response to this request, and are not being included again.
   *
   * Used in WebDAV to avoid repeating the same information in a multi-status response when the same binding has already been reported.
   *
   * Used in WebDAV environments to optimize responses by avoiding duplicate information in multi-status responses. Helps reduce response size and improve performance in complex file system operations.
   *
   * The information for this binding has already been reported in a previous part of the response. The client should not expect additional information for this specific binding.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc5842 | RFC 5842 (WebDAV)}
   */
  "208"?: Response;

  /** 226 IM Used
   *
   * Indicates that the server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   *
   * The response represents the result of applying instance manipulations (like delta encoding) to the current resource instance.
   *
   * Used in scenarios involving delta encoding, instance manipulations, or when the response represents a transformed version of the resource. Common in content delivery networks and systems that optimize data transmission.
   *
   * The response contains a manipulated version of the resource, typically optimized for transmission. The client should be aware that the data has been processed or transformed.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc3229 | RFC 3229}
   */
  "226"?: Response;

  //#endregion

  //#region 3xx — Redirection

  /** 300 Multiple Choices
   *
   * Indicates that the request has multiple possible responses and the client should choose one.
   *
   * The server has multiple representations of the requested resource and the client must choose which one to use.
   *
   * Used when content negotiation results in multiple valid options, such as different formats (JSON, XML, HTML) or different languages. The response typically includes a list of available options with their characteristics.
   *
   * The client should examine the available options and make a choice, typically by sending another request with more specific preferences or headers.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-300-multiple-choices | RFC 9110 §15.4.1}
   */
  "300"?: Response;

  /** 301 Moved Permanently
   *
   * Indicates that the requested resource has been permanently moved to a new location.
   *
   * The resource has been permanently relocated and all future requests should be directed to the new URL provided in the Location header.
   *
   * Used when resources are permanently relocated, such as when changing domain names, restructuring URLs, or moving content to new locations. Browsers and clients should update their bookmarks and caches.
   *
   * The resource has moved permanently and the client should update all references to use the new URL. Search engines and caches should update their indexes.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-301-moved-permanently | RFC 9110 §15.4.2}
   */
  "301"?: Response;

  /** 302 Found
   *
   * Indicates that the requested resource has been temporarily moved to a different location.
   *
   * The resource is temporarily available at a different URL, but the original URL should continue to be used for future requests.
   *
   * Used for temporary redirects such as maintenance pages, temporary content moves, or when the resource is temporarily unavailable at the original location. The original URL remains valid.
   *
   * The resource is temporarily at a different location. The client should follow the redirect but continue using the original URL for future requests.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-302-found | RFC 9110 §15.4.3}
   */
  "302"?: Response;

  /** 303 See Other
   *
   * Indicates that the response to the request can be found at a different URL and should be retrieved using a GET request.
   *
   * The request was processed but the response is available at a different location, and the client should use GET to retrieve it.
   *
   * Used in POST-redirect-GET patterns, form submissions that redirect to a results page, or when the response to a POST request should be retrieved via GET. Common in web applications for avoiding duplicate form submissions.
   *
   * The client should make a GET request to the provided URL to retrieve the response. This prevents duplicate submissions and provides a clean URL for the result.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-303-see-other | RFC 9110 §15.4.4}
   */
  "303"?: Response;

  /** 304 Not Modified
   *
   * Indicates that the resource has not been modified since the last request, so the cached version can be used.
   *
   * The resource has not changed since the last request, and the client can use its cached version. No response body is included.
   *
   * Used for caching optimization when the client sends conditional headers (If-Modified-Since, If-None-Match). Reduces bandwidth usage and improves performance by avoiding unnecessary data transfer.
   *
   * The resource has not changed and the client should use its cached version. This is an optimization response that saves bandwidth and improves performance.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-304-not-modified | RFC 9110 §15.4.5}
   */
  "304"?: Response;

  /** 305 Use Proxy
   *
   * Indicates that the requested resource must be accessed through the proxy specified in the Location header.
   *
   * The client must use the specified proxy to access the resource. This response is rarely used in modern web applications.
   *
   * Used in corporate environments or specific network configurations where resources must be accessed through a particular proxy server. Mostly deprecated in modern web development.
   *
   * The client should use the specified proxy to access the resource. This is rarely encountered in modern web applications.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-305-use-proxy | RFC 9110 §15.4.6}
   */
  "305"?: Response;

  /** 306 (Unused)
   *
   * This status code is reserved and not used in current HTTP specifications.
   *
   * This status code was previously used but is now reserved and should not be used in new implementations.
   *
   * Not used in modern web applications. This code is reserved and should not be implemented.
   *
   * This status code should not be encountered in modern web applications.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-306-unused | RFC 9110 §15.4.7}
   */
  "306"?: Response;

  /** 307 Temporary Redirect
   *
   * Indicates that the requested resource has been temporarily moved to a different location, and the request method should be preserved.
   *
   * The resource is temporarily available at a different URL, and the client should repeat the request using the same method to the new location.
   *
   * Used for temporary redirects where the HTTP method (POST, PUT, DELETE) should be preserved. Common in API versioning, temporary maintenance, or when resources are temporarily relocated.
   *
   * The resource is temporarily at a different location and the client should repeat the same request method to the new URL.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-307-temporary-redirect | RFC 9110 §15.4.8}
   */
  "307"?: Response;

  /** 308 Permanent Redirect
   *
   * Indicates that the requested resource has been permanently moved to a different location, and the request method should be preserved.
   *
   * The resource has been permanently relocated and the client should use the new URL for all future requests, preserving the original HTTP method.
   *
   * Used for permanent redirects where the HTTP method should be preserved, such as when moving APIs to new endpoints or restructuring resource URLs. Common in API versioning and permanent relocations.
   *
   * The resource has moved permanently and the client should update all references to use the new URL while preserving the original HTTP method.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-308-permanent-redirect | RFC 9110 §15.4.9}
   */
  "308"?: Response;

  //#endregion

  //#region 4xx — Client Error

  /** 400 Bad Request
   *
   * Indicates that the server cannot process the request due to a client error.
   *
   * The request syntax is invalid, malformed, or contains incorrect parameters that the server cannot understand or process.
   *
   * Used for validation errors, malformed JSON, missing required fields, invalid parameter values, or any client-side error that prevents the server from processing the request. Common in API validation scenarios.
   *
   * The client has sent an invalid request and should fix the request before retrying. The response body should contain details about what was wrong with the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request | RFC 9110 §15.5.1}
   */
  "400"?: Response;

  /** 401 Unauthorized
   *
   * Indicates that the request requires authentication and the client has not provided valid credentials.
   *
   * The request lacks valid authentication credentials or the provided credentials are invalid, expired, or insufficient.
   *
   * Used when authentication is required but not provided, when login credentials are invalid, or when the authentication token has expired. Common in protected API endpoints and user authentication flows.
   *
   * The client needs to authenticate before accessing the resource. The response should include authentication challenge headers (WWW-Authenticate) indicating how to authenticate.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized | RFC 9110 §15.5.2}
   */
  "401"?: Response;

  /** 402 Payment Required
   *
   * Indicates that the request requires payment before it can be processed.
   *
   * The request cannot be fulfilled because payment is required. This status code is reserved for future use in digital payment systems.
   *
   * Used in payment-required scenarios, subscription services, or when access to a resource requires payment. Common in freemium models, paid API access, or premium content services.
   *
   * The client needs to provide payment information or complete a payment process before accessing the resource. The response should include information about how to make the payment.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-402-payment-required | RFC 9110 §15.5.3}
   */
  "402"?: Response;

  /** 403 Forbidden
   *
   * Indicates that the server understood the request but refuses to authorize it.
   *
   * The client is authenticated but does not have permission to access the requested resource or perform the requested action.
   *
   * Used when the user is logged in but lacks the necessary permissions, when access is restricted based on user roles, or when the resource is not accessible to the current user. Common in authorization and access control scenarios.
   *
   * The client is authenticated but not authorized to access the resource. The client should not retry the request without additional permissions.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-403-forbidden | RFC 9110 §15.5.4}
   */
  "403"?: Response;

  /** 404 Not Found
   *
   * Indicates that the requested resource could not be found on the server.
   *
   * The server cannot find the requested resource at the specified URL, or the resource does not exist.
   *
   * Used when a resource doesn't exist, when the URL is incorrect, or when the requested item has been deleted. Common in web applications for missing pages, deleted content, or non-existent API endpoints.
   *
   * The requested resource does not exist. The client should verify the URL or check if the resource has been moved or deleted.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found | RFC 9110 §15.5.5}
   */
  "404"?: Response;

  /** 405 Method Not Allowed
   *
   * Indicates that the HTTP method used in the request is not allowed for the requested resource.
   *
   * The resource exists but the HTTP method (GET, POST, PUT, DELETE, etc.) is not supported for this particular resource.
   *
   * Used when a resource only supports certain HTTP methods, such as a read-only endpoint that doesn't allow POST requests, or when the method is not implemented for the specific resource. Common in REST API design.
   *
   * The HTTP method is not allowed for this resource. The response should include an Allow header listing the permitted methods.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-405-method-not-allowed | RFC 9110 §15.5.6}
   */
  "405"?: Response;

  /** 406 Not Acceptable
   *
   * Indicates that the server cannot produce a response matching the client's Accept headers.
   *
   * The server cannot generate a response in any of the formats requested by the client's Accept headers.
   *
   * Used when the client requests a specific content type (JSON, XML, HTML) that the server cannot provide, or when content negotiation fails. Common in API versioning and content type mismatches.
   *
   * The server cannot provide the requested content type. The client should check the Accept headers or request a different format.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-406-not-acceptable | RFC 9110 §15.5.7}
   */
  "406"?: Response;

  /** 407 Proxy Authentication Required
   *
   * Indicates that the client must authenticate with the proxy server before the request can be processed.
   *
   * The proxy server requires authentication before it will forward the request to the destination server.
   *
   * Used in corporate environments or networks where proxy authentication is required. Common in enterprise networks, VPN connections, or when accessing resources through authenticated proxies.
   *
   * The client needs to authenticate with the proxy server. The response should include Proxy-Authenticate headers indicating how to authenticate.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-407-proxy-authentication-req | RFC 9110 §15.5.8}
   */
  "407"?: Response;

  /** 408 Request Timeout
   *
   * Indicates that the server timed out while waiting for the request from the client.
   *
   * The server did not receive a complete request within the time it was prepared to wait.
   *
   * Used when the client takes too long to send the complete request, when network issues cause delays, or when the server has a timeout policy for request processing. Common in slow network conditions or when clients fail to send complete requests.
   *
   * The request timed out and the client should retry the request. The client may need to optimize the request or check network connectivity.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-408-request-timeout | RFC 9110 §15.5.9}
   */
  "408"?: Response;

  /** 409 Conflict
   *
   * Indicates that the request conflicts with the current state of the resource.
   *
   * The request cannot be completed due to a conflict with the current state of the resource, such as a version mismatch or concurrent modification.
   *
   * Used when trying to create a resource that already exists, when there's a version conflict in concurrent editing, or when the request conflicts with business rules. Common in collaborative editing, version control, and resource creation scenarios.
   *
   * The request conflicts with the current state of the resource. The client should resolve the conflict before retrying the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-409-conflict | RFC 9110 §15.5.10}
   */
  "409"?: Response;

  /** 410 Gone
   *
   * Indicates that the requested resource is no longer available and will not be available again.
   *
   * The resource has been permanently removed and will not be restored. This is different from 404, which indicates the resource was never found.
   *
   * Used when content has been permanently deleted, when resources have been removed and will not be restored, or when temporary content has expired. Common in content management systems and temporary resource scenarios.
   *
   * The resource has been permanently removed and will not be available again. The client should not retry the request and should update any references to this resource.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-410-gone | RFC 9110 §15.5.11}
   */
  "410"?: Response;

  /** 411 Length Required
   *
   * Indicates that the server requires a Content-Length header in the request.
   *
   * The server cannot process the request without knowing the exact length of the request body.
   *
   * Used when the server needs to know the exact size of the request body before processing, such as for file uploads, large data transfers, or when implementing specific security measures. Common in file upload scenarios and certain API endpoints.
   *
   * The client must include a Content-Length header in the request. The client should retry the request with the proper Content-Length header.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-411-length-required | RFC 9110 §15.5.12}
   */
  "411"?: Response;

  /** 412 Precondition Failed
   *
   * Indicates that one or more preconditions in the request headers were not met.
   *
   * The server cannot meet the conditions specified in the request headers, such as If-Match, If-None-Match, If-Modified-Since, or If-Unmodified-Since.
   *
   * Used in conditional requests where the client specifies conditions that must be met, such as version checking, cache validation, or optimistic concurrency control. Common in collaborative editing and caching scenarios.
   *
   * The preconditions in the request were not met. The client should check the conditions and retry the request with updated preconditions.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-412-precondition-failed | RFC 9110 §15.5.13}
   */
  "412"?: Response;

  /** 413 Content Too Large
   *
   * Indicates that the request payload is too large for the server to process.
   *
   * The request body exceeds the server's maximum allowed size limit.
   *
   * Used when file uploads exceed size limits, when request bodies are too large for processing, or when the server has configured size restrictions. Common in file upload scenarios and API rate limiting.
   *
   * The request payload is too large. The client should reduce the size of the request body or split it into smaller chunks.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-413-content-too-large | RFC 9110 §15.5.14}
   */
  "413"?: Response;

  /** 414 URI Too Long
   *
   * Indicates that the URI provided in the request is too long for the server to process.
   *
   * The URL exceeds the server's maximum allowed length limit.
   *
   * Used when URLs are too long due to excessive query parameters, when GET requests contain too much data in the URL, or when the server has configured URI length restrictions. Common in search APIs and parameter-heavy requests.
   *
   * The URI is too long. The client should shorten the URL or use POST instead of GET for large amounts of data.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-414-uri-too-long | RFC 9110 §15.5.15}
   */
  "414"?: Response;

  /** 415 Unsupported Media Type
   *
   * Indicates that the server cannot process the request because the media type is not supported.
   *
   * The server cannot process the request body because the Content-Type is not supported or recognized.
   *
   * Used when the client sends data in an unsupported format, when the server only accepts specific content types, or when there's a mismatch between the expected and actual content type. Common in API endpoints with strict content type requirements.
   *
   * The content type is not supported. The client should check the API documentation for supported content types and retry with the correct Content-Type header.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-415-unsupported-media-type | RFC 9110 §15.5.16}
   */
  "415"?: Response;

  /** 416 Range Not Satisfiable
   *
   * Indicates that the server cannot satisfy the range request specified in the Range header.
   *
   * The requested range is not valid for the resource, either because the range is beyond the resource size or the resource doesn't support range requests.
   *
   * Used when range requests are invalid, when the requested range exceeds the resource size, or when the resource doesn't support partial content requests. Common in file download scenarios and media streaming.
   *
   * The range request is not satisfiable. The client should check the range specification or request the full resource.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-416-range-not-satisfiable | RFC 9110 §15.5.17}
   */
  "416"?: Response;

  /** 417 Expectation Failed
   *
   * Indicates that the server cannot meet the requirements of the Expect header.
   *
   * The server cannot fulfill the expectations specified in the Expect header, typically when the server cannot handle the 100-continue expectation.
   *
   * Used when the server cannot handle the Expect: 100-continue header, when the server doesn't support the expected behavior, or when there's a mismatch between client expectations and server capabilities. Common in HTTP/1.1 implementations.
   *
   * The server cannot meet the expectations in the request. The client should retry without the Expect header or adjust the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-417-expectation-failed | RFC 9110 §15.5.18}
   */
  "417"?: Response;

  /** 418 (Unused)
   *
   * This status code is reserved and not used in current HTTP specifications.
   *
   * This status code is reserved and should not be used in new implementations.
   *
   * Not used in modern web applications. This code is reserved and should not be implemented.
   *
   * This status code should not be encountered in modern web applications.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-418-unused | RFC 9110 §15.5.19}
   */
  "418"?: Response;

  /** 421 Misdirected Request
   *
   * Indicates that the request was directed to a server that is not able to produce a response.
   *
   * The request was sent to a server that cannot handle it, typically due to HTTP/2 connection reuse issues or server configuration problems.
   *
   * Used in HTTP/2 environments when a request is sent to the wrong server due to connection reuse, when there are server configuration issues, or when the request cannot be processed by the current server instance. Common in load balancing scenarios.
   *
   * The request was sent to the wrong server. The client should retry the request, which may be routed to a different server.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-421-misdirected-request | RFC 9110 §15.5.20}
   */
  "421"?: Response;

  /** 422 Unprocessable Content
   *
   * Indicates that the request is well-formed but contains semantic errors that prevent processing.
   *
   * The request syntax is correct but the server cannot process the request due to semantic errors, such as validation failures or business rule violations.
   *
   * Used for validation errors, business rule violations, or when the request is syntactically correct but logically invalid. Common in API validation scenarios where the request format is correct but the data is invalid.
   *
   * The request is well-formed but contains semantic errors. The client should fix the data and retry the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-422-unprocessable-content | RFC 9110 §15.5.21}
   */
  "422"?: Response;

  /** 423 Locked
   *
   * Indicates that the requested resource is locked and cannot be modified.
   *
   * The resource is locked by another process or user and cannot be accessed or modified at this time.
   *
   * Used in WebDAV environments for file locking, collaborative editing scenarios, or when resources are temporarily locked for maintenance. Common in document management systems and collaborative editing platforms.
   *
   * The resource is locked and cannot be accessed. The client should wait and retry the request later.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc4918 | RFC 4918 (WebDAV)}
   */
  "423"?: Response;

  /** 424 Failed Dependency
   *
   * Indicates that the request failed because it depended on another request that also failed.
   *
   * The request cannot be completed because it depends on another operation that failed, typically in batch or multi-part operations.
   *
   * Used in WebDAV environments for batch operations where one operation depends on another, or in complex workflows where operations have dependencies. Common in file management systems and collaborative editing scenarios.
   *
   * The request failed due to a dependency failure. The client should check the dependencies and retry the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc4918 | RFC 4918 (WebDAV)}
   */
  "424"?: Response;

  /** 425 Too Early
   *
   * Indicates that the server is unwilling to process the request because it might be replayed.
   *
   * The server is concerned that the request might be replayed and is unwilling to process it at this time, typically due to timing or security concerns.
   *
   * Used in scenarios where request replay is a security concern, such as in early data scenarios or when the server needs to prevent replay attacks. Common in security-sensitive applications and protocols.
   *
   * The server is unwilling to process the request due to replay concerns. The client should retry the request later.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc8470 | RFC 8470}
   */
  "425"?: Response;

  /** 426 Upgrade Required
   *
   * Indicates that the server requires the client to upgrade to a different protocol.
   *
   * The server requires the client to use a different protocol version or upgrade to a newer version to access the resource.
   *
   * Used when the server requires protocol upgrades, when the client is using an outdated protocol version, or when the server only supports newer protocol versions. Common in API versioning and protocol migration scenarios.
   *
   * The client must upgrade to a different protocol version. The response should include upgrade information.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-426-upgrade-required | RFC 9110 §15.5.22}
   */
  "426"?: Response;

  /** 428 Precondition Required
   *
   * Indicates that the server requires the request to include certain preconditions.
   *
   * The server requires the client to include specific preconditions in the request headers before it will process the request.
   *
   * Used when the server requires specific preconditions for security or consistency reasons, such as requiring If-Match headers for optimistic concurrency control or other conditional headers. Common in collaborative editing and version control scenarios.
   *
   * The server requires specific preconditions. The client should include the required preconditions and retry the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc6585 | RFC 6585}
   */
  "428"?: Response;

  /** 429 Too Many Requests
   *
   * Indicates that the client has sent too many requests in a given time period and should slow down.
   *
   * The client has exceeded the rate limit and the server is refusing to process additional requests until the rate limit resets.
   *
   * Used for rate limiting, API throttling, and preventing abuse. Common in API endpoints that need to control request frequency, prevent spam, or manage resource usage. Often includes retry-after headers.
   *
   * The client has exceeded the rate limit and should slow down. The client should wait before retrying the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc6585 | RFC 6585}
   */
  "429"?: Response;

  /** 431 Request Header Fields Too Large
   *
   * Indicates that the server is unwilling to process the request because the header fields are too large.
   *
   * The request headers exceed the server's maximum allowed size limit.
   *
   * Used when request headers are too large, when there are too many headers, or when individual headers exceed size limits. Common in scenarios with large authentication tokens or excessive header data.
   *
   * The request headers are too large. The client should reduce the size of the headers and retry the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc6585 | RFC 6585}
   */
  "431"?: Response;

  /** 451 Unavailable For Legal Reasons
   *
   * Indicates that the requested resource is unavailable due to legal reasons.
   *
   * The resource is not available due to legal restrictions, such as censorship, court orders, or regulatory requirements.
   *
   * Used when content is blocked due to legal restrictions, when resources are unavailable in certain jurisdictions, or when there are regulatory compliance issues. Common in content delivery networks and international services.
   *
   * The resource is unavailable due to legal restrictions. The client should not retry the request as it will not be available.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc7725 | RFC 7725}
   */
  "451"?: Response;

  //#endregion

  //#region 5xx — Server Error

  /** 500 Internal Server Error
   *
   * Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
   *
   * The server encountered an internal error or exception that prevented it from processing the request successfully.
   *
   * Used for server-side errors, unhandled exceptions, database connection failures, or any unexpected server-side issue. Common in applications when there are bugs, configuration issues, or resource problems.
   *
   * The server encountered an internal error. The client should retry the request later, as this is typically a temporary issue.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-500-internal-server-error | RFC 9110 §15.6.1}
   */
  "500"?: Response;

  /** 501 Not Implemented
   *
   * Indicates that the server does not support the functionality required to fulfill the request.
   *
   * The server does not recognize the request method or lacks the ability to fulfill the request.
   *
   * Used when the server doesn't support the requested HTTP method, when functionality is not implemented, or when the server cannot handle the request. Common in API development when endpoints are not yet implemented.
   *
   * The server does not support the requested functionality. The client should check the API documentation for supported methods and features.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-501-not-implemented | RFC 9110 §15.6.2}
   */
  "501"?: Response;

  /** 502 Bad Gateway
   *
   * Indicates that the server, while acting as a gateway or proxy, received an invalid response from an upstream server.
   *
   * The server acting as a gateway or proxy received an invalid response from the upstream server it was trying to access.
   *
   * Used in load balancers, reverse proxies, and API gateways when the upstream server returns an invalid response or is unreachable. Common in microservices architectures and distributed systems.
   *
   * The gateway received an invalid response from the upstream server. The client should retry the request later.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-502-bad-gateway | RFC 9110 §15.6.3}
   */
  "502"?: Response;

  /** 503 Service Unavailable
   *
   * Indicates that the server is temporarily unable to handle the request due to maintenance or overload.
   *
   * The server is temporarily unavailable, typically due to maintenance, overload, or temporary resource constraints.
   *
   * Used during server maintenance, when the server is overloaded, when there are temporary resource issues, or when the service is temporarily down. Common in high-traffic scenarios and planned maintenance windows.
   *
   * The server is temporarily unavailable. The client should retry the request later, often with exponential backoff.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-503-service-unavailable | RFC 9110 §15.6.4}
   */
  "503"?: Response;

  /** 504 Gateway Timeout
   *
   * Indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.
   *
   * The gateway or proxy server timed out while waiting for a response from the upstream server.
   *
   * Used in load balancers, reverse proxies, and API gateways when the upstream server takes too long to respond. Common in microservices architectures where services have different response times.
   *
   * The gateway timed out waiting for the upstream server. The client should retry the request later.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-504-gateway-timeout | RFC 9110 §15.6.5}
   */
  "504"?: Response;

  /** 505 HTTP Version Not Supported
   *
   * Indicates that the server does not support the HTTP protocol version used in the request.
   *
   * The server does not support the HTTP protocol version specified in the request.
   *
   * Used when the client uses an unsupported HTTP version, when the server only supports specific HTTP versions, or when there are protocol version mismatches. Common in legacy systems and protocol migration scenarios.
   *
   * The server does not support the HTTP version used in the request. The client should use a supported HTTP version.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc9110.html#name-505-http-version-not-supporte | RFC 9110 §15.6.6}
   */
  "505"?: Response;

  /** 506 Variant Also Negotiates
   *
   * Indicates that the server has an internal configuration error in which the chosen variant resource is configured to engage in transparent content negotiation.
   *
   * The server has a configuration error where the selected variant resource is configured to engage in transparent content negotiation, creating a negotiation loop.
   *
   * Used in content negotiation scenarios where there's a configuration error causing negotiation loops. Common in complex content delivery systems and advanced HTTP implementations.
   *
   * The server has a configuration error in content negotiation. The client should contact the server administrator.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc2295 | RFC 2295}
   */
  "506"?: Response;

  /** 507 Insufficient Storage
   *
   * Indicates that the server is unable to store the representation needed to complete the request.
   *
   * The server cannot store the representation required to complete the request, typically due to storage space limitations.
   *
   * Used in WebDAV environments when there's insufficient storage space, when the server cannot allocate storage for the request, or when storage quotas are exceeded. Common in file management systems and collaborative editing platforms.
   *
   * The server cannot store the required representation. The client should check storage availability and retry the request.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc4918 | RFC 4918 (WebDAV)}
   */
  "507"?: Response;

  /** 508 Loop Detected
   *
   * Indicates that the server detected an infinite loop while processing the request.
   *
   * The server detected an infinite loop in the request processing, typically in WebDAV operations.
   *
   * Used in WebDAV environments when there are infinite loops in request processing, when there are circular references in operations, or when the server detects recursive operations. Common in file management systems and collaborative editing scenarios.
   *
   * The server detected an infinite loop. The client should check the request for circular references and retry.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc5842 | RFC 5842 (WebDAV)}
   */
  "508"?: Response;

  /** 510 Not Extended — OBSOLETED
   *
   * This status code is obsolete and should not be used in modern implementations.
   *
   * This status code was used for HTTP extensions but is now obsolete and should not be used.
   *
   * Not used in modern web applications. This code is obsolete and should not be implemented.
   *
   * This status code should not be encountered in modern web applications.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc2774 | RFC 2774 (Historic)}
   * @see {@link https://datatracker.ietf.org/doc/status-change-http-experiments-to-historic/ | IETF: Status change of HTTP experiments to Historic}
   */
  "510"?: Response;

  /** 511 Network Authentication Required
   *
   * Indicates that the client needs to authenticate to gain network access.
   *
   * The client must authenticate with the network before it can access the requested resource.
   *
   * Used in captive portal scenarios, public Wi-Fi networks, or when network-level authentication is required. Common in public networks, hotels, airports, and other locations where network access requires authentication.
   *
   * The client needs to authenticate with the network. The client should follow the authentication process provided by the network.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc6585 | RFC 6585}
   */
  "511"?: Response;

  //#endregion

  /** default — The default response for all codes not covered individually. */
  default?: Response;
}
