import type { spdxLicenseList } from "./SPDXLicenseList";

/**
 * Generic helper for creating "open enums".
 *
 * Provides IntelliSense suggestions for known values `T`,
 * but still allows arbitrary strings without collapsing to plain `string`.
 *
 * @template T - The known literal values (string union)
 */
type OpenEnum<T extends string> = T | (string & { __openEnum?: never });

/**
 * Known license Names.
 *
 * SPDX License List from spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type KnownLicenseNames =
	(typeof spdxLicenseList)[keyof typeof spdxLicenseList]["name"];

/**
 * Known license SPDX Identifiers.
 *
 * SPDX License List from spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type KnownLicenseIdentifiers = keyof typeof spdxLicenseList;

/**
 * Known license SPDX URLs.
 *
 * SPDX License List from spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type KnownLicenseURLs = {
	[K in keyof typeof spdxLicenseList]: (typeof spdxLicenseList)[K] extends {
		url: infer U;
	}
		? U extends string
			? U
			: never
		: never;
}[keyof typeof spdxLicenseList];

/**
 * Open enum of SPDX license names.
 * Suggests all known license names, but also accepts custom strings.
 *
 * The SPDX License List is sourced from the spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type LicenseName = OpenEnum<KnownLicenseNames>;

/**
 * Open enum of SPDX license identifiers.
 * Suggests all known SPDX identifiers, but also accepts custom strings.
 *
 * The SPDX License List is sourced from the spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type LicenseIdentifier = OpenEnum<KnownLicenseIdentifiers>;

/**
 * Open enum of SPDX license URLs.
 * Suggests all known license URLs, but also accepts custom strings.
 *
 * The SPDX License List is sourced from the spdx-license-list npm package
 * Imported here as const to provide richer types for the License type.
 * @see {@link https://spdx.org/licenses/ | SPDX License List}
 * @see {@link https://www.npmjs.com/package/spdx-license-list | spdx-license-list NPM Package}
 */
export type LicenseURL = OpenEnum<KnownLicenseURLs>;
