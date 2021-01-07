/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MODE */
/**
 * @summary MODE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MODE ::= CLASS {
 * &Type    OPTIONAL,
 * &id    OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { [WITH SYNTAX &Type] ID &id}
 * ```
 *
 * @interface
 */
export interface MODE<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MODE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MODE<Type>]: $.ASN1Decoder<MODE<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MODE<Type>]: $.ASN1Encoder<MODE<Type>[_K]>;
        }
    >;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION MODE */

/* eslint-enable */
