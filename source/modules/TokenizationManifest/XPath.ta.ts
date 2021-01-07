/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION XPath */
/**
 * @summary XPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPath  ::=  UTF8String (CONSTRAINED BY { -- XML Path Language 2.0 -- })
 * ```
 */
export type XPath = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XPath */
let _cached_decoder_for_XPath: $.ASN1Decoder<XPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XPath */

/* START_OF_SYMBOL_DEFINITION _decode_XPath */
/**
 * @summary Decodes an ASN.1 element into a(n) XPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XPath} The decoded data structure.
 */
export function _decode_XPath(el: _Element) {
    if (!_cached_decoder_for_XPath) {
        _cached_decoder_for_XPath = $._decodeUTF8String;
    }
    return _cached_decoder_for_XPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_XPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XPath */
let _cached_encoder_for_XPath: $.ASN1Encoder<XPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XPath */

/* START_OF_SYMBOL_DEFINITION _encode_XPath */
/**
 * @summary Encodes a(n) XPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XPath, encoded as an ASN.1 Element.
 */
export function _encode_XPath(value: XPath, elGetter: $.ASN1Encoder<XPath>) {
    if (!_cached_encoder_for_XPath) {
        _cached_encoder_for_XPath = $._encodeUTF8String;
    }
    return _cached_encoder_for_XPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_XPath */

/* eslint-enable */
