/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta";
import {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../CryptographicMessageSyntax-2010/EncryptedContentInfo.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta";
export {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta";
export {
    EncryptedContentInfo,
    _decode_EncryptedContentInfo,
    _encode_EncryptedContentInfo,
} from "../CryptographicMessageSyntax-2010/EncryptedContentInfo.ta";

/* START_OF_SYMBOL_DEFINITION NamedKeyEncryptedData */
/**
 * @summary NamedKeyEncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedKeyEncryptedData ::= SEQUENCE {
 * version            CMSVersion,
 * keyName            [0] OCTET STRING OPTIONAL,
 * encryptedContentInfo    EncryptedContentInfo,
 * unprotectedAttrs        [1] IMPLICIT Attributes
 *                     {{UnprotectedEncAttributes}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NamedKeyEncryptedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `keyName`.
         * @public
         * @readonly
         */
        readonly keyName: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `encryptedContentInfo`.
         * @public
         * @readonly
         */
        readonly encryptedContentInfo: EncryptedContentInfo,
        /**
         * @summary `unprotectedAttrs`.
         * @public
         * @readonly
         */
        readonly unprotectedAttrs: OPTIONAL<Attributes>
    ) {}

    /**
     * @summary Restructures an object into a NamedKeyEncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `NamedKeyEncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NamedKeyEncryptedData`.
     * @returns {NamedKeyEncryptedData}
     */
    public static _from_object(
        _o: { [_K in keyof NamedKeyEncryptedData]: NamedKeyEncryptedData[_K] }
    ): NamedKeyEncryptedData {
        return new NamedKeyEncryptedData(
            _o.version,
            _o.keyName,
            _o.encryptedContentInfo,
            _o.unprotectedAttrs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedKeyEncryptedData */
/**
 * @summary The Leading Root Component Types of NamedKeyEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NamedKeyEncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyName",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unprotectedAttrs",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedKeyEncryptedData */
/**
 * @summary The Trailing Root Component Types of NamedKeyEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NamedKeyEncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedKeyEncryptedData */
/**
 * @summary The Extension Addition Component Types of NamedKeyEncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NamedKeyEncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedKeyEncryptedData */
let _cached_decoder_for_NamedKeyEncryptedData: $.ASN1Decoder<NamedKeyEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_NamedKeyEncryptedData */
/**
 * @summary Decodes an ASN.1 element into a(n) NamedKeyEncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedKeyEncryptedData} The decoded data structure.
 */
export function _decode_NamedKeyEncryptedData(el: _Element) {
    if (!_cached_decoder_for_NamedKeyEncryptedData) {
        _cached_decoder_for_NamedKeyEncryptedData = function (
            el: _Element
        ): NamedKeyEncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let keyName: OPTIONAL<OCTET_STRING>;
            let encryptedContentInfo!: EncryptedContentInfo;
            let unprotectedAttrs: OPTIONAL<Attributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                keyName: (_el: _Element): void => {
                    keyName = $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    )(_el);
                },
                encryptedContentInfo: (_el: _Element): void => {
                    encryptedContentInfo = _decode_EncryptedContentInfo(_el);
                },
                unprotectedAttrs: (_el: _Element): void => {
                    unprotectedAttrs = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NamedKeyEncryptedData,
                _extension_additions_list_spec_for_NamedKeyEncryptedData,
                _root_component_type_list_2_spec_for_NamedKeyEncryptedData,
                undefined
            );
            return new NamedKeyEncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                keyName,
                encryptedContentInfo,
                unprotectedAttrs
            );
        };
    }
    return _cached_decoder_for_NamedKeyEncryptedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedKeyEncryptedData */
let _cached_encoder_for_NamedKeyEncryptedData: $.ASN1Encoder<NamedKeyEncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedKeyEncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_NamedKeyEncryptedData */
/**
 * @summary Encodes a(n) NamedKeyEncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedKeyEncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_NamedKeyEncryptedData(
    value: NamedKeyEncryptedData,
    elGetter: $.ASN1Encoder<NamedKeyEncryptedData>
) {
    if (!_cached_encoder_for_NamedKeyEncryptedData) {
        _cached_encoder_for_NamedKeyEncryptedData = function (
            value: NamedKeyEncryptedData,
            elGetter: $.ASN1Encoder<NamedKeyEncryptedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyName === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeOctetString,
                                  $.BER
                              )(value.keyName, $.BER),
                        /* REQUIRED   */ _encode_EncryptedContentInfo(
                            value.encryptedContentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unprotectedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.unprotectedAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NamedKeyEncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamedKeyEncryptedData */

/* eslint-enable */
