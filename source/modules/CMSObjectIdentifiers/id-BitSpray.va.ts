/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_BitSpray */
/**
 * @summary id_BitSpray
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BitSpray OID ::= { ckm-CMS 12 }
 * ```
 *
 * @constant
 */
export const id_BitSpray: OID = new _OID([12], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_BitSpray */

/* eslint-enable */
