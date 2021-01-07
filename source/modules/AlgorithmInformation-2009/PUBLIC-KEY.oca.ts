/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta";
import { KeyUsage } from "x500-ts/dist/node/modules/CertificateExtensions/KeyUsage.ta";
export {
    absent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    inheritable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    optional /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ParamOptions,
    ParamOptions_absent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_inheritable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_optional /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredAbsent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_preferredPresent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ParamOptions_required /* IMPORTED_LONG_ENUMERATION_ITEM */,
    preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    preferredPresent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    required /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParamOptions,
    _encode_ParamOptions,
    _enum_for_ParamOptions,
} from "../AlgorithmInformation-2009/ParamOptions.ta";

/* START_OF_SYMBOL_DEFINITION PUBLIC_KEY */
/**
 * @summary PUBLIC_KEY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PUBLIC-KEY ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &KeyValue        OPTIONAL,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent,
 * &keyUsage        KeyUsage OPTIONAL,
 * &PrivateKey        OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [KEY &KeyValue]
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [CERT-KEY-USAGE &keyUsage]
 * [PRIVATE-KEY &PrivateKey]
 * }
 * ```
 *
 * @interface
 */
export interface PUBLIC_KEY<
    KeyValue = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    PrivateKey = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "PUBLIC-KEY";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof PUBLIC_KEY<
                KeyValue,
                Params,
                PrivateKey
            >]: $.ASN1Decoder<PUBLIC_KEY<KeyValue, Params, PrivateKey>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof PUBLIC_KEY<
                KeyValue,
                Params,
                PrivateKey
            >]: $.ASN1Encoder<PUBLIC_KEY<KeyValue, Params, PrivateKey>[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &KeyValue
     */
    readonly "&KeyValue": KeyValue;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
    /**
     * @summary &keyUsage
     */
    readonly "&keyUsage"?: KeyUsage;
    /**
     * @summary &PrivateKey
     */
    readonly "&PrivateKey": PrivateKey;
}
/* END_OF_SYMBOL_DEFINITION PUBLIC_KEY */

/* eslint-enable */
