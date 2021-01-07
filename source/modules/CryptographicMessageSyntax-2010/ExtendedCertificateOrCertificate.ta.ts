/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../CryptographicMessageSyntax-2010/ExtendedCertificate.ta";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Certificate.ta";
export {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../CryptographicMessageSyntax-2010/ExtendedCertificate.ta";

/* START_OF_SYMBOL_DEFINITION ExtendedCertificateOrCertificate */
/**
 * @summary ExtendedCertificateOrCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificateOrCertificate  ::=  CHOICE {
 * certificate         Certificate,
 * extendedCertificate     [0] IMPLICIT ExtendedCertificate }
 * ```
 */
export type ExtendedCertificateOrCertificate =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ExtendedCertificateOrCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificateOrCertificate */
let _cached_decoder_for_ExtendedCertificateOrCertificate: $.ASN1Decoder<ExtendedCertificateOrCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedCertificateOrCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedCertificateOrCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificateOrCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificateOrCertificate} The decoded data structure.
 */
export function _decode_ExtendedCertificateOrCertificate(el: _Element) {
    if (!_cached_decoder_for_ExtendedCertificateOrCertificate) {
        _cached_decoder_for_ExtendedCertificateOrCertificate = $._decode_inextensible_choice<ExtendedCertificateOrCertificate>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExtendedCertificateOrCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedCertificateOrCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificateOrCertificate */
let _cached_encoder_for_ExtendedCertificateOrCertificate: $.ASN1Encoder<ExtendedCertificateOrCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedCertificateOrCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedCertificateOrCertificate */
/**
 * @summary Encodes a(n) ExtendedCertificateOrCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificateOrCertificate, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificateOrCertificate(
    value: ExtendedCertificateOrCertificate,
    elGetter: $.ASN1Encoder<ExtendedCertificateOrCertificate>
) {
    if (!_cached_encoder_for_ExtendedCertificateOrCertificate) {
        _cached_encoder_for_ExtendedCertificateOrCertificate = $._encode_choice<ExtendedCertificateOrCertificate>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedCertificateOrCertificate(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedCertificateOrCertificate */

/* eslint-enable */
