/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import {
    ConstructionAlgorithms,
    _decode_ConstructionAlgorithms,
    _encode_ConstructionAlgorithms,
} from "../CMSCKMKeyManagement/ConstructionAlgorithms.ta";
import { id_ckm_symmetric } from "../CMSObjectIdentifiers/id-ckm-symmetric.va";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";
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
export {
    ConstructionAlgorithms,
    _decode_ConstructionAlgorithms,
    _encode_ConstructionAlgorithms,
} from "../CMSCKMKeyManagement/ConstructionAlgorithms.ta";
export { id_ckm_symmetric } from "../CMSObjectIdentifiers/id-ckm-symmetric.va";

/* START_OF_SYMBOL_DEFINITION symmetricConstruction */
/**
 * @summary symmetricConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * symmetricConstruction    ALGORITHM ::= {
 * IDENTIFIER id-ckm-symmetric
 * PARAMS TYPE ConstructionAlgorithms ARE required}
 * ```
 *
 * @constant
 * @type {ALGORITHM<ConstructionAlgorithms>}
 * @implements {ALGORITHM<ConstructionAlgorithms>}
 */
export const symmetricConstruction: ALGORITHM<ConstructionAlgorithms> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ConstructionAlgorithms,
    },
    encoderFor: {
        "&Type": _encode_ConstructionAlgorithms,
    },
    "&id": id_ckm_symmetric /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION symmetricConstruction */

/* eslint-enable */
