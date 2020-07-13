/*
    BEGIN_MODULE PKIXAttributeCertificate-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-attribute-cert-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    AttributeSet,
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "./PKIX-CommonTypes-2009";
export {
    AttributeSet,
    Extensions,
    SecurityCategory,
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "./PKIX-CommonTypes-2009";

import {
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";

import {
    id_at,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "x500-ts/dist/node/AuthenticationFramework";

import {
    id_pkix,
    id_pe,
} from "./PKIX1Explicit-2009";

import {
    GeneralName,
    GeneralNames,
    id_ce,
    _decode_GeneralName,
    _encode_GeneralName,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "x500-ts/dist/node/CertificateExtensions";

import {
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "./CryptographicMessageSyntax-2010";

import {
    ObjectDigestInfo,
    IssuerSerial,
    _decode_AttCertVersion,
    _decode_Holder,
    _decode_AttributeCertificate,
    _decode_ObjectDigestInfo,
    _decode_IssuerSerial,
    _encode_AttCertVersion,
    _encode_Holder,
    _encode_AttributeCertificate,
    _encode_ObjectDigestInfo,
    _encode_IssuerSerial,
    _encode_RoleSyntax,
    _decode_RoleSyntax,
    Targets,
    _decode_Target,
    _decode_Targets,
    _decode_TargetCert,
    _encode_Target,
    _encode_Targets,
    _encode_TargetCert,
    _encode_AttCertValidityPeriod,
    _decode_AttCertValidityPeriod,
    _encode_AttCertIssuer,
    _decode_AttCertIssuer,
} from "x500-ts/dist/node/AttributeCertificateDefinitions";
export {
    AttCertVersion,
    Holder,
    AttributeCertificate,
    ObjectDigestInfo,
    IssuerSerial,
    _decode_AttCertVersion,
    _decode_Holder,
    _decode_AttributeCertificate,
    _decode_ObjectDigestInfo,
    _decode_IssuerSerial,
    _encode_AttCertVersion,
    _encode_Holder,
    _encode_AttributeCertificate,
    _encode_ObjectDigestInfo,
    _encode_IssuerSerial,
    RoleSyntax,
    _encode_RoleSyntax,
    _decode_RoleSyntax,
    Target,
    Targets,
    TargetCert,
    _decode_Target,
    _decode_Targets,
    _decode_TargetCert,
    _encode_Target,
    _encode_Targets,
    _encode_TargetCert,
    AttCertValidityPeriod,
    _encode_AttCertValidityPeriod,
    _decode_AttCertValidityPeriod,
    AttCertIssuer,
    _encode_AttCertIssuer,
    _decode_AttCertIssuer,
} from "x500-ts/dist/node/AttributeCertificateDefinitions";

import {
    ClassList,
    _decode_ClassList,
    _decode_Clearance,
    _encode_ClassList,
    _encode_Clearance,
} from "x500-ts/dist/node/EnhancedSecurity";
export {
    ClassList,
    Clearance,
    _decode_ClassList,
    _decode_Clearance,
    _encode_ClassList,
    _encode_Clearance,
} from "x500-ts/dist/node/EnhancedSecurity";

// TODO: ObjectSetAssignment: AttributeCertExtensions

// TODO: ObjectAssignment: ext-auditIdentity

// TODO: ObjectAssignment: ext-targetInformation

// TODO: ObjectAssignment: ext-noRevAvail

// TODO: ObjectAssignment: ext-ac-proxying

// TODO: ObjectAssignment: ext-aaControls

// TODO: ObjectSetAssignment: AttributesDefined

// TODO: ObjectAssignment: at-authenticationInfo

// TODO: ObjectAssignment: at-accesIdentity

// TODO: ObjectAssignment: at-chargingIdentity

// TODO: ObjectAssignment: at-group

// TODO: ObjectAssignment: at-role

// TODO: ObjectAssignment: at-clearance

// TODO: ObjectAssignment: at-clearance-RFC3281

// TODO: ObjectAssignment: at-encAttrs

export const id_pe_ac_auditIdentity: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_pe
);

export const id_pe_aaControls: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_pe
);

export const id_pe_ac_proxying: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_pe
);

export const id_ce_targetInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [55],
    id_ce
);

export const id_ce_noRevAvail: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [56],
    id_ce
);

export const id_aca: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_pkix
);

export const id_aca_authenticationInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_aca
);

export const id_aca_accessIdentity: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_aca
);

export const id_aca_chargingIdentity: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_aca
);

export const id_aca_group: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_aca
);

export const id_aca_encAttrs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_aca
);

export const id_at_role: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [72],
    id_at
);

export const id_at_clearance: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-ccitt */ 2,
        /* ds */ 5,
        /* attributeType */ 4,
        /* clearance */ 55,
    ]
);

