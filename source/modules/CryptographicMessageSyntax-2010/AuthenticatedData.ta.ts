/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthAttributes,
    _decode_AuthAttributes,
    _encode_AuthAttributes,
} from "../CryptographicMessageSyntax-2010/AuthAttributes.ta";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax-2010/CMSVersion.ta";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta";
import {
    EncapsulatedContentInfo,
    _decode_EncapsulatedContentInfo,
    _encode_EncapsulatedContentInfo,
} from "../CryptographicMessageSyntax-2010/EncapsulatedContentInfo.ta";
import {
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCode.ta";
import {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta";
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../CryptographicMessageSyntax-2010/OriginatorInfo.ta";
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../CryptographicMessageSyntax-2010/RecipientInfos.ta";
import {
    UnauthAttributes,
    _decode_UnauthAttributes,
    _encode_UnauthAttributes,
} from "../CryptographicMessageSyntax-2010/UnauthAttributes.ta";
export {
    AuthAttributes,
    _decode_AuthAttributes,
    _encode_AuthAttributes,
} from "../CryptographicMessageSyntax-2010/AuthAttributes.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax-2010/CMSVersion.ta";
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta";
export {
    EncapsulatedContentInfo,
    _decode_EncapsulatedContentInfo,
    _encode_EncapsulatedContentInfo,
} from "../CryptographicMessageSyntax-2010/EncapsulatedContentInfo.ta";
export {
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCode.ta";
export {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta";
export {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../CryptographicMessageSyntax-2010/OriginatorInfo.ta";
export {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../CryptographicMessageSyntax-2010/RecipientInfos.ta";
export {
    UnauthAttributes,
    _decode_UnauthAttributes,
    _encode_UnauthAttributes,
} from "../CryptographicMessageSyntax-2010/UnauthAttributes.ta";

/* START_OF_SYMBOL_DEFINITION AuthenticatedData */
/**
 * @summary AuthenticatedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedData ::= SEQUENCE {
 * version         CMSVersion,
 * originatorInfo     [0] IMPLICIT OriginatorInfo OPTIONAL,
 * recipientInfos     RecipientInfos,
 * macAlgorithm     MessageAuthenticationCodeAlgorithm,
 * digestAlgorithm     [1] DigestAlgorithmIdentifier OPTIONAL,
 * encapContentInfo     EncapsulatedContentInfo,
 * authAttrs         [2] IMPLICIT AuthAttributes OPTIONAL,
 * mac             MessageAuthenticationCode,
 * unauthAttrs     [3] IMPLICIT UnauthAttributes OPTIONAL }
 * ```
 *
 * @class
 */
export class AuthenticatedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originatorInfo`.
         * @public
         * @readonly
         */
        readonly originatorInfo: OPTIONAL<OriginatorInfo>,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `macAlgorithm`.
         * @public
         * @readonly
         */
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithm,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>,
        /**
         * @summary `encapContentInfo`.
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `authAttrs`.
         * @public
         * @readonly
         */
        readonly authAttrs: OPTIONAL<AuthAttributes>,
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: MessageAuthenticationCode,
        /**
         * @summary `unauthAttrs`.
         * @public
         * @readonly
         */
        readonly unauthAttrs: OPTIONAL<UnauthAttributes>
    ) {}

    /**
     * @summary Restructures an object into a AuthenticatedData
     * @description
     *
     * This takes an `object` and converts it to a `AuthenticatedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticatedData`.
     * @returns {AuthenticatedData}
     */
    public static _from_object(
        _o: { [_K in keyof AuthenticatedData]: AuthenticatedData[_K] }
    ): AuthenticatedData {
        return new AuthenticatedData(
            _o.version,
            _o.originatorInfo,
            _o.recipientInfos,
            _o.macAlgorithm,
            _o.digestAlgorithm,
            _o.encapContentInfo,
            _o.authAttrs,
            _o.mac,
            _o.unauthAttrs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthenticatedData */
/**
 * @summary The Leading Root Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthenticatedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "originatorInfo",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "recipientInfos",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "macAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encapContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authAttrs",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mac",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unauthAttrs",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthenticatedData */
/**
 * @summary The Trailing Root Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthenticatedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthenticatedData */
/**
 * @summary The Extension Addition Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthenticatedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedData */
let _cached_decoder_for_AuthenticatedData: $.ASN1Decoder<AuthenticatedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _decode_AuthenticatedData */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedData} The decoded data structure.
 */
export function _decode_AuthenticatedData(el: _Element) {
    if (!_cached_decoder_for_AuthenticatedData) {
        _cached_decoder_for_AuthenticatedData = function (
            el: _Element
        ): AuthenticatedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originatorInfo: OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let macAlgorithm!: MessageAuthenticationCodeAlgorithm;
            let digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>;
            let encapContentInfo!: EncapsulatedContentInfo;
            let authAttrs: OPTIONAL<AuthAttributes>;
            let mac!: MessageAuthenticationCode;
            let unauthAttrs: OPTIONAL<UnauthAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originatorInfo: (_el: _Element): void => {
                    originatorInfo = $._decode_implicit<OriginatorInfo>(
                        () => _decode_OriginatorInfo
                    )(_el);
                },
                recipientInfos: (_el: _Element): void => {
                    recipientInfos = _decode_RecipientInfos(_el);
                },
                macAlgorithm: (_el: _Element): void => {
                    macAlgorithm = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = $._decode_implicit<DigestAlgorithmIdentifier>(
                        () => _decode_DigestAlgorithmIdentifier
                    )(_el);
                },
                encapContentInfo: (_el: _Element): void => {
                    encapContentInfo = _decode_EncapsulatedContentInfo(_el);
                },
                authAttrs: (_el: _Element): void => {
                    authAttrs = $._decode_implicit<AuthAttributes>(
                        () => _decode_AuthAttributes
                    )(_el);
                },
                mac: (_el: _Element): void => {
                    mac = _decode_MessageAuthenticationCode(_el);
                },
                unauthAttrs: (_el: _Element): void => {
                    unauthAttrs = $._decode_implicit<UnauthAttributes>(
                        () => _decode_UnauthAttributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticatedData,
                _extension_additions_list_spec_for_AuthenticatedData,
                _root_component_type_list_2_spec_for_AuthenticatedData,
                undefined
            );
            return new AuthenticatedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                originatorInfo,
                recipientInfos,
                macAlgorithm,
                digestAlgorithm,
                encapContentInfo,
                authAttrs,
                mac,
                unauthAttrs
            );
        };
    }
    return _cached_decoder_for_AuthenticatedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedData */
let _cached_encoder_for_AuthenticatedData: $.ASN1Encoder<AuthenticatedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthenticatedData */

/* START_OF_SYMBOL_DEFINITION _encode_AuthenticatedData */
/**
 * @summary Encodes a(n) AuthenticatedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedData, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedData(
    value: AuthenticatedData,
    elGetter: $.ASN1Encoder<AuthenticatedData>
) {
    if (!_cached_encoder_for_AuthenticatedData) {
        _cached_encoder_for_AuthenticatedData = function (
            value: AuthenticatedData,
            elGetter: $.ASN1Encoder<AuthenticatedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  $.BER
                              )(value.originatorInfo, $.BER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithm(
                            value.macAlgorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.digestAlgorithm === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DigestAlgorithmIdentifier,
                                  $.BER
                              )(value.digestAlgorithm, $.BER),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.authAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AuthAttributes,
                                  $.BER
                              )(value.authAttrs, $.BER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.mac,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unauthAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UnauthAttributes,
                                  $.BER
                              )(value.unauthAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthenticatedData */

/* eslint-enable */
