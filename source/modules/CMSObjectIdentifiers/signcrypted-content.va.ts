/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";

/* START_OF_SYMBOL_DEFINITION signcrypted_content */
/**
 * @summary signcrypted_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-content OID ::= { signcryption-mode content(1) }
 * ```
 *
 * @constant
 */
export const signcrypted_content: OID = new _OID(
    [/* content */ 1],
    signcryption_mode
);
/* END_OF_SYMBOL_DEFINITION signcrypted_content */

/* eslint-enable */