export const id_at_clearance_rfc3281: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-itu-t */ 2,
        /* ds */ 5,
        /* module */ 1,
        /* selected-attribute-types */ 5,
        /* clearance */ 55,
    ]
);

export class V2Form {
    constructor(
        readonly issuerName: asn1.OPTIONAL<GeneralNames>,
        readonly baseCertificateID: asn1.OPTIONAL<IssuerSerial>,
        readonly objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_V2Form: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuerName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "baseCertificateID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "objectDigestInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_V2Form: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_V2Form: __utils.ComponentSpec[] = [];
let _cached_decoder_for_V2Form: __utils.ASN1Decoder<V2Form> | null = null;
let _cached_encoder_for_V2Form: __utils.ASN1Encoder<V2Form> | null = null;
export function _decode_V2Form(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_V2Form) {
        _cached_decoder_for_V2Form = function (el: asn1.ASN1Element): V2Form {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuerName: asn1.OPTIONAL<GeneralNames>;
            let baseCertificateID: asn1.OPTIONAL<IssuerSerial>;
            let objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuerName: (_el: asn1.ASN1Element): void => {
                    issuerName = _decode_GeneralNames(_el);
                },
                baseCertificateID: (_el: asn1.ASN1Element): void => {
                    baseCertificateID = __utils._decode_implicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    )(_el);
                },
                objectDigestInfo: (_el: asn1.ASN1Element): void => {
                    objectDigestInfo = __utils._decode_implicit<
                        ObjectDigestInfo
                    >(() => _decode_ObjectDigestInfo)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_V2Form,
                _extension_additions_list_spec_for_V2Form,
                _root_component_type_list_2_spec_for_V2Form,
                undefined
            );
            return new V2Form /* SEQUENCE_CONSTRUCTOR_CALL */(
                issuerName,
                baseCertificateID,
                objectDigestInfo
            );
        };
    }
    return _cached_decoder_for_V2Form(el);
}
export function _encode_V2Form(
    value: V2Form,
    elGetter: __utils.ASN1Encoder<V2Form>
) {
    if (!_cached_encoder_for_V2Form) {
        _cached_encoder_for_V2Form = function (
            value: V2Form,
            elGetter: __utils.ASN1Encoder<V2Form>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.issuerName === undefined
                            ? undefined
                            : _encode_GeneralNames(
                                  value.issuerName,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.baseCertificateID === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_IssuerSerial,
                                  __utils.BER
                              )(value.baseCertificateID, __utils.BER),
                        /* IF_ABSENT  */ value.objectDigestInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_ObjectDigestInfo,
                                  __utils.BER
                              )(value.objectDigestInfo, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_V2Form(value, elGetter);
}

export type AttrSpec = asn1.OBJECT_IDENTIFIER[]; // SequenceOfType
let _cached_decoder_for_AttrSpec: __utils.ASN1Decoder<AttrSpec> | null = null;
let _cached_encoder_for_AttrSpec: __utils.ASN1Encoder<AttrSpec> | null = null;
export function _decode_AttrSpec(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttrSpec) {
        _cached_decoder_for_AttrSpec = __utils._decodeSequenceOf<
            asn1.OBJECT_IDENTIFIER
        >(() => __utils._decodeObjectIdentifier);
    }
    return _cached_decoder_for_AttrSpec(el);
}
export function _encode_AttrSpec(
    value: AttrSpec,
    elGetter: __utils.ASN1Encoder<AttrSpec>
) {
    if (!_cached_encoder_for_AttrSpec) {
        _cached_encoder_for_AttrSpec = __utils._encodeSequenceOf<
            asn1.OBJECT_IDENTIFIER
        >(() => __utils._encodeObjectIdentifier, __utils.BER);
    }
    return _cached_encoder_for_AttrSpec(value, elGetter);
}

export class AAControls {
    constructor(
        readonly pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>,
        readonly permittedAttrs: asn1.OPTIONAL<AttrSpec>,
        readonly excludedAttrs: asn1.OPTIONAL<AttrSpec>,
        readonly permitUnSpecified: asn1.OPTIONAL<asn1.BOOLEAN>
    ) {}
    public static get _default_value_for_permitUnSpecified() {
        return true;
    }
}
export const _root_component_type_list_1_spec_for_AAControls: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pathLenConstraint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "permittedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "excludedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "permitUnSpecified",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AAControls: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AAControls: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AAControls: __utils.ASN1Decoder<
    AAControls
> | null = null;
let _cached_encoder_for_AAControls: __utils.ASN1Encoder<
    AAControls
> | null = null;
export function _decode_AAControls(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AAControls) {
        _cached_decoder_for_AAControls = function (
            el: asn1.ASN1Element
        ): AAControls {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>;
            let permittedAttrs: asn1.OPTIONAL<AttrSpec>;
            let excludedAttrs: asn1.OPTIONAL<AttrSpec>;
            let permitUnSpecified: asn1.OPTIONAL<asn1.BOOLEAN> =
                AAControls._default_value_for_permitUnSpecified;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pathLenConstraint: (_el: asn1.ASN1Element): void => {
                    pathLenConstraint = __utils._decodeInteger(_el);
                },
                permittedAttrs: (_el: asn1.ASN1Element): void => {
                    permittedAttrs = __utils._decode_implicit<AttrSpec>(
                        () => _decode_AttrSpec
                    )(_el);
                },
                excludedAttrs: (_el: asn1.ASN1Element): void => {
                    excludedAttrs = __utils._decode_implicit<AttrSpec>(
                        () => _decode_AttrSpec
                    )(_el);
                },
                permitUnSpecified: (_el: asn1.ASN1Element): void => {
                    permitUnSpecified = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AAControls,
                _extension_additions_list_spec_for_AAControls,
                _root_component_type_list_2_spec_for_AAControls,
                undefined
            );
            return new AAControls /* SEQUENCE_CONSTRUCTOR_CALL */(
                pathLenConstraint,
                permittedAttrs,
                excludedAttrs,
                permitUnSpecified
            );
        };
    }
    return _cached_decoder_for_AAControls(el);
}
export function _encode_AAControls(
    value: AAControls,
    elGetter: __utils.ASN1Encoder<AAControls>
) {
    if (!_cached_encoder_for_AAControls) {
        _cached_encoder_for_AAControls = function (
            value: AAControls,
            elGetter: __utils.ASN1Encoder<AAControls>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.pathLenConstraint === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.pathLenConstraint,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.permittedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_AttrSpec,
                                  __utils.BER
                              )(value.permittedAttrs, __utils.BER),
                        /* IF_ABSENT  */ value.excludedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_AttrSpec,
                                  __utils.BER
                              )(value.excludedAttrs, __utils.BER),
                        /* IF_DEFAULT */ value.permitUnSpecified ===
                            undefined ||
                        __utils.deepEq(
                            value.permitUnSpecified,
                            AAControls._default_value_for_permitUnSpecified
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.permitUnSpecified,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AAControls(value, elGetter);
}

export type ProxyInfo = Targets[]; // SequenceOfType
let _cached_decoder_for_ProxyInfo: __utils.ASN1Decoder<ProxyInfo> | null = null;
let _cached_encoder_for_ProxyInfo: __utils.ASN1Encoder<ProxyInfo> | null = null;
export function _decode_ProxyInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProxyInfo) {
        _cached_decoder_for_ProxyInfo = __utils._decodeSequenceOf<Targets>(
            () => _decode_Targets
        );
    }
    return _cached_decoder_for_ProxyInfo(el);
}
export function _encode_ProxyInfo(
    value: ProxyInfo,
    elGetter: __utils.ASN1Encoder<ProxyInfo>
) {
    if (!_cached_encoder_for_ProxyInfo) {
        _cached_encoder_for_ProxyInfo = __utils._encodeSequenceOf<Targets>(
            () => _encode_Targets,
            __utils.BER
        );
    }
    return _cached_encoder_for_ProxyInfo(value, elGetter);
}

