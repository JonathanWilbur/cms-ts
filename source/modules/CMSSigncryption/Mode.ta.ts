/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { MODE } from "../CMSSigncryption/MODE.oca";
export { ProcessingModes } from "../CMSSigncryption/ProcessingModes.osa";

/* START_OF_SYMBOL_DEFINITION Mode */
/**
 * @summary Mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mode  ::=  MODE.&id({ProcessingModes})
 * ```
 */
export type Mode = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION Mode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mode */
let _cached_decoder_for_Mode: $.ASN1Decoder<Mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mode */

/* START_OF_SYMBOL_DEFINITION _decode_Mode */
/**
 * @summary Decodes an ASN.1 element into a(n) Mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mode} The decoded data structure.
 */
export function _decode_Mode(el: _Element) {
    if (!_cached_decoder_for_Mode) {
        _cached_decoder_for_Mode = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Mode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Mode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mode */
let _cached_encoder_for_Mode: $.ASN1Encoder<Mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mode */

/* START_OF_SYMBOL_DEFINITION _encode_Mode */
/**
 * @summary Encodes a(n) Mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mode, encoded as an ASN.1 Element.
 */
export function _encode_Mode(value: Mode, elGetter: $.ASN1Encoder<Mode>) {
    if (!_cached_encoder_for_Mode) {
        _cached_encoder_for_Mode = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Mode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Mode */

/* eslint-enable */
