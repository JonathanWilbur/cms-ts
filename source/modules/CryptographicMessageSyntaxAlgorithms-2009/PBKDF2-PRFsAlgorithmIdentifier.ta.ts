/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION PBKDF2_PRFsAlgorithmIdentifier */
/**
 * @summary PBKDF2_PRFsAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFsAlgorithmIdentifier  ::=  AlgorithmIdentifier{ ALGORITHM,{PBKDF2-PRFs} }
 * ```
 */
export type PBKDF2_PRFsAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION PBKDF2_PRFsAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier */
let _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier: $.ASN1Decoder<PBKDF2_PRFsAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_PBKDF2_PRFsAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_PRFsAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_PRFsAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_PBKDF2_PRFsAlgorithmIdentifier(el: _Element) {
    if (!_cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier) {
        _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PBKDF2_PRFsAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier */
let _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier: $.ASN1Encoder<PBKDF2_PRFsAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_PBKDF2_PRFsAlgorithmIdentifier */
/**
 * @summary Encodes a(n) PBKDF2_PRFsAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_PRFsAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PBKDF2_PRFsAlgorithmIdentifier(
    value: PBKDF2_PRFsAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<PBKDF2_PRFsAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier) {
        _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PBKDF2_PRFsAlgorithmIdentifier */

/* eslint-enable */
