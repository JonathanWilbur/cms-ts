/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax-2010/SignerIdentifier.ta";
export {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax-2010/SignerIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KeyPairIdentifier */
/**
 * @summary KeyPairIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyPairIdentifier  ::=  SignerIdentifier
 * ```
 */
export type KeyPairIdentifier = SignerIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyPairIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyPairIdentifier */
let _cached_decoder_for_KeyPairIdentifier: $.ASN1Decoder<KeyPairIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyPairIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyPairIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyPairIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyPairIdentifier} The decoded data structure.
 */
export function _decode_KeyPairIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyPairIdentifier) {
        _cached_decoder_for_KeyPairIdentifier = _decode_SignerIdentifier;
    }
    return _cached_decoder_for_KeyPairIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyPairIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyPairIdentifier */
let _cached_encoder_for_KeyPairIdentifier: $.ASN1Encoder<KeyPairIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyPairIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyPairIdentifier */
/**
 * @summary Encodes a(n) KeyPairIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyPairIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyPairIdentifier(
    value: KeyPairIdentifier,
    elGetter: $.ASN1Encoder<KeyPairIdentifier>
) {
    if (!_cached_encoder_for_KeyPairIdentifier) {
        _cached_encoder_for_KeyPairIdentifier = _encode_SignerIdentifier;
    }
    return _cached_encoder_for_KeyPairIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyPairIdentifier */

/* eslint-enable */
