/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Certificates */
/**
 * @summary Certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificates     ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type Certificates = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */
let _cached_decoder_for_Certificates: $.ASN1Decoder<Certificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _decode_Certificates */
/**
 * @summary Decodes an ASN.1 element into a(n) Certificates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificates} The decoded data structure.
 */
export function _decode_Certificates(el: _Element) {
    if (!_cached_decoder_for_Certificates) {
        _cached_decoder_for_Certificates = $._decodeOctetString;
    }
    return _cached_decoder_for_Certificates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Certificates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */
let _cached_encoder_for_Certificates: $.ASN1Encoder<Certificates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificates */

/* START_OF_SYMBOL_DEFINITION _encode_Certificates */
/**
 * @summary Encodes a(n) Certificates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificates, encoded as an ASN.1 Element.
 */
export function _encode_Certificates(
    value: Certificates,
    elGetter: $.ASN1Encoder<Certificates>
) {
    if (!_cached_encoder_for_Certificates) {
        _cached_encoder_for_Certificates = $._encodeOctetString;
    }
    return _cached_encoder_for_Certificates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Certificates */

/* eslint-enable */
