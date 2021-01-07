/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION SigncryptedAttributes */
/**
 * @summary SigncryptedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedAttributes  ::=
 * SEQUENCE (SIZE(1..MAX)) OF Attribute{{SigncryptionAttributes}}
 * ```
 */
export type SigncryptedAttributes = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedAttributes */
let _cached_decoder_for_SigncryptedAttributes: $.ASN1Decoder<SigncryptedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedAttributes} The decoded data structure.
 */
export function _decode_SigncryptedAttributes(el: _Element) {
    if (!_cached_decoder_for_SigncryptedAttributes) {
        _cached_decoder_for_SigncryptedAttributes = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SigncryptedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedAttributes */
let _cached_encoder_for_SigncryptedAttributes: $.ASN1Encoder<SigncryptedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptedAttributes */
/**
 * @summary Encodes a(n) SigncryptedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedAttributes(
    value: SigncryptedAttributes,
    elGetter: $.ASN1Encoder<SigncryptedAttributes>
) {
    if (!_cached_encoder_for_SigncryptedAttributes) {
        _cached_encoder_for_SigncryptedAttributes = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_SigncryptedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptedAttributes */

/* eslint-enable */
