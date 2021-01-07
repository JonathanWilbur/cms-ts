import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { id_signerInfo } from "./id-signerInfo.va";
import {
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from "../CryptographicMessageSyntax-2010/SignerInfo.ta";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-signerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-signerInfo ATTRIBUTE ::= {TYPE SignerInfo IDENTIFIED BY id-signerInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SignerInfo>}
 * @implements {ATTRIBUTE<SignerInfo>}
 */
export const aa_signerInfo: ATTRIBUTE<SignerInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SignerInfo,
    },
    encoderFor: {
        "&Type": _encode_SignerInfo,
    },
    "&id": id_signerInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
