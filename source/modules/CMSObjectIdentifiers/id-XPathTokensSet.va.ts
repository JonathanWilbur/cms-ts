/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_XPathTokensSet */
/**
 * @summary id_XPathTokensSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-XPathTokensSet OID ::= { id-tokenization-manifest xPathTokensSet(1) }
 * ```
 *
 * @constant
 */
export const id_XPathTokensSet: OID = new _OID(
    [/* xPathTokensSet */ 1],
    id_tokenization_manifest
);
/* END_OF_SYMBOL_DEFINITION id_XPathTokensSet */

/* eslint-enable */
