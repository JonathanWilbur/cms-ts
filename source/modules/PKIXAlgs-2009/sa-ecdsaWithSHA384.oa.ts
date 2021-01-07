/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
import { mda_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha384.oa";
import {
    ECDSA_Sig_Value,
    _decode_ECDSA_Sig_Value,
    _encode_ECDSA_Sig_Value,
} from "../PKIXAlgs-2009/ECDSA-Sig-Value.ta";
import { ecdsa_with_SHA384 } from "../PKIXAlgs-2009/ecdsa-with-SHA384.va";
import { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
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
export { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { mda_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha384.oa";
export {
    ECDSA_Sig_Value,
    _decode_ECDSA_Sig_Value,
    _encode_ECDSA_Sig_Value,
} from "../PKIXAlgs-2009/ECDSA-Sig-Value.ta";
export { ecdsa_with_SHA384 } from "../PKIXAlgs-2009/ecdsa-with-SHA384.va";
export { pk_ec } from "../PKIXAlgs-2009/pk-ec.oa";

/* START_OF_SYMBOL_DEFINITION sa_ecdsaWithSHA384 */
/**
 * @summary sa_ecdsaWithSHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-ecdsaWithSHA384 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER ecdsa-with-SHA384
 * VALUE ECDSA-Sig-Value
 * PARAMS TYPE NULL ARE absent
 * HASHES { mda-sha384 }
 * PUBLIC-KEYS { pk-ec }
 * SMIME-CAPS { IDENTIFIED BY ecdsa-with-SHA384 }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 * @implements {SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL>}
 */
export const sa_ecdsaWithSHA384: SIGNATURE_ALGORITHM<ECDSA_Sig_Value, NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": _decode_ECDSA_Sig_Value,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": _encode_ECDSA_Sig_Value,
        "&Params": $._encodeNull,
    },
    "&id": ecdsa_with_SHA384 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": absent /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_sha384] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_ec] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sa_ecdsaWithSHA384 */

/* eslint-enable */
