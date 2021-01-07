/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";

/* START_OF_SYMBOL_DEFINITION SigncryptAlgorithms */
/**
 * @summary SigncryptAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptAlgorithms ALGORITHM ::= {
 * SigncryptionMechanism, -- ISO/IEC 29150 Signcryption --
 * ...  -- Expect additional algorithm objects --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SigncryptAlgorithms: ALGORITHM[] = [
    // Commented out because this comes from the `Signcryption` module, which comes from the proprietary ISO/IEC 29150.
    // ...SigncryptionMechanism,
];
/* END_OF_SYMBOL_DEFINITION SigncryptAlgorithms */

/* eslint-enable */
