# Migration Guide

## Breaking Changes

This version removes backward compatibility with legacy import paths. Please update your imports to use the new clean paths.

## Import Path Changes

### Before (Legacy - Removed)
```typescript
// ❌ These import paths are no longer supported
import { SchemaObject } from 'oas-types/OpenAPI-3.1.0';
import { SchemaObject30 } from 'oas-types/OpenAPI-3.0.0';
import { SwaggerObject } from 'oas-types/Swagger-2.0';
```

### After (New Clean Paths)
```typescript
// ✅ Use these clean import paths
import { SchemaObject } from 'oas-types/3.1.0';
import { SchemaObject30 } from 'oas-types/3.0.0';
import { SwaggerObject } from 'oas-types/2.0';
```

## Complete Import Reference

### Atomic Types
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

### Utilities
```typescript
import { 
  DeepPartial, 
  DeepRequired, 
  Merge, 
  Brand,
  Versioned
} from 'oas-types/utils';
```

### Common Types
```typescript
import { 
  HttpMethod,
  HttpStatusCode,
  MimeType,
  JsonSchemaFormat
} from 'oas-types/common';
```

### Version-Specific Types
```typescript
// Swagger 2.0
import { SwaggerObject } from 'oas-types/2.0';

// OpenAPI 3.0.x
import { SchemaObject30 } from 'oas-types/3.0.0';
import { SchemaObject30 } from 'oas-types/3.0.1';
import { SchemaObject30 } from 'oas-types/3.0.2';
import { SchemaObject30 } from 'oas-types/3.0.3';
import { SchemaObject30 } from 'oas-types/3.0.4';

// OpenAPI 3.1.x
import { SchemaObject } from 'oas-types/3.1.0';
import { SchemaObject } from 'oas-types/3.1.1';
```

## Benefits of New Import Paths

1. **Cleaner and shorter** - `oas-types/3.1.0` vs `oas-types/OpenAPI-3.1.0`
2. **Consistent naming** - All versions follow the same pattern
3. **Better IDE support** - Easier autocomplete and suggestions
4. **Future-proof** - Easy to add new versions following the same pattern
5. **Reduced bundle size** - No legacy exports to maintain

## Migration Steps

1. Update all import statements to use the new paths
2. Remove any references to legacy import paths
3. Test your application to ensure everything works correctly
4. Update any documentation or examples in your codebase

## Need Help?

If you encounter any issues during migration, please:
1. Check this migration guide
2. Review the examples in `/examples/` directory
3. Open an issue on GitHub with your specific use case



