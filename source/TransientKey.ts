/*
    BEGIN_MODULE TransientKey
    OID: iso.identified-organization.tc68.country.x9.x9Standards.x9-95.module.tk.version.v2010-2016
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    Digest,
    DigestAlgorithmIdentifier,
    SignatureAlgorithmIdentifier,
    _decode_Digest,
    _encode_Digest,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "./CryptographicMessageSyntax-2010";

import {
    OID,
    TSTInfo,
    _decode_OID,
    _encode_OID,
    _decode_TSTInfo,
    _encode_TSTInfo,
} from "./TrustedTimeStamp";

import {
    _decode_Certificate,
    _encode_Certificate,
} from "x500-ts/dist/node/AuthenticationFramework";

export const transientKeySignedTST: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-95 */ 95,
    /* module */ 0,
    /* tk */ 2,
    /* contentType */ 1,
]);

export const tsp_req_tk: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-95 */ 95,
    /* module */ 0,
    /* tk */ 2,
    /* method */ 2,
]);

export type TKSVersion = asn1.INTEGER;
export const TKSVersion_version1: TKSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TKSVersion: __utils.ASN1Decoder<
    TKSVersion
> | null = null;
let _cached_encoder_for_TKSVersion: __utils.ASN1Encoder<
    TKSVersion
> | null = null;
export function _decode_TKSVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TKSVersion) {
        _cached_decoder_for_TKSVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_TKSVersion(el);
}
export function _encode_TKSVersion(
    value: TKSVersion,
    elGetter: __utils.ASN1Encoder<TKSVersion>
) {
    if (!_cached_encoder_for_TKSVersion) {
        _cached_encoder_for_TKSVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_TKSVersion(value, elGetter);
}

export type IIVersion = asn1.INTEGER;
export const IIVersion_version1: IIVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_IIVersion: __utils.ASN1Decoder<IIVersion> | null = null;
let _cached_encoder_for_IIVersion: __utils.ASN1Encoder<IIVersion> | null = null;
export function _decode_IIVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IIVersion) {
        _cached_decoder_for_IIVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_IIVersion(el);
}
export function _encode_IIVersion(
    value: IIVersion,
    elGetter: __utils.ASN1Encoder<IIVersion>
) {
    if (!_cached_encoder_for_IIVersion) {
        _cached_encoder_for_IIVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_IIVersion(value, elGetter);
}

export type Uri = asn1.IA5String; // IA5String
let _cached_decoder_for_Uri: __utils.ASN1Decoder<Uri> | null = null;
let _cached_encoder_for_Uri: __utils.ASN1Encoder<Uri> | null = null;
export function _decode_Uri(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Uri) {
        _cached_decoder_for_Uri = __utils._decodeIA5String;
    }
    return _cached_decoder_for_Uri(el);
}
export function _encode_Uri(value: Uri, elGetter: __utils.ASN1Encoder<Uri>) {
    if (!_cached_encoder_for_Uri) {
        _cached_encoder_for_Uri = __utils._encodeIA5String;
    }
    return _cached_encoder_for_Uri(value, elGetter);
}

