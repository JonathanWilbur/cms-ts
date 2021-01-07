/* eslint-disable */
import {
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import {
    DHPublicKey,
    _decode_DHPublicKey,
    _encode_DHPublicKey,
} from "../PKIXAlgs-2009/DHPublicKey.ta";
import { dhpublicnumber } from "../PKIXAlgs-2009/dhpublicnumber.va";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../PKIXAlgs-2009/DomainParameters.ta";
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
    DHPublicKey,
    _decode_DHPublicKey,
    _encode_DHPublicKey,
} from "../PKIXAlgs-2009/DHPublicKey.ta";
export { dhpublicnumber } from "../PKIXAlgs-2009/dhpublicnumber.va";
export {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../PKIXAlgs-2009/DomainParameters.ta";

/* START_OF_SYMBOL_DEFINITION pk_dh */
/**
 * @summary pk_dh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pk-dh PUBLIC-KEY ::= {
 * IDENTIFIER dhpublicnumber
 * KEY DHPublicKey
 * PARAMS TYPE DomainParameters ARE inheritable
 * -- Private key format not in this module --
 * CERT-KEY-USAGE {keyAgreement, encipherOnly, decipherOnly }
 * }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY<DHPublicKey, DomainParameters>}
 * @implements {PUBLIC_KEY<DHPublicKey, DomainParameters>}
 */
export const pk_dh: PUBLIC_KEY<DHPublicKey, DomainParameters> = {
    class: "PUBLIC-KEY",
    decoderFor: {
        "&KeyValue": _decode_DHPublicKey,
        "&Params": _decode_DomainParameters,
        "&PrivateKey": undefined,
    },
    encoderFor: {
        "&KeyValue": _encode_DHPublicKey,
        "&Params": _encode_DomainParameters,
        "&PrivateKey": undefined,
    },
    "&id": dhpublicnumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": inheritable /* OBJECT_FIELD_SETTING */,
    "&keyUsage": undefined,
    "&KeyValue": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&PrivateKey": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pk_dh */

/* eslint-enable */
