/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OTHER_CERT_FMT } from "../CryptographicMessageSyntax-2010/OTHER-CERT-FMT.oca";
export { SupportedCertFormats } from "../CryptographicMessageSyntax-2010/SupportedCertFormats.osa";

/* START_OF_SYMBOL_DEFINITION OtherCertificateFormat */
/**
 * @summary OtherCertificateFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherCertificateFormat ::= SEQUENCE {
 * otherCertFormat     OTHER-CERT-FMT.&id({SupportedCertFormats}),
 * otherCert           OTHER-CERT-FMT.&Type
 *     ({SupportedCertFormats}{@otherCertFormat})}
 * ```
 *
 * @class
 */
export class OtherCertificateFormat {
    constructor(
        /**
         * @summary `otherCertFormat`.
         * @public
         * @readonly
         */
        readonly otherCertFormat: OBJECT_IDENTIFIER,
        /**
         * @summary `otherCert`.
         * @public
         * @readonly
         */
        readonly otherCert: _Element
    ) {}

    /**
     * @summary Restructures an object into a OtherCertificateFormat
     * @description
     *
     * This takes an `object` and converts it to a `OtherCertificateFormat`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherCertificateFormat`.
     * @returns {OtherCertificateFormat}
     */
    public static _from_object(
        _o: { [_K in keyof OtherCertificateFormat]: OtherCertificateFormat[_K] }
    ): OtherCertificateFormat {
        return new OtherCertificateFormat(_o.otherCertFormat, _o.otherCert);
    }
}
/* END_OF_SYMBOL_DEFINITION OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherCertificateFormat */
/**
 * @summary The Leading Root Component Types of OtherCertificateFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherCertificateFormat: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "otherCertFormat",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("otherCert", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherCertificateFormat */
/**
 * @summary The Trailing Root Component Types of OtherCertificateFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherCertificateFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherCertificateFormat */
/**
 * @summary The Extension Addition Component Types of OtherCertificateFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherCertificateFormat: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherCertificateFormat */
let _cached_decoder_for_OtherCertificateFormat: $.ASN1Decoder<OtherCertificateFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _decode_OtherCertificateFormat */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherCertificateFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherCertificateFormat} The decoded data structure.
 */
export function _decode_OtherCertificateFormat(el: _Element) {
    if (!_cached_decoder_for_OtherCertificateFormat) {
        _cached_decoder_for_OtherCertificateFormat = function (
            el: _Element
        ): OtherCertificateFormat {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OtherCertificateFormat contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "otherCertFormat";
            sequence[1].name = "otherCert";
            let otherCertFormat!: OBJECT_IDENTIFIER;
            let otherCert!: _Element;
            otherCertFormat = $._decodeObjectIdentifier(sequence[0]);
            otherCert = $._decodeAny(sequence[1]);
            return new OtherCertificateFormat(otherCertFormat, otherCert);
        };
    }
    return _cached_decoder_for_OtherCertificateFormat(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherCertificateFormat */
let _cached_encoder_for_OtherCertificateFormat: $.ASN1Encoder<OtherCertificateFormat> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherCertificateFormat */

/* START_OF_SYMBOL_DEFINITION _encode_OtherCertificateFormat */
/**
 * @summary Encodes a(n) OtherCertificateFormat into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherCertificateFormat, encoded as an ASN.1 Element.
 */
export function _encode_OtherCertificateFormat(
    value: OtherCertificateFormat,
    elGetter: $.ASN1Encoder<OtherCertificateFormat>
) {
    if (!_cached_encoder_for_OtherCertificateFormat) {
        _cached_encoder_for_OtherCertificateFormat = function (
            value: OtherCertificateFormat,
            elGetter: $.ASN1Encoder<OtherCertificateFormat>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.otherCertFormat,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.otherCert, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherCertificateFormat(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherCertificateFormat */

/* eslint-enable */