export class ChainSpec {
    constructor(
        readonly serverId: Uri,
        readonly chainStart: asn1.GeneralizedTime,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly publicVerificationServer: asn1.OPTIONAL<Uri>
    ) {}
}
export const _root_component_type_list_1_spec_for_ChainSpec: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serverId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "chainStart",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
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
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicVerificationServer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 22),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ChainSpec: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ChainSpec: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ChainSpec: __utils.ASN1Decoder<ChainSpec> | null = null;
let _cached_encoder_for_ChainSpec: __utils.ASN1Encoder<ChainSpec> | null = null;
export function _decode_ChainSpec(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChainSpec) {
        _cached_decoder_for_ChainSpec = function (
            el: asn1.ASN1Element
        ): ChainSpec {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serverId!: Uri;
            let chainStart!: asn1.GeneralizedTime;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let publicVerificationServer: asn1.OPTIONAL<Uri>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serverId: (_el: asn1.ASN1Element): void => {
                    serverId = _decode_Uri(_el);
                },
                chainStart: (_el: asn1.ASN1Element): void => {
                    chainStart = __utils._decodeGeneralizedTime(_el);
                },
                digestAlgorithm: (_el: asn1.ASN1Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                signatureAlgorithm: (_el: asn1.ASN1Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                publicVerificationServer: (_el: asn1.ASN1Element): void => {
                    publicVerificationServer = _decode_Uri(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChainSpec,
                _extension_additions_list_spec_for_ChainSpec,
                _root_component_type_list_2_spec_for_ChainSpec,
                undefined
            );
            return new ChainSpec /* SEQUENCE_CONSTRUCTOR_CALL */(
                serverId,
                chainStart,
                digestAlgorithm,
                signatureAlgorithm,
                publicVerificationServer
            );
        };
    }
    return _cached_decoder_for_ChainSpec(el);
}
export function _encode_ChainSpec(
    value: ChainSpec,
    elGetter: __utils.ASN1Encoder<ChainSpec>
) {
    if (!_cached_encoder_for_ChainSpec) {
        _cached_encoder_for_ChainSpec = function (
            value: ChainSpec,
            elGetter: __utils.ASN1Encoder<ChainSpec>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Uri(
                            value.serverId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.chainStart,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.publicVerificationServer ===
                        undefined
                            ? undefined
                            : _encode_Uri(
                                  value.publicVerificationServer,
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
    return _cached_encoder_for_ChainSpec(value, elGetter);
}

export type PublicKey = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_PublicKey: __utils.ASN1Decoder<PublicKey> | null = null;
let _cached_encoder_for_PublicKey: __utils.ASN1Encoder<PublicKey> | null = null;
export function _decode_PublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PublicKey) {
        _cached_decoder_for_PublicKey = __utils._decodeOctetString;
    }
    return _cached_decoder_for_PublicKey(el);
}
export function _encode_PublicKey(
    value: PublicKey,
    elGetter: __utils.ASN1Encoder<PublicKey>
) {
    if (!_cached_encoder_for_PublicKey) {
        _cached_encoder_for_PublicKey = __utils._encodeOctetString;
    }
    return _cached_encoder_for_PublicKey(value, elGetter);
}

export class IntervalSpec {
    constructor(
        readonly chainSpec: ChainSpec,
        readonly intervalStart: asn1.GeneralizedTime,
        readonly intervalStop: asn1.GeneralizedTime,
        readonly publicKey: PublicKey,
        readonly previousPublicKey: asn1.OPTIONAL<PublicKey>,
        readonly previousMetaDigest: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_IntervalSpec: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "chainSpec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "intervalStart",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "intervalStop",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "previousPublicKey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "previousMetaDigest",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IntervalSpec: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IntervalSpec: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IntervalSpec: __utils.ASN1Decoder<
    IntervalSpec
> | null = null;
let _cached_encoder_for_IntervalSpec: __utils.ASN1Encoder<
    IntervalSpec
> | null = null;
export function _decode_IntervalSpec(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IntervalSpec) {
        _cached_decoder_for_IntervalSpec = function (
            el: asn1.ASN1Element
        ): IntervalSpec {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let chainSpec!: ChainSpec;
            let intervalStart!: asn1.GeneralizedTime;
            let intervalStop!: asn1.GeneralizedTime;
            let publicKey!: PublicKey;
            let previousPublicKey: asn1.OPTIONAL<PublicKey>;
            let previousMetaDigest: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                chainSpec: (_el: asn1.ASN1Element): void => {
                    chainSpec = _decode_ChainSpec(_el);
                },
                intervalStart: (_el: asn1.ASN1Element): void => {
                    intervalStart = __utils._decodeGeneralizedTime(_el);
                },
                intervalStop: (_el: asn1.ASN1Element): void => {
                    intervalStop = __utils._decodeGeneralizedTime(_el);
                },
                publicKey: (_el: asn1.ASN1Element): void => {
                    publicKey = _decode_PublicKey(_el);
                },
                previousPublicKey: (_el: asn1.ASN1Element): void => {
                    previousPublicKey = __utils._decode_implicit<PublicKey>(
                        () => _decode_PublicKey
                    )(_el);
                },
                previousMetaDigest: (_el: asn1.ASN1Element): void => {
                    previousMetaDigest = __utils._decode_implicit<
                        asn1.OCTET_STRING
                    >(() => __utils._decodeOctetString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IntervalSpec,
                _extension_additions_list_spec_for_IntervalSpec,
                _root_component_type_list_2_spec_for_IntervalSpec,
                undefined
            );
            return new IntervalSpec /* SEQUENCE_CONSTRUCTOR_CALL */(
                chainSpec,
                intervalStart,
                intervalStop,
                publicKey,
                previousPublicKey,
                previousMetaDigest
            );
        };
    }
    return _cached_decoder_for_IntervalSpec(el);
}
export function _encode_IntervalSpec(
    value: IntervalSpec,
    elGetter: __utils.ASN1Encoder<IntervalSpec>
) {
    if (!_cached_encoder_for_IntervalSpec) {
        _cached_encoder_for_IntervalSpec = function (
            value: IntervalSpec,
            elGetter: __utils.ASN1Encoder<IntervalSpec>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainSpec(
                            value.chainSpec,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.intervalStart,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.intervalStop,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PublicKey(
                            value.publicKey,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.previousPublicKey === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_PublicKey,
                                  __utils.BER
                              )(value.previousPublicKey, __utils.BER),
                        /* IF_ABSENT  */ value.previousMetaDigest === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.previousMetaDigest, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IntervalSpec(value, elGetter);
}

export type Signature = asn1.BIT_STRING;
let _cached_decoder_for_Signature: __utils.ASN1Decoder<Signature> | null = null;
let _cached_encoder_for_Signature: __utils.ASN1Encoder<Signature> | null = null;
export function _decode_Signature(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signature) {
        _cached_decoder_for_Signature = __utils._decodeBitString;
    }
    return _cached_decoder_for_Signature(el);
}
export function _encode_Signature(
    value: Signature,
    elGetter: __utils.ASN1Encoder<Signature>
) {
    if (!_cached_encoder_for_Signature) {
        _cached_encoder_for_Signature = __utils._encodeBitString;
    }
    return _cached_encoder_for_Signature(value, elGetter);
}

export type EncodedCertificate = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_EncodedCertificate: __utils.ASN1Decoder<
    EncodedCertificate
> | null = null;
let _cached_encoder_for_EncodedCertificate: __utils.ASN1Encoder<
    EncodedCertificate
> | null = null;
export function _decode_EncodedCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncodedCertificate) {
        _cached_decoder_for_EncodedCertificate = __utils._decodeAny;
    }
    return _cached_decoder_for_EncodedCertificate(el);
}
export function _encode_EncodedCertificate(
    value: EncodedCertificate,
    elGetter: __utils.ASN1Encoder<EncodedCertificate>
) {
    if (!_cached_encoder_for_EncodedCertificate) {
        _cached_encoder_for_EncodedCertificate = __utils._encodeAny;
    }
    return _cached_encoder_for_EncodedCertificate(value, elGetter);
}

export class IdentitySignature {
    constructor(
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        readonly signature: Signature,
        readonly certificate: asn1.OPTIONAL<EncodedCertificate>
    ) {}
}
export const _root_component_type_list_1_spec_for_IdentitySignature: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificate",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IdentitySignature: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IdentitySignature: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IdentitySignature: __utils.ASN1Decoder<
    IdentitySignature
> | null = null;
let _cached_encoder_for_IdentitySignature: __utils.ASN1Encoder<
    IdentitySignature
> | null = null;
export function _decode_IdentitySignature(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IdentitySignature) {
        _cached_decoder_for_IdentitySignature = function (
            el: asn1.ASN1Element
        ): IdentitySignature {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: Signature;
            let certificate: asn1.OPTIONAL<EncodedCertificate>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                signatureAlgorithm: (_el: asn1.ASN1Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                signature: (_el: asn1.ASN1Element): void => {
                    signature = _decode_Signature(_el);
                },
                certificate: (_el: asn1.ASN1Element): void => {
                    certificate = _decode_EncodedCertificate(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdentitySignature,
                _extension_additions_list_spec_for_IdentitySignature,
                _root_component_type_list_2_spec_for_IdentitySignature,
                undefined
            );
            return new IdentitySignature /* SEQUENCE_CONSTRUCTOR_CALL */(
                signatureAlgorithm,
                signature,
                certificate
            );
        };
    }
    return _cached_decoder_for_IdentitySignature(el);
}
export function _encode_IdentitySignature(
    value: IdentitySignature,
    elGetter: __utils.ASN1Encoder<IdentitySignature>
) {
    if (!_cached_encoder_for_IdentitySignature) {
        _cached_encoder_for_IdentitySignature = function (
            value: IdentitySignature,
            elGetter: __utils.ASN1Encoder<IdentitySignature>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Signature(
                            value.signature,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.certificate === undefined
                            ? undefined
                            : _encode_EncodedCertificate(
                                  value.certificate,
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
    return _cached_encoder_for_IdentitySignature(value, elGetter);
}

export class SignedIntervalSpec {
    constructor(
        readonly intervalSpec: IntervalSpec,
        readonly signature: Signature,
        readonly identitySignature: IdentitySignature
    ) {}
}
export const _root_component_type_list_1_spec_for_SignedIntervalSpec: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "intervalSpec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "identitySignature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignedIntervalSpec: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignedIntervalSpec: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignedIntervalSpec: __utils.ASN1Decoder<
    SignedIntervalSpec
> | null = null;
let _cached_encoder_for_SignedIntervalSpec: __utils.ASN1Encoder<
    SignedIntervalSpec
> | null = null;
export function _decode_SignedIntervalSpec(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedIntervalSpec) {
        _cached_decoder_for_SignedIntervalSpec = function (
            el: asn1.ASN1Element
        ): SignedIntervalSpec {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "SignedIntervalSpec contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "intervalSpec";
            sequence[1].name = "signature";
            sequence[2].name = "identitySignature";
            let intervalSpec!: IntervalSpec;
            let signature!: Signature;
            let identitySignature!: IdentitySignature;
            intervalSpec = _decode_IntervalSpec(sequence[0]);
            signature = _decode_Signature(sequence[1]);
            identitySignature = _decode_IdentitySignature(sequence[2]);
                        return new SignedIntervalSpec(
                intervalSpec,
                signature,
                identitySignature
            );
        };
    }
    return _cached_decoder_for_SignedIntervalSpec(el);
}
export function _encode_SignedIntervalSpec(
    value: SignedIntervalSpec,
    elGetter: __utils.ASN1Encoder<SignedIntervalSpec>
) {
    if (!_cached_encoder_for_SignedIntervalSpec) {
        _cached_encoder_for_SignedIntervalSpec = function (
            value: SignedIntervalSpec,
            elGetter: __utils.ASN1Encoder<SignedIntervalSpec>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IntervalSpec(
                            value.intervalSpec,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Signature(
                            value.signature,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_IdentitySignature(
                            value.identitySignature,
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
    return _cached_encoder_for_SignedIntervalSpec(value, elGetter);
}

export type ArchiveTreeList = ArchiveTree[]; // SequenceOfType
let _cached_decoder_for_ArchiveTreeList: __utils.ASN1Decoder<
    ArchiveTreeList
> | null = null;
let _cached_encoder_for_ArchiveTreeList: __utils.ASN1Encoder<
    ArchiveTreeList
> | null = null;
export function _decode_ArchiveTreeList(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ArchiveTreeList) {
        _cached_decoder_for_ArchiveTreeList = __utils._decodeSequenceOf<
            ArchiveTree
        >(() => _decode_ArchiveTree);
    }
    return _cached_decoder_for_ArchiveTreeList(el);
}
export function _encode_ArchiveTreeList(
    value: ArchiveTreeList,
    elGetter: __utils.ASN1Encoder<ArchiveTreeList>
) {
    if (!_cached_encoder_for_ArchiveTreeList) {
        _cached_encoder_for_ArchiveTreeList = __utils._encodeSequenceOf<
            ArchiveTree
        >(() => _encode_ArchiveTree, __utils.BER);
    }
    return _cached_encoder_for_ArchiveTreeList(value, elGetter);
}

export class ArchiveTree {
    constructor(
        readonly archive: Uri,
        readonly children: asn1.OPTIONAL<ArchiveTreeList>
    ) {}
}
export const _root_component_type_list_1_spec_for_ArchiveTree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "archive",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 22),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "children",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ArchiveTree: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ArchiveTree: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ArchiveTree: __utils.ASN1Decoder<
    ArchiveTree
> | null = null;
let _cached_encoder_for_ArchiveTree: __utils.ASN1Encoder<
    ArchiveTree
> | null = null;
export function _decode_ArchiveTree(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ArchiveTree) {
        _cached_decoder_for_ArchiveTree = function (
            el: asn1.ASN1Element
        ): ArchiveTree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let archive!: Uri;
            let children: asn1.OPTIONAL<ArchiveTreeList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                archive: (_el: asn1.ASN1Element): void => {
                    archive = _decode_Uri(_el);
                },
                children: (_el: asn1.ASN1Element): void => {
                    children = _decode_ArchiveTreeList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ArchiveTree,
                _extension_additions_list_spec_for_ArchiveTree,
                _root_component_type_list_2_spec_for_ArchiveTree,
                undefined
            );
            return new ArchiveTree /* SEQUENCE_CONSTRUCTOR_CALL */(
                archive,
                children
            );
        };
    }
    return _cached_decoder_for_ArchiveTree(el);
}
export function _encode_ArchiveTree(
    value: ArchiveTree,
    elGetter: __utils.ASN1Encoder<ArchiveTree>
) {
    if (!_cached_encoder_for_ArchiveTree) {
        _cached_encoder_for_ArchiveTree = function (
            value: ArchiveTree,
            elGetter: __utils.ASN1Encoder<ArchiveTree>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Uri(
                            value.archive,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.children === undefined
                            ? undefined
                            : _encode_ArchiveTreeList(
                                  value.children,
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
    return _cached_encoder_for_ArchiveTree(value, elGetter);
}

export type UriList = Uri[]; // SequenceOfType
let _cached_decoder_for_UriList: __utils.ASN1Decoder<UriList> | null = null;
let _cached_encoder_for_UriList: __utils.ASN1Encoder<UriList> | null = null;
export function _decode_UriList(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UriList) {
        _cached_decoder_for_UriList = __utils._decodeSequenceOf<Uri>(
            () => _decode_Uri
        );
    }
    return _cached_decoder_for_UriList(el);
}
export function _encode_UriList(
    value: UriList,
    elGetter: __utils.ASN1Encoder<UriList>
) {
    if (!_cached_encoder_for_UriList) {
        _cached_encoder_for_UriList = __utils._encodeSequenceOf<Uri>(
            () => _encode_Uri,
            __utils.BER
        );
    }
    return _cached_encoder_for_UriList(value, elGetter);
}

export class IntervalInfo {
    constructor(
        readonly version: IIVersion,
        readonly signedIntervalSpec: SignedIntervalSpec,
        readonly archiveTree: ArchiveTree,
        readonly certifierList: asn1.OPTIONAL<UriList>
    ) {}
}
export const _root_component_type_list_1_spec_for_IntervalInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedIntervalSpec",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "archiveTree",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certifierList",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IntervalInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IntervalInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IntervalInfo: __utils.ASN1Decoder<
    IntervalInfo
> | null = null;
let _cached_encoder_for_IntervalInfo: __utils.ASN1Encoder<
    IntervalInfo
> | null = null;
export function _decode_IntervalInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IntervalInfo) {
        _cached_decoder_for_IntervalInfo = function (
            el: asn1.ASN1Element
        ): IntervalInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: IIVersion;
            let signedIntervalSpec!: SignedIntervalSpec;
            let archiveTree!: ArchiveTree;
            let certifierList: asn1.OPTIONAL<UriList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_IIVersion(_el);
                },
                signedIntervalSpec: (_el: asn1.ASN1Element): void => {
                    signedIntervalSpec = _decode_SignedIntervalSpec(_el);
                },
                archiveTree: (_el: asn1.ASN1Element): void => {
                    archiveTree = _decode_ArchiveTree(_el);
                },
                certifierList: (_el: asn1.ASN1Element): void => {
                    certifierList = _decode_UriList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IntervalInfo,
                _extension_additions_list_spec_for_IntervalInfo,
                _root_component_type_list_2_spec_for_IntervalInfo,
                undefined
            );
            return new IntervalInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                signedIntervalSpec,
                archiveTree,
                certifierList
            );
        };
    }
    return _cached_decoder_for_IntervalInfo(el);
}
export function _encode_IntervalInfo(
    value: IntervalInfo,
    elGetter: __utils.ASN1Encoder<IntervalInfo>
) {
    if (!_cached_encoder_for_IntervalInfo) {
        _cached_encoder_for_IntervalInfo = function (
            value: IntervalInfo,
            elGetter: __utils.ASN1Encoder<IntervalInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IIVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignedIntervalSpec(
                            value.signedIntervalSpec,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ArchiveTree(
                            value.archiveTree,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.certifierList === undefined
                            ? undefined
                            : _encode_UriList(value.certifierList, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IntervalInfo(value, elGetter);
}

export class TSTAndInterval {
    constructor(
        readonly tstInfo: TSTInfo,
        readonly intervalInfo: IntervalInfo
    ) {}
}
export const _root_component_type_list_1_spec_for_TSTAndInterval: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "tstInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "intervalInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TSTAndInterval: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TSTAndInterval: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TSTAndInterval: __utils.ASN1Decoder<
    TSTAndInterval
> | null = null;
let _cached_encoder_for_TSTAndInterval: __utils.ASN1Encoder<
    TSTAndInterval
> | null = null;
export function _decode_TSTAndInterval(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSTAndInterval) {
        _cached_decoder_for_TSTAndInterval = function (
            el: asn1.ASN1Element
        ): TSTAndInterval {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TSTAndInterval contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "tstInfo";
            sequence[1].name = "intervalInfo";
            let tstInfo!: TSTInfo;
            let intervalInfo!: IntervalInfo;
            tstInfo = _decode_TSTInfo(sequence[0]);
            intervalInfo = _decode_IntervalInfo(sequence[1]);
                        return new TSTAndInterval(tstInfo, intervalInfo);
        };
    }
    return _cached_decoder_for_TSTAndInterval(el);
}
export function _encode_TSTAndInterval(
    value: TSTAndInterval,
    elGetter: __utils.ASN1Encoder<TSTAndInterval>
) {
    if (!_cached_encoder_for_TSTAndInterval) {
        _cached_encoder_for_TSTAndInterval = function (
            value: TSTAndInterval,
            elGetter: __utils.ASN1Encoder<TSTAndInterval>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TSTInfo(
                            value.tstInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_IntervalInfo(
                            value.intervalInfo,
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
    return _cached_encoder_for_TSTAndInterval(value, elGetter);
}

export class TransientKeySignedTST {
    constructor(
        readonly version: TKSVersion,
        readonly tstAndInterval: TSTAndInterval,
        readonly digest: Digest,
        readonly previousDigest: asn1.OPTIONAL<Digest>,
        readonly signature: Signature
    ) {}
}
export const _root_component_type_list_1_spec_for_TransientKeySignedTST: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tstAndInterval",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "previousDigest",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signature",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TransientKeySignedTST: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TransientKeySignedTST: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TransientKeySignedTST: __utils.ASN1Decoder<
    TransientKeySignedTST
> | null = null;
let _cached_encoder_for_TransientKeySignedTST: __utils.ASN1Encoder<
    TransientKeySignedTST
> | null = null;
export function _decode_TransientKeySignedTST(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TransientKeySignedTST) {
        _cached_decoder_for_TransientKeySignedTST = function (
            el: asn1.ASN1Element
        ): TransientKeySignedTST {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TKSVersion;
            let tstAndInterval!: TSTAndInterval;
            let digest!: Digest;
            let previousDigest: asn1.OPTIONAL<Digest>;
            let signature!: Signature;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_TKSVersion(_el);
                },
                tstAndInterval: (_el: asn1.ASN1Element): void => {
                    tstAndInterval = _decode_TSTAndInterval(_el);
                },
                digest: (_el: asn1.ASN1Element): void => {
                    digest = _decode_Digest(_el);
                },
                previousDigest: (_el: asn1.ASN1Element): void => {
                    previousDigest = __utils._decode_implicit<Digest>(
                        () => _decode_Digest
                    )(_el);
                },
                signature: (_el: asn1.ASN1Element): void => {
                    signature = _decode_Signature(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TransientKeySignedTST,
                _extension_additions_list_spec_for_TransientKeySignedTST,
                _root_component_type_list_2_spec_for_TransientKeySignedTST,
                undefined
            );
            return new TransientKeySignedTST /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                tstAndInterval,
                digest,
                previousDigest,
                signature
            );
        };
    }
    return _cached_decoder_for_TransientKeySignedTST(el);
}
export function _encode_TransientKeySignedTST(
    value: TransientKeySignedTST,
    elGetter: __utils.ASN1Encoder<TransientKeySignedTST>
) {
    if (!_cached_encoder_for_TransientKeySignedTST) {
        _cached_encoder_for_TransientKeySignedTST = function (
            value: TransientKeySignedTST,
            elGetter: __utils.ASN1Encoder<TransientKeySignedTST>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TKSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TSTAndInterval(
                            value.tstAndInterval,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Digest(
                            value.digest,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.previousDigest === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Digest,
                                  __utils.BER
                              )(value.previousDigest, __utils.BER),
                        /* REQUIRED   */ _encode_Signature(
                            value.signature,
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
    return _cached_encoder_for_TransientKeySignedTST(value, elGetter);
}

/* END_MODULE TransientKey */
