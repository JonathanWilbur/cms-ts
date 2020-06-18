/*
    BEGIN_MODULE TrustedTimeStamp
    OID: iso.identified-organization.tc68.country.x9.x9Standards.x9-95.module.tts.v2010-2016
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/CertificateExtensions";

import {
    DigestAlgorithmIdentifier,
    _decode_AuthenticatedData,
    _encode_AuthenticatedData,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
    _decode_SignedData,
    _encode_SignedData,
} from "./CryptographicMessageSyntax-2010";

import {
    _decode_TransientKeySignedTST,
    _encode_TransientKeySignedTST,
} from "./TransientKey";

export type Version = asn1.INTEGER;
export const Version_v1: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
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

export class MessageImprint {
    constructor(
        readonly hashAlgorithm: DigestAlgorithmIdentifier,
        readonly hashedMessage: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_MessageImprint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashedMessage",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MessageImprint: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MessageImprint: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MessageImprint: __utils.ASN1Decoder<
    MessageImprint
> | null = null;
let _cached_encoder_for_MessageImprint: __utils.ASN1Encoder<
    MessageImprint
> | null = null;
export function _decode_MessageImprint(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MessageImprint) {
        _cached_decoder_for_MessageImprint = function (
            el: asn1.ASN1Element
        ): MessageImprint {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "MessageImprint contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "hashAlgorithm";
            sequence[1].name = "hashedMessage";
            let hashAlgorithm!: DigestAlgorithmIdentifier;
            let hashedMessage!: asn1.OCTET_STRING;
            hashAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[0]);
            hashedMessage = __utils._decodeOctetString(sequence[1]);
            // TODO: Validate values.
            return new MessageImprint(hashAlgorithm, hashedMessage);
        };
    }
    return _cached_decoder_for_MessageImprint(el);
}
export function _encode_MessageImprint(
    value: MessageImprint,
    elGetter: __utils.ASN1Encoder<MessageImprint>
) {
    if (!_cached_encoder_for_MessageImprint) {
        _cached_encoder_for_MessageImprint = function (
            value: MessageImprint,
            elGetter: __utils.ASN1Encoder<MessageImprint>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.hashAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.hashedMessage,
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
    return _cached_encoder_for_MessageImprint(value, elGetter);
}

export type TSAPolicyId = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_TSAPolicyId: __utils.ASN1Decoder<
    TSAPolicyId
> | null = null;
let _cached_encoder_for_TSAPolicyId: __utils.ASN1Encoder<
    TSAPolicyId
> | null = null;
export function _decode_TSAPolicyId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSAPolicyId) {
        _cached_decoder_for_TSAPolicyId = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_TSAPolicyId(el);
}
export function _encode_TSAPolicyId(
    value: TSAPolicyId,
    elGetter: __utils.ASN1Encoder<TSAPolicyId>
) {
    if (!_cached_encoder_for_TSAPolicyId) {
        _cached_encoder_for_TSAPolicyId = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_TSAPolicyId(value, elGetter);
}

export type Nonce = asn1.INTEGER;
let _cached_decoder_for_Nonce: __utils.ASN1Decoder<Nonce> | null = null;
let _cached_encoder_for_Nonce: __utils.ASN1Encoder<Nonce> | null = null;
export function _decode_Nonce(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Nonce) {
        _cached_decoder_for_Nonce = __utils._decodeInteger;
    }
    return _cached_decoder_for_Nonce(el);
}
export function _encode_Nonce(
    value: Nonce,
    elGetter: __utils.ASN1Encoder<Nonce>
) {
    if (!_cached_encoder_for_Nonce) {
        _cached_encoder_for_Nonce = __utils._encodeInteger;
    }
    return _cached_encoder_for_Nonce(value, elGetter);
}

export class Extension {
    constructor(
        readonly extnId: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
        readonly critical: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly extnValue: asn1.OCTET_STRING
    ) {}
    public static get _default_value_for_critical() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_Extension: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "extnId",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "critical",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extnValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Extension: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Extension: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Extension: __utils.ASN1Decoder<Extension> | null = null;
let _cached_encoder_for_Extension: __utils.ASN1Encoder<Extension> | null = null;
export function _decode_Extension(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Extension) {
        _cached_decoder_for_Extension = function (
            el: asn1.ASN1Element
        ): Extension {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let extnId!: asn1.ASN1Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */;
            let critical: asn1.OPTIONAL<asn1.BOOLEAN> =
                Extension._default_value_for_critical;
            let extnValue!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                extnId: (_el: asn1.ASN1Element): void => {
                    extnId = __utils._decodeAny(
                        /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ _el
                    );
                },
                critical: (_el: asn1.ASN1Element): void => {
                    critical = __utils._decodeBoolean(_el);
                },
                extnValue: (_el: asn1.ASN1Element): void => {
                    extnValue = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Extension,
                _extension_additions_list_spec_for_Extension,
                _root_component_type_list_2_spec_for_Extension,
                undefined
            );
            return new Extension /* SEQUENCE_CONSTRUCTOR_CALL */(
                extnId,
                critical,
                extnValue
            );
        };
    }
    return _cached_decoder_for_Extension(el);
}
export function _encode_Extension(
    value: Extension,
    elGetter: __utils.ASN1Encoder<Extension>
) {
    if (!_cached_encoder_for_Extension) {
        _cached_encoder_for_Extension = function (
            value: Extension,
            elGetter: __utils.ASN1Encoder<Extension>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeAny(
                            /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ value.extnId,
                            __utils.BER
                        ),
                        /* IF_DEFAULT */ value.critical === undefined ||
                        __utils.deepEq(
                            value.critical,
                            Extension._default_value_for_critical
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.critical,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.extnValue,
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
    return _cached_encoder_for_Extension(value, elGetter);
}

export type Extensions = Extension[]; // SequenceOfType
let _cached_decoder_for_Extensions: __utils.ASN1Decoder<
    Extensions
> | null = null;
let _cached_encoder_for_Extensions: __utils.ASN1Encoder<
    Extensions
> | null = null;
export function _decode_Extensions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Extensions) {
        _cached_decoder_for_Extensions = __utils._decodeSequenceOf<Extension>(
            () => _decode_Extension
        );
    }
    return _cached_decoder_for_Extensions(el);
}
export function _encode_Extensions(
    value: Extensions,
    elGetter: __utils.ASN1Encoder<Extensions>
) {
    if (!_cached_encoder_for_Extensions) {
        _cached_encoder_for_Extensions = __utils._encodeSequenceOf<Extension>(
            () => _encode_Extension,
            __utils.BER
        );
    }
    return _cached_encoder_for_Extensions(value, elGetter);
}

export class TimeStampReq {
    constructor(
        readonly version: Version,
        readonly messageImprint: MessageImprint,
        readonly reqPolicy: asn1.OPTIONAL<TSAPolicyId>,
        readonly nonce: asn1.OPTIONAL<Nonce>,
        readonly certReq: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_certReq() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_TimeStampReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageImprint",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reqPolicy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certReq",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStampReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStampReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStampReq: __utils.ASN1Decoder<
    TimeStampReq
> | null = null;
let _cached_encoder_for_TimeStampReq: __utils.ASN1Encoder<
    TimeStampReq
> | null = null;
export function _decode_TimeStampReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampReq) {
        _cached_decoder_for_TimeStampReq = function (
            el: asn1.ASN1Element
        ): TimeStampReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let messageImprint!: MessageImprint;
            let reqPolicy: asn1.OPTIONAL<TSAPolicyId>;
            let nonce: asn1.OPTIONAL<Nonce>;
            let certReq: asn1.OPTIONAL<asn1.BOOLEAN> =
                TimeStampReq._default_value_for_certReq;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                messageImprint: (_el: asn1.ASN1Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                reqPolicy: (_el: asn1.ASN1Element): void => {
                    reqPolicy = _decode_TSAPolicyId(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = _decode_Nonce(_el);
                },
                certReq: (_el: asn1.ASN1Element): void => {
                    certReq = __utils._decodeBoolean(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStampReq,
                _extension_additions_list_spec_for_TimeStampReq,
                _root_component_type_list_2_spec_for_TimeStampReq,
                undefined
            );
            return new TimeStampReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                messageImprint,
                reqPolicy,
                nonce,
                certReq,
                extensions
            );
        };
    }
    return _cached_decoder_for_TimeStampReq(el);
}
export function _encode_TimeStampReq(
    value: TimeStampReq,
    elGetter: __utils.ASN1Encoder<TimeStampReq>
) {
    if (!_cached_encoder_for_TimeStampReq) {
        _cached_encoder_for_TimeStampReq = function (
            value: TimeStampReq,
            elGetter: __utils.ASN1Encoder<TimeStampReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.reqPolicy === undefined
                            ? undefined
                            : _encode_TSAPolicyId(value.reqPolicy, __utils.BER),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : _encode_Nonce(value.nonce, __utils.BER),
                        /* IF_DEFAULT */ value.certReq === undefined ||
                        __utils.deepEq(
                            value.certReq,
                            TimeStampReq._default_value_for_certReq
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.certReq,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Extensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimeStampReq(value, elGetter);
}

// TODO: ObjectSetAssignment: TSAPolicies

// TODO: ObjectClassAssignment: POLICY

export type PKIStatus = asn1.INTEGER;
export const PKIStatus_granted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PKIStatus: __utils.ASN1Decoder<PKIStatus> | null = null;
let _cached_encoder_for_PKIStatus: __utils.ASN1Encoder<PKIStatus> | null = null;
export function _decode_PKIStatus(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatus) {
        _cached_decoder_for_PKIStatus = __utils._decodeInteger;
    }
    return _cached_decoder_for_PKIStatus(el);
}
export function _encode_PKIStatus(
    value: PKIStatus,
    elGetter: __utils.ASN1Encoder<PKIStatus>
) {
    if (!_cached_encoder_for_PKIStatus) {
        _cached_encoder_for_PKIStatus = __utils._encodeInteger;
    }
    return _cached_encoder_for_PKIStatus(value, elGetter);
}

export type PKIFreeText = asn1.UTF8String[]; // SequenceOfType
let _cached_decoder_for_PKIFreeText: __utils.ASN1Decoder<
    PKIFreeText
> | null = null;
let _cached_encoder_for_PKIFreeText: __utils.ASN1Encoder<
    PKIFreeText
> | null = null;
export function _decode_PKIFreeText(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFreeText) {
        _cached_decoder_for_PKIFreeText = __utils._decodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._decodeUTF8String);
    }
    return _cached_decoder_for_PKIFreeText(el);
}
export function _encode_PKIFreeText(
    value: PKIFreeText,
    elGetter: __utils.ASN1Encoder<PKIFreeText>
) {
    if (!_cached_encoder_for_PKIFreeText) {
        _cached_encoder_for_PKIFreeText = __utils._encodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._encodeUTF8String, __utils.BER);
    }
    return _cached_encoder_for_PKIFreeText(value, elGetter);
}

export type PKIFailureInfo = asn1.BIT_STRING;
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */
export const PKIFailureInfo_systemNotAvailable: number = 24; /* LONG_NAMED_BIT */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */
export const PKIFailureInfo_verificationFailure: number = 27; /* LONG_NAMED_BIT */
let _cached_decoder_for_PKIFailureInfo: __utils.ASN1Decoder<
    PKIFailureInfo
> | null = null;
let _cached_encoder_for_PKIFailureInfo: __utils.ASN1Encoder<
    PKIFailureInfo
> | null = null;
export function _decode_PKIFailureInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFailureInfo) {
        _cached_decoder_for_PKIFailureInfo = __utils._decodeBitString;
    }
    return _cached_decoder_for_PKIFailureInfo(el);
}
export function _encode_PKIFailureInfo(
    value: PKIFailureInfo,
    elGetter: __utils.ASN1Encoder<PKIFailureInfo>
) {
    if (!_cached_encoder_for_PKIFailureInfo) {
        _cached_encoder_for_PKIFailureInfo = __utils._encodeBitString;
    }
    return _cached_encoder_for_PKIFailureInfo(value, elGetter);
}

