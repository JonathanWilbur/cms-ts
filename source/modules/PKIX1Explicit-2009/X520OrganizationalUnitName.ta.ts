/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";
export { ub_organizational_unit_name } from "x500-ts/dist/node/modules/UpperBounds/ub-organizational-unit-name.va";

/* START_OF_SYMBOL_DEFINITION X520OrganizationalUnitName */
/**
 * @summary X520OrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520OrganizationalUnitName  ::=  DirectoryString{ub-organizational-unit-name}
 * ```
 */
export type X520OrganizationalUnitName = DirectoryString; // DefinedType
/* END_OF_SYMBOL_DEFINITION X520OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_X520OrganizationalUnitName */
let _cached_decoder_for_X520OrganizationalUnitName: $.ASN1Decoder<X520OrganizationalUnitName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_X520OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_X520OrganizationalUnitName */
/**
 * @summary Decodes an ASN.1 element into a(n) X520OrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520OrganizationalUnitName} The decoded data structure.
 */
export function _decode_X520OrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_X520OrganizationalUnitName) {
        _cached_decoder_for_X520OrganizationalUnitName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_X520OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_X520OrganizationalUnitName */
let _cached_encoder_for_X520OrganizationalUnitName: $.ASN1Encoder<X520OrganizationalUnitName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_X520OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_X520OrganizationalUnitName */
/**
 * @summary Encodes a(n) X520OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_X520OrganizationalUnitName(
    value: X520OrganizationalUnitName,
    elGetter: $.ASN1Encoder<X520OrganizationalUnitName>
) {
    if (!_cached_encoder_for_X520OrganizationalUnitName) {
        _cached_encoder_for_X520OrganizationalUnitName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_X520OrganizationalUnitName */

/* eslint-enable */
