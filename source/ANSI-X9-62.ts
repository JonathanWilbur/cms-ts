/*
    BEGIN_MODULE ANSI-X9-62
    OID: iso.member-body.us.10045.module.2
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export const ansi_X9_62: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    10045,
]);

export const sha_1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

export const id_SHA224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    4,
]);

export const id_SHA256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    1,
]);

export const id_SHA384: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    2,
]);

export const id_SHA512: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    3,
]);

// TODO: ObjectSetAssignment: ANSIX9HashFunctions

export const id_fieldType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* fieldType */ 1],
    ansi_X9_62
);

export const prime_field: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* prime */ 1],
    id_fieldType
);

export type Prime_p = asn1.INTEGER;
let _cached_decoder_for_Prime_p: __utils.ASN1Decoder<Prime_p> | null = null;
let _cached_encoder_for_Prime_p: __utils.ASN1Encoder<Prime_p> | null = null;
export function _decode_Prime_p(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Prime_p) {
        _cached_decoder_for_Prime_p = __utils._decodeInteger;
    }
    return _cached_decoder_for_Prime_p(el);
}
export function _encode_Prime_p(
    value: Prime_p,
    elGetter: __utils.ASN1Encoder<Prime_p>
) {
    if (!_cached_encoder_for_Prime_p) {
        _cached_encoder_for_Prime_p = __utils._encodeInteger;
    }
    return _cached_encoder_for_Prime_p(value, elGetter);
}

export const characteristic_two_field: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* characteristic-two */ 2],
    id_fieldType
);

export const id_characteristic_two_basis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* basisType */ 3],
    characteristic_two_field
);

export const gnBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* gaussian */ 1],
    id_characteristic_two_basis
);

export const tpBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* trinomial */ 2],
    id_characteristic_two_basis
);

export type Trinomial = asn1.INTEGER;
let _cached_decoder_for_Trinomial: __utils.ASN1Decoder<Trinomial> | null = null;
let _cached_encoder_for_Trinomial: __utils.ASN1Encoder<Trinomial> | null = null;
export function _decode_Trinomial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Trinomial) {
        _cached_decoder_for_Trinomial = __utils._decodeInteger;
    }
    return _cached_decoder_for_Trinomial(el);
}
export function _encode_Trinomial(
    value: Trinomial,
    elGetter: __utils.ASN1Encoder<Trinomial>
) {
    if (!_cached_encoder_for_Trinomial) {
        _cached_encoder_for_Trinomial = __utils._encodeInteger;
    }
    return _cached_encoder_for_Trinomial(value, elGetter);
}

export const ppBasis: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* pentanomial */ 3],
    id_characteristic_two_basis
);

