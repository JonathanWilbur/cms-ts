/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CombinerAlgorithmIdentifier,
    _decode_CombinerAlgorithmIdentifier,
    _encode_CombinerAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/CombinerAlgorithmIdentifier.ta";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta";
export {
    CombinerAlgorithmIdentifier,
    _decode_CombinerAlgorithmIdentifier,
    _encode_CombinerAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/CombinerAlgorithmIdentifier.ta";
export {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ConstructionAlgorithms */
/**
 * @summary ConstructionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConstructionAlgorithms ::= SEQUENCE {
 * combiner            CombinerAlgorithmIdentifier,
 * keyEncryptionAlgorithm    KeyEncryptionAlgorithmIdentifier
 * }
 * ```
 *
 * @class
 */
export class ConstructionAlgorithms {
    constructor(
        /**
         * @summary `combiner`.
         * @public
         * @readonly
         */
        readonly combiner: CombinerAlgorithmIdentifier,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a ConstructionAlgorithms
     * @description
     *
     * This takes an `object` and converts it to a `ConstructionAlgorithms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConstructionAlgorithms`.
     * @returns {ConstructionAlgorithms}
     */
    public static _from_object(
        _o: { [_K in keyof ConstructionAlgorithms]: ConstructionAlgorithms[_K] }
    ): ConstructionAlgorithms {
        return new ConstructionAlgorithms(
            _o.combiner,
            _o.keyEncryptionAlgorithm
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConstructionAlgorithms */
/**
 * @summary The Leading Root Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "combiner",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConstructionAlgorithms */
/**
 * @summary The Trailing Root Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConstructionAlgorithms */
/**
 * @summary The Extension Addition Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConstructionAlgorithms */
let _cached_decoder_for_ConstructionAlgorithms: $.ASN1Decoder<ConstructionAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _decode_ConstructionAlgorithms */
/**
 * @summary Decodes an ASN.1 element into a(n) ConstructionAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConstructionAlgorithms} The decoded data structure.
 */
export function _decode_ConstructionAlgorithms(el: _Element) {
    if (!_cached_decoder_for_ConstructionAlgorithms) {
        _cached_decoder_for_ConstructionAlgorithms = function (
            el: _Element
        ): ConstructionAlgorithms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ConstructionAlgorithms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "combiner";
            sequence[1].name = "keyEncryptionAlgorithm";
            let combiner!: CombinerAlgorithmIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            combiner = _decode_CombinerAlgorithmIdentifier(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[1]
            );
            return new ConstructionAlgorithms(combiner, keyEncryptionAlgorithm);
        };
    }
    return _cached_decoder_for_ConstructionAlgorithms(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConstructionAlgorithms */
let _cached_encoder_for_ConstructionAlgorithms: $.ASN1Encoder<ConstructionAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConstructionAlgorithms */

/* START_OF_SYMBOL_DEFINITION _encode_ConstructionAlgorithms */
/**
 * @summary Encodes a(n) ConstructionAlgorithms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConstructionAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_ConstructionAlgorithms(
    value: ConstructionAlgorithms,
    elGetter: $.ASN1Encoder<ConstructionAlgorithms>
) {
    if (!_cached_encoder_for_ConstructionAlgorithms) {
        _cached_encoder_for_ConstructionAlgorithms = function (
            value: ConstructionAlgorithms,
            elGetter: $.ASN1Encoder<ConstructionAlgorithms>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CombinerAlgorithmIdentifier(
                            value.combiner,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConstructionAlgorithms(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConstructionAlgorithms */

/* eslint-enable */
