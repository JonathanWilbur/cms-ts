/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificate as AttributeCertificateV1,
    _decode_AttributeCertificate as _decode_AttributeCertificateV1,
    _encode_AttributeCertificate as _encode_AttributeCertificateV1,
} from "x500-ts/dist/node/modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import {
    AttributeCertificate as AttributeCertificateV2,
    _decode_AttributeCertificate as _decode_AttributeCertificateV2,
    _encode_AttributeCertificate as _encode_AttributeCertificateV2,
} from "x500-ts/dist/node/modules/AttributeCertificateDefinitions/AttributeCertificate.ta";
import {
    ExtendedCertificate,
    _decode_ExtendedCertificate,
    _encode_ExtendedCertificate,
} from "../CryptographicMessageSyntax-2010/ExtendedCertificate.ta";
import {
    OtherCertificateFormat,
    _decode_OtherCertificateFormat,
    _encode_OtherCertificateFormat,
} from "../CryptographicMessageSyntax-2010/OtherCertificateFormat.ta";
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
export {
    OtherCertificateFormat,
    _decode_OtherCertificateFormat,
    _encode_OtherCertificateFormat,
} from "../CryptographicMessageSyntax-2010/OtherCertificateFormat.ta";

/* START_OF_SYMBOL_DEFINITION CertificateChoices */
/**
 * @summary CertificateChoices
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateChoices  ::=  CHOICE {
 * certificate         Certificate,
 * extendedCertificate     [0] IMPLICIT ExtendedCertificate,
 * -- Obsolete
 * ...,
 * [[3: v1AttrCert         [1] IMPLICIT AttributeCertificateV1]],
 * -- Obsolete
 * [[4: v2AttrCert         [2] IMPLICIT AttributeCertificateV2]],
 * [[5: other              [3] IMPLICIT OtherCertificateFormat]] }
 * ```
 */
export type CertificateChoices =
    | { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | {
          v1AttrCert: AttributeCertificateV1;
      } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | {
          v2AttrCert: AttributeCertificateV2;
      } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 4 */
    | {
          other: OtherCertificateFormat;
      } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertificateChoices */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateChoices */
let _cached_decoder_for_CertificateChoices: $.ASN1Decoder<CertificateChoices> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateChoices */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateChoices */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoices
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateChoices} The decoded data structure.
 */
export function _decode_CertificateChoices(el: _Element) {
    if (!_cached_decoder_for_CertificateChoices) {
        _cached_decoder_for_CertificateChoices = $._decode_extensible_choice<CertificateChoices>(
            {
                "UNIVERSAL 16": ["certificate", _decode_Certificate],
                "CONTEXT 0": [
                    "extendedCertificate",
                    $._decode_implicit<ExtendedCertificate>(
                        () => _decode_ExtendedCertificate
                    ),
                ],
                "CONTEXT 1": [
                    "v1AttrCert",
                    $._decode_implicit<AttributeCertificateV1>(
                        () => _decode_AttributeCertificateV1
                    ),
                ],
                "CONTEXT 2": [
                    "v2AttrCert",
                    $._decode_implicit<AttributeCertificateV2>(
                        () => _decode_AttributeCertificateV2
                    ),
                ],
                "CONTEXT 3": [
                    "other",
                    $._decode_implicit<OtherCertificateFormat>(
                        () => _decode_OtherCertificateFormat
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateChoices(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateChoices */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateChoices */
let _cached_encoder_for_CertificateChoices: $.ASN1Encoder<CertificateChoices> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateChoices */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateChoices */
/**
 * @summary Encodes a(n) CertificateChoices into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoices, encoded as an ASN.1 Element.
 */
export function _encode_CertificateChoices(
    value: CertificateChoices,
    elGetter: $.ASN1Encoder<CertificateChoices>
) {
    if (!_cached_encoder_for_CertificateChoices) {
        _cached_encoder_for_CertificateChoices = $._encode_choice<CertificateChoices>(
            {
                certificate: _encode_Certificate,
                extendedCertificate: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExtendedCertificate,
                    $.BER
                ),
                v1AttrCert: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeCertificateV1,
                    $.BER
                ),
                v2AttrCert: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeCertificateV2,
                    $.BER
                ),
                other: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_OtherCertificateFormat,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateChoices */

/* eslint-enable */
