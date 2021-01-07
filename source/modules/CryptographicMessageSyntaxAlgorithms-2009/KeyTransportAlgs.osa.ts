/* eslint-disable */
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
import { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa";
export { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
export { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa";

/* START_OF_SYMBOL_DEFINITION KeyTransportAlgs */
/**
 * @summary KeyTransportAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgs KEY-TRANSPORT ::= { kt-rsa, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgs: KEY_TRANSPORT[] = [kt_rsa];
/* END_OF_SYMBOL_DEFINITION KeyTransportAlgs */

/* eslint-enable */
