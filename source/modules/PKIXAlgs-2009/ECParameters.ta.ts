/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CURVE } from "../PKIXAlgs-2009/CURVE.oca";
export { NamedCurve } from "../PKIXAlgs-2009/NamedCurve.osa";

/* START_OF_SYMBOL_DEFINITION ECParameters */
/**
 * @summary ECParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters  ::=  CHOICE {
 * namedCurve      CURVE.&id({NamedCurve})
 * -- implicitCurve   NULL
 * -- implicitCurve MUST NOT be used in PKIX
 * -- specifiedCurve  SpecifiedCurve
 * -- specifiedCurve MUST NOT be used in PKIX
 * -- Details for specifiedCurve can be found in [X9.62]
 * -- Any future additions to this CHOICE should be coordinated
 * -- with ANSI X.9.
 * }
 * ```
 */
export type ECParameters = {
    namedCurve: OBJECT_IDENTIFIER;
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ECParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters */
let _cached_decoder_for_ECParameters: $.ASN1Decoder<ECParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ECParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters} The decoded data structure.
 */
export function _decode_ECParameters(el: _Element) {
    if (!_cached_decoder_for_ECParameters) {
        _cached_decoder_for_ECParameters = $._decode_inextensible_choice<ECParameters>(
            {
                "UNIVERSAL 6": ["namedCurve", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ECParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters */
let _cached_encoder_for_ECParameters: $.ASN1Encoder<ECParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ECParameters */
/**
 * @summary Encodes a(n) ECParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters, encoded as an ASN.1 Element.
 */
export function _encode_ECParameters(
    value: ECParameters,
    elGetter: $.ASN1Encoder<ECParameters>
) {
    if (!_cached_encoder_for_ECParameters) {
        _cached_encoder_for_ECParameters = $._encode_choice<ECParameters>(
            {
                namedCurve: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ECParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECParameters */

/* eslint-enable */
