/*
    BEGIN_MODULE CMSSigncryption
    OID: itu-t.recommendation.x.cms-profile.module.signcryption.version1
    IRI: /ITU-T/Recommendation/X/CMS-Profile/Module/Signcryption/Version1
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import { itu_t } from "./__utils";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";

import {
    Attributes,
    EncryptedContentInfo,
    SignatureAlgorithmIdentifier,
    SignatureValue,
    SignedAttributes,
    SignerIdentifier,
    Attribute,
    _decode_Attributes,
    _encode_Attributes,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
    _decode_SignatureValue,
    _encode_SignatureValue,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
    _decode_Attribute,
    _encode_Attribute,
} from "./CryptographicMessageSyntax-2010";
export {
    Attributes,
    EncryptedContentInfo,
    SignatureAlgorithmIdentifier,
    SignatureValue,
    SignedAttributes,
    SignerIdentifier,
    Attribute,
    _decode_Attributes,
    _encode_Attributes,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
    _decode_SignatureValue,
    _encode_SignatureValue,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
    _decode_Attribute,
    _encode_Attribute,
} from "./CryptographicMessageSyntax-2010";

export const id_signcryptedData: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* signcryption */ 0,
        /* data */ 0,
    ],
    itu_t
);

// TODO: ObjectAssignment: ct-SigncryptedData

export type CMSVersion = asn1.INTEGER;
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_CMSVersion: __utils.ASN1Decoder<
    CMSVersion
> | null = null;
let _cached_encoder_for_CMSVersion: __utils.ASN1Encoder<
    CMSVersion
