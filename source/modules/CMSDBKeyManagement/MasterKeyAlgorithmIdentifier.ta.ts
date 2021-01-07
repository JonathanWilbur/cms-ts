/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION MasterKeyAlgorithmIdentifier */
/**
 * @summary MasterKeyAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterKeyAlgorithmIdentifier  ::=
 * AlgorithmIdentifier {ALGORITHM,{MasterKeyAlgorithms}}
 * ```
 */
export type MasterKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MasterKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterKeyAlgorithmIdentifier */
let _cached_decoder_for_MasterKeyAlgorithmIdentifier: $.ASN1Decoder<MasterKeyAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MasterKeyAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterKeyAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterKeyAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_MasterKeyAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_decoder_for_MasterKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MasterKeyAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MasterKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterKeyAlgorithmIdentifier */
let _cached_encoder_for_MasterKeyAlgorithmIdentifier: $.ASN1Encoder<MasterKeyAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterKeyAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MasterKeyAlgorithmIdentifier */
/**
 * @summary Encodes a(n) MasterKeyAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterKeyAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MasterKeyAlgorithmIdentifier(
    value: MasterKeyAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<MasterKeyAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_encoder_for_MasterKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MasterKeyAlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterKeyAlgorithmIdentifier */

/* eslint-enable */
