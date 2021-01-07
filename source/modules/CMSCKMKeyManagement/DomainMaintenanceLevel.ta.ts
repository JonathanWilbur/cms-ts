/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DomainMaintenanceLevel */
/**
 * @summary DomainMaintenanceLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainMaintenanceLevel  ::=  INTEGER (1..MAX)
 * ```
 */
export type DomainMaintenanceLevel = INTEGER;
/* END_OF_SYMBOL_DEFINITION DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainMaintenanceLevel */
let _cached_decoder_for_DomainMaintenanceLevel: $.ASN1Decoder<DomainMaintenanceLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _decode_DomainMaintenanceLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainMaintenanceLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainMaintenanceLevel} The decoded data structure.
 */
export function _decode_DomainMaintenanceLevel(el: _Element) {
    if (!_cached_decoder_for_DomainMaintenanceLevel) {
        _cached_decoder_for_DomainMaintenanceLevel = $._decodeInteger;
    }
    return _cached_decoder_for_DomainMaintenanceLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainMaintenanceLevel */
let _cached_encoder_for_DomainMaintenanceLevel: $.ASN1Encoder<DomainMaintenanceLevel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainMaintenanceLevel */

/* START_OF_SYMBOL_DEFINITION _encode_DomainMaintenanceLevel */
/**
 * @summary Encodes a(n) DomainMaintenanceLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainMaintenanceLevel, encoded as an ASN.1 Element.
 */
export function _encode_DomainMaintenanceLevel(
    value: DomainMaintenanceLevel,
    elGetter: $.ASN1Encoder<DomainMaintenanceLevel>
) {
    if (!_cached_encoder_for_DomainMaintenanceLevel) {
        _cached_encoder_for_DomainMaintenanceLevel = $._encodeInteger;
    }
    return _cached_encoder_for_DomainMaintenanceLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainMaintenanceLevel */

/* eslint-enable */
