/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va";

/* START_OF_SYMBOL_DEFINITION id_data */
/**
 * @summary id_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-data OID ::= { pkcs7 data(1) }
 * ```
 *
 * @constant
 */
export const id_data: OID = new _OID([/* data */ 1], pkcs7);
/* END_OF_SYMBOL_DEFINITION id_data */

/* eslint-enable */
