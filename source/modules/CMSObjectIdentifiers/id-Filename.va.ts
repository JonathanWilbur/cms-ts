/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_Filename */
/**
 * @summary id_Filename
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Filename OID ::= { ckm-CMS 5 }
 * ```
 *
 * @constant
 */
export const id_Filename: OID = new _OID([5], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_Filename */

/* eslint-enable */
