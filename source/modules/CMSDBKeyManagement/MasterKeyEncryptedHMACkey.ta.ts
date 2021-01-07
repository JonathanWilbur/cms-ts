/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MasterKeyAlgorithmIdentifier,
    _decode_MasterKeyAlgorithmIdentifier,
    _encode_MasterKeyAlgorithmIdentifier,
} from "../CMSDBKeyManagement/MasterKeyAlgorithmIdentifier.ta";
import {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta";
export {
    MasterKeyAlgorithmIdentifier,
    _decode_MasterKeyAlgorithmIdentifier,
    _encode_MasterKeyAlgorithmIdentifier,
} from "../CMSDBKeyManagement/MasterKeyAlgorithmIdentifier.ta";
export {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta";

/* START_OF_SYMBOL_DEFINITION MasterKeyEncryptedHMACkey */
/**
 * @summary MasterKeyEncryptedHMACkey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterKeyEncryptedHMACkey ::= SEQUENCE {
 * masterKeyAID    MasterKeyAlgorithmIdentifier OPTIONAL,
 * hmacKeyAID        MessageAuthenticationCodeAlgorithm OPTIONAL,
 * encryptedKey    OCTET STRING(SIZE(1..MAX))
 * }
 * ```
 *
 * @class
 */
export class MasterKeyEncryptedHMACkey {
    constructor(
        /**
         * @summary `masterKeyAID`.
         * @public
         * @readonly
         */
        readonly masterKeyAID: OPTIONAL<MasterKeyAlgorithmIdentifier>,
        /**
         * @summary `hmacKeyAID`.
         * @public
         * @readonly
         */
        readonly hmacKeyAID: OPTIONAL<MessageAuthenticationCodeAlgorithm>,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a MasterKeyEncryptedHMACkey
     * @description
     *
     * This takes an `object` and converts it to a `MasterKeyEncryptedHMACkey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterKeyEncryptedHMACkey`.
     * @returns {MasterKeyEncryptedHMACkey}
     */
    public static _from_object(
        _o: {
            [_K in keyof MasterKeyEncryptedHMACkey]: MasterKeyEncryptedHMACkey[_K];
        }
    ): MasterKeyEncryptedHMACkey {
        return new MasterKeyEncryptedHMACkey(
            _o.masterKeyAID,
            _o.hmacKeyAID,
            _o.encryptedKey
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey */
/**
 * @summary The Leading Root Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "masterKeyAID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hmacKeyAID",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey */
/**
 * @summary The Trailing Root Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey */
/**
 * @summary The Extension Addition Component Types of MasterKeyEncryptedHMACkey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterKeyEncryptedHMACkey */
let _cached_decoder_for_MasterKeyEncryptedHMACkey: $.ASN1Decoder<MasterKeyEncryptedHMACkey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _decode_MasterKeyEncryptedHMACkey */
/**
 * @summary Decodes an ASN.1 element into a(n) MasterKeyEncryptedHMACkey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterKeyEncryptedHMACkey} The decoded data structure.
 */
export function _decode_MasterKeyEncryptedHMACkey(el: _Element) {
    if (!_cached_decoder_for_MasterKeyEncryptedHMACkey) {
        _cached_decoder_for_MasterKeyEncryptedHMACkey = function (
            el: _Element
        ): MasterKeyEncryptedHMACkey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let masterKeyAID: OPTIONAL<MasterKeyAlgorithmIdentifier>;
            let hmacKeyAID: OPTIONAL<MessageAuthenticationCodeAlgorithm>;
            let encryptedKey!: OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                masterKeyAID: (_el: _Element): void => {
                    masterKeyAID = _decode_MasterKeyAlgorithmIdentifier(_el);
                },
                hmacKeyAID: (_el: _Element): void => {
                    hmacKeyAID = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
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
/* END_OF_SYMBOL_DEFINITION _decode_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterKeyEncryptedHMACkey */
let _cached_encoder_for_MasterKeyEncryptedHMACkey: $.ASN1Encoder<MasterKeyEncryptedHMACkey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MasterKeyEncryptedHMACkey */

/* START_OF_SYMBOL_DEFINITION _encode_MasterKeyEncryptedHMACkey */
/**
 * @summary Encodes a(n) MasterKeyEncryptedHMACkey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterKeyEncryptedHMACkey, encoded as an ASN.1 Element.
 */
export function _encode_MasterKeyEncryptedHMACkey(
    value: MasterKeyEncryptedHMACkey,
    elGetter: $.ASN1Encoder<MasterKeyEncryptedHMACkey>
) {
    if (!_cached_encoder_for_MasterKeyEncryptedHMACkey) {
        _cached_encoder_for_MasterKeyEncryptedHMACkey = function (
            value: MasterKeyEncryptedHMACkey,
            elGetter: $.ASN1Encoder<MasterKeyEncryptedHMACkey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.masterKeyAID === undefined
                            ? undefined
                            : _encode_MasterKeyAlgorithmIdentifier(
                                  value.masterKeyAID,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.hmacKeyAID === undefined
                            ? undefined
                            : _encode_MessageAuthenticationCodeAlgorithm(
                                  value.hmacKeyAID,
                                  $.BER
                              ),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.encryptedKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MasterKeyEncryptedHMACkey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MasterKeyEncryptedHMACkey */

/* eslint-enable */
