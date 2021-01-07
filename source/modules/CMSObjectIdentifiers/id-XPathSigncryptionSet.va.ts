/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va";

/* START_OF_SYMBOL_DEFINITION id_XPathSigncryptionSet */
/**
 * @summary id_XPathSigncryptionSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-XPathSigncryptionSet OID ::= { signcryption-manifest xPathSigncryptionSet(2) }
 * ```
 *
 * @constant
 */
export const id_XPathSigncryptionSet: OID = new _OID(
    [/* xPathSigncryptionSet */ 2],
    signcryption_manifest
);
/* END_OF_SYMBOL_DEFINITION id_XPathSigncryptionSet */

/* eslint-enable */
