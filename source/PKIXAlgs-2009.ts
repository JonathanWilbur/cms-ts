/*
    BEGIN_MODULE PKIXAlgs-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-algorithms2008-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

// TODO: ObjectSetAssignment: PublicKeys

// TODO: ObjectSetAssignment: SignatureAlgs

// TODO: ObjectSetAssignment: SMimeCaps

// TODO: ObjectAssignment: pk-rsa

export const rsaEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-1 */ 1,
    1,
]);

export class RSAPublicKey {
    constructor(
        readonly modulus: asn1.INTEGER,
        readonly publicExponent: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "modulus",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicExponent",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSAPublicKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RSAPublicKey: __utils.ASN1Decoder<
    RSAPublicKey
> | null = null;
let _cached_encoder_for_RSAPublicKey: __utils.ASN1Encoder<
    RSAPublicKey
> | null = null;
export function _decode_RSAPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAPublicKey) {
        _cached_decoder_for_RSAPublicKey = function (
            el: asn1.ASN1Element
        ): RSAPublicKey {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "RSAPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "modulus";
            sequence[1].name = "publicExponent";
            let modulus!: asn1.INTEGER;
            let publicExponent!: asn1.INTEGER;
            modulus = __utils._decodeInteger(sequence[0]);
            publicExponent = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new RSAPublicKey(modulus, publicExponent);
        };
    }
    return _cached_decoder_for_RSAPublicKey(el);
}
export function _encode_RSAPublicKey(
    value: RSAPublicKey,
    elGetter: __utils.ASN1Encoder<RSAPublicKey>
) {
    if (!_cached_encoder_for_RSAPublicKey) {
        _cached_encoder_for_RSAPublicKey = function (
            value: RSAPublicKey,
            elGetter: __utils.ASN1Encoder<RSAPublicKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.modulus,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.publicExponent,
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
    return _cached_encoder_for_RSAPublicKey(value, elGetter);
}

// TODO: ObjectAssignment: pk-dsa

export const id_dsa: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    1,
]);

export class DSA_Params {
    constructor(
        readonly p: asn1.INTEGER,
        readonly q: asn1.INTEGER,
        readonly g: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_DSA_Params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "p",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "q",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "g",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DSA_Params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DSA_Params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DSA_Params: __utils.ASN1Decoder<
    DSA_Params
> | null = null;
let _cached_encoder_for_DSA_Params: __utils.ASN1Encoder<
    DSA_Params
> | null = null;
export function _decode_DSA_Params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DSA_Params) {
        _cached_decoder_for_DSA_Params = function (
            el: asn1.ASN1Element
        ): DSA_Params {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "DSA-Params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "p";
            sequence[1].name = "q";
            sequence[2].name = "g";
            let p!: asn1.INTEGER;
            let q!: asn1.INTEGER;
            let g!: asn1.INTEGER;
            p = __utils._decodeInteger(sequence[0]);
            q = __utils._decodeInteger(sequence[1]);
            g = __utils._decodeInteger(sequence[2]);
            // TODO: Validate values.
            return new DSA_Params(p, q, g);
        };
    }
    return _cached_decoder_for_DSA_Params(el);
}
export function _encode_DSA_Params(
    value: DSA_Params,
    elGetter: __utils.ASN1Encoder<DSA_Params>
) {
    if (!_cached_encoder_for_DSA_Params) {
        _cached_encoder_for_DSA_Params = function (
            value: DSA_Params,
            elGetter: __utils.ASN1Encoder<DSA_Params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.p,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.q,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.g,
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
    return _cached_encoder_for_DSA_Params(value, elGetter);
}

export type DSAPublicKey = asn1.INTEGER;
let _cached_decoder_for_DSAPublicKey: __utils.ASN1Decoder<
    DSAPublicKey
> | null = null;
let _cached_encoder_for_DSAPublicKey: __utils.ASN1Encoder<
    DSAPublicKey
> | null = null;
export function _decode_DSAPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DSAPublicKey) {
        _cached_decoder_for_DSAPublicKey = __utils._decodeInteger;
    }
    return _cached_decoder_for_DSAPublicKey(el);
}
export function _encode_DSAPublicKey(
    value: DSAPublicKey,
    elGetter: __utils.ASN1Encoder<DSAPublicKey>
) {
    if (!_cached_encoder_for_DSAPublicKey) {
        _cached_encoder_for_DSAPublicKey = __utils._encodeInteger;
    }
    return _cached_encoder_for_DSAPublicKey(value, elGetter);
}

