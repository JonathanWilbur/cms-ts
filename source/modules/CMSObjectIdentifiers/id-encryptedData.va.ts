/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";

/* START_OF_SYMBOL_DEFINITION id_encryptedData */
/**
 * @summary id_encryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-encryptedData OID ::= { pkcs7 encryptedData (6) }
 * ```
 *
 * @constant
 */
export const id_encryptedData: OID = new _OID([/* encryptedData */ 6], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_encryptedData */

/* eslint-enable */
