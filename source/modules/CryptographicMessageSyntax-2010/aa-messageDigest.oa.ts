/* eslint-disable */
import { id_messageDigest } from "../CryptographicMessageSyntax-2010/id-messageDigest.va";
import {
    MessageDigest,
    _decode_MessageDigest,
    _encode_MessageDigest,
} from "../CryptographicMessageSyntax-2010/MessageDigest.ta";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export { id_messageDigest } from "../CryptographicMessageSyntax-2010/id-messageDigest.va";
export {
    MessageDigest,
    _decode_MessageDigest,
    _encode_MessageDigest,
} from "../CryptographicMessageSyntax-2010/MessageDigest.ta";

/* START_OF_SYMBOL_DEFINITION aa_messageDigest */
/**
 * @summary aa_messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-messageDigest ATTRIBUTE ::= { TYPE MessageDigest IDENTIFIED BY id-messageDigest}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MessageDigest>}
 * @implements {ATTRIBUTE<MessageDigest>}
 */
export const aa_messageDigest: ATTRIBUTE<MessageDigest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageDigest,
    },
    encoderFor: {
        "&Type": _encode_MessageDigest,
    },
    "&id": id_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_messageDigest */

/* eslint-enable */
