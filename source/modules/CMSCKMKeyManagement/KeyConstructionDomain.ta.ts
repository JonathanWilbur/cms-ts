/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DomainMaintenanceLevel,
    _decode_DomainMaintenanceLevel,
    _encode_DomainMaintenanceLevel,
} from "../CMSCKMKeyManagement/DomainMaintenanceLevel.ta";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../CMSCKMKeyManagement/DomainName.ta";
import {
    DomainParams,
    _decode_DomainParams,
    _encode_DomainParams,
} from "../CMSCKMKeyManagement/DomainParams.ta";
export {
    DomainMaintenanceLevel,
    _decode_DomainMaintenanceLevel,
    _encode_DomainMaintenanceLevel,
} from "../CMSCKMKeyManagement/DomainMaintenanceLevel.ta";
export {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../CMSCKMKeyManagement/DomainName.ta";
export {
    DomainParams,
    _decode_DomainParams,
    _encode_DomainParams,
} from "../CMSCKMKeyManagement/DomainParams.ta";

/* START_OF_SYMBOL_DEFINITION KeyConstructionDomain */
/**
 * @summary KeyConstructionDomain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionDomain ::= SEQUENCE {
 * domainName             DomainName,
 * domainMaintenanceLevel     DomainMaintenanceLevel,
 * domainParams         DomainParams OPTIONAL
 *  -- From ANS X9.42 and ANS X.9.62 --
 * }
 * ```
 *
 * @class
 */
export class KeyConstructionDomain {
    constructor(
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: DomainName,
        /**
         * @summary `domainMaintenanceLevel`.
         * @public
         * @readonly
         */
        readonly domainMaintenanceLevel: DomainMaintenanceLevel,
        /**
         * @summary `domainParams`.
         * @public
         * @readonly
         */
        readonly domainParams: OPTIONAL<DomainParams>
    ) {}

    /**
     * @summary Restructures an object into a KeyConstructionDomain
     * @description
     *
     * This takes an `object` and converts it to a `KeyConstructionDomain`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyConstructionDomain`.
     * @returns {KeyConstructionDomain}
     */
    public static _from_object(
        _o: { [_K in keyof KeyConstructionDomain]: KeyConstructionDomain[_K] }
    ): KeyConstructionDomain {
        return new KeyConstructionDomain(
            _o.domainName,
            _o.domainMaintenanceLevel,
            _o.domainParams
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyConstructionDomain */
/**
 * @summary The Leading Root Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "domainName",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "domainMaintenanceLevel",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "domainParams",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyConstructionDomain */
/**
 * @summary The Trailing Root Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyConstructionDomain */
/**
 * @summary The Extension Addition Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionDomain */
let _cached_decoder_for_KeyConstructionDomain: $.ASN1Decoder<KeyConstructionDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _decode_KeyConstructionDomain */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionDomain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionDomain} The decoded data structure.
 */
export function _decode_KeyConstructionDomain(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionDomain) {
        _cached_decoder_for_KeyConstructionDomain = function (
            el: _Element
        ): KeyConstructionDomain {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let domainName!: DomainName;
            let domainMaintenanceLevel!: DomainMaintenanceLevel;
            let domainParams: OPTIONAL<DomainParams>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                domainName: (_el: _Element): void => {
                    domainName = _decode_DomainName(_el);
                },
                domainMaintenanceLevel: (_el: _Element): void => {
                    domainMaintenanceLevel = _decode_DomainMaintenanceLevel(
                        _el
                    );
                },
                domainParams: (_el: _Element): void => {
                    domainParams = _decode_DomainParams(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructionDomain,
                _extension_additions_list_spec_for_KeyConstructionDomain,
                _root_component_type_list_2_spec_for_KeyConstructionDomain,
                undefined
            );
            return new KeyConstructionDomain /* SEQUENCE_CONSTRUCTOR_CALL */(
                domainName,
                domainMaintenanceLevel,
                domainParams
            );
        };
    }
    return _cached_decoder_for_KeyConstructionDomain(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionDomain */
let _cached_encoder_for_KeyConstructionDomain: $.ASN1Encoder<KeyConstructionDomain> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyConstructionDomain */

/* START_OF_SYMBOL_DEFINITION _encode_KeyConstructionDomain */
/**
 * @summary Encodes a(n) KeyConstructionDomain into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionDomain, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionDomain(
    value: KeyConstructionDomain,
    elGetter: $.ASN1Encoder<KeyConstructionDomain>
) {
    if (!_cached_encoder_for_KeyConstructionDomain) {
        _cached_encoder_for_KeyConstructionDomain = function (
            value: KeyConstructionDomain,
            elGetter: $.ASN1Encoder<KeyConstructionDomain>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DomainName(
                            value.domainName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DomainMaintenanceLevel(
                            value.domainMaintenanceLevel,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.domainParams === undefined
                            ? undefined
                            : _encode_DomainParams(value.domainParams, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyConstructionDomain(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyConstructionDomain */

/* eslint-enable */
