/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { smime } from "../CMSObjectIdentifiers/smime.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { smime } from "../CMSObjectIdentifiers/smime.va";

/* START_OF_SYMBOL_DEFINITION id_ct_authData */
/**
 * @summary id_ct_authData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-authData OID ::= { smime ct(1) 2 }
 * ```
 *
 * @constant
 */
export const id_ct_authData: OID = new _OID([/* ct */ 1, 2], smime);
/* END_OF_SYMBOL_DEFINITION id_ct_authData */

/* eslint-enable */
