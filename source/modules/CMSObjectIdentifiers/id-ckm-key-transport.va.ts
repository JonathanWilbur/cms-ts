/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_ckm_key_transport */
/**
 * @summary id_ckm_key_transport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-key-transport OID ::= { id-ckm-algorithms key-transport(2) }
 * ```
 *
 * @constant
 */
export const id_ckm_key_transport: OID = new _OID(
    [/* key-transport */ 2],
    id_ckm_algorithms
);
/* END_OF_SYMBOL_DEFINITION id_ckm_key_transport */

/* eslint-enable */