> | null = null;
export function _decode_CMSVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CMSVersion) {
        _cached_decoder_for_CMSVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_CMSVersion(el);
}
export function _encode_CMSVersion(
    value: CMSVersion,
    elGetter: __utils.ASN1Encoder<CMSVersion>
) {
    if (!_cached_encoder_for_CMSVersion) {
        _cached_encoder_for_CMSVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_CMSVersion(value, elGetter);
}

export type Mode = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_Mode: __utils.ASN1Decoder<Mode> | null = null;
let _cached_encoder_for_Mode: __utils.ASN1Encoder<Mode> | null = null;
export function _decode_Mode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Mode) {
        _cached_decoder_for_Mode = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Mode(el);
}
export function _encode_Mode(value: Mode, elGetter: __utils.ASN1Encoder<Mode>) {
    if (!_cached_encoder_for_Mode) {
        _cached_encoder_for_Mode = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Mode(value, elGetter);
}

export type Content = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Content: __utils.ASN1Decoder<Content> | null = null;
let _cached_encoder_for_Content: __utils.ASN1Encoder<Content> | null = null;
export function _decode_Content(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Content) {
        _cached_decoder_for_Content = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Content(el);
}
export function _encode_Content(
    value: Content,
    elGetter: __utils.ASN1Encoder<Content>
) {
    if (!_cached_encoder_for_Content) {
        _cached_encoder_for_Content = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Content(value, elGetter);
}

export class ContentInformation {
    constructor(
        readonly mode: Mode,
        readonly content: asn1.OPTIONAL<Content>
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mode",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "content",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContentInformation: __utils.ASN1Decoder<
    ContentInformation
> | null = null;
let _cached_encoder_for_ContentInformation: __utils.ASN1Encoder<
    ContentInformation
> | null = null;
export function _decode_ContentInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentInformation) {
        _cached_decoder_for_ContentInformation = function (
            el: asn1.ASN1Element
        ): ContentInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mode!: Mode;
            let content: asn1.OPTIONAL<Content>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                mode: (_el: asn1.ASN1Element): void => {
                    mode = _decode_Mode(_el);
                },
                content: (_el: asn1.ASN1Element): void => {
                    content = _decode_Content(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentInformation,
                _extension_additions_list_spec_for_ContentInformation,
                _root_component_type_list_2_spec_for_ContentInformation,
                undefined
            );
            return new ContentInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                mode,
                content
            );
        };
    }
    return _cached_decoder_for_ContentInformation(el);
}
export function _encode_ContentInformation(
    value: ContentInformation,
    elGetter: __utils.ASN1Encoder<ContentInformation>
) {
    if (!_cached_encoder_for_ContentInformation) {
        _cached_encoder_for_ContentInformation = function (
            value: ContentInformation,
            elGetter: __utils.ASN1Encoder<ContentInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Mode(value.mode, __utils.BER),
                        /* IF_ABSENT  */ value.content === undefined
                            ? undefined
                            : _encode_Content(value.content, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ContentInformation(value, elGetter);
}

export type Certificates = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_Certificates: __utils.ASN1Decoder<
    Certificates
> | null = null;
let _cached_encoder_for_Certificates: __utils.ASN1Encoder<
    Certificates
> | null = null;
export function _decode_Certificates(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Certificates) {
        _cached_decoder_for_Certificates = __utils._decodeOctetString;
    }
    return _cached_decoder_for_Certificates(el);
}
export function _encode_Certificates(
    value: Certificates,
    elGetter: __utils.ASN1Encoder<Certificates>
) {
    if (!_cached_encoder_for_Certificates) {
        _cached_encoder_for_Certificates = __utils._encodeOctetString;
    }
    return _cached_encoder_for_Certificates(value, elGetter);
}

export type CRLs = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_CRLs: __utils.ASN1Decoder<CRLs> | null = null;
let _cached_encoder_for_CRLs: __utils.ASN1Encoder<CRLs> | null = null;
export function _decode_CRLs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLs) {
        _cached_decoder_for_CRLs = __utils._decodeOctetString;
    }
    return _cached_decoder_for_CRLs(el);
}
export function _encode_CRLs(value: CRLs, elGetter: __utils.ASN1Encoder<CRLs>) {
    if (!_cached_encoder_for_CRLs) {
        _cached_encoder_for_CRLs = __utils._encodeOctetString;
    }
    return _cached_encoder_for_CRLs(value, elGetter);
}

export type KeyPairIdentifier = SignerIdentifier; // DefinedType
let _cached_decoder_for_KeyPairIdentifier: __utils.ASN1Decoder<
    KeyPairIdentifier
> | null = null;
let _cached_encoder_for_KeyPairIdentifier: __utils.ASN1Encoder<
    KeyPairIdentifier
> | null = null;
export function _decode_KeyPairIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyPairIdentifier) {
        _cached_decoder_for_KeyPairIdentifier = _decode_SignerIdentifier;
    }
    return _cached_decoder_for_KeyPairIdentifier(el);
}
export function _encode_KeyPairIdentifier(
    value: KeyPairIdentifier,
    elGetter: __utils.ASN1Encoder<KeyPairIdentifier>
) {
    if (!_cached_encoder_for_KeyPairIdentifier) {
        _cached_encoder_for_KeyPairIdentifier = _encode_SignerIdentifier;
    }
    return _cached_encoder_for_KeyPairIdentifier(value, elGetter);
}