export class PKIStatusInfo {
    constructor(
        readonly status: PKIStatus,
        readonly statusString: asn1.OPTIONAL<PKIFreeText>,
        readonly failInfo: asn1.OPTIONAL<PKIFailureInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "statusString",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "failInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PKIStatusInfo: __utils.ASN1Decoder<
    PKIStatusInfo
> | null = null;
let _cached_encoder_for_PKIStatusInfo: __utils.ASN1Encoder<
    PKIStatusInfo
> | null = null;
export function _decode_PKIStatusInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatusInfo) {
        _cached_decoder_for_PKIStatusInfo = function (
            el: asn1.ASN1Element
        ): PKIStatusInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatus;
            let statusString: asn1.OPTIONAL<PKIFreeText>;
            let failInfo: asn1.OPTIONAL<PKIFailureInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatus(_el);
                },
                statusString: (_el: asn1.ASN1Element): void => {
                    statusString = _decode_PKIFreeText(_el);
                },
                failInfo: (_el: asn1.ASN1Element): void => {
                    failInfo = _decode_PKIFailureInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIStatusInfo,
                _extension_additions_list_spec_for_PKIStatusInfo,
                _root_component_type_list_2_spec_for_PKIStatusInfo,
                undefined
            );
            return new PKIStatusInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                statusString,
                failInfo
            );
        };
    }
    return _cached_decoder_for_PKIStatusInfo(el);
}
export function _encode_PKIStatusInfo(
    value: PKIStatusInfo,
    elGetter: __utils.ASN1Encoder<PKIStatusInfo>
) {
    if (!_cached_encoder_for_PKIStatusInfo) {
        _cached_encoder_for_PKIStatusInfo = function (
            value: PKIStatusInfo,
            elGetter: __utils.ASN1Encoder<PKIStatusInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatus(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.statusString === undefined
                            ? undefined
                            : _encode_PKIFreeText(
                                  value.statusString,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.failInfo === undefined
                            ? undefined
                            : _encode_PKIFailureInfo(
                                  value.failInfo,
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
    return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}

export class TimeStampToken {
    constructor(
        readonly contentType: asn1.OBJECT_IDENTIFIER,
        readonly content: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeStampToken: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "content",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStampToken: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStampToken: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStampToken: __utils.ASN1Decoder<
    TimeStampToken
> | null = null;
let _cached_encoder_for_TimeStampToken: __utils.ASN1Encoder<
    TimeStampToken
> | null = null;
export function _decode_TimeStampToken(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampToken) {
        _cached_decoder_for_TimeStampToken = function (
            el: asn1.ASN1Element
        ): TimeStampToken {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TimeStampToken contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "contentType";
            sequence[1].name = "content";
            let contentType!: asn1.OBJECT_IDENTIFIER;
            let content!: asn1.ASN1Element;
            contentType = __utils._decodeObjectIdentifier(sequence[0]);
            content = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new TimeStampToken(contentType, content);
        };
    }
    return _cached_decoder_for_TimeStampToken(el);
}
export function _encode_TimeStampToken(
    value: TimeStampToken,
    elGetter: __utils.ASN1Encoder<TimeStampToken>
) {
    if (!_cached_encoder_for_TimeStampToken) {
        _cached_encoder_for_TimeStampToken = function (
            value: TimeStampToken,
            elGetter: __utils.ASN1Encoder<TimeStampToken>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.contentType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.content, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimeStampToken(value, elGetter);
}

export class TimeStampResp {
    constructor(
        readonly status: PKIStatusInfo,
        readonly timeStampToken: asn1.OPTIONAL<TimeStampToken>
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeStampResp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStampToken",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStampResp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStampResp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStampResp: __utils.ASN1Decoder<
    TimeStampResp
> | null = null;
let _cached_encoder_for_TimeStampResp: __utils.ASN1Encoder<
    TimeStampResp
> | null = null;
export function _decode_TimeStampResp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampResp) {
        _cached_decoder_for_TimeStampResp = function (
            el: asn1.ASN1Element
        ): TimeStampResp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatusInfo;
            let timeStampToken: asn1.OPTIONAL<TimeStampToken>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                timeStampToken: (_el: asn1.ASN1Element): void => {
                    timeStampToken = _decode_TimeStampToken(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStampResp,
                _extension_additions_list_spec_for_TimeStampResp,
                _root_component_type_list_2_spec_for_TimeStampResp,
                undefined
            );
            return new TimeStampResp /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                timeStampToken
            );
        };
    }
    return _cached_decoder_for_TimeStampResp(el);
}
export function _encode_TimeStampResp(
    value: TimeStampResp,
    elGetter: __utils.ASN1Encoder<TimeStampResp>
) {
    if (!_cached_encoder_for_TimeStampResp) {
        _cached_encoder_for_TimeStampResp = function (
            value: TimeStampResp,
            elGetter: __utils.ASN1Encoder<TimeStampResp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.timeStampToken === undefined
                            ? undefined
                            : _encode_TimeStampToken(
                                  value.timeStampToken,
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
    return _cached_encoder_for_TimeStampResp(value, elGetter);
}

// TODO: ObjectSetAssignment: Contents

export type SerialNumber = asn1.INTEGER;
let _cached_decoder_for_SerialNumber: __utils.ASN1Decoder<
    SerialNumber
> | null = null;
let _cached_encoder_for_SerialNumber: __utils.ASN1Encoder<
    SerialNumber
> | null = null;
export function _decode_SerialNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SerialNumber) {
        _cached_decoder_for_SerialNumber = __utils._decodeInteger;
    }
    return _cached_decoder_for_SerialNumber(el);
}
export function _encode_SerialNumber(
    value: SerialNumber,
    elGetter: __utils.ASN1Encoder<SerialNumber>
) {
    if (!_cached_encoder_for_SerialNumber) {
        _cached_encoder_for_SerialNumber = __utils._encodeInteger;
    }
    return _cached_encoder_for_SerialNumber(value, elGetter);
}

export class Accuracy {
    constructor(
        readonly seconds: asn1.OPTIONAL<asn1.INTEGER>,
        readonly millis: asn1.OPTIONAL<asn1.INTEGER>,
        readonly micros: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
}
export const _root_component_type_list_1_spec_for_Accuracy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "seconds",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "millis",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "micros",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Accuracy: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Accuracy: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Accuracy: __utils.ASN1Decoder<Accuracy> | null = null;
let _cached_encoder_for_Accuracy: __utils.ASN1Encoder<Accuracy> | null = null;
export function _decode_Accuracy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Accuracy) {
        _cached_decoder_for_Accuracy = function (
            el: asn1.ASN1Element
        ): Accuracy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let seconds: asn1.OPTIONAL<asn1.INTEGER>;
            let millis: asn1.OPTIONAL<asn1.INTEGER>;
            let micros: asn1.OPTIONAL<asn1.INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                seconds: (_el: asn1.ASN1Element): void => {
                    seconds = __utils._decodeInteger(_el);
                },
                millis: (_el: asn1.ASN1Element): void => {
                    millis = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                micros: (_el: asn1.ASN1Element): void => {
                    micros = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Accuracy,
                _extension_additions_list_spec_for_Accuracy,
                _root_component_type_list_2_spec_for_Accuracy,
                undefined
            );
            return new Accuracy /* SEQUENCE_CONSTRUCTOR_CALL */(
                seconds,
                millis,
                micros
            );
        };
    }
    return _cached_decoder_for_Accuracy(el);
}
export function _encode_Accuracy(
    value: Accuracy,
    elGetter: __utils.ASN1Encoder<Accuracy>
) {
    if (!_cached_encoder_for_Accuracy) {
        _cached_encoder_for_Accuracy = function (
            value: Accuracy,
            elGetter: __utils.ASN1Encoder<Accuracy>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.seconds === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.seconds,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.millis === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.millis, __utils.BER),
                        /* IF_ABSENT  */ value.micros === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.micros, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Accuracy(value, elGetter);
}

export class TSTInfo {
    constructor(
        readonly version: Version,
        readonly policy: TSAPolicyId,
        readonly messageImprint: MessageImprint,
        readonly serialNumber: SerialNumber,
        readonly genTime: asn1.GeneralizedTime,
        readonly accuracy: asn1.OPTIONAL<Accuracy>,
        readonly ordering: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly nonce: asn1.OPTIONAL<Nonce>,
        readonly tsa: asn1.OPTIONAL<GeneralName>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_ordering() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_TSTInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policy",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageImprint",
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
        "genTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accuracy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ordering",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tsa",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TSTInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TSTInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TSTInfo: __utils.ASN1Decoder<TSTInfo> | null = null;
let _cached_encoder_for_TSTInfo: __utils.ASN1Encoder<TSTInfo> | null = null;
export function _decode_TSTInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSTInfo) {
        _cached_decoder_for_TSTInfo = function (el: asn1.ASN1Element): TSTInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let policy!: TSAPolicyId;
            let messageImprint!: MessageImprint;
            let serialNumber!: SerialNumber;
            let genTime!: asn1.GeneralizedTime;
            let accuracy: asn1.OPTIONAL<Accuracy>;
            let ordering: asn1.OPTIONAL<asn1.BOOLEAN> =
                TSTInfo._default_value_for_ordering;
            let nonce: asn1.OPTIONAL<Nonce>;
            let tsa: asn1.OPTIONAL<GeneralName>;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                policy: (_el: asn1.ASN1Element): void => {
                    policy = _decode_TSAPolicyId(_el);
                },
                messageImprint: (_el: asn1.ASN1Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = _decode_SerialNumber(_el);
                },
                genTime: (_el: asn1.ASN1Element): void => {
                    genTime = __utils._decodeGeneralizedTime(_el);
                },
                accuracy: (_el: asn1.ASN1Element): void => {
                    accuracy = _decode_Accuracy(_el);
                },
                ordering: (_el: asn1.ASN1Element): void => {
                    ordering = __utils._decodeBoolean(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = _decode_Nonce(_el);
                },
                tsa: (_el: asn1.ASN1Element): void => {
                    tsa = __utils._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TSTInfo,
                _extension_additions_list_spec_for_TSTInfo,
                _root_component_type_list_2_spec_for_TSTInfo,
                undefined
            );
            return new TSTInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                policy,
                messageImprint,
                serialNumber,
                genTime,
                accuracy,
                ordering,
                nonce,
                tsa,
                extensions
            );
        };
    }
    return _cached_decoder_for_TSTInfo(el);
}
export function _encode_TSTInfo(
    value: TSTInfo,
    elGetter: __utils.ASN1Encoder<TSTInfo>
) {
    if (!_cached_encoder_for_TSTInfo) {
        _cached_encoder_for_TSTInfo = function (
            value: TSTInfo,
            elGetter: __utils.ASN1Encoder<TSTInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TSAPolicyId(
                            value.policy,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SerialNumber(
                            value.serialNumber,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.genTime,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.accuracy === undefined
                            ? undefined
                            : _encode_Accuracy(value.accuracy, __utils.BER),
                        /* IF_DEFAULT */ value.ordering === undefined ||
                        __utils.deepEq(
                            value.ordering,
                            TSTInfo._default_value_for_ordering
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.ordering,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : _encode_Nonce(value.nonce, __utils.BER),
                        /* IF_ABSENT  */ value.tsa === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_GeneralName,
                                  __utils.BER
                              )(value.tsa, __utils.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TSTInfo(value, elGetter);
}

export type ETSTInfo = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_ETSTInfo: __utils.ASN1Decoder<ETSTInfo> | null = null;
let _cached_encoder_for_ETSTInfo: __utils.ASN1Encoder<ETSTInfo> | null = null;
export function _decode_ETSTInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ETSTInfo) {
        _cached_decoder_for_ETSTInfo = __utils._decodeOctetString;
    }
    return _cached_decoder_for_ETSTInfo(el);
}
export function _encode_ETSTInfo(
    value: ETSTInfo,
    elGetter: __utils.ASN1Encoder<ETSTInfo>
) {
    if (!_cached_encoder_for_ETSTInfo) {
        _cached_encoder_for_ETSTInfo = __utils._encodeOctetString;
    }
    return _cached_encoder_for_ETSTInfo(value, elGetter);
}

export type OID = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_OID: __utils.ASN1Decoder<OID> | null = null;
let _cached_encoder_for_OID: __utils.ASN1Encoder<OID> | null = null;
export function _decode_OID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OID) {
        _cached_decoder_for_OID = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_OID(el);
}
export function _encode_OID(value: OID, elGetter: __utils.ASN1Encoder<OID>) {
    if (!_cached_encoder_for_OID) {
        _cached_encoder_for_OID = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_OID(value, elGetter);
}

export const id_ct_TSTInfo: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    /* tstInfo */ 4,
]);

// TODO: ObjectSetAssignment: EContents

export type RequestID = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_RequestID: __utils.ASN1Decoder<RequestID> | null = null;
let _cached_encoder_for_RequestID: __utils.ASN1Encoder<RequestID> | null = null;
export function _decode_RequestID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestID) {
        _cached_decoder_for_RequestID = __utils._decodeOctetString;
    }
    return _cached_decoder_for_RequestID(el);
}
export function _encode_RequestID(
    value: RequestID,
    elGetter: __utils.ASN1Encoder<RequestID>
) {
    if (!_cached_encoder_for_RequestID) {
        _cached_encoder_for_RequestID = __utils._encodeOctetString;
    }
    return _cached_encoder_for_RequestID(value, elGetter);
}

export class VerifyReq {
    constructor(
        readonly version: Version,
        readonly tst: TimeStampToken,
        readonly requestID: asn1.OPTIONAL<RequestID>
    ) {}
}
export const _root_component_type_list_1_spec_for_VerifyReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tst",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_VerifyReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_VerifyReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_VerifyReq: __utils.ASN1Decoder<VerifyReq> | null = null;
let _cached_encoder_for_VerifyReq: __utils.ASN1Encoder<VerifyReq> | null = null;
export function _decode_VerifyReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_VerifyReq) {
        _cached_decoder_for_VerifyReq = function (
            el: asn1.ASN1Element
        ): VerifyReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let tst!: TimeStampToken;
            let requestID: asn1.OPTIONAL<RequestID>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                tst: (_el: asn1.ASN1Element): void => {
                    tst = _decode_TimeStampToken(_el);
                },
                requestID: (_el: asn1.ASN1Element): void => {
                    requestID = _decode_RequestID(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_VerifyReq,
                _extension_additions_list_spec_for_VerifyReq,
                _root_component_type_list_2_spec_for_VerifyReq,
                undefined
            );
            return new VerifyReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                tst,
                requestID
            );
        };
    }
    return _cached_decoder_for_VerifyReq(el);
}
export function _encode_VerifyReq(
    value: VerifyReq,
    elGetter: __utils.ASN1Encoder<VerifyReq>
) {
    if (!_cached_encoder_for_VerifyReq) {
        _cached_encoder_for_VerifyReq = function (
            value: VerifyReq,
            elGetter: __utils.ASN1Encoder<VerifyReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TimeStampToken(
                            value.tst,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.requestID === undefined
                            ? undefined
                            : _encode_RequestID(value.requestID, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_VerifyReq(value, elGetter);
}

export class VerifyResp {
    constructor(
        readonly version: Version,
        readonly status: PKIStatusInfo,
        readonly tst: TimeStampToken,
        readonly requestID: asn1.OPTIONAL<RequestID>
    ) {}
}
export const _root_component_type_list_1_spec_for_VerifyResp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tst",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_VerifyResp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_VerifyResp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_VerifyResp: __utils.ASN1Decoder<
    VerifyResp
> | null = null;
let _cached_encoder_for_VerifyResp: __utils.ASN1Encoder<
    VerifyResp
> | null = null;
export function _decode_VerifyResp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_VerifyResp) {
        _cached_decoder_for_VerifyResp = function (
            el: asn1.ASN1Element
        ): VerifyResp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let status!: PKIStatusInfo;
            let tst!: TimeStampToken;
            let requestID: asn1.OPTIONAL<RequestID>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                tst: (_el: asn1.ASN1Element): void => {
                    tst = _decode_TimeStampToken(_el);
                },
                requestID: (_el: asn1.ASN1Element): void => {
                    requestID = _decode_RequestID(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_VerifyResp,
                _extension_additions_list_spec_for_VerifyResp,
                _root_component_type_list_2_spec_for_VerifyResp,
                undefined
            );
            return new VerifyResp /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                status,
                tst,
                requestID
            );
        };
    }
    return _cached_decoder_for_VerifyResp(el);
}
export function _encode_VerifyResp(
    value: VerifyResp,
    elGetter: __utils.ASN1Encoder<VerifyResp>
) {
    if (!_cached_encoder_for_VerifyResp) {
        _cached_encoder_for_VerifyResp = function (
            value: VerifyResp,
            elGetter: __utils.ASN1Encoder<VerifyResp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TimeStampToken(
                            value.tst,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.requestID === undefined
                            ? undefined
                            : _encode_RequestID(value.requestID, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_VerifyResp(value, elGetter);
}

export class ExtendReq {
    constructor(
        readonly version: Version,
        readonly tst: TimeStampToken,
        readonly requestID: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tst",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtendReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtendReq: __utils.ASN1Decoder<ExtendReq> | null = null;
let _cached_encoder_for_ExtendReq: __utils.ASN1Encoder<ExtendReq> | null = null;
export function _decode_ExtendReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendReq) {
        _cached_decoder_for_ExtendReq = function (
            el: asn1.ASN1Element
        ): ExtendReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let tst!: TimeStampToken;
            let requestID: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                tst: (_el: asn1.ASN1Element): void => {
                    tst = _decode_TimeStampToken(_el);
                },
                requestID: (_el: asn1.ASN1Element): void => {
                    requestID = __utils._decode_implicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtendReq,
                _extension_additions_list_spec_for_ExtendReq,
                _root_component_type_list_2_spec_for_ExtendReq,
                undefined
            );
            return new ExtendReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                tst,
                requestID
            );
        };
    }
    return _cached_decoder_for_ExtendReq(el);
}
export function _encode_ExtendReq(
    value: ExtendReq,
    elGetter: __utils.ASN1Encoder<ExtendReq>
) {
    if (!_cached_encoder_for_ExtendReq) {
        _cached_encoder_for_ExtendReq = function (
            value: ExtendReq,
            elGetter: __utils.ASN1Encoder<ExtendReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TimeStampToken(
                            value.tst,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.requestID === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.requestID, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ExtendReq(value, elGetter);
}

export class ExtendResp {
    constructor(
        readonly version: Version,
        readonly status: PKIStatusInfo,
        readonly tst: TimeStampToken,
        readonly requestID: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtendResp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tst",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtendResp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtendResp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtendResp: __utils.ASN1Decoder<
    ExtendResp
> | null = null;
let _cached_encoder_for_ExtendResp: __utils.ASN1Encoder<
    ExtendResp
> | null = null;
export function _decode_ExtendResp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtendResp) {
        _cached_decoder_for_ExtendResp = function (
            el: asn1.ASN1Element
        ): ExtendResp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let status!: PKIStatusInfo;
            let tst!: TimeStampToken;
            let requestID: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                tst: (_el: asn1.ASN1Element): void => {
                    tst = _decode_TimeStampToken(_el);
                },
                requestID: (_el: asn1.ASN1Element): void => {
                    requestID = __utils._decode_implicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtendResp,
                _extension_additions_list_spec_for_ExtendResp,
                _root_component_type_list_2_spec_for_ExtendResp,
                undefined
            );
            return new ExtendResp /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                status,
                tst,
                requestID
            );
        };
    }
    return _cached_decoder_for_ExtendResp(el);
}
export function _encode_ExtendResp(
    value: ExtendResp,
    elGetter: __utils.ASN1Encoder<ExtendResp>
) {
    if (!_cached_encoder_for_ExtendResp) {
        _cached_encoder_for_ExtendResp = function (
            value: ExtendResp,
            elGetter: __utils.ASN1Encoder<ExtendResp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TimeStampToken(
                            value.tst,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.requestID === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.requestID, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ExtendResp(value, elGetter);
}

// TODO: ObjectSetAssignment: TSExtensions

// TODO: ObjectAssignment: extHash

export type ExtHash = MessageImprint[]; // SequenceOfType
let _cached_decoder_for_ExtHash: __utils.ASN1Decoder<ExtHash> | null = null;
let _cached_encoder_for_ExtHash: __utils.ASN1Encoder<ExtHash> | null = null;
export function _decode_ExtHash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtHash) {
        _cached_decoder_for_ExtHash = __utils._decodeSequenceOf<MessageImprint>(
            () => _decode_MessageImprint
        );
    }
    return _cached_decoder_for_ExtHash(el);
}
export function _encode_ExtHash(
    value: ExtHash,
    elGetter: __utils.ASN1Encoder<ExtHash>
) {
    if (!_cached_encoder_for_ExtHash) {
        _cached_encoder_for_ExtHash = __utils._encodeSequenceOf<MessageImprint>(
            () => _encode_MessageImprint,
            __utils.BER
        );
    }
    return _cached_encoder_for_ExtHash(value, elGetter);
}

// TODO: ObjectAssignment: extMethod

export type Method = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_Method: __utils.ASN1Decoder<Method> | null = null;
let _cached_encoder_for_Method: __utils.ASN1Encoder<Method> | null = null;
export function _decode_Method(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Method) {
        _cached_decoder_for_Method = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Method(el);
}
export function _encode_Method(
    value: Method,
    elGetter: __utils.ASN1Encoder<Method>
) {
    if (!_cached_encoder_for_Method) {
        _cached_encoder_for_Method = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Method(value, elGetter);
}

export type ExtMethod = Method[]; // SequenceOfType
let _cached_decoder_for_ExtMethod: __utils.ASN1Decoder<ExtMethod> | null = null;
let _cached_encoder_for_ExtMethod: __utils.ASN1Encoder<ExtMethod> | null = null;
export function _decode_ExtMethod(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtMethod) {
        _cached_decoder_for_ExtMethod = __utils._decodeSequenceOf<Method>(
            () => _decode_Method
        );
    }
    return _cached_decoder_for_ExtMethod(el);
}
export function _encode_ExtMethod(
    value: ExtMethod,
    elGetter: __utils.ASN1Encoder<ExtMethod>
) {
    if (!_cached_encoder_for_ExtMethod) {
        _cached_encoder_for_ExtMethod = __utils._encodeSequenceOf<Method>(
            () => _encode_Method,
            __utils.BER
        );
    }
    return _cached_encoder_for_ExtMethod(value, elGetter);
}

// TODO: ObjectSetAssignment: Methods

// TODO: ObjectAssignment: extRenewal

export type ExtRenewal = TimeStampToken; // DefinedType
let _cached_decoder_for_ExtRenewal: __utils.ASN1Decoder<
    ExtRenewal
> | null = null;
let _cached_encoder_for_ExtRenewal: __utils.ASN1Encoder<
    ExtRenewal
> | null = null;
export function _decode_ExtRenewal(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtRenewal) {
        _cached_decoder_for_ExtRenewal = _decode_TimeStampToken;
    }
    return _cached_decoder_for_ExtRenewal(el);
}
export function _encode_ExtRenewal(
    value: ExtRenewal,
    elGetter: __utils.ASN1Encoder<ExtRenewal>
) {
    if (!_cached_encoder_for_ExtRenewal) {
        _cached_encoder_for_ExtRenewal = _encode_TimeStampToken;
    }
    return _cached_encoder_for_ExtRenewal(value, elGetter);
}

export const tsp_ext_renewal: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* extensions */ 1,
    /* renewal */ 3,
]);

export const tsp_ext_hash: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* extensions */ 1,
    /* hash */ 1,
]);

export const tsp_ext_meth: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* extensions */ 1,
    /* meth */ 2,
]);

export const tsp_itm_ds: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* itm */ 2,
    /* ds */ 1,
]);