export class Pentanomial {
    constructor(
        readonly k1: asn1.INTEGER,
        readonly k2: asn1.INTEGER,
        readonly k3: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_Pentanomial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "k1",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "k2",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "k3",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Pentanomial: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Pentanomial: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Pentanomial: __utils.ASN1Decoder<
    Pentanomial
> | null = null;
let _cached_encoder_for_Pentanomial: __utils.ASN1Encoder<
    Pentanomial
> | null = null;
export function _decode_Pentanomial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Pentanomial) {
        _cached_decoder_for_Pentanomial = function (
            el: asn1.ASN1Element
        ): Pentanomial {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "Pentanomial contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "k1";
            sequence[1].name = "k2";
            sequence[2].name = "k3";
            let k1!: asn1.INTEGER;
            let k2!: asn1.INTEGER;
            let k3!: asn1.INTEGER;
            k1 = __utils._decodeInteger(sequence[0]);
            k2 = __utils._decodeInteger(sequence[1]);
            k3 = __utils._decodeInteger(sequence[2]);
            // TODO: Validate values.
            return new Pentanomial(k1, k2, k3);
        };
    }
    return _cached_decoder_for_Pentanomial(el);
}
export function _encode_Pentanomial(
    value: Pentanomial,
    elGetter: __utils.ASN1Encoder<Pentanomial>
) {
    if (!_cached_encoder_for_Pentanomial) {
        _cached_encoder_for_Pentanomial = function (
            value: Pentanomial,
            elGetter: __utils.ASN1Encoder<Pentanomial>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.k1,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.k2,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.k3,
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
    return _cached_encoder_for_Pentanomial(value, elGetter);
}

// TODO: ObjectClassAssignment: CHARACTERISTIC-TWO

// TODO: ObjectSetAssignment: BasisTypes

export class Characteristic_two {
    constructor(
        readonly m: asn1.INTEGER,
        readonly basis: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_Characteristic_two: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "m",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "basis",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Characteristic_two: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Characteristic_two: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Characteristic_two: __utils.ASN1Decoder<
    Characteristic_two
> | null = null;
let _cached_encoder_for_Characteristic_two: __utils.ASN1Encoder<
    Characteristic_two
> | null = null;
export function _decode_Characteristic_two(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Characteristic_two) {
        _cached_decoder_for_Characteristic_two = function (
            el: asn1.ASN1Element
        ): Characteristic_two {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "Characteristic-two contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "m";
            sequence[1].name = "basis";
            sequence[2].name = "parameters";
            let m!: asn1.INTEGER;
            let basis!: asn1.OBJECT_IDENTIFIER;
            let parameters!: asn1.ASN1Element;
            m = __utils._decodeInteger(sequence[0]);
            basis = __utils._decodeObjectIdentifier(sequence[1]);
            parameters = __utils._decodeAny(sequence[2]);
            // TODO: Validate values.
            return new Characteristic_two(m, basis, parameters);
        };
    }
    return _cached_decoder_for_Characteristic_two(el);
}
export function _encode_Characteristic_two(
    value: Characteristic_two,
    elGetter: __utils.ASN1Encoder<Characteristic_two>
) {
    if (!_cached_encoder_for_Characteristic_two) {
        _cached_encoder_for_Characteristic_two = function (
            value: Characteristic_two,
            elGetter: __utils.ASN1Encoder<Characteristic_two>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.m,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.basis,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.parameters,
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
    return _cached_encoder_for_Characteristic_two(value, elGetter);
}

// TODO: ObjectSetAssignment: FieldTypes

export const ellipticCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* curves */ 3],
    ansi_X9_62
);

export const primeCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* prime */ 1],
    ellipticCurve
);

export const secgCurve: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
]);

export const ansix9t163k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    secgCurve
);

export const ansix9t163r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    secgCurve
);

export const ansix9t163r2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    secgCurve
);

export const ansix9t193r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    secgCurve
);

export const ansix9t193r2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    secgCurve
);

export const ansix9t233k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    secgCurve
);

export const ansix9t233r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    secgCurve
);

export const ansix9t239k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    secgCurve
);

export const ansix9t283k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    secgCurve
);

export const ansix9t283r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    secgCurve
);

export const ansix9t409k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    secgCurve
);

export const ansix9t409r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    secgCurve
);

export const ansix9t571k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [38],
    secgCurve
);

export const ansix9t571r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [39],
    secgCurve
);

export const ansix9p160k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    secgCurve
);

export const ansix9p160r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    secgCurve
);

export const ansix9p160r2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    secgCurve
);

export const ansix9p192k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    secgCurve
);

export const ansix9p192r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    primeCurve
);

export const ansix9p224k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    secgCurve
);

export const ansix9p224r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    secgCurve
);

export const ansix9p256k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    secgCurve
);

export const ansix9p256r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    primeCurve
);

export const ansix9p384r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    secgCurve
);

export const ansix9p521r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    secgCurve
);

// TODO: ObjectClassAssignment: ECDOMAIN

// TODO: ObjectSetAssignment: ANSIX9NamedDomains

