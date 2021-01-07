/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";

/* START_OF_SYMBOL_DEFINITION signcrypted_components */
/**
 * @summary signcrypted_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-components OID ::= { signcryption-mode components(3) }
 * ```
 *
 * @constant
 */
export const signcrypted_components: OID = new _OID(
    [/* components */ 3],
    signcryption_mode
);
/* END_OF_SYMBOL_DEFINITION signcrypted_components */

/* eslint-enable */
