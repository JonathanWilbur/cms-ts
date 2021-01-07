/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { ckm_CMS } from "../CMSObjectIdentifiers/ckm-CMS.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_BitSprayMeta */
/**
 * @summary id_BitSprayMeta
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-BitSprayMeta OID ::= { ckm-CMS 12 1 }
 * ```
 *
 * @constant
 */
export const id_BitSprayMeta: OID = new _OID([12, 1], ckm_CMS);
/* END_OF_SYMBOL_DEFINITION id_BitSprayMeta */

/* eslint-enable */
