/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SimpleString */
/**
 * @summary SimpleString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleString     ::=  UTF8String(SIZE(1..MAX))
 * ```
 */
export type SimpleString = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION SimpleString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleString */
let _cached_decoder_for_SimpleString: $.ASN1Decoder<SimpleString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleString */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleString */
/**
 * @summary Decodes an ASN.1 element into a(n) SimpleString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleString} The decoded data structure.
 */
export function _decode_SimpleString(el: _Element) {
    if (!_cached_decoder_for_SimpleString) {
        _cached_decoder_for_SimpleString = $._decodeUTF8String;
    }
    return _cached_decoder_for_SimpleString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SimpleString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleString */
let _cached_encoder_for_SimpleString: $.ASN1Encoder<SimpleString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleString */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleString */
/**
 * @summary Encodes a(n) SimpleString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleString, encoded as an ASN.1 Element.
 */
export function _encode_SimpleString(
    value: SimpleString,
    elGetter: $.ASN1Encoder<SimpleString>
) {
    if (!_cached_encoder_for_SimpleString) {
        _cached_encoder_for_SimpleString = $._encodeUTF8String;
    }
    return _cached_encoder_for_SimpleString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SimpleString */

/* eslint-enable */
