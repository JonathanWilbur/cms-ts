/*
    BEGIN_MODULE CMSProfileAttributes
    OID: itu-t.recommendation.x.cms-profile.module.cMSProfileAttributes.version1
    IRI: /ITU-T/Recommendation/X/CMS-Profile/Module/CMSProfileAttributes/Version1
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import { itu_t } from "./__utils";

import {
    DigestedData,
    _decode_SignerInfo,
    _encode_SignerInfo,
    _decode_SignerInfos,
    _encode_SignerInfos,
    _decode_DigestedData,
    _encode_DigestedData,
} from "./CryptographicMessageSyntax-2010";

import {
    TimeStampToken,
    _decode_TimeStampToken,
    _encode_TimeStampToken,
} from "./TrustedTimeStamp";

// TODO: ObjectAssignment: aa-signerInfo

export const id_signerInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* signerInfo */ 0,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-signerInfos

export const id_signerInfos: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* signerInfos */ 1,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-contentLocation

export const id_contentLocation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* contentLocation */ 2,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-contentLocations

export type URI = asn1.UTF8String; // UTF8String
let _cached_decoder_for_URI: __utils.ASN1Decoder<URI> | null = null;
let _cached_encoder_for_URI: __utils.ASN1Encoder<URI> | null = null;
export function _decode_URI(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_URI) {
        _cached_decoder_for_URI = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_URI(el);
}
export function _encode_URI(value: URI, elGetter: __utils.ASN1Encoder<URI>) {
    if (!_cached_encoder_for_URI) {
        _cached_encoder_for_URI = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_URI(value, elGetter);
}

export type URIs = URI[]; // SequenceOfType
let _cached_decoder_for_URIs: __utils.ASN1Decoder<URIs> | null = null;
let _cached_encoder_for_URIs: __utils.ASN1Encoder<URIs> | null = null;
export function _decode_URIs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_URIs) {
        _cached_decoder_for_URIs = __utils._decodeSequenceOf<URI>(
            () => _decode_URI
        );
    }
    return _cached_decoder_for_URIs(el);
}
export function _encode_URIs(value: URIs, elGetter: __utils.ASN1Encoder<URIs>) {
    if (!_cached_encoder_for_URIs) {
        _cached_encoder_for_URIs = __utils._encodeSequenceOf<URI>(
            () => _encode_URI,
            __utils.BER
        );
    }
    return _cached_encoder_for_URIs(value, elGetter);
}

export const id_contentLocations: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* contentLocations */ 3,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-precedingBlock

export const id_precedingBlock: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* precedingBlock */ 4,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-timeStamped

