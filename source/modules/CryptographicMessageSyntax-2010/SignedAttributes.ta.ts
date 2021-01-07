/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta";
export {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta";

/* START_OF_SYMBOL_DEFINITION SignedAttributes */
/**
 * @summary SignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes  ::=  Attributes {{ SignedAttributesSet }}
 * ```
 */
export type SignedAttributes = Attributes; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAttributes */
let _cached_decoder_for_SignedAttributes: $.ASN1Decoder<SignedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_SignedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export function _decode_SignedAttributes(el: _Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = _decode_Attributes;
    }
    return _cached_decoder_for_SignedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAttributes */
let _cached_encoder_for_SignedAttributes: $.ASN1Encoder<SignedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_SignedAttributes */
/**
 * @summary Encodes a(n) SignedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: $.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = _encode_Attributes;
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedAttributes */

/* eslint-enable */