export class ECDSA_Sig_Value {
    constructor(readonly r: asn1.INTEGER, readonly s: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "r",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "s",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ECDSA_Sig_Value: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ECDSA_Sig_Value: __utils.ASN1Decoder<
    ECDSA_Sig_Value
> | null = null;
let _cached_encoder_for_ECDSA_Sig_Value: __utils.ASN1Encoder<
    ECDSA_Sig_Value
> | null = null;
export function _decode_ECDSA_Sig_Value(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECDSA_Sig_Value) {
        _cached_decoder_for_ECDSA_Sig_Value = function (
            el: asn1.ASN1Element
        ): ECDSA_Sig_Value {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ECDSA-Sig-Value contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "r";
            sequence[1].name = "s";
            let r!: asn1.INTEGER;
            let s!: asn1.INTEGER;
            r = __utils._decodeInteger(sequence[0]);
            s = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new ECDSA_Sig_Value(r, s);
        };
    }
    return _cached_decoder_for_ECDSA_Sig_Value(el);
}
export function _encode_ECDSA_Sig_Value(
    value: ECDSA_Sig_Value,
    elGetter: __utils.ASN1Encoder<ECDSA_Sig_Value>
) {
    if (!_cached_encoder_for_ECDSA_Sig_Value) {
        _cached_encoder_for_ECDSA_Sig_Value = function (
            value: ECDSA_Sig_Value,
            elGetter: __utils.ASN1Encoder<ECDSA_Sig_Value>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.r,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.s,
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
    return _cached_encoder_for_ECDSA_Sig_Value(value, elGetter);
}

export const id_ecSigType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* signatures */ 4],
    ansi_X9_62
);

export const ecdsa_with_Sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* sha1 */ 1],
    id_ecSigType
);

export const ecdsa_with_Recommended: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* recommended */ 2],
    id_ecSigType
);

export const ecdsa_with_Specified: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* specified */ 3],
    id_ecSigType
);

export const ecdsa_with_Sha224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    ecdsa_with_Specified
);

export const ecdsa_with_Sha256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    ecdsa_with_Specified
);

export const ecdsa_with_Sha384: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    ecdsa_with_Specified
);

export const ecdsa_with_Sha512: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    ecdsa_with_Specified
);

// TODO: ObjectSetAssignment: ECCAlgorithmSet

export const id_publicKeyType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* keyType */ 2],
    ansi_X9_62
);

export const id_ecPublicKey: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* unrestricted */ 1],
    id_publicKeyType
);

// TODO: ObjectClassAssignment: ALGORITHM

// TODO: ObjectAssignment: ecPublicKeyType

export const id_ecPublicKeyRestricted: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [/* restricted */ 2],
    id_publicKeyType
);

export type SpecifiedECDomainVersion = asn1.INTEGER;
export const SpecifiedECDomainVersion_ecdpVer1: SpecifiedECDomainVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SpecifiedECDomainVersion_ecdpVer2: SpecifiedECDomainVersion = 2; /* LONG_NAMED_INTEGER_VALUE */
export const SpecifiedECDomainVersion_ecdpVer3: SpecifiedECDomainVersion = 3; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SpecifiedECDomainVersion: __utils.ASN1Decoder<
    SpecifiedECDomainVersion
> | null = null;
let _cached_encoder_for_SpecifiedECDomainVersion: __utils.ASN1Encoder<
    SpecifiedECDomainVersion
