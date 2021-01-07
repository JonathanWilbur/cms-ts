/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION KeyConstructionAlgorithmIdentifier */
/**
 * @summary KeyConstructionAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{KeyConstructionAlgorithms}}
 * ```
 */
export type KeyConstructionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyConstructionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionAlgorithmIdentifier */
let _cached_decoder_for_KeyConstructionAlgorithmIdentifier: $.ASN1Decoder<KeyConstructionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyConstructionAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_KeyConstructionAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_decoder_for_KeyConstructionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyConstructionAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyConstructionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionAlgorithmIdentifier */
let _cached_encoder_for_KeyConstructionAlgorithmIdentifier: $.ASN1Encoder<KeyConstructionAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyConstructionAlgorithmIdentifier */
/**
 * @summary Encodes a(n) KeyConstructionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionAlgorithmIdentifier(
    value: KeyConstructionAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<KeyConstructionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_encoder_for_KeyConstructionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyConstructionAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyConstructionAlgorithmIdentifier */

/* eslint-enable */
