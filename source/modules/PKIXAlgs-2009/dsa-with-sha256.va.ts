/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION dsa_with_sha256 */
/**
 * @summary dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa-with-sha256 OBJECT IDENTIFIER ::= {
 * joint-iso-ccitt(2) country(16) us(840) organization(1) gov(101)
 * csor(3) algorithms(4) id-dsa-with-sha2(3) 2 }
 * ```
 *
 * @constant
 */
export const dsa_with_sha256: OBJECT_IDENTIFIER = new _OID([
    /* joint-iso-ccitt */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* algorithms */ 4,
    /* id-dsa-with-sha2 */ 3,
    2,
]);
/* END_OF_SYMBOL_DEFINITION dsa_with_sha256 */

/* eslint-enable */
