/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
import {
    MaskGenAlgorithm,
    _decode_MaskGenAlgorithm,
    _encode_MaskGenAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta";
import { mgf1SHA1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mgf1SHA1.va";
import {
    PSourceAlgorithm,
    _decode_PSourceAlgorithm,
    _encode_PSourceAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta";
import { pSpecifiedEmpty } from "../PKIX1-PSS-OAEP-Algorithms-2009/pSpecifiedEmpty.va";
import { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
export {
    MaskGenAlgorithm,
    _decode_MaskGenAlgorithm,
    _encode_MaskGenAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta";
export { mgf1SHA1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mgf1SHA1.va";
export {
    PSourceAlgorithm,
    _decode_PSourceAlgorithm,
    _encode_PSourceAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta";
export { pSpecifiedEmpty } from "../PKIX1-PSS-OAEP-Algorithms-2009/pSpecifiedEmpty.va";
export { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va";

/* START_OF_SYMBOL_DEFINITION RSAES_OAEP_params */
/**
 * @summary RSAES_OAEP_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAES-OAEP-params ::= SEQUENCE  {
 * hashFunc        [0] HashAlgorithm DEFAULT sha1Identifier,
 * maskGenFunc        [1] MaskGenAlgorithm DEFAULT mgf1SHA1,
 * pSourceFunc        [2] PSourceAlgorithm DEFAULT
 * pSpecifiedEmpty
 * }
 * ```
 *
 * @class
 */
export class RSAES_OAEP_params {
    constructor(
        /**
         * @summary `hashFunc`.
         * @public
         * @readonly
         */
        readonly hashFunc: OPTIONAL<HashAlgorithm>,
        /**
         * @summary `maskGenFunc`.
         * @public
         * @readonly
         */
        readonly maskGenFunc: OPTIONAL<MaskGenAlgorithm>,
        /**
         * @summary `pSourceFunc`.
         * @public
         * @readonly
         */
        readonly pSourceFunc: OPTIONAL<PSourceAlgorithm>
    ) {}

    /**
     * @summary Restructures an object into a RSAES_OAEP_params
     * @description
     *
     * This takes an `object` and converts it to a `RSAES_OAEP_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSAES_OAEP_params`.
     * @returns {RSAES_OAEP_params}
     */
    public static _from_object(
        _o: { [_K in keyof RSAES_OAEP_params]: RSAES_OAEP_params[_K] }
    ): RSAES_OAEP_params {
        return new RSAES_OAEP_params(
            _o.hashFunc,
            _o.maskGenFunc,
            _o.pSourceFunc
        );
    }

    /**
     * @summary Getter that returns the default value for `hashFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashFunc() {
        return sha1Identifier;
    }
    /**
     * @summary Getter that returns the default value for `maskGenFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_maskGenFunc() {
        return mgf1SHA1;
    }
    /**
     * @summary Getter that returns the default value for `pSourceFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pSourceFunc() {
        return pSpecifiedEmpty;
    }
}
/* END_OF_SYMBOL_DEFINITION RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAES_OAEP_params */
/**
 * @summary The Leading Root Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashFunc",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maskGenFunc",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pSourceFunc",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAES_OAEP_params */
/**
 * @summary The Trailing Root Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAES_OAEP_params */
/**
 * @summary The Extension Addition Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAES_OAEP_params */
let _cached_decoder_for_RSAES_OAEP_params: $.ASN1Decoder<RSAES_OAEP_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _decode_RSAES_OAEP_params */
/**
 * @summary Decodes an ASN.1 element into a(n) RSAES_OAEP_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAES_OAEP_params} The decoded data structure.
 */
export function _decode_RSAES_OAEP_params(el: _Element) {
    if (!_cached_decoder_for_RSAES_OAEP_params) {
        _cached_decoder_for_RSAES_OAEP_params = function (
            el: _Element
        ): RSAES_OAEP_params {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashFunc: OPTIONAL<HashAlgorithm> =
                RSAES_OAEP_params._default_value_for_hashFunc;
            let maskGenFunc: OPTIONAL<MaskGenAlgorithm> =
                RSAES_OAEP_params._default_value_for_maskGenFunc;
            let pSourceFunc: OPTIONAL<PSourceAlgorithm> =
                RSAES_OAEP_params._default_value_for_pSourceFunc;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hashFunc: (_el: _Element): void => {
                    hashFunc = $._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenFunc: (_el: _Element): void => {
                    maskGenFunc = $._decode_explicit<MaskGenAlgorithm>(
                        () => _decode_MaskGenAlgorithm
                    )(_el);
                },
                pSourceFunc: (_el: _Element): void => {
                    pSourceFunc = $._decode_explicit<PSourceAlgorithm>(
                        () => _decode_PSourceAlgorithm
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSAES_OAEP_params,
                _extension_additions_list_spec_for_RSAES_OAEP_params,
                _root_component_type_list_2_spec_for_RSAES_OAEP_params,
                undefined
            );
            return new RSAES_OAEP_params /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashFunc,
                maskGenFunc,
                pSourceFunc
            );
        };
    }
    return _cached_decoder_for_RSAES_OAEP_params(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAES_OAEP_params */
let _cached_encoder_for_RSAES_OAEP_params: $.ASN1Encoder<RSAES_OAEP_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAES_OAEP_params */

/* START_OF_SYMBOL_DEFINITION _encode_RSAES_OAEP_params */
/**
 * @summary Encodes a(n) RSAES_OAEP_params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAES_OAEP_params, encoded as an ASN.1 Element.
 */
export function _encode_RSAES_OAEP_params(
    value: RSAES_OAEP_params,
    elGetter: $.ASN1Encoder<RSAES_OAEP_params>
) {
    if (!_cached_encoder_for_RSAES_OAEP_params) {
        _cached_encoder_for_RSAES_OAEP_params = function (
            value: RSAES_OAEP_params,
            elGetter: $.ASN1Encoder<RSAES_OAEP_params>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashFunc === undefined ||
                        $.deepEq(
                            value.hashFunc,
                            RSAES_OAEP_params._default_value_for_hashFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  $.BER
                              )(value.hashFunc, $.BER),
                        /* IF_DEFAULT */ value.maskGenFunc === undefined ||
                        $.deepEq(
                            value.maskGenFunc,
                            RSAES_OAEP_params._default_value_for_maskGenFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  $.BER
                              )(value.maskGenFunc, $.BER),
                        /* IF_DEFAULT */ value.pSourceFunc === undefined ||
                        $.deepEq(
                            value.pSourceFunc,
                            RSAES_OAEP_params._default_value_for_pSourceFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PSourceAlgorithm,
                                  $.BER
                              )(value.pSourceFunc, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSAES_OAEP_params(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSAES_OAEP_params */

/* eslint-enable */
