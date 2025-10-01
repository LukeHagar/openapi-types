# OpenAPI Types

Comprehensive TypeScript definitions for all OpenAPI specification versions with detailed JSDoc documentation and version-specific implementations.

## Installation

```bash
npm install oas-types
# or
yarn add oas-types
# or
bun add oas-types
```

## Architecture

This library provides comprehensive TypeScript type definitions for all OpenAPI specification versions with:

- **Version-specific implementations** - Each OpenAPI version has its own dedicated folder with complete type definitions
- **Modular organization** - Types are organized by OpenAPI object (e.g., `info.ts`, `paths.ts`, `schema.ts`)
- **Comprehensive JSDoc** - Every type includes detailed documentation with links to official specifications
- **Type safety** - Strict typing that follows OpenAPI specifications exactly
- **Discriminated unions** - Advanced TypeScript patterns for schema definitions

## Build Process

This package includes a comprehensive build system that generates JSON schemas from the TypeScript definitions:

### Quick Start

```bash
# Generate all schemas
bun run build

# Clean and rebuild
bun run schemas:clean && bun run build
```

### Generated Schemas

The build process creates JSON schemas for:

- **Main specifications** - Complete OpenAPI document validation
- **Component schemas** - Individual component validation
- **TypeScript exports** - Easy importing and type safety

### Usage

```typescript
// Import schemas for a specific version
import { schemas } from "oas-types/schemas/3.0";

// Import all schemas
import { allSchemas } from "oas-types/schemas";

// Use with JSON Schema validators
import Ajv from "ajv";
const ajv = new Ajv();
const validator = ajv.compile(schemas.specification);
```

## Usage

### Import Version-Specific Types

```typescript
// OpenAPI 3.2.0 (latest)
import { Specification, Info, Paths, Schema, Components } from "oas-types/3.2";

// OpenAPI 3.1.x
import { Specification, Info, Paths, Schema, Components } from "oas-types/3.1";

// OpenAPI 3.0.x
import { Specification, Info, Paths, Schema, Components } from "oas-types/3.0";

// Swagger 2.0
import { Swagger, Info, Paths, Schema, Definitions } from "oas-types/2.0";
```

### Import Specific OpenAPI Objects

```typescript
// Import specific objects from any version
import { Info, Contact, License } from "oas-types/3.1/info";
import { Paths, Operation, Parameter } from "oas-types/3.1/paths";
import { Schema, StringSchema, ObjectSchema } from "oas-types/3.1/schema";
import { SecurityScheme, OAuthFlows } from "oas-types/3.1/security";
```

### Import Schema Data Types

```typescript
// Import specific schema types for any version
import {
  StringSchema,
  NumberSchema,
  IntegerSchema,
  BooleanSchema,
  ArraySchema,
  ObjectSchema,
  CompositionSchema,
  ReferenceSchema,
} from "oas-types/3.1/data-types";
```

## Project Structure

```
openapi-types/
├── 2.0/                         # Swagger 2.0 types
│   ├── data-types/              # Schema data types
│   ├── info.ts                  # Info Object
│   ├── paths.ts                 # Paths and Operations
│   ├── schema.ts                # Schema definitions
│   ├── security.ts              # Security schemes
│   ├── spec.ts                  # Main Swagger object
│   └── index.ts                 # Version exports
│
├── 3.0/                         # OpenAPI 3.0.x types
│   ├── data-types/              # Schema data types
│   ├── info.ts                  # Info Object
│   ├── paths.ts                 # Paths and Operations
│   ├── schema.ts                # Schema definitions
│   ├── security.ts              # Security schemes
│   ├── spec.ts                  # Main OpenAPI object
│   ├── components.ts            # Components object
│   ├── servers.ts               # Server objects
│   └── index.ts                 # Version exports
│
├── 3.1/                         # OpenAPI 3.1.x types
│   ├── data-types/              # Individual schema types
│   ├── info.ts                  # Info Object
│   ├── paths.ts                 # Paths and Operations
│   ├── schema.ts                # Main Schema union type
│   ├── security.ts              # Security schemes
│   ├── spec.ts                  # Main OpenAPI object
│   ├── components.ts            # Components object
│   ├── servers.ts               # Server objects
│   ├── webhooks.ts              # Webhook definitions
│   └── index.ts                 # Version exports
│
├── 3.2/                         # OpenAPI 3.2.0 types
│   ├── data-types/              # Schema data types
│   ├── info.ts                  # Info Object
│   ├── paths.ts                 # Paths and Operations
│   ├── schema.ts                # Schema definitions
│   ├── security.ts              # Security schemes
│   ├── spec.ts                  # Main OpenAPI object
│   ├── components.ts            # Components object
│   ├── servers.ts               # Server objects
│   ├── webhooks.ts              # Webhook definitions
│   ├── oauth.ts                 # OAuth flow definitions
│   └── index.ts                 # Version exports
│
├── schemas/                     # Generated JSON schemas
│   ├── 2.0/                     # Swagger 2.0 schemas
│   ├── 3.0/                     # OpenAPI 3.0 schemas
│   ├── 3.1/                     # OpenAPI 3.1 schemas
│   └── 3.2/                     # OpenAPI 3.2 schemas
│
├── License.ts                   # SPDX license definitions
├── SPDXLicenseList.ts           # Complete SPDX license list
└── index.ts                     # Main entry point
```

## Philosophy

### Version-Specific Implementations

Each OpenAPI version has its own complete implementation that accurately reflects the specification for that version. This ensures:

