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
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";

import {
    AttributeSet,
    Extensions,
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
} from "./PKIX-CommonTypes-2009";

import {
    CertificateSerialNumber,
    UniqueIdentifier,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "./PKIX1Explicit-2009";
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
} from "./PKIX1Explicit-2009";

import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "./PKIX1Implicit-2009";

import {
    AttCertValidityPeriod,
    IssuerSerial,
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

export type AttributeCertificateInfoV1_subject =
    | { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { subjectName: GeneralNames } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AttributeCertificateInfoV1_subject: __utils.ASN1Decoder<
    AttributeCertificateInfoV1_subject
> | null = null;
let _cached_encoder_for_AttributeCertificateInfoV1_subject: __utils.ASN1Encoder<
    AttributeCertificateInfoV1_subject
> | null = null;
export function _decode_AttributeCertificateInfoV1_subject(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_AttributeCertificateInfoV1_subject) {
        _cached_decoder_for_AttributeCertificateInfoV1_subject = __utils._decode_inextensible_choice<
            AttributeCertificateInfoV1_subject
        >({
            "CONTEXT 0": [
                "baseCertificateID",
                __utils._decode_explicit<IssuerSerial>(
                    () => _decode_IssuerSerial
                ),
            ],
            "CONTEXT 1": [
                "subjectName",
                __utils._decode_explicit<GeneralNames>(
                    () => _decode_GeneralNames
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeCertificateInfoV1_subject(el);
}
export function _encode_AttributeCertificateInfoV1_subject(
    value: AttributeCertificateInfoV1_subject,
    elGetter: __utils.ASN1Encoder<AttributeCertificateInfoV1_subject>
) {
    if (!_cached_encoder_for_AttributeCertificateInfoV1_subject) {
        _cached_encoder_for_AttributeCertificateInfoV1_subject = __utils._encode_choice<
            AttributeCertificateInfoV1_subject
        >(
            {
                baseCertificateID: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_IssuerSerial,
                    __utils.BER
                ),
                subjectName: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_GeneralNames,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AttributeCertificateInfoV1_subject(
        value,
        elGetter
    );
}

export class AttributeCertificateInfoV1 {
    constructor(
        readonly version: asn1.OPTIONAL<AttCertVersionV1>,
        readonly subject: AttributeCertificateInfoV1_subject,
        readonly issuer: GeneralNames,
        readonly signature: AlgorithmIdentifier,
        readonly serialNumber: CertificateSerialNumber,
        readonly attCertValidityPeriod: AttCertValidityPeriod,
        readonly attributes: AttributeSet[],
        readonly issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_version() {
        return AttCertVersionV1_v1;
    }
}
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
let _cached_decoder_for_AttributeCertificateInfoV1: __utils.ASN1Decoder<
    AttributeCertificateInfoV1
> | null = null;
let _cached_encoder_for_AttributeCertificateInfoV1: __utils.ASN1Encoder<
    AttributeCertificateInfoV1
> | null = null;
export function _decode_AttributeCertificateInfoV1(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCertificateInfoV1) {
        _cached_decoder_for_AttributeCertificateInfoV1 = function (
            el: asn1.ASN1Element
        ): AttributeCertificateInfoV1 {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<AttCertVersionV1> =
                AttributeCertificateInfoV1._default_value_for_version;
            let subject!: AttributeCertificateInfoV1_subject;
            let issuer!: GeneralNames;
            let signature!: AlgorithmIdentifier;
            let serialNumber!: CertificateSerialNumber;
            let attCertValidityPeriod!: AttCertValidityPeriod;
            let attributes!: AttributeSet[];
            let issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AttCertVersionV1(_el);
                },
                subject: (_el: asn1.ASN1Element): void => {
                    subject = _decode_AttributeCertificateInfoV1_subject(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                signature: (_el: asn1.ASN1Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                attCertValidityPeriod: (_el: asn1.ASN1Element): void => {
                    attCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
                },
                attributes: (_el: asn1.ASN1Element): void => {
                    attributes = __utils._decodeSequenceOf<AttributeSet>(
                        () => _decode_AttributeSet
                    )(_el);
                },
                issuerUniqueID: (_el: asn1.ASN1Element): void => {
                    issuerUniqueID = _decode_UniqueIdentifier(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeCertificateInfoV1,
                _extension_additions_list_spec_for_AttributeCertificateInfoV1,
                _root_component_type_list_2_spec_for_AttributeCertificateInfoV1,
                undefined
            );
            return new AttributeCertificateInfoV1 /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                subject,
                issuer,
                signature,
                serialNumber,
                attCertValidityPeriod,
                attributes,
                issuerUniqueID,
                extensions
            );
        };
    }
    return _cached_decoder_for_AttributeCertificateInfoV1(el);
}
export function _encode_AttributeCertificateInfoV1(
    value: AttributeCertificateInfoV1,
    elGetter: __utils.ASN1Encoder<AttributeCertificateInfoV1>
) {
    if (!_cached_encoder_for_AttributeCertificateInfoV1) {
        _cached_encoder_for_AttributeCertificateInfoV1 = function (
            value: AttributeCertificateInfoV1,
            elGetter: __utils.ASN1Encoder<AttributeCertificateInfoV1>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.version === undefined ||
                        __utils.deepEq(
                            value.version,
                            AttributeCertificateInfoV1._default_value_for_version
                        )
                            ? undefined
                            : _encode_AttCertVersionV1(
                                  value.version,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_AttributeCertificateInfoV1_subject(
                            value.subject,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralNames(
                            value.issuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signature,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AttCertValidityPeriod(
                            value.attCertValidityPeriod,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            AttributeSet
                        >(() => _encode_AttributeSet, __utils.BER)(
                            value.attributes,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.issuerUniqueID === undefined
                            ? undefined
                            : _encode_UniqueIdentifier(
                                  value.issuerUniqueID,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : _encode_Extensions(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeCertificateInfoV1(value, elGetter);
}

export type AttributeCertificateV1 = SIGNED<AttributeCertificateInfoV1>; // DefinedType
let _cached_decoder_for_AttributeCertificateV1: __utils.ASN1Decoder<
    AttributeCertificateV1
> | null = null;
let _cached_encoder_for_AttributeCertificateV1: __utils.ASN1Encoder<
    AttributeCertificateV1
> | null = null;
export function _decode_AttributeCertificateV1(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCertificateV1) {
        _cached_decoder_for_AttributeCertificateV1 = _get_decoder_for_SIGNED<
            AttributeCertificateInfoV1
        >(_decode_AttributeCertificateInfoV1);
    }
    return _cached_decoder_for_AttributeCertificateV1(el);
}
export function _encode_AttributeCertificateV1(
    value: AttributeCertificateV1,
    elGetter: __utils.ASN1Encoder<AttributeCertificateV1>
) {
    if (!_cached_encoder_for_AttributeCertificateV1) {
        _cached_encoder_for_AttributeCertificateV1 = _get_encoder_for_SIGNED<
            AttributeCertificateInfoV1
        >(_encode_AttributeCertificateInfoV1);
    }
    return _cached_encoder_for_AttributeCertificateV1(value, elGetter);
}

// TODO: ObjectSetAssignment: AttrList

// TODO: ObjectSetAssignment: AttributeCertExtensionsV1

/* END_MODULE AttributeCertificateVersion1-2009 */
