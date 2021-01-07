/* eslint-disable */
import { signcrypted_envelope } from "../CMSObjectIdentifiers/signcrypted-envelope.va";
import { MODE } from "../CMSSigncryption/MODE.oca";
export { signcrypted_envelope } from "../CMSObjectIdentifiers/signcrypted-envelope.va";
export { MODE } from "../CMSSigncryption/MODE.oca";

/* START_OF_SYMBOL_DEFINITION signcryptedEnveloped */
/**
 * @summary signcryptedEnveloped
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedEnveloped    MODE ::= {ID signcrypted-envelope}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedEnveloped: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signcryptedEnveloped */

/* eslint-enable */