export const tsp_itm_mac: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* itm */ 2,
    /* mac */ 2,
]);

export const tsp_req_link: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* link */ 1,
]);

export const tsp_req_link_ds: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* link-ds */ 2,
]);

export const id_signedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

export const id_ct_authData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    /* authData */ 2,
]);

export const id_digestedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    5,
]);

export const tsp_digestedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* digestedData */ 8,
]);

export const tsp_signedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* signedData */ 9,
]);

export type DDVersion95 = asn1.INTEGER;
export const DDVersion95_version2: DDVersion95 = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_DDVersion95: __utils.ASN1Decoder<
    DDVersion95
> | null = null;
let _cached_encoder_for_DDVersion95: __utils.ASN1Encoder<
    DDVersion95
> | null = null;
export function _decode_DDVersion95(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DDVersion95) {
        _cached_decoder_for_DDVersion95 = __utils._decodeInteger;
    }
    return _cached_decoder_for_DDVersion95(el);
}
export function _encode_DDVersion95(
    value: DDVersion95,
    elGetter: __utils.ASN1Encoder<DDVersion95>
) {
    if (!_cached_encoder_for_DDVersion95) {
        _cached_encoder_for_DDVersion95 = __utils._encodeInteger;
    }
    return _cached_encoder_for_DDVersion95(value, elGetter);
}

