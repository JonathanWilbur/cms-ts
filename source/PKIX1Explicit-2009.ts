/*
    BEGIN_MODULE PKIX1Explicit-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-explicit-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
export * from "x500-ts/dist/node/AuthenticationFramework";
export * from "x500-ts/dist/node/InformationFramework";
import {
    _decode_Extensions,
    _encode_Extensions,
    _decode_SingleAttribute,
    _encode_SingleAttribute,
} from "./PKIX-CommonTypes-2009";

import {
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/AuthenticationFramework";

import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "x500-ts/dist/node/InformationFramework";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "x500-ts/dist/node/InformationFramework";

import {
    DirectoryString,
    _encode_DirectoryString,
    _decode_DirectoryString,
} from "x500-ts/dist/node/SelectedAttributeTypes";
export {
    DirectoryString,
    _encode_DirectoryString,
    _decode_DirectoryString,
} from "x500-ts/dist/node/SelectedAttributeTypes";

import { _decode_ORAddress, _encode_ORAddress } from "./PKIX-X400Address-2009";
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "./PKIX-X400Address-2009";

export const id_pkix: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
]);

export const id_pe: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_pkix
);

export const id_qt: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_pkix
);

export const id_kp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_pkix
);

export const id_ad: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [48],
    id_pkix
);

export const id_qt_cps: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_qt
);

export const id_qt_unotice: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_qt
);

export const id_ad_ocsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ad
);

export const id_ad_caIssuers: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ad
);

export const id_ad_timeStamping: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_ad
);

export const id_ad_caRepository: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_ad
);

export const id_at: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-ccitt */ 2,
    /* ds */ 5,
    4,
]);

export const id_at_name: AttributeType = new asn1.ObjectIdentifier([41], id_at);

// TODO: ObjectAssignment: at-name

export const id_at_surname: AttributeType = new asn1.ObjectIdentifier(
    [4],
    id_at
);

// TODO: ObjectAssignment: at-surname

export const id_at_givenName: AttributeType = new asn1.ObjectIdentifier(
    [42],
    id_at
);

// TODO: ObjectAssignment: at-givenName

export const id_at_initials: AttributeType = new asn1.ObjectIdentifier(
    [43],
    id_at
);

// TODO: ObjectAssignment: at-initials

export const id_at_generationQualifier: AttributeType = new asn1.ObjectIdentifier(
    [44],
    id_at
);

// TODO: ObjectAssignment: at-generationQualifier

export const ub_name: asn1.INTEGER = 32768;

