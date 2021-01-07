/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyConstructionLabel */
/**
 * @summary KeyConstructionLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionLabel  ::=  INTEGER
 * ```
 */
export type KeyConstructionLabel = INTEGER;
/* END_OF_SYMBOL_DEFINITION KeyConstructionLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionLabel */
let _cached_decoder_for_KeyConstructionLabel: $.ASN1Decoder<KeyConstructionLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionLabel */

/* START_OF_SYMBOL_DEFINITION _decode_KeyConstructionLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionLabel} The decoded data structure.
 */
export function _decode_KeyConstructionLabel(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionLabel) {
        _cached_decoder_for_KeyConstructionLabel = $._decodeInteger;
    }
    return _cached_decoder_for_KeyConstructionLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyConstructionLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionLabel */
let _cached_encoder_for_KeyConstructionLabel: $.ASN1Encoder<KeyConstructionLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionLabel */

/* START_OF_SYMBOL_DEFINITION _encode_KeyConstructionLabel */
/**
 * @summary Encodes a(n) KeyConstructionLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionLabel, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionLabel(
    value: KeyConstructionLabel,
    elGetter: $.ASN1Encoder<KeyConstructionLabel>
) {
    if (!_cached_encoder_for_KeyConstructionLabel) {
        _cached_encoder_for_KeyConstructionLabel = $._encodeInteger;
    }
    return _cached_encoder_for_KeyConstructionLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyConstructionLabel */

/* eslint-enable */
