/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";

/* START_OF_SYMBOL_DEFINITION id_digestedData */
/**
 * @summary id_digestedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-digestedData OID ::= { pkcs7 digestedData(5) }
 * ```
 *
 * @constant
 */
export const id_digestedData: OID = new _OID([/* digestedData */ 5], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_digestedData */

/* eslint-enable */
