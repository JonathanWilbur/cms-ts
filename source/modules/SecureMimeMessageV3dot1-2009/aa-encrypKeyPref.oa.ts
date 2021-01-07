/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { id_aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/id-aa-encrypKeyPref.va";
import {
    SMIMEEncryptionKeyPreference,
    _decode_SMIMEEncryptionKeyPreference,
    _encode_SMIMEEncryptionKeyPreference,
} from "../SecureMimeMessageV3dot1-2009/SMIMEEncryptionKeyPreference.ta";
export { id_aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/id-aa-encrypKeyPref.va";
export {
    SMIMEEncryptionKeyPreference,
    _decode_SMIMEEncryptionKeyPreference,
    _encode_SMIMEEncryptionKeyPreference,
} from "../SecureMimeMessageV3dot1-2009/SMIMEEncryptionKeyPreference.ta";

/* START_OF_SYMBOL_DEFINITION aa_encrypKeyPref */
/**
 * @summary aa_encrypKeyPref
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-encrypKeyPref ATTRIBUTE ::= {
 * TYPE SMIMEEncryptionKeyPreference
 * IDENTIFIED BY id-aa-encrypKeyPref }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SMIMEEncryptionKeyPreference>}
 * @implements {ATTRIBUTE<SMIMEEncryptionKeyPreference>}
 */
export const aa_encrypKeyPref: ATTRIBUTE<SMIMEEncryptionKeyPreference> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SMIMEEncryptionKeyPreference,
    },
    encoderFor: {
        "&Type": _encode_SMIMEEncryptionKeyPreference,
    },
    "&id": id_aa_encrypKeyPref /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_encrypKeyPref */

/* eslint-enable */
