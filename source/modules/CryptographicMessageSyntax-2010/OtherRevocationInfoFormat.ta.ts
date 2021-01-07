/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OTHER_REVOK_INFO } from "../CryptographicMessageSyntax-2010/OTHER-REVOK-INFO.oca";
export { SupportedOtherRevokInfo } from "../CryptographicMessageSyntax-2010/SupportedOtherRevokInfo.osa";

/* START_OF_SYMBOL_DEFINITION OtherRevocationInfoFormat */
/**
 * @summary OtherRevocationInfoFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRevocationInfoFormat ::= SEQUENCE {
 * otherRevInfoFormat    OTHER-REVOK-INFO.&id({SupportedOtherRevokInfo}),
 * otherRevInfo          OTHER-REVOK-INFO.&Type
 *     ({SupportedOtherRevokInfo}{@otherRevInfoFormat})}
 * ```
 *
 * @class
 */
export class OtherRevocationInfoFormat {
    constructor(
        /**
         * @summary `otherRevInfoFormat`.
         * @public
         * @readonly
         */
        readonly otherRevInfoFormat: OBJECT_IDENTIFIER,
        /**
         * @summary `otherRevInfo`.
         * @public
         * @readonly
         */
        readonly otherRevInfo: _Element
    ) {}

    /**
     * @summary Restructures an object into a OtherRevocationInfoFormat
     * @description
     *
     * This takes an `object` and converts it to a `OtherRevocationInfoFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRevocationInfoFormat`.
     * @returns {OtherRevocationInfoFormat}
     */
    public static _from_object(
        _o: {
            [_K in keyof OtherRevocationInfoFormat]: OtherRevocationInfoFormat[_K];
        }
    ): OtherRevocationInfoFormat {
        return new OtherRevocationInfoFormat(
            _o.otherRevInfoFormat,
            _o.otherRevInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevocationInfoFormat */
/**
 * @summary The Leading Root Component Types of OtherRevocationInfoFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherRevocationInfoFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "otherRevInfoFormat",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "otherRevInfo",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevocationInfoFormat */
/**
 * @summary The Trailing Root Component Types of OtherRevocationInfoFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherRevocationInfoFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevocationInfoFormat */
/**
 * @summary The Extension Addition Component Types of OtherRevocationInfoFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherRevocationInfoFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevocationInfoFormat */
let _cached_decoder_for_OtherRevocationInfoFormat: $.ASN1Decoder<OtherRevocationInfoFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRevocationInfoFormat */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRevocationInfoFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRevocationInfoFormat} The decoded data structure.
 */
export function _decode_OtherRevocationInfoFormat(el: _Element) {
    if (!_cached_decoder_for_OtherRevocationInfoFormat) {
        _cached_decoder_for_OtherRevocationInfoFormat = function (
            el: _Element
        ): OtherRevocationInfoFormat {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OtherRevocationInfoFormat contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "otherRevInfoFormat";
            sequence[1].name = "otherRevInfo";
            let otherRevInfoFormat!: OBJECT_IDENTIFIER;
            let otherRevInfo!: _Element;
            otherRevInfoFormat = $._decodeObjectIdentifier(sequence[0]);
            otherRevInfo = $._decodeAny(sequence[1]);
            return new OtherRevocationInfoFormat(
                otherRevInfoFormat,
                otherRevInfo
            );
        };
    }
    return _cached_decoder_for_OtherRevocationInfoFormat(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevocationInfoFormat */
let _cached_encoder_for_OtherRevocationInfoFormat: $.ASN1Encoder<OtherRevocationInfoFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevocationInfoFormat */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRevocationInfoFormat */
/**
 * @summary Encodes a(n) OtherRevocationInfoFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRevocationInfoFormat, encoded as an ASN.1 Element.
 */
export function _encode_OtherRevocationInfoFormat(
    value: OtherRevocationInfoFormat,
    elGetter: $.ASN1Encoder<OtherRevocationInfoFormat>
) {
    if (!_cached_encoder_for_OtherRevocationInfoFormat) {
        _cached_encoder_for_OtherRevocationInfoFormat = function (
            value: OtherRevocationInfoFormat,
            elGetter: $.ASN1Encoder<OtherRevocationInfoFormat>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.otherRevInfoFormat,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.otherRevInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherRevocationInfoFormat(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRevocationInfoFormat */

/* eslint-enable */