export type TimeStamp =
    | { timeStampToken: TimeStampToken } /* CHOICE_ALT_ROOT */
    | { localTimeStamp: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TimeStamp: __utils.ASN1Decoder<TimeStamp> | null = null;
let _cached_encoder_for_TimeStamp: __utils.ASN1Encoder<TimeStamp> | null = null;
export function _decode_TimeStamp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStamp) {
        _cached_decoder_for_TimeStamp = __utils._decode_extensible_choice<
            TimeStamp
        >({
            "CONTEXT 0": ["timeStampToken", _decode_TimeStampToken],
            "CONTEXT 1": ["localTimeStamp", __utils._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_TimeStamp(el);
}
export function _encode_TimeStamp(
    value: TimeStamp,
    elGetter: __utils.ASN1Encoder<TimeStamp>
) {
    if (!_cached_encoder_for_TimeStamp) {
        _cached_encoder_for_TimeStamp = __utils._encode_choice<TimeStamp>(
            {
                timeStampToken: _encode_TimeStampToken,
                localTimeStamp: __utils._encodeGeneralizedTime,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TimeStamp(value, elGetter);
}

export class TimeStamped {
    constructor(
        readonly timeStampValue: TimeStamp,
        readonly timeStampService: asn1.OPTIONAL<URI>
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeStamped: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "timeStampValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStampService",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStamped: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStamped: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStamped: __utils.ASN1Decoder<
    TimeStamped
> | null = null;
let _cached_encoder_for_TimeStamped: __utils.ASN1Encoder<
    TimeStamped
> | null = null;
export function _decode_TimeStamped(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStamped) {
        _cached_decoder_for_TimeStamped = function (
            el: asn1.ASN1Element
        ): TimeStamped {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let timeStampValue!: TimeStamp;
            let timeStampService: asn1.OPTIONAL<URI>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                timeStampValue: (_el: asn1.ASN1Element): void => {
                    timeStampValue = _decode_TimeStamp(_el);
                },
                timeStampService: (_el: asn1.ASN1Element): void => {
                    timeStampService = _decode_URI(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStamped,
                _extension_additions_list_spec_for_TimeStamped,
                _root_component_type_list_2_spec_for_TimeStamped,
                undefined
            );
            return new TimeStamped /* SEQUENCE_CONSTRUCTOR_CALL */(
                timeStampValue,
                timeStampService
            );
        };
    }
    return _cached_decoder_for_TimeStamped(el);
}
export function _encode_TimeStamped(
    value: TimeStamped,
    elGetter: __utils.ASN1Encoder<TimeStamped>
) {
    if (!_cached_encoder_for_TimeStamped) {
        _cached_encoder_for_TimeStamped = function (
            value: TimeStamped,
            elGetter: __utils.ASN1Encoder<TimeStamped>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeStamp(
                            value.timeStampValue,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.timeStampService === undefined
                            ? undefined
                            : _encode_URI(value.timeStampService, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimeStamped(value, elGetter);
}

export const id_timeStamped: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* timeStamped */ 5,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-sidechains

export type RFID = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_RFID: __utils.ASN1Decoder<RFID> | null = null;
let _cached_encoder_for_RFID: __utils.ASN1Encoder<RFID> | null = null;
export function _decode_RFID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RFID) {
        _cached_decoder_for_RFID = __utils._decodeOctetString;
    }
    return _cached_decoder_for_RFID(el);
}
export function _encode_RFID(value: RFID, elGetter: __utils.ASN1Encoder<RFID>) {
    if (!_cached_encoder_for_RFID) {
        _cached_encoder_for_RFID = __utils._encodeOctetString;
    }
    return _cached_encoder_for_RFID(value, elGetter);
}

export type GPS = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_GPS: __utils.ASN1Decoder<GPS> | null = null;
let _cached_encoder_for_GPS: __utils.ASN1Encoder<GPS> | null = null;
export function _decode_GPS(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GPS) {
        _cached_decoder_for_GPS = __utils._decodeOctetString;
    }
    return _cached_decoder_for_GPS(el);
}
export function _encode_GPS(value: GPS, elGetter: __utils.ASN1Encoder<GPS>) {
    if (!_cached_encoder_for_GPS) {
        _cached_encoder_for_GPS = __utils._encodeOctetString;
    }
    return _cached_encoder_for_GPS(value, elGetter);
}

export type Address = asn1.UTF8String; // UTF8String
let _cached_decoder_for_Address: __utils.ASN1Decoder<Address> | null = null;
let _cached_encoder_for_Address: __utils.ASN1Encoder<Address> | null = null;
export function _decode_Address(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Address) {
        _cached_decoder_for_Address = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_Address(el);
}
export function _encode_Address(
    value: Address,
    elGetter: __utils.ASN1Encoder<Address>
) {
    if (!_cached_encoder_for_Address) {
        _cached_encoder_for_Address = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_Address(value, elGetter);
}

export type DBRecord = asn1.UTF8String; // UTF8String
let _cached_decoder_for_DBRecord: __utils.ASN1Decoder<DBRecord> | null = null;
let _cached_encoder_for_DBRecord: __utils.ASN1Encoder<DBRecord> | null = null;
export function _decode_DBRecord(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DBRecord) {
        _cached_decoder_for_DBRecord = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_DBRecord(el);
}
export function _encode_DBRecord(
    value: DBRecord,
    elGetter: __utils.ASN1Encoder<DBRecord>
) {
    if (!_cached_encoder_for_DBRecord) {
        _cached_encoder_for_DBRecord = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_DBRecord(value, elGetter);
}

export type Pointer =
    | { uri: URI } /* CHOICE_ALT_ROOT */
    | { rfid: RFID } /* CHOICE_ALT_ROOT */
    | { gps: GPS } /* CHOICE_ALT_ROOT */
    | { address: Address } /* CHOICE_ALT_ROOT */
    | { dbRecord: DBRecord } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Pointer: __utils.ASN1Decoder<Pointer> | null = null;
let _cached_encoder_for_Pointer: __utils.ASN1Encoder<Pointer> | null = null;
export function _decode_Pointer(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Pointer) {
        _cached_decoder_for_Pointer = __utils._decode_extensible_choice<
            Pointer
        >({
            "CONTEXT 0": ["uri", _decode_URI],
            "CONTEXT 1": ["rfid", _decode_RFID],
            "CONTEXT 2": ["gps", _decode_GPS],
            "CONTEXT 3": ["address", _decode_Address],
            "CONTEXT 4": ["dbRecord", _decode_DBRecord],
        });
    }
    return _cached_decoder_for_Pointer(el);
}
export function _encode_Pointer(
    value: Pointer,
    elGetter: __utils.ASN1Encoder<Pointer>
) {
    if (!_cached_encoder_for_Pointer) {
        _cached_encoder_for_Pointer = __utils._encode_choice<Pointer>(
            {
                uri: _encode_URI,
                rfid: _encode_RFID,
                gps: _encode_GPS,
                address: _encode_Address,
                dbRecord: _encode_DBRecord,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Pointer(value, elGetter);
}

export type Pointers = Pointer[]; // SequenceOfType
let _cached_decoder_for_Pointers: __utils.ASN1Decoder<Pointers> | null = null;
let _cached_encoder_for_Pointers: __utils.ASN1Encoder<Pointers> | null = null;
export function _decode_Pointers(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Pointers) {
        _cached_decoder_for_Pointers = __utils._decodeSequenceOf<Pointer>(
            () => _decode_Pointer
        );
    }
    return _cached_decoder_for_Pointers(el);
}
export function _encode_Pointers(
    value: Pointers,
    elGetter: __utils.ASN1Encoder<Pointers>
) {
    if (!_cached_encoder_for_Pointers) {
        _cached_encoder_for_Pointers = __utils._encodeSequenceOf<Pointer>(
            () => _encode_Pointer,
            __utils.BER
        );
    }
    return _cached_encoder_for_Pointers(value, elGetter);
}

export class HashPointer {
    constructor(
        readonly hash: asn1.OPTIONAL<DigestedData>,
        readonly pointers: asn1.OPTIONAL<Pointers>
    ) {}
}
export const _root_component_type_list_1_spec_for_HashPointer: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hash",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pointers",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_HashPointer: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_HashPointer: __utils.ComponentSpec[] = [];
let _cached_decoder_for_HashPointer: __utils.ASN1Decoder<
    HashPointer
> | null = null;
let _cached_encoder_for_HashPointer: __utils.ASN1Encoder<
    HashPointer
> | null = null;
export function _decode_HashPointer(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashPointer) {
        _cached_decoder_for_HashPointer = function (
            el: asn1.ASN1Element
        ): HashPointer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hash: asn1.OPTIONAL<DigestedData>;
            let pointers: asn1.OPTIONAL<Pointers>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hash: (_el: asn1.ASN1Element): void => {
                    hash = _decode_DigestedData(_el);
                },
                pointers: (_el: asn1.ASN1Element): void => {
                    pointers = _decode_Pointers(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HashPointer,
                _extension_additions_list_spec_for_HashPointer,
                _root_component_type_list_2_spec_for_HashPointer,
                undefined
            );
            return new HashPointer /* SEQUENCE_CONSTRUCTOR_CALL */(
                hash,
                pointers
            );
        };
    }
    return _cached_decoder_for_HashPointer(el);
}
export function _encode_HashPointer(
    value: HashPointer,
    elGetter: __utils.ASN1Encoder<HashPointer>
) {
    if (!_cached_encoder_for_HashPointer) {
        _cached_encoder_for_HashPointer = function (
            value: HashPointer,
            elGetter: __utils.ASN1Encoder<HashPointer>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.hash === undefined
                            ? undefined
                            : _encode_DigestedData(value.hash, __utils.BER),
                        /* IF_ABSENT  */ value.pointers === undefined
                            ? undefined
                            : _encode_Pointers(value.pointers, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_HashPointer(value, elGetter);
}

export type Sidechain = HashPointer; // DefinedType
let _cached_decoder_for_Sidechain: __utils.ASN1Decoder<Sidechain> | null = null;
let _cached_encoder_for_Sidechain: __utils.ASN1Encoder<Sidechain> | null = null;
export function _decode_Sidechain(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Sidechain) {
        _cached_decoder_for_Sidechain = _decode_HashPointer;
    }
    return _cached_decoder_for_Sidechain(el);
}
export function _encode_Sidechain(
    value: Sidechain,
    elGetter: __utils.ASN1Encoder<Sidechain>
) {
    if (!_cached_encoder_for_Sidechain) {
        _cached_encoder_for_Sidechain = _encode_HashPointer;
    }
    return _cached_encoder_for_Sidechain(value, elGetter);
}

export type Sidechains = Sidechain[]; // SequenceOfType
let _cached_decoder_for_Sidechains: __utils.ASN1Decoder<
    Sidechains
> | null = null;
let _cached_encoder_for_Sidechains: __utils.ASN1Encoder<
    Sidechains
> | null = null;
export function _decode_Sidechains(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Sidechains) {
        _cached_decoder_for_Sidechains = __utils._decodeSequenceOf<Sidechain>(
            () => _decode_Sidechain
        );
    }
    return _cached_decoder_for_Sidechains(el);
}
export function _encode_Sidechains(
    value: Sidechains,
    elGetter: __utils.ASN1Encoder<Sidechains>
) {
    if (!_cached_encoder_for_Sidechains) {
        _cached_encoder_for_Sidechains = __utils._encodeSequenceOf<Sidechain>(
            () => _encode_Sidechain,
            __utils.BER
        );
    }
    return _cached_encoder_for_Sidechains(value, elGetter);
}

export const id_sidechains: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* sidechains */ 6,
    ],
    itu_t
);

// TODO: ObjectAssignment: aa-parentBlock

export type ParentBlock = HashPointer; // DefinedType
let _cached_decoder_for_ParentBlock: __utils.ASN1Decoder<
    ParentBlock
> | null = null;
let _cached_encoder_for_ParentBlock: __utils.ASN1Encoder<
    ParentBlock
> | null = null;
export function _decode_ParentBlock(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ParentBlock) {
        _cached_decoder_for_ParentBlock = _decode_HashPointer;
    }
    return _cached_decoder_for_ParentBlock(el);
}
export function _encode_ParentBlock(
    value: ParentBlock,
    elGetter: __utils.ASN1Encoder<ParentBlock>
) {
    if (!_cached_encoder_for_ParentBlock) {
        _cached_encoder_for_ParentBlock = _encode_HashPointer;
    }
    return _cached_encoder_for_ParentBlock(value, elGetter);
}

export const id_parentBlock: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* parentBlock */ 7,
    ],
    itu_t
);

// TODO: ObjectSetAssignment: CMSProfileAttributes

/* END_MODULE CMSProfileAttributes */