export class EncapsulatedContentInfo {
    constructor(
        readonly eContentType: asn1.OBJECT_IDENTIFIER,
        readonly eContent: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "eContentType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "eContent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncapsulatedContentInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncapsulatedContentInfo: __utils.ASN1Decoder<
    EncapsulatedContentInfo
> | null = null;
let _cached_encoder_for_EncapsulatedContentInfo: __utils.ASN1Encoder<
    EncapsulatedContentInfo
> | null = null;
export function _decode_EncapsulatedContentInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncapsulatedContentInfo) {
        _cached_decoder_for_EncapsulatedContentInfo = function (
            el: asn1.ASN1Element
        ): EncapsulatedContentInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EncapsulatedContentInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "eContentType";
            sequence[1].name = "eContent";
            let eContentType!: asn1.OBJECT_IDENTIFIER;
            let eContent!: asn1.ASN1Element;
            eContentType = __utils._decodeObjectIdentifier(sequence[0]);
            eContent = __utils._decode_explicit<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new EncapsulatedContentInfo(eContentType, eContent);
        };
    }
    return _cached_decoder_for_EncapsulatedContentInfo(el);
}
export function _encode_EncapsulatedContentInfo(
    value: EncapsulatedContentInfo,
    elGetter: __utils.ASN1Encoder<EncapsulatedContentInfo>
) {
    if (!_cached_encoder_for_EncapsulatedContentInfo) {
        _cached_encoder_for_EncapsulatedContentInfo = function (
            value: EncapsulatedContentInfo,
            elGetter: __utils.ASN1Encoder<EncapsulatedContentInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.eContentType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.eContent, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncapsulatedContentInfo(value, elGetter);
}

export type Digest = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Digest: __utils.ASN1Decoder<Digest> | null = null;
let _cached_encoder_for_Digest: __utils.ASN1Encoder<Digest> | null = null;
export function _decode_Digest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Digest(el);
}
export function _encode_Digest(
    value: Digest,
    elGetter: __utils.ASN1Encoder<Digest>
) {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Digest(value, elGetter);
}

export class DigestedData {
    constructor(
        readonly version: DDVersion95,
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        readonly encapContentInfo: EncapsulatedContentInfo,
        readonly digest: Digest
    ) {}
}
export const _root_component_type_list_1_spec_for_DigestedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
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
        "encapContentInfo",
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
];
export const _root_component_type_list_2_spec_for_DigestedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DigestedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DigestedData: __utils.ASN1Decoder<
    DigestedData
