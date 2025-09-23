# OpenAPI Types

Comprehensive TypeScript definitions for all OpenAPI specification versions with a layered, version-aware architecture.

## 🏗️ Architecture

This library follows a **layered, version-aware types library** approach where:

- **`atoms/`** - Contains canonical atomic types (common building blocks across OpenAPI versions)
- **`3.0.0/`, `3.1.0/`, etc.** - Version-specific folders that extend/adapt atomic types
- **`utils/`** - Shared helper types and utilities
- **`common.ts`** - Common types and enums used across versions

## 📦 Installation

```bash
npm install oas-types
# or
yarn add oas-types
# or
bun add oas-types
```

## 🚀 Usage

### Import Atomic Types

```typescript
import { 
  ContactObject, 
  LicenseObject, 
  InfoObject, 
  ExternalDocumentationObject,
  TagObject,
  ReferenceObject,
  ServerObject,
  ServerVariableObject
} from 'oas-types/atoms';
```

### Import Version-Specific Types

```typescript
// OpenAPI 3.0.0
import { SchemaObject30 } from 'oas-types/3.0.0';

// OpenAPI 3.1.0
import { SchemaObject } from 'oas-types/3.1.0';

// OpenAPI 3.1.1
import { SchemaObject as SchemaObject311 } from 'oas-types/3.1.1';

// Swagger 2.0
import { SwaggerObject } from 'oas-types/2.0';
```

### Import Utilities

```typescript
import { 
  DeepPartial, 
  DeepRequired, 
  Merge, 
  Versioned,
  Brand,
  Nominal 
} from 'oas-types/utils';
```

### Import Common Types

```typescript
import { 
  HttpMethod,
  HttpStatusCode,
  MimeType,
  JsonSchemaFormat
} from 'oas-types/common';
```

## 📁 Project Structure

```
openapi-types/
├── src/
│   ├── atoms/                # Atomic building blocks (common across versions)
│   │   ├── Contact.ts        # Contact Object
│   │   ├── License.ts        # License Object
│   │   ├── Info.ts           # Info Object
│   │   ├── ExternalDocs.ts   # External Documentation Object
│   │   ├── Tag.ts            # Tag Object
│   │   ├── Reference.ts      # Reference Object
│   │   ├── Server.ts         # Server Object
│   │   ├── ServerVariable.ts # Server Variable Object
│   │   └── index.ts          # Exports for all atoms
│   │
│   ├── utils/                # Shared helpers for composing, deep partials, etc.
│   │   └── index.ts
│   │
│   ├── 3.0.0/                # Version-specific directory
│   │   ├── index.ts          # Exports version 3.0.0 types
│   │   └── schema.ts         # Version-specific overrides/augments
│   │
│   ├── 3.0.1/                # Same pattern, with differences from 3.0.0
│   ├── 3.0.2/
│   ├── 3.0.3/
│   ├── 3.0.4/
│   ├── 3.1.0/
│   ├── 3.1.1/
│   └── index.ts              # Public entrypoint (exports all versions + common)
│
└── package.json
```

## 🎯 Philosophy

### Atomic Types (atoms/)
These are the minimal, composable, strongly typed building blocks — the "vocabulary" of OpenAPI. Examples: `InfoObject`, `ExternalDocumentationObject`, `ContactObject`, `TagObject`, etc.

### Composable Types (version folders)
Each OpenAPI version folder builds on the atoms and makes modifications for that version. For example:
- `SchemaObject` in **3.0.0** vs. **3.1.0** (3.1.0 aligns with JSON Schema 2020-12)
- `CallbackObject` was introduced in **3.0.0** and remains consistent in later versions

### Strictness & Atomic Detail
Each type follows the spec **literally and atomically** (no "loose" union types unless the spec requires it). For example:
- Don't just say `string` for a field, define `type UrlString = string;` so it can be reused in multiple contexts

### Version Awareness
If something is unchanged between versions, **reexport from atoms/**. If something changes, **extend or override** in the version folder.

## 📋 Supported Versions

- **Swagger 2.0** (OpenAPI Specification v2.0)
- **OpenAPI 3.0.0** - Initial OpenAPI 3.0 release
- **OpenAPI 3.0.1** - Bug fixes and clarifications
- **OpenAPI 3.0.2** - Bug fixes and clarifications
- **OpenAPI 3.0.3** - Bug fixes and clarifications
- **OpenAPI 3.0.4** - Bug fixes and clarifications
- **OpenAPI 3.1.0** - Major update with JSON Schema 2020-12 alignment
- **OpenAPI 3.1.1** - Bug fixes and clarifications

## 🔧 Examples

### Basic Usage

```typescript
import { InfoObject, ContactObject, LicenseObject } from 'oas-types/atoms';

const info: InfoObject = {
  title: 'My API',
  version: '1.0.0',
  description: 'A sample API',
  contact: {
    name: 'API Support',
    email: 'support@example.com',
    url: 'https://example.com/support'
  } as ContactObject,
  license: {
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  } as LicenseObject
};
```

### Version-Specific Schema Usage

```typescript
// OpenAPI 3.0.0 schema
import { SchemaObject30 } from 'oas-types/3.0.0';

const schema30: SchemaObject30 = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer', minimum: 0 }
  },
  required: ['name'],
  nullable: true // 3.0.0 specific
};

// OpenAPI 3.1.0 schema (JSON Schema 2020-12 aligned)
import { SchemaObject } from 'oas-types/3.1.0';

const schema31: SchemaObject = {
  type: ['string', 'null'], // 3.1.0 uses union types instead of nullable
  const: 'example', // 3.1.0 specific
  pattern: '^[a-zA-Z]+$'
};
```

### Using Utilities

```typescript
import { DeepPartial, Merge, Brand } from 'oas-types/utils';
import { InfoObject } from 'oas-types/atoms';

// Deep partial for optional configuration
type PartialConfig = DeepPartial<InfoObject>;

// Merge types
type ExtendedInfo = Merge<InfoObject, { 
  customField: string 
}>;

// Branded types for better type safety
type UserId = Brand<string, 'UserId'>;
type ProductId = Brand<string, 'ProductId'>;
```

## 🧪 Type Safety Features

- **Strict typing** - All types follow the OpenAPI specification exactly
- **Version awareness** - Type-safe version-specific features
- **Atomic composition** - Build complex types from simple building blocks
- **Utility types** - Comprehensive set of helper types for common patterns
- **JSDoc documentation** - Complete documentation with spec links

## 📚 Documentation

Each type includes comprehensive JSDoc documentation with:
- Links to the official OpenAPI specification
- Usage examples
- Version compatibility notes
- Type constraints and validation rules

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