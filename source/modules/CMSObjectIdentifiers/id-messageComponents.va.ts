/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va";

/* START_OF_SYMBOL_DEFINITION id_messageComponents */
/**
 * @summary id_messageComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageComponents OID ::= { xmlMarkup mc(3) }
 * ```
 *
 * @constant
 */
export const id_messageComponents: OID = new _OID([/* mc */ 3], xmlMarkup);
/* END_OF_SYMBOL_DEFINITION id_messageComponents */

/* eslint-enable */
