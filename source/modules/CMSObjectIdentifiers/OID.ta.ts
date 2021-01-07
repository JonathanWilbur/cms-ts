/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OID */
/**
 * @summary OID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type OID = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION OID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OID */
let _cached_decoder_for_OID: $.ASN1Decoder<OID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OID */

/* START_OF_SYMBOL_DEFINITION _decode_OID */
/**
 * @summary Decodes an ASN.1 element into a(n) OID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OID} The decoded data structure.
 */
export function _decode_OID(el: _Element) {
    if (!_cached_decoder_for_OID) {
        _cached_decoder_for_OID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_OID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OID */
let _cached_encoder_for_OID: $.ASN1Encoder<OID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OID */

/* START_OF_SYMBOL_DEFINITION _encode_OID */
/**
 * @summary Encodes a(n) OID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OID, encoded as an ASN.1 Element.
 */
export function _encode_OID(value: OID, elGetter: $.ASN1Encoder<OID>) {
    if (!_cached_encoder_for_OID) {
        _cached_encoder_for_OID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_OID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OID */

/* eslint-enable */
