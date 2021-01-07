/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca";

/* START_OF_SYMBOL_DEFINITION UniqueID */
/**
 * @summary UniqueID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueID{DBEKM:IOSet} ::= SEQUENCE {
 * name    DBEKM.&id({IOSet}),
 * type    DBEKM.&Type({IOSet}{@name}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UniqueID {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OBJECT_IDENTIFIER,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a UniqueID
     * @description
     *
     * This takes an `object` and converts it to a `UniqueID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniqueID`.
     * @returns {UniqueID}
     */
    public static _from_object(
        _o: { [_K in keyof UniqueID]: UniqueID[_K] }
    ): UniqueID {
        return new UniqueID(_o.name, _o.type_);
    }
}
/* END_OF_SYMBOL_DEFINITION UniqueID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniqueID */
/**
 * @summary The Leading Root Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniqueID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "type",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniqueID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniqueID */
/**
 * @summary The Trailing Root Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniqueID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniqueID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniqueID */
/**
 * @summary The Extension Addition Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniqueID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniqueID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniqueID */
let _cached_decoder_for_UniqueID: $.ASN1Decoder<UniqueID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniqueID */

/* START_OF_SYMBOL_DEFINITION _decode_UniqueID */
/**
 * @summary Decodes an ASN.1 element into a(n) UniqueID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueID} The decoded data structure.
 */
export function _decode_UniqueID(el: _Element) {
    if (!_cached_decoder_for_UniqueID) {
        _cached_decoder_for_UniqueID = function (el: _Element): UniqueID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: OBJECT_IDENTIFIER;
            let type_: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = $._decodeObjectIdentifier(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniqueID,
                _extension_additions_list_spec_for_UniqueID,
                _root_component_type_list_2_spec_for_UniqueID,
                undefined
            );
            return new UniqueID /* SEQUENCE_CONSTRUCTOR_CALL */(name, type_);
        };
    }
    return _cached_decoder_for_UniqueID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniqueID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniqueID */
let _cached_encoder_for_UniqueID: $.ASN1Encoder<UniqueID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniqueID */

/* START_OF_SYMBOL_DEFINITION _encode_UniqueID */
/**
 * @summary Encodes a(n) UniqueID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueID, encoded as an ASN.1 Element.
 */
export function _encode_UniqueID(
    value: UniqueID,
    elGetter: $.ASN1Encoder<UniqueID>
) {
    if (!_cached_encoder_for_UniqueID) {
        _cached_encoder_for_UniqueID = function (
            value: UniqueID,
            elGetter: $.ASN1Encoder<UniqueID>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.name,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.type_ === undefined
                            ? undefined
                            : $._encodeAny(value.type_, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniqueID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniqueID */

/* eslint-enable */
