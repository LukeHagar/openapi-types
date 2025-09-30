#!/usr/bin/env bun

/**
 * OpenAPI Types Build Script
 *
 * This script generates JSON schemas for all OpenAPI specification versions
 * and performs the complete build process for the package.
 */

import { resolve } from "path";
import { createGenerator } from "ts-json-schema-generator";
import { writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { rimrafSync } from "rimraf";

// Configuration for schema generation
const generatorConfig = {
  path: "",
  tsconfig: "./tsconfig.json",
  expose: "export" as const,
  jsDoc: "extended" as const,
  markdownDescription: true,
  fullDescription: true,
  additionalProperties: false,
  strictTuples: false,
  topRef: true,
  sortProps: true,
  skipTypeCheck: false,
  encodeRefs: true,
  minify: false,
};

// OpenAPI versions to process
const versions = ["2.0", "3.0", "3.1", "3.2"] as const;

interface BuildResult {
  version: string;
  type: string;
  success: boolean;
  error?: string;
  outputPath?: string;
}

interface SchemaInfo {
  name: string;
  path: string;
  schema: any;
}

const schemasToGenerate = {
  "2.0": ["Schema", "Parameter", "Response", "PathItem"],
  "3.0": [
    "Schema",
    "Response",
    "Parameter",
    "Example",
    "RequestBody",
    "Header",
    "SecurityScheme",
    "Link",
    "Callback",
  ],
  "3.1": [
    "Schema",
    "Response",
    "Parameter",
    "Example",
    "RequestBody",
    "Header",
    "SecurityScheme",
    "Link",
    "Callback",
    "PathItem",
  ],
  "3.2": [
    "Schema",
    "Response",
    "Parameter",
    "Example",
    "RequestBody",
    "Header",
    "SecurityScheme",
    "Link",
    "Callback",
    "PathItem",
    "MediaType",
  ],
};

async function generateAllSchemasForVersion(
  version: string
): Promise<BuildResult[]> {
  const results: BuildResult[] = [];
  const outputDir = resolve(`./schemas/${version}`);

  rimrafSync(outputDir);

  // Ensure output directory exists
  mkdirSync(`${outputDir}/main`, { recursive: true });
  mkdirSync(`${outputDir}/components`, { recursive: true });

  console.log(`📦 Processing OpenAPI ${version}...`);

  try {
    // Get the main spec file
    const specFile = resolve(`./${version}/spec.ts`);

    if (!existsSync(specFile)) {
      console.warn(`⚠️  Spec file not found: ${specFile}`);
      return results;
    }

    // Create generator with version-specific config
    const config = {
      ...generatorConfig,
      path: specFile,
    };

    const generator = createGenerator(config);

    // Generate schema for ALL exported types at once
    try {
      console.log(
        `🔍 Generating schemas for all exported types in ${version}...`
      );
      const schema = generator.createSchema(); // No type parameter = all types

      if (schema && schema.definitions) {
        const definitions = schema.definitions;
        const definitionNames = Object.keys(definitions);

        console.log(
          `📋 Found ${
            definitionNames.length
          } exported types: ${definitionNames.join(", ")}`
        );

        // Generate main specification schema (if it exists)
        if (definitions.Specification) {
          const specSchema = {
            $schema: "http://json-schema.org/draft-07/schema#",
            ...(definitions.Specification as any),
            definitions: definitions,
          };

          const outputPath = `${outputDir}/main/specification.json`;
          writeFileSync(outputPath, JSON.stringify(specSchema, null, 2));
          results.push({
            version,
            type: "Specification",
            success: true,
            outputPath,
          });
          console.log(`✅ Generated main schema for ${version}/Specification`);
        }

        // Generate individual component schemas
        for (const [typeName, typeSchema] of Object.entries(definitions)) {
          if (typeName === "Specification") continue; // Skip main spec, already handled
          if (
            !schemasToGenerate[
              version as keyof typeof schemasToGenerate
            ].includes(typeName)
          )
            continue; // Skip types that are not in the schemasToGenerate object

          try {
            const componentSchema = {
              $schema: "http://json-schema.org/draft-07/schema#",
              ...(typeSchema as any),
              definitions: definitions, // Include all definitions for references
            };

            const outputPath = `${outputDir}/components/${typeName.toLowerCase()}.json`;
            writeFileSync(outputPath, JSON.stringify(componentSchema, null, 2));

            results.push({
              version,
              type: typeName,
              success: true,
              outputPath,
            });
            console.log(
              `✅ Generated component schema for ${version}/${typeName}`
            );
          } catch (error) {
            results.push({
              version,
              type: typeName,
              success: false,
              error: error instanceof Error ? error.message : String(error),
            });
            console.error(
              `❌ Failed to generate schema for ${version}/${typeName}:`,
              error
            );
          }
        }
      } else {
        results.push({
          version,
          type: "all",
          success: false,
          error: "No definitions found in generated schema",
        });
        console.error(`❌ No definitions found for ${version}`);
      }
    } catch (error) {
      results.push({
        version,
        type: "all",
        success: false,
        error: error instanceof Error ? error.message : String(error),
      });
      console.error(`❌ Failed to generate schemas for ${version}:`, error);
    }
  } catch (error) {
    console.error(`❌ Failed to process version ${version}:`, error);
    // @ts-ignore
    console.log(error.diagnostic);
    results.push({
      version,
      type: "all",
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  return results;
}

async function generateIndexFiles(): Promise<void> {
  console.log("📝 Generating index.ts files...");

  // Generate index.ts for each version
  for (const version of versions) {
    const outputDir = resolve(`./schemas/${version}`);
    const indexPath = `${outputDir}/index.ts`;

    // Check if main specification exists
    const hasMainSpec = existsSync(`${outputDir}/main/specification.json`);

    let indexContent = `/**
 * OpenAPI ${version} JSON Schemas
 *
 * This file exports all available JSON schemas for OpenAPI ${version} specification.
 * These schemas can be used to validate OpenAPI ${version} documents and components.
 */

`;

    // Add main specification export if it exists
    if (hasMainSpec) {
      indexContent += `export { default as specification } from "./main/specification.json";\n\n`;
    }

    // Add component exports - dynamically discover all component files
    indexContent += `// Component schemas\n`;

    const componentsDir = `${outputDir}/components`;
    let componentFiles: string[] = [];

    if (existsSync(componentsDir)) {
      componentFiles = readdirSync(componentsDir)
        .filter((file) => file.endsWith(".json"))
        .map((file) => file.replace(".json", ""));

      for (const component of componentFiles) {
        const componentName =
          component.charAt(0).toUpperCase() + component.slice(1);
        indexContent += `export { default as ${component} } from "./components/${component}.json";\n`;
      }
    }

    // Add imports and schemas object
    indexContent += `\n// Import all schemas for internal use\n`;
    if (hasMainSpec) {
      indexContent += `import specification from "./main/specification.json";\n`;
    }

    for (const component of componentFiles) {
      indexContent += `import ${component} from "./components/${component}.json";\n`;
    }

    indexContent += `\n// Re-export all schemas as a single object for convenience\nexport const schemas = {\n`;

    if (hasMainSpec) {
      indexContent += `  specification,\n`;
    }

    for (const component of componentFiles) {
      indexContent += `  ${component},\n`;
    }

    indexContent += `} as const;\n\n`;

    writeFileSync(indexPath, indexContent);
    console.log(`✅ Generated index.ts for ${version}`);
  }

  // Generate main schemas index.ts
  const mainIndexPath = resolve(`./schemas/index.ts`);
  const mainIndexContent = `/**
 * OpenAPI JSON Schemas
 *
 * This file exports all available JSON schemas for all OpenAPI specification versions.
 * These schemas can be used to validate OpenAPI documents and components.
 */

// Export schemas for each version
export * as schemas2_0 from "./2.0";
export * as schemas3_0 from "./3.0";
export * as schemas3_1 from "./3.1";
export * as schemas3_2 from "./3.2";

import { schemas as schemas2_0 } from "./2.0";
import { schemas as schemas3_0 } from "./3.0";
import { schemas as schemas3_1 } from "./3.1";
import { schemas as schemas3_2 } from "./3.2";

// Export all schemas in a single object organized by version
export const allSchemas = {
  "2.0": schemas2_0,
  "3.0": schemas3_0,
  "3.1": schemas3_1,
  "3.2": schemas3_2,
} as const;
`;

  writeFileSync(mainIndexPath, mainIndexContent);
  console.log("✅ Generated main schemas index.ts");
}

async function main() {
  console.log("🚀 Starting OpenAPI Types build process...\n");

  const allResults: BuildResult[] = [];

  // Generate schemas for each version
  for (const version of versions) {
    const results = await generateAllSchemasForVersion(version);
    allResults.push(...results);
    console.log(`✅ Completed OpenAPI ${version}\n`);
  }

  // Generate index files
  await generateIndexFiles();

  // Summary
  const successful = allResults.filter((r) => r.success);
  const failed = allResults.filter((r) => !r.success);

  console.log("📊 Build Summary:");
  console.log(`✅ Successful: ${successful.length}`);
  console.log(`❌ Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log("\n❌ Failed generations:");
    failed.forEach((result) => {
      console.log(`  - ${result.version}/${result.type}: ${result.error}`);
    });
  }

  console.log("\n🎉 Build complete!");
  console.log("📁 Generated schemas are available in the 'schemas/' directory");
  console.log("📖 See schemas/README.md for usage instructions");
}

// Run the build script
main().catch(console.error);
