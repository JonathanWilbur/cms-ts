/* eslint-disable */
import { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca";
import {
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_alg_SSDH } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-SSDH.va";
import {
    KeyWrapAlgorithm,
    _decode_KeyWrapAlgorithm,
    _encode_KeyWrapAlgorithm,
} from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgorithm.ta";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa";
export { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca";
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
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { id_alg_SSDH } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-SSDH.va";
export {
    KeyWrapAlgorithm,
    _decode_KeyWrapAlgorithm,
    _encode_KeyWrapAlgorithm,
} from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgorithm.ta";
export { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa";

/* START_OF_SYMBOL_DEFINITION kaa_ssdh */
/**
 * @summary kaa_ssdh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kaa-ssdh KEY-AGREE ::= {
 * IDENTIFIER id-alg-SSDH
 * PARAMS TYPE KeyWrapAlgorithm ARE required
 * PUBLIC-KEYS {pk-dh}
 * -- UKM is not ASN.1 encoded
 * UKM ARE optional
 * SMIME-CAPS {TYPE KeyWrapAlgorithm IDENTIFIED BY id-alg-SSDH}
 * }
 * ```
 *
 * @constant
 * @type {KEY_AGREE<KeyWrapAlgorithm>}
 * @implements {KEY_AGREE<KeyWrapAlgorithm>}
 */
export const kaa_ssdh: KEY_AGREE<KeyWrapAlgorithm> = {
    class: "KEY-AGREE",
    decoderFor: {
        "&Params": _decode_KeyWrapAlgorithm,
        "&Ukm": undefined,
    },
    encoderFor: {
        "&Params": _encode_KeyWrapAlgorithm,
        "&Ukm": undefined,
    },
    "&id": id_alg_SSDH /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_dh] /* OBJECT_FIELD_SETTING */,
    "&ukmPresence": optional /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Ukm": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kaa_ssdh */

/* eslint-enable */
