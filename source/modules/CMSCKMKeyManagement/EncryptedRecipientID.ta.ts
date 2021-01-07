/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta";
export {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION EncryptedRecipientID */
/**
 * @summary EncryptedRecipientID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedRecipientID ::= SEQUENCE {
 * algorithm    ContentEncryptionAlgorithmIdentifier OPTIONAL,
 * keyID        [0] OCTET STRING OPTIONAL,
 * ciphertext    OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class EncryptedRecipientID {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OPTIONAL<ContentEncryptionAlgorithmIdentifier>,
        /**
         * @summary `keyID`.
         * @public
         * @readonly
         */
        readonly keyID: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `ciphertext`.
         * @public
         * @readonly
         */
        readonly ciphertext: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EncryptedRecipientID
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedRecipientID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedRecipientID`.
     * @returns {EncryptedRecipientID}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedRecipientID]: EncryptedRecipientID[_K] }
    ): EncryptedRecipientID {
        return new EncryptedRecipientID(_o.algorithm, _o.keyID, _o.ciphertext);
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedRecipientID */
/**
 * @summary The Leading Root Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ciphertext",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedRecipientID */
/**
 * @summary The Trailing Root Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedRecipientID */
/**
 * @summary The Extension Addition Component Types of EncryptedRecipientID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedRecipientID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedRecipientID */
let _cached_decoder_for_EncryptedRecipientID: $.ASN1Decoder<EncryptedRecipientID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedRecipientID */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedRecipientID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedRecipientID} The decoded data structure.
 */
export function _decode_EncryptedRecipientID(el: _Element) {
    if (!_cached_decoder_for_EncryptedRecipientID) {
        _cached_decoder_for_EncryptedRecipientID = function (
            el: _Element
        ): EncryptedRecipientID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let algorithm: OPTIONAL<ContentEncryptionAlgorithmIdentifier>;
            let keyID: OPTIONAL<OCTET_STRING>;
            let ciphertext!: OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                algorithm: (_el: _Element): void => {
                    algorithm = _decode_ContentEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                keyID: (_el: _Element): void => {
                    keyID = $._decode_explicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                ciphertext: (_el: _Element): void => {
                    ciphertext = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedRecipientID,
                _extension_additions_list_spec_for_EncryptedRecipientID,
                _root_component_type_list_2_spec_for_EncryptedRecipientID,
                undefined
            );
            return new EncryptedRecipientID /* SEQUENCE_CONSTRUCTOR_CALL */(
                algorithm,
                keyID,
                ciphertext
            );
        };
    }
    return _cached_decoder_for_EncryptedRecipientID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedRecipientID */
let _cached_encoder_for_EncryptedRecipientID: $.ASN1Encoder<EncryptedRecipientID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedRecipientID */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedRecipientID */
/**
 * @summary Encodes a(n) EncryptedRecipientID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedRecipientID, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedRecipientID(
    value: EncryptedRecipientID,
    elGetter: $.ASN1Encoder<EncryptedRecipientID>
) {
    if (!_cached_encoder_for_EncryptedRecipientID) {
        _cached_encoder_for_EncryptedRecipientID = function (
            value: EncryptedRecipientID,
            elGetter: $.ASN1Encoder<EncryptedRecipientID>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.algorithm === undefined
                            ? undefined
                            : _encode_ContentEncryptionAlgorithmIdentifier(
                                  value.algorithm,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.keyID === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.keyID, $.BER),
                        /* REQUIRED   */ $._encodeOctetString(
                            value.ciphertext,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedRecipientID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedRecipientID */

/* eslint-enable */
