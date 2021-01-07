/* eslint-disable */
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
import { SignatureAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/SignatureAlgs.osa";
export { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
export { SignatureAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/SignatureAlgs.osa";

/* START_OF_SYMBOL_DEFINITION SignatureAlgorithmSet */
/**
 * @summary SignatureAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgorithmSet SIGNATURE-ALGORITHM ::= { SignatureAlgs, ... }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM[]}
 *
 */
export const SignatureAlgorithmSet: SIGNATURE_ALGORITHM[] = [...SignatureAlgs];
/* END_OF_SYMBOL_DEFINITION SignatureAlgorithmSet */

/* eslint-enable */
