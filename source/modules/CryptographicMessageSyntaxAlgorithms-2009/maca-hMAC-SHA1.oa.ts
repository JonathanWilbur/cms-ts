/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
import {
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/hMAC-SHA1.va";
export { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
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
export { hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/hMAC-SHA1.va";

/* START_OF_SYMBOL_DEFINITION maca_hMAC_SHA1 */
/**
 * @summary maca_hMAC_SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maca-hMAC-SHA1 MAC-ALGORITHM ::= {
 * IDENTIFIER hMAC-SHA1
 * PARAMS TYPE NULL ARE preferredAbsent
 * IS-KEYED-MAC TRUE
 * SMIME-CAPS {IDENTIFIED BY hMAC-SHA1}
 * }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM<NULL>}
 * @implements {MAC_ALGORITHM<NULL>}
 */
export const maca_hMAC_SHA1: MAC_ALGORITHM<NULL> = {
    class: "MAC-ALGORITHM",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": hMAC_SHA1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": preferredAbsent /* OBJECT_FIELD_SETTING */,
    "&keyed": false /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION maca_hMAC_SHA1 */

/* eslint-enable */
