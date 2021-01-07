/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signcrypter,
    _decode_Signcrypter,
    _encode_Signcrypter,
} from "../CMSSigncryption/Signcrypter.ta";
export {
    Signcrypter,
    _decode_Signcrypter,
    _encode_Signcrypter,
} from "../CMSSigncryption/Signcrypter.ta";

/* START_OF_SYMBOL_DEFINITION Signcrypters */
/**
 * @summary Signcrypters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signcrypters  ::=  SEQUENCE (SIZE(1..MAX)) OF Signcrypter
 * ```
 */
export type Signcrypters = Signcrypter[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Signcrypters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Signcrypters */
let _cached_decoder_for_Signcrypters: $.ASN1Decoder<Signcrypters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Signcrypters */

/* START_OF_SYMBOL_DEFINITION _decode_Signcrypters */
/**
 * @summary Decodes an ASN.1 element into a(n) Signcrypters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signcrypters} The decoded data structure.
 */
export function _decode_Signcrypters(el: _Element) {
    if (!_cached_decoder_for_Signcrypters) {
        _cached_decoder_for_Signcrypters = $._decodeSequenceOf<Signcrypter>(
            () => _decode_Signcrypter
        );
    }
    return _cached_decoder_for_Signcrypters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Signcrypters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Signcrypters */
let _cached_encoder_for_Signcrypters: $.ASN1Encoder<Signcrypters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Signcrypters */

/* START_OF_SYMBOL_DEFINITION _encode_Signcrypters */
/**
 * @summary Encodes a(n) Signcrypters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signcrypters, encoded as an ASN.1 Element.
 */
export function _encode_Signcrypters(
    value: Signcrypters,
    elGetter: $.ASN1Encoder<Signcrypters>
) {
    if (!_cached_encoder_for_Signcrypters) {
        _cached_encoder_for_Signcrypters = $._encodeSequenceOf<Signcrypter>(
            () => _encode_Signcrypter,
            $.BER
        );
    }
    return _cached_encoder_for_Signcrypters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Signcrypters */

/* eslint-enable */
