/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca";
import { cea_3DES_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-3DES-cbc.oa";
import { cea_RC2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-RC2-cbc.oa";
export { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca";
export { cea_3DES_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-3DES-cbc.oa";
export { cea_RC2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-RC2-cbc.oa";

/* START_OF_SYMBOL_DEFINITION ContentEncryptionAlgs */
/**
 * @summary ContentEncryptionAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgs CONTENT-ENCRYPTION ::= { cea-3DES-cbc | cea-RC2-cbc, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION[]}
 *
 */
export const ContentEncryptionAlgs: CONTENT_ENCRYPTION[] = [
    cea_3DES_cbc,
    cea_RC2_cbc,
];
/* END_OF_SYMBOL_DEFINITION ContentEncryptionAlgs */

/* eslint-enable */
