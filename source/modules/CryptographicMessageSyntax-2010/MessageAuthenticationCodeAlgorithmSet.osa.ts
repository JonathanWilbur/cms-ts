/* eslint-disable */
import { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
import { MessageAuthAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/MessageAuthAlgs.osa";
export { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
export { MessageAuthAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/MessageAuthAlgs.osa";

/* START_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithmSet */
/**
 * @summary MessageAuthenticationCodeAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthenticationCodeAlgorithmSet MAC-ALGORITHM ::= { MessageAuthAlgs, ... }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const MessageAuthenticationCodeAlgorithmSet: MAC_ALGORITHM[] = [
    ...MessageAuthAlgs,
];
/* END_OF_SYMBOL_DEFINITION MessageAuthenticationCodeAlgorithmSet */

/* eslint-enable */