// TODO: ObjectAssignment: pk-dh

export const dhpublicnumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-x942 */ 10046,
        /* number-type */ 2,
        1,
    ]
);

export class ValidationParams {
    constructor(
        readonly seed: asn1.BIT_STRING,
        readonly pgenCounter: asn1.INTEGER
    ) {}
}
export const _root_component_type_list_1_spec_for_ValidationParams: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "seed",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pgenCounter",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ValidationParams: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ValidationParams: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ValidationParams: __utils.ASN1Decoder<
    ValidationParams
> | null = null;
let _cached_encoder_for_ValidationParams: __utils.ASN1Encoder<
    ValidationParams
> | null = null;
export function _decode_ValidationParams(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValidationParams) {
        _cached_decoder_for_ValidationParams = function (
            el: asn1.ASN1Element
        ): ValidationParams {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ValidationParams contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "seed";
            sequence[1].name = "pgenCounter";
            let seed!: asn1.BIT_STRING;
            let pgenCounter!: asn1.INTEGER;
            seed = __utils._decodeBitString(sequence[0]);
            pgenCounter = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new ValidationParams(seed, pgenCounter);
        };
    }
    return _cached_decoder_for_ValidationParams(el);
}
export function _encode_ValidationParams(
    value: ValidationParams,
    elGetter: __utils.ASN1Encoder<ValidationParams>
) {
    if (!_cached_encoder_for_ValidationParams) {
        _cached_encoder_for_ValidationParams = function (
            value: ValidationParams,
            elGetter: __utils.ASN1Encoder<ValidationParams>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.seed,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.pgenCounter,
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
    return _cached_encoder_for_ValidationParams(value, elGetter);
}

export class DomainParameters {
    constructor(
        readonly p: asn1.INTEGER,
        readonly g: asn1.INTEGER,
        readonly q: asn1.INTEGER,
        readonly j: asn1.OPTIONAL<asn1.INTEGER>,
        readonly validationParams: asn1.OPTIONAL<ValidationParams>
    ) {}
}
export const _root_component_type_list_1_spec_for_DomainParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "p",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "g",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "q",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "j",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "validationParams",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DomainParameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DomainParameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DomainParameters: __utils.ASN1Decoder<
    DomainParameters
> | null = null;
let _cached_encoder_for_DomainParameters: __utils.ASN1Encoder<
    DomainParameters
> | null = null;
export function _decode_DomainParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DomainParameters) {
        _cached_decoder_for_DomainParameters = function (
            el: asn1.ASN1Element
        ): DomainParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let p!: asn1.INTEGER;
            let g!: asn1.INTEGER;
            let q!: asn1.INTEGER;
            let j: asn1.OPTIONAL<asn1.INTEGER>;
            let validationParams: asn1.OPTIONAL<ValidationParams>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                p: (_el: asn1.ASN1Element): void => {
                    p = __utils._decodeInteger(_el);
                },
                g: (_el: asn1.ASN1Element): void => {
                    g = __utils._decodeInteger(_el);
                },
                q: (_el: asn1.ASN1Element): void => {
                    q = __utils._decodeInteger(_el);
                },
                j: (_el: asn1.ASN1Element): void => {
                    j = __utils._decodeInteger(_el);
                },
                validationParams: (_el: asn1.ASN1Element): void => {
                    validationParams = _decode_ValidationParams(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DomainParameters,
                _extension_additions_list_spec_for_DomainParameters,
                _root_component_type_list_2_spec_for_DomainParameters,
                undefined
            );
            return new DomainParameters /* SEQUENCE_CONSTRUCTOR_CALL */(
                p,
                g,
                q,
                j,
                validationParams
            );
        };
    }
    return _cached_decoder_for_DomainParameters(el);
}
export function _encode_DomainParameters(
    value: DomainParameters,
    elGetter: __utils.ASN1Encoder<DomainParameters>
) {
    if (!_cached_encoder_for_DomainParameters) {
        _cached_encoder_for_DomainParameters = function (
            value: DomainParameters,
            elGetter: __utils.ASN1Encoder<DomainParameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.p,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.g,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.q,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.j === undefined
                            ? undefined
                            : __utils._encodeInteger(value.j, __utils.BER),
                        /* IF_ABSENT  */ value.validationParams === undefined
                            ? undefined
                            : _encode_ValidationParams(
                                  value.validationParams,
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
    return _cached_encoder_for_DomainParameters(value, elGetter);
}

export type DHPublicKey = asn1.INTEGER;
let _cached_decoder_for_DHPublicKey: __utils.ASN1Decoder<
    DHPublicKey
> | null = null;
let _cached_encoder_for_DHPublicKey: __utils.ASN1Encoder<
    DHPublicKey
> | null = null;
export function _decode_DHPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DHPublicKey) {
        _cached_decoder_for_DHPublicKey = __utils._decodeInteger;
    }
    return _cached_decoder_for_DHPublicKey(el);
}
export function _encode_DHPublicKey(
    value: DHPublicKey,
    elGetter: __utils.ASN1Encoder<DHPublicKey>
) {
    if (!_cached_encoder_for_DHPublicKey) {
        _cached_encoder_for_DHPublicKey = __utils._encodeInteger;
    }
    return _cached_encoder_for_DHPublicKey(value, elGetter);
}

// TODO: ObjectAssignment: pk-kea

export const id_keyExchangeAlgorithm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-itu-t */ 2,
        /* country */ 16,
        /* us */ 840,
        /* organization */ 1,
        /* gov */ 101,
        /* dod */ 2,
        /* infosec */ 1,
        /* algorithms */ 1,
        22,
    ]
);

