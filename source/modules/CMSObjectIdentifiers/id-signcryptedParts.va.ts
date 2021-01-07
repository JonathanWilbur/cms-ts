/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";

/* START_OF_SYMBOL_DEFINITION id_signcryptedParts */
/**
 * @summary id_signcryptedParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signcryptedParts OID ::= { signcryption-manifest signcryptedParts(1) }
 * ```
 *
 * @constant
 */
export const id_signcryptedParts: OID = new _OID(
    [/* signcryptedParts */ 1],
    signcryption_manifest
);
/* END_OF_SYMBOL_DEFINITION id_signcryptedParts */

/* eslint-enable */
