/*
    BEGIN_MODULE PKIX1-PSS-OAEP-Algorithms-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-rsa-pkalgs-02
    IRI: undefined
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
    id_sha1,
    _decode_RSAPublicKey,
    _encode_RSAPublicKey,
} from "./PKIXAlgs-2009";

export const pkcs_1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    1,
]);

// TODO: ObjectSetAssignment: PublicKeys

// TODO: ObjectSetAssignment: SignatureAlgs

// TODO: ObjectSetAssignment: KeyTransportAlgs

// TODO: ObjectSetAssignment: HashAlgs

// TODO: ObjectSetAssignment: SMimeCaps

// TODO: ObjectAssignment: pk-rsaSSA-PSS

// TODO: ObjectAssignment: sa-rsaSSA-PSS

// TODO: ObjectAssignment: sa-sha224WithRSAEncryption

export const sha224WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    pkcs_1
);

// TODO: ObjectAssignment: sa-sha256WithRSAEncryption

export const sha256WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    pkcs_1
);

// TODO: ObjectAssignment: sa-sha384WithRSAEncryption

export const sha384WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    pkcs_1
);

// TODO: ObjectAssignment: sa-sha512WithRSAEncryption

export const sha512WithRSAEncryption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    pkcs_1
);

// TODO: ObjectAssignment: pk-rsaES-OAEP

// TODO: ObjectAssignment: kta-rsaES-OAEP

export const id_RSAES_OAEP: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    pkcs_1
);

export const id_RSASSA_PSS: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    pkcs_1
);

export const id_sha224: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    /* hashalgs */ 2,
    4,
]);

// TODO: ObjectAssignment: mda-sha224

export const id_sha256: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    /* hashalgs */ 2,
    1,
]);

// TODO: ObjectAssignment: mda-sha256

export const id_sha384: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    /* hashalgs */ 2,
    2,
]);

// TODO: ObjectAssignment: mda-sha384

export const id_sha512: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    /* hashalgs */ 2,
    3,
]);

// TODO: ObjectAssignment: mda-sha512

export const nullParameters: asn1.NULL = null;

// TODO: ObjectSetAssignment: HashAlgorithms

// TODO: ObjectSetAssignment: PKCS1MGFAlgorithms

// TODO: ObjectSetAssignment: PSS-SourceAlgorithms

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

export const sha1Identifier: HashAlgorithm = new AlgorithmIdentifier(
    id_sha1,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    )
);

export type MaskGenAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_MaskGenAlgorithm: __utils.ASN1Decoder<
    MaskGenAlgorithm
> | null = null;
let _cached_encoder_for_MaskGenAlgorithm: __utils.ASN1Encoder<
    MaskGenAlgorithm
> | null = null;
export function _decode_MaskGenAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MaskGenAlgorithm) {
        _cached_decoder_for_MaskGenAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MaskGenAlgorithm(el);
}
export function _encode_MaskGenAlgorithm(
    value: MaskGenAlgorithm,
    elGetter: __utils.ASN1Encoder<MaskGenAlgorithm>
) {
    if (!_cached_encoder_for_MaskGenAlgorithm) {
        _cached_encoder_for_MaskGenAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MaskGenAlgorithm(value, elGetter);
}

export const id_mgf1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    pkcs_1
);

export const mgf1SHA1: MaskGenAlgorithm = new AlgorithmIdentifier(
    id_mgf1,
    _encode_HashAlgorithm(sha1Identifier, __utils.DER)
);

