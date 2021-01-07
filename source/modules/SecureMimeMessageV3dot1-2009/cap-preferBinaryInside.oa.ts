/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
import { id_cap_preferBinaryInside } from "../SecureMimeMessageV3dot1-2009/id-cap-preferBinaryInside.va";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { id_cap_preferBinaryInside } from "../SecureMimeMessageV3dot1-2009/id-cap-preferBinaryInside.va";

/* START_OF_SYMBOL_DEFINITION cap_preferBinaryInside */
/**
 * @summary cap_preferBinaryInside
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cap-preferBinaryInside SMIME-CAPS ::= {
 * -- No value 
 * IDENTIFIED BY id-cap-preferBinaryInside }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS}
 * @implements {SMIME_CAPS}
 */
export const cap_preferBinaryInside: SMIME_CAPS = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_cap_preferBinaryInside /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cap_preferBinaryInside */

/* eslint-enable */
