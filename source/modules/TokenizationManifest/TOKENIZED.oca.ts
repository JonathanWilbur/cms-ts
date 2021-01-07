/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TOKENIZED */
/**
 * @summary TOKENIZED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TOKENIZED ::= CLASS {
 * &id OBJECT IDENTIFIER UNIQUE,
 * &Type OPTIONAL
 * }
 * WITH SYNTAX { OID &id [ PARMS &Type ] }
 * ```
 *
 * @interface
 */
export interface TOKENIZED<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "TOKENIZED";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof TOKENIZED<Type>]: $.ASN1Decoder<TOKENIZED<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof TOKENIZED<Type>]: $.ASN1Encoder<TOKENIZED<Type>[_K]>;
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
/* END_OF_SYMBOL_DEFINITION TOKENIZED */

/* eslint-enable */
