/*
    BEGIN_MODULE CryptographicMessageSyntaxAlgorithms-2009
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-cmsalg-2001-02
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
    _decode_ParamOptions,
    _encode_ParamOptions,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "./AlgorithmInformation-2009";

import {
    dhpublicnumber,
    _decode_DHPublicKey,
    _encode_DHPublicKey,
} from "./PKIXAlgs-2009";

// TODO: ObjectSetAssignment: MessageDigestAlgs

// TODO: ObjectSetAssignment: SignatureAlgs

// TODO: ObjectSetAssignment: KeyAgreementAlgs

// TODO: ObjectSetAssignment: KeyAgreePublicKeys

// TODO: ObjectSetAssignment: KeyTransportAlgs

// TODO: ObjectSetAssignment: KeyWrapAlgs

// TODO: ObjectSetAssignment: KeyDerivationAlgs

// TODO: ObjectSetAssignment: ContentEncryptionAlgs

// TODO: ObjectSetAssignment: MessageAuthAlgs

// TODO: ObjectSetAssignment: SMimeCaps

export const id_alg_ESDH: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    5,
]);

export const id_alg_SSDH: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    10,
]);

export const id_alg_CMS3DESwrap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* alg */ 3,
        6,
    ]
);

export const id_alg_CMSRC2wrap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* alg */ 3,
        7,
    ]
);

export const des_ede3_cbc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    7,
]);

export const rc2_cbc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* encryptionAlgorithm */ 3,
    2,
]);

export const hMAC_SHA1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    8,
    1,
    2,
]);

export const id_PBKDF2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-5 */ 5,
    12,
]);

export type KeyWrapAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_KeyWrapAlgorithm: __utils.ASN1Decoder<
    KeyWrapAlgorithm
> | null = null;
let _cached_encoder_for_KeyWrapAlgorithm: __utils.ASN1Encoder<
    KeyWrapAlgorithm
> | null = null;
export function _decode_KeyWrapAlgorithm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyWrapAlgorithm) {
        _cached_decoder_for_KeyWrapAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_KeyWrapAlgorithm(el);
}
export function _encode_KeyWrapAlgorithm(
    value: KeyWrapAlgorithm,
    elGetter: __utils.ASN1Encoder<KeyWrapAlgorithm>
) {
    if (!_cached_encoder_for_KeyWrapAlgorithm) {
        _cached_encoder_for_KeyWrapAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_KeyWrapAlgorithm(value, elGetter);
}

export type RC2ParameterVersion = asn1.INTEGER;
let _cached_decoder_for_RC2ParameterVersion: __utils.ASN1Decoder<
    RC2ParameterVersion
> | null = null;
let _cached_encoder_for_RC2ParameterVersion: __utils.ASN1Encoder<
    RC2ParameterVersion
> | null = null;
export function _decode_RC2ParameterVersion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2ParameterVersion) {
        _cached_decoder_for_RC2ParameterVersion = __utils._decodeInteger;
    }
    return _cached_decoder_for_RC2ParameterVersion(el);
}
export function _encode_RC2ParameterVersion(
    value: RC2ParameterVersion,
    elGetter: __utils.ASN1Encoder<RC2ParameterVersion>
) {
    if (!_cached_encoder_for_RC2ParameterVersion) {
        _cached_encoder_for_RC2ParameterVersion = __utils._encodeInteger;
    }
    return _cached_encoder_for_RC2ParameterVersion(value, elGetter);
}

export type RC2wrapParameter = RC2ParameterVersion; // DefinedType
let _cached_decoder_for_RC2wrapParameter: __utils.ASN1Decoder<
    RC2wrapParameter
> | null = null;
let _cached_encoder_for_RC2wrapParameter: __utils.ASN1Encoder<
    RC2wrapParameter
> | null = null;
export function _decode_RC2wrapParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2wrapParameter) {
        _cached_decoder_for_RC2wrapParameter = _decode_RC2ParameterVersion;
    }
    return _cached_decoder_for_RC2wrapParameter(el);
}
export function _encode_RC2wrapParameter(
    value: RC2wrapParameter,
    elGetter: __utils.ASN1Encoder<RC2wrapParameter>
) {
    if (!_cached_encoder_for_RC2wrapParameter) {
        _cached_encoder_for_RC2wrapParameter = _encode_RC2ParameterVersion;
    }
    return _cached_encoder_for_RC2wrapParameter(value, elGetter);
}

export type IV = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_IV: __utils.ASN1Decoder<IV> | null = null;
let _cached_encoder_for_IV: __utils.ASN1Encoder<IV> | null = null;
export function _decode_IV(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IV) {
        _cached_decoder_for_IV = __utils._decodeOctetString;
    }
    return _cached_decoder_for_IV(el);
}
export function _encode_IV(value: IV, elGetter: __utils.ASN1Encoder<IV>) {
    if (!_cached_encoder_for_IV) {
        _cached_encoder_for_IV = __utils._encodeOctetString;
    }
    return _cached_encoder_for_IV(value, elGetter);
}

