/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_alg_CMSRC2wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMSRC2wrap.va";
import {
    RC2wrapParameter,
    _decode_RC2wrapParameter,
    _encode_RC2wrapParameter,
} from "../CryptographicMessageSyntaxAlgorithms-2009/RC2wrapParameter.ta";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
export {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ParamOptions,
    ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _enum_for_ParamOptions,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { id_alg_CMSRC2wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMSRC2wrap.va";
export {
    RC2wrapParameter,
    _decode_RC2wrapParameter,
    _encode_RC2wrapParameter,
} from "../CryptographicMessageSyntaxAlgorithms-2009/RC2wrapParameter.ta";

/* START_OF_SYMBOL_DEFINITION kwa_RC2Wrap */
/**
 * @summary kwa_RC2Wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kwa-RC2Wrap KEY-WRAP ::= {
 * IDENTIFIER id-alg-CMSRC2wrap
 * PARAMS TYPE RC2wrapParameter ARE required
 * SMIME-CAPS { IDENTIFIED BY id-alg-CMSRC2wrap }
 * }
 * ```
 *
 * @constant
 * @type {KEY_WRAP<RC2wrapParameter>}
 * @implements {KEY_WRAP<RC2wrapParameter>}
 */
export const kwa_RC2Wrap: KEY_WRAP<RC2wrapParameter> = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": _decode_RC2wrapParameter,
    },
    encoderFor: {
        "&Params": _encode_RC2wrapParameter,
    },
    "&id": id_alg_CMSRC2wrap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kwa_RC2Wrap */

/* eslint-enable */
