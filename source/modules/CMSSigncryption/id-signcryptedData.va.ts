/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION id_signcryptedData */
/**
 * @summary id_signcryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signcryptedData     OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24) cms-profile(894) signcryption(0) data(0)}
 * ```
 *
 * @constant
 */
export const id_signcryptedData: OBJECT_IDENTIFIER = new _OID(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* signcryption */ 0,
        /* data */ 0,
    ],
    itu_t
);
/* END_OF_SYMBOL_DEFINITION id_signcryptedData */

/* eslint-enable */
