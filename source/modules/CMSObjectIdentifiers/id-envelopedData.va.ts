/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";

/* START_OF_SYMBOL_DEFINITION id_envelopedData */
/**
 * @summary id_envelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-envelopedData OID ::= { pkcs7 envelopedData (3) }
 * ```
 *
 * @constant
 */
export const id_envelopedData: OID = new _OID([/* envelopedData */ 3], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_envelopedData */

/* eslint-enable */
