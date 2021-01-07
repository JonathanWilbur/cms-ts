/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va";

/* START_OF_SYMBOL_DEFINITION smime */
/**
 * @summary smime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smime OID ::= { pkcs9 smime(16) }
 * ```
 *
 * @constant
 */
export const smime: OID = new _OID([/* smime */ 16], pkcs9);
/* END_OF_SYMBOL_DEFINITION smime */

/* eslint-enable */
