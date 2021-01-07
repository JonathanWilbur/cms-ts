/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION SigncryptedDataAlgorithmIdentifier */
/**
 * @summary SigncryptedDataAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedDataAlgorithmIdentifier  ::=
 * AlgorithmIdentifier{ALGORITHM,{SigncryptAlgorithms}}
 * ```
 */
export type SigncryptedDataAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION SigncryptedDataAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedDataAlgorithmIdentifier */
let _cached_decoder_for_SigncryptedDataAlgorithmIdentifier: $.ASN1Decoder<SigncryptedDataAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedDataAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptedDataAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedDataAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedDataAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_SigncryptedDataAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_decoder_for_SigncryptedDataAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SigncryptedDataAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptedDataAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedDataAlgorithmIdentifier */
let _cached_encoder_for_SigncryptedDataAlgorithmIdentifier: $.ASN1Encoder<SigncryptedDataAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedDataAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptedDataAlgorithmIdentifier */
/**
 * @summary Encodes a(n) SigncryptedDataAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedDataAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedDataAlgorithmIdentifier(
    value: SigncryptedDataAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<SigncryptedDataAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_encoder_for_SigncryptedDataAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SigncryptedDataAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptedDataAlgorithmIdentifier */

/* eslint-enable */
