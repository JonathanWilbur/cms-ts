/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CONTENT_TYPE */
/**
 * @summary CONTENT_TYPE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTENT-TYPE ::= CLASS {
 * &id        OBJECT IDENTIFIER UNIQUE,
 * &Type      OPTIONAL
 * } WITH SYNTAX {
 * [TYPE &Type] IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface CONTENT_TYPE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CONTENT-TYPE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONTENT_TYPE<Type>]: $.ASN1Decoder<
                CONTENT_TYPE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONTENT_TYPE<Type>]: $.ASN1Encoder<
                CONTENT_TYPE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
}
/* END_OF_SYMBOL_DEFINITION CONTENT_TYPE */

/* eslint-enable */
