/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";
export { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa";

/* START_OF_SYMBOL_DEFINITION PBKDF2_PRFs */
/**
 * @summary PBKDF2_PRFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFs ALGORITHM ::= { alg-hMAC-SHA1, ... }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PBKDF2_PRFs: ALGORITHM[] = [alg_hMAC_SHA1];
/* END_OF_SYMBOL_DEFINITION PBKDF2_PRFs */

/* eslint-enable */
