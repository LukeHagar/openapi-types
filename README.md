# OpenAPI Types

Comprehensive TypeScript definitions for all OpenAPI specification versions with detailed JSDoc documentation and version-specific implementations.

## 🏗️ Architecture

This library provides **comprehensive TypeScript type definitions** for all OpenAPI specification versions with:

- **Version-specific implementations** - Each OpenAPI version has its own dedicated folder with complete type definitions
- **Modular organization** - Types are organized by OpenAPI object (e.g., `info.ts`, `paths.ts`, `schema.ts`)
- **Comprehensive JSDoc** - Every type includes detailed documentation with links to official specifications
- **Type safety** - Strict typing that follows OpenAPI specifications exactly
- **Discriminated unions** - Advanced TypeScript patterns for schema definitions

## 📦 Installation

```bash
npm install oas-types
# or
yarn add oas-types
# or
bun add oas-types
```

## 🚀 Usage

### Import Version-Specific Types

```typescript
// OpenAPI 3.1.x (latest)
import { 
  Specification, 
  Info, 
  Paths, 
  Schema,
  Components 
} from 'oas-types/versions/3.1.x';

// OpenAPI 3.0.x
import { 
  Specification, 
  Info, 
  Paths, 
  Schema,
  Components 
} from 'oas-types/versions/3.0.x';

// Swagger 2.0
import { 
  Swagger, 
  Info, 
  Paths, 
  Schema,
  Definitions 
} from 'oas-types/versions/2.0.0';
```

### Import Specific OpenAPI Objects

```typescript
// Import specific objects from any version
import { Info, Contact, License } from 'oas-types/versions/3.1.x/info';
import { Paths, Operation, Parameter } from 'oas-types/versions/3.1.x/paths';
import { Schema, StringSchema, ObjectSchema } from 'oas-types/versions/3.1.x/schema';
import { SecurityScheme, OAuthFlows } from 'oas-types/versions/3.1.x/security';
```

### Import Schema Data Types (OpenAPI 3.1.x)

```typescript
// Import specific schema types for OpenAPI 3.1.x
import { 
  StringSchema, 
  NumberSchema, 
  IntegerSchema, 
  BooleanSchema,
  ArraySchema, 
  ObjectSchema,
  CompositionSchema,
  ReferenceSchema 
} from 'oas-types/versions/3.1.x/data-types';
```

## 📁 Project Structure

```
openapi-types/
├── versions/
│   ├── 2.0.0/                    # Swagger 2.0 types
│   │   ├── data-types/           # Schema data types
│   │   ├── info.ts              # Info Object
│   │   ├── paths.ts             # Paths and Operations
│   │   ├── schema.ts            # Schema definitions
│   │   ├── security.ts          # Security schemes
│   │   ├── spec.ts              # Main Swagger object
│   │   └── index.ts             # Version exports
│   │
│   ├── 3.0.x/                   # OpenAPI 3.0.x types
│   │   ├── data-types/          # Schema data types
│   │   ├── info.ts              # Info Object
│   │   ├── paths.ts             # Paths and Operations
│   │   ├── schema.ts            # Schema definitions
│   │   ├── security.ts          # Security schemes
│   │   ├── spec.ts              # Main OpenAPI object
│   │   └── index.ts             # Version exports
│   │
│   ├── 3.1.x/                   # OpenAPI 3.1.x types
│   │   ├── data-types/          # Individual schema types
│   │   │   ├── string.ts        # String schema
│   │   │   ├── number.ts        # Number schema
│   │   │   ├── integer.ts       # Integer schema
│   │   │   ├── boolean.ts       # Boolean schema
│   │   │   ├── array.ts         # Array schema
│   │   │   ├── object.ts        # Object schema
│   │   │   ├── composition.ts   # Composition schemas
│   │   │   ├── reference.ts     # Reference schema
│   │   │   └── index.ts         # Data type exports
│   │   ├── info.ts              # Info Object
│   │   ├── paths.ts             # Paths and Operations
│   │   ├── schema.ts            # Main Schema union type
│   │   ├── security.ts          # Security schemes
│   │   ├── spec.ts              # Main OpenAPI object
│   │   └── index.ts             # Version exports
│   │
│   ├── License.ts               # SPDX license definitions
│   └── SPDXLicenseList.ts       # Complete SPDX license list
│
├── index.ts                     # Main entry point
├── package.json
└── README.md
```

