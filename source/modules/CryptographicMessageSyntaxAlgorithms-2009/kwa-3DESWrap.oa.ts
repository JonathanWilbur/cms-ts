/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMS3DESwrap.va";
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
export { id_alg_CMS3DESwrap } from "../CryptographicMessageSyntaxAlgorithms-2009/id-alg-CMS3DESwrap.va";

/* START_OF_SYMBOL_DEFINITION kwa_3DESWrap */
/**
 * @summary kwa_3DESWrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kwa-3DESWrap KEY-WRAP ::= {
 * IDENTIFIER id-alg-CMS3DESwrap
 * PARAMS TYPE NULL ARE required
 * SMIME-CAPS {IDENTIFIED BY id-alg-CMS3DESwrap}
 * }
 * ```
 *
 * @constant
 * @type {KEY_WRAP<NULL>}
 * @implements {KEY_WRAP<NULL>}
 */
export const kwa_3DESWrap: KEY_WRAP<NULL> = {
    class: "KEY-WRAP",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": id_alg_CMS3DESwrap /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kwa_3DESWrap */

/* eslint-enable */
