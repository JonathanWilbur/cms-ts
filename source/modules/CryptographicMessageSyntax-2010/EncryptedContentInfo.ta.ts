/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta";
import {
    EncryptedContentInfoType,
    _get_decoder_for_EncryptedContentInfoType,
    _get_encoder_for_EncryptedContentInfoType,
} from "../CryptographicMessageSyntax-2010/EncryptedContentInfoType.ta";
export {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta";
export {
    EncryptedContentInfoType,
    _get_decoder_for_EncryptedContentInfoType,
    _get_encoder_for_EncryptedContentInfoType,
} from "../CryptographicMessageSyntax-2010/EncryptedContentInfoType.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedContentInfo */
/**
 * @summary EncryptedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo  ::=
 * EncryptedContentInfoType { ContentEncryptionAlgorithmIdentifier }
 * ```
 */
export type EncryptedContentInfo = EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>; // DefinedType
/* END_OF_SYMBOL_DEFINITION EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */
let _cached_decoder_for_EncryptedContentInfo: $.ASN1Decoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContentInfo} The decoded data structure.
 */
export function _decode_EncryptedContentInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedContentInfo) {
        _cached_decoder_for_EncryptedContentInfo = _get_decoder_for_EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>(
            _decode_ContentEncryptionAlgorithmIdentifier
        );
    }
    return _cached_decoder_for_EncryptedContentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */
let _cached_encoder_for_EncryptedContentInfo: $.ASN1Encoder<EncryptedContentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedContentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */
/**
 * @summary Encodes a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContentInfo(
    value: EncryptedContentInfo,
    elGetter: $.ASN1Encoder<EncryptedContentInfo>
) {
    if (!_cached_encoder_for_EncryptedContentInfo) {
        _cached_encoder_for_EncryptedContentInfo = _get_encoder_for_EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>(
            _encode_ContentEncryptionAlgorithmIdentifier
        );
    }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedContentInfo */

/* eslint-enable */
