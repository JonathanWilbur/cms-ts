/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniqueID,
    _decode_UniqueID,
    _encode_UniqueID,
} from "../CMSDBKeyManagement/UniqueID.ta";
export {
    UniqueID,
    _decode_UniqueID,
    _encode_UniqueID,
} from "../CMSDBKeyManagement/UniqueID.ta";

/* START_OF_SYMBOL_DEFINITION UniqueIdentifier */
/**
 * @summary UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  UniqueID{{SchemaIdentifier}}
 * ```
 */
export type UniqueIdentifier = UniqueID; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniqueIdentifier */
let _cached_decoder_for_UniqueIdentifier: $.ASN1Decoder<UniqueIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_UniqueIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export function _decode_UniqueIdentifier(el: _Element) {
    if (!_cached_decoder_for_UniqueIdentifier) {
        _cached_decoder_for_UniqueIdentifier = _decode_UniqueID;
    }
    return _cached_decoder_for_UniqueIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniqueIdentifier */
let _cached_encoder_for_UniqueIdentifier: $.ASN1Encoder<UniqueIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniqueIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_UniqueIdentifier */
/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_UniqueIdentifier(
    value: UniqueIdentifier,
    elGetter: $.ASN1Encoder<UniqueIdentifier>
) {
    if (!_cached_encoder_for_UniqueIdentifier) {
        _cached_encoder_for_UniqueIdentifier = _encode_UniqueID;
    }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniqueIdentifier */

/* eslint-enable */
