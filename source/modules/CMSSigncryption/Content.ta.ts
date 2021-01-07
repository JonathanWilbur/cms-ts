/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Content */
/**
 * @summary Content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type Content = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */
let _cached_decoder_for_Content: $.ASN1Decoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _decode_Content */
/**
 * @summary Decodes an ASN.1 element into a(n) Content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content} The decoded data structure.
 */
export function _decode_Content(el: _Element) {
    if (!_cached_decoder_for_Content) {
        _cached_decoder_for_Content = $._decodeOctetString;
    }
    return _cached_decoder_for_Content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */
let _cached_encoder_for_Content: $.ASN1Encoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _encode_Content */
/**
 * @summary Encodes a(n) Content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content, encoded as an ASN.1 Element.
 */
export function _encode_Content(
    value: Content,
    elGetter: $.ASN1Encoder<Content>
) {
    if (!_cached_encoder_for_Content) {
        _cached_encoder_for_Content = $._encodeOctetString;
    }
    return _cached_encoder_for_Content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Content */

/* eslint-enable */
