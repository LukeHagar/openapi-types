import type { Specification } from "../../3.1";

const _nonOauthScopes: Specification = {
	openapi: "3.1.0",
	info: {
		title: "Non-oAuth Scopes example",
		version: "1.0.0",
	},
	paths: {
		"/users": {
			//@ts-expect-error This is an example specification from OpenAPI, 
			// it seems to intentionally not conform to the specification, 
			// as its meant to be a minimal example.
			get: {
				security: [
					{
						bearerAuth: ["read:users", "public"],
					},
				],
			},
		},
	},
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "jwt",
				description:
					"note: non-oauth scopes are not defined at the securityScheme level",
			},
		},
	},
};
