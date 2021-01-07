/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyConstructionAlgorithmIdentifier,
    _decode_KeyConstructionAlgorithmIdentifier,
    _encode_KeyConstructionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyConstructionAlgorithmIdentifier.ta";
import {
    KeyConstructionDomain,
    _decode_KeyConstructionDomain,
    _encode_KeyConstructionDomain,
} from "../CMSCKMKeyManagement/KeyConstructionDomain.ta";
import {
    KeyConstructionRecipient,
    _decode_KeyConstructionRecipient,
    _encode_KeyConstructionRecipient,
} from "../CMSCKMKeyManagement/KeyConstructionRecipient.ta";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../CMSCKMKeyManagement/Version.ta";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta";
import {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../CryptographicMessageSyntax-2010/UserKeyingMaterial.ta";
export {
    KeyConstructionAlgorithmIdentifier,
    _decode_KeyConstructionAlgorithmIdentifier,
    _encode_KeyConstructionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyConstructionAlgorithmIdentifier.ta";
export {
    KeyConstructionDomain,
    _decode_KeyConstructionDomain,
    _encode_KeyConstructionDomain,
} from "../CMSCKMKeyManagement/KeyConstructionDomain.ta";
export {
    KeyConstructionRecipient,
    _decode_KeyConstructionRecipient,
    _encode_KeyConstructionRecipient,
} from "../CMSCKMKeyManagement/KeyConstructionRecipient.ta";
export {
    Version,
    _decode_Version,
    _encode_Version,
} from "../CMSCKMKeyManagement/Version.ta";
export {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax-2010/EncryptedKey.ta";
export {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../CryptographicMessageSyntax-2010/UserKeyingMaterial.ta";

/* START_OF_SYMBOL_DEFINITION KeyConstructRecipientInfo */
/**
 * @summary KeyConstructRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructRecipientInfo ::= SEQUENCE {
 * version             Version,
 * did                    KeyConstructionDomain OPTIONAL,
 * ckmid                [0] KeyConstructionRecipient,
 * ukm                    UserKeyingMaterial OPTIONAL,
 * keyConstructionAlgorithm KeyConstructionAlgorithmIdentifier,
 * encryptedRandom         EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class KeyConstructRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `did`.
         * @public
         * @readonly
         */
        readonly did: OPTIONAL<KeyConstructionDomain>,
        /**
         * @summary `ckmid`.
         * @public
         * @readonly
         */
        readonly ckmid: KeyConstructionRecipient,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OPTIONAL<UserKeyingMaterial>,
        /**
         * @summary `keyConstructionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyConstructionAlgorithm: KeyConstructionAlgorithmIdentifier,
        /**
         * @summary `encryptedRandom`.
         * @public
         * @readonly
         */
        readonly encryptedRandom: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a KeyConstructRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyConstructRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyConstructRecipientInfo`.
     * @returns {KeyConstructRecipientInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyConstructRecipientInfo]: KeyConstructRecipientInfo[_K];
        }
    ): KeyConstructRecipientInfo {
        return new KeyConstructRecipientInfo(
            _o.version,
            _o.did,
            _o.ckmid,
            _o.ukm,
            _o.keyConstructionAlgorithm,
            _o.encryptedRandom
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyConstructRecipientInfo */
/**
 * @summary The Leading Root Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "did",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ckmid",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ukm",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyConstructionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedRandom",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyConstructRecipientInfo */
/**
 * @summary The Trailing Root Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyConstructRecipientInfo */
/**
 * @summary The Extension Addition Component Types of KeyConstructRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyConstructRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructRecipientInfo */
let _cached_decoder_for_KeyConstructRecipientInfo: $.ASN1Decoder<KeyConstructRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyConstructRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructRecipientInfo} The decoded data structure.
 */
export function _decode_KeyConstructRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KeyConstructRecipientInfo) {
        _cached_decoder_for_KeyConstructRecipientInfo = function (
            el: _Element
        ): KeyConstructRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let did: OPTIONAL<KeyConstructionDomain>;
            let ckmid!: KeyConstructionRecipient;
            let ukm: OPTIONAL<UserKeyingMaterial>;
            let keyConstructionAlgorithm!: KeyConstructionAlgorithmIdentifier;
            let encryptedRandom!: EncryptedKey;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                did: (_el: _Element): void => {
                    did = _decode_KeyConstructionDomain(_el);
                },
                ckmid: (_el: _Element): void => {
                    ckmid = $._decode_explicit<KeyConstructionRecipient>(
                        () => _decode_KeyConstructionRecipient
                    )(_el);
                },
                ukm: (_el: _Element): void => {
                    ukm = _decode_UserKeyingMaterial(_el);
                },
                keyConstructionAlgorithm: (_el: _Element): void => {
                    keyConstructionAlgorithm = _decode_KeyConstructionAlgorithmIdentifier(
                        _el
                    );
                },
                encryptedRandom: (_el: _Element): void => {
                    encryptedRandom = _decode_EncryptedKey(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructRecipientInfo,
                _extension_additions_list_spec_for_KeyConstructRecipientInfo,
                _root_component_type_list_2_spec_for_KeyConstructRecipientInfo,
                undefined
            );
            return new KeyConstructRecipientInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                did,
                ckmid,
                ukm,
                keyConstructionAlgorithm,
                encryptedRandom
            );
        };
    }
    return _cached_decoder_for_KeyConstructRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructRecipientInfo */
let _cached_encoder_for_KeyConstructRecipientInfo: $.ASN1Encoder<KeyConstructRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyConstructRecipientInfo */
/**
 * @summary Encodes a(n) KeyConstructRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructRecipientInfo(
    value: KeyConstructRecipientInfo,
    elGetter: $.ASN1Encoder<KeyConstructRecipientInfo>
) {
    if (!_cached_encoder_for_KeyConstructRecipientInfo) {
        _cached_encoder_for_KeyConstructRecipientInfo = function (
            value: KeyConstructRecipientInfo,
            elGetter: $.ASN1Encoder<KeyConstructRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* IF_ABSENT  */ value.did === undefined
                            ? undefined
                            : _encode_KeyConstructionDomain(value.did, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_KeyConstructionRecipient,
                            $.BER
                        )(value.ckmid, $.BER),
                        /* IF_ABSENT  */ value.ukm === undefined
                            ? undefined
                            : _encode_UserKeyingMaterial(value.ukm, $.BER),
                        /* REQUIRED   */ _encode_KeyConstructionAlgorithmIdentifier(
                            value.keyConstructionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedRandom,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyConstructRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyConstructRecipientInfo */

/* eslint-enable */