## 🎯 Philosophy

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

## 📋 Supported Versions

- **Swagger 2.0** (OpenAPI Specification v2.0) - Complete implementation
- **OpenAPI 3.0.x** - Complete implementation with all 3.0.x variants
- **OpenAPI 3.1.x** - Complete implementation with JSON Schema 2020-12 alignment

## 🔧 Examples

### Basic OpenAPI 3.1.x Usage

```typescript
import { Specification, Info, Paths, Schema } from 'oas-types/versions/3.1.x';

const openApiSpec: Specification = {
  openapi: "3.1.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "A sample API",
    contact: {
      name: "API Support",
      email: "support@example.com"
    },
    license: {
      name: "MIT",
      identifier: "MIT"
    }
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
                  items: { $ref: "#/components/schemas/User" }
                }
              }
            }
          }
        }
      }
    }
  } as Paths
};
```

### Schema Definitions (OpenAPI 3.1.x)

```typescript
import { 
  StringSchema, 
  ObjectSchema, 
  ArraySchema,
  Schema 
} from 'oas-types/versions/3.1.x';

// String schema with validation
const nameSchema: StringSchema = {
  type: "string",
  minLength: 1,
  maxLength: 100,
  pattern: "^[a-zA-Z\\s]+$",
  description: "User's full name"
};

// Object schema with properties
const userSchema: ObjectSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: nameSchema,
    email: { 
      type: "string", 
      format: "email" 
    }
  },
  required: ["id", "name", "email"],
  description: "User object"
};

// Array schema
const usersSchema: ArraySchema = {
  type: "array",
  items: userSchema,
  minItems: 1,
  description: "Array of users"
};
```

### Swagger 2.0 Usage

```typescript
import { Swagger, Info, Paths } from 'oas-types/versions/2.0.0';

const swaggerSpec: Swagger = {
  swagger: "2.0",
  info: {
    title: "My API",
    version: "1.0.0",
    description: "A sample API"
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
              items: { $ref: "#/definitions/User" }
            }
          }
        }
      }
    }
  } as Paths,
  definitions: {
    User: {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" }
      },
      required: ["id", "name"]
    }
  }
};
```

### Security Schemes

```typescript
import { SecurityScheme, OAuthFlows } from 'oas-types/versions/3.1.x/security';

const apiKeyAuth: SecurityScheme = {
  type: "apiKey",
  in: "header",
  name: "X-API-Key",
  description: "API key authentication"
};

const oauth2Auth: SecurityScheme = {
  type: "oauth2",
  flows: {
    authorizationCode: {
      authorizationUrl: "https://example.com/oauth/authorize",
      tokenUrl: "https://example.com/oauth/token",
      scopes: {
        "read:users": "Read user information",
        "write:users": "Modify user information"
      }
    }
  } as OAuthFlows
};
```

## 🧪 Type Safety Features

- **Strict typing** - All types follow OpenAPI specifications exactly
- **Version awareness** - Type-safe version-specific features
- **Discriminated unions** - Advanced schema type discrimination
- **Comprehensive validation** - Property constraints and validation rules
- **JSDoc documentation** - Complete documentation with spec links

## 📚 Documentation

Each type includes comprehensive JSDoc documentation with:
- **Official specification links** for each OpenAPI version
- **Usage examples** with practical implementations
- **Property documentation** with example values and constraints
- **Version compatibility notes** where applicable
- **Mutual exclusion rules** for conflicting properties

## 🔗 Key Features

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

## 🤝 Contributing

Contributions are welcome! Please ensure that:
- All types follow the OpenAPI specification exactly
- JSDoc documentation is complete and accurate
- Version compatibility is maintained
- Tests are added for new features

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [OpenAPI Specification](https://spec.openapis.org/)
- [Swagger Specification](https://swagger.io/specification/)
- [JSON Schema](https://json-schema.org/)
- [SPDX License List](https://spdx.org/licenses/)