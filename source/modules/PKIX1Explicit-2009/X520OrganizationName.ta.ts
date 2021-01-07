/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_organization_name } from "x500-ts/dist/node/modules/UpperBounds/ub-organization-name.va";

/* START_OF_SYMBOL_DEFINITION X520OrganizationName */
/**
 * @summary X520OrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520OrganizationName  ::=  DirectoryString {ub-organization-name}
 * ```
 */
export type X520OrganizationName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520OrganizationName */
let _cached_decoder_for_X520OrganizationName: $.ASN1Decoder<X520OrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520OrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_X520OrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520OrganizationName} The decoded data structure.
 */
export function _decode_X520OrganizationName(el: _Element) {
    if (!_cached_decoder_for_X520OrganizationName) {
        _cached_decoder_for_X520OrganizationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520OrganizationName */
let _cached_encoder_for_X520OrganizationName: $.ASN1Encoder<X520OrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520OrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_X520OrganizationName */
/**
 * @summary Encodes a(n) X520OrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_X520OrganizationName(
    value: X520OrganizationName,
    elGetter: $.ASN1Encoder<X520OrganizationName>
) {
    if (!_cached_encoder_for_X520OrganizationName) {
        _cached_encoder_for_X520OrganizationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520OrganizationName */

/* eslint-enable */
