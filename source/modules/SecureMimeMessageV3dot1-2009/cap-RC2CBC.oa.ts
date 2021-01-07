/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
import { rc2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/rc2-cbc.va";
import {
    SMIMECapabilitiesParametersForRC2CBC,
    _decode_SMIMECapabilitiesParametersForRC2CBC,
    _encode_SMIMECapabilitiesParametersForRC2CBC,
} from "../SecureMimeMessageV3dot1-2009/SMIMECapabilitiesParametersForRC2CBC.ta";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { rc2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/rc2-cbc.va";
export {
    SMIMECapabilitiesParametersForRC2CBC,
    _decode_SMIMECapabilitiesParametersForRC2CBC,
    _encode_SMIMECapabilitiesParametersForRC2CBC,
} from "../SecureMimeMessageV3dot1-2009/SMIMECapabilitiesParametersForRC2CBC.ta";

/* START_OF_SYMBOL_DEFINITION cap_RC2CBC */
/**
 * @summary cap_RC2CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cap-RC2CBC SMIME-CAPS ::= {
 * TYPE SMIMECapabilitiesParametersForRC2CBC
 * IDENTIFIED BY rc2-cbc}
 * ```
 *
 * @constant
 * @type {SMIME_CAPS<SMIMECapabilitiesParametersForRC2CBC>}
 * @implements {SMIME_CAPS<SMIMECapabilitiesParametersForRC2CBC>}
 */
export const cap_RC2CBC: SMIME_CAPS<SMIMECapabilitiesParametersForRC2CBC> = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": _decode_SMIMECapabilitiesParametersForRC2CBC,
    },
    encoderFor: {
        "&Type": _encode_SMIMECapabilitiesParametersForRC2CBC,
    },
    "&id": rc2_cbc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cap_RC2CBC */

/* eslint-enable */
