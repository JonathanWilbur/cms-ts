/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_dbekm_recip_info */
/**
 * @summary id_dbekm_recip_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dbekm-recip-info OID ::= { iso member-body(2) us(840) x973(10060) km(2) 3 }
 * ```
 *
 * @constant
 */
export const id_dbekm_recip_info: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 3],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_dbekm_recip_info */

/* eslint-enable */
