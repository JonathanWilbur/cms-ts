/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DHPublicKey */
/**
 * @summary DHPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicKey  ::=  INTEGER
 * ```
 */
export type DHPublicKey = INTEGER;
/* END_OF_SYMBOL_DEFINITION DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKey */
let _cached_decoder_for_DHPublicKey: $.ASN1Decoder<DHPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _decode_DHPublicKey */
/**
 * @summary Decodes an ASN.1 element into a(n) DHPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DHPublicKey} The decoded data structure.
 */
export function _decode_DHPublicKey(el: _Element) {
    if (!_cached_decoder_for_DHPublicKey) {
        _cached_decoder_for_DHPublicKey = $._decodeInteger;
    }
    return _cached_decoder_for_DHPublicKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKey */
let _cached_encoder_for_DHPublicKey: $.ASN1Encoder<DHPublicKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DHPublicKey */

/* START_OF_SYMBOL_DEFINITION _encode_DHPublicKey */
/**
 * @summary Encodes a(n) DHPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_DHPublicKey(
    value: DHPublicKey,
    elGetter: $.ASN1Encoder<DHPublicKey>
) {
    if (!_cached_encoder_for_DHPublicKey) {
        _cached_encoder_for_DHPublicKey = $._encodeInteger;
    }
    return _cached_encoder_for_DHPublicKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DHPublicKey */

/* eslint-enable */
