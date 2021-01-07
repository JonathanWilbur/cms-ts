/* eslint-disable */
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { id_RSAES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSAES-OAEP.va";
import { pk_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaES-OAEP.oa";
import {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSAES-OAEP-params.ta";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";
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
export { id_RSAES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-RSAES-OAEP.va";
export { pk_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaES-OAEP.oa";
export {
    RSAES_OAEP_params,
    _decode_RSAES_OAEP_params,
    _encode_RSAES_OAEP_params,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/RSAES-OAEP-params.ta";
export { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";

/* START_OF_SYMBOL_DEFINITION kta_rsaES_OAEP */
/**
 * @summary kta_rsaES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kta-rsaES-OAEP KEY-TRANSPORT ::= {
 * IDENTIFIER id-RSAES-OAEP
 * PARAMS TYPE RSAES-OAEP-params ARE required
 * PUBLIC-KEYS { pk-rsa | pk-rsaES-OAEP }
 * SMIME-CAPS { TYPE RSAES-OAEP-params IDENTIFIED BY id-RSAES-OAEP}
 * }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT<RSAES_OAEP_params>}
 * @implements {KEY_TRANSPORT<RSAES_OAEP_params>}
 */
export const kta_rsaES_OAEP: KEY_TRANSPORT<RSAES_OAEP_params> = {
    class: "KEY-TRANSPORT",
    decoderFor: {
        "&Params": _decode_RSAES_OAEP_params,
    },
    encoderFor: {
        "&Params": _encode_RSAES_OAEP_params,
    },
    "&id": id_RSAES_OAEP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa, pk_rsaES_OAEP] /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kta_rsaES_OAEP */

/* eslint-enable */
