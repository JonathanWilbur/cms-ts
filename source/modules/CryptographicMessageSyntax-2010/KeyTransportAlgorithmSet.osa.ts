/* eslint-disable */
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
import { KeyTransportAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyTransportAlgs.osa";
export { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
export { KeyTransportAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyTransportAlgs.osa";

/* START_OF_SYMBOL_DEFINITION KeyTransportAlgorithmSet */
/**
 * @summary KeyTransportAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgorithmSet KEY-TRANSPORT ::= { KeyTransportAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgorithmSet: KEY_TRANSPORT[] = [...KeyTransportAlgs];
/* END_OF_SYMBOL_DEFINITION KeyTransportAlgorithmSet */

/* eslint-enable */
