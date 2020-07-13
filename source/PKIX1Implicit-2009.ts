/*
    BEGIN_MODULE PKIX1Implicit-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-implicit-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    _decode_AttributeSet,
    _encode_AttributeSet,
} from "./PKIX-CommonTypes-2009";

import {
    id_pe,
    id_kp,
    _decode_ORAddress,
    _encode_ORAddress,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "./PKIX1Explicit-2009";

import {
    id_ce,
    id_ce_extKeyUsage,
} from "x500-ts/dist/node/CertificateExtensions";
export * from "x500-ts/dist/node/CertificateExtensions";
export * from "x500-ts/dist/node/PkiPmiExternalDataTypes";

// TODO: ObjectSetAssignment: CertExtensions

// TODO: ObjectSetAssignment: CrlExtensions

// TODO: ObjectSetAssignment: CrlEntryExtensions

// TODO: ObjectAssignment: ext-AuthorityKeyIdentifier

// TODO: ObjectClassAssignment: OTHER-NAME

export const ubMax: asn1.INTEGER = 32768;

// TODO: ObjectAssignment: ext-SubjectKeyIdentifier

// TODO: ObjectAssignment: ext-KeyUsage

// TODO: ObjectAssignment: ext-PrivateKeyUsagePeriod

// TODO: ObjectAssignment: ext-CertificatePolicies

// TODO: ObjectSetAssignment: PolicyQualifierId

// TODO: ObjectClassAssignment: CERT-POLICY-QUALIFIER

// TODO: ObjectAssignment: pqid-cps

// TODO: ObjectAssignment: pqid-unotice

export type CPSuri = asn1.IA5String; // IA5String
let _cached_decoder_for_CPSuri: __utils.ASN1Decoder<CPSuri> | null = null;
let _cached_encoder_for_CPSuri: __utils.ASN1Encoder<CPSuri> | null = null;
export function _decode_CPSuri(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CPSuri) {
        _cached_decoder_for_CPSuri = __utils._decodeIA5String;
    }
    return _cached_decoder_for_CPSuri(el);
}
export function _encode_CPSuri(
    value: CPSuri,
    elGetter: __utils.ASN1Encoder<CPSuri>
) {
    if (!_cached_encoder_for_CPSuri) {
        _cached_encoder_for_CPSuri = __utils._encodeIA5String;
    }
    return _cached_encoder_for_CPSuri(value, elGetter);
}

// TODO: ObjectAssignment: ext-PolicyMappings

// TODO: ObjectAssignment: ext-SubjectAltName

// TODO: ObjectAssignment: ext-IssuerAltName

// TODO: ObjectAssignment: ext-SubjectDirectoryAttributes

// TODO: ObjectAssignment: ext-BasicConstraints

// TODO: ObjectAssignment: ext-NameConstraints

// TODO: ObjectAssignment: ext-PolicyConstraints

// TODO: ObjectAssignment: ext-CRLDistributionPoints

// TODO: ObjectAssignment: ext-ExtKeyUsage

export const anyExtendedKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_ce_extKeyUsage
);

export const id_kp_serverAuth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_kp
);

export const id_kp_clientAuth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_kp
);

export const id_kp_codeSigning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_kp
);

export const id_kp_emailProtection: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_kp
);

export const id_kp_timeStamping: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_kp
);

export const id_kp_OCSPSigning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_kp
);

// TODO: ObjectAssignment: ext-InhibitAnyPolicy

// TODO: ObjectAssignment: ext-AuthorityInfoAccess

export const id_pe_authorityInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_pe
);

// TODO: ObjectAssignment: ext-SubjectInfoAccessSyntax

export const id_pe_subjectInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_pe
);

// TODO: ObjectAssignment: ext-CRLNumber

// TODO: ObjectAssignment: ext-IssuingDistributionPoint

// TODO: ObjectAssignment: ext-DeltaCRLIndicator

// TODO: ObjectAssignment: ext-CRLReason

// TODO: ObjectAssignment: ext-CertificateIssuer

// TODO: ObjectAssignment: ext-HoldInstructionCode

export const holdInstruction: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-itu-t */ 2,
        /* member-body */ 2,
        /* us */ 840,
        /* x9cm */ 10040,
        2,
    ]
);

export const id_holdinstruction_none: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    holdInstruction
);

export const id_holdinstruction_callissuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    holdInstruction
);

export const id_holdinstruction_reject: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    holdInstruction
);

// TODO: ObjectAssignment: ext-InvalidityDate

export const id_ce_invalidityDate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_ce
);

/* END_MODULE PKIX1Implicit-2009 */
