/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { KEY_DERIVATION } from "../AlgorithmInformation-2009/KEY-DERIVATION.oca";

/* START_OF_SYMBOL_DEFINITION KeyDerivationAlgorithmIdentifier */
/**
 * @summary KeyDerivationAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * {KEY-DERIVATION, {KeyDerivationAlgs, ...}}
 * ```
 */
export type KeyDerivationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyDerivationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationAlgorithmIdentifier */
let _cached_decoder_for_KeyDerivationAlgorithmIdentifier: $.ASN1Decoder<KeyDerivationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyDerivationAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyDerivationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyDerivationAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_KeyDerivationAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyDerivationAlgorithmIdentifier) {
        _cached_decoder_for_KeyDerivationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyDerivationAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyDerivationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationAlgorithmIdentifier */
let _cached_encoder_for_KeyDerivationAlgorithmIdentifier: $.ASN1Encoder<KeyDerivationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyDerivationAlgorithmIdentifier */
/**
 * @summary Encodes a(n) KeyDerivationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyDerivationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyDerivationAlgorithmIdentifier(
    value: KeyDerivationAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<KeyDerivationAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyDerivationAlgorithmIdentifier) {
        _cached_encoder_for_KeyDerivationAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyDerivationAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyDerivationAlgorithmIdentifier */

/* eslint-enable */
