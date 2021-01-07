/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
import { KeyWrapAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgs.osa";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
export { KeyWrapAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyWrapAlgs.osa";

/* START_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmSet */
/**
 * @summary KeyEncryptionAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionAlgorithmSet KEY-WRAP ::= { KeyWrapAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_WRAP[]}
 *
 */
export const KeyEncryptionAlgorithmSet: KEY_WRAP[] = [...KeyWrapAlgs];
/* END_OF_SYMBOL_DEFINITION KeyEncryptionAlgorithmSet */

/* eslint-enable */
