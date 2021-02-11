/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta";
import { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va";

const PSS_SourceAlgorithms_0: ALGORITHM<EncodingParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_EncodingParameters,
    },
    encoderFor: {
        "&Type": _encode_EncodingParameters,
    },
    "&id": id_pSpecified,
    "&Type": 0 as never,
};

/* START_OF_SYMBOL_DEFINITION PSS_SourceAlgorithms */
/**
 * @summary PSS_SourceAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSS-SourceAlgorithms ALGORITHM ::= {
 * { IDENTIFIER id-pSpecified PARAMS TYPE EncodingParameters
 * ARE required },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PSS_SourceAlgorithms: ALGORITHM[] = [
    PSS_SourceAlgorithms_0,
];
/* END_OF_SYMBOL_DEFINITION PSS_SourceAlgorithms */

/* eslint-enable */
