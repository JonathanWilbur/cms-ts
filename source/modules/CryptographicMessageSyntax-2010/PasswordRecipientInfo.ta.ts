/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax-2010/CMSVersion.ta";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta";
import {
    KeyDerivationAlgorithmIdentifier,
    _decode_KeyDerivationAlgorithmIdentifier,
    _encode_KeyDerivationAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyDerivationAlgorithmIdentifier.ta";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyEncryptionAlgorithmIdentifier.ta";
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
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta";
export {
    KeyDerivationAlgorithmIdentifier,
    _decode_KeyDerivationAlgorithmIdentifier,
    _encode_KeyDerivationAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyDerivationAlgorithmIdentifier.ta";
export {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/KeyEncryptionAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION PasswordRecipientInfo */
/**
 * @summary PasswordRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PasswordRecipientInfo ::= SEQUENCE {
 * version             CMSVersion,   -- always set to 0
 * keyDerivationAlgorithm     [0] KeyDerivationAlgorithmIdentifier
 *         OPTIONAL,
 * keyEncryptionAlgorithm     KeyEncryptionAlgorithmIdentifier,
 * encryptedKey         EncryptedKey }
 * ```
 *
 * @class
 */
export class PasswordRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `keyDerivationAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyDerivationAlgorithm: OPTIONAL<KeyDerivationAlgorithmIdentifier>,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a PasswordRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `PasswordRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PasswordRecipientInfo`.
     * @returns {PasswordRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PasswordRecipientInfo]: PasswordRecipientInfo[_K] }
    ): PasswordRecipientInfo {
        return new PasswordRecipientInfo(
            _o.version,
            _o.keyDerivationAlgorithm,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PasswordRecipientInfo */
/**
 * @summary The Leading Root Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyDerivationAlgorithm",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PasswordRecipientInfo */
/**
 * @summary The Trailing Root Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PasswordRecipientInfo */
/**
 * @summary The Extension Addition Component Types of PasswordRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PasswordRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PasswordRecipientInfo */
let _cached_decoder_for_PasswordRecipientInfo: $.ASN1Decoder<PasswordRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PasswordRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PasswordRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PasswordRecipientInfo} The decoded data structure.
 */
export function _decode_PasswordRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_PasswordRecipientInfo) {
        _cached_decoder_for_PasswordRecipientInfo = function (
            el: _Element
        ): PasswordRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let keyDerivationAlgorithm: OPTIONAL<KeyDerivationAlgorithmIdentifier>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                keyDerivationAlgorithm: (_el: _Element): void => {
                    keyDerivationAlgorithm = $._decode_implicit<KeyDerivationAlgorithmIdentifier>(
                        () => _decode_KeyDerivationAlgorithmIdentifier
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: _Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PasswordRecipientInfo,
                _extension_additions_list_spec_for_PasswordRecipientInfo,
                _root_component_type_list_2_spec_for_PasswordRecipientInfo,
                undefined
            );
            return new PasswordRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                keyDerivationAlgorithm,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_PasswordRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PasswordRecipientInfo */
let _cached_encoder_for_PasswordRecipientInfo: $.ASN1Encoder<PasswordRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PasswordRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PasswordRecipientInfo */
/**
 * @summary Encodes a(n) PasswordRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PasswordRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_PasswordRecipientInfo(
    value: PasswordRecipientInfo,
    elGetter: $.ASN1Encoder<PasswordRecipientInfo>
) {
    if (!_cached_encoder_for_PasswordRecipientInfo) {
        _cached_encoder_for_PasswordRecipientInfo = function (
            value: PasswordRecipientInfo,
            elGetter: $.ASN1Encoder<PasswordRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyDerivationAlgorithm ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_KeyDerivationAlgorithmIdentifier,
                                  $.BER
                              )(value.keyDerivationAlgorithm, $.BER),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PasswordRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PasswordRecipientInfo */

/* eslint-enable */
