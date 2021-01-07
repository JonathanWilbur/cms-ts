/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KEKRecipientInfo.ta";
import {
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyAgreeRecipientInfo.ta";
import {
    KeyTransRecipientInfo,
    _decode_KeyTransRecipientInfo,
    _encode_KeyTransRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyTransRecipientInfo.ta";
import {
    OtherRecipientInfo,
    _decode_OtherRecipientInfo,
    _encode_OtherRecipientInfo,
} from "../CryptographicMessageSyntax-2010/OtherRecipientInfo.ta";
import {
    PasswordRecipientInfo,
    _decode_PasswordRecipientInfo,
    _encode_PasswordRecipientInfo,
} from "../CryptographicMessageSyntax-2010/PasswordRecipientInfo.ta";
export {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KEKRecipientInfo.ta";
export {
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyAgreeRecipientInfo.ta";
export {
    KeyTransRecipientInfo,
    _decode_KeyTransRecipientInfo,
    _encode_KeyTransRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyTransRecipientInfo.ta";
export {
    OtherRecipientInfo,
    _decode_OtherRecipientInfo,
    _encode_OtherRecipientInfo,
} from "../CryptographicMessageSyntax-2010/OtherRecipientInfo.ta";
export {
    PasswordRecipientInfo,
    _decode_PasswordRecipientInfo,
    _encode_PasswordRecipientInfo,
} from "../CryptographicMessageSyntax-2010/PasswordRecipientInfo.ta";

/* START_OF_SYMBOL_DEFINITION RecipientInfo */
/**
 * @summary RecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 * ktri              KeyTransRecipientInfo,
 * ...,
 * [[3: kari          [1] KeyAgreeRecipientInfo ]],
 * [[4: kekri         [2] KEKRecipientInfo]],
 * [[5: pwri          [3] PasswordRecipientInfo,
 * ori           [4] OtherRecipientInfo ]] }
 * ```
 */
export type RecipientInfo =
    | { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 4 */
    | { pwri: PasswordRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | { ori: OtherRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */
let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfo} The decoded data structure.
 */
export function _decode_RecipientInfo(el: _Element) {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = $._decode_extensible_choice<RecipientInfo>(
            {
                "UNIVERSAL 16": ["ktri", _decode_KeyTransRecipientInfo],
                "CONTEXT 1": [
                    "kari",
                    $._decode_implicit<KeyAgreeRecipientInfo>(
                        () => _decode_KeyAgreeRecipientInfo
                    ),
                ],
                "CONTEXT 2": [
                    "kekri",
                    $._decode_implicit<KEKRecipientInfo>(
                        () => _decode_KEKRecipientInfo
                    ),
                ],
                "CONTEXT 3": [
                    "pwri",
                    $._decode_implicit<PasswordRecipientInfo>(
                        () => _decode_PasswordRecipientInfo
                    ),
                ],
                "CONTEXT 4": [
                    "ori",
                    $._decode_implicit<OtherRecipientInfo>(
                        () => _decode_OtherRecipientInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */
let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientInfo */
/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_RecipientInfo(
    value: RecipientInfo,
    elGetter: $.ASN1Encoder<RecipientInfo>
) {
    if (!_cached_encoder_for_RecipientInfo) {
        _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>(
            {
                ktri: _encode_KeyTransRecipientInfo,
                kari: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_KeyAgreeRecipientInfo,
                    $.BER
                ),
                kekri: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_KEKRecipientInfo,
                    $.BER
                ),
                pwri: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_PasswordRecipientInfo,
                    $.BER
                ),
                ori: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_OtherRecipientInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientInfo */

/* eslint-enable */