> | null = null;
let _cached_encoder_for_DigestedData: __utils.ASN1Encoder<
    DigestedData
> | null = null;
export function _decode_DigestedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DigestedData) {
        _cached_decoder_for_DigestedData = function (
            el: asn1.ASN1Element
        ): DigestedData {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "DigestedData contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "version";
            sequence[1].name = "digestAlgorithm";
            sequence[2].name = "encapContentInfo";
            sequence[3].name = "digest";
            let version!: DDVersion95;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let encapContentInfo!: EncapsulatedContentInfo;
            let digest!: Digest;
            version = _decode_DDVersion95(sequence[0]);
            digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[1]);
            encapContentInfo = _decode_EncapsulatedContentInfo(sequence[2]);
            digest = _decode_Digest(sequence[3]);
            // TODO: Validate values.
            return new DigestedData(
                version,
                digestAlgorithm,
                encapContentInfo,
                digest
            );
        };
    }
    return _cached_decoder_for_DigestedData(el);
}
export function _encode_DigestedData(
    value: DigestedData,
    elGetter: __utils.ASN1Encoder<DigestedData>
) {
    if (!_cached_encoder_for_DigestedData) {
        _cached_encoder_for_DigestedData = function (
            value: DigestedData,
            elGetter: __utils.ASN1Encoder<DigestedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DDVersion95(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Digest(
                            value.digest,
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
    return _cached_encoder_for_DigestedData(value, elGetter);
}

export type MessageImprints = MessageImprint[]; // SequenceOfType
let _cached_decoder_for_MessageImprints: __utils.ASN1Decoder<
    MessageImprints
> | null = null;
let _cached_encoder_for_MessageImprints: __utils.ASN1Encoder<
    MessageImprints
> | null = null;
export function _decode_MessageImprints(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MessageImprints) {
        _cached_decoder_for_MessageImprints = __utils._decodeSequenceOf<
            MessageImprint
        >(() => _decode_MessageImprint);
    }
    return _cached_decoder_for_MessageImprints(el);
}
export function _encode_MessageImprints(
    value: MessageImprints,
    elGetter: __utils.ASN1Encoder<MessageImprints>
) {
    if (!_cached_encoder_for_MessageImprints) {
        _cached_encoder_for_MessageImprints = __utils._encodeSequenceOf<
            MessageImprint
        >(() => _encode_MessageImprint, __utils.BER);
    }
    return _cached_encoder_for_MessageImprints(value, elGetter);
}

// TODO: ObjectClassAssignment: ALGORITHM

export class AlgorithmIdentifier {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AlgorithmIdentifier: __utils.ASN1Decoder<
    AlgorithmIdentifier
> | null = null;
let _cached_encoder_for_AlgorithmIdentifier: __utils.ASN1Encoder<
    AlgorithmIdentifier
> | null = null;
export function _decode_AlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AlgorithmIdentifier) {
        _cached_decoder_for_AlgorithmIdentifier = function (
            el: asn1.ASN1Element
        ): AlgorithmIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm!: asn1.OBJECT_IDENTIFIER;
            let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithm: (_el: asn1.ASN1Element): void => {
                    algorithm = __utils._decodeObjectIdentifier(_el);
                },
                parameters: (_el: asn1.ASN1Element): void => {
                    parameters = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmIdentifier,
                _extension_additions_list_spec_for_AlgorithmIdentifier,
                _root_component_type_list_2_spec_for_AlgorithmIdentifier,
                undefined
            );
            return new AlgorithmIdentifier /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                parameters
            );
        };
    }
    return _cached_decoder_for_AlgorithmIdentifier(el);
}
export function _encode_AlgorithmIdentifier(
    value: AlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
) {
    if (!_cached_encoder_for_AlgorithmIdentifier) {
        _cached_encoder_for_AlgorithmIdentifier = function (
            value: AlgorithmIdentifier,
            elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : __utils._encodeAny(value.parameters, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

export type ChainAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_ChainAlgorithmIdentifier: __utils.ASN1Decoder<
    ChainAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_ChainAlgorithmIdentifier: __utils.ASN1Encoder<
    ChainAlgorithmIdentifier
> | null = null;
export function _decode_ChainAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChainAlgorithmIdentifier) {
        _cached_decoder_for_ChainAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ChainAlgorithmIdentifier(el);
}
export function _encode_ChainAlgorithmIdentifier(
    value: ChainAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<ChainAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ChainAlgorithmIdentifier) {
        _cached_encoder_for_ChainAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ChainAlgorithmIdentifier(value, elGetter);
}

export type LinkAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_LinkAlgorithmIdentifier: __utils.ASN1Decoder<
    LinkAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_LinkAlgorithmIdentifier: __utils.ASN1Encoder<
    LinkAlgorithmIdentifier
> | null = null;
export function _decode_LinkAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LinkAlgorithmIdentifier) {
        _cached_decoder_for_LinkAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_LinkAlgorithmIdentifier(el);
}
export function _encode_LinkAlgorithmIdentifier(
    value: LinkAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<LinkAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_LinkAlgorithmIdentifier) {
        _cached_encoder_for_LinkAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_LinkAlgorithmIdentifier(value, elGetter);
}

export type Imprint = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Imprint: __utils.ASN1Decoder<Imprint> | null = null;
let _cached_encoder_for_Imprint: __utils.ASN1Encoder<Imprint> | null = null;
export function _decode_Imprint(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Imprint) {
        _cached_decoder_for_Imprint = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Imprint(el);
}
export function _encode_Imprint(
    value: Imprint,
    elGetter: __utils.ASN1Encoder<Imprint>
) {
    if (!_cached_encoder_for_Imprint) {
        _cached_encoder_for_Imprint = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Imprint(value, elGetter);
}

export type Imprints = Imprint[]; // SequenceOfType
let _cached_decoder_for_Imprints: __utils.ASN1Decoder<Imprints> | null = null;
let _cached_encoder_for_Imprints: __utils.ASN1Encoder<Imprints> | null = null;
export function _decode_Imprints(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Imprints) {
        _cached_decoder_for_Imprints = __utils._decodeSequenceOf<Imprint>(
            () => _decode_Imprint
        );
    }
    return _cached_decoder_for_Imprints(el);
}
export function _encode_Imprints(
    value: Imprints,
    elGetter: __utils.ASN1Encoder<Imprints>
) {
    if (!_cached_encoder_for_Imprints) {
        _cached_encoder_for_Imprints = __utils._encodeSequenceOf<Imprint>(
            () => _encode_Imprint,
            __utils.BER
        );
    }
    return _cached_encoder_for_Imprints(value, elGetter);
}

export type Node =
    | { imprints: Imprints } /* CHOICE_ALT_ROOT */
    | { reference: asn1.INTEGER } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Node: __utils.ASN1Decoder<Node> | null = null;
let _cached_encoder_for_Node: __utils.ASN1Encoder<Node> | null = null;
export function _decode_Node(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Node) {
        _cached_decoder_for_Node = __utils._decode_inextensible_choice<Node>({
            "CONTEXT 0": [
                "imprints",
                __utils._decode_implicit<Imprints>(() => _decode_Imprints),
            ],
            "CONTEXT 1": [
                "reference",
                __utils._decode_implicit<asn1.INTEGER>(
                    () => __utils._decodeInteger
                ),
            ],
        });
    }
    return _cached_decoder_for_Node(el);
}
export function _encode_Node(value: Node, elGetter: __utils.ASN1Encoder<Node>) {
    if (!_cached_encoder_for_Node) {
        _cached_encoder_for_Node = __utils._encode_choice<Node>(
            {
                imprints: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_Imprints,
                    __utils.BER
                ),
                reference: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => __utils._encodeInteger,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Node(value, elGetter);
}

export type Nodes = Node[]; // SequenceOfType
let _cached_decoder_for_Nodes: __utils.ASN1Decoder<Nodes> | null = null;
let _cached_encoder_for_Nodes: __utils.ASN1Encoder<Nodes> | null = null;
export function _decode_Nodes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Nodes) {
        _cached_decoder_for_Nodes = __utils._decodeSequenceOf<Node>(
            () => _decode_Node
        );
    }
    return _cached_decoder_for_Nodes(el);
}
export function _encode_Nodes(
    value: Nodes,
    elGetter: __utils.ASN1Encoder<Nodes>
) {
    if (!_cached_encoder_for_Nodes) {
        _cached_encoder_for_Nodes = __utils._encodeSequenceOf<Node>(
            () => _encode_Node,
            __utils.BER
        );
    }
    return _cached_encoder_for_Nodes(value, elGetter);
}

export class Link {
    constructor(
        readonly algorithm: asn1.OPTIONAL<LinkAlgorithmIdentifier>,
        readonly identifier: asn1.OPTIONAL<asn1.INTEGER>,
        readonly members: Nodes
    ) {}
}
export const _root_component_type_list_1_spec_for_Link: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "members",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Link: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Link: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Link: __utils.ASN1Decoder<Link> | null = null;
let _cached_encoder_for_Link: __utils.ASN1Encoder<Link> | null = null;
export function _decode_Link(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Link) {
        _cached_decoder_for_Link = function (el: asn1.ASN1Element): Link {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm: asn1.OPTIONAL<LinkAlgorithmIdentifier>;
            let identifier: asn1.OPTIONAL<asn1.INTEGER>;
            let members!: Nodes;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                algorithm: (_el: asn1.ASN1Element): void => {
                    algorithm = __utils._decode_implicit<
                        LinkAlgorithmIdentifier
                    >(() => _decode_LinkAlgorithmIdentifier)(_el);
                },
                identifier: (_el: asn1.ASN1Element): void => {
                    identifier = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                members: (_el: asn1.ASN1Element): void => {
                    members = _decode_Nodes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Link,
                _extension_additions_list_spec_for_Link,
                _root_component_type_list_2_spec_for_Link,
                undefined
            );
            return new Link /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                identifier,
                members
            );
        };
    }
    return _cached_decoder_for_Link(el);
}
export function _encode_Link(value: Link, elGetter: __utils.ASN1Encoder<Link>) {
    if (!_cached_encoder_for_Link) {
        _cached_encoder_for_Link = function (
            value: Link,
            elGetter: __utils.ASN1Encoder<Link>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.algorithm === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_LinkAlgorithmIdentifier,
                                  __utils.BER
                              )(value.algorithm, __utils.BER),
                        /* IF_ABSENT  */ value.identifier === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.identifier, __utils.BER),
                        /* REQUIRED   */ _encode_Nodes(
                            value.members,
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
    return _cached_encoder_for_Link(value, elGetter);
}

export type Links = Link[]; // SequenceOfType
let _cached_decoder_for_Links: __utils.ASN1Decoder<Links> | null = null;
let _cached_encoder_for_Links: __utils.ASN1Encoder<Links> | null = null;
export function _decode_Links(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Links) {
        _cached_decoder_for_Links = __utils._decodeSequenceOf<Link>(
            () => _decode_Link
        );
    }
    return _cached_decoder_for_Links(el);
}
export function _encode_Links(
    value: Links,
    elGetter: __utils.ASN1Encoder<Links>
) {
    if (!_cached_encoder_for_Links) {
        _cached_encoder_for_Links = __utils._encodeSequenceOf<Link>(
            () => _encode_Link,
            __utils.BER
        );
    }
    return _cached_encoder_for_Links(value, elGetter);
}

