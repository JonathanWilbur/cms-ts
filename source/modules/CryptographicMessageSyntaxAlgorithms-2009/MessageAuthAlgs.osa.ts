/* eslint-disable */
import { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
import { maca_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/maca-hMAC-SHA1.oa";
export { MAC_ALGORITHM } from "../AlgorithmInformation-2009/MAC-ALGORITHM.oca";
export { maca_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/maca-hMAC-SHA1.oa";

/* START_OF_SYMBOL_DEFINITION MessageAuthAlgs */
/**
 * @summary MessageAuthAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAuthAlgs MAC-ALGORITHM ::= { maca-hMAC-SHA1, ... }
 * ```
 *
 * @constant
 * @type {MAC_ALGORITHM[]}
 *
 */
export const MessageAuthAlgs: MAC_ALGORITHM[] = [maca_hMAC_SHA1];
/* END_OF_SYMBOL_DEFINITION MessageAuthAlgs */

/* eslint-enable */
