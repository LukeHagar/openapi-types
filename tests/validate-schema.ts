#!/usr/bin/env bun

import { readFileSync } from "fs";
import { resolve } from "path";

// Simple JSON Schema validation function
function validateAgainstSchema(
  data: any,
  schema: any
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Basic validation logic (simplified)
  if (schema.required) {
    for (const field of schema.required) {
      if (!(field in data)) {
        errors.push(`Missing required field: ${field}`);
      }
    }
  }

  if (schema.type) {
    if (schema.type === "object" && typeof data !== "object") {
      errors.push(`Expected object, got ${typeof data}`);
    } else if (schema.type === "string" && typeof data !== "string") {
      errors.push(`Expected string, got ${typeof data}`);
    } else if (schema.type === "array" && !Array.isArray(data)) {
      errors.push(`Expected array, got ${typeof data}`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

async function validateOpenAPIDocument(
  filePath: string,
  version: string = "3.0"
): Promise<void> {
  try {
    console.log(`🔍 Validating OpenAPI document: ${filePath}`);
    console.log(`📋 Using OpenAPI ${version} schema`);

    // Load the document
    const document = JSON.parse(readFileSync(filePath, "utf-8"));

    // Load the appropriate schema
    const schemaPath = resolve(`./schemas/${version}/main/specification.json`);
    const schema = JSON.parse(readFileSync(schemaPath, "utf-8"));

    // Validate
    const result = validateAgainstSchema(document, schema);

    if (result.valid) {
      console.log("✅ Document is valid!");
    } else {
      console.log("❌ Document has validation errors:");
      result.errors.forEach((error) => console.log(`  - ${error}`));
    }
  } catch (error) {
    console.error("❌ Validation failed:", error);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(
      "Usage: bun run scripts/validate-schema.ts <openapi-file> [version]"
    );
    console.log(
      "Example: bun run scripts/validate-schema.ts ./my-api.json 3.0"
    );
    return;
  }

  const filePath = args[0];
  const version = args[1] || "3.0";

  if (!filePath) {
    console.error("❌ Error: File path is required");
    return;
  }

  await validateOpenAPIDocument(filePath, version);
}

// Run the script
main().catch(console.error);
