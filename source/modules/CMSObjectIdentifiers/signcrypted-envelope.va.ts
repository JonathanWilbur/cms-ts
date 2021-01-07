/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";
export { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va";

/* START_OF_SYMBOL_DEFINITION signcrypted_envelope */
/**
 * @summary signcrypted_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-envelope OID ::= { signcryption-mode enveloped(4) }
 * ```
 *
 * @constant
 */
export const signcrypted_envelope: OID = new _OID(
    [/* enveloped */ 4],
    signcryption_mode
);
/* END_OF_SYMBOL_DEFINITION signcrypted_envelope */

/* eslint-enable */
