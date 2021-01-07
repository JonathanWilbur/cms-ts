/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_smime } from "../SecureMimeMessageV3dot1-2009/id-smime.va";
export { id_smime } from "../SecureMimeMessageV3dot1-2009/id-smime.va";

/* START_OF_SYMBOL_DEFINITION id_cap */
/**
 * @summary id_cap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cap  OBJECT IDENTIFIER ::= { id-smime 11 }
 * ```
 *
 * @constant
 */
export const id_cap: OBJECT_IDENTIFIER = new _OID([11], id_smime);
/* END_OF_SYMBOL_DEFINITION id_cap */

/* eslint-enable */
