/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_cms_attributes } from "../CMSObjectIdentifiers/id-cms-attributes.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { id_cms_attributes } from "../CMSObjectIdentifiers/id-cms-attributes.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION xmlMarkup */
/**
 * @summary xmlMarkup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlMarkup OID ::= { id-cms-attributes xml(0) }
 * ```
 *
 * @constant
 */
export const xmlMarkup: OID = new _OID([/* xml */ 0], id_cms_attributes);
/* END_OF_SYMBOL_DEFINITION xmlMarkup */

/* eslint-enable */
