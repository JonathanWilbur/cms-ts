/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";
export {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta";
export { id_pSpecified } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-pSpecified.va";

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
    ,/* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
];
/* END_OF_SYMBOL_DEFINITION PSS_SourceAlgorithms */

/* eslint-enable */
