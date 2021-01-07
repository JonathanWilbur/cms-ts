/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_ckm_recip_info */
/**
 * @summary id_ckm_recip_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-recip-info OID ::= { iso member-body(2) us(840) x973(10060) km(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ckm_recip_info: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 1],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_ckm_recip_info */

/* eslint-enable */
