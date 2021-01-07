/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from "../CMSSigncryption/Certificates.ta";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta";
import {
    ContentInformation,
    _decode_ContentInformation,
    _encode_ContentInformation,
} from "../CMSSigncryption/ContentInformation.ta";
import { CRLs, _decode_CRLs, _encode_CRLs } from "../CMSSigncryption/CRLs.ta";
import {
    Signcrypters,
    _decode_Signcrypters,
    _encode_Signcrypters,
} from "../CMSSigncryption/Signcrypters.ta";
export {
    Certificates,
    _decode_Certificates,
    _encode_Certificates,
} from "../CMSSigncryption/Certificates.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CMSSigncryption/CMSVersion.ta";
export {
    ContentInformation,
    _decode_ContentInformation,
    _encode_ContentInformation,
} from "../CMSSigncryption/ContentInformation.ta";
export { CRLs, _decode_CRLs, _encode_CRLs } from "../CMSSigncryption/CRLs.ta";
export {
    Signcrypters,
    _decode_Signcrypters,
    _encode_Signcrypters,
} from "../CMSSigncryption/Signcrypters.ta";

/* START_OF_SYMBOL_DEFINITION SigncryptedData */
/**
 * @summary SigncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedData ::= SEQUENCE {
 * version        CMSVersion,
 * contentInformation    ContentInformation,
 * certificates    Certificates OPTIONAL,
 * crls            CRLs OPTIONAL,
 * signcrypters    Signcrypters
 * }
 * ```
 *
 * @class
 */
export class SigncryptedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `contentInformation`.
         * @public
         * @readonly
         */
        readonly contentInformation: ContentInformation,
        /**
         * @summary `certificates`.
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<Certificates>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<CRLs>,
        /**
         * @summary `signcrypters`.
         * @public
         * @readonly
         */
        readonly signcrypters: Signcrypters
    ) {}

    /**
     * @summary Restructures an object into a SigncryptedData
     * @description
     *
     * This takes an `object` and converts it to a `SigncryptedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigncryptedData`.
     * @returns {SigncryptedData}
     */
    public static _from_object(
        _o: { [_K in keyof SigncryptedData]: SigncryptedData[_K] }
    ): SigncryptedData {
        return new SigncryptedData(
            _o.version,
            _o.contentInformation,
            _o.certificates,
            _o.crls,
            _o.signcrypters
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigncryptedData */
/**
 * @summary The Leading Root Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SigncryptedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contentInformation",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certificates",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signcrypters",
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigncryptedData */
/**
 * @summary The Trailing Root Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SigncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigncryptedData */
/**
 * @summary The Extension Addition Component Types of SigncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SigncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedData */
let _cached_decoder_for_SigncryptedData: $.ASN1Decoder<SigncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_SigncryptedData */
/**
 * @summary Decodes an ASN.1 element into a(n) SigncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigncryptedData} The decoded data structure.
 */
export function _decode_SigncryptedData(el: _Element) {
    if (!_cached_decoder_for_SigncryptedData) {
        _cached_decoder_for_SigncryptedData = function (
            el: _Element
        ): SigncryptedData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let contentInformation!: ContentInformation;
            let certificates: OPTIONAL<Certificates>;
            let crls: OPTIONAL<CRLs>;
            let signcrypters!: Signcrypters;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                contentInformation: (_el: _Element): void => {
                    contentInformation = _decode_ContentInformation(_el);
                },
                certificates: (_el: _Element): void => {
                    certificates = _decode_Certificates(_el);
                },
                crls: (_el: _Element): void => {
                    crls = _decode_CRLs(_el);
                },
                signcrypters: (_el: _Element): void => {
                    signcrypters = _decode_Signcrypters(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigncryptedData,
                _extension_additions_list_spec_for_SigncryptedData,
                _root_component_type_list_2_spec_for_SigncryptedData,
                undefined
            );
            return new SigncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                contentInformation,
                certificates,
                crls,
                signcrypters
            );
        };
    }
    return _cached_decoder_for_SigncryptedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedData */
let _cached_encoder_for_SigncryptedData: $.ASN1Encoder<SigncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SigncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_SigncryptedData */
/**
 * @summary Encodes a(n) SigncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_SigncryptedData(
    value: SigncryptedData,
    elGetter: $.ASN1Encoder<SigncryptedData>
) {
    if (!_cached_encoder_for_SigncryptedData) {
        _cached_encoder_for_SigncryptedData = function (
            value: SigncryptedData,
            elGetter: $.ASN1Encoder<SigncryptedData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ContentInformation(
                            value.contentInformation,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : _encode_Certificates(value.certificates, $.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : _encode_CRLs(value.crls, $.BER),
                        /* REQUIRED   */ _encode_Signcrypters(
                            value.signcrypters,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SigncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SigncryptedData */

/* eslint-enable */
