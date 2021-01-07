/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_signcryptedData */
/**
 * @summary id_signcryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signcryptedData OID ::= { iso(1) member-body(2) us(840)
 * x973(10060) types(1) signcryptedData(3)}
 * ```
 *
 * @constant
 */
export const id_signcryptedData: OID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x973 */ 10060,
    /* types */ 1,
    /* signcryptedData */ 3,
]);
/* END_OF_SYMBOL_DEFINITION id_signcryptedData */

/* eslint-enable */
