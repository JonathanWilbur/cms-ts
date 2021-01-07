/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { xmlMarkup } from "../CMSObjectIdentifiers/xmlMarkup.va";

/* START_OF_SYMBOL_DEFINITION id_cms_SAML */
/**
 * @summary id_cms_SAML
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cms-SAML OID ::= { xmlMarkup saml(1) }
 * ```
 *
 * @constant
 */
export const id_cms_SAML: OID = new _OID([/* saml */ 1], xmlMarkup);
/* END_OF_SYMBOL_DEFINITION id_cms_SAML */

/* eslint-enable */
