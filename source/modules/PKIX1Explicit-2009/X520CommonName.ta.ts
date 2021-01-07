/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_common_name } from "x500-ts/dist/node/modules/UpperBounds/ub-common-name.va";

/* START_OF_SYMBOL_DEFINITION X520CommonName */
/**
 * @summary X520CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520CommonName  ::=  DirectoryString {ub-common-name}
 * ```
 */
export type X520CommonName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520CommonName */
let _cached_decoder_for_X520CommonName: $.ASN1Decoder<X520CommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520CommonName */

/* START_OF_SYMBOL_DEFINITION _decode_X520CommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) X520CommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520CommonName} The decoded data structure.
 */
export function _decode_X520CommonName(el: _Element) {
    if (!_cached_decoder_for_X520CommonName) {
        _cached_decoder_for_X520CommonName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520CommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520CommonName */
let _cached_encoder_for_X520CommonName: $.ASN1Encoder<X520CommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520CommonName */

/* START_OF_SYMBOL_DEFINITION _encode_X520CommonName */
/**
 * @summary Encodes a(n) X520CommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520CommonName, encoded as an ASN.1 Element.
 */
export function _encode_X520CommonName(
    value: X520CommonName,
    elGetter: $.ASN1Encoder<X520CommonName>
) {
    if (!_cached_encoder_for_X520CommonName) {
        _cached_encoder_for_X520CommonName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520CommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520CommonName */

/* eslint-enable */
