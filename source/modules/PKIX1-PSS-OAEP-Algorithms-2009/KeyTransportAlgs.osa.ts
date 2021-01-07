/* eslint-disable */
import { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
import { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa";
export { KEY_TRANSPORT } from "../AlgorithmInformation-2009/KEY-TRANSPORT.oca";
export { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa";

/* START_OF_SYMBOL_DEFINITION KeyTransportAlgs */
/**
 * @summary KeyTransportAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyTransportAlgs KEY-TRANSPORT ::= { kta-rsaES-OAEP, ... }
 * ```
 *
 * @constant
 * @type {KEY_TRANSPORT[]}
 *
 */
export const KeyTransportAlgs: KEY_TRANSPORT[] = [kta_rsaES_OAEP];
/* END_OF_SYMBOL_DEFINITION KeyTransportAlgs */

/* eslint-enable */
