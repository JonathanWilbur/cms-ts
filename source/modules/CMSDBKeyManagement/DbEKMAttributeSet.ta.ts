/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../CryptographicMessageSyntax-2010/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION DbEKMAttributeSet */
/**
 * @summary DbEKMAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbEKMAttributeSet  ::=
 * SEQUENCE(SIZE(1..MAX)) OF Attribute{{DbEKMAttributes}}
 * ```
 */
export type DbEKMAttributeSet = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION DbEKMAttributeSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DbEKMAttributeSet */
let _cached_decoder_for_DbEKMAttributeSet: $.ASN1Decoder<DbEKMAttributeSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DbEKMAttributeSet */

/* START_OF_SYMBOL_DEFINITION _decode_DbEKMAttributeSet */
/**
 * @summary Decodes an ASN.1 element into a(n) DbEKMAttributeSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbEKMAttributeSet} The decoded data structure.
 */
export function _decode_DbEKMAttributeSet(el: _Element) {
    if (!_cached_decoder_for_DbEKMAttributeSet) {
        _cached_decoder_for_DbEKMAttributeSet = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_DbEKMAttributeSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DbEKMAttributeSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DbEKMAttributeSet */
let _cached_encoder_for_DbEKMAttributeSet: $.ASN1Encoder<DbEKMAttributeSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DbEKMAttributeSet */

/* START_OF_SYMBOL_DEFINITION _encode_DbEKMAttributeSet */
/**
 * @summary Encodes a(n) DbEKMAttributeSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbEKMAttributeSet, encoded as an ASN.1 Element.
 */
export function _encode_DbEKMAttributeSet(
    value: DbEKMAttributeSet,
    elGetter: $.ASN1Encoder<DbEKMAttributeSet>
) {
    if (!_cached_encoder_for_DbEKMAttributeSet) {
        _cached_encoder_for_DbEKMAttributeSet = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_DbEKMAttributeSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DbEKMAttributeSet */

/* eslint-enable */