- **Type accuracy** - Types match the exact specification requirements
- **Version compatibility** - No confusion between different OpenAPI versions
- **Future-proofing** - Easy to add new versions without breaking existing ones

### Modular Organization

Types are organized by OpenAPI object type, making it easy to:

- Import only what you need
- Understand the structure of OpenAPI specifications
- Maintain and update specific object types

### Comprehensive Documentation

Every type includes:

- **JSDoc comments** with detailed descriptions
- **Links to official specifications** for each OpenAPI version
- **Usage examples** showing practical implementations
- **Property documentation** with example values and constraints

## Supported Versions

- **Swagger 2.0** (OpenAPI Specification v2.0) - Complete implementation
- **OpenAPI 3.0.x** - Complete implementation with all 3.0.x variants
- **OpenAPI 3.1.x** - Complete implementation with JSON Schema 2020-12 alignment
- **OpenAPI 3.2.0** - Complete implementation

## Examples

### Basic OpenAPI 3.1.x Usage

```typescript
import { Specification, Info, Paths, Schema } from "oas-types/3.1";

const openApiSpec: Specification = {
  openapi: "3.1.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "A sample API",
    contact: {
      name: "API Support",
      email: "support@example.com",
    },
    license: {
      name: "MIT",
      identifier: "MIT",
    },
  } as Info,
  paths: {
    "/users": {
      get: {
        summary: "List users",
        responses: {
          "200": {
            description: "A list of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/User" },
                },
              },
            },
          },
        },
      },
    },
  } as Paths,
};
```

### Schema Definitions (OpenAPI 3.1.x)

```typescript
import { StringSchema, ObjectSchema, ArraySchema, Schema } from "oas-types/3.1";

// String schema with validation
const nameSchema: StringSchema = {
  type: "string",
  minLength: 1,
  maxLength: 100,
  pattern: "^[a-zA-Z\\s]+$",
  description: "User's full name",
};

// Object schema with properties
const userSchema: ObjectSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: nameSchema,
    email: {
      type: "string",
      format: "email",
    },
  },
  required: ["id", "name", "email"],
  description: "User object",
};

// Array schema
const usersSchema: ArraySchema = {
  type: "array",
  items: userSchema,
  minItems: 1,
  description: "Array of users",
};
```

### Swagger 2.0 Usage

```typescript
import { Swagger, Info, Paths } from "oas-types/2.0";

const swaggerSpec: Swagger = {
  swagger: "2.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "A sample API",
  } as Info,
  paths: {
    "/users": {
      get: {
        summary: "List users",
        responses: {
          "200": {
            description: "A list of users",
            schema: {
              type: "array",
              items: { $ref: "#/definitions/User" },
            },
          },
        },
      },
    },
  } as Paths,
  definitions: {
    User: {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
      },
      required: ["id", "name"],
    },
  },
};
```

### Security Schemes

```typescript
import { SecurityScheme, OAuthFlows } from "oas-types/3.1/security";

const apiKeyAuth: SecurityScheme = {
  type: "apiKey",
  in: "header",
  name: "X-API-Key",
  description: "API key authentication",
};

const oauth2Auth: SecurityScheme = {
  type: "oauth2",
  flows: {
    authorizationCode: {
      authorizationUrl: "https://example.com/oauth/authorize",
      tokenUrl: "https://example.com/oauth/token",
      scopes: {
        "read:users": "Read user information",
        "write:users": "Modify user information",
      },
    },
  } as OAuthFlows,
};
```

## Type Safety Features

- **Strict typing** - All types follow OpenAPI specifications exactly
- **Version awareness** - Type-safe version-specific features
- **Discriminated unions** - Advanced schema type discrimination
- **Comprehensive validation** - Property constraints and validation rules
- **JSDoc documentation** - Complete documentation with spec links

## Documentation

Each type includes comprehensive JSDoc documentation with:

- **Official specification links** for each OpenAPI version
- **Usage examples** with practical implementations
- **Property documentation** with example values and constraints
- **Version compatibility notes** where applicable
- **Mutual exclusion rules** for conflicting properties

## Key Features

### OpenAPI 3.2.0 Specific Features

- **Latest OpenAPI specification** - Full support for OpenAPI 3.2.0 features
- **Enhanced OAuth flows** - Support for all OAuth 2.0 flow types
- **Advanced webhook support** - Comprehensive webhook definitions

### OpenAPI 3.1.x Specific Features

- **JSON Schema 2020-12 alignment** - Full support for latest JSON Schema features
- **Discriminated schema unions** - Type-safe schema type discrimination
- **Composition schemas** - Support for `allOf`, `anyOf`, `oneOf`, `not`, `if`/`then`/`else`
- **Enhanced validation** - Support for `const`, `examples`, and advanced validation keywords

### OpenAPI 3.0.x Features

- **Nullable schemas** - Support for `nullable` property
- **Discriminator objects** - Support for schema discrimination
- **Callback objects** - Support for webhook definitions

### Swagger 2.0 Features

- **Definitions object** - Support for schema definitions
- **Security definitions** - Support for security schemes
- **Response definitions** - Support for reusable response definitions

## Contributing

Contributions are welcome! Please ensure that:

- All types follow the OpenAPI specification exactly
- JSDoc documentation is complete and accurate
- Version compatibility is maintained
- Tests are added for new features

## License

MIT License - see LICENSE file for details.

## Links

- [OpenAPI Specification](https://spec.openapis.org/)
- [Swagger Specification](https://swagger.io/specification/)
- [JSON Schema](https://json-schema.org/)
- [SPDX License List](https://spdx.org/licenses/)
