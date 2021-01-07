/* eslint-disable */
import { signcrypted_content } from "../CMSObjectIdentifiers/signcrypted-content.va";
import { MODE } from "../CMSSigncryption/MODE.oca";
export { signcrypted_content } from "../CMSObjectIdentifiers/signcrypted-content.va";
export { MODE } from "../CMSSigncryption/MODE.oca";

/* START_OF_SYMBOL_DEFINITION signcryptedContent */
/**
 * @summary signcryptedContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedContent MODE ::= {ID signcrypted-content}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedContent: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_content /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signcryptedContent */

/* eslint-enable */
