/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_ckm_key_agree_hash */
/**
 * @summary id_ckm_key_agree_hash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-key-agree-hash OID ::= { id-ckm-algorithms key-agree-hash(4) }
 * ```
 *
 * @constant
 */
export const id_ckm_key_agree_hash: OID = new _OID(
    [/* key-agree-hash */ 4],
    id_ckm_algorithms
);
/* END_OF_SYMBOL_DEFINITION id_ckm_key_agree_hash */

/* eslint-enable */
