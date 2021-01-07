/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { des_ede3_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/des-ede3-cbc.va";
import {
    IV,
    _decode_IV,
    _encode_IV,
} from "../CryptographicMessageSyntaxAlgorithms-2009/IV.ta";
export { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca";
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
export { des_ede3_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/des-ede3-cbc.va";
export {
    IV,
    _decode_IV,
    _encode_IV,
} from "../CryptographicMessageSyntaxAlgorithms-2009/IV.ta";

/* START_OF_SYMBOL_DEFINITION cea_3DES_cbc */
/**
 * @summary cea_3DES_cbc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cea-3DES-cbc CONTENT-ENCRYPTION ::= {
 * IDENTIFIER des-ede3-cbc
 * PARAMS TYPE IV ARE required
 * SMIME-CAPS { IDENTIFIED BY des-ede3-cbc }
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION<IV>}
 * @implements {CONTENT_ENCRYPTION<IV>}
 */
export const cea_3DES_cbc: CONTENT_ENCRYPTION<IV> = {
    class: "CONTENT-ENCRYPTION",
    decoderFor: {
        "&Params": _decode_IV,
    },
    encoderFor: {
        "&Params": _encode_IV,
    },
    "&id": des_ede3_cbc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cea_3DES_cbc */

/* eslint-enable */
