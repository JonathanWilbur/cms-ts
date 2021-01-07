/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyPairIdentifier,
    _decode_KeyPairIdentifier,
    _encode_KeyPairIdentifier,
} from "../CMSSigncryption/KeyPairIdentifier.ta";
export {
    KeyPairIdentifier,
    _decode_KeyPairIdentifier,
    _encode_KeyPairIdentifier,
} from "../CMSSigncryption/KeyPairIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SigncrypterIDs */
/**
 * @summary SigncrypterIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncrypterIDs ::= SEQUENCE {
 * sender     KeyPairIdentifier,
 * recipient     KeyPairIdentifier
 * }
 * ```
 *
 * @class
 */
export class SigncrypterIDs {
    constructor(
        /**
         * @summary `sender`.
         * @public
         * @readonly
         */
        readonly sender: KeyPairIdentifier,
        /**
         * @summary `recipient`.
         * @public
         * @readonly
         */
        readonly recipient: KeyPairIdentifier
    ) {}

    /**
     * @summary Restructures an object into a SigncrypterIDs
     * @description
     *
     * This takes an `object` and converts it to a `SigncrypterIDs`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigncrypterIDs`.
     * @returns {SigncrypterIDs}
     */
    public static _from_object(
        _o: { [_K in keyof SigncrypterIDs]: SigncrypterIDs[_K] }
    ): SigncrypterIDs {
        return new SigncrypterIDs(_o.sender, _o.recipient);
    }
}
/* END_OF_SYMBOL_DEFINITION SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigncrypterIDs */
/**
 * @summary The Leading Root Component Types of SigncrypterIDs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SigncrypterIDs: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sender",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "recipient",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigncrypterIDs */
/**
 * @summary The Trailing Root Component Types of SigncrypterIDs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SigncrypterIDs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigncrypterIDs */
/**
 * @summary The Extension Addition Component Types of SigncrypterIDs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SigncrypterIDs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncrypterIDs */
let _cached_decoder_for_SigncrypterIDs: $.ASN1Decoder<SigncrypterIDs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _decode_SigncrypterIDs */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncrypterIDs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncrypterIDs} The decoded data structure.
 */
export function _decode_SigncrypterIDs(el: _Element) {
    if (!_cached_decoder_for_SigncrypterIDs) {
        _cached_decoder_for_SigncrypterIDs = function (
            el: _Element
        ): SigncrypterIDs {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SigncrypterIDs contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "sender";
            sequence[1].name = "recipient";
            let sender!: KeyPairIdentifier;
            let recipient!: KeyPairIdentifier;
            sender = _decode_KeyPairIdentifier(sequence[0]);
            recipient = _decode_KeyPairIdentifier(sequence[1]);
            return new SigncrypterIDs(sender, recipient);
        };
    }
    return _cached_decoder_for_SigncrypterIDs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncrypterIDs */
let _cached_encoder_for_SigncrypterIDs: $.ASN1Encoder<SigncrypterIDs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncrypterIDs */

/* START_OF_SYMBOL_DEFINITION _encode_SigncrypterIDs */
/**
 * @summary Encodes a(n) SigncrypterIDs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncrypterIDs, encoded as an ASN.1 Element.
 */
export function _encode_SigncrypterIDs(
    value: SigncrypterIDs,
    elGetter: $.ASN1Encoder<SigncrypterIDs>
) {
    if (!_cached_encoder_for_SigncrypterIDs) {
        _cached_encoder_for_SigncrypterIDs = function (
            value: SigncrypterIDs,
            elGetter: $.ASN1Encoder<SigncrypterIDs>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_KeyPairIdentifier(
                            value.sender,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_KeyPairIdentifier(
                            value.recipient,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SigncrypterIDs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncrypterIDs */

/* eslint-enable */
