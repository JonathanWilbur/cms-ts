/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SMIMECapabilitiesParametersForRC2CBC */
/**
 * @summary SMIMECapabilitiesParametersForRC2CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMECapabilitiesParametersForRC2CBC  ::=  INTEGER (40 | 128, ...)
 * ```
 */
export type SMIMECapabilitiesParametersForRC2CBC = INTEGER;
/* END_OF_SYMBOL_DEFINITION SMIMECapabilitiesParametersForRC2CBC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC */
let _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC: $.ASN1Decoder<SMIMECapabilitiesParametersForRC2CBC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC */

/* START_OF_SYMBOL_DEFINITION _decode_SMIMECapabilitiesParametersForRC2CBC */
/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapabilitiesParametersForRC2CBC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapabilitiesParametersForRC2CBC} The decoded data structure.
 */
export function _decode_SMIMECapabilitiesParametersForRC2CBC(el: _Element) {
    if (!_cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC =
            $._decodeInteger;
    }
    return _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SMIMECapabilitiesParametersForRC2CBC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC */
let _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC: $.ASN1Encoder<SMIMECapabilitiesParametersForRC2CBC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC */

/* START_OF_SYMBOL_DEFINITION _encode_SMIMECapabilitiesParametersForRC2CBC */
/**
 * @summary Encodes a(n) SMIMECapabilitiesParametersForRC2CBC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapabilitiesParametersForRC2CBC, encoded as an ASN.1 Element.
 */
export function _encode_SMIMECapabilitiesParametersForRC2CBC(
    value: SMIMECapabilitiesParametersForRC2CBC,
    elGetter: $.ASN1Encoder<SMIMECapabilitiesParametersForRC2CBC>
) {
    if (!_cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC =
            $._encodeInteger;
    }
    return _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SMIMECapabilitiesParametersForRC2CBC */

/* eslint-enable */
