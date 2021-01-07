/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";

/* START_OF_SYMBOL_DEFINITION signcrypted_attributes */
/**
 * @summary signcrypted_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-attributes OID ::= { signcryption-mode attributes(2) }
 * ```
 *
 * @constant
 */
export const signcrypted_attributes: OID = new _OID(
    [/* attributes */ 2],
    signcryption_mode
);
/* END_OF_SYMBOL_DEFINITION signcrypted_attributes */

/* eslint-enable */