export class Chain {
    constructor(
        readonly algorithm: ChainAlgorithmIdentifier,
        readonly links: Links
    ) {}
}
export const _root_component_type_list_1_spec_for_Chain: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "links",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Chain: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Chain: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Chain: __utils.ASN1Decoder<Chain> | null = null;
let _cached_encoder_for_Chain: __utils.ASN1Encoder<Chain> | null = null;
export function _decode_Chain(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Chain) {
        _cached_decoder_for_Chain = function (el: asn1.ASN1Element): Chain {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Chain contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "links";
            let algorithm!: ChainAlgorithmIdentifier;
            let links!: Links;
            algorithm = _decode_ChainAlgorithmIdentifier(sequence[0]);
            links = _decode_Links(sequence[1]);
            // TODO: Validate values.
            return new Chain(algorithm, links);
        };
    }
    return _cached_decoder_for_Chain(el);
}
export function _encode_Chain(
    value: Chain,
    elGetter: __utils.ASN1Encoder<Chain>
) {
    if (!_cached_encoder_for_Chain) {
        _cached_encoder_for_Chain = function (
            value: Chain,
            elGetter: __utils.ASN1Encoder<Chain>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ChainAlgorithmIdentifier(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Links(
                            value.links,
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
    return _cached_encoder_for_Chain(value, elGetter);
}

export type Chains = Chain[]; // SequenceOfType
let _cached_decoder_for_Chains: __utils.ASN1Decoder<Chains> | null = null;
let _cached_encoder_for_Chains: __utils.ASN1Encoder<Chains> | null = null;
export function _decode_Chains(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Chains) {
        _cached_decoder_for_Chains = __utils._decodeSequenceOf<Chain>(
            () => _decode_Chain
        );
    }
    return _cached_decoder_for_Chains(el);
}
export function _encode_Chains(
    value: Chains,
    elGetter: __utils.ASN1Encoder<Chains>
) {
    if (!_cached_encoder_for_Chains) {
        _cached_encoder_for_Chains = __utils._encodeSequenceOf<Chain>(
            () => _encode_Chain,
            __utils.BER
        );
    }
    return _cached_encoder_for_Chains(value, elGetter);
}

export type BindingInfoExtensions = Extension[]; // SequenceOfType
let _cached_decoder_for_BindingInfoExtensions: __utils.ASN1Decoder<
    BindingInfoExtensions
> | null = null;
let _cached_encoder_for_BindingInfoExtensions: __utils.ASN1Encoder<
    BindingInfoExtensions
> | null = null;
export function _decode_BindingInfoExtensions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BindingInfoExtensions) {
        _cached_decoder_for_BindingInfoExtensions = __utils._decodeSequenceOf<
            Extension
        >(() => _decode_Extension);
    }
    return _cached_decoder_for_BindingInfoExtensions(el);
}
export function _encode_BindingInfoExtensions(
    value: BindingInfoExtensions,
    elGetter: __utils.ASN1Encoder<BindingInfoExtensions>
) {
    if (!_cached_encoder_for_BindingInfoExtensions) {
        _cached_encoder_for_BindingInfoExtensions = __utils._encodeSequenceOf<
            Extension
        >(() => _encode_Extension, __utils.BER);
    }
    return _cached_encoder_for_BindingInfoExtensions(value, elGetter);
}

export class BindingInfo {
    constructor(
        readonly version: Version,
        readonly msgImprints: MessageImprints,
        readonly aggregate: asn1.OPTIONAL<Chains>,
        readonly links: Links,
        readonly publish: asn1.OPTIONAL<Chains>,
        readonly extensions: asn1.OPTIONAL<BindingInfoExtensions>
    ) {}
}
export const _root_component_type_list_1_spec_for_BindingInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "msgImprints",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aggregate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "links",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publish",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BindingInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BindingInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BindingInfo: __utils.ASN1Decoder<
    BindingInfo
> | null = null;
let _cached_encoder_for_BindingInfo: __utils.ASN1Encoder<
    BindingInfo
> | null = null;
export function _decode_BindingInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BindingInfo) {
        _cached_decoder_for_BindingInfo = function (
            el: asn1.ASN1Element
        ): BindingInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let msgImprints!: MessageImprints;
            let aggregate: asn1.OPTIONAL<Chains>;
            let links!: Links;
            let publish: asn1.OPTIONAL<Chains>;
            let extensions: asn1.OPTIONAL<BindingInfoExtensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                msgImprints: (_el: asn1.ASN1Element): void => {
                    msgImprints = _decode_MessageImprints(_el);
                },
                aggregate: (_el: asn1.ASN1Element): void => {
                    aggregate = __utils._decode_implicit<Chains>(
                        () => _decode_Chains
                    )(_el);
                },
                links: (_el: asn1.ASN1Element): void => {
                    links = _decode_Links(_el);
                },
                publish: (_el: asn1.ASN1Element): void => {
                    publish = __utils._decode_implicit<Chains>(
                        () => _decode_Chains
                    )(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<
                        BindingInfoExtensions
                    >(() => _decode_BindingInfoExtensions)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BindingInfo,
                _extension_additions_list_spec_for_BindingInfo,
                _root_component_type_list_2_spec_for_BindingInfo,
                undefined
            );
            return new BindingInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                msgImprints,
                aggregate,
                links,
                publish,
                extensions
            );
        };
    }
    return _cached_decoder_for_BindingInfo(el);
}
export function _encode_BindingInfo(
    value: BindingInfo,
    elGetter: __utils.ASN1Encoder<BindingInfo>
) {
    if (!_cached_encoder_for_BindingInfo) {
        _cached_encoder_for_BindingInfo = function (
            value: BindingInfo,
            elGetter: __utils.ASN1Encoder<BindingInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprints(
                            value.msgImprints,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.aggregate === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Chains,
                                  __utils.BER
                              )(value.aggregate, __utils.BER),
                        /* REQUIRED   */ _encode_Links(
                            value.links,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.publish === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Chains,
                                  __utils.BER
                              )(value.publish, __utils.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_BindingInfoExtensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_BindingInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: ChainAlgorithms

// TODO: ObjectSetAssignment: LinkAlgorithms

// TODO: ObjectSetAssignment: BIExtensions

// TODO: ObjectAssignment: extName

export type ExtName = GeneralName; // DefinedType
let _cached_decoder_for_ExtName: __utils.ASN1Decoder<ExtName> | null = null;
let _cached_encoder_for_ExtName: __utils.ASN1Encoder<ExtName> | null = null;
export function _decode_ExtName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtName) {
        _cached_decoder_for_ExtName = _decode_GeneralName;
    }
    return _cached_decoder_for_ExtName(el);
}
export function _encode_ExtName(
    value: ExtName,
    elGetter: __utils.ASN1Encoder<ExtName>
) {
    if (!_cached_encoder_for_ExtName) {
        _cached_encoder_for_ExtName = _encode_GeneralName;
    }
    return _cached_encoder_for_ExtName(value, elGetter);
}

export const tsp_ext_name: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* name */ 5,
]);

