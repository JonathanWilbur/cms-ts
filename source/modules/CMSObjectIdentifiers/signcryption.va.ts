/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION signcryption */
/**
 * @summary signcryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryption OID ::= { iso(1) identified-organization(3) tc68(133)
 * country(16) x9(840) x9Standards(9) x9-73(73) signcryption(4) }
 * ```
 *
 * @constant
 */
export const signcryption: OID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* signcryption */ 4,
]);
/* END_OF_SYMBOL_DEFINITION signcryption */

/* eslint-enable */
