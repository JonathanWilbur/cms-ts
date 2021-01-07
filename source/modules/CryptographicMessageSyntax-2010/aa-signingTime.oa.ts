/* eslint-disable */
import { id_signingTime } from "../CryptographicMessageSyntax-2010/id-signingTime.va";
import {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../CryptographicMessageSyntax-2010/SigningTime.ta";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export { id_signingTime } from "../CryptographicMessageSyntax-2010/id-signingTime.va";
export {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../CryptographicMessageSyntax-2010/SigningTime.ta";

/* START_OF_SYMBOL_DEFINITION aa_signingTime */
/**
 * @summary aa_signingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-signingTime ATTRIBUTE ::= { TYPE SigningTime IDENTIFIED BY id-signingTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SigningTime>}
 * @implements {ATTRIBUTE<SigningTime>}
 */
export const aa_signingTime: ATTRIBUTE<SigningTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SigningTime,
    },
    encoderFor: {
        "&Type": _encode_SigningTime,
    },
    "&id": id_signingTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_signingTime */

/* eslint-enable */
