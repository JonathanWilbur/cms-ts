/* eslint-disable */
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import {
    ECParameters,
    _decode_ECParameters,
    _encode_ECParameters,
} from "../PKIXAlgs-2009/ECParameters.ta";
import {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "../PKIXAlgs-2009/ECPoint.ta";
import { id_ecMQV } from "../PKIXAlgs-2009/id-ecMQV.va";
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
export {
    ECParameters,
    _decode_ECParameters,
    _encode_ECParameters,
} from "../PKIXAlgs-2009/ECParameters.ta";
export {
    ECPoint,
    _decode_ECPoint,
    _encode_ECPoint,
} from "../PKIXAlgs-2009/ECPoint.ta";
export { id_ecMQV } from "../PKIXAlgs-2009/id-ecMQV.va";

/* START_OF_SYMBOL_DEFINITION pk_ecMQV */
/**
 * @summary pk_ecMQV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-ecMQV PUBLIC-KEY ::= {
 * IDENTIFIER id-ecMQV
 * KEY ECPoint
 * PARAMS TYPE ECParameters ARE required
 * -- Private key format not in this module --
 * CERT-KEY-USAGE { keyAgreement, encipherOnly, decipherOnly }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<ECPoint, ECParameters>}
 * @implements {PUBLIC_KEY<ECPoint, ECParameters>}
 */
export const pk_ecMQV: PUBLIC_KEY<ECPoint, ECParameters> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_ECPoint,
        "&Params": _decode_ECParameters,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_ECPoint,
        "&Params": _encode_ECParameters,
        "&PrivateKey": undefined,
    },
    "&id": id_ecMQV /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pk_ecMQV */

/* eslint-enable */