export type X520name = DirectoryString; // DefinedType
let _cached_decoder_for_X520name: __utils.ASN1Decoder<X520name> | null = null;
let _cached_encoder_for_X520name: __utils.ASN1Encoder<X520name> | null = null;
export function _decode_X520name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520name) {
        _cached_decoder_for_X520name = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520name(el);
}
export function _encode_X520name(
    value: X520name,
    elGetter: __utils.ASN1Encoder<X520name>
) {
    if (!_cached_encoder_for_X520name) {
        _cached_encoder_for_X520name = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520name(value, elGetter);
}

export const id_at_commonName: AttributeType = new asn1.ObjectIdentifier(
    [3],
    id_at
);

// TODO: ObjectAssignment: at-x520CommonName

export const ub_common_name: asn1.INTEGER = 64;

export type X520CommonName = DirectoryString; // DefinedType
let _cached_decoder_for_X520CommonName: __utils.ASN1Decoder<
    X520CommonName
> | null = null;
let _cached_encoder_for_X520CommonName: __utils.ASN1Encoder<
    X520CommonName
> | null = null;
export function _decode_X520CommonName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520CommonName) {
        _cached_decoder_for_X520CommonName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520CommonName(el);
}
export function _encode_X520CommonName(
    value: X520CommonName,
    elGetter: __utils.ASN1Encoder<X520CommonName>
) {
    if (!_cached_encoder_for_X520CommonName) {
        _cached_encoder_for_X520CommonName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520CommonName(value, elGetter);
}

export const id_at_localityName: AttributeType = new asn1.ObjectIdentifier(
    [7],
    id_at
);

// TODO: ObjectAssignment: at-x520LocalityName

export const ub_locality_name: asn1.INTEGER = 128;

export type X520LocalityName = DirectoryString; // DefinedType
let _cached_decoder_for_X520LocalityName: __utils.ASN1Decoder<
    X520LocalityName
> | null = null;
let _cached_encoder_for_X520LocalityName: __utils.ASN1Encoder<
    X520LocalityName
> | null = null;
export function _decode_X520LocalityName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520LocalityName) {
        _cached_decoder_for_X520LocalityName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520LocalityName(el);
}
export function _encode_X520LocalityName(
    value: X520LocalityName,
    elGetter: __utils.ASN1Encoder<X520LocalityName>
) {
    if (!_cached_encoder_for_X520LocalityName) {
        _cached_encoder_for_X520LocalityName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520LocalityName(value, elGetter);
}

export const id_at_stateOrProvinceName: AttributeType = new asn1.ObjectIdentifier(
    [8],
    id_at
);

// TODO: ObjectAssignment: at-x520StateOrProvinceName

export const ub_state_name: asn1.INTEGER = 128;

export type X520StateOrProvinceName = DirectoryString; // DefinedType
let _cached_decoder_for_X520StateOrProvinceName: __utils.ASN1Decoder<
    X520StateOrProvinceName
> | null = null;
let _cached_encoder_for_X520StateOrProvinceName: __utils.ASN1Encoder<
    X520StateOrProvinceName
> | null = null;
export function _decode_X520StateOrProvinceName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520StateOrProvinceName) {
        _cached_decoder_for_X520StateOrProvinceName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520StateOrProvinceName(el);
}
export function _encode_X520StateOrProvinceName(
    value: X520StateOrProvinceName,
    elGetter: __utils.ASN1Encoder<X520StateOrProvinceName>
) {
    if (!_cached_encoder_for_X520StateOrProvinceName) {
        _cached_encoder_for_X520StateOrProvinceName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520StateOrProvinceName(value, elGetter);
}

export const id_at_organizationName: AttributeType = new asn1.ObjectIdentifier(
    [10],
    id_at
);

// TODO: ObjectAssignment: at-x520OrganizationName

export const ub_organization_name: asn1.INTEGER = 64;

export type X520OrganizationName = DirectoryString; // DefinedType
let _cached_decoder_for_X520OrganizationName: __utils.ASN1Decoder<
    X520OrganizationName
> | null = null;
let _cached_encoder_for_X520OrganizationName: __utils.ASN1Encoder<
    X520OrganizationName
> | null = null;
export function _decode_X520OrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520OrganizationName) {
        _cached_decoder_for_X520OrganizationName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationName(el);
}
export function _encode_X520OrganizationName(
    value: X520OrganizationName,
    elGetter: __utils.ASN1Encoder<X520OrganizationName>
) {
    if (!_cached_encoder_for_X520OrganizationName) {
        _cached_encoder_for_X520OrganizationName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationName(value, elGetter);
}

export const id_at_organizationalUnitName: AttributeType = new asn1.ObjectIdentifier(
    [11],
    id_at
);

// TODO: ObjectAssignment: at-x520OrganizationalUnitName

export const ub_organizational_unit_name: asn1.INTEGER = 64;

export type X520OrganizationalUnitName = DirectoryString; // DefinedType
let _cached_decoder_for_X520OrganizationalUnitName: __utils.ASN1Decoder<
    X520OrganizationalUnitName
> | null = null;
let _cached_encoder_for_X520OrganizationalUnitName: __utils.ASN1Encoder<
    X520OrganizationalUnitName
> | null = null;
export function _decode_X520OrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520OrganizationalUnitName) {
        _cached_decoder_for_X520OrganizationalUnitName = _decode_DirectoryString;
    }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}
export function _encode_X520OrganizationalUnitName(
    value: X520OrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<X520OrganizationalUnitName>
) {
    if (!_cached_encoder_for_X520OrganizationalUnitName) {
        _cached_encoder_for_X520OrganizationalUnitName = _encode_DirectoryString;
    }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}

export const id_at_title: AttributeType = new asn1.ObjectIdentifier(
    [12],
    id_at
);

// TODO: ObjectAssignment: at-x520Title

export const id_at_dnQualifier: AttributeType = new asn1.ObjectIdentifier(
    [46],
    id_at
);

// TODO: ObjectAssignment: at-x520dnQualifier

export const id_at_countryName: AttributeType = new asn1.ObjectIdentifier(
    [6],
    id_at
);

// TODO: ObjectAssignment: at-x520countryName

export const id_at_serialNumber: AttributeType = new asn1.ObjectIdentifier(
    [5],
    id_at
);

// TODO: ObjectAssignment: at-x520SerialNumber

export const id_at_pseudonym: AttributeType = new asn1.ObjectIdentifier(
    [65],
    id_at
);

// TODO: ObjectAssignment: at-x520Pseudonym

export const id_domainComponent: AttributeType = new asn1.ObjectIdentifier([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
    /* pilotAttributeType */ 1,
    25,
]);

// TODO: ObjectAssignment: at-domainComponent

export const pkcs_9: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    9,
]);

export const id_emailAddress: AttributeType = new asn1.ObjectIdentifier(
    [1],
    pkcs_9
);

// TODO: ObjectAssignment: at-emailAddress

export const ub_title: asn1.INTEGER = 64;

export const ub_serial_number: asn1.INTEGER = 64;

export const ub_pseudonym: asn1.INTEGER = 128;

export const ub_emailaddress_length: asn1.INTEGER = 255;

/* END_MODULE PKIX1Explicit-2009 */
