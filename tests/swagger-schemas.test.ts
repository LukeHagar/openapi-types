import { describe, it, expect } from "bun:test";
import Ajv, { type JSONSchemaType } from "ajv";
import type { Specification } from "../2.0";
import { schemas } from "../schemas/2.0";

// Import all specification files from tests/2.0
import { apiWithExamples } from "./2.0/api-with-examples";
import { petstore } from "./2.0/petstore";
import { petstoreWithExternalDocs } from "./2.0/petstore-with-external-docs";
import { petstoreSimple } from "./2.0/petstore-simple";
import { petstoreMinimal } from "./2.0/petstore-minimal";
import { petstoreExpanded } from "./2.0/petstore-expanded";
import { uber } from "./2.0/uber";

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
  { name: "Petstore", spec: petstore },
  { name: "Petstore with External Docs", spec: petstoreWithExternalDocs },
  { name: "Petstore Simple", spec: petstoreSimple },
  { name: "Petstore Minimal", spec: petstoreMinimal },
  { name: "Petstore Expanded", spec: petstoreExpanded },
  { name: "Uber API", spec: uber },
];

describe("Swagger 2.0 Schema Validation", () => {
  for (const { name, spec } of specsToTest) {
    describe(name, () => {
      it("should be a valid Swagger 2.0 specification", () => {
        const isValid = validate(spec);

        if (!isValid) {
          console.error(`Validation errors for ${name}:`, validate.errors);
        }

        expect(isValid).toBe(true);
      });

      it("should have required swagger version", () => {
        expect(spec.swagger).toBe("2.0");
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

      it("should have valid definitions object", () => {
        if (spec.definitions) {
          expect(typeof spec.definitions).toBe("object");
          expect(spec.definitions).not.toBeNull();
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

    it("should have consistent swagger version across all specs", () => {
      const versions = specsToTest.map(({ spec }) => spec.swagger);
      const uniqueVersions = [...new Set(versions)];

      expect(uniqueVersions).toHaveLength(1);
      expect(uniqueVersions[0]).toBe("2.0");
    });

    it("should have valid host format when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.host) {
          // Host should not contain protocol
          expect(spec.host).not.toMatch(/^https?:\/\//);
          // Host should not contain path
          expect(spec.host).not.toContain("/");
        }
      });
    });

    it("should have valid basePath format when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.basePath) {
          // BasePath should start with /
          expect(spec.basePath).toMatch(/^\//);
        }
      });
    });

    it("should have valid schemes when present", () => {
      specsToTest.forEach(({ name, spec }) => {
        if (spec.schemes) {
          expect(Array.isArray(spec.schemes)).toBe(true);
          spec.schemes.forEach((scheme: string) => {
            expect(["http", "https", "ws", "wss"]).toContain(scheme);
          });
        }
      });
    });
  });
});
