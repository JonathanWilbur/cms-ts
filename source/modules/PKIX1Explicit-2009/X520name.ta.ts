/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_name } from "x500-ts/dist/node/modules/UpperBounds/ub-name.va";

/* START_OF_SYMBOL_DEFINITION X520name */
/**
 * @summary X520name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520name  ::=  DirectoryString {ub-name}
 * ```
 */
export type X520name = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520name */
let _cached_decoder_for_X520name: $.ASN1Decoder<X520name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520name */

/* START_OF_SYMBOL_DEFINITION _decode_X520name */
/**
 * @summary Decodes an ASN.1 element into a(n) X520name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520name} The decoded data structure.
 */
export function _decode_X520name(el: _Element) {
    if (!_cached_decoder_for_X520name) {
        _cached_decoder_for_X520name = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520name */
let _cached_encoder_for_X520name: $.ASN1Encoder<X520name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520name */

/* START_OF_SYMBOL_DEFINITION _encode_X520name */
/**
 * @summary Encodes a(n) X520name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520name, encoded as an ASN.1 Element.
 */
export function _encode_X520name(
    value: X520name,
    elGetter: $.ASN1Encoder<X520name>
) {
    if (!_cached_encoder_for_X520name) {
        _cached_encoder_for_X520name = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520name */

/* eslint-enable */
