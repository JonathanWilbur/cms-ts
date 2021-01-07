/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_SHA1 */
/**
 * @summary ecdsa_with_SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA1 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045)
 * signatures(4) 1 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA1: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* signatures */ 4,
    1,
]);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_SHA1 */

/* eslint-enable */
