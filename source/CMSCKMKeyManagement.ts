/*
    BEGIN_MODULE CMSCKMKeyManagement
    OID: itu-t.recommendation.x.cms-profile.module.cKMKeyManagement.version1
    IRI: /ITU-T/Recommendation/X/CMS-Profile/Module/CKMKeyManagement/Version1
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
    ContentEncryptionAlgorithmIdentifier,
    EncryptedKey,
    UserKeyingMaterial,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "./CryptographicMessageSyntax-2010";

import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "./ANSI-X9-42";

import {
    ECDomainParameters,
    _decode_ECDomainParameters,
    _encode_ECDomainParameters,
} from "./ANSI-X9-62";

// TODO: ObjectClassAssignment: EXTENDED-KEY-MGMT-INFO

// TODO: ObjectAssignment: ckmRecipientInfo

export type Version = asn1.INTEGER;
let _cached_decoder_for_Version: __utils.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: __utils.ASN1Encoder<Version> | null = null;
export function _decode_Version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Version) {
        _cached_decoder_for_Version = __utils._decodeInteger;
    }
    return _cached_decoder_for_Version(el);
}
export function _encode_Version(
    value: Version,
    elGetter: __utils.ASN1Encoder<Version>
) {
    if (!_cached_encoder_for_Version) {
        _cached_encoder_for_Version = __utils._encodeInteger;
    }
    return _cached_encoder_for_Version(value, elGetter);
}

export type DomainName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_DomainName: __utils.ASN1Decoder<
    DomainName
> | null = null;
let _cached_encoder_for_DomainName: __utils.ASN1Encoder<
    DomainName
> | null = null;
export function _decode_DomainName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DomainName) {
        _cached_decoder_for_DomainName = __utils._decodePrintableString;
    }
    return _cached_decoder_for_DomainName(el);
}
export function _encode_DomainName(
    value: DomainName,
    elGetter: __utils.ASN1Encoder<DomainName>
) {
    if (!_cached_encoder_for_DomainName) {
        _cached_encoder_for_DomainName = __utils._encodePrintableString;
    }
    return _cached_encoder_for_DomainName(value, elGetter);
}

export type DomainMaintenanceLevel = asn1.INTEGER;
let _cached_decoder_for_DomainMaintenanceLevel: __utils.ASN1Decoder<
    DomainMaintenanceLevel
> | null = null;
let _cached_encoder_for_DomainMaintenanceLevel: __utils.ASN1Encoder<
    DomainMaintenanceLevel
> | null = null;
export function _decode_DomainMaintenanceLevel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DomainMaintenanceLevel) {
        _cached_decoder_for_DomainMaintenanceLevel = __utils._decodeInteger;
    }
    return _cached_decoder_for_DomainMaintenanceLevel(el);
}
export function _encode_DomainMaintenanceLevel(
    value: DomainMaintenanceLevel,
    elGetter: __utils.ASN1Encoder<DomainMaintenanceLevel>
) {
    if (!_cached_encoder_for_DomainMaintenanceLevel) {
        _cached_encoder_for_DomainMaintenanceLevel = __utils._encodeInteger;
    }
    return _cached_encoder_for_DomainMaintenanceLevel(value, elGetter);
}

export type DomainParams =
    | { dhParams: DomainParameters } /* CHOICE_ALT_ROOT */
    | { ecParams: ECDomainParameters } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DomainParams: __utils.ASN1Decoder<
    DomainParams
> | null = null;
let _cached_encoder_for_DomainParams: __utils.ASN1Encoder<
    DomainParams
