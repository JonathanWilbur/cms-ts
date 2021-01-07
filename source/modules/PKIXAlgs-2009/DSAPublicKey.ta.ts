/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSAPublicKey */
/**
 * @summary DSAPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAPublicKey  ::=  INTEGER
 * ```
 */
export type DSAPublicKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKey */
let _cached_decoder_for_DSAPublicKey: $.ASN1Decoder<DSAPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_DSAPublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) DSAPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAPublicKey} The decoded data structure.
 */
export function _decode_DSAPublicKey(el: _Element) {
    if (!_cached_decoder_for_DSAPublicKey) {
        _cached_decoder_for_DSAPublicKey = $._decodeInteger;
    }
    return _cached_decoder_for_DSAPublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKey */
let _cached_encoder_for_DSAPublicKey: $.ASN1Encoder<DSAPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_DSAPublicKey */
/**
 * @summary Encodes a(n) DSAPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_DSAPublicKey(
    value: DSAPublicKey,
    elGetter: $.ASN1Encoder<DSAPublicKey>
) {
    if (!_cached_encoder_for_DSAPublicKey) {
        _cached_encoder_for_DSAPublicKey = $._encodeInteger;
    }
    return _cached_encoder_for_DSAPublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSAPublicKey */

/* eslint-enable */
