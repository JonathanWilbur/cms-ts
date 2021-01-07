/* eslint-disable */
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import { KeyAgreePublicKeys } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreePublicKeys.osa";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
export { KeyAgreePublicKeys } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreePublicKeys.osa";

/* START_OF_SYMBOL_DEFINITION OriginatorKeySet */
/**
 * @summary OriginatorKeySet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorKeySet PUBLIC-KEY ::= { KeyAgreePublicKeys, ... }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const OriginatorKeySet: PUBLIC_KEY[] = [...KeyAgreePublicKeys];
/* END_OF_SYMBOL_DEFINITION OriginatorKeySet */

/* eslint-enable */
