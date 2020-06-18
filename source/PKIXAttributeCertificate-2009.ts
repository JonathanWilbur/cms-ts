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
    Extensions,
    SecurityCategory,
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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";

import {
    CertificateSerialNumber,
    UniqueIdentifier,
    id_pkix,
    id_pe,
    id_at,
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
    id_pkix,
    id_pe,
    id_kp,
    id_ad,
    id_at,
    SIGNED,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "./PKIX1Explicit-2009";

import {
    GeneralName,
    GeneralNames,
    id_ce,
    _decode_GeneralName,
    _encode_GeneralName,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "./PKIX1Implicit-2009";

import {
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "./CryptographicMessageSyntax-2010";

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

export type AttCertVersion = asn1.INTEGER;
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AttCertVersion: __utils.ASN1Decoder<
    AttCertVersion
> | null = null;
let _cached_encoder_for_AttCertVersion: __utils.ASN1Encoder<
    AttCertVersion
> | null = null;
export function _decode_AttCertVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttCertVersion) {
        _cached_decoder_for_AttCertVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_AttCertVersion(el);
}
export function _encode_AttCertVersion(
    value: AttCertVersion,
    elGetter: __utils.ASN1Encoder<AttCertVersion>
) {
    if (!_cached_encoder_for_AttCertVersion) {
        _cached_encoder_for_AttCertVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_AttCertVersion(value, elGetter);
}

export class IssuerSerial {
    constructor(
        readonly issuer: GeneralNames,
        readonly serial: CertificateSerialNumber,
        readonly issuerUID: asn1.OPTIONAL<UniqueIdentifier>
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serial",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuerUID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuerSerial: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IssuerSerial: __utils.ASN1Decoder<
    IssuerSerial
> | null = null;
let _cached_encoder_for_IssuerSerial: __utils.ASN1Encoder<
    IssuerSerial
> | null = null;
export function _decode_IssuerSerial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuerSerial) {
        _cached_decoder_for_IssuerSerial = function (
            el: asn1.ASN1Element
        ): IssuerSerial {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: GeneralNames;
            let serial!: CertificateSerialNumber;
            let issuerUID: asn1.OPTIONAL<UniqueIdentifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                serial: (_el: asn1.ASN1Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
                issuerUID: (_el: asn1.ASN1Element): void => {
                    issuerUID = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuerSerial,
                _extension_additions_list_spec_for_IssuerSerial,
                _root_component_type_list_2_spec_for_IssuerSerial,
                undefined
            );
            return new IssuerSerial /* SEQUENCE_CONSTRUCTOR_CALL */(
                issuer,
                serial,
                issuerUID
            );
        };
    }
    return _cached_decoder_for_IssuerSerial(el);
}
export function _encode_IssuerSerial(
    value: IssuerSerial,
    elGetter: __utils.ASN1Encoder<IssuerSerial>
) {
    if (!_cached_encoder_for_IssuerSerial) {
        _cached_encoder_for_IssuerSerial = function (
            value: IssuerSerial,
            elGetter: __utils.ASN1Encoder<IssuerSerial>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralNames(
                            value.issuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serial,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.issuerUID === undefined
                            ? undefined
                            : _encode_UniqueIdentifier(
                                  value.issuerUID,
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
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}

export enum ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}
export const ObjectDigestInfo_digestedObjectType_publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* LONG_NAMED_ENUMERATED_VALUE */
export const ObjectDigestInfo_digestedObjectType_publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* LONG_NAMED_ENUMERATED_VALUE */
export const ObjectDigestInfo_digestedObjectType_otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ObjectDigestInfo_digestedObjectType: __utils.ASN1Decoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
let _cached_encoder_for_ObjectDigestInfo_digestedObjectType: __utils.ASN1Encoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
export function _decode_ObjectDigestInfo_digestedObjectType(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_decoder_for_ObjectDigestInfo_digestedObjectType =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectDigestInfo_digestedObjectType(el);
}
export function _encode_ObjectDigestInfo_digestedObjectType(
    value: ObjectDigestInfo_digestedObjectType,
    elGetter: __utils.ASN1Encoder<ObjectDigestInfo_digestedObjectType>
) {
    if (!_cached_encoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_encoder_for_ObjectDigestInfo_digestedObjectType =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectDigestInfo_digestedObjectType(
        value,
        elGetter
    );
}

export class ObjectDigestInfo {
    constructor(
        readonly digestedObjectType: ObjectDigestInfo_digestedObjectType,
        readonly otherObjectTypeID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>,
        readonly digestAlgorithm: AlgorithmIdentifier,
        readonly objectDigest: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "digestedObjectType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "otherObjectTypeID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digestAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "objectDigest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ObjectDigestInfo: __utils.ASN1Decoder<
    ObjectDigestInfo
> | null = null;
let _cached_encoder_for_ObjectDigestInfo: __utils.ASN1Encoder<
    ObjectDigestInfo
> | null = null;
export function _decode_ObjectDigestInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ObjectDigestInfo) {
        _cached_decoder_for_ObjectDigestInfo = function (
            el: asn1.ASN1Element
        ): ObjectDigestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let digestedObjectType!: ObjectDigestInfo_digestedObjectType;
            let otherObjectTypeID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let digestAlgorithm!: AlgorithmIdentifier;
            let objectDigest!: asn1.BIT_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                digestedObjectType: (_el: asn1.ASN1Element): void => {
                    digestedObjectType = _decode_ObjectDigestInfo_digestedObjectType(
                        _el
                    );
                },
                otherObjectTypeID: (_el: asn1.ASN1Element): void => {
                    otherObjectTypeID = __utils._decodeObjectIdentifier(_el);
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                objectDigest: (_el: asn1.ASN1Element): void => {
                    objectDigest = __utils._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectDigestInfo,
                _extension_additions_list_spec_for_ObjectDigestInfo,
                _root_component_type_list_2_spec_for_ObjectDigestInfo,
                undefined
            );
            return new ObjectDigestInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                digestedObjectType,
                otherObjectTypeID,
                digestAlgorithm,
                objectDigest
            );
        };
    }
    return _cached_decoder_for_ObjectDigestInfo(el);
}
export function _encode_ObjectDigestInfo(
    value: ObjectDigestInfo,
    elGetter: __utils.ASN1Encoder<ObjectDigestInfo>
) {
    if (!_cached_encoder_for_ObjectDigestInfo) {
        _cached_encoder_for_ObjectDigestInfo = function (
            value: ObjectDigestInfo,
            elGetter: __utils.ASN1Encoder<ObjectDigestInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectDigestInfo_digestedObjectType(
                            value.digestedObjectType,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.otherObjectTypeID === undefined
                            ? undefined
                            : __utils._encodeObjectIdentifier(
                                  value.otherObjectTypeID,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.objectDigest,
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
    return _cached_encoder_for_ObjectDigestInfo(value, elGetter);
}

export class Holder {
    constructor(
        readonly baseCertificateID: asn1.OPTIONAL<IssuerSerial>,
        readonly entityName: asn1.OPTIONAL<GeneralNames>,
        readonly objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_Holder: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "baseCertificateID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entityName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "objectDigestInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Holder: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Holder: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Holder: __utils.ASN1Decoder<Holder> | null = null;
let _cached_encoder_for_Holder: __utils.ASN1Encoder<Holder> | null = null;
export function _decode_Holder(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Holder) {
        _cached_decoder_for_Holder = function (el: asn1.ASN1Element): Holder {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseCertificateID: asn1.OPTIONAL<IssuerSerial>;
            let entityName: asn1.OPTIONAL<GeneralNames>;
            let objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                baseCertificateID: (_el: asn1.ASN1Element): void => {
                    baseCertificateID = __utils._decode_implicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    )(_el);
                },
                entityName: (_el: asn1.ASN1Element): void => {
                    entityName = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
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
                _root_component_type_list_1_spec_for_Holder,
                _extension_additions_list_spec_for_Holder,
                _root_component_type_list_2_spec_for_Holder,
                undefined
            );
            return new Holder /* SEQUENCE_CONSTRUCTOR_CALL */(
                baseCertificateID,
                entityName,
                objectDigestInfo
            );
        };
    }
    return _cached_decoder_for_Holder(el);
}
export function _encode_Holder(
    value: Holder,
    elGetter: __utils.ASN1Encoder<Holder>
) {
    if (!_cached_encoder_for_Holder) {
        _cached_encoder_for_Holder = function (
            value: Holder,
            elGetter: __utils.ASN1Encoder<Holder>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseCertificateID === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_IssuerSerial,
                                  __utils.BER
                              )(value.baseCertificateID, __utils.BER),
                        /* IF_ABSENT  */ value.entityName === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_GeneralNames,
                                  __utils.BER
                              )(value.entityName, __utils.BER),
                        /* IF_ABSENT  */ value.objectDigestInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
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
    return _cached_encoder_for_Holder(value, elGetter);
}

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

export type AttCertIssuer =
    | { v1Form: GeneralNames } /* CHOICE_ALT_ROOT */
    | { v2Form: V2Form } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AttCertIssuer: __utils.ASN1Decoder<
    AttCertIssuer
> | null = null;
let _cached_encoder_for_AttCertIssuer: __utils.ASN1Encoder<
    AttCertIssuer
> | null = null;
export function _decode_AttCertIssuer(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttCertIssuer) {
        _cached_decoder_for_AttCertIssuer = __utils._decode_inextensible_choice<
            AttCertIssuer
        >({
            "UNIVERSAL 16": ["v1Form", _decode_GeneralNames],
            "CONTEXT 0": [
                "v2Form",
                __utils._decode_implicit<V2Form>(() => _decode_V2Form),
            ],
        });
    }
    return _cached_decoder_for_AttCertIssuer(el);
}
export function _encode_AttCertIssuer(
    value: AttCertIssuer,
    elGetter: __utils.ASN1Encoder<AttCertIssuer>
) {
    if (!_cached_encoder_for_AttCertIssuer) {
        _cached_encoder_for_AttCertIssuer = __utils._encode_choice<
            AttCertIssuer
        >(
            {
                v1Form: _encode_GeneralNames,
                v2Form: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_V2Form,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AttCertIssuer(value, elGetter);
}

export class AttCertValidityPeriod {
    constructor(
        readonly notBeforeTim: asn1.GeneralizedTime,
        readonly notAfterTime: asn1.GeneralizedTime
    ) {}
}
export const _root_component_type_list_1_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notBeforeTim",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notAfterTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttCertValidityPeriod: __utils.ASN1Decoder<
    AttCertValidityPeriod
> | null = null;
let _cached_encoder_for_AttCertValidityPeriod: __utils.ASN1Encoder<
    AttCertValidityPeriod
> | null = null;
export function _decode_AttCertValidityPeriod(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttCertValidityPeriod) {
        _cached_decoder_for_AttCertValidityPeriod = function (
            el: asn1.ASN1Element
        ): AttCertValidityPeriod {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AttCertValidityPeriod contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "notBeforeTim";
            sequence[1].name = "notAfterTime";
            let notBeforeTim!: asn1.GeneralizedTime;
            let notAfterTime!: asn1.GeneralizedTime;
            notBeforeTim = __utils._decodeGeneralizedTime(sequence[0]);
            notAfterTime = __utils._decodeGeneralizedTime(sequence[1]);
            // TODO: Validate values.
            return new AttCertValidityPeriod(notBeforeTim, notAfterTime);
        };
    }
    return _cached_decoder_for_AttCertValidityPeriod(el);
}
export function _encode_AttCertValidityPeriod(
    value: AttCertValidityPeriod,
    elGetter: __utils.ASN1Encoder<AttCertValidityPeriod>
) {
    if (!_cached_encoder_for_AttCertValidityPeriod) {
        _cached_encoder_for_AttCertValidityPeriod = function (
            value: AttCertValidityPeriod,
            elGetter: __utils.ASN1Encoder<AttCertValidityPeriod>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.notBeforeTim,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.notAfterTime,
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
    return _cached_encoder_for_AttCertValidityPeriod(value, elGetter);
}

export class AttributeCertificateInfo {
    constructor(
        readonly version: AttCertVersion,
        readonly holder: Holder,
        readonly issuer: AttCertIssuer,
        readonly signature: AlgorithmIdentifier,
        readonly serialNumber: CertificateSerialNumber,
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        readonly attributes: AttributeSet[],
        readonly issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "holder",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
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
        "attrCertValidityPeriod",
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
export const _root_component_type_list_2_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeCertificateInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeCertificateInfo: __utils.ASN1Decoder<
    AttributeCertificateInfo
> | null = null;
let _cached_encoder_for_AttributeCertificateInfo: __utils.ASN1Encoder<
    AttributeCertificateInfo
> | null = null;
export function _decode_AttributeCertificateInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCertificateInfo) {
        _cached_decoder_for_AttributeCertificateInfo = function (
            el: asn1.ASN1Element
        ): AttributeCertificateInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: AttCertVersion;
            let holder!: Holder;
            let issuer!: AttCertIssuer;
            let signature!: AlgorithmIdentifier;
            let serialNumber!: CertificateSerialNumber;
            let attrCertValidityPeriod!: AttCertValidityPeriod;
            let attributes!: AttributeSet[];
            let issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_AttCertVersion(_el);
                },
                holder: (_el: asn1.ASN1Element): void => {
                    holder = _decode_Holder(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_AttCertIssuer(_el);
                },
                signature: (_el: asn1.ASN1Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                attrCertValidityPeriod: (_el: asn1.ASN1Element): void => {
                    attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
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
                _root_component_type_list_1_spec_for_AttributeCertificateInfo,
                _extension_additions_list_spec_for_AttributeCertificateInfo,
                _root_component_type_list_2_spec_for_AttributeCertificateInfo,
                undefined
            );
            return new AttributeCertificateInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                holder,
                issuer,
                signature,
                serialNumber,
                attrCertValidityPeriod,
                attributes,
                issuerUniqueID,
                extensions
            );
        };
    }
    return _cached_decoder_for_AttributeCertificateInfo(el);
}
export function _encode_AttributeCertificateInfo(
    value: AttributeCertificateInfo,
    elGetter: __utils.ASN1Encoder<AttributeCertificateInfo>
) {
    if (!_cached_encoder_for_AttributeCertificateInfo) {
        _cached_encoder_for_AttributeCertificateInfo = function (
            value: AttributeCertificateInfo,
            elGetter: __utils.ASN1Encoder<AttributeCertificateInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttCertVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Holder(
                            value.holder,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AttCertIssuer(
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
                            value.attrCertValidityPeriod,
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
    return _cached_encoder_for_AttributeCertificateInfo(value, elGetter);
}

export type AttributeCertificate = SIGNED<AttributeCertificateInfo>; // DefinedType
let _cached_decoder_for_AttributeCertificate: __utils.ASN1Decoder<
    AttributeCertificate
> | null = null;
let _cached_encoder_for_AttributeCertificate: __utils.ASN1Encoder<
    AttributeCertificate
> | null = null;
export function _decode_AttributeCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCertificate) {
        _cached_decoder_for_AttributeCertificate = _get_decoder_for_SIGNED<
            AttributeCertificateInfo
        >(_decode_AttributeCertificateInfo);
    }
    return _cached_decoder_for_AttributeCertificate(el);
}
export function _encode_AttributeCertificate(
    value: AttributeCertificate,
    elGetter: __utils.ASN1Encoder<AttributeCertificate>
) {
    if (!_cached_encoder_for_AttributeCertificate) {
        _cached_encoder_for_AttributeCertificate = _get_encoder_for_SIGNED<
            AttributeCertificateInfo
        >(_encode_AttributeCertificateInfo);
    }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
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

export class TargetCert {
    constructor(
        readonly targetCertificate: IssuerSerial,
        readonly targetName: asn1.OPTIONAL<GeneralName>,
        readonly certDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_TargetCert: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "targetCertificate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "targetName",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certDigestInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TargetCert: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TargetCert: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TargetCert: __utils.ASN1Decoder<
    TargetCert
> | null = null;
let _cached_encoder_for_TargetCert: __utils.ASN1Encoder<
    TargetCert
> | null = null;
export function _decode_TargetCert(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TargetCert) {
        _cached_decoder_for_TargetCert = function (
            el: asn1.ASN1Element
        ): TargetCert {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let targetCertificate!: IssuerSerial;
            let targetName: asn1.OPTIONAL<GeneralName>;
            let certDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                targetCertificate: (_el: asn1.ASN1Element): void => {
                    targetCertificate = _decode_IssuerSerial(_el);
                },
                targetName: (_el: asn1.ASN1Element): void => {
                    targetName = _decode_GeneralName(_el);
                },
                certDigestInfo: (_el: asn1.ASN1Element): void => {
                    certDigestInfo = _decode_ObjectDigestInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TargetCert,
                _extension_additions_list_spec_for_TargetCert,
                _root_component_type_list_2_spec_for_TargetCert,
                undefined
            );
            return new TargetCert /* SEQUENCE_CONSTRUCTOR_CALL */(
                targetCertificate,
                targetName,
                certDigestInfo
            );
        };
    }
    return _cached_decoder_for_TargetCert(el);
}
export function _encode_TargetCert(
    value: TargetCert,
    elGetter: __utils.ASN1Encoder<TargetCert>
) {
    if (!_cached_encoder_for_TargetCert) {
        _cached_encoder_for_TargetCert = function (
            value: TargetCert,
            elGetter: __utils.ASN1Encoder<TargetCert>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IssuerSerial(
                            value.targetCertificate,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.targetName === undefined
                            ? undefined
                            : _encode_GeneralName(
                                  value.targetName,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.certDigestInfo === undefined
                            ? undefined
                            : _encode_ObjectDigestInfo(
                                  value.certDigestInfo,
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
    return _cached_encoder_for_TargetCert(value, elGetter);
}

export type Target =
    | { targetName: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetGroup: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetCert: TargetCert } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Target: __utils.ASN1Decoder<Target> | null = null;
let _cached_encoder_for_Target: __utils.ASN1Encoder<Target> | null = null;
export function _decode_Target(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Target) {
        _cached_decoder_for_Target = __utils._decode_inextensible_choice<
            Target
        >({
            "CONTEXT 0": [
                "targetName",
                __utils._decode_implicit<GeneralName>(
                    () => _decode_GeneralName
                ),
            ],
            "CONTEXT 1": [
                "targetGroup",
                __utils._decode_implicit<GeneralName>(
                    () => _decode_GeneralName
                ),
            ],
            "CONTEXT 2": [
                "targetCert",
                __utils._decode_implicit<TargetCert>(() => _decode_TargetCert),
            ],
        });
    }
    return _cached_decoder_for_Target(el);
}
export function _encode_Target(
    value: Target,
    elGetter: __utils.ASN1Encoder<Target>
) {
    if (!_cached_encoder_for_Target) {
        _cached_encoder_for_Target = __utils._encode_choice<Target>(
            {
                targetName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_GeneralName,
                    __utils.BER
                ),
                targetGroup: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_GeneralName,
                    __utils.BER
                ),
                targetCert: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_TargetCert,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Target(value, elGetter);
}

export type Targets = Target[]; // SequenceOfType
let _cached_decoder_for_Targets: __utils.ASN1Decoder<Targets> | null = null;
let _cached_encoder_for_Targets: __utils.ASN1Encoder<Targets> | null = null;
export function _decode_Targets(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Targets) {
        _cached_decoder_for_Targets = __utils._decodeSequenceOf<Target>(
            () => _decode_Target
        );
    }
    return _cached_decoder_for_Targets(el);
}
export function _encode_Targets(
    value: Targets,
    elGetter: __utils.ASN1Encoder<Targets>
) {
    if (!_cached_encoder_for_Targets) {
        _cached_encoder_for_Targets = __utils._encodeSequenceOf<Target>(
            () => _encode_Target,
            __utils.BER
        );
    }
    return _cached_encoder_for_Targets(value, elGetter);
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

export class RoleSyntax {
    constructor(
        readonly roleAuthority: asn1.OPTIONAL<GeneralNames>,
        readonly roleName: GeneralName
    ) {}
}
export const _root_component_type_list_1_spec_for_RoleSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "roleAuthority",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "roleName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RoleSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RoleSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RoleSyntax: __utils.ASN1Decoder<
    RoleSyntax
> | null = null;
let _cached_encoder_for_RoleSyntax: __utils.ASN1Encoder<
    RoleSyntax
> | null = null;
export function _decode_RoleSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RoleSyntax) {
        _cached_decoder_for_RoleSyntax = function (
            el: asn1.ASN1Element
        ): RoleSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let roleAuthority: asn1.OPTIONAL<GeneralNames>;
            let roleName!: GeneralName;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                roleAuthority: (_el: asn1.ASN1Element): void => {
                    roleAuthority = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                roleName: (_el: asn1.ASN1Element): void => {
                    roleName = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSyntax,
                _extension_additions_list_spec_for_RoleSyntax,
                _root_component_type_list_2_spec_for_RoleSyntax,
                undefined
            );
            return new RoleSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                roleAuthority,
                roleName
            );
        };
    }
    return _cached_decoder_for_RoleSyntax(el);
}
export function _encode_RoleSyntax(
    value: RoleSyntax,
    elGetter: __utils.ASN1Encoder<RoleSyntax>
) {
    if (!_cached_encoder_for_RoleSyntax) {
        _cached_encoder_for_RoleSyntax = function (
            value: RoleSyntax,
            elGetter: __utils.ASN1Encoder<RoleSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.roleAuthority === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_GeneralNames,
                                  __utils.BER
                              )(value.roleAuthority, __utils.BER),
                        /* REQUIRED   */ __utils._encode_implicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => _encode_GeneralName,
                            __utils.BER
                        )(value.roleName, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RoleSyntax(value, elGetter);
}

export type ClassList = asn1.BIT_STRING;
export const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */
export const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */
export const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */
export const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */
export const ClassList_secret: number = 4; /* LONG_NAMED_BIT */
export const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */
let _cached_decoder_for_ClassList: __utils.ASN1Decoder<ClassList> | null = null;
let _cached_encoder_for_ClassList: __utils.ASN1Encoder<ClassList> | null = null;
export function _decode_ClassList(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassList) {
        _cached_decoder_for_ClassList = __utils._decodeBitString;
    }
    return _cached_decoder_for_ClassList(el);
}
export function _encode_ClassList(
    value: ClassList,
    elGetter: __utils.ASN1Encoder<ClassList>
) {
    if (!_cached_encoder_for_ClassList) {
        _cached_encoder_for_ClassList = __utils._encodeBitString;
    }
    return _cached_encoder_for_ClassList(value, elGetter);
}

export class Clearance {
    constructor(
        readonly policyId: asn1.OBJECT_IDENTIFIER,
        readonly classList: asn1.OPTIONAL<ClassList>,
        readonly securityCategories: asn1.OPTIONAL<SecurityCategory[]>
    ) {}
    public static get _default_value_for_classList() {
        return new Uint8ClampedArray([asn1.FALSE_BIT, asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_Clearance: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityCategories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Clearance: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Clearance: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Clearance: __utils.ASN1Decoder<Clearance> | null = null;
let _cached_encoder_for_Clearance: __utils.ASN1Encoder<Clearance> | null = null;
export function _decode_Clearance(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Clearance) {
        _cached_decoder_for_Clearance = function (
            el: asn1.ASN1Element
        ): Clearance {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyId!: asn1.OBJECT_IDENTIFIER;
            let classList: asn1.OPTIONAL<ClassList> =
                Clearance._default_value_for_classList;
            let securityCategories: asn1.OPTIONAL<SecurityCategory[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyId: (_el: asn1.ASN1Element): void => {
                    policyId = __utils._decodeObjectIdentifier(_el);
                },
                classList: (_el: asn1.ASN1Element): void => {
                    classList = _decode_ClassList(_el);
                },
                securityCategories: (_el: asn1.ASN1Element): void => {
                    securityCategories = __utils._decodeSetOf<SecurityCategory>(
                        () => _decode_SecurityCategory
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Clearance,
                _extension_additions_list_spec_for_Clearance,
                _root_component_type_list_2_spec_for_Clearance,
                undefined
            );
            return new Clearance /* SEQUENCE_CONSTRUCTOR_CALL */(
                policyId,
                classList,
                securityCategories
            );
        };
    }
    return _cached_decoder_for_Clearance(el);
}
export function _encode_Clearance(
    value: Clearance,
    elGetter: __utils.ASN1Encoder<Clearance>
) {
    if (!_cached_encoder_for_Clearance) {
        _cached_encoder_for_Clearance = function (
            value: Clearance,
            elGetter: __utils.ASN1Encoder<Clearance>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.policyId,
                            __utils.BER
                        ),
                        /* IF_DEFAULT */ value.classList === undefined ||
                        __utils.deepEq(
                            value.classList,
                            Clearance._default_value_for_classList
                        )
                            ? undefined
                            : _encode_ClassList(value.classList, __utils.BER),
                        /* IF_ABSENT  */ value.securityCategories === undefined
                            ? undefined
                            : __utils._encodeSetOf<SecurityCategory>(
                                  () => _encode_SecurityCategory,
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
    return _cached_encoder_for_Clearance(value, elGetter);
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
            // TODO: Validate tags.
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
            // TODO: Validate values.
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
            // TODO: Validate tags.
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
            // TODO: Validate values.
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
