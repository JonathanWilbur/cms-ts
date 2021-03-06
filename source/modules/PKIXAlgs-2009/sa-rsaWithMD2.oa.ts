/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../AlgorithmInformation-2009/ParamOptions.ta";
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
import { md2WithRSAEncryption } from "../PKIXAlgs-2009/md2WithRSAEncryption.va";
import { mda_md2 } from "../PKIXAlgs-2009/mda-md2.oa";
import { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";
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
export { md2WithRSAEncryption } from "../PKIXAlgs-2009/md2WithRSAEncryption.va";
export { mda_md2 } from "../PKIXAlgs-2009/mda-md2.oa";
export { pk_rsa } from "../PKIXAlgs-2009/pk-rsa.oa";

/* START_OF_SYMBOL_DEFINITION sa_rsaWithMD2 */
/**
 * @summary sa_rsaWithMD2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sa-rsaWithMD2 SIGNATURE-ALGORITHM ::= {
 * IDENTIFIER md2WithRSAEncryption
 * PARAMS TYPE NULL ARE required
 * HASHES { mda-md2 }
 * PUBLIC-KEYS { pk-rsa }
 * SMIME-CAPS { IDENTIFIED BY md2WithRSAEncryption }
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM<NULL>}
 * @implements {SIGNATURE_ALGORITHM<NULL>}
 */
export const sa_rsaWithMD2: SIGNATURE_ALGORITHM<NULL> = {
    class: "SIGNATURE-ALGORITHM",
    decoderFor: {
        "&Value": undefined,
        "&Params": $._decodeNull,
    },
    encoderFor: {
        "&Value": undefined,
        "&Params": $._encodeNull,
    },
    "&id": md2WithRSAEncryption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&paramPresence": required /* OBJECT_FIELD_SETTING */,
    "&HashSet": [mda_md2] /* OBJECT_FIELD_SETTING */,
    "&PublicKeySet": [pk_rsa] /* OBJECT_FIELD_SETTING */,
    "&Value": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Params": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sa_rsaWithMD2 */

/* eslint-enable */