export class SigncrypterIDs {
    constructor(
        readonly sender: KeyPairIdentifier,
        readonly recipient: KeyPairIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_SigncrypterIDs: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "sender",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipient",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SigncrypterIDs: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SigncrypterIDs: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SigncrypterIDs: __utils.ASN1Decoder<
    SigncrypterIDs
> | null = null;
let _cached_encoder_for_SigncrypterIDs: __utils.ASN1Encoder<
    SigncrypterIDs
> | null = null;
export function _decode_SigncrypterIDs(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncrypterIDs) {
        _cached_decoder_for_SigncrypterIDs = function (
            el: asn1.ASN1Element
        ): SigncrypterIDs {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SigncrypterIDs contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "sender";
            sequence[1].name = "recipient";
            let sender!: KeyPairIdentifier;
            let recipient!: KeyPairIdentifier;
            sender = _decode_KeyPairIdentifier(sequence[0]);
            recipient = _decode_KeyPairIdentifier(sequence[1]);
                        return new SigncrypterIDs(sender, recipient);
        };
    }
    return _cached_decoder_for_SigncrypterIDs(el);
}
export function _encode_SigncrypterIDs(
    value: SigncrypterIDs,
    elGetter: __utils.ASN1Encoder<SigncrypterIDs>
) {
    if (!_cached_encoder_for_SigncrypterIDs) {
        _cached_encoder_for_SigncrypterIDs = function (
            value: SigncrypterIDs,
            elGetter: __utils.ASN1Encoder<SigncrypterIDs>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_KeyPairIdentifier(
                            value.sender,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_KeyPairIdentifier(
                            value.recipient,
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
    return _cached_encoder_for_SigncrypterIDs(value, elGetter);
}

export type SigncryptedDataAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_SigncryptedDataAlgorithmIdentifier: __utils.ASN1Decoder<
    SigncryptedDataAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_SigncryptedDataAlgorithmIdentifier: __utils.ASN1Encoder<
    SigncryptedDataAlgorithmIdentifier
> | null = null;
export function _decode_SigncryptedDataAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_decoder_for_SigncryptedDataAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SigncryptedDataAlgorithmIdentifier(el);
}
export function _encode_SigncryptedDataAlgorithmIdentifier(
    value: SigncryptedDataAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<SigncryptedDataAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_SigncryptedDataAlgorithmIdentifier) {
        _cached_encoder_for_SigncryptedDataAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SigncryptedDataAlgorithmIdentifier(
        value,
        elGetter
    );
}

export type SigncryptionValue = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_SigncryptionValue: __utils.ASN1Decoder<
    SigncryptionValue
> | null = null;
let _cached_encoder_for_SigncryptionValue: __utils.ASN1Encoder<
    SigncryptionValue
> | null = null;
export function _decode_SigncryptionValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncryptionValue) {
        _cached_decoder_for_SigncryptionValue = __utils._decodeOctetString;
    }
    return _cached_decoder_for_SigncryptionValue(el);
}
export function _encode_SigncryptionValue(
    value: SigncryptionValue,
    elGetter: __utils.ASN1Encoder<SigncryptionValue>
) {
    if (!_cached_encoder_for_SigncryptionValue) {
        _cached_encoder_for_SigncryptionValue = __utils._encodeOctetString;
    }
    return _cached_encoder_for_SigncryptionValue(value, elGetter);
}

// TODO: ObjectClassAssignment: SIGNCRYPTED

export class Signcrypted {
    constructor(
        readonly name: asn1.OBJECT_IDENTIFIER,
        readonly parts: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_Signcrypted: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "name",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Signcrypted: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Signcrypted: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Signcrypted: __utils.ASN1Decoder<
    Signcrypted
> | null = null;
let _cached_encoder_for_Signcrypted: __utils.ASN1Encoder<
    Signcrypted
> | null = null;
export function _decode_Signcrypted(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signcrypted) {
        _cached_decoder_for_Signcrypted = function (
            el: asn1.ASN1Element
        ): Signcrypted {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: asn1.OBJECT_IDENTIFIER;
            let parts: asn1.OPTIONAL<asn1.ASN1Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decodeObjectIdentifier(_el);
                },
                parts: (_el: asn1.ASN1Element): void => {
                    parts = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Signcrypted,
                _extension_additions_list_spec_for_Signcrypted,
                _root_component_type_list_2_spec_for_Signcrypted,
                undefined
            );
            return new Signcrypted /* SEQUENCE_CONSTRUCTOR_CALL */(name, parts);
        };
    }
    return _cached_decoder_for_Signcrypted(el);
}
export function _encode_Signcrypted(
    value: Signcrypted,
    elGetter: __utils.ASN1Encoder<Signcrypted>
) {
    if (!_cached_encoder_for_Signcrypted) {
        _cached_encoder_for_Signcrypted = function (
            value: Signcrypted,
            elGetter: __utils.ASN1Encoder<Signcrypted>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.name,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.parts === undefined
                            ? undefined
                            : __utils._encodeAny(value.parts, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Signcrypted(value, elGetter);
}

export type SigncryptedPartsManifest = Signcrypted; // DefinedType
let _cached_decoder_for_SigncryptedPartsManifest: __utils.ASN1Decoder<
    SigncryptedPartsManifest
> | null = null;
let _cached_encoder_for_SigncryptedPartsManifest: __utils.ASN1Encoder<
    SigncryptedPartsManifest
> | null = null;
export function _decode_SigncryptedPartsManifest(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncryptedPartsManifest) {
        _cached_decoder_for_SigncryptedPartsManifest = _decode_Signcrypted;
    }
    return _cached_decoder_for_SigncryptedPartsManifest(el);
}
export function _encode_SigncryptedPartsManifest(
    value: SigncryptedPartsManifest,
    elGetter: __utils.ASN1Encoder<SigncryptedPartsManifest>
) {
    if (!_cached_encoder_for_SigncryptedPartsManifest) {
        _cached_encoder_for_SigncryptedPartsManifest = _encode_Signcrypted;
    }
    return _cached_encoder_for_SigncryptedPartsManifest(value, elGetter);
}

export class ToBeSigned {
    constructor(
        readonly signcryptedPartsManifest: SigncryptedPartsManifest,
        readonly signedAttributes: SignedAttributes
    ) {}
}
export const _root_component_type_list_1_spec_for_ToBeSigned: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "signcryptedPartsManifest",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedAttributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ToBeSigned: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ToBeSigned: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ToBeSigned: __utils.ASN1Decoder<
    ToBeSigned
> | null = null;
let _cached_encoder_for_ToBeSigned: __utils.ASN1Encoder<
    ToBeSigned
> | null = null;
export function _decode_ToBeSigned(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ToBeSigned) {
        _cached_decoder_for_ToBeSigned = function (
            el: asn1.ASN1Element
        ): ToBeSigned {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ToBeSigned contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "signcryptedPartsManifest";
            sequence[1].name = "signedAttributes";
            let signcryptedPartsManifest!: SigncryptedPartsManifest;
            let signedAttributes!: SignedAttributes;
            signcryptedPartsManifest = _decode_SigncryptedPartsManifest(
                sequence[0]
            );
            signedAttributes = _decode_SignedAttributes(sequence[1]);
                        return new ToBeSigned(signcryptedPartsManifest, signedAttributes);
        };
    }
    return _cached_decoder_for_ToBeSigned(el);
}
export function _encode_ToBeSigned(
    value: ToBeSigned,
    elGetter: __utils.ASN1Encoder<ToBeSigned>
) {
    if (!_cached_encoder_for_ToBeSigned) {
        _cached_encoder_for_ToBeSigned = function (
            value: ToBeSigned,
            elGetter: __utils.ASN1Encoder<ToBeSigned>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SigncryptedPartsManifest(
                            value.signcryptedPartsManifest,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignedAttributes(
                            value.signedAttributes,
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
    return _cached_encoder_for_ToBeSigned(value, elGetter);
}

export class SignatureInformation {
    constructor(
        readonly signerIdentifier: asn1.OPTIONAL<SignerIdentifier>,
        readonly signatureAlgorithm: asn1.OPTIONAL<
            SignatureAlgorithmIdentifier
        >,
        readonly toBeSigned: ToBeSigned,
        readonly signatureValue: SignatureValue
    ) {}
}
export const _root_component_type_list_1_spec_for_SignatureInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "signerIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "toBeSigned",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SignatureInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SignatureInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SignatureInformation: __utils.ASN1Decoder<
    SignatureInformation
> | null = null;
let _cached_encoder_for_SignatureInformation: __utils.ASN1Encoder<
    SignatureInformation
> | null = null;
export function _decode_SignatureInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignatureInformation) {
        _cached_decoder_for_SignatureInformation = function (
            el: asn1.ASN1Element
        ): SignatureInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signerIdentifier: asn1.OPTIONAL<SignerIdentifier>;
            let signatureAlgorithm: asn1.OPTIONAL<SignatureAlgorithmIdentifier>;
            let toBeSigned!: ToBeSigned;
            let signatureValue!: SignatureValue;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                signerIdentifier: (_el: asn1.ASN1Element): void => {
                    signerIdentifier = _decode_SignerIdentifier(_el);
                },
                signatureAlgorithm: (_el: asn1.ASN1Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                toBeSigned: (_el: asn1.ASN1Element): void => {
                    toBeSigned = _decode_ToBeSigned(_el);
                },
                signatureValue: (_el: asn1.ASN1Element): void => {
                    signatureValue = _decode_SignatureValue(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignatureInformation,
                _extension_additions_list_spec_for_SignatureInformation,
                _root_component_type_list_2_spec_for_SignatureInformation,
                undefined
            );
            return new SignatureInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                signerIdentifier,
                signatureAlgorithm,
                toBeSigned,
                signatureValue
            );
        };
    }
    return _cached_decoder_for_SignatureInformation(el);
}
export function _encode_SignatureInformation(
    value: SignatureInformation,
    elGetter: __utils.ASN1Encoder<SignatureInformation>
) {
    if (!_cached_encoder_for_SignatureInformation) {
        _cached_encoder_for_SignatureInformation = function (
            value: SignatureInformation,
            elGetter: __utils.ASN1Encoder<SignatureInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.signerIdentifier === undefined
                            ? undefined
                            : _encode_SignerIdentifier(
                                  value.signerIdentifier,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.signatureAlgorithm === undefined
                            ? undefined
                            : _encode_SignatureAlgorithmIdentifier(
                                  value.signatureAlgorithm,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureValue(
                            value.signatureValue,
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
    return _cached_encoder_for_SignatureInformation(value, elGetter);
}

export type UnSigncryptedAttributes = Attribute[]; // SequenceOfType
let _cached_decoder_for_UnSigncryptedAttributes: __utils.ASN1Decoder<
    UnSigncryptedAttributes
> | null = null;
let _cached_encoder_for_UnSigncryptedAttributes: __utils.ASN1Encoder<
    UnSigncryptedAttributes
> | null = null;
export function _decode_UnSigncryptedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnSigncryptedAttributes) {
        _cached_decoder_for_UnSigncryptedAttributes = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_UnSigncryptedAttributes(el);
}
export function _encode_UnSigncryptedAttributes(
    value: UnSigncryptedAttributes,
    elGetter: __utils.ASN1Encoder<UnSigncryptedAttributes>
) {
    if (!_cached_encoder_for_UnSigncryptedAttributes) {
        _cached_encoder_for_UnSigncryptedAttributes = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_UnSigncryptedAttributes(value, elGetter);
}

export class Signcrypter {
    constructor(
        readonly version: CMSVersion,
        readonly side: SigncrypterIDs,
        readonly signcryptedDataAlgorithm: SigncryptedDataAlgorithmIdentifier,
        readonly signcryptionValue: SigncryptionValue,
        readonly signatureInformation: asn1.OPTIONAL<SignatureInformation>,
        readonly unsigncryptedAttributes: asn1.OPTIONAL<UnSigncryptedAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_Signcrypter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "side",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signcryptedDataAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signcryptionValue",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureInformation",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unsigncryptedAttributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Signcrypter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Signcrypter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Signcrypter: __utils.ASN1Decoder<
    Signcrypter
> | null = null;
let _cached_encoder_for_Signcrypter: __utils.ASN1Encoder<
    Signcrypter
> | null = null;
export function _decode_Signcrypter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signcrypter) {
        _cached_decoder_for_Signcrypter = function (
            el: asn1.ASN1Element
        ): Signcrypter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let side!: SigncrypterIDs;
            let signcryptedDataAlgorithm!: SigncryptedDataAlgorithmIdentifier;
            let signcryptionValue!: SigncryptionValue;
            let signatureInformation: asn1.OPTIONAL<SignatureInformation>;
            let unsigncryptedAttributes: asn1.OPTIONAL<UnSigncryptedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                side: (_el: asn1.ASN1Element): void => {
                    side = _decode_SigncrypterIDs(_el);
                },
                signcryptedDataAlgorithm: (_el: asn1.ASN1Element): void => {
                    signcryptedDataAlgorithm = _decode_SigncryptedDataAlgorithmIdentifier(
                        _el
                    );
                },
                signcryptionValue: (_el: asn1.ASN1Element): void => {
                    signcryptionValue = _decode_SigncryptionValue(_el);
                },
                signatureInformation: (_el: asn1.ASN1Element): void => {
                    signatureInformation = _decode_SignatureInformation(_el);
                },
                unsigncryptedAttributes: (_el: asn1.ASN1Element): void => {
                    unsigncryptedAttributes = _decode_UnSigncryptedAttributes(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Signcrypter,
                _extension_additions_list_spec_for_Signcrypter,
                _root_component_type_list_2_spec_for_Signcrypter,
                undefined
            );
            return new Signcrypter /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                side,
                signcryptedDataAlgorithm,
                signcryptionValue,
                signatureInformation,
                unsigncryptedAttributes
            );
        };
    }
    return _cached_decoder_for_Signcrypter(el);
}
export function _encode_Signcrypter(
    value: Signcrypter,
    elGetter: __utils.ASN1Encoder<Signcrypter>
) {
    if (!_cached_encoder_for_Signcrypter) {
        _cached_encoder_for_Signcrypter = function (
            value: Signcrypter,
            elGetter: __utils.ASN1Encoder<Signcrypter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SigncrypterIDs(
                            value.side,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SigncryptedDataAlgorithmIdentifier(
                            value.signcryptedDataAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SigncryptionValue(
                            value.signcryptionValue,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.signatureInformation ===
                        undefined
                            ? undefined
                            : _encode_SignatureInformation(
                                  value.signatureInformation,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.unsigncryptedAttributes ===
                        undefined
                            ? undefined
                            : _encode_UnSigncryptedAttributes(
                                  value.unsigncryptedAttributes,
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
    return _cached_encoder_for_Signcrypter(value, elGetter);
}

export type Signcrypters = Signcrypter[]; // SequenceOfType
let _cached_decoder_for_Signcrypters: __utils.ASN1Decoder<
    Signcrypters
> | null = null;
let _cached_encoder_for_Signcrypters: __utils.ASN1Encoder<
    Signcrypters
> | null = null;
export function _decode_Signcrypters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signcrypters) {
        _cached_decoder_for_Signcrypters = __utils._decodeSequenceOf<
            Signcrypter
        >(() => _decode_Signcrypter);
    }
    return _cached_decoder_for_Signcrypters(el);
}
export function _encode_Signcrypters(
    value: Signcrypters,
    elGetter: __utils.ASN1Encoder<Signcrypters>
) {
    if (!_cached_encoder_for_Signcrypters) {
        _cached_encoder_for_Signcrypters = __utils._encodeSequenceOf<
            Signcrypter
        >(() => _encode_Signcrypter, __utils.BER);
    }
    return _cached_encoder_for_Signcrypters(value, elGetter);
}

export class SigncryptedData {
    constructor(
        readonly version: CMSVersion,
        readonly contentInformation: ContentInformation,
        readonly certificates: asn1.OPTIONAL<Certificates>,
        readonly crls: asn1.OPTIONAL<CRLs>,
        readonly signcrypters: Signcrypters
    ) {}
}
export const _root_component_type_list_1_spec_for_SigncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contentInformation",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signcrypters",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SigncryptedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SigncryptedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SigncryptedData: __utils.ASN1Decoder<
    SigncryptedData
> | null = null;
let _cached_encoder_for_SigncryptedData: __utils.ASN1Encoder<
    SigncryptedData
> | null = null;
export function _decode_SigncryptedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncryptedData) {
        _cached_decoder_for_SigncryptedData = function (
            el: asn1.ASN1Element
        ): SigncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let contentInformation!: ContentInformation;
            let certificates: asn1.OPTIONAL<Certificates>;
            let crls: asn1.OPTIONAL<CRLs>;
            let signcrypters!: Signcrypters;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                contentInformation: (_el: asn1.ASN1Element): void => {
                    contentInformation = _decode_ContentInformation(_el);
                },
                certificates: (_el: asn1.ASN1Element): void => {
                    certificates = _decode_Certificates(_el);
                },
                crls: (_el: asn1.ASN1Element): void => {
                    crls = _decode_CRLs(_el);
                },
                signcrypters: (_el: asn1.ASN1Element): void => {
                    signcrypters = _decode_Signcrypters(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigncryptedData,
                _extension_additions_list_spec_for_SigncryptedData,
                _root_component_type_list_2_spec_for_SigncryptedData,
                undefined
            );
            return new SigncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                contentInformation,
                certificates,
                crls,
                signcrypters
            );
        };
    }
    return _cached_decoder_for_SigncryptedData(el);
}
export function _encode_SigncryptedData(
    value: SigncryptedData,
    elGetter: __utils.ASN1Encoder<SigncryptedData>
) {
    if (!_cached_encoder_for_SigncryptedData) {
        _cached_encoder_for_SigncryptedData = function (
            value: SigncryptedData,
            elGetter: __utils.ASN1Encoder<SigncryptedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ContentInformation(
                            value.contentInformation,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : _encode_Certificates(
                                  value.certificates,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : _encode_CRLs(value.crls, __utils.BER),
                        /* REQUIRED   */ _encode_Signcrypters(
                            value.signcrypters,
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
    return _cached_encoder_for_SigncryptedData(value, elGetter);
}

// TODO: ObjectSetAssignment: ProcessingModes

export class NamedKeyEncryptedData {
    constructor(
        readonly version: CMSVersion,
        readonly keyName: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly encryptedContentInfo: EncryptedContentInfo,
        readonly unprotectedAttrs: asn1.OPTIONAL<Attributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_NamedKeyEncryptedData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedContentInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "unprotectedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NamedKeyEncryptedData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NamedKeyEncryptedData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_NamedKeyEncryptedData: __utils.ASN1Decoder<
    NamedKeyEncryptedData
> | null = null;
let _cached_encoder_for_NamedKeyEncryptedData: __utils.ASN1Encoder<
    NamedKeyEncryptedData
> | null = null;
export function _decode_NamedKeyEncryptedData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NamedKeyEncryptedData) {
        _cached_decoder_for_NamedKeyEncryptedData = function (
            el: asn1.ASN1Element
        ): NamedKeyEncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let keyName: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: asn1.OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                keyName: (_el: asn1.ASN1Element): void => {
                    keyName = __utils._decode_implicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                encryptedContentInfo: (_el: asn1.ASN1Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: asn1.ASN1Element): void => {
                    unprotectedAttrs = __utils._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NamedKeyEncryptedData,
                _extension_additions_list_spec_for_NamedKeyEncryptedData,
                _root_component_type_list_2_spec_for_NamedKeyEncryptedData,
                undefined
            );
            return new NamedKeyEncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                keyName,
                encryptedContentInfo,
                unprotectedAttrs
            );
        };
    }
    return _cached_decoder_for_NamedKeyEncryptedData(el);
}
export function _encode_NamedKeyEncryptedData(
    value: NamedKeyEncryptedData,
    elGetter: __utils.ASN1Encoder<NamedKeyEncryptedData>
) {
    if (!_cached_encoder_for_NamedKeyEncryptedData) {
        _cached_encoder_for_NamedKeyEncryptedData = function (
            value: NamedKeyEncryptedData,
            elGetter: __utils.ASN1Encoder<NamedKeyEncryptedData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.keyName === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.keyName, __utils.BER),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  __utils.BER
                              )(value.unprotectedAttrs, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_NamedKeyEncryptedData(value, elGetter);
}

export type SigncryptedAttributes = Attribute[]; // SequenceOfType
let _cached_decoder_for_SigncryptedAttributes: __utils.ASN1Decoder<
    SigncryptedAttributes
> | null = null;
let _cached_encoder_for_SigncryptedAttributes: __utils.ASN1Encoder<
    SigncryptedAttributes
> | null = null;
export function _decode_SigncryptedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncryptedAttributes) {
        _cached_decoder_for_SigncryptedAttributes = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_SigncryptedAttributes(el);
}
export function _encode_SigncryptedAttributes(
    value: SigncryptedAttributes,
    elGetter: __utils.ASN1Encoder<SigncryptedAttributes>
) {
    if (!_cached_encoder_for_SigncryptedAttributes) {
        _cached_encoder_for_SigncryptedAttributes = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_SigncryptedAttributes(value, elGetter);
}

export class ToBeSigncrypted {
    constructor(
        readonly content: Content,
        readonly attributes: SigncryptedAttributes
    ) {}
}
export const _root_component_type_list_1_spec_for_ToBeSigncrypted: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "content",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ToBeSigncrypted: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ToBeSigncrypted: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ToBeSigncrypted: __utils.ASN1Decoder<
    ToBeSigncrypted
> | null = null;
let _cached_encoder_for_ToBeSigncrypted: __utils.ASN1Encoder<
    ToBeSigncrypted
> | null = null;
export function _decode_ToBeSigncrypted(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ToBeSigncrypted) {
        _cached_decoder_for_ToBeSigncrypted = function (
            el: asn1.ASN1Element
        ): ToBeSigncrypted {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ToBeSigncrypted contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "content";
            sequence[1].name = "attributes";
            let content!: Content;
            let attributes!: SigncryptedAttributes;
            content = _decode_Content(sequence[0]);
            attributes = _decode_SigncryptedAttributes(sequence[1]);
                        return new ToBeSigncrypted(content, attributes);
        };
    }
    return _cached_decoder_for_ToBeSigncrypted(el);
}
export function _encode_ToBeSigncrypted(
    value: ToBeSigncrypted,
    elGetter: __utils.ASN1Encoder<ToBeSigncrypted>
) {
    if (!_cached_encoder_for_ToBeSigncrypted) {
        _cached_encoder_for_ToBeSigncrypted = function (
            value: ToBeSigncrypted,
            elGetter: __utils.ASN1Encoder<ToBeSigncrypted>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Content(
                            value.content,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_SigncryptedAttributes(
                            value.attributes,
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
    return _cached_encoder_for_ToBeSigncrypted(value, elGetter);
}

// TODO: ObjectSetAssignment: SigncryptionAttributes

// TODO: ObjectAssignment: signcryptedEnvelope

export type SigncryptedKey = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_SigncryptedKey: __utils.ASN1Decoder<
    SigncryptedKey
> | null = null;
let _cached_encoder_for_SigncryptedKey: __utils.ASN1Encoder<
    SigncryptedKey
> | null = null;
export function _decode_SigncryptedKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SigncryptedKey) {
        _cached_decoder_for_SigncryptedKey = __utils._decodeOctetString;
    }
    return _cached_decoder_for_SigncryptedKey(el);
}
export function _encode_SigncryptedKey(
    value: SigncryptedKey,
    elGetter: __utils.ASN1Encoder<SigncryptedKey>
) {
    if (!_cached_encoder_for_SigncryptedKey) {
        _cached_encoder_for_SigncryptedKey = __utils._encodeOctetString;
    }
    return _cached_encoder_for_SigncryptedKey(value, elGetter);
}

// TODO: ObjectSetAssignment: SigncryptAlgorithms

// TODO: ObjectSetAssignment: Manifest

// TODO: ObjectAssignment: xPathManifest

export type XPath = asn1.UTF8String; // UTF8String
let _cached_decoder_for_XPath: __utils.ASN1Decoder<XPath> | null = null;
let _cached_encoder_for_XPath: __utils.ASN1Encoder<XPath> | null = null;
export function _decode_XPath(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XPath) {
        _cached_decoder_for_XPath = __utils._decodeUTF8String;
    }
    return _cached_decoder_for_XPath(el);
}
export function _encode_XPath(
    value: XPath,
    elGetter: __utils.ASN1Encoder<XPath>
) {
    if (!_cached_encoder_for_XPath) {
        _cached_encoder_for_XPath = __utils._encodeUTF8String;
    }
    return _cached_encoder_for_XPath(value, elGetter);
}

export type XPathSet = XPath[]; // SequenceOfType
let _cached_decoder_for_XPathSet: __utils.ASN1Decoder<XPathSet> | null = null;
let _cached_encoder_for_XPathSet: __utils.ASN1Encoder<XPathSet> | null = null;
export function _decode_XPathSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XPathSet) {
        _cached_decoder_for_XPathSet = __utils._decodeSequenceOf<XPath>(
            () => _decode_XPath
        );
    }
    return _cached_decoder_for_XPathSet(el);
}
export function _encode_XPathSet(
    value: XPathSet,
    elGetter: __utils.ASN1Encoder<XPathSet>
) {
    if (!_cached_encoder_for_XPathSet) {
        _cached_encoder_for_XPathSet = __utils._encodeSequenceOf<XPath>(
            () => _encode_XPath,
            __utils.BER
        );
    }
    return _cached_encoder_for_XPathSet(value, elGetter);
}

// TODO: ObjectSetAssignment: UnSigncryptionAttributes

// TODO: ObjectClassAssignment: MODE

// TODO: ObjectAssignment: signcryptedAttributes

// TODO: ObjectAssignment: signcryptedComponents

// TODO: ObjectAssignment: signcryptedContent

// TODO: ObjectAssignment: signcryptedEnveloped

/* END_MODULE CMSSigncryption */
