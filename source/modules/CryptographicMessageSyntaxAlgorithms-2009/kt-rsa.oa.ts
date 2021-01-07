/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";
import { rsaEncryption } from "../PKIXAlgs-2009/rsaEncryption.va";
export { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
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
export { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";
export { rsaEncryption } from "../PKIXAlgs-2009/rsaEncryption.va";

/* START_OF_SYMBOL_DEFINITION kt_rsa */
/**
 * @summary kt_rsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kt-rsa KEY-TRANSPORT ::= {
 * IDENTIFIER rsaEncryption
 * PARAMS TYPE NULL ARE required
 * PUBLIC-KEYS { pk-rsa }
 * SMIME-CAPS {IDENTIFIED BY rsaEncryption}
 * }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT<NULL>}
 * @implements {KEY_TRANSPORT<NULL>}
 */
export const kt_rsa: KEY_TRANSPORT<NULL> = {
    class: "KEY-TRANSPORT",
    decoderFor: {
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Params": $._encodeNull,
    },
    "&id": rsaEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa] /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kt_rsa */

/* eslint-enable */
