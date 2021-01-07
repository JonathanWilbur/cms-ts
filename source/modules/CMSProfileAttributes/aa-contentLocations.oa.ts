import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import {
    userApplications,
} from "x500-ts/dist/node/modules/InformationFramework/AttributeUsage.ta";
import { id_contentLocations } from "./id-contentLocations.va";
import {
    URIs,
    _decode_URIs,
    _encode_URIs,
} from "./URIs.ta";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary aa-contentLocations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-contentLocations ATTRIBUTE ::= {TYPE URIs IDENTIFIED BY id-contentLocations}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<URIs>}
 * @implements {ATTRIBUTE<URIs>}
 */
export const aa_contentLocations: ATTRIBUTE<URIs> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URIs,
    },
    encoderFor: {
        "&Type": _encode_URIs,
    },
    "&id": id_contentLocations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
