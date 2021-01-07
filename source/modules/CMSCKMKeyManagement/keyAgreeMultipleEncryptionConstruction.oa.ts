/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta";
import { id_ckm_key_agree_multiple_encrypt } from "../CMSObjectIdentifiers/id-ckm-key-agree-multiple-encrypt.va";
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
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta";
export { id_ckm_key_agree_multiple_encrypt } from "../CMSObjectIdentifiers/id-ckm-key-agree-multiple-encrypt.va";

/* START_OF_SYMBOL_DEFINITION keyAgreeMultipleEncryptionConstruction */
/**
 * @summary keyAgreeMultipleEncryptionConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyAgreeMultipleEncryptionConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-agree-multiple-encrypt
 * PARAMS TYPE KeyEncryptionAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 * @implements {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 */
export const keyAgreeMultipleEncryptionConstruction: ALGORITHM<KeyEncryptionAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KeyEncryptionAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_KeyEncryptionAlgorithmIdentifier,
    },
    "&id": id_ckm_key_agree_multiple_encrypt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyAgreeMultipleEncryptionConstruction */

/* eslint-enable */
