import { describe, it, expect } from "bun:test";
import Ajv, { type JSONSchemaType } from "ajv";
import type { Specification } from "../3.0";
import { schemas } from "../schemas/3.0";

// Import all specification files from tests/3.0
import { apiWithExamples } from "./3.0/api-with-examples";
import { callbackExample } from "./3.0/callback-example";
import { linkExample } from "./3.0/link-example";
import { petstore } from "./3.0/petstore";
import { petstoreExpanded } from "./3.0/petstore-expanded";
import { uspto } from "./3.0/uspto";

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false,
});

const schema: JSONSchemaType<Specification> = JSON.parse(
  JSON.stringify(schemas.specification)
);

// validate is a type guard for Specification - type is inferred from schema type
const validate = ajv.compile(schema);

// All specification files to test
const specsToTest = [
  { name: "API with Examples", spec: apiWithExamples },
  { name: "Callback Example", spec: callbackExample },
  { name: "Link Example", spec: linkExample },
  { name: "Petstore", spec: petstore },
  { name: "Petstore Expanded", spec: petstoreExpanded },
  { name: "USPTO", spec: uspto },
];

describe("OpenAPI 3.0 Schema Validation", () => {
  for (const { name, spec } of specsToTest) {
    describe(name, () => {
      it("should be a valid OpenAPI 3.0 specification", () => {
        const isValid = validate(spec);

        if (!isValid) {
          console.error(`Validation errors for ${name}:`, validate.errors);
        }

        expect(isValid).toBe(true);
      });

      it("should have required openapi version", () => {
        expect(spec.openapi).toMatch(/^3\.0\.\d+$/);
      });

      it("should have required info object", () => {
        expect(spec.info).toBeDefined();
        expect(spec.info.title).toBeDefined();
        expect(spec.info.version).toBeDefined();
      });

      it("should have valid paths object", () => {
        if (spec.paths) {
          expect(typeof spec.paths).toBe("object");
          expect(spec.paths).not.toBeNull();
        }
      });

      it("should have valid components object", () => {
        if (spec.components) {
          expect(typeof spec.components).toBe("object");
          expect(spec.components).not.toBeNull();
        }
      });

      it("should have valid servers array when present", () => {
        if (spec.servers) {
          expect(Array.isArray(spec.servers)).toBe(true);
          spec.servers.forEach((server) => {
            expect(server.url).toBeDefined();
            expect(typeof server.url).toBe("string");
          });
        }
      });
    });
  }

  describe("Schema Validation Details", () => {
    it("should validate all specifications against the JSON schema", () => {
      const results = specsToTest.map(({ name, spec }) => {
        const isValid = validate(spec);
        return { name, isValid, errors: validate.errors };
      });

      const failedSpecs = results.filter((result) => !result.isValid);

      if (failedSpecs.length > 0) {
        console.error("Failed specifications:");
        failedSpecs.forEach(({ name, errors }) => {
          console.error(`${name}:`, errors);
        });
      }

      expect(failedSpecs.length).toBe(0);
    });

    it("should have consistent openapi version across all specs", () => {
      const versions = specsToTest.map(({ spec }) => spec.openapi);
      const uniqueVersions = [...new Set(versions)];

      expect(uniqueVersions.length).toBeGreaterThan(0);
      uniqueVersions.forEach((version) => {
        expect(version).toMatch(/^3\.0\.\d+$/);
      });
    });

    it("should have valid server URLs when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.servers) {
          spec.servers.forEach((server) => {
            // Server URL should be a valid URL format
            expect(server.url).toMatch(/^https?:\/\/|^\/|^\{/);
          });
        }
      });
    });

    it("should have valid server variables when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.servers) {
          spec.servers.forEach((server) => {
            if (server.variables) {
              expect(typeof server.variables).toBe("object");
              Object.values(server.variables).forEach((variable) => {
                expect(variable).toHaveProperty("default");
              });
            }
          });
        }
      });
    });

    it("should have valid tags when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.tags) {
          expect(Array.isArray(spec.tags)).toBe(true);
          spec.tags.forEach((tag) => {
            expect(tag.name).toBeDefined();
            expect(typeof tag.name).toBe("string");
          });
        }
      });
    });

    it("should have valid security schemes when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.components?.securitySchemes) {
          expect(typeof spec.components.securitySchemes).toBe("object");
          Object.values(spec.components.securitySchemes).forEach((scheme) => {
            // Type guard to check if it's not a Reference
            if (!("$ref" in scheme)) {
              expect(scheme).toHaveProperty("type");
              expect(scheme.type).toBeDefined();
              expect(["apiKey", "http", "oauth2", "openIdConnect"]).toContain(
                scheme.type
              );
            }
          });
        }
      });
    });
  });
});
