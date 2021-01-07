/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OTHER_RECIPIENT } from "../CryptographicMessageSyntax-2010/OTHER-RECIPIENT.oca";
export { SupportedOtherRecipInfo } from "../CryptographicMessageSyntax-2010/SupportedOtherRecipInfo.osa";

/* START_OF_SYMBOL_DEFINITION OtherRecipientInfo */
/**
 * @summary OtherRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRecipientInfo ::= SEQUENCE {
 * oriType    OTHER-RECIPIENT.&id({SupportedOtherRecipInfo}),
 * oriValue   OTHER-RECIPIENT.&Type({SupportedOtherRecipInfo}{@oriType})}
 * ```
 *
 * @class
 */
export class OtherRecipientInfo {
    constructor(
        /**
         * @summary `oriType`.
         * @public
         * @readonly
         */
        readonly oriType: OBJECT_IDENTIFIER,
        /**
         * @summary `oriValue`.
         * @public
         * @readonly
         */
        readonly oriValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a OtherRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `OtherRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRecipientInfo`.
     * @returns {OtherRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof OtherRecipientInfo]: OtherRecipientInfo[_K] }
    ): OtherRecipientInfo {
        return new OtherRecipientInfo(_o.oriType, _o.oriValue);
    }
}
/* END_OF_SYMBOL_DEFINITION OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRecipientInfo */
/**
 * @summary The Leading Root Component Types of OtherRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "oriType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("oriValue", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRecipientInfo */
/**
 * @summary The Trailing Root Component Types of OtherRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRecipientInfo */
/**
 * @summary The Extension Addition Component Types of OtherRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientInfo */
let _cached_decoder_for_OtherRecipientInfo: $.ASN1Decoder<OtherRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRecipientInfo} The decoded data structure.
 */
export function _decode_OtherRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_OtherRecipientInfo) {
        _cached_decoder_for_OtherRecipientInfo = function (
            el: _Element
        ): OtherRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OtherRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "oriType";
            sequence[1].name = "oriValue";
            let oriType!: OBJECT_IDENTIFIER;
            let oriValue!: _Element;
            oriType = $._decodeObjectIdentifier(sequence[0]);
            oriValue = $._decodeAny(sequence[1]);
            return new OtherRecipientInfo(oriType, oriValue);
        };
    }
    return _cached_decoder_for_OtherRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientInfo */
let _cached_encoder_for_OtherRecipientInfo: $.ASN1Encoder<OtherRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRecipientInfo */
/**
 * @summary Encodes a(n) OtherRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherRecipientInfo(
    value: OtherRecipientInfo,
    elGetter: $.ASN1Encoder<OtherRecipientInfo>
) {
    if (!_cached_encoder_for_OtherRecipientInfo) {
        _cached_encoder_for_OtherRecipientInfo = function (
            value: OtherRecipientInfo,
            elGetter: $.ASN1Encoder<OtherRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.oriType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.oriValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OtherRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRecipientInfo */

/* eslint-enable */
