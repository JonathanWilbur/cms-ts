/* eslint-disable */
import { signcrypted_components } from "../CMSObjectIdentifiers/signcrypted-components.va";
import { MODE } from "../CMSSigncryption/MODE.oca";
export { signcrypted_components } from "../CMSObjectIdentifiers/signcrypted-components.va";
export { MODE } from "../CMSSigncryption/MODE.oca";

/* START_OF_SYMBOL_DEFINITION signcryptedComponents */
/**
 * @summary signcryptedComponents
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedComponents MODE ::= {ID signcrypted-components}
 * ```
 *
 * @constant
 * @type {MODE}
 * @implements {MODE}
 */
export const signcryptedComponents: MODE = {
    class: "MODE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": signcrypted_components /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signcryptedComponents */

/* eslint-enable */
