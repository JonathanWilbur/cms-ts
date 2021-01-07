/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SMIME_CAPS */
/**
 * @summary SMIME_CAPS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIME-CAPS ::= CLASS {
 * &id            OBJECT IDENTIFIER UNIQUE,
 * &Type        OPTIONAL
 * }
 * WITH SYNTAX { [TYPE &Type] IDENTIFIED BY &id }
 * ```
 *
 * @interface
 */
export interface SMIME_CAPS<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SMIME-CAPS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SMIME_CAPS<Type>]: $.ASN1Decoder<SMIME_CAPS<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SMIME_CAPS<Type>]: $.ASN1Encoder<SMIME_CAPS<Type>[_K]>;
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
/* END_OF_SYMBOL_DEFINITION SMIME_CAPS */

/* eslint-enable */
