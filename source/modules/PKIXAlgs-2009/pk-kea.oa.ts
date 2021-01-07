/* eslint-disable */
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import { id_keyExchangeAlgorithm } from "../PKIXAlgs-2009/id-keyExchangeAlgorithm.va";
import {
    KEA_Params_Id,
    _decode_KEA_Params_Id,
    _encode_KEA_Params_Id,
} from "../PKIXAlgs-2009/KEA-Params-Id.ta";
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
export { id_keyExchangeAlgorithm } from "../PKIXAlgs-2009/id-keyExchangeAlgorithm.va";
export {
    KEA_Params_Id,
    _decode_KEA_Params_Id,
    _encode_KEA_Params_Id,
} from "../PKIXAlgs-2009/KEA-Params-Id.ta";

/* START_OF_SYMBOL_DEFINITION pk_kea */
/**
 * @summary pk_kea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-kea PUBLIC-KEY ::= {
 * IDENTIFIER id-keyExchangeAlgorithm
 * -- key is not encoded --
 * PARAMS TYPE KEA-Params-Id ARE required
 * -- Private key format not in this module --
 * CERT-KEY-USAGE {keyAgreement, encipherOnly, decipherOnly }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<KEA_Params_Id>}
 * @implements {PUBLIC_KEY<KEA_Params_Id>}
 */
export const pk_kea: PUBLIC_KEY<KEA_Params_Id> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": undefined,
        "&Params": _decode_KEA_Params_Id,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": undefined,
        "&Params": _encode_KEA_Params_Id,
        "&PrivateKey": undefined,
    },
    "&id": id_keyExchangeAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pk_kea */

/* eslint-enable */
