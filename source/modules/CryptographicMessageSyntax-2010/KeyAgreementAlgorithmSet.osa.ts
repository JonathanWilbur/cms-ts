/* eslint-disable */
import { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca";
import { KeyAgreementAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreementAlgs.osa";
export { KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca";
export { KeyAgreementAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreementAlgs.osa";

/* START_OF_SYMBOL_DEFINITION KeyAgreementAlgorithmSet */
/**
 * @summary KeyAgreementAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreementAlgorithmSet KEY-AGREE ::= { KeyAgreementAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_AGREE[]}
 *
 */
export const KeyAgreementAlgorithmSet: KEY_AGREE[] = [...KeyAgreementAlgs];
/* END_OF_SYMBOL_DEFINITION KeyAgreementAlgorithmSet */

/* eslint-enable */
