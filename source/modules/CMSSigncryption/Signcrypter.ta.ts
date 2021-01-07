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
} from "../CMSSigncryption/CMSVersion.ta";
import {
    SignatureInformation,
    _decode_SignatureInformation,
    _encode_SignatureInformation,
} from "../CMSSigncryption/SignatureInformation.ta";
import {
    SigncryptedDataAlgorithmIdentifier,
    _decode_SigncryptedDataAlgorithmIdentifier,
    _encode_SigncryptedDataAlgorithmIdentifier,
} from "../CMSSigncryption/SigncryptedDataAlgorithmIdentifier.ta";
import {
    SigncrypterIDs,
    _decode_SigncrypterIDs,
    _encode_SigncrypterIDs,
} from "../CMSSigncryption/SigncrypterIDs.ta";
import {
    SigncryptionValue,
    _decode_SigncryptionValue,
    _encode_SigncryptionValue,
} from "../CMSSigncryption/SigncryptionValue.ta";
import {
    UnSigncryptedAttributes,
    _decode_UnSigncryptedAttributes,
    _encode_UnSigncryptedAttributes,
} from "../CMSSigncryption/UnSigncryptedAttributes.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta";
export {
    SignatureInformation,
    _decode_SignatureInformation,
    _encode_SignatureInformation,
} from "../CMSSigncryption/SignatureInformation.ta";
export {
    SigncryptedDataAlgorithmIdentifier,
    _decode_SigncryptedDataAlgorithmIdentifier,
    _encode_SigncryptedDataAlgorithmIdentifier,
} from "../CMSSigncryption/SigncryptedDataAlgorithmIdentifier.ta";
export {
    SigncrypterIDs,
    _decode_SigncrypterIDs,
    _encode_SigncrypterIDs,
} from "../CMSSigncryption/SigncrypterIDs.ta";
export {
    SigncryptionValue,
    _decode_SigncryptionValue,
    _encode_SigncryptionValue,
} from "../CMSSigncryption/SigncryptionValue.ta";
export {
    UnSigncryptedAttributes,
    _decode_UnSigncryptedAttributes,
    _encode_UnSigncryptedAttributes,
} from "../CMSSigncryption/UnSigncryptedAttributes.ta";

/* START_OF_SYMBOL_DEFINITION Signcrypter */
/**
 * @summary Signcrypter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signcrypter ::= SEQUENCE {
 * version            CMSVersion,
 * side                SigncrypterIDs,
 * signcryptedDataAlgorithm    SigncryptedDataAlgorithmIdentifier,
 * signcryptionValue        SigncryptionValue,
 * signatureInformation    SignatureInformation OPTIONAL,
 * unsigncryptedAttributes    UnSigncryptedAttributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Signcrypter {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `side`.
         * @public
         * @readonly
         */
        readonly side: SigncrypterIDs,
        /**
         * @summary `signcryptedDataAlgorithm`.
         * @public
         * @readonly
         */
        readonly signcryptedDataAlgorithm: SigncryptedDataAlgorithmIdentifier,
        /**
         * @summary `signcryptionValue`.
         * @public
         * @readonly
         */
        readonly signcryptionValue: SigncryptionValue,
        /**
         * @summary `signatureInformation`.
         * @public
         * @readonly
         */
        readonly signatureInformation: OPTIONAL<SignatureInformation>,
        /**
         * @summary `unsigncryptedAttributes`.
         * @public
         * @readonly
         */
        readonly unsigncryptedAttributes: OPTIONAL<UnSigncryptedAttributes>
    ) {}

    /**
     * @summary Restructures an object into a Signcrypter
     * @description
     *
     * This takes an `object` and converts it to a `Signcrypter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signcrypter`.
     * @returns {Signcrypter}
     */
    public static _from_object(
        _o: { [_K in keyof Signcrypter]: Signcrypter[_K] }
    ): Signcrypter {
        return new Signcrypter(
            _o.version,
            _o.side,
            _o.signcryptedDataAlgorithm,
            _o.signcryptionValue,
            _o.signatureInformation,
            _o.unsigncryptedAttributes
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Signcrypter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Signcrypter */
/**
 * @summary The Leading Root Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signcrypter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "side",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signcryptedDataAlgorithm",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signcryptionValue",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureInformation",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unsigncryptedAttributes",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Signcrypter */
/**
 * @summary The Trailing Root Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signcrypter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Signcrypter */
/**
 * @summary The Extension Addition Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signcrypter: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Signcrypter */
let _cached_decoder_for_Signcrypter: $.ASN1Decoder<Signcrypter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _decode_Signcrypter */
/**
 * @summary Decodes an ASN.1 element into a(n) Signcrypter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signcrypter} The decoded data structure.
 */
export function _decode_Signcrypter(el: _Element) {
    if (!_cached_decoder_for_Signcrypter) {
        _cached_decoder_for_Signcrypter = function (el: _Element): Signcrypter {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let side!: SigncrypterIDs;
            let signcryptedDataAlgorithm!: SigncryptedDataAlgorithmIdentifier;
            let signcryptionValue!: SigncryptionValue;
            let signatureInformation: OPTIONAL<SignatureInformation>;
            let unsigncryptedAttributes: OPTIONAL<UnSigncryptedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                side: (_el: _Element): void => {
                    side = _decode_SigncrypterIDs(_el);
                },
                signcryptedDataAlgorithm: (_el: _Element): void => {
                    signcryptedDataAlgorithm = _decode_SigncryptedDataAlgorithmIdentifier(
                        _el
                    );
                },
                signcryptionValue: (_el: _Element): void => {
                    signcryptionValue = _decode_SigncryptionValue(_el);
                },
                signatureInformation: (_el: _Element): void => {
                    signatureInformation = _decode_SignatureInformation(_el);
                },
                unsigncryptedAttributes: (_el: _Element): void => {
                    unsigncryptedAttributes = _decode_UnSigncryptedAttributes(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Signcrypter,
                _extension_additions_list_spec_for_Signcrypter,
                _root_component_type_list_2_spec_for_Signcrypter,
                undefined
            );
            return new Signcrypter /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                side,
                signcryptedDataAlgorithm,
                signcryptionValue,
                signatureInformation,
                unsigncryptedAttributes
            );
        };
    }
    return _cached_decoder_for_Signcrypter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Signcrypter */
let _cached_encoder_for_Signcrypter: $.ASN1Encoder<Signcrypter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Signcrypter */

/* START_OF_SYMBOL_DEFINITION _encode_Signcrypter */
/**
 * @summary Encodes a(n) Signcrypter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signcrypter, encoded as an ASN.1 Element.
 */
export function _encode_Signcrypter(
    value: Signcrypter,
    elGetter: $.ASN1Encoder<Signcrypter>
) {
    if (!_cached_encoder_for_Signcrypter) {
        _cached_encoder_for_Signcrypter = function (
            value: Signcrypter,
            elGetter: $.ASN1Encoder<Signcrypter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SigncrypterIDs(
                            value.side,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SigncryptedDataAlgorithmIdentifier(
                            value.signcryptedDataAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SigncryptionValue(
                            value.signcryptionValue,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.signatureInformation ===
                        undefined
                            ? undefined
                            : _encode_SignatureInformation(
                                  value.signatureInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.unsigncryptedAttributes ===
                        undefined
                            ? undefined
                            : _encode_UnSigncryptedAttributes(
                                  value.unsigncryptedAttributes,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Signcrypter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Signcrypter */

/* eslint-enable */
