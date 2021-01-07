/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";

/* START_OF_SYMBOL_DEFINITION xPath */
/**
 * @summary xPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPath OID ::= { signcryption-manifest xPath(0) }
 * ```
 *
 * @constant
 */
export const xPath: OID = new _OID([/* xPath */ 0], signcryption_manifest);
/* END_OF_SYMBOL_DEFINITION xPath */

/* eslint-enable */
