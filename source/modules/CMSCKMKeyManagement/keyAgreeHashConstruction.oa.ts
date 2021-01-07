/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import { id_ckm_key_agree_hash } from "../CMSObjectIdentifiers/id-ckm-key-agree-hash.va";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta";
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
export { id_ckm_key_agree_hash } from "../CMSObjectIdentifiers/id-ckm-key-agree-hash.va";
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION keyAgreeHashConstruction */
/**
 * @summary keyAgreeHashConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyAgreeHashConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-agree-hash
 * PARAMS TYPE DigestAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<DigestAlgorithmIdentifier>}
 * @implements {ALGORITHM<DigestAlgorithmIdentifier>}
 */
export const keyAgreeHashConstruction: ALGORITHM<DigestAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DigestAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_DigestAlgorithmIdentifier,
    },
    "&id": id_ckm_key_agree_hash /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyAgreeHashConstruction */

/* eslint-enable */
