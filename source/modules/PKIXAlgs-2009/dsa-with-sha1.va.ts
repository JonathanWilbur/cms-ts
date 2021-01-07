/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION dsa_with_sha1 */
/**
 * @summary dsa_with_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsa-with-sha1 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) x9-57(10040) x9algorithm(4) 3 }
 * ```
 *
 * @constant
 */
export const dsa_with_sha1: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    3,
]);
/* END_OF_SYMBOL_DEFINITION dsa_with_sha1 */

/* eslint-enable */