// TODO: ObjectAssignment: extTime

export type ExtTime = asn1.GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_ExtTime: __utils.ASN1Decoder<ExtTime> | null = null;
let _cached_encoder_for_ExtTime: __utils.ASN1Encoder<ExtTime> | null = null;
export function _decode_ExtTime(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtTime) {
        _cached_decoder_for_ExtTime = __utils._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ExtTime(el);
}
export function _encode_ExtTime(
    value: ExtTime,
    elGetter: __utils.ASN1Encoder<ExtTime>
) {
    if (!_cached_encoder_for_ExtTime) {
        _cached_encoder_for_ExtTime = __utils._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ExtTime(value, elGetter);
}

export const tsp_ext_time: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* time */ 6,
]);

// TODO: ObjectAssignment: extPublication

export class PublicationInfo {
    constructor(
        readonly pubTime: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly pubId: asn1.OPTIONAL<GeneralName>,
        readonly pubChains: asn1.OPTIONAL<Chains>,
        readonly sourceId: asn1.OPTIONAL<GeneralName>
    ) {}
}
export const _root_component_type_list_1_spec_for_PublicationInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pubTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pubId",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pubChains",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sourceId",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PublicationInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PublicationInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PublicationInfo: __utils.ASN1Decoder<
    PublicationInfo
> | null = null;
let _cached_encoder_for_PublicationInfo: __utils.ASN1Encoder<
    PublicationInfo
> | null = null;
export function _decode_PublicationInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PublicationInfo) {
        _cached_decoder_for_PublicationInfo = function (
            el: asn1.ASN1Element
        ): PublicationInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pubTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let pubId: asn1.OPTIONAL<GeneralName>;
            let pubChains: asn1.OPTIONAL<Chains>;
            let sourceId: asn1.OPTIONAL<GeneralName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pubTime: (_el: asn1.ASN1Element): void => {
                    pubTime = __utils._decodeGeneralizedTime(_el);
                },
                pubId: (_el: asn1.ASN1Element): void => {
                    pubId = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                pubChains: (_el: asn1.ASN1Element): void => {
                    pubChains = __utils._decode_implicit<Chains>(
                        () => _decode_Chains
                    )(_el);
                },
                sourceId: (_el: asn1.ASN1Element): void => {
                    sourceId = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PublicationInfo,
                _extension_additions_list_spec_for_PublicationInfo,
                _root_component_type_list_2_spec_for_PublicationInfo,
                undefined
            );
            return new PublicationInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                pubTime,
                pubId,
                pubChains,
                sourceId
            );
        };
    }
    return _cached_decoder_for_PublicationInfo(el);
}
export function _encode_PublicationInfo(
    value: PublicationInfo,
    elGetter: __utils.ASN1Encoder<PublicationInfo>
) {
    if (!_cached_encoder_for_PublicationInfo) {
        _cached_encoder_for_PublicationInfo = function (
            value: PublicationInfo,
            elGetter: __utils.ASN1Encoder<PublicationInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.pubTime === undefined
                            ? undefined
                            : __utils._encodeGeneralizedTime(
                                  value.pubTime,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.pubId === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_GeneralName,
                                  __utils.BER
                              )(value.pubId, __utils.BER),
                        /* IF_ABSENT  */ value.pubChains === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Chains,
                                  __utils.BER
                              )(value.pubChains, __utils.BER),
                        /* IF_ABSENT  */ value.sourceId === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_GeneralName,
                                  __utils.BER
                              )(value.sourceId, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PublicationInfo(value, elGetter);
}

export type ExtPublication = PublicationInfo[]; // SequenceOfType
let _cached_decoder_for_ExtPublication: __utils.ASN1Decoder<
    ExtPublication
> | null = null;
let _cached_encoder_for_ExtPublication: __utils.ASN1Encoder<
    ExtPublication
> | null = null;
export function _decode_ExtPublication(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtPublication) {
        _cached_decoder_for_ExtPublication = __utils._decodeSequenceOf<
            PublicationInfo
        >(() => _decode_PublicationInfo);
    }
    return _cached_decoder_for_ExtPublication(el);
}
export function _encode_ExtPublication(
    value: ExtPublication,
    elGetter: __utils.ASN1Encoder<ExtPublication>
) {
    if (!_cached_encoder_for_ExtPublication) {
        _cached_encoder_for_ExtPublication = __utils._encodeSequenceOf<
            PublicationInfo
        >(() => _encode_PublicationInfo, __utils.BER);
    }
    return _cached_encoder_for_ExtPublication(value, elGetter);
}

export const tsp_ext_publication: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* standard */ 0,
    /* time-stamp */ 18014,
    /* lt */ 3,
    /* publication */ 7,
]);

export const id_merkle_chain: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-95 */ 95,
    /* ids */ 1,
    /* merkle-chain */ 1,
]);

// TODO: ObjectAssignment: merkle-chain

export type HashFunction = DigestAlgorithmIdentifier; // DefinedType
let _cached_decoder_for_HashFunction: __utils.ASN1Decoder<
    HashFunction
> | null = null;
let _cached_encoder_for_HashFunction: __utils.ASN1Encoder<
    HashFunction
> | null = null;
export function _decode_HashFunction(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashFunction) {
        _cached_decoder_for_HashFunction = _decode_DigestAlgorithmIdentifier;
    }
    return _cached_decoder_for_HashFunction(el);
}
export function _encode_HashFunction(
    value: HashFunction,
    elGetter: __utils.ASN1Encoder<HashFunction>
) {
    if (!_cached_encoder_for_HashFunction) {
        _cached_encoder_for_HashFunction = _encode_DigestAlgorithmIdentifier;
    }
    return _cached_encoder_for_HashFunction(value, elGetter);
}

export type MerkleChainParms = HashFunction[]; // SequenceOfType
let _cached_decoder_for_MerkleChainParms: __utils.ASN1Decoder<
    MerkleChainParms
> | null = null;
let _cached_encoder_for_MerkleChainParms: __utils.ASN1Encoder<
    MerkleChainParms
> | null = null;
export function _decode_MerkleChainParms(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MerkleChainParms) {
        _cached_decoder_for_MerkleChainParms = __utils._decodeSequenceOf<
            HashFunction
        >(() => _decode_HashFunction);
    }
    return _cached_decoder_for_MerkleChainParms(el);
}
export function _encode_MerkleChainParms(
    value: MerkleChainParms,
    elGetter: __utils.ASN1Encoder<MerkleChainParms>
) {
    if (!_cached_encoder_for_MerkleChainParms) {
        _cached_encoder_for_MerkleChainParms = __utils._encodeSequenceOf<
            HashFunction
        >(() => _encode_HashFunction, __utils.BER);
    }
    return _cached_encoder_for_MerkleChainParms(value, elGetter);
}

