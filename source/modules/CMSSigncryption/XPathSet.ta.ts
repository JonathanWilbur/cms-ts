/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    XPath,
    _decode_XPath,
    _encode_XPath,
} from "../CMSSigncryption/XPath.ta";
export {
    XPath,
    _decode_XPath,
    _encode_XPath,
} from "../CMSSigncryption/XPath.ta";

/* START_OF_SYMBOL_DEFINITION XPathSet */
/**
 * @summary XPathSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPathSet  ::=  SEQUENCE (SIZE(1..MAX)) OF XPath
 * ```
 */
export type XPathSet = XPath[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION XPathSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XPathSet */
let _cached_decoder_for_XPathSet: $.ASN1Decoder<XPathSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XPathSet */

/* START_OF_SYMBOL_DEFINITION _decode_XPathSet */
/**
 * @summary Decodes an ASN.1 element into a(n) XPathSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XPathSet} The decoded data structure.
 */
export function _decode_XPathSet(el: _Element) {
    if (!_cached_decoder_for_XPathSet) {
        _cached_decoder_for_XPathSet = $._decodeSequenceOf<XPath>(
            () => _decode_XPath
        );
    }
    return _cached_decoder_for_XPathSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_XPathSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XPathSet */
let _cached_encoder_for_XPathSet: $.ASN1Encoder<XPathSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XPathSet */

/* START_OF_SYMBOL_DEFINITION _encode_XPathSet */
/**
 * @summary Encodes a(n) XPathSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XPathSet, encoded as an ASN.1 Element.
 */
export function _encode_XPathSet(
    value: XPathSet,
    elGetter: $.ASN1Encoder<XPathSet>
) {
    if (!_cached_encoder_for_XPathSet) {
        _cached_encoder_for_XPathSet = $._encodeSequenceOf<XPath>(
            () => _encode_XPath,
            $.BER
        );
    }
    return _cached_encoder_for_XPathSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_XPathSet */

/* eslint-enable */
