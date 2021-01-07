/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_locality_name } from "x500-ts/dist/node/modules/UpperBounds/ub-locality-name.va";

/* START_OF_SYMBOL_DEFINITION X520LocalityName */
/**
 * @summary X520LocalityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520LocalityName  ::=  DirectoryString {ub-locality-name}
 * ```
 */
export type X520LocalityName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520LocalityName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520LocalityName */
let _cached_decoder_for_X520LocalityName: $.ASN1Decoder<X520LocalityName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520LocalityName */

/* START_OF_SYMBOL_DEFINITION _decode_X520LocalityName */
/**
 * @summary Decodes an ASN.1 element into a(n) X520LocalityName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520LocalityName} The decoded data structure.
 */
export function _decode_X520LocalityName(el: _Element) {
    if (!_cached_decoder_for_X520LocalityName) {
        _cached_decoder_for_X520LocalityName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520LocalityName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520LocalityName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520LocalityName */
let _cached_encoder_for_X520LocalityName: $.ASN1Encoder<X520LocalityName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520LocalityName */

/* START_OF_SYMBOL_DEFINITION _encode_X520LocalityName */
/**
 * @summary Encodes a(n) X520LocalityName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520LocalityName, encoded as an ASN.1 Element.
 */
export function _encode_X520LocalityName(
    value: X520LocalityName,
    elGetter: $.ASN1Encoder<X520LocalityName>
) {
    if (!_cached_encoder_for_X520LocalityName) {
        _cached_encoder_for_X520LocalityName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520LocalityName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520LocalityName */

/* eslint-enable */
