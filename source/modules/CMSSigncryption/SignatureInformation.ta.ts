/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ToBeSigned,
    _decode_ToBeSigned,
    _encode_ToBeSigned,
} from "../CMSSigncryption/ToBeSigned.ta";
import {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/SignatureAlgorithmIdentifier.ta";
import {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from "../CryptographicMessageSyntax-2010/SignatureValue.ta";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax-2010/SignerIdentifier.ta";
export {
    ToBeSigned,
    _decode_ToBeSigned,
    _encode_ToBeSigned,
} from "../CMSSigncryption/ToBeSigned.ta";
export {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/SignatureAlgorithmIdentifier.ta";
export {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from "../CryptographicMessageSyntax-2010/SignatureValue.ta";
export {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax-2010/SignerIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SignatureInformation */
/**
 * @summary SignatureInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureInformation ::= SEQUENCE {
 * signerIdentifier        SignerIdentifier OPTIONAL,
 * signatureAlgorithm        SignatureAlgorithmIdentifier OPTIONAL,
 * toBeSigned            ToBeSigned,
 * signatureValue        SignatureValue
 * }
 * ```
 *
 * @class
 */
export class SignatureInformation {
    constructor(
        /**
         * @summary `signerIdentifier`.
         * @public
         * @readonly
         */
        readonly signerIdentifier: OPTIONAL<SignerIdentifier>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: OPTIONAL<SignatureAlgorithmIdentifier>,
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `signatureValue`.
         * @public
         * @readonly
         */
        readonly signatureValue: SignatureValue
    ) {}

    /**
     * @summary Restructures an object into a SignatureInformation
     * @description
     *
     * This takes an `object` and converts it to a `SignatureInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignatureInformation`.
     * @returns {SignatureInformation}
     */
    public static _from_object(
        _o: { [_K in keyof SignatureInformation]: SignatureInformation[_K] }
    ): SignatureInformation {
        return new SignatureInformation(
            _o.signerIdentifier,
            _o.signatureAlgorithm,
            _o.toBeSigned,
            _o.signatureValue
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignatureInformation */
/**
 * @summary The Leading Root Component Types of SignatureInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignatureInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "signerIdentifier",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "toBeSigned",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureValue",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignatureInformation */
/**
 * @summary The Trailing Root Component Types of SignatureInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignatureInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignatureInformation */
/**
 * @summary The Extension Addition Component Types of SignatureInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignatureInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureInformation */
let _cached_decoder_for_SignatureInformation: $.ASN1Decoder<SignatureInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureInformation} The decoded data structure.
 */
export function _decode_SignatureInformation(el: _Element) {
    if (!_cached_decoder_for_SignatureInformation) {
        _cached_decoder_for_SignatureInformation = function (
            el: _Element
        ): SignatureInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signerIdentifier: OPTIONAL<SignerIdentifier>;
            let signatureAlgorithm: OPTIONAL<SignatureAlgorithmIdentifier>;
            let toBeSigned!: ToBeSigned;
            let signatureValue!: SignatureValue;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signerIdentifier: (_el: _Element): void => {
                    signerIdentifier = _decode_SignerIdentifier(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                toBeSigned: (_el: _Element): void => {
                    toBeSigned = _decode_ToBeSigned(_el);
                },
                signatureValue: (_el: _Element): void => {
                    signatureValue = _decode_SignatureValue(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignatureInformation,
                _extension_additions_list_spec_for_SignatureInformation,
                _root_component_type_list_2_spec_for_SignatureInformation,
                undefined
            );
            return new SignatureInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                signerIdentifier,
                signatureAlgorithm,
                toBeSigned,
                signatureValue
            );
        };
    }
    return _cached_decoder_for_SignatureInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureInformation */
let _cached_encoder_for_SignatureInformation: $.ASN1Encoder<SignatureInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureInformation */
/**
 * @summary Encodes a(n) SignatureInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureInformation, encoded as an ASN.1 Element.
 */
export function _encode_SignatureInformation(
    value: SignatureInformation,
    elGetter: $.ASN1Encoder<SignatureInformation>
) {
    if (!_cached_encoder_for_SignatureInformation) {
        _cached_encoder_for_SignatureInformation = function (
            value: SignatureInformation,
            elGetter: $.ASN1Encoder<SignatureInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.signerIdentifier === undefined
                            ? undefined
                            : _encode_SignerIdentifier(
                                  value.signerIdentifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.signatureAlgorithm === undefined
                            ? undefined
                            : _encode_SignatureAlgorithmIdentifier(
                                  value.signatureAlgorithm,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureValue(
                            value.signatureValue,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignatureInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureInformation */

/* eslint-enable */
