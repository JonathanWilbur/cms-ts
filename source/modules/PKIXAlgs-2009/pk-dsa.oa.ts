/* eslint-disable */
import {
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import {
    DSA_Params,
    _decode_DSA_Params,
    _encode_DSA_Params,
} from "../PKIXAlgs-2009/DSA-Params.ta";
import {
    DSAPublicKey,
    _decode_DSAPublicKey,
    _encode_DSAPublicKey,
} from "../PKIXAlgs-2009/DSAPublicKey.ta";
import { id_dsa } from "../PKIXAlgs-2009/id-dsa.va";
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
    DSA_Params,
    _decode_DSA_Params,
    _encode_DSA_Params,
} from "../PKIXAlgs-2009/DSA-Params.ta";
export {
    DSAPublicKey,
    _decode_DSAPublicKey,
    _encode_DSAPublicKey,
} from "../PKIXAlgs-2009/DSAPublicKey.ta";
export { id_dsa } from "../PKIXAlgs-2009/id-dsa.va";

/* START_OF_SYMBOL_DEFINITION pk_dsa */
/**
 * @summary pk_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-dsa PUBLIC-KEY ::= {
 * IDENTIFIER id-dsa
 * KEY DSAPublicKey
 * PARAMS TYPE DSA-Params ARE inheritable
 * -- Private key format not in this module --
 * CERT-KEY-USAGE { digitalSignature, nonRepudiation, keyCertSign,
 * cRLSign }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<DSAPublicKey, DSA_Params>}
 * @implements {PUBLIC_KEY<DSAPublicKey, DSA_Params>}
 */
export const pk_dsa: PUBLIC_KEY<DSAPublicKey, DSA_Params> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_DSAPublicKey,
        "&Params": _decode_DSA_Params,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_DSAPublicKey,
        "&Params": _encode_DSA_Params,
        "&PrivateKey": undefined,
    },
    "&id": id_dsa /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": inheritable /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pk_dsa */

/* eslint-enable */
