/*
    BEGIN_MODULE AlgorithmInformation-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-algorithmInformation-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import { _decode_KeyUsage, _encode_KeyUsage } from "./PKIX1Implicit-2009";

export type ParamOptions = asn1.ENUMERATED;
export const ParamOptions_required: ParamOptions = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const ParamOptions_preferredPresent: ParamOptions = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const ParamOptions_preferredAbsent: ParamOptions = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const ParamOptions_absent: ParamOptions = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const ParamOptions_inheritable: ParamOptions = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const ParamOptions_optional: ParamOptions = 5; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ParamOptions: __utils.ASN1Decoder<
    ParamOptions
> | null = null;
let _cached_encoder_for_ParamOptions: __utils.ASN1Encoder<
    ParamOptions
> | null = null;
export function _decode_ParamOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ParamOptions) {
        _cached_decoder_for_ParamOptions = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_ParamOptions(el);
}
export function _encode_ParamOptions(
    value: ParamOptions,
    elGetter: __utils.ASN1Encoder<ParamOptions>
) {
    if (!_cached_encoder_for_ParamOptions) {
        _cached_encoder_for_ParamOptions = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_ParamOptions(value, elGetter);
}

// TODO: ObjectClassAssignment: DIGEST-ALGORITHM

// TODO: ObjectClassAssignment: PUBLIC-KEY

// TODO: ObjectClassAssignment: SMIME-CAPS

// TODO: ObjectClassAssignment: SIGNATURE-ALGORITHM

// TODO: ObjectClassAssignment: KEY-TRANSPORT

// TODO: ObjectClassAssignment: KEY-AGREE

// TODO: ObjectClassAssignment: KEY-WRAP

// TODO: ObjectClassAssignment: KEY-DERIVATION

// TODO: ObjectClassAssignment: MAC-ALGORITHM

// TODO: ObjectClassAssignment: CONTENT-ENCRYPTION

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
        __utils.hasAnyTag,
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
                _root_component_type_list_2_spec_for_AlgorithmIdentifier
            );
            return new AlgorithmIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ algorithm,
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
                            __utils.DER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : __utils._encodeAny(value.parameters, __utils.DER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.DER
            );
        };
    }
    return _cached_encoder_for_AlgorithmIdentifier(value, elGetter);
}

export class SMIMECapability {
    constructor(
        readonly capabilityID: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_SMIMECapability: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "capabilityID",
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
export const _root_component_type_list_2_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SMIMECapability: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SMIMECapability: __utils.ASN1Decoder<
    SMIMECapability
> | null = null;
let _cached_encoder_for_SMIMECapability: __utils.ASN1Encoder<
    SMIMECapability
> | null = null;
export function _decode_SMIMECapability(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SMIMECapability) {
        _cached_decoder_for_SMIMECapability = function (
            el: asn1.ASN1Element
        ): SMIMECapability {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let capabilityID!: asn1.OBJECT_IDENTIFIER;
            let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                capabilityID: (_el: asn1.ASN1Element): void => {
                    capabilityID = __utils._decodeObjectIdentifier(_el);
                },
                parameters: (_el: asn1.ASN1Element): void => {
                    parameters = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SMIMECapability,
                _extension_additions_list_spec_for_SMIMECapability,
                _root_component_type_list_2_spec_for_SMIMECapability,
                undefined
            );
            return new SMIMECapability /* SEQUENCE_CONSTRUCTOR_CALL */(
                capabilityID,
                parameters
            );
        };
    }
    return _cached_decoder_for_SMIMECapability(el);
}
export function _encode_SMIMECapability(
    value: SMIMECapability,
    elGetter: __utils.ASN1Encoder<SMIMECapability>
) {
    if (!_cached_encoder_for_SMIMECapability) {
        _cached_encoder_for_SMIMECapability = function (
            value: SMIMECapability,
            elGetter: __utils.ASN1Encoder<SMIMECapability>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.capabilityID,
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
    return _cached_encoder_for_SMIMECapability(value, elGetter);
}

export type SMIMECapabilities = SMIMECapability[]; // SequenceOfType
let _cached_decoder_for_SMIMECapabilities: __utils.ASN1Decoder<
    SMIMECapabilities
> | null = null;
let _cached_encoder_for_SMIMECapabilities: __utils.ASN1Encoder<
    SMIMECapabilities
> | null = null;
export function _decode_SMIMECapabilities(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SMIMECapabilities) {
        _cached_decoder_for_SMIMECapabilities = __utils._decodeSequenceOf<
            SMIMECapability
        >(() => _decode_SMIMECapability);
    }
    return _cached_decoder_for_SMIMECapabilities(el);
}
export function _encode_SMIMECapabilities(
    value: SMIMECapabilities,
    elGetter: __utils.ASN1Encoder<SMIMECapabilities>
) {
    if (!_cached_encoder_for_SMIMECapabilities) {
        _cached_encoder_for_SMIMECapabilities = __utils._encodeSequenceOf<
            SMIMECapability
        >(() => _encode_SMIMECapability, __utils.BER);
    }
    return _cached_encoder_for_SMIMECapabilities(value, elGetter);
}

/* END_MODULE AlgorithmInformation-2009 */
