/* eslint-disable */
import { TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca";
import { xPathTokensManifest } from "../TokenizationManifest/xPathTokensManifest.oa";
export { TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca";
export { xPathTokensManifest } from "../TokenizationManifest/xPathTokensManifest.oa";

/* START_OF_SYMBOL_DEFINITION Manifest */
/**
 * @summary Manifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Manifest TOKENIZED ::= {
 * xPathTokensManifest,
 * ...  -- Expect additional manifest objects --
 * }
 * ```
 *
 * @constant
 * @type {TOKENIZED[]}
 *
 */
export const Manifest: TOKENIZED[] = [xPathTokensManifest];
/* END_OF_SYMBOL_DEFINITION Manifest */

/* eslint-enable */