> | null = null;
export function _decode_DomainParams(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DomainParams) {
        _cached_decoder_for_DomainParams = __utils._decode_inextensible_choice<
            DomainParams
        >({
            "CONTEXT 0": [
                "dhParams",
                __utils._decode_explicit<DomainParameters>(
                    () => _decode_DomainParameters
                ),
            ],
            "CONTEXT 1": [
                "ecParams",
                __utils._decode_explicit<ECDomainParameters>(
                    () => _decode_ECDomainParameters
                ),
            ],
        });
    }
    return _cached_decoder_for_DomainParams(el);
}
export function _encode_DomainParams(
    value: DomainParams,
    elGetter: __utils.ASN1Encoder<DomainParams>
) {
    if (!_cached_encoder_for_DomainParams) {
        _cached_encoder_for_DomainParams = __utils._encode_choice<DomainParams>(
            {
                dhParams: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_DomainParameters,
                    __utils.BER
                ),
                ecParams: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_ECDomainParameters,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_DomainParams(value, elGetter);
}

export class KeyConstructionDomain {
    constructor(
        readonly domainName: DomainName,
        readonly domainMaintenanceLevel: DomainMaintenanceLevel,
        readonly domainParams: asn1.OPTIONAL<DomainParams>
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyConstructionDomain: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "domainName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "domainMaintenanceLevel",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "domainParams",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyConstructionDomain: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyConstructionDomain: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyConstructionDomain: __utils.ASN1Decoder<
    KeyConstructionDomain
> | null = null;
let _cached_encoder_for_KeyConstructionDomain: __utils.ASN1Encoder<
    KeyConstructionDomain
> | null = null;
export function _decode_KeyConstructionDomain(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyConstructionDomain) {
        _cached_decoder_for_KeyConstructionDomain = function (
            el: asn1.ASN1Element
        ): KeyConstructionDomain {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let domainName!: DomainName;
            let domainMaintenanceLevel!: DomainMaintenanceLevel;
            let domainParams: asn1.OPTIONAL<DomainParams>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                domainName: (_el: asn1.ASN1Element): void => {
                    domainName = _decode_DomainName(_el);
                },
                domainMaintenanceLevel: (_el: asn1.ASN1Element): void => {
                    domainMaintenanceLevel = _decode_DomainMaintenanceLevel(
                        _el
                    );
                },
                domainParams: (_el: asn1.ASN1Element): void => {
                    domainParams = _decode_DomainParams(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructionDomain,
                _extension_additions_list_spec_for_KeyConstructionDomain,
                _root_component_type_list_2_spec_for_KeyConstructionDomain,
                undefined
            );
            return new KeyConstructionDomain /* SEQUENCE_CONSTRUCTOR_CALL */(
                domainName,
                domainMaintenanceLevel,
                domainParams
            );
        };
    }
    return _cached_decoder_for_KeyConstructionDomain(el);
}
export function _encode_KeyConstructionDomain(
    value: KeyConstructionDomain,
    elGetter: __utils.ASN1Encoder<KeyConstructionDomain>
) {
    if (!_cached_encoder_for_KeyConstructionDomain) {
        _cached_encoder_for_KeyConstructionDomain = function (
            value: KeyConstructionDomain,
            elGetter: __utils.ASN1Encoder<KeyConstructionDomain>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DomainName(
                            value.domainName,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DomainMaintenanceLevel(
                            value.domainMaintenanceLevel,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.domainParams === undefined
                            ? undefined
                            : _encode_DomainParams(
                                  value.domainParams,
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
    return _cached_encoder_for_KeyConstructionDomain(value, elGetter);
}

export type KeyConstructionLabel = asn1.INTEGER;
let _cached_decoder_for_KeyConstructionLabel: __utils.ASN1Decoder<
    KeyConstructionLabel
> | null = null;
let _cached_encoder_for_KeyConstructionLabel: __utils.ASN1Encoder<
    KeyConstructionLabel
> | null = null;
export function _decode_KeyConstructionLabel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyConstructionLabel) {
        _cached_decoder_for_KeyConstructionLabel = __utils._decodeInteger;
    }
    return _cached_decoder_for_KeyConstructionLabel(el);
}
export function _encode_KeyConstructionLabel(
    value: KeyConstructionLabel,
    elGetter: __utils.ASN1Encoder<KeyConstructionLabel>
) {
    if (!_cached_encoder_for_KeyConstructionLabel) {
        _cached_encoder_for_KeyConstructionLabel = __utils._encodeInteger;
    }
    return _cached_encoder_for_KeyConstructionLabel(value, elGetter);
}

export type KeyConstructionLabels = KeyConstructionLabel[]; // SequenceOfType
let _cached_decoder_for_KeyConstructionLabels: __utils.ASN1Decoder<
    KeyConstructionLabels
> | null = null;
let _cached_encoder_for_KeyConstructionLabels: __utils.ASN1Encoder<
    KeyConstructionLabels
> | null = null;
export function _decode_KeyConstructionLabels(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyConstructionLabels) {
        _cached_decoder_for_KeyConstructionLabels = __utils._decodeSequenceOf<
            KeyConstructionLabel
        >(() => _decode_KeyConstructionLabel);
    }
    return _cached_decoder_for_KeyConstructionLabels(el);
}
export function _encode_KeyConstructionLabels(
    value: KeyConstructionLabels,
    elGetter: __utils.ASN1Encoder<KeyConstructionLabels>
) {
    if (!_cached_encoder_for_KeyConstructionLabels) {
        _cached_encoder_for_KeyConstructionLabels = __utils._encodeSequenceOf<
            KeyConstructionLabel
        >(() => _encode_KeyConstructionLabel, __utils.BER);
    }
    return _cached_encoder_for_KeyConstructionLabels(value, elGetter);
}

export class EncryptedRecipientID {
    constructor(
        readonly algorithm: asn1.OPTIONAL<ContentEncryptionAlgorithmIdentifier>,
        readonly keyID: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly ciphertext: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedRecipientID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ciphertext",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedRecipientID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedRecipientID: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedRecipientID: __utils.ASN1Decoder<
    EncryptedRecipientID
> | null = null;
let _cached_encoder_for_EncryptedRecipientID: __utils.ASN1Encoder<
    EncryptedRecipientID
> | null = null;
export function _decode_EncryptedRecipientID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedRecipientID) {
        _cached_decoder_for_EncryptedRecipientID = function (
            el: asn1.ASN1Element
        ): EncryptedRecipientID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm: asn1.OPTIONAL<ContentEncryptionAlgorithmIdentifier>;
            let keyID: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let ciphertext!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithm: (_el: asn1.ASN1Element): void => {
                    algorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                keyID: (_el: asn1.ASN1Element): void => {
                    keyID = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                ciphertext: (_el: asn1.ASN1Element): void => {
                    ciphertext = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedRecipientID,
                _extension_additions_list_spec_for_EncryptedRecipientID,
                _root_component_type_list_2_spec_for_EncryptedRecipientID,
                undefined
            );
            return new EncryptedRecipientID /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                keyID,
                ciphertext
            );
        };
    }
    return _cached_decoder_for_EncryptedRecipientID(el);
}
export function _encode_EncryptedRecipientID(
    value: EncryptedRecipientID,
    elGetter: __utils.ASN1Encoder<EncryptedRecipientID>
) {
    if (!_cached_encoder_for_EncryptedRecipientID) {
        _cached_encoder_for_EncryptedRecipientID = function (
            value: EncryptedRecipientID,
            elGetter: __utils.ASN1Encoder<EncryptedRecipientID>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.algorithm === undefined
                            ? undefined
                            : _encode_ContentEncryptionAlgorithmIdentifier(
                                  value.algorithm,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.keyID === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.keyID, __utils.BER),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.ciphertext,
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
    return _cached_encoder_for_EncryptedRecipientID(value, elGetter);
}

export type KeyConstructionRecipient =
    | { unencrypted: KeyConstructionLabels } /* CHOICE_ALT_ROOT */
    | { encrypted: EncryptedRecipientID } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_KeyConstructionRecipient: __utils.ASN1Decoder<
    KeyConstructionRecipient
> | null = null;
let _cached_encoder_for_KeyConstructionRecipient: __utils.ASN1Encoder<
    KeyConstructionRecipient
> | null = null;
export function _decode_KeyConstructionRecipient(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyConstructionRecipient) {
        _cached_decoder_for_KeyConstructionRecipient = __utils._decode_inextensible_choice<
            KeyConstructionRecipient
        >({
            "CONTEXT 0": [
                "unencrypted",
                __utils._decode_explicit<KeyConstructionLabels>(
                    () => _decode_KeyConstructionLabels
                ),
            ],
            "CONTEXT 1": [
                "encrypted",
                __utils._decode_explicit<EncryptedRecipientID>(
                    () => _decode_EncryptedRecipientID
                ),
            ],
        });
    }
    return _cached_decoder_for_KeyConstructionRecipient(el);
}
export function _encode_KeyConstructionRecipient(
    value: KeyConstructionRecipient,
    elGetter: __utils.ASN1Encoder<KeyConstructionRecipient>
) {
    if (!_cached_encoder_for_KeyConstructionRecipient) {
        _cached_encoder_for_KeyConstructionRecipient = __utils._encode_choice<
            KeyConstructionRecipient
        >(
            {
                unencrypted: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_KeyConstructionLabels,
                    __utils.BER
                ),
                encrypted: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_EncryptedRecipientID,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_KeyConstructionRecipient(value, elGetter);
}

export type KeyConstructionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_KeyConstructionAlgorithmIdentifier: __utils.ASN1Decoder<
    KeyConstructionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_KeyConstructionAlgorithmIdentifier: __utils.ASN1Encoder<
    KeyConstructionAlgorithmIdentifier
> | null = null;
export function _decode_KeyConstructionAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_decoder_for_KeyConstructionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyConstructionAlgorithmIdentifier(el);
}
export function _encode_KeyConstructionAlgorithmIdentifier(
    value: KeyConstructionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<KeyConstructionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyConstructionAlgorithmIdentifier) {
        _cached_encoder_for_KeyConstructionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyConstructionAlgorithmIdentifier(
        value,
        elGetter
    );
}

export class KeyConstructRecipientInfo {
    constructor(
        readonly version: Version,
        readonly did: asn1.OPTIONAL<KeyConstructionDomain>,
        readonly ckmid: KeyConstructionRecipient,
        readonly ukm: asn1.OPTIONAL<UserKeyingMaterial>,
        readonly keyConstructionAlgorithm: KeyConstructionAlgorithmIdentifier,
        readonly encryptedRandom: EncryptedKey
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyConstructRecipientInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "did",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ckmid",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ukm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyConstructionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedRandom",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyConstructRecipientInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyConstructRecipientInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyConstructRecipientInfo: __utils.ASN1Decoder<
    KeyConstructRecipientInfo
> | null = null;
let _cached_encoder_for_KeyConstructRecipientInfo: __utils.ASN1Encoder<
    KeyConstructRecipientInfo
> | null = null;
export function _decode_KeyConstructRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyConstructRecipientInfo) {
        _cached_decoder_for_KeyConstructRecipientInfo = function (
            el: asn1.ASN1Element
        ): KeyConstructRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let did: asn1.OPTIONAL<KeyConstructionDomain>;
            let ckmid!: KeyConstructionRecipient;
            let ukm: asn1.OPTIONAL<UserKeyingMaterial>;
            let keyConstructionAlgorithm!: KeyConstructionAlgorithmIdentifier;
            let encryptedRandom!: EncryptedKey;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                did: (_el: asn1.ASN1Element): void => {
                    did = _decode_KeyConstructionDomain(_el);
                },
                ckmid: (_el: asn1.ASN1Element): void => {
                    ckmid = __utils._decode_explicit<KeyConstructionRecipient>(
                        () => _decode_KeyConstructionRecipient
                    )(_el);
                },
                ukm: (_el: asn1.ASN1Element): void => {
                    ukm = _decode_UserKeyingMaterial(_el);
                },
                keyConstructionAlgorithm: (_el: asn1.ASN1Element): void => {
                    keyConstructionAlgorithm = _decode_KeyConstructionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedRandom: (_el: asn1.ASN1Element): void => {
                    encryptedRandom = _decode_EncryptedKey(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructRecipientInfo,
                _extension_additions_list_spec_for_KeyConstructRecipientInfo,
                _root_component_type_list_2_spec_for_KeyConstructRecipientInfo,
                undefined
            );
            return new KeyConstructRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                did,
                ckmid,
                ukm,
                keyConstructionAlgorithm,
                encryptedRandom
            );
        };
    }
    return _cached_decoder_for_KeyConstructRecipientInfo(el);
}
export function _encode_KeyConstructRecipientInfo(
    value: KeyConstructRecipientInfo,
    elGetter: __utils.ASN1Encoder<KeyConstructRecipientInfo>
) {
    if (!_cached_encoder_for_KeyConstructRecipientInfo) {
        _cached_encoder_for_KeyConstructRecipientInfo = function (
            value: KeyConstructRecipientInfo,
            elGetter: __utils.ASN1Encoder<KeyConstructRecipientInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.did === undefined
                            ? undefined
                            : _encode_KeyConstructionDomain(
                                  value.did,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => _encode_KeyConstructionRecipient,
                            __utils.BER
                        )(value.ckmid, __utils.BER),
                        /* IF_ABSENT  */ value.ukm === undefined
                            ? undefined
                            : _encode_UserKeyingMaterial(
                                  value.ukm,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_KeyConstructionAlgorithmIdentifier(
                            value.keyConstructionAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedRandom,
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
    return _cached_encoder_for_KeyConstructRecipientInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: KeyConstructionAlgorithms

// TODO: ObjectAssignment: symmetricConstruction

export type CombinerAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_CombinerAlgorithmIdentifier: __utils.ASN1Decoder<
    CombinerAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_CombinerAlgorithmIdentifier: __utils.ASN1Encoder<
    CombinerAlgorithmIdentifier
> | null = null;
export function _decode_CombinerAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CombinerAlgorithmIdentifier) {
        _cached_decoder_for_CombinerAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_CombinerAlgorithmIdentifier(el);
}
export function _encode_CombinerAlgorithmIdentifier(
    value: CombinerAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<CombinerAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_CombinerAlgorithmIdentifier) {
        _cached_encoder_for_CombinerAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_CombinerAlgorithmIdentifier(value, elGetter);
}

export type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_KeyEncryptionAlgorithmIdentifier: __utils.ASN1Decoder<
    KeyEncryptionAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_KeyEncryptionAlgorithmIdentifier: __utils.ASN1Encoder<
    KeyEncryptionAlgorithmIdentifier
> | null = null;
export function _decode_KeyEncryptionAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_decoder_for_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyEncryptionAlgorithmIdentifier(el);
}
export function _encode_KeyEncryptionAlgorithmIdentifier(
    value: KeyEncryptionAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<KeyEncryptionAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_KeyEncryptionAlgorithmIdentifier) {
        _cached_encoder_for_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyEncryptionAlgorithmIdentifier(
        value,
        elGetter
    );
}

export class ConstructionAlgorithms {
    constructor(
        readonly combiner: CombinerAlgorithmIdentifier,
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_ConstructionAlgorithms: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "combiner",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ConstructionAlgorithms: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ConstructionAlgorithms: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ConstructionAlgorithms: __utils.ASN1Decoder<
    ConstructionAlgorithms
> | null = null;
let _cached_encoder_for_ConstructionAlgorithms: __utils.ASN1Encoder<
    ConstructionAlgorithms
> | null = null;
export function _decode_ConstructionAlgorithms(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ConstructionAlgorithms) {
        _cached_decoder_for_ConstructionAlgorithms = function (
            el: asn1.ASN1Element
        ): ConstructionAlgorithms {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ConstructionAlgorithms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "combiner";
            sequence[1].name = "keyEncryptionAlgorithm";
            let combiner!: CombinerAlgorithmIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            combiner = _decode_CombinerAlgorithmIdentifier(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[1]
            );
                        return new ConstructionAlgorithms(combiner, keyEncryptionAlgorithm);
        };
    }
    return _cached_decoder_for_ConstructionAlgorithms(el);
}
export function _encode_ConstructionAlgorithms(
    value: ConstructionAlgorithms,
    elGetter: __utils.ASN1Encoder<ConstructionAlgorithms>
) {
    if (!_cached_encoder_for_ConstructionAlgorithms) {
        _cached_encoder_for_ConstructionAlgorithms = function (
            value: ConstructionAlgorithms,
            elGetter: __utils.ASN1Encoder<ConstructionAlgorithms>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CombinerAlgorithmIdentifier(
                            value.combiner,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
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
    return _cached_encoder_for_ConstructionAlgorithms(value, elGetter);
}

// TODO: ObjectSetAssignment: CombinerAlgorithms

// TODO: ObjectAssignment: keyTransportConstruction

// TODO: ObjectSetAssignment: KeyEncryptionAlgorithms

// TODO: ObjectAssignment: keyAgreeMultipleEncryptionConstruction

// TODO: ObjectAssignment: keyAgreeHashConstruction

/* END_MODULE CMSCKMKeyManagement */
