/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { dbEKM } from "../CMSObjectIdentifiers/dbEKM.va";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { dbEKM } from "../CMSObjectIdentifiers/dbEKM.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION id_SimpleString */
/**
 * @summary id_SimpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-SimpleString OID ::= { dbEKM ss(1) }
 * ```
 *
 * @constant
 */
export const id_SimpleString: OID = new _OID([/* ss */ 1], dbEKM);
/* END_OF_SYMBOL_DEFINITION id_SimpleString */

/* eslint-enable */
