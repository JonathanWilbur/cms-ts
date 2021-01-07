/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export { ContentSet } from "../CryptographicMessageSyntax-2010/ContentSet.osa";

/* START_OF_SYMBOL_DEFINITION EncryptedContentInfoType */
/**
 * @summary EncryptedContentInfoType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfoType { AlgorithmIdentifierType } ::= SEQUENCE {
 * contentType                CONTENT-TYPE.&id({ContentSet}),
 * contentEncryptionAlgorithm    AlgorithmIdentifierType,
 * encryptedContent           [0] IMPLICIT OCTET STRING OPTIONAL }
 * ```
 *
 * @class
 */
export class EncryptedContentInfoType<AlgorithmIdentifierType> {
    constructor(
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OBJECT_IDENTIFIER,
        /**
         * @summary `contentEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly contentEncryptionAlgorithm: AlgorithmIdentifierType,
        /**
         * @summary `encryptedContent`.
         * @public
         * @readonly
         */
        readonly encryptedContent: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a EncryptedContentInfoType
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedContentInfoType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedContentInfoType`.
     * @returns {EncryptedContentInfoType}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncryptedContentInfoType<any>]: EncryptedContentInfoType<any>[_K];
        }
    ): EncryptedContentInfoType<any> {
        return new EncryptedContentInfoType(
            _o.contentType,
            _o.contentEncryptionAlgorithm,
            _o.encryptedContent
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedContentInfoType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfoType */
/**
 * @summary The Leading Root Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contentType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contentEncryptionAlgorithm",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedContent",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedContentInfoType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfoType */
/**
 * @summary The Trailing Root Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedContentInfoType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfoType */
/**
 * @summary The Extension Addition Component Types of EncryptedContentInfoType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedContentInfoType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedContentInfoType */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_EncryptedContentInfoType */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) EncryptedContentInfoType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_EncryptedContentInfoType<
    AlgorithmIdentifierType
>(_decode_AlgorithmIdentifierType: $.ASN1Decoder<AlgorithmIdentifierType>) {
    return function (
        el: _Element
    ): EncryptedContentInfoType<AlgorithmIdentifierType> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let contentType!: OBJECT_IDENTIFIER;
        let contentEncryptionAlgorithm!: AlgorithmIdentifierType;
        let encryptedContent: OPTIONAL<OCTET_STRING>;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            contentType: (_el: _Element): void => {
                contentType = $._decodeObjectIdentifier(_el);
            },
            contentEncryptionAlgorithm: (_el: _Element): void => {
                contentEncryptionAlgorithm = _decode_AlgorithmIdentifierType(
                    _el
                );
            },
            encryptedContent: (_el: _Element): void => {
                encryptedContent = $._decode_implicit<OCTET_STRING>(
                    () => $._decodeOctetString
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EncryptedContentInfoType,
            _extension_additions_list_spec_for_EncryptedContentInfoType,
            _root_component_type_list_2_spec_for_EncryptedContentInfoType,
            undefined
        );
        return new EncryptedContentInfoType /* SEQUENCE_CONSTRUCTOR_CALL */(
            contentType,
            contentEncryptionAlgorithm,
            encryptedContent
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_EncryptedContentInfoType */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_EncryptedContentInfoType */
/**
 * @summary Returns a function that will encode a(n) EncryptedContentInfoType into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) EncryptedContentInfoType as an ASN.1 element.
 */
export function _get_encoder_for_EncryptedContentInfoType<
    AlgorithmIdentifierType
>(_encode_AlgorithmIdentifierType: $.ASN1Encoder<AlgorithmIdentifierType>) {
    return function (
        value: EncryptedContentInfoType<AlgorithmIdentifierType>,
        elGetter: $.ASN1Encoder<
            EncryptedContentInfoType<AlgorithmIdentifierType>
        >
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ $._encodeObjectIdentifier(
                        value.contentType,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_AlgorithmIdentifierType(
                        value.contentEncryptionAlgorithm,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.encryptedContent === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => $._encodeOctetString,
                              $.BER
                          )(value.encryptedContent, $.BER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_EncryptedContentInfoType */

/* eslint-enable */
