/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION CombinerAlgorithmIdentifier */
/**
 * @summary CombinerAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CombinerAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{CombinerAlgorithms}}
 * ```
 */
export type CombinerAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION CombinerAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CombinerAlgorithmIdentifier */
let _cached_decoder_for_CombinerAlgorithmIdentifier: $.ASN1Decoder<CombinerAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CombinerAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_CombinerAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) CombinerAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CombinerAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_CombinerAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_CombinerAlgorithmIdentifier) {
        _cached_decoder_for_CombinerAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_CombinerAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CombinerAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CombinerAlgorithmIdentifier */
let _cached_encoder_for_CombinerAlgorithmIdentifier: $.ASN1Encoder<CombinerAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CombinerAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_CombinerAlgorithmIdentifier */
/**
 * @summary Encodes a(n) CombinerAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CombinerAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CombinerAlgorithmIdentifier(
    value: CombinerAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<CombinerAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_CombinerAlgorithmIdentifier) {
        _cached_encoder_for_CombinerAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_CombinerAlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CombinerAlgorithmIdentifier */

/* eslint-enable */
