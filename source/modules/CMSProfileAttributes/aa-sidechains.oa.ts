import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { id_sidechains } from "./id-sidechains.va";
import {
    Sidechains,
    _decode_Sidechains,
    _encode_Sidechains,
} from "./Sidechains.ta";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-sidechains
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-sidechains ATTRIBUTE ::= {TYPE Sidechains	IDENTIFIED BY id-sidechains}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Sidechains>}
 * @implements {ATTRIBUTE<Sidechains>}
 */
export const aa_sidechains: ATTRIBUTE<Sidechains> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Sidechains,
    },
    encoderFor: {
        "&Type": _encode_Sidechains,
    },
    "&id": id_sidechains /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
