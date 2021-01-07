/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_Secryptm */
/**
 * @summary id_Secryptm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-Secryptm OID ::= { ckm-CMS 2 }
 * ```
 *
 * @constant
 */
export const id_Secryptm: OID = new _OID([2], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_Secryptm */

/* eslint-enable */
