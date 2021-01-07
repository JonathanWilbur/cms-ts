import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { id_signerInfos } from "./id-signerInfos.va";
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from "../CryptographicMessageSyntax-2010/SignerInfos.ta";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-signerInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-signerInfos ATTRIBUTE ::= {TYPE SignerInfos IDENTIFIED BY id-signerInfos}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SignerInfos>}
 * @implements {ATTRIBUTE<SignerInfos>}
 */
export const aa_signerInfos: ATTRIBUTE<SignerInfos> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SignerInfos,
    },
    encoderFor: {
        "&Type": _encode_SignerInfos,
    },
    "&id": id_signerInfos /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