export type KEA_Params_Id = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_KEA_Params_Id: __utils.ASN1Decoder<
    KEA_Params_Id
> | null = null;
let _cached_encoder_for_KEA_Params_Id: __utils.ASN1Encoder<
    KEA_Params_Id
> | null = null;
export function _decode_KEA_Params_Id(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KEA_Params_Id) {
        _cached_decoder_for_KEA_Params_Id = __utils._decodeOctetString;
    }
    return _cached_decoder_for_KEA_Params_Id(el);
}
export function _encode_KEA_Params_Id(
    value: KEA_Params_Id,
    elGetter: __utils.ASN1Encoder<KEA_Params_Id>
) {
    if (!_cached_encoder_for_KEA_Params_Id) {
        _cached_encoder_for_KEA_Params_Id = __utils._encodeOctetString;
    }
    return _cached_encoder_for_KEA_Params_Id(value, elGetter);
}

// TODO: ObjectAssignment: pk-ec

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

export const id_ecPublicKey: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* keyType */ 2,
        1,
    ]
);

// TODO: ObjectAssignment: pk-ecDH

export const id_ecDH: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* schemes */ 1,
    /* ecdh */ 12,
]);

// TODO: ObjectAssignment: pk-ecMQV

export const id_ecMQV: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* schemes */ 1,
    /* ecmqv */ 13,
]);

export type ECParameters = {
    namedCurve: asn1.OBJECT_IDENTIFIER;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ECParameters: __utils.ASN1Decoder<
    ECParameters
> | null = null;
let _cached_encoder_for_ECParameters: __utils.ASN1Encoder<
    ECParameters
> | null = null;
export function _decode_ECParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ECParameters) {
        _cached_decoder_for_ECParameters = __utils._decode_inextensible_choice<
            ECParameters
        >({
            "UNIVERSAL 6": ["namedCurve", __utils._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_ECParameters(el);
}
export function _encode_ECParameters(
    value: ECParameters,
    elGetter: __utils.ASN1Encoder<ECParameters>
) {
    if (!_cached_encoder_for_ECParameters) {
        _cached_encoder_for_ECParameters = __utils._encode_choice<ECParameters>(
            {
                namedCurve: __utils._encodeObjectIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ECParameters(value, elGetter);
}

// TODO: ObjectClassAssignment: CURVE

// TODO: ObjectSetAssignment: NamedCurve

export const secp192r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* curves */ 3,
    /* prime */ 1,
    1,
]);

export const sect163k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    1,
]);

export const sect163r2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    15,
]);

export const secp224r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    33,
]);

export const sect233k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    26,
]);

export const sect233r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    27,
]);

export const secp256r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* curves */ 3,
    /* prime */ 1,
    7,
]);

export const sect283k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    16,
]);

export const sect283r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    17,
]);

export const secp384r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    34,
]);

