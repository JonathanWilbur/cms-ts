/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va";

/* START_OF_SYMBOL_DEFINITION id_messageDigest */
/**
 * @summary id_messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageDigest OID ::= { pkcs9 messageDigest(4) }
 * ```
 *
 * @constant
 */
export const id_messageDigest: OID = new _OID([/* messageDigest */ 4], pkcs9);
/* END_OF_SYMBOL_DEFINITION id_messageDigest */

/* eslint-enable */
