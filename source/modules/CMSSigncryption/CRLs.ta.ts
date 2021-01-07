/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CRLs */
/**
 * @summary CRLs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLs      ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type CRLs = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CRLs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLs */
let _cached_decoder_for_CRLs: $.ASN1Decoder<CRLs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLs */

/* START_OF_SYMBOL_DEFINITION _decode_CRLs */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLs} The decoded data structure.
 */
export function _decode_CRLs(el: _Element) {
    if (!_cached_decoder_for_CRLs) {
        _cached_decoder_for_CRLs = $._decodeOctetString;
    }
    return _cached_decoder_for_CRLs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLs */
let _cached_encoder_for_CRLs: $.ASN1Encoder<CRLs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLs */

/* START_OF_SYMBOL_DEFINITION _encode_CRLs */
/**
 * @summary Encodes a(n) CRLs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLs, encoded as an ASN.1 Element.
 */
export function _encode_CRLs(value: CRLs, elGetter: $.ASN1Encoder<CRLs>) {
    if (!_cached_encoder_for_CRLs) {
        _cached_encoder_for_CRLs = $._encodeOctetString;
    }
    return _cached_encoder_for_CRLs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLs */

/* eslint-enable */