export class EntityInfo {
    constructor(
        readonly entityName: asn1.OPTIONAL<asn1.UTF8String>,
        readonly entityID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>,
        readonly entityOption: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_EntityInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "entityName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entityID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entityOption",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EntityInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EntityInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EntityInfo: __utils.ASN1Decoder<
    EntityInfo
> | null = null;
let _cached_encoder_for_EntityInfo: __utils.ASN1Encoder<
    EntityInfo
> | null = null;
export function _decode_EntityInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntityInfo) {
        _cached_decoder_for_EntityInfo = function (
            el: asn1.ASN1Element
        ): EntityInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entityName: asn1.OPTIONAL<asn1.UTF8String>;
            let entityID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let entityOption: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                entityName: (_el: asn1.ASN1Element): void => {
                    entityName = __utils._decodeUTF8String(_el);
                },
                entityID: (_el: asn1.ASN1Element): void => {
                    entityID = __utils._decodeObjectIdentifier(_el);
                },
                entityOption: (_el: asn1.ASN1Element): void => {
                    entityOption = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EntityInfo,
                _extension_additions_list_spec_for_EntityInfo,
                _root_component_type_list_2_spec_for_EntityInfo,
                undefined
            );
            return new EntityInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                entityName,
                entityID,
                entityOption
            );
        };
    }
    return _cached_decoder_for_EntityInfo(el);
}
export function _encode_EntityInfo(
    value: EntityInfo,
    elGetter: __utils.ASN1Encoder<EntityInfo>
) {
    if (!_cached_encoder_for_EntityInfo) {
        _cached_encoder_for_EntityInfo = function (
            value: EntityInfo,
            elGetter: __utils.ASN1Encoder<EntityInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.entityName === undefined
                            ? undefined
                            : __utils._encodeUTF8String(
                                  value.entityName,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.entityID === undefined
                            ? undefined
                            : __utils._encodeObjectIdentifier(
                                  value.entityID,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.entityOption === undefined
                            ? undefined
                            : __utils._encodeOctetString(
                                  value.entityOption,
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
    return _cached_encoder_for_EntityInfo(value, elGetter);
}

export class LeapSecond {
    constructor(
        readonly leapDay: asn1.GeneralizedTime,
        readonly action: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_LeapSecond: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "leapDay",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "action",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_LeapSecond: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_LeapSecond: __utils.ComponentSpec[] = [];
let _cached_decoder_for_LeapSecond: __utils.ASN1Decoder<
    LeapSecond
> | null = null;
let _cached_encoder_for_LeapSecond: __utils.ASN1Encoder<
    LeapSecond
> | null = null;
export function _decode_LeapSecond(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LeapSecond) {
        _cached_decoder_for_LeapSecond = function (
            el: asn1.ASN1Element
        ): LeapSecond {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "LeapSecond contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "leapDay";
            sequence[1].name = "action";
            let leapDay!: asn1.GeneralizedTime;
            let action!: asn1.INTEGER;
            leapDay = __utils._decodeGeneralizedTime(sequence[0]);
            action = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new LeapSecond(leapDay, action);
        };
    }
    return _cached_decoder_for_LeapSecond(el);
}
export function _encode_LeapSecond(
    value: LeapSecond,
    elGetter: __utils.ASN1Encoder<LeapSecond>
) {
    if (!_cached_encoder_for_LeapSecond) {
        _cached_encoder_for_LeapSecond = function (
            value: LeapSecond,
            elGetter: __utils.ASN1Encoder<LeapSecond>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.leapDay,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.action,
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
    return _cached_encoder_for_LeapSecond(value, elGetter);
}

export class TimingMetrics {
    constructor(
        readonly ntpTime: asn1.GeneralizedTime,
        readonly offset: Accuracy,
        readonly delay: Accuracy,
        readonly leapSecond: asn1.OPTIONAL<LeapSecond>
    ) {}
}
export const _root_component_type_list_1_spec_for_TimingMetrics: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ntpTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "offset",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "delay",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "leapSecond",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimingMetrics: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimingMetrics: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimingMetrics: __utils.ASN1Decoder<
    TimingMetrics
> | null = null;
let _cached_encoder_for_TimingMetrics: __utils.ASN1Encoder<
    TimingMetrics
> | null = null;
export function _decode_TimingMetrics(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimingMetrics) {
        _cached_decoder_for_TimingMetrics = function (
            el: asn1.ASN1Element
        ): TimingMetrics {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ntpTime!: asn1.GeneralizedTime;
            let offset!: Accuracy;
            let delay!: Accuracy;
            let leapSecond: asn1.OPTIONAL<LeapSecond>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                ntpTime: (_el: asn1.ASN1Element): void => {
                    ntpTime = __utils._decodeGeneralizedTime(_el);
                },
                offset: (_el: asn1.ASN1Element): void => {
                    offset = _decode_Accuracy(_el);
                },
                delay: (_el: asn1.ASN1Element): void => {
                    delay = _decode_Accuracy(_el);
                },
                leapSecond: (_el: asn1.ASN1Element): void => {
                    leapSecond = _decode_LeapSecond(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimingMetrics,
                _extension_additions_list_spec_for_TimingMetrics,
                _root_component_type_list_2_spec_for_TimingMetrics,
                undefined
            );
            return new TimingMetrics /* SEQUENCE_CONSTRUCTOR_CALL */(
                ntpTime,
                offset,
                delay,
                leapSecond
            );
        };
    }
    return _cached_decoder_for_TimingMetrics(el);
}
export function _encode_TimingMetrics(
    value: TimingMetrics,
    elGetter: __utils.ASN1Encoder<TimingMetrics>
) {
    if (!_cached_encoder_for_TimingMetrics) {
        _cached_encoder_for_TimingMetrics = function (
            value: TimingMetrics,
            elGetter: __utils.ASN1Encoder<TimingMetrics>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.ntpTime,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Accuracy(
                            value.offset,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Accuracy(
                            value.delay,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.leapSecond === undefined
                            ? undefined
                            : _encode_LeapSecond(value.leapSecond, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimingMetrics(value, elGetter);
}

export class TimeCalibrationReport {
    constructor(
        readonly version: Version,
        readonly tseInfo: EntityInfo,
        readonly tsaInfo: EntityInfo,
        readonly dutInfo: asn1.OPTIONAL<EntityInfo>,
        readonly timingMetrics: TimingMetrics
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeCalibrationReport: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tseInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tsaInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "dutInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timingMetrics",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeCalibrationReport: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeCalibrationReport: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeCalibrationReport: __utils.ASN1Decoder<
    TimeCalibrationReport
> | null = null;
let _cached_encoder_for_TimeCalibrationReport: __utils.ASN1Encoder<
    TimeCalibrationReport
> | null = null;
export function _decode_TimeCalibrationReport(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeCalibrationReport) {
        _cached_decoder_for_TimeCalibrationReport = function (
            el: asn1.ASN1Element
        ): TimeCalibrationReport {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let tseInfo!: EntityInfo;
            let tsaInfo!: EntityInfo;
            let dutInfo: asn1.OPTIONAL<EntityInfo>;
            let timingMetrics!: TimingMetrics;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                tseInfo: (_el: asn1.ASN1Element): void => {
                    tseInfo = _decode_EntityInfo(_el);
                },
                tsaInfo: (_el: asn1.ASN1Element): void => {
                    tsaInfo = _decode_EntityInfo(_el);
                },
                dutInfo: (_el: asn1.ASN1Element): void => {
                    dutInfo = __utils._decode_implicit<EntityInfo>(
                        () => _decode_EntityInfo
                    )(_el);
                },
                timingMetrics: (_el: asn1.ASN1Element): void => {
                    timingMetrics = _decode_TimingMetrics(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeCalibrationReport,
                _extension_additions_list_spec_for_TimeCalibrationReport,
                _root_component_type_list_2_spec_for_TimeCalibrationReport,
                undefined
            );
            return new TimeCalibrationReport /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                tseInfo,
                tsaInfo,
                dutInfo,
                timingMetrics
            );
        };
    }
    return _cached_decoder_for_TimeCalibrationReport(el);
}
export function _encode_TimeCalibrationReport(
    value: TimeCalibrationReport,
    elGetter: __utils.ASN1Encoder<TimeCalibrationReport>
) {
    if (!_cached_encoder_for_TimeCalibrationReport) {
        _cached_encoder_for_TimeCalibrationReport = function (
            value: TimeCalibrationReport,
            elGetter: __utils.ASN1Encoder<TimeCalibrationReport>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EntityInfo(
                            value.tseInfo,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_EntityInfo(
                            value.tsaInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.dutInfo === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_EntityInfo,
                                  __utils.BER
                              )(value.dutInfo, __utils.BER),
                        /* REQUIRED   */ _encode_TimingMetrics(
                            value.timingMetrics,
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
    return _cached_encoder_for_TimeCalibrationReport(value, elGetter);
}

// TODO: ObjectClassAssignment: OIDS

// TODO: ObjectClassAssignment: CONTENTS

// TODO: ObjectClassAssignment: METHOD

/* END_MODULE TrustedTimeStamp */