export const sect409k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    36,
]);

export const sect409r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    37,
]);

export const secp521r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    35,
]);

export const sect571k1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    38,
]);

export const sect571r1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
    39,
]);

// TODO: ObjectAssignment: sa-rsaWithMD2

export const md2WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-1 */ 1,
        2,
    ]
);

// TODO: ObjectAssignment: sa-rsaWithMD5

export const md5WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-1 */ 1,
        4,
    ]
);

// TODO: ObjectAssignment: sa-rsaWithSHA1

export const sha1WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-1 */ 1,
        5,
    ]
);

// TODO: ObjectAssignment: sa-dsaWithSHA1

export const dsa_with_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    3,
]);

// TODO: ObjectAssignment: sa-dsaWithSHA224

export const dsa_with_sha224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-ccitt */ 2,
        /* country */ 16,
        /* us */ 840,
        /* organization */ 1,
        /* gov */ 101,
        /* csor */ 3,
        /* algorithms */ 4,
        /* id-dsa-with-sha2 */ 3,
        1,
    ]
);

// TODO: ObjectAssignment: sa-dsaWithSHA256

export const dsa_with_sha256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* joint-iso-ccitt */ 2,
        /* country */ 16,
        /* us */ 840,
        /* organization */ 1,
        /* gov */ 101,
        /* csor */ 3,
        /* algorithms */ 4,
        /* id-dsa-with-sha2 */ 3,
        2,
    ]
);

// TODO: ObjectAssignment: sa-ecdsaWithSHA1

export const ecdsa_with_SHA1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* signatures */ 4,
        1,
    ]
);

// TODO: ObjectAssignment: sa-ecdsaWithSHA224

export const ecdsa_with_SHA224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* signatures */ 4,
        /* ecdsa-with-SHA2 */ 3,
        1,
    ]
);

// TODO: ObjectAssignment: sa-ecdsaWithSHA256

export const ecdsa_with_SHA256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* signatures */ 4,
        /* ecdsa-with-SHA2 */ 3,
        2,
    ]
);

// TODO: ObjectAssignment: sa-ecdsaWithSHA384

export const ecdsa_with_SHA384: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* signatures */ 4,
        /* ecdsa-with-SHA2 */ 3,
        3,
    ]
);

// TODO: ObjectAssignment: sa-ecdsaWithSHA512

export const ecdsa_with_SHA512: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* ansi-X9-62 */ 10045,
        /* signatures */ 4,
        /* ecdsa-with-SHA2 */ 3,
        4,
    ]
);

export class DSA_Sig_Value {
    constructor(readonly r: asn1.INTEGER, readonly s: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_DSA_Sig_Value: __utils.ComponentSpec[] = [
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
export const _root_component_type_list_2_spec_for_DSA_Sig_Value: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DSA_Sig_Value: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DSA_Sig_Value: __utils.ASN1Decoder<
    DSA_Sig_Value
> | null = null;
let _cached_encoder_for_DSA_Sig_Value: __utils.ASN1Encoder<
    DSA_Sig_Value
> | null = null;
export function _decode_DSA_Sig_Value(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DSA_Sig_Value) {
        _cached_decoder_for_DSA_Sig_Value = function (
            el: asn1.ASN1Element
        ): DSA_Sig_Value {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "DSA-Sig-Value contained only " +
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
            return new DSA_Sig_Value(r, s);
        };
    }
    return _cached_decoder_for_DSA_Sig_Value(el);
}
export function _encode_DSA_Sig_Value(
    value: DSA_Sig_Value,
    elGetter: __utils.ASN1Encoder<DSA_Sig_Value>
) {
    if (!_cached_encoder_for_DSA_Sig_Value) {
        _cached_encoder_for_DSA_Sig_Value = function (
            value: DSA_Sig_Value,
            elGetter: __utils.ASN1Encoder<DSA_Sig_Value>
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
    return _cached_encoder_for_DSA_Sig_Value(value, elGetter);
}

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

// TODO: ObjectSetAssignment: HashAlgs

// TODO: ObjectAssignment: mda-md2

export const id_md2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    2,
]);

// TODO: ObjectAssignment: mda-md5

export const id_md5: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* digestAlgorithm */ 2,
    5,
]);

// TODO: ObjectAssignment: mda-sha1

export const id_sha1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* END_MODULE PKIXAlgs-2009 */
