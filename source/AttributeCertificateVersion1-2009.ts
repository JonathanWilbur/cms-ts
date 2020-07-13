/*
    BEGIN_MODULE AttributeCertificateVersion1-2009
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-v1AttrCert-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as x500 from "x500-ts";
import {
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";

import {
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
} from "./PKIX-CommonTypes-2009";

import {
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "x500-ts/dist/node/AuthenticationFramework";
export {
    CertificateSerialNumber,
    UniqueIdentifier,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "x500-ts/dist/node/AuthenticationFramework";

import {
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "x500-ts/dist/node/CertificateExtensions";

import {
    _decode_AttCertValidityPeriod,
    _encode_AttCertValidityPeriod,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "./PKIXAttributeCertificate-2009";
export {
    AttCertValidityPeriod,
    IssuerSerial,
    _decode_AttCertValidityPeriod,
    _encode_AttCertValidityPeriod,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "./PKIXAttributeCertificate-2009";

export type AttCertVersionV1 = asn1.INTEGER;
export const AttCertVersionV1_v1: AttCertVersionV1 = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AttCertVersionV1: __utils.ASN1Decoder<
    AttCertVersionV1
> | null = null;
let _cached_encoder_for_AttCertVersionV1: __utils.ASN1Encoder<
    AttCertVersionV1
> | null = null;
export function _decode_AttCertVersionV1(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttCertVersionV1) {
        _cached_decoder_for_AttCertVersionV1 = __utils._decodeInteger;
    }
    return _cached_decoder_for_AttCertVersionV1(el);
}
export function _encode_AttCertVersionV1(
    value: AttCertVersionV1,
    elGetter: __utils.ASN1Encoder<AttCertVersionV1>
) {
    if (!_cached_encoder_for_AttCertVersionV1) {
        _cached_encoder_for_AttCertVersionV1 = __utils._encodeInteger;
    }
    return _cached_encoder_for_AttCertVersionV1(value, elGetter);
}

export type AttributeCertificateInfoV1 = x500.AttributeCertificateDefinitions.TBSAttributeCertificate;
export const _root_component_type_list_1_spec_for_AttributeCertificateInfoV1: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attCertValidityPeriod",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerUniqueID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeCertificateInfoV1: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeCertificateInfoV1: __utils.ComponentSpec[] = [];
export const _decode_AttributeCertificateInfoV1 = x500.AttributeCertificateDefinitions._decode_TBSAttributeCertificate;
export const _encode_AttributeCertificateInfoV1 = x500.AttributeCertificateDefinitions._encode_TBSAttributeCertificate;

export type AttributeCertificateV1 = x500.AttributeCertificateDefinitions.AttributeCertificate;
export const _decode_AttributeCertificateV1 = x500.AttributeCertificateDefinitions._decode_AttributeCertificate;
export const _encode_AttributeCertificateV1 = x500.AttributeCertificateDefinitions._encode_AttributeCertificate;
// TODO: ObjectSetAssignment: AttrList

// TODO: ObjectSetAssignment: AttributeCertExtensionsV1

/* END_MODULE AttributeCertificateVersion1-2009 */
