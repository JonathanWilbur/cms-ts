/*
    BEGIN_MODULE CMSDBKeyManagement
    OID: itu-t.recommendation.x.cms-profile.module.dBKeyManagement.version1
    IRI: /ITU-T/Recommendation/X/CMS-Profile/Module/DBKeyManagement/Version1
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
    MessageAuthenticationCodeAlgorithm,
    Attribute,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
    _decode_Attribute,
    _encode_Attribute,
} from "./CryptographicMessageSyntax-2010";

// TODO: ObjectSetAssignment: DB-Encryption-Key-Management

// TODO: ObjectClassAssignment: KEY-MANAGEMENT

// TODO: ObjectAssignment: dbekmRecipientInfo

export type MasterKeyAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_MasterKeyAlgorithmIdentifier: __utils.ASN1Decoder<
    MasterKeyAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_MasterKeyAlgorithmIdentifier: __utils.ASN1Encoder<
    MasterKeyAlgorithmIdentifier
> | null = null;
export function _decode_MasterKeyAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_decoder_for_MasterKeyAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MasterKeyAlgorithmIdentifier(el);
}
export function _encode_MasterKeyAlgorithmIdentifier(
    value: MasterKeyAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<MasterKeyAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MasterKeyAlgorithmIdentifier) {
        _cached_encoder_for_MasterKeyAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MasterKeyAlgorithmIdentifier(value, elGetter);
}

export class MasterKeyEncryptedHMACkey {
    constructor(
        readonly masterKeyAID: asn1.OPTIONAL<MasterKeyAlgorithmIdentifier>,
        readonly hmacKeyAID: asn1.OPTIONAL<MessageAuthenticationCodeAlgorithm>,
        readonly encryptedKey: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "masterKeyAID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hmacKeyAID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MasterKeyEncryptedHMACkey: __utils.ASN1Decoder<
    MasterKeyEncryptedHMACkey
> | null = null;
let _cached_encoder_for_MasterKeyEncryptedHMACkey: __utils.ASN1Encoder<
    MasterKeyEncryptedHMACkey
> | null = null;
export function _decode_MasterKeyEncryptedHMACkey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MasterKeyEncryptedHMACkey) {
        _cached_decoder_for_MasterKeyEncryptedHMACkey = function (
            el: asn1.ASN1Element
        ): MasterKeyEncryptedHMACkey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let masterKeyAID: asn1.OPTIONAL<MasterKeyAlgorithmIdentifier>;
            let hmacKeyAID: asn1.OPTIONAL<MessageAuthenticationCodeAlgorithm>;
            let encryptedKey!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                masterKeyAID: (_el: asn1.ASN1Element): void => {
                    masterKeyAID = _decode_MasterKeyAlgorithmIdentifier(_el);
                },
                hmacKeyAID: (_el: asn1.ASN1Element): void => {
                    hmacKeyAID = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
                },
                encryptedKey: (_el: asn1.ASN1Element): void => {
                    encryptedKey = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey,
                _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey,
                _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey,
                undefined
            );
            return new MasterKeyEncryptedHMACkey /* SEQUENCE_CONSTRUCTOR_CALL */(
                masterKeyAID,
                hmacKeyAID,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_MasterKeyEncryptedHMACkey(el);
}
export function _encode_MasterKeyEncryptedHMACkey(
    value: MasterKeyEncryptedHMACkey,
    elGetter: __utils.ASN1Encoder<MasterKeyEncryptedHMACkey>
) {
    if (!_cached_encoder_for_MasterKeyEncryptedHMACkey) {
        _cached_encoder_for_MasterKeyEncryptedHMACkey = function (
            value: MasterKeyEncryptedHMACkey,
            elGetter: __utils.ASN1Encoder<MasterKeyEncryptedHMACkey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.masterKeyAID === undefined
                            ? undefined
                            : _encode_MasterKeyAlgorithmIdentifier(
                                  value.masterKeyAID,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.hmacKeyAID === undefined
                            ? undefined
                            : _encode_MessageAuthenticationCodeAlgorithm(
                                  value.hmacKeyAID,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.encryptedKey,
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
    return _cached_encoder_for_MasterKeyEncryptedHMACkey(value, elGetter);
}

// TODO: ObjectClassAssignment: DBEKM

export class UniqueID {
    constructor(
        readonly name: asn1.OBJECT_IDENTIFIER,
        readonly type_: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_UniqueID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "type",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UniqueID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UniqueID: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UniqueID: __utils.ASN1Decoder<UniqueID> | null = null;
let _cached_encoder_for_UniqueID: __utils.ASN1Encoder<UniqueID> | null = null;
export function _decode_UniqueID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniqueID) {
        _cached_decoder_for_UniqueID = function (
            el: asn1.ASN1Element
        ): UniqueID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: asn1.OBJECT_IDENTIFIER;
            let type_: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decodeObjectIdentifier(_el);
                },
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniqueID,
                _extension_additions_list_spec_for_UniqueID,
                _root_component_type_list_2_spec_for_UniqueID,
                undefined
            );
            return new UniqueID /* SEQUENCE_CONSTRUCTOR_CALL */(name, type_);
        };
    }
    return _cached_decoder_for_UniqueID(el);
}
export function _encode_UniqueID(
    value: UniqueID,
    elGetter: __utils.ASN1Encoder<UniqueID>
) {
    if (!_cached_encoder_for_UniqueID) {
        _cached_encoder_for_UniqueID = function (
            value: UniqueID,
            elGetter: __utils.ASN1Encoder<UniqueID>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.name,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.type_ === undefined
                            ? undefined
                            : __utils._encodeAny(value.type_, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_UniqueID(value, elGetter);
}

export type UniqueIdentifier = UniqueID; // DefinedType
let _cached_decoder_for_UniqueIdentifier: __utils.ASN1Decoder<
    UniqueIdentifier
> | null = null;
let _cached_encoder_for_UniqueIdentifier: __utils.ASN1Encoder<
    UniqueIdentifier
> | null = null;
export function _decode_UniqueIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniqueIdentifier) {
        _cached_decoder_for_UniqueIdentifier = _decode_UniqueID;
    }
    return _cached_decoder_for_UniqueIdentifier(el);
}
export function _encode_UniqueIdentifier(
    value: UniqueIdentifier,
    elGetter: __utils.ASN1Encoder<UniqueIdentifier>
) {
    if (!_cached_encoder_for_UniqueIdentifier) {
        _cached_encoder_for_UniqueIdentifier = _encode_UniqueID;
    }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
}

export class DatabaseServerToKeyManager {
    constructor(
        readonly encryptedKey: MasterKeyEncryptedHMACkey,
        readonly uniqueID: asn1.OPTIONAL<UniqueIdentifier>
    ) {}
}
export const _root_component_type_list_1_spec_for_DatabaseServerToKeyManager: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "encryptedKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "uniqueID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DatabaseServerToKeyManager: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DatabaseServerToKeyManager: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DatabaseServerToKeyManager: __utils.ASN1Decoder<
    DatabaseServerToKeyManager
> | null = null;
let _cached_encoder_for_DatabaseServerToKeyManager: __utils.ASN1Encoder<
    DatabaseServerToKeyManager
> | null = null;
export function _decode_DatabaseServerToKeyManager(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DatabaseServerToKeyManager) {
        _cached_decoder_for_DatabaseServerToKeyManager = function (
            el: asn1.ASN1Element
        ): DatabaseServerToKeyManager {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let encryptedKey!: MasterKeyEncryptedHMACkey;
            let uniqueID: asn1.OPTIONAL<UniqueIdentifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                encryptedKey: (_el: asn1.ASN1Element): void => {
                    encryptedKey = _decode_MasterKeyEncryptedHMACkey(_el);
                },
                uniqueID: (_el: asn1.ASN1Element): void => {
                    uniqueID = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DatabaseServerToKeyManager,
                _extension_additions_list_spec_for_DatabaseServerToKeyManager,
                _root_component_type_list_2_spec_for_DatabaseServerToKeyManager,
                undefined
            );
            return new DatabaseServerToKeyManager /* SEQUENCE_CONSTRUCTOR_CALL */(
                encryptedKey,
                uniqueID
            );
        };
    }
    return _cached_decoder_for_DatabaseServerToKeyManager(el);
}
export function _encode_DatabaseServerToKeyManager(
    value: DatabaseServerToKeyManager,
    elGetter: __utils.ASN1Encoder<DatabaseServerToKeyManager>
) {
    if (!_cached_encoder_for_DatabaseServerToKeyManager) {
        _cached_encoder_for_DatabaseServerToKeyManager = function (
            value: DatabaseServerToKeyManager,
            elGetter: __utils.ASN1Encoder<DatabaseServerToKeyManager>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MasterKeyEncryptedHMACkey(
                            value.encryptedKey,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.uniqueID === undefined
                            ? undefined
                            : _encode_UniqueIdentifier(
                                  value.uniqueID,
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
    return _cached_encoder_for_DatabaseServerToKeyManager(value, elGetter);
}

export type DBEKMRecipientInfo =
    | { keyManager: MasterKeyEncryptedHMACkey } /* CHOICE_ALT_ROOT */
    | { server: DatabaseServerToKeyManager } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DBEKMRecipientInfo: __utils.ASN1Decoder<
    DBEKMRecipientInfo
> | null = null;
let _cached_encoder_for_DBEKMRecipientInfo: __utils.ASN1Encoder<
    DBEKMRecipientInfo
> | null = null;
export function _decode_DBEKMRecipientInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DBEKMRecipientInfo) {
        _cached_decoder_for_DBEKMRecipientInfo = __utils._decode_inextensible_choice<
            DBEKMRecipientInfo
        >({
            "CONTEXT 0": ["keyManager", _decode_MasterKeyEncryptedHMACkey],
            "CONTEXT 1": ["server", _decode_DatabaseServerToKeyManager],
        });
    }
    return _cached_decoder_for_DBEKMRecipientInfo(el);
}
export function _encode_DBEKMRecipientInfo(
    value: DBEKMRecipientInfo,
    elGetter: __utils.ASN1Encoder<DBEKMRecipientInfo>
) {
    if (!_cached_encoder_for_DBEKMRecipientInfo) {
        _cached_encoder_for_DBEKMRecipientInfo = __utils._encode_choice<
            DBEKMRecipientInfo
        >(
            {
                keyManager: _encode_MasterKeyEncryptedHMACkey,
                server: _encode_DatabaseServerToKeyManager,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_DBEKMRecipientInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: MasterKeyAlgorithms

// TODO: ObjectSetAssignment: SchemaIdentifier

// TODO: ObjectAssignment: simpleString

export type SimpleString = asn1.UTF8String; // UTF8String
let _cached_decoder_for_SimpleString: __utils.ASN1Decoder<
    SimpleString
> | null = null;
let _cached_encoder_for_SimpleString: __utils.ASN1Encoder<
    SimpleString
> | null = null;
export function _decode_SimpleString(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SimpleString) {
        _cached_decoder_for_SimpleString = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_SimpleString(el);
}
export function _encode_SimpleString(
    value: SimpleString,
    elGetter: __utils.ASN1Encoder<SimpleString>
) {
    if (!_cached_encoder_for_SimpleString) {
        _cached_encoder_for_SimpleString = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_SimpleString(value, elGetter);
}

export type DbEKMAttributeSet = Attribute[]; // SequenceOfType
let _cached_decoder_for_DbEKMAttributeSet: __utils.ASN1Decoder<
    DbEKMAttributeSet
> | null = null;
let _cached_encoder_for_DbEKMAttributeSet: __utils.ASN1Encoder<
    DbEKMAttributeSet
> | null = null;
export function _decode_DbEKMAttributeSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DbEKMAttributeSet) {
        _cached_decoder_for_DbEKMAttributeSet = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_DbEKMAttributeSet(el);
}
export function _encode_DbEKMAttributeSet(
    value: DbEKMAttributeSet,
    elGetter: __utils.ASN1Encoder<DbEKMAttributeSet>
) {
    if (!_cached_encoder_for_DbEKMAttributeSet) {
        _cached_encoder_for_DbEKMAttributeSet = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_DbEKMAttributeSet(value, elGetter);
}

// TODO: ObjectSetAssignment: DbEKMAttributes

// TODO: ObjectAssignment: uniqueIdentifier

/* END_MODULE CMSDBKeyManagement */
