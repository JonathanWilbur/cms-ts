/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Content,
    _decode_Content,
    _encode_Content,
} from "../CMSSigncryption/Content.ta";
import {
    SigncryptedAttributes,
    _decode_SigncryptedAttributes,
    _encode_SigncryptedAttributes,
} from "../CMSSigncryption/SigncryptedAttributes.ta";
export {
    Content,
    _decode_Content,
    _encode_Content,
} from "../CMSSigncryption/Content.ta";
export {
    SigncryptedAttributes,
    _decode_SigncryptedAttributes,
    _encode_SigncryptedAttributes,
} from "../CMSSigncryption/SigncryptedAttributes.ta";

/* START_OF_SYMBOL_DEFINITION ToBeSigncrypted */
/**
 * @summary ToBeSigncrypted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeSigncrypted ::= SEQUENCE {
 * content    Content,
 * attributes     SigncryptedAttributes
 * }
 * ```
 *
 * @class
 */
export class ToBeSigncrypted {
    constructor(
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Content,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: SigncryptedAttributes
    ) {}

    /**
     * @summary Restructures an object into a ToBeSigncrypted
     * @description
     *
     * This takes an `object` and converts it to a `ToBeSigncrypted`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ToBeSigncrypted`.
     * @returns {ToBeSigncrypted}
     */
    public static _from_object(
        _o: { [_K in keyof ToBeSigncrypted]: ToBeSigncrypted[_K] }
    ): ToBeSigncrypted {
        return new ToBeSigncrypted(_o.content, _o.attributes);
    }
}
/* END_OF_SYMBOL_DEFINITION ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeSigncrypted */
/**
 * @summary The Leading Root Component Types of ToBeSigncrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ToBeSigncrypted: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "content",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeSigncrypted */
/**
 * @summary The Trailing Root Component Types of ToBeSigncrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ToBeSigncrypted: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeSigncrypted */
/**
 * @summary The Extension Addition Component Types of ToBeSigncrypted
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ToBeSigncrypted: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeSigncrypted */
let _cached_decoder_for_ToBeSigncrypted: $.ASN1Decoder<ToBeSigncrypted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _decode_ToBeSigncrypted */
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeSigncrypted
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeSigncrypted} The decoded data structure.
 */
export function _decode_ToBeSigncrypted(el: _Element) {
    if (!_cached_decoder_for_ToBeSigncrypted) {
        _cached_decoder_for_ToBeSigncrypted = function (
            el: _Element
        ): ToBeSigncrypted {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ToBeSigncrypted contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "content";
            sequence[1].name = "attributes";
            let content!: Content;
            let attributes!: SigncryptedAttributes;
            content = _decode_Content(sequence[0]);
            attributes = _decode_SigncryptedAttributes(sequence[1]);
            return new ToBeSigncrypted(content, attributes);
        };
    }
    return _cached_decoder_for_ToBeSigncrypted(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeSigncrypted */
let _cached_encoder_for_ToBeSigncrypted: $.ASN1Encoder<ToBeSigncrypted> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeSigncrypted */

/* START_OF_SYMBOL_DEFINITION _encode_ToBeSigncrypted */
/**
 * @summary Encodes a(n) ToBeSigncrypted into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeSigncrypted, encoded as an ASN.1 Element.
 */
export function _encode_ToBeSigncrypted(
    value: ToBeSigncrypted,
    elGetter: $.ASN1Encoder<ToBeSigncrypted>
) {
    if (!_cached_encoder_for_ToBeSigncrypted) {
        _cached_encoder_for_ToBeSigncrypted = function (
            value: ToBeSigncrypted,
            elGetter: $.ASN1Encoder<ToBeSigncrypted>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Content(value.content, $.BER),
                        /* REQUIRED   */ _encode_SigncryptedAttributes(
                            value.attributes,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ToBeSigncrypted(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToBeSigncrypted */

/* eslint-enable */
