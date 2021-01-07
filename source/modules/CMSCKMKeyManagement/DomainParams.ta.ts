/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "ansi-x9-42/dist/node/modules/ANSI-X9-42/DomainParameters.ta";
import {
    ECDomainParameters,
    _decode_ECDomainParameters,
    _encode_ECDomainParameters,
} from "ansi-x9-62/dist/node/modules/ANSI-X9-62/ECDomainParameters.ta";

/* START_OF_SYMBOL_DEFINITION DomainParams */
/**
 * @summary DomainParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainParams  ::=  CHOICE {
 * dhParams    [0] DomainParameters,
 * ecParams    [1] ECDomainParameters
 * }
 * ```
 */
export type DomainParams =
    | { dhParams: DomainParameters } /* CHOICE_ALT_ROOT */
    | { ecParams: ECDomainParameters } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DomainParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainParams */
let _cached_decoder_for_DomainParams: $.ASN1Decoder<DomainParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainParams */

/* START_OF_SYMBOL_DEFINITION _decode_DomainParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainParams} The decoded data structure.
 */
export function _decode_DomainParams(el: _Element) {
    if (!_cached_decoder_for_DomainParams) {
        _cached_decoder_for_DomainParams = $._decode_inextensible_choice<DomainParams>(
            {
                "CONTEXT 0": [
                    "dhParams",
                    $._decode_explicit<DomainParameters>(
                        () => _decode_DomainParameters
                    ),
                ],
                "CONTEXT 1": [
                    "ecParams",
                    $._decode_explicit<ECDomainParameters>(
                        () => _decode_ECDomainParameters
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DomainParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainParams */
let _cached_encoder_for_DomainParams: $.ASN1Encoder<DomainParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainParams */

/* START_OF_SYMBOL_DEFINITION _encode_DomainParams */
/**
 * @summary Encodes a(n) DomainParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainParams, encoded as an ASN.1 Element.
 */
export function _encode_DomainParams(
    value: DomainParams,
    elGetter: $.ASN1Encoder<DomainParams>
) {
    if (!_cached_encoder_for_DomainParams) {
        _cached_encoder_for_DomainParams = $._encode_choice<DomainParams>(
            {
                dhParams: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_DomainParameters,
                    $.BER
                ),
                ecParams: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ECDomainParameters,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DomainParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainParams */

/* eslint-enable */
