/* eslint-disable */
import { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
import { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa";
import { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa";
export { KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca";
export { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa";
export { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa";

/* START_OF_SYMBOL_DEFINITION KeyWrapAlgs */
/**
 * @summary KeyWrapAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapAlgs KEY-WRAP ::= { kwa-3DESWrap | kwa-RC2Wrap, ... }
 * ```
 *
 * @constant
 * @type {KEY_WRAP[]}
 *
 */
export const KeyWrapAlgs: KEY_WRAP[] = [kwa_3DESWrap, kwa_RC2Wrap];
/* END_OF_SYMBOL_DEFINITION KeyWrapAlgs */

/* eslint-enable */
