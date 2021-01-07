/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyConstructionLabel,
    _decode_KeyConstructionLabel,
    _encode_KeyConstructionLabel,
} from "../CMSCKMKeyManagement/KeyConstructionLabel.ta";
export {
    KeyConstructionLabel,
    _decode_KeyConstructionLabel,
    _encode_KeyConstructionLabel,
} from "../CMSCKMKeyManagement/KeyConstructionLabel.ta";

/* START_OF_SYMBOL_DEFINITION KeyConstructionLabels */
/**
 * @summary KeyConstructionLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionLabels  ::=  SEQUENCE SIZE(1..MAX) OF KeyConstructionLabel
 * ```
 */
export type KeyConstructionLabels = KeyConstructionLabel[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION KeyConstructionLabels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionLabels */
let _cached_decoder_for_KeyConstructionLabels: $.ASN1Decoder<KeyConstructionLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionLabels */

/* START_OF_SYMBOL_DEFINITION _decode_KeyConstructionLabels */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionLabels} The decoded data structure.
 */
export function _decode_KeyConstructionLabels(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionLabels) {
        _cached_decoder_for_KeyConstructionLabels = $._decodeSequenceOf<KeyConstructionLabel>(
            () => _decode_KeyConstructionLabel
        );
    }
    return _cached_decoder_for_KeyConstructionLabels(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyConstructionLabels */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionLabels */
let _cached_encoder_for_KeyConstructionLabels: $.ASN1Encoder<KeyConstructionLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionLabels */

/* START_OF_SYMBOL_DEFINITION _encode_KeyConstructionLabels */
/**
 * @summary Encodes a(n) KeyConstructionLabels into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionLabels, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionLabels(
    value: KeyConstructionLabels,
    elGetter: $.ASN1Encoder<KeyConstructionLabels>
) {
    if (!_cached_encoder_for_KeyConstructionLabels) {
        _cached_encoder_for_KeyConstructionLabels = $._encodeSequenceOf<KeyConstructionLabel>(
            () => _encode_KeyConstructionLabel,
            $.BER
        );
    }
    return _cached_encoder_for_KeyConstructionLabels(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyConstructionLabels */

/* eslint-enable */
