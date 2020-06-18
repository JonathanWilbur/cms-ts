/*
    BEGIN_MODULE TokenizationManifest
    OID: iso.identified-organization.tc68.country.x9.x9Standards.x9-73.module.tokeMan
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

// TODO: ObjectClassAssignment: TOKENIZED

export class Tokenized {
    constructor(
        readonly name: asn1.OBJECT_IDENTIFIER,
        readonly parts: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}
}
export const _root_component_type_list_1_spec_for_Tokenized: __utils.ComponentSpec[] = [
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
export const _root_component_type_list_2_spec_for_Tokenized: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Tokenized: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Tokenized: __utils.ASN1Decoder<Tokenized> | null = null;
let _cached_encoder_for_Tokenized: __utils.ASN1Encoder<Tokenized> | null = null;
export function _decode_Tokenized(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Tokenized) {
        _cached_decoder_for_Tokenized = function (
            el: asn1.ASN1Element
        ): Tokenized {
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
                _root_component_type_list_1_spec_for_Tokenized,
                _extension_additions_list_spec_for_Tokenized,
                _root_component_type_list_2_spec_for_Tokenized,
                undefined
            );
            return new Tokenized /* SEQUENCE_CONSTRUCTOR_CALL */(name, parts);
        };
    }
    return _cached_decoder_for_Tokenized(el);
}
export function _encode_Tokenized(
    value: Tokenized,
    elGetter: __utils.ASN1Encoder<Tokenized>
) {
    if (!_cached_encoder_for_Tokenized) {
        _cached_encoder_for_Tokenized = function (
            value: Tokenized,
            elGetter: __utils.ASN1Encoder<Tokenized>
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
    return _cached_encoder_for_Tokenized(value, elGetter);
}

export type TokenizedParts = Tokenized; // DefinedType
let _cached_decoder_for_TokenizedParts: __utils.ASN1Decoder<
    TokenizedParts
> | null = null;
let _cached_encoder_for_TokenizedParts: __utils.ASN1Encoder<
    TokenizedParts
> | null = null;
export function _decode_TokenizedParts(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TokenizedParts) {
        _cached_decoder_for_TokenizedParts = _decode_Tokenized;
    }
    return _cached_decoder_for_TokenizedParts(el);
}
export function _encode_TokenizedParts(
    value: TokenizedParts,
    elGetter: __utils.ASN1Encoder<TokenizedParts>
) {
    if (!_cached_encoder_for_TokenizedParts) {
        _cached_encoder_for_TokenizedParts = _encode_Tokenized;
    }
    return _cached_encoder_for_TokenizedParts(value, elGetter);
}

// TODO: ObjectSetAssignment: Manifest

// TODO: ObjectAssignment: xPathTokensManifest

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

export type TokenServiceProvider = URI; // DefinedType
let _cached_decoder_for_TokenServiceProvider: __utils.ASN1Decoder<
    TokenServiceProvider
> | null = null;
let _cached_encoder_for_TokenServiceProvider: __utils.ASN1Encoder<
    TokenServiceProvider
> | null = null;
export function _decode_TokenServiceProvider(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TokenServiceProvider) {
        _cached_decoder_for_TokenServiceProvider = _decode_URI;
    }
    return _cached_decoder_for_TokenServiceProvider(el);
}
export function _encode_TokenServiceProvider(
    value: TokenServiceProvider,
    elGetter: __utils.ASN1Encoder<TokenServiceProvider>
) {
    if (!_cached_encoder_for_TokenServiceProvider) {
        _cached_encoder_for_TokenServiceProvider = _encode_URI;
    }
    return _cached_encoder_for_TokenServiceProvider(value, elGetter);
}

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

export class XPathTokensSet {
    constructor(
        readonly tSP: asn1.OPTIONAL<TokenServiceProvider>,
        readonly xPathSet: XPathSet
    ) {}
}
export const _root_component_type_list_1_spec_for_XPathTokensSet: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "tSP",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "xPathSet",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_XPathTokensSet: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_XPathTokensSet: __utils.ComponentSpec[] = [];
let _cached_decoder_for_XPathTokensSet: __utils.ASN1Decoder<
    XPathTokensSet
> | null = null;
let _cached_encoder_for_XPathTokensSet: __utils.ASN1Encoder<
    XPathTokensSet
> | null = null;
export function _decode_XPathTokensSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_XPathTokensSet) {
        _cached_decoder_for_XPathTokensSet = function (
            el: asn1.ASN1Element
        ): XPathTokensSet {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let tSP: asn1.OPTIONAL<TokenServiceProvider>;
            let xPathSet!: XPathSet;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                tSP: (_el: asn1.ASN1Element): void => {
                    tSP = _decode_TokenServiceProvider(_el);
                },
                xPathSet: (_el: asn1.ASN1Element): void => {
                    xPathSet = _decode_XPathSet(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_XPathTokensSet,
                _extension_additions_list_spec_for_XPathTokensSet,
                _root_component_type_list_2_spec_for_XPathTokensSet,
                undefined
            );
            return new XPathTokensSet /* SEQUENCE_CONSTRUCTOR_CALL */(
                tSP,
                xPathSet
            );
        };
    }
    return _cached_decoder_for_XPathTokensSet(el);
}
export function _encode_XPathTokensSet(
    value: XPathTokensSet,
    elGetter: __utils.ASN1Encoder<XPathTokensSet>
) {
    if (!_cached_encoder_for_XPathTokensSet) {
        _cached_encoder_for_XPathTokensSet = function (
            value: XPathTokensSet,
            elGetter: __utils.ASN1Encoder<XPathTokensSet>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.tSP === undefined
                            ? undefined
                            : _encode_TokenServiceProvider(
                                  value.tSP,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ _encode_XPathSet(
                            value.xPathSet,
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
    return _cached_encoder_for_XPathTokensSet(value, elGetter);
}

// TODO: ObjectAssignment: tokenizedParts

/* END_MODULE TokenizationManifest */
