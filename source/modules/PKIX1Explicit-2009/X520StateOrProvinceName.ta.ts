/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_state_name } from "x500-ts/dist/node/modules/UpperBounds/ub-state-name.va";

/* START_OF_SYMBOL_DEFINITION X520StateOrProvinceName */
/**
 * @summary X520StateOrProvinceName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520StateOrProvinceName  ::=  DirectoryString {ub-state-name}
 * ```
 */
export type X520StateOrProvinceName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520StateOrProvinceName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520StateOrProvinceName */
let _cached_decoder_for_X520StateOrProvinceName: $.ASN1Decoder<X520StateOrProvinceName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520StateOrProvinceName */

/* START_OF_SYMBOL_DEFINITION _decode_X520StateOrProvinceName */
/**
 * @summary Decodes an ASN.1 element into a(n) X520StateOrProvinceName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520StateOrProvinceName} The decoded data structure.
 */
export function _decode_X520StateOrProvinceName(el: _Element) {
    if (!_cached_decoder_for_X520StateOrProvinceName) {
        _cached_decoder_for_X520StateOrProvinceName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520StateOrProvinceName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520StateOrProvinceName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520StateOrProvinceName */
let _cached_encoder_for_X520StateOrProvinceName: $.ASN1Encoder<X520StateOrProvinceName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520StateOrProvinceName */

/* START_OF_SYMBOL_DEFINITION _encode_X520StateOrProvinceName */
/**
 * @summary Encodes a(n) X520StateOrProvinceName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520StateOrProvinceName, encoded as an ASN.1 Element.
 */
export function _encode_X520StateOrProvinceName(
    value: X520StateOrProvinceName,
    elGetter: $.ASN1Encoder<X520StateOrProvinceName>
) {
    if (!_cached_encoder_for_X520StateOrProvinceName) {
        _cached_encoder_for_X520StateOrProvinceName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520StateOrProvinceName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520StateOrProvinceName */

/* eslint-enable */
