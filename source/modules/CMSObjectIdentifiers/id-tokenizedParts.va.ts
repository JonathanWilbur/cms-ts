/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { id_tokenization_manifest } from "../CMSObjectIdentifiers/id-tokenization-manifest.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_tokenizedParts */
/**
 * @summary id_tokenizedParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tokenizedParts OID ::= { id-tokenization-manifest tokenizedParts(0) }
 * ```
 *
 * @constant
 */
export const id_tokenizedParts: OID = new _OID(
    [/* tokenizedParts */ 0],
    id_tokenization_manifest
);
/* END_OF_SYMBOL_DEFINITION id_tokenizedParts */

/* eslint-enable */
