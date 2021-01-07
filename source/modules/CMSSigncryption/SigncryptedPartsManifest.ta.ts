/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signcrypted,
    _decode_Signcrypted,
    _encode_Signcrypted,
} from "../CMSSigncryption/Signcrypted.ta";
export {
    Signcrypted,
    _decode_Signcrypted,
    _encode_Signcrypted,
} from "../CMSSigncryption/Signcrypted.ta";

/* START_OF_SYMBOL_DEFINITION SigncryptedPartsManifest */
/**
 * @summary SigncryptedPartsManifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedPartsManifest  ::=  Signcrypted{{Manifest}}
 * ```
 */
export type SigncryptedPartsManifest = Signcrypted; // DefinedType
/* END_OF_SYMBOL_DEFINITION SigncryptedPartsManifest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedPartsManifest */
let _cached_decoder_for_SigncryptedPartsManifest: $.ASN1Decoder<SigncryptedPartsManifest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedPartsManifest */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptedPartsManifest */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedPartsManifest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedPartsManifest} The decoded data structure.
 */
export function _decode_SigncryptedPartsManifest(el: _Element) {
    if (!_cached_decoder_for_SigncryptedPartsManifest) {
        _cached_decoder_for_SigncryptedPartsManifest = _decode_Signcrypted;
    }
    return _cached_decoder_for_SigncryptedPartsManifest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptedPartsManifest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedPartsManifest */
let _cached_encoder_for_SigncryptedPartsManifest: $.ASN1Encoder<SigncryptedPartsManifest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedPartsManifest */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptedPartsManifest */
/**
 * @summary Encodes a(n) SigncryptedPartsManifest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedPartsManifest, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedPartsManifest(
    value: SigncryptedPartsManifest,
    elGetter: $.ASN1Encoder<SigncryptedPartsManifest>
) {
    if (!_cached_encoder_for_SigncryptedPartsManifest) {
        _cached_encoder_for_SigncryptedPartsManifest = _encode_Signcrypted;
    }
    return _cached_encoder_for_SigncryptedPartsManifest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptedPartsManifest */

/* eslint-enable */
