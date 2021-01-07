/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CURVE */
/**
 * @summary CURVE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CURVE ::= CLASS { &id OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX { ID &id }
 * ```
 *
 * @interface
 */
export interface CURVE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CURVE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CURVE]: $.ASN1Decoder<CURVE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CURVE]: $.ASN1Encoder<CURVE[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION CURVE */

/* eslint-enable */
