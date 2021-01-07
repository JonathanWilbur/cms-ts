/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSA_Params */
/**
 * @summary DSA_Params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSA-Params ::= SEQUENCE {
 * p  INTEGER,
 * q  INTEGER,
 * g  INTEGER
 * }
 * ```
 *
 * @class
 */
export class DSA_Params {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a DSA_Params
     * @description
     *
     * This takes an `object` and converts it to a `DSA_Params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSA_Params`.
     * @returns {DSA_Params}
     */
    public static _from_object(
        _o: { [_K in keyof DSA_Params]: DSA_Params[_K] }
    ): DSA_Params {
        return new DSA_Params(_o.p, _o.q, _o.g);
    }
}
/* END_OF_SYMBOL_DEFINITION DSA_Params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DSA_Params */
/**
 * @summary The Leading Root Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSA_Params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DSA_Params */
/**
 * @summary The Trailing Root Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSA_Params: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DSA_Params */
/**
 * @summary The Extension Addition Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSA_Params: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSA_Params */
let _cached_decoder_for_DSA_Params: $.ASN1Decoder<DSA_Params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _decode_DSA_Params */
/**
 * @summary Decodes an ASN.1 element into a(n) DSA_Params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSA_Params} The decoded data structure.
 */
export function _decode_DSA_Params(el: _Element) {
    if (!_cached_decoder_for_DSA_Params) {
        _cached_decoder_for_DSA_Params = function (el: _Element): DSA_Params {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "DSA-Params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "p";
            sequence[1].name = "q";
            sequence[2].name = "g";
            let p!: INTEGER;
            let q!: INTEGER;
            let g!: INTEGER;
            p = $._decodeInteger(sequence[0]);
            q = $._decodeInteger(sequence[1]);
            g = $._decodeInteger(sequence[2]);
            return new DSA_Params(p, q, g);
        };
    }
    return _cached_decoder_for_DSA_Params(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSA_Params */
let _cached_encoder_for_DSA_Params: $.ASN1Encoder<DSA_Params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSA_Params */

/* START_OF_SYMBOL_DEFINITION _encode_DSA_Params */
/**
 * @summary Encodes a(n) DSA_Params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSA_Params, encoded as an ASN.1 Element.
 */
export function _encode_DSA_Params(
    value: DSA_Params,
    elGetter: $.ASN1Encoder<DSA_Params>
) {
    if (!_cached_encoder_for_DSA_Params) {
        _cached_encoder_for_DSA_Params = function (
            value: DSA_Params,
            elGetter: $.ASN1Encoder<DSA_Params>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.p, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.q, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.g, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DSA_Params(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSA_Params */

/* eslint-enable */
