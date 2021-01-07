/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION pkcs7 */
/**
 * @summary pkcs7
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs7 OID ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs7(7) }
 * ```
 *
 * @constant
 */
export const pkcs7: OID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
]);
/* END_OF_SYMBOL_DEFINITION pkcs7 */

/* eslint-enable */
