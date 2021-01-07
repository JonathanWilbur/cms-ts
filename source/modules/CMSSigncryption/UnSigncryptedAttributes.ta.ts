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

/* START_OF_SYMBOL_DEFINITION UnSigncryptedAttributes */
/**
 * @summary UnSigncryptedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnSigncryptedAttributes  ::=
 * SEQUENCE (SIZE(1..MAX)) OF Attribute{{UnSigncryptionAttributes}}
 * ```
 */
export type UnSigncryptedAttributes = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION UnSigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnSigncryptedAttributes */
let _cached_decoder_for_UnSigncryptedAttributes: $.ASN1Decoder<UnSigncryptedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnSigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_UnSigncryptedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) UnSigncryptedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnSigncryptedAttributes} The decoded data structure.
 */
export function _decode_UnSigncryptedAttributes(el: _Element) {
    if (!_cached_decoder_for_UnSigncryptedAttributes) {
        _cached_decoder_for_UnSigncryptedAttributes = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_UnSigncryptedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnSigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnSigncryptedAttributes */
let _cached_encoder_for_UnSigncryptedAttributes: $.ASN1Encoder<UnSigncryptedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnSigncryptedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_UnSigncryptedAttributes */
/**
 * @summary Encodes a(n) UnSigncryptedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnSigncryptedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UnSigncryptedAttributes(
    value: UnSigncryptedAttributes,
    elGetter: $.ASN1Encoder<UnSigncryptedAttributes>
) {
    if (!_cached_encoder_for_UnSigncryptedAttributes) {
        _cached_encoder_for_UnSigncryptedAttributes = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_UnSigncryptedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnSigncryptedAttributes */

/* eslint-enable */
