/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_ckm_algorithms */
/**
 * @summary id_ckm_algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-algorithms OID ::= { iso member-body(2) us(840) x973(10060) algorithms(3) }
 * ```
 *
 * @constant
 */
export const id_ckm_algorithms: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* algorithms */ 3],
    iso
);
/* END_OF_SYMBOL_DEFINITION id_ckm_algorithms */

/* eslint-enable */
