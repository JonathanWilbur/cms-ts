/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
export { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va";

/* START_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */
/**
 * @summary PKCS1MGFAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1MGFAlgorithms ALGORITHM ::= {
 * { IDENTIFIER id-mgf1 PARAMS TYPE HashAlgorithm ARE required },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PKCS1MGFAlgorithms: ALGORITHM[] = [
    ,/* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
];
/* END_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */

/* eslint-enable */