> | null = null;
export function _decode_SpecifiedECDomainVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SpecifiedECDomainVersion) {
        _cached_decoder_for_SpecifiedECDomainVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_SpecifiedECDomainVersion(el);
}
export function _encode_SpecifiedECDomainVersion(
    value: SpecifiedECDomainVersion,
    elGetter: __utils.ASN1Encoder<SpecifiedECDomainVersion>
) {
    if (!_cached_encoder_for_SpecifiedECDomainVersion) {
        _cached_encoder_for_SpecifiedECDomainVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_SpecifiedECDomainVersion(value, elGetter);
}

// TODO: ObjectClassAssignment: FIELD-ID

export class FieldID {
    constructor(
        readonly fieldType: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_FieldID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "fieldType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FieldID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FieldID: __utils.ComponentSpec[] = [];
let _cached_decoder_for_FieldID: __utils.ASN1Decoder<FieldID> | null = null;
let _cached_encoder_for_FieldID: __utils.ASN1Encoder<FieldID> | null = null;
export function _decode_FieldID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FieldID) {
        _cached_decoder_for_FieldID = function (el: asn1.ASN1Element): FieldID {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "FieldID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "fieldType";
            sequence[1].name = "parameters";
            let fieldType!: asn1.OBJECT_IDENTIFIER;
            let parameters!: asn1.ASN1Element;
            fieldType = __utils._decodeObjectIdentifier(sequence[0]);
            parameters = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new FieldID(fieldType, parameters);
        };
    }
    return _cached_decoder_for_FieldID(el);
}
export function _encode_FieldID(
    value: FieldID,
    elGetter: __utils.ASN1Encoder<FieldID>
) {
    if (!_cached_encoder_for_FieldID) {
        _cached_encoder_for_FieldID = function (
            value: FieldID,
            elGetter: __utils.ASN1Encoder<FieldID>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.fieldType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.parameters,
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
    return _cached_encoder_for_FieldID(value, elGetter);
}

export type FieldElement = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_FieldElement: __utils.ASN1Decoder<
    FieldElement
> | null = null;
let _cached_encoder_for_FieldElement: __utils.ASN1Encoder<
    FieldElement
> | null = null;
export function _decode_FieldElement(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_FieldElement) {
        _cached_decoder_for_FieldElement = __utils._decodeOctetString;
    }
    return _cached_decoder_for_FieldElement(el);
}
export function _encode_FieldElement(
    value: FieldElement,
    elGetter: __utils.ASN1Encoder<FieldElement>
) {
    if (!_cached_encoder_for_FieldElement) {
        _cached_encoder_for_FieldElement = __utils._encodeOctetString;
    }
    return _cached_encoder_for_FieldElement(value, elGetter);
}

export class Curve {
    constructor(
        readonly a: FieldElement,
        readonly b: FieldElement,
        readonly seed: asn1.OPTIONAL<asn1.BIT_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_Curve: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "a",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "b",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "seed",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Curve: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Curve: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Curve: __utils.ASN1Decoder<Curve> | null = null;
let _cached_encoder_for_Curve: __utils.ASN1Encoder<Curve> | null = null;
export function _decode_Curve(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Curve) {
        _cached_decoder_for_Curve = function (el: asn1.ASN1Element): Curve {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let a!: FieldElement;
            let b!: FieldElement;
            let seed: asn1.OPTIONAL<asn1.BIT_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                a: (_el: asn1.ASN1Element): void => {
                    a = _decode_FieldElement(_el);
                },
                b: (_el: asn1.ASN1Element): void => {
                    b = _decode_FieldElement(_el);
                },
                seed: (_el: asn1.ASN1Element): void => {
                    seed = __utils._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Curve,
                _extension_additions_list_spec_for_Curve,
                _root_component_type_list_2_spec_for_Curve,
                undefined
            );
            return new Curve /* SEQUENCE_CONSTRUCTOR_CALL */(a, b, seed);
        };
    }
    return _cached_decoder_for_Curve(el);
}
export function _encode_Curve(
    value: Curve,
    elGetter: __utils.ASN1Encoder<Curve>
) {
    if (!_cached_encoder_for_Curve) {
        _cached_encoder_for_Curve = function (
            value: Curve,
            elGetter: __utils.ASN1Encoder<Curve>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_FieldElement(
                            value.a,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_FieldElement(
                            value.b,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.seed === undefined
                            ? undefined
                            : __utils._encodeBitString(value.seed, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Curve(value, elGetter);
}

export type ECPoint = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_ECPoint: __utils.ASN1Decoder<ECPoint> | null = null;
let _cached_encoder_for_ECPoint: __utils.ASN1Encoder<ECPoint> | null = null;
export function _decode_ECPoint(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECPoint) {
        _cached_decoder_for_ECPoint = __utils._decodeOctetString;
    }
    return _cached_decoder_for_ECPoint(el);
}
export function _encode_ECPoint(
    value: ECPoint,
    elGetter: __utils.ASN1Encoder<ECPoint>
) {
    if (!_cached_encoder_for_ECPoint) {
        _cached_encoder_for_ECPoint = __utils._encodeOctetString;
    }
    return _cached_encoder_for_ECPoint(value, elGetter);
}

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

export type HashAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_HashAlgorithm: __utils.ASN1Decoder<
    HashAlgorithm
> | null = null;
let _cached_encoder_for_HashAlgorithm: __utils.ASN1Encoder<
    HashAlgorithm
> | null = null;
export function _decode_HashAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashAlgorithm) {
        _cached_decoder_for_HashAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_HashAlgorithm(el);
}
export function _encode_HashAlgorithm(
    value: HashAlgorithm,
    elGetter: __utils.ASN1Encoder<HashAlgorithm>
) {
    if (!_cached_encoder_for_HashAlgorithm) {
        _cached_encoder_for_HashAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_HashAlgorithm(value, elGetter);
}

export class SpecifiedECDomain {
    constructor(
        readonly version: SpecifiedECDomainVersion,
        readonly fieldID: FieldID,
        readonly curve: Curve,
        readonly base: ECPoint,
        readonly order: asn1.INTEGER,
        readonly cofactor: asn1.OPTIONAL<asn1.INTEGER>,
        readonly hash: asn1.OPTIONAL<HashAlgorithm>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SpecifiedECDomain: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fieldID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "curve",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "base",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "order",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cofactor",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hash",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SpecifiedECDomain: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SpecifiedECDomain: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SpecifiedECDomain: __utils.ASN1Decoder<
    SpecifiedECDomain
> | null = null;
let _cached_encoder_for_SpecifiedECDomain: __utils.ASN1Encoder<
    SpecifiedECDomain
> | null = null;
export function _decode_SpecifiedECDomain(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SpecifiedECDomain) {
        _cached_decoder_for_SpecifiedECDomain = function (
            el: asn1.ASN1Element
        ): SpecifiedECDomain {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: SpecifiedECDomainVersion;
            let fieldID!: FieldID;
            let curve!: Curve;
            let base!: ECPoint;
            let order!: asn1.INTEGER;
            let cofactor: asn1.OPTIONAL<asn1.INTEGER>;
            let hash: asn1.OPTIONAL<HashAlgorithm>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_SpecifiedECDomainVersion(_el);
                },
                fieldID: (_el: asn1.ASN1Element): void => {
                    fieldID = _decode_FieldID(_el);
                },
                curve: (_el: asn1.ASN1Element): void => {
                    curve = _decode_Curve(_el);
                },
                base: (_el: asn1.ASN1Element): void => {
                    base = _decode_ECPoint(_el);
                },
                order: (_el: asn1.ASN1Element): void => {
                    order = __utils._decodeInteger(_el);
                },
                cofactor: (_el: asn1.ASN1Element): void => {
                    cofactor = __utils._decodeInteger(_el);
                },
                hash: (_el: asn1.ASN1Element): void => {
                    hash = _decode_HashAlgorithm(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecifiedECDomain,
                _extension_additions_list_spec_for_SpecifiedECDomain,
                _root_component_type_list_2_spec_for_SpecifiedECDomain,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SpecifiedECDomain /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                fieldID,
                curve,
                base,
                order,
                cofactor,
                hash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SpecifiedECDomain(el);
}
export function _encode_SpecifiedECDomain(
    value: SpecifiedECDomain,
    elGetter: __utils.ASN1Encoder<SpecifiedECDomain>
) {
    if (!_cached_encoder_for_SpecifiedECDomain) {
        _cached_encoder_for_SpecifiedECDomain = function (
            value: SpecifiedECDomain,
            elGetter: __utils.ASN1Encoder<SpecifiedECDomain>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_SpecifiedECDomainVersion(
                                value.version,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_FieldID(
                                value.fieldID,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Curve(
                                value.curve,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_ECPoint(
                                value.base,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.order,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.cofactor === undefined
                                ? undefined
                                : __utils._encodeInteger(
                                      value.cofactor,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.hash === undefined
                                ? undefined
                                : _encode_HashAlgorithm(
                                      value.hash,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SpecifiedECDomain(value, elGetter);
}

export type ECDomainParameters =
    | { specified: SpecifiedECDomain } /* CHOICE_ALT_ROOT */
    | { named: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { implicitCA: asn1.NULL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ECDomainParameters: __utils.ASN1Decoder<
    ECDomainParameters
> | null = null;
let _cached_encoder_for_ECDomainParameters: __utils.ASN1Encoder<
    ECDomainParameters
> | null = null;
export function _decode_ECDomainParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECDomainParameters) {
        _cached_decoder_for_ECDomainParameters = __utils._decode_inextensible_choice<
            ECDomainParameters
        >({
            "UNIVERSAL 16": ["specified", _decode_SpecifiedECDomain],
            "UNIVERSAL 6": ["named", __utils._decodeObjectIdentifier],
            "UNIVERSAL 5": ["implicitCA", __utils._decodeNull],
        });
    }
    return _cached_decoder_for_ECDomainParameters(el);
}
export function _encode_ECDomainParameters(
    value: ECDomainParameters,
    elGetter: __utils.ASN1Encoder<ECDomainParameters>
) {
    if (!_cached_encoder_for_ECDomainParameters) {
        _cached_encoder_for_ECDomainParameters = __utils._encode_choice<
            ECDomainParameters
        >(
            {
                specified: _encode_SpecifiedECDomain,
                named: __utils._encodeObjectIdentifier,
                implicitCA: __utils._encodeNull,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ECDomainParameters(value, elGetter);
}

export type ECCAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_ECCAlgorithm: __utils.ASN1Decoder<
    ECCAlgorithm
> | null = null;
let _cached_encoder_for_ECCAlgorithm: __utils.ASN1Encoder<
    ECCAlgorithm
> | null = null;
export function _decode_ECCAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECCAlgorithm) {
        _cached_decoder_for_ECCAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ECCAlgorithm(el);
}
export function _encode_ECCAlgorithm(
    value: ECCAlgorithm,
    elGetter: __utils.ASN1Encoder<ECCAlgorithm>
) {
    if (!_cached_encoder_for_ECCAlgorithm) {
        _cached_encoder_for_ECCAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ECCAlgorithm(value, elGetter);
}

export type ECCAlgorithms = ECCAlgorithm[]; // SequenceOfType
let _cached_decoder_for_ECCAlgorithms: __utils.ASN1Decoder<
    ECCAlgorithms
> | null = null;
let _cached_encoder_for_ECCAlgorithms: __utils.ASN1Encoder<
    ECCAlgorithms
> | null = null;
export function _decode_ECCAlgorithms(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECCAlgorithms) {
        _cached_decoder_for_ECCAlgorithms = __utils._decodeSequenceOf<
            ECCAlgorithm
        >(() => _decode_ECCAlgorithm);
    }
    return _cached_decoder_for_ECCAlgorithms(el);
}
export function _encode_ECCAlgorithms(
    value: ECCAlgorithms,
    elGetter: __utils.ASN1Encoder<ECCAlgorithms>
) {
    if (!_cached_encoder_for_ECCAlgorithms) {
        _cached_encoder_for_ECCAlgorithms = __utils._encodeSequenceOf<
            ECCAlgorithm
        >(() => _encode_ECCAlgorithm, __utils.BER);
    }
    return _cached_encoder_for_ECCAlgorithms(value, elGetter);
}

export class ECPKRestrictions {
    constructor(
        readonly ecDomain: ECDomainParameters,
        readonly eccAlgorithms: ECCAlgorithms
    ) {}
}
export const _root_component_type_list_1_spec_for_ECPKRestrictions: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ecDomain",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "eccAlgorithms",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ECPKRestrictions: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ECPKRestrictions: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ECPKRestrictions: __utils.ASN1Decoder<
    ECPKRestrictions
> | null = null;
let _cached_encoder_for_ECPKRestrictions: __utils.ASN1Encoder<
    ECPKRestrictions
> | null = null;
export function _decode_ECPKRestrictions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECPKRestrictions) {
        _cached_decoder_for_ECPKRestrictions = function (
            el: asn1.ASN1Element
        ): ECPKRestrictions {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ECPKRestrictions contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "ecDomain";
            sequence[1].name = "eccAlgorithms";
            let ecDomain!: ECDomainParameters;
            let eccAlgorithms!: ECCAlgorithms;
            ecDomain = _decode_ECDomainParameters(sequence[0]);
            eccAlgorithms = _decode_ECCAlgorithms(sequence[1]);
            // TODO: Validate values.
            return new ECPKRestrictions(ecDomain, eccAlgorithms);
        };
    }
    return _cached_decoder_for_ECPKRestrictions(el);
}
export function _encode_ECPKRestrictions(
    value: ECPKRestrictions,
    elGetter: __utils.ASN1Encoder<ECPKRestrictions>
) {
    if (!_cached_encoder_for_ECPKRestrictions) {
        _cached_encoder_for_ECPKRestrictions = function (
            value: ECPKRestrictions,
            elGetter: __utils.ASN1Encoder<ECPKRestrictions>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ECDomainParameters(
                            value.ecDomain,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_ECCAlgorithms(
                            value.eccAlgorithms,
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
    return _cached_encoder_for_ECPKRestrictions(value, elGetter);
}

// TODO: ObjectAssignment: ecPublicKeyTypeRestricted

// TODO: ObjectSetAssignment: ECPKAlgorithms

export type ECPKAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_ECPKAlgorithm: __utils.ASN1Decoder<
    ECPKAlgorithm
> | null = null;
let _cached_encoder_for_ECPKAlgorithm: __utils.ASN1Encoder<
    ECPKAlgorithm
> | null = null;
export function _decode_ECPKAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECPKAlgorithm) {
        _cached_decoder_for_ECPKAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ECPKAlgorithm(el);
}
export function _encode_ECPKAlgorithm(
    value: ECPKAlgorithm,
    elGetter: __utils.ASN1Encoder<ECPKAlgorithm>
) {
    if (!_cached_encoder_for_ECPKAlgorithm) {
        _cached_encoder_for_ECPKAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ECPKAlgorithm(value, elGetter);
}

export class SubjectPublicKeyInfo {
    constructor(
        readonly algorithm: ECPKAlgorithm,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPublicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SubjectPublicKeyInfo: __utils.ASN1Decoder<
    SubjectPublicKeyInfo
> | null = null;
let _cached_encoder_for_SubjectPublicKeyInfo: __utils.ASN1Encoder<
    SubjectPublicKeyInfo
> | null = null;
export function _decode_SubjectPublicKeyInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectPublicKeyInfo) {
        _cached_decoder_for_SubjectPublicKeyInfo = function (
            el: asn1.ASN1Element
        ): SubjectPublicKeyInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SubjectPublicKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "subjectPublicKey";
            let algorithm!: ECPKAlgorithm;
            let subjectPublicKey!: asn1.BIT_STRING;
            algorithm = _decode_ECPKAlgorithm(sequence[0]);
            subjectPublicKey = __utils._decodeBitString(sequence[1]);
            // TODO: Validate values.
            return new SubjectPublicKeyInfo(algorithm, subjectPublicKey);
        };
    }
    return _cached_decoder_for_SubjectPublicKeyInfo(el);
}
export function _encode_SubjectPublicKeyInfo(
    value: SubjectPublicKeyInfo,
    elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>
) {
    if (!_cached_encoder_for_SubjectPublicKeyInfo) {
        _cached_encoder_for_SubjectPublicKeyInfo = function (
            value: SubjectPublicKeyInfo,
            elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ECPKAlgorithm(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.subjectPublicKey,
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
    return _cached_encoder_for_SubjectPublicKeyInfo(value, elGetter);
}

/* END_MODULE ANSI-X9-62 */