export type IetfAttrSyntax_values_Item =
    | { octets: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { oid: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { string_: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_IetfAttrSyntax_values_Item: __utils.ASN1Decoder<
    IetfAttrSyntax_values_Item
> | null = null;
let _cached_encoder_for_IetfAttrSyntax_values_Item: __utils.ASN1Encoder<
    IetfAttrSyntax_values_Item
> | null = null;
export function _decode_IetfAttrSyntax_values_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IetfAttrSyntax_values_Item) {
        _cached_decoder_for_IetfAttrSyntax_values_Item = __utils._decode_inextensible_choice<
            IetfAttrSyntax_values_Item
        >({
            "UNIVERSAL 4": ["octets", __utils._decodeOctetString],
            "UNIVERSAL 6": ["oid", __utils._decodeObjectIdentifier],
            "UNIVERSAL 12": ["string_", __utils._decodeUTF8String],
        });
    }
    return _cached_decoder_for_IetfAttrSyntax_values_Item(el);
}
export function _encode_IetfAttrSyntax_values_Item(
    value: IetfAttrSyntax_values_Item,
    elGetter: __utils.ASN1Encoder<IetfAttrSyntax_values_Item>
) {
    if (!_cached_encoder_for_IetfAttrSyntax_values_Item) {
        _cached_encoder_for_IetfAttrSyntax_values_Item = __utils._encode_choice<
            IetfAttrSyntax_values_Item
        >(
            {
                octets: __utils._encodeOctetString,
                oid: __utils._encodeObjectIdentifier,
                string_: __utils._encodeUTF8String,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_IetfAttrSyntax_values_Item(value, elGetter);
}

export class IetfAttrSyntax {
    constructor(
        readonly policyAuthority: asn1.OPTIONAL<GeneralNames>,
        readonly values: IetfAttrSyntax_values_Item[]
    ) {}
}
export const _root_component_type_list_1_spec_for_IetfAttrSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyAuthority",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IetfAttrSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IetfAttrSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IetfAttrSyntax: __utils.ASN1Decoder<
    IetfAttrSyntax
> | null = null;
let _cached_encoder_for_IetfAttrSyntax: __utils.ASN1Encoder<
    IetfAttrSyntax
> | null = null;
export function _decode_IetfAttrSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IetfAttrSyntax) {
        _cached_decoder_for_IetfAttrSyntax = function (
            el: asn1.ASN1Element
        ): IetfAttrSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyAuthority: asn1.OPTIONAL<GeneralNames>;
            let values!: IetfAttrSyntax_values_Item[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyAuthority: (_el: asn1.ASN1Element): void => {
                    policyAuthority = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                values: (_el: asn1.ASN1Element): void => {
                    values = __utils._decodeSequenceOf<
                        IetfAttrSyntax_values_Item
                    >(() => _decode_IetfAttrSyntax_values_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IetfAttrSyntax,
                _extension_additions_list_spec_for_IetfAttrSyntax,
                _root_component_type_list_2_spec_for_IetfAttrSyntax,
                undefined
            );
            return new IetfAttrSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyAuthority,
                values
            );
        };
    }
    return _cached_decoder_for_IetfAttrSyntax(el);
}
export function _encode_IetfAttrSyntax(
    value: IetfAttrSyntax,
    elGetter: __utils.ASN1Encoder<IetfAttrSyntax>
) {
    if (!_cached_encoder_for_IetfAttrSyntax) {
        _cached_encoder_for_IetfAttrSyntax = function (
            value: IetfAttrSyntax,
            elGetter: __utils.ASN1Encoder<IetfAttrSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.policyAuthority === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_GeneralNames,
                                  __utils.BER
                              )(value.policyAuthority, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            IetfAttrSyntax_values_Item
                        >(
                            () => _encode_IetfAttrSyntax_values_Item,
                            __utils.BER
                        )(value.values, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IetfAttrSyntax(value, elGetter);
}

export class SvceAuthInfo {
    constructor(
        readonly service: GeneralName,
        readonly ident: GeneralName,
        readonly authInfo: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_SvceAuthInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "service",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ident",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SvceAuthInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SvceAuthInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SvceAuthInfo: __utils.ASN1Decoder<
    SvceAuthInfo
> | null = null;
let _cached_encoder_for_SvceAuthInfo: __utils.ASN1Encoder<
    SvceAuthInfo
> | null = null;
export function _decode_SvceAuthInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SvceAuthInfo) {
        _cached_decoder_for_SvceAuthInfo = function (
            el: asn1.ASN1Element
        ): SvceAuthInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let service!: GeneralName;
            let ident!: GeneralName;
            let authInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                service: (_el: asn1.ASN1Element): void => {
                    service = _decode_GeneralName(_el);
                },
                ident: (_el: asn1.ASN1Element): void => {
                    ident = _decode_GeneralName(_el);
                },
                authInfo: (_el: asn1.ASN1Element): void => {
                    authInfo = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SvceAuthInfo,
                _extension_additions_list_spec_for_SvceAuthInfo,
                _root_component_type_list_2_spec_for_SvceAuthInfo,
                undefined
            );
            return new SvceAuthInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                service,
                ident,
                authInfo
            );
        };
    }
    return _cached_decoder_for_SvceAuthInfo(el);
}
export function _encode_SvceAuthInfo(
    value: SvceAuthInfo,
    elGetter: __utils.ASN1Encoder<SvceAuthInfo>
) {
    if (!_cached_encoder_for_SvceAuthInfo) {
        _cached_encoder_for_SvceAuthInfo = function (
            value: SvceAuthInfo,
            elGetter: __utils.ASN1Encoder<SvceAuthInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(
                            value.service,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.ident,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.authInfo === undefined
                            ? undefined
                            : __utils._encodeOctetString(
                                  value.authInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SvceAuthInfo(value, elGetter);
}

export class SecurityCategory_rfc3281 {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_SecurityCategory_rfc3281: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SecurityCategory_rfc3281: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SecurityCategory_rfc3281: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SecurityCategory_rfc3281: __utils.ASN1Decoder<
    SecurityCategory_rfc3281
> | null = null;
let _cached_encoder_for_SecurityCategory_rfc3281: __utils.ASN1Encoder<
    SecurityCategory_rfc3281
> | null = null;
export function _decode_SecurityCategory_rfc3281(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SecurityCategory_rfc3281) {
        _cached_decoder_for_SecurityCategory_rfc3281 = function (
            el: asn1.ASN1Element
        ): SecurityCategory_rfc3281 {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SecurityCategory-rfc3281 contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            type_ = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(sequence[0]);
            value = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
                        return new SecurityCategory_rfc3281(type_, value);
        };
    }
    return _cached_decoder_for_SecurityCategory_rfc3281(el);
}
export function _encode_SecurityCategory_rfc3281(
    value: SecurityCategory_rfc3281,
    elGetter: __utils.ASN1Encoder<SecurityCategory_rfc3281>
) {
    if (!_cached_encoder_for_SecurityCategory_rfc3281) {
        _cached_encoder_for_SecurityCategory_rfc3281 = function (
            value: SecurityCategory_rfc3281,
            elGetter: __utils.ASN1Encoder<SecurityCategory_rfc3281>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.type_, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SecurityCategory_rfc3281(value, elGetter);
}

export class Clearance_rfc3281 {
    constructor(
        readonly policyId: asn1.OBJECT_IDENTIFIER,
        readonly classList: asn1.OPTIONAL<ClassList>,
        readonly securityCategories: asn1.OPTIONAL<SecurityCategory_rfc3281[]>
    ) {}
    public static get _default_value_for_classList() {
        return new Uint8ClampedArray([asn1.FALSE_BIT, asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_Clearance_rfc3281: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityCategories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Clearance_rfc3281: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Clearance_rfc3281: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Clearance_rfc3281: __utils.ASN1Decoder<
    Clearance_rfc3281
> | null = null;
let _cached_encoder_for_Clearance_rfc3281: __utils.ASN1Encoder<
    Clearance_rfc3281
> | null = null;
export function _decode_Clearance_rfc3281(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Clearance_rfc3281) {
        _cached_decoder_for_Clearance_rfc3281 = function (
            el: asn1.ASN1Element
        ): Clearance_rfc3281 {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyId!: asn1.OBJECT_IDENTIFIER;
            let classList: asn1.OPTIONAL<ClassList> =
                Clearance_rfc3281._default_value_for_classList;
            let securityCategories: asn1.OPTIONAL<SecurityCategory_rfc3281[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyId: (_el: asn1.ASN1Element): void => {
                    policyId = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                        () => __utils._decodeObjectIdentifier
                    )(_el);
                },
                classList: (_el: asn1.ASN1Element): void => {
                    classList = __utils._decode_implicit<ClassList>(
                        () => _decode_ClassList
                    )(_el);
                },
                securityCategories: (_el: asn1.ASN1Element): void => {
                    securityCategories = __utils._decode_implicit<
                        SecurityCategory_rfc3281[]
                    >(() =>
                        __utils._decodeSetOf<SecurityCategory_rfc3281>(
                            () => _decode_SecurityCategory_rfc3281
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Clearance_rfc3281,
                _extension_additions_list_spec_for_Clearance_rfc3281,
                _root_component_type_list_2_spec_for_Clearance_rfc3281,
                undefined
            );
            return new Clearance_rfc3281 /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyId,
                classList,
                securityCategories
            );
        };
    }
    return _cached_decoder_for_Clearance_rfc3281(el);
}
export function _encode_Clearance_rfc3281(
    value: Clearance_rfc3281,
    elGetter: __utils.ASN1Encoder<Clearance_rfc3281>
) {
    if (!_cached_encoder_for_Clearance_rfc3281) {
        _cached_encoder_for_Clearance_rfc3281 = function (
            value: Clearance_rfc3281,
            elGetter: __utils.ASN1Encoder<Clearance_rfc3281>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.policyId, __utils.BER),
                        /* IF_DEFAULT */ value.classList === undefined ||
                        __utils.deepEq(
                            value.classList,
                            Clearance_rfc3281._default_value_for_classList
                        )
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_ClassList,
                                  __utils.BER
                              )(value.classList, __utils.BER),
                        /* IF_ABSENT  */ value.securityCategories === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () =>
                                      __utils._encodeSetOf<
                                          SecurityCategory_rfc3281
                                      >(
                                          () =>
                                              _encode_SecurityCategory_rfc3281,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.securityCategories, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Clearance_rfc3281(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedSecurityCategories

export class ACClearAttrs {
    constructor(
        readonly acIssuer: GeneralName,
        readonly acSerial: asn1.INTEGER,
        readonly attrs: AttributeSet[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ACClearAttrs: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "acIssuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "acSerial",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attrs",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ACClearAttrs: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ACClearAttrs: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ACClearAttrs: __utils.ASN1Decoder<
    ACClearAttrs
> | null = null;
let _cached_encoder_for_ACClearAttrs: __utils.ASN1Encoder<
    ACClearAttrs
> | null = null;
export function _decode_ACClearAttrs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ACClearAttrs) {
        _cached_decoder_for_ACClearAttrs = function (
            el: asn1.ASN1Element
        ): ACClearAttrs {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "ACClearAttrs contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "acIssuer";
            sequence[1].name = "acSerial";
            sequence[2].name = "attrs";
            let acIssuer!: GeneralName;
            let acSerial!: asn1.INTEGER;
            let attrs!: AttributeSet[];
            acIssuer = _decode_GeneralName(sequence[0]);
            acSerial = __utils._decodeInteger(sequence[1]);
            attrs = __utils._decodeSequenceOf<AttributeSet>(
                () => _decode_AttributeSet
            )(sequence[2]);
                        return new ACClearAttrs(acIssuer, acSerial, attrs);
        };
    }
    return _cached_decoder_for_ACClearAttrs(el);
}
export function _encode_ACClearAttrs(
    value: ACClearAttrs,
    elGetter: __utils.ASN1Encoder<ACClearAttrs>
) {
    if (!_cached_encoder_for_ACClearAttrs) {
        _cached_encoder_for_ACClearAttrs = function (
            value: ACClearAttrs,
            elGetter: __utils.ASN1Encoder<ACClearAttrs>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(
                            value.acIssuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.acSerial,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            AttributeSet
                        >(() => _encode_AttributeSet, __utils.BER)(
                            value.attrs,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ACClearAttrs(value, elGetter);
}

/* END_MODULE PKIXAttributeCertificate-2009 */