export type CBCParameter = IV; // DefinedType
let _cached_decoder_for_CBCParameter: __utils.ASN1Decoder<
    CBCParameter
> | null = null;
let _cached_encoder_for_CBCParameter: __utils.ASN1Encoder<
    CBCParameter
> | null = null;
export function _decode_CBCParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CBCParameter) {
        _cached_decoder_for_CBCParameter = _decode_IV;
    }
    return _cached_decoder_for_CBCParameter(el);
}
export function _encode_CBCParameter(
    value: CBCParameter,
    elGetter: __utils.ASN1Encoder<CBCParameter>
) {
    if (!_cached_encoder_for_CBCParameter) {
        _cached_encoder_for_CBCParameter = _encode_IV;
    }
    return _cached_encoder_for_CBCParameter(value, elGetter);
}

export class RC2CBCParameter {
    constructor(
        readonly rc2ParameterVersion: asn1.INTEGER,
        readonly iv: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rc2ParameterVersion",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iv",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RC2CBCParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RC2CBCParameter: __utils.ASN1Decoder<
    RC2CBCParameter
> | null = null;
let _cached_encoder_for_RC2CBCParameter: __utils.ASN1Encoder<
    RC2CBCParameter
> | null = null;
export function _decode_RC2CBCParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RC2CBCParameter) {
        _cached_decoder_for_RC2CBCParameter = function (
            el: asn1.ASN1Element
        ): RC2CBCParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "RC2CBCParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "rc2ParameterVersion";
            sequence[1].name = "iv";
            let rc2ParameterVersion!: asn1.INTEGER;
            let iv!: asn1.OCTET_STRING;
            rc2ParameterVersion = __utils._decodeInteger(sequence[0]);
            iv = __utils._decodeOctetString(sequence[1]);
                        return new RC2CBCParameter(rc2ParameterVersion, iv);
        };
    }
    return _cached_decoder_for_RC2CBCParameter(el);
}
export function _encode_RC2CBCParameter(
    value: RC2CBCParameter,
    elGetter: __utils.ASN1Encoder<RC2CBCParameter>
) {
    if (!_cached_encoder_for_RC2CBCParameter) {
        _cached_encoder_for_RC2CBCParameter = function (
            value: RC2CBCParameter,
            elGetter: __utils.ASN1Encoder<RC2CBCParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.rc2ParameterVersion,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.iv,
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
    return _cached_encoder_for_RC2CBCParameter(value, elGetter);
}

// TODO: ObjectAssignment: maca-hMAC-SHA1

// TODO: ObjectAssignment: alg-hMAC-SHA1

// TODO: ObjectSetAssignment: PBKDF2-PRFs

// TODO: ObjectSetAssignment: PBKDF2-SaltSources

export type PBKDF2_SaltSourcesAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier: __utils.ASN1Decoder<
    PBKDF2_SaltSourcesAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier: __utils.ASN1Encoder<
    PBKDF2_SaltSourcesAlgorithmIdentifier
> | null = null;
export function _decode_PBKDF2_SaltSourcesAlgorithmIdentifier(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier) {
        _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier(el);
}
export function _encode_PBKDF2_SaltSourcesAlgorithmIdentifier(
    value: PBKDF2_SaltSourcesAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<PBKDF2_SaltSourcesAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier) {
        _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PBKDF2_SaltSourcesAlgorithmIdentifier(
        value,
        elGetter
    );
}

export type PBKDF2_params_salt =
    | { specified: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | {
          otherSource: PBKDF2_SaltSourcesAlgorithmIdentifier;
      } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PBKDF2_params_salt: __utils.ASN1Decoder<
    PBKDF2_params_salt
> | null = null;
let _cached_encoder_for_PBKDF2_params_salt: __utils.ASN1Encoder<
    PBKDF2_params_salt
> | null = null;
export function _decode_PBKDF2_params_salt(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBKDF2_params_salt) {
        _cached_decoder_for_PBKDF2_params_salt = __utils._decode_inextensible_choice<
            PBKDF2_params_salt
        >({
            "UNIVERSAL 4": ["specified", __utils._decodeOctetString],
            "UNIVERSAL 16": [
                "otherSource",
                _decode_PBKDF2_SaltSourcesAlgorithmIdentifier,
            ],
        });
    }
    return _cached_decoder_for_PBKDF2_params_salt(el);
}
export function _encode_PBKDF2_params_salt(
    value: PBKDF2_params_salt,
    elGetter: __utils.ASN1Encoder<PBKDF2_params_salt>
) {
    if (!_cached_encoder_for_PBKDF2_params_salt) {
        _cached_encoder_for_PBKDF2_params_salt = __utils._encode_choice<
            PBKDF2_params_salt
        >(
            {
                specified: __utils._encodeOctetString,
                otherSource: _encode_PBKDF2_SaltSourcesAlgorithmIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PBKDF2_params_salt(value, elGetter);
}

export type PBKDF2_PRFsAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier: __utils.ASN1Decoder<
    PBKDF2_PRFsAlgorithmIdentifier
> | null = null;
let _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier: __utils.ASN1Encoder<
    PBKDF2_PRFsAlgorithmIdentifier
> | null = null;
export function _decode_PBKDF2_PRFsAlgorithmIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier) {
        _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_PBKDF2_PRFsAlgorithmIdentifier(el);
}
export function _encode_PBKDF2_PRFsAlgorithmIdentifier(
    value: PBKDF2_PRFsAlgorithmIdentifier,
    elGetter: __utils.ASN1Encoder<PBKDF2_PRFsAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier) {
        _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_PBKDF2_PRFsAlgorithmIdentifier(value, elGetter);
}

const defaultPBKDF2: PBKDF2_PRFsAlgorithmIdentifier = new AlgorithmIdentifier(
    hMAC_SHA1,
    new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.nill,
        null
    )
);

export class PBKDF2_params {
    constructor(
        readonly salt: PBKDF2_params_salt,
        readonly iterationCount: asn1.INTEGER,
        readonly keyLength: asn1.OPTIONAL<asn1.INTEGER>,
        readonly prf: asn1.OPTIONAL<PBKDF2_PRFsAlgorithmIdentifier>
    ) {}
    public static get _default_value_for_prf() {
        return defaultPBKDF2;
    }
}
export const _root_component_type_list_1_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "salt",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iterationCount",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyLength",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "prf",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBKDF2_params: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBKDF2_params: __utils.ASN1Decoder<
    PBKDF2_params
> | null = null;
let _cached_encoder_for_PBKDF2_params: __utils.ASN1Encoder<
    PBKDF2_params
> | null = null;
export function _decode_PBKDF2_params(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBKDF2_params) {
        _cached_decoder_for_PBKDF2_params = function (
            el: asn1.ASN1Element
        ): PBKDF2_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let salt!: PBKDF2_params_salt;
            let iterationCount!: asn1.INTEGER;
            let keyLength: asn1.OPTIONAL<asn1.INTEGER>;
            let prf: asn1.OPTIONAL<PBKDF2_PRFsAlgorithmIdentifier> =
                PBKDF2_params._default_value_for_prf;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                salt: (_el: asn1.ASN1Element): void => {
                    salt = _decode_PBKDF2_params_salt(_el);
                },
                iterationCount: (_el: asn1.ASN1Element): void => {
                    iterationCount = __utils._decodeInteger(_el);
                },
                keyLength: (_el: asn1.ASN1Element): void => {
                    keyLength = __utils._decodeInteger(_el);
                },
                prf: (_el: asn1.ASN1Element): void => {
                    prf = _decode_PBKDF2_PRFsAlgorithmIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PBKDF2_params,
                _extension_additions_list_spec_for_PBKDF2_params,
                _root_component_type_list_2_spec_for_PBKDF2_params,
                undefined
            );
            return new PBKDF2_params /* SEQUENCE_CONSTRUCTOR_CALL */(
                salt,
                iterationCount,
                keyLength,
                prf
            );
        };
    }
    return _cached_decoder_for_PBKDF2_params(el);
}
export function _encode_PBKDF2_params(
    value: PBKDF2_params,
    elGetter: __utils.ASN1Encoder<PBKDF2_params>
) {
    if (!_cached_encoder_for_PBKDF2_params) {
        _cached_encoder_for_PBKDF2_params = function (
            value: PBKDF2_params,
            elGetter: __utils.ASN1Encoder<PBKDF2_params>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PBKDF2_params_salt(
                            value.salt,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.iterationCount,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.keyLength === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.keyLength,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.prf === undefined ||
                        __utils.deepEq(
                            value.prf,
                            PBKDF2_params._default_value_for_prf
                        )
                            ? undefined
                            : _encode_PBKDF2_PRFsAlgorithmIdentifier(
                                  value.prf,
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
    return _cached_encoder_for_PBKDF2_params(value, elGetter);
}

// TODO: ObjectAssignment: kaa-esdh

// TODO: ObjectAssignment: kaa-ssdh

export const dh_public_number: asn1.OBJECT_IDENTIFIER = dhpublicnumber;

// TODO: ObjectAssignment: pk-originator-dh

// TODO: ObjectAssignment: kwa-3DESWrap

// TODO: ObjectAssignment: kwa-RC2Wrap

// TODO: ObjectAssignment: kda-PBKDF2

// TODO: ObjectAssignment: cea-3DES-cbc

// TODO: ObjectAssignment: cea-RC2-cbc

// TODO: ObjectAssignment: kt-rsa

// TODO: ObjectAssignment: cap-3DESwrap

/* END_MODULE CryptographicMessageSyntaxAlgorithms-2009 */