export class RSASSA_PSS_params {
    constructor(
        readonly hashAlgorithm: asn1.OPTIONAL<HashAlgorithm>,
        readonly maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm>,
        readonly saltLength: asn1.OPTIONAL<asn1.INTEGER>,
        readonly trailerField: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
    public static get _default_value_for_hashAlgorithm() {
        return sha1Identifier;
    }
    public static get _default_value_for_maskGenAlgorithm() {
        return mgf1SHA1;
    }
    public static get _default_value_for_saltLength() {
        return 20;
    }
    public static get _default_value_for_trailerField() {
        return 1;
    }
}
export const _root_component_type_list_1_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maskGenAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "saltLength",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "trailerField",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSASSA_PSS_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RSASSA_PSS_params: __utils.ASN1Decoder<
    RSASSA_PSS_params
> | null = null;
let _cached_encoder_for_RSASSA_PSS_params: __utils.ASN1Encoder<
    RSASSA_PSS_params
> | null = null;
export function _decode_RSASSA_PSS_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSASSA_PSS_params) {
        _cached_decoder_for_RSASSA_PSS_params = function (
            el: asn1.ASN1Element
        ): RSASSA_PSS_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> =
                RSASSA_PSS_params._default_value_for_hashAlgorithm;
            let maskGenAlgorithm: asn1.OPTIONAL<MaskGenAlgorithm> =
                RSASSA_PSS_params._default_value_for_maskGenAlgorithm;
            let saltLength: asn1.OPTIONAL<asn1.INTEGER> =
                RSASSA_PSS_params._default_value_for_saltLength;
            let trailerField: asn1.OPTIONAL<asn1.INTEGER> =
                RSASSA_PSS_params._default_value_for_trailerField;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlgorithm: (_el: asn1.ASN1Element): void => {
                    hashAlgorithm = __utils._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenAlgorithm: (_el: asn1.ASN1Element): void => {
                    maskGenAlgorithm = __utils._decode_explicit<
                        MaskGenAlgorithm
                    >(() => _decode_MaskGenAlgorithm)(_el);
                },
                saltLength: (_el: asn1.ASN1Element): void => {
                    saltLength = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                trailerField: (_el: asn1.ASN1Element): void => {
                    trailerField = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSASSA_PSS_params,
                _extension_additions_list_spec_for_RSASSA_PSS_params,
                _root_component_type_list_2_spec_for_RSASSA_PSS_params,
                undefined
            );
            return new RSASSA_PSS_params /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlgorithm,
                maskGenAlgorithm,
                saltLength,
                trailerField
            );
        };
    }
    return _cached_decoder_for_RSASSA_PSS_params(el);
}
export function _encode_RSASSA_PSS_params(
    value: RSASSA_PSS_params,
    elGetter: __utils.ASN1Encoder<RSASSA_PSS_params>
) {
    if (!_cached_encoder_for_RSASSA_PSS_params) {
        _cached_encoder_for_RSASSA_PSS_params = function (
            value: RSASSA_PSS_params,
            elGetter: __utils.ASN1Encoder<RSASSA_PSS_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        __utils.deepEq(
                            value.hashAlgorithm,
                            RSASSA_PSS_params._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  __utils.BER
                              )(value.hashAlgorithm, __utils.BER),
                        /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                        __utils.deepEq(
                            value.maskGenAlgorithm,
                            RSASSA_PSS_params._default_value_for_maskGenAlgorithm
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  __utils.BER
                              )(value.maskGenAlgorithm, __utils.BER),
                        /* IF_DEFAULT */ value.saltLength === undefined ||
                        __utils.deepEq(
                            value.saltLength,
                            RSASSA_PSS_params._default_value_for_saltLength
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.saltLength, __utils.BER),
                        /* IF_DEFAULT */ value.trailerField === undefined ||
                        __utils.deepEq(
                            value.trailerField,
                            RSASSA_PSS_params._default_value_for_trailerField
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.trailerField, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RSASSA_PSS_params(value, elGetter);
}

export type PSourceAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PSourceAlgorithm: __utils.ASN1Decoder<
    PSourceAlgorithm
> | null = null;
let _cached_encoder_for_PSourceAlgorithm: __utils.ASN1Encoder<
    PSourceAlgorithm
> | null = null;
export function _decode_PSourceAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PSourceAlgorithm) {
        _cached_decoder_for_PSourceAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PSourceAlgorithm(el);
}
export function _encode_PSourceAlgorithm(
    value: PSourceAlgorithm,
    elGetter: __utils.ASN1Encoder<PSourceAlgorithm>
) {
    if (!_cached_encoder_for_PSourceAlgorithm) {
        _cached_encoder_for_PSourceAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PSourceAlgorithm(value, elGetter);
}

export const id_pSpecified: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    pkcs_1
);

export type EncodingParameters = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncodingParameters: __utils.ASN1Decoder<
    EncodingParameters
> | null = null;
let _cached_encoder_for_EncodingParameters: __utils.ASN1Encoder<
    EncodingParameters
> | null = null;
export function _decode_EncodingParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncodingParameters) {
        _cached_decoder_for_EncodingParameters = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncodingParameters(el);
}
export function _encode_EncodingParameters(
    value: EncodingParameters,
    elGetter: __utils.ASN1Encoder<EncodingParameters>
) {
    if (!_cached_encoder_for_EncodingParameters) {
        _cached_encoder_for_EncodingParameters = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncodingParameters(value, elGetter);
}

export const nullOctetString: EncodingParameters = new Uint8Array(0);

export const pSpecifiedEmpty: PSourceAlgorithm = new AlgorithmIdentifier(
    id_pSpecified,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.octetString,
        nullOctetString
    )
);

export class RSAES_OAEP_params {
    constructor(
        readonly hashFunc: asn1.OPTIONAL<HashAlgorithm>,
        readonly maskGenFunc: asn1.OPTIONAL<MaskGenAlgorithm>,
        readonly pSourceFunc: asn1.OPTIONAL<PSourceAlgorithm>
    ) {}
    public static get _default_value_for_hashFunc() {
        return sha1Identifier;
    }
    public static get _default_value_for_maskGenFunc() {
        return mgf1SHA1;
    }
    public static get _default_value_for_pSourceFunc() {
        return pSpecifiedEmpty;
    }
}
export const _root_component_type_list_1_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashFunc",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maskGenFunc",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pSourceFunc",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RSAES_OAEP_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RSAES_OAEP_params: __utils.ASN1Decoder<
    RSAES_OAEP_params
> | null = null;
let _cached_encoder_for_RSAES_OAEP_params: __utils.ASN1Encoder<
    RSAES_OAEP_params
> | null = null;
export function _decode_RSAES_OAEP_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RSAES_OAEP_params) {
        _cached_decoder_for_RSAES_OAEP_params = function (
            el: asn1.ASN1Element
        ): RSAES_OAEP_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashFunc: asn1.OPTIONAL<HashAlgorithm> =
                RSAES_OAEP_params._default_value_for_hashFunc;
            let maskGenFunc: asn1.OPTIONAL<MaskGenAlgorithm> =
                RSAES_OAEP_params._default_value_for_maskGenFunc;
            let pSourceFunc: asn1.OPTIONAL<PSourceAlgorithm> =
                RSAES_OAEP_params._default_value_for_pSourceFunc;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashFunc: (_el: asn1.ASN1Element): void => {
                    hashFunc = __utils._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenFunc: (_el: asn1.ASN1Element): void => {
                    maskGenFunc = __utils._decode_explicit<MaskGenAlgorithm>(
                        () => _decode_MaskGenAlgorithm
                    )(_el);
                },
                pSourceFunc: (_el: asn1.ASN1Element): void => {
                    pSourceFunc = __utils._decode_explicit<PSourceAlgorithm>(
                        () => _decode_PSourceAlgorithm
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSAES_OAEP_params,
                _extension_additions_list_spec_for_RSAES_OAEP_params,
                _root_component_type_list_2_spec_for_RSAES_OAEP_params,
                undefined
            );
            return new RSAES_OAEP_params /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashFunc,
                maskGenFunc,
                pSourceFunc
            );
        };
    }
    return _cached_decoder_for_RSAES_OAEP_params(el);
}
export function _encode_RSAES_OAEP_params(
    value: RSAES_OAEP_params,
    elGetter: __utils.ASN1Encoder<RSAES_OAEP_params>
) {
    if (!_cached_encoder_for_RSAES_OAEP_params) {
        _cached_encoder_for_RSAES_OAEP_params = function (
            value: RSAES_OAEP_params,
            elGetter: __utils.ASN1Encoder<RSAES_OAEP_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashFunc === undefined ||
                        __utils.deepEq(
                            value.hashFunc,
                            RSAES_OAEP_params._default_value_for_hashFunc
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  __utils.BER
                              )(value.hashFunc, __utils.BER),
                        /* IF_DEFAULT */ value.maskGenFunc === undefined ||
                        __utils.deepEq(
                            value.maskGenFunc,
                            RSAES_OAEP_params._default_value_for_maskGenFunc
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  __utils.BER
                              )(value.maskGenFunc, __utils.BER),
                        /* IF_DEFAULT */ value.pSourceFunc === undefined ||
                        __utils.deepEq(
                            value.pSourceFunc,
                            RSAES_OAEP_params._default_value_for_pSourceFunc
                        )
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PSourceAlgorithm,
                                  __utils.BER
                              )(value.pSourceFunc, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RSAES_OAEP_params(value, elGetter);
}

/* END_MODULE PKIX1-PSS-OAEP-Algorithms-2009 */
