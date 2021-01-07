/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION cms */
/**
 * @summary cms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cms OID ::= { iso(1) identified-organization(3) tc68(133) country(16) x9(840)
 * x9Standards(9) x9-73(73) namespaces(2) cms(0) }
 * ```
 *
 * @constant
 */
export const cms: OID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* namespaces */ 2,
    /* cms */ 0,
]);
/* END_OF_SYMBOL_DEFINITION cms */

/* eslint-enable */
