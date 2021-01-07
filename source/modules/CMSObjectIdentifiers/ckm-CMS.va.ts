/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION ckm_CMS */
/**
 * @summary ckm_CMS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ckm-CMS OID ::= {
 * joint-iso-itu-t(2) international-organizations(23) set(42) vendors(9) griffin(10) business(3) tecsec(0) cms(2) header(2) }
 * ```
 *
 * @constant
 */
export const ckm_CMS: OID = new _OID([
    /* joint-iso-itu-t */ 2,
    /* international-organizations */ 23,
    /* set */ 42,
    /* vendors */ 9,
    /* griffin */ 10,
    /* business */ 3,
    /* tecsec */ 0,
    /* cms */ 2,
    /* header */ 2,
]);
/* END_OF_SYMBOL_DEFINITION ckm_CMS */

/* eslint-enable */
