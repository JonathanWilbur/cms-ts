/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KEA_Params_Id */
/**
 * @summary KEA_Params_Id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEA-Params-Id  ::=  OCTET STRING
 * ```
 */
export type KEA_Params_Id = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KEA_Params_Id */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KEA_Params_Id */
let _cached_decoder_for_KEA_Params_Id: $.ASN1Decoder<KEA_Params_Id> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KEA_Params_Id */

/* START_OF_SYMBOL_DEFINITION _decode_KEA_Params_Id */
/**
 * @summary Decodes an ASN.1 element into a(n) KEA_Params_Id
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEA_Params_Id} The decoded data structure.
 */
export function _decode_KEA_Params_Id(el: _Element) {
    if (!_cached_decoder_for_KEA_Params_Id) {
        _cached_decoder_for_KEA_Params_Id = $._decodeOctetString;
    }
    return _cached_decoder_for_KEA_Params_Id(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KEA_Params_Id */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KEA_Params_Id */
let _cached_encoder_for_KEA_Params_Id: $.ASN1Encoder<KEA_Params_Id> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KEA_Params_Id */

/* START_OF_SYMBOL_DEFINITION _encode_KEA_Params_Id */
/**
 * @summary Encodes a(n) KEA_Params_Id into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEA_Params_Id, encoded as an ASN.1 Element.
 */
export function _encode_KEA_Params_Id(
    value: KEA_Params_Id,
    elGetter: $.ASN1Encoder<KEA_Params_Id>
) {
    if (!_cached_encoder_for_KEA_Params_Id) {
        _cached_encoder_for_KEA_Params_Id = $._encodeOctetString;
    }
    return _cached_encoder_for_KEA_Params_Id(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KEA_Params_Id */

/* eslint-enable */
