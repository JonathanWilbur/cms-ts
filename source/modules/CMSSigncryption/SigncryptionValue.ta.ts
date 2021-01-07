/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SigncryptionValue */
/**
 * @summary SigncryptionValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionValue  ::=  OCTET STRING(SIZE(1..MAX))
 * ```
 */
export type SigncryptionValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptionValue */
let _cached_decoder_for_SigncryptionValue: $.ASN1Decoder<SigncryptionValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptionValue */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptionValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptionValue} The decoded data structure.
 */
export function _decode_SigncryptionValue(el: _Element) {
    if (!_cached_decoder_for_SigncryptionValue) {
        _cached_decoder_for_SigncryptionValue = $._decodeOctetString;
    }
    return _cached_decoder_for_SigncryptionValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptionValue */
let _cached_encoder_for_SigncryptionValue: $.ASN1Encoder<SigncryptionValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptionValue */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptionValue */
/**
 * @summary Encodes a(n) SigncryptionValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptionValue, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptionValue(
    value: SigncryptionValue,
    elGetter: $.ASN1Encoder<SigncryptionValue>
) {
    if (!_cached_encoder_for_SigncryptionValue) {
        _cached_encoder_for_SigncryptionValue = $._encodeOctetString;
    }
    return _cached_encoder_for_SigncryptionValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptionValue */

/* eslint-enable */
