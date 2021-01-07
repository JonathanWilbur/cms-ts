/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_ckm_recip_info2 */
/**
 * @summary id_ckm_recip_info2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-recip-info2 OID ::= { iso member-body(2) us(840) x973(10060) km(2) 2}
 * ```
 *
 * @constant
 */
export const id_ckm_recip_info2: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 2],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_ckm_recip_info2 */

/* eslint-enable */
