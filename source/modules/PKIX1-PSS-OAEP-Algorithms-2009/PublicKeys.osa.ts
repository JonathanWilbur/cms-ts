/* eslint-disable */
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import { pk_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaES-OAEP.oa";
import { pk_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaSSA-PSS.oa";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
export { pk_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaES-OAEP.oa";
export { pk_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/pk-rsaSSA-PSS.oa";

/* START_OF_SYMBOL_DEFINITION PublicKeys */
/**
 * @summary PublicKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeys PUBLIC-KEY ::= { pk-rsaSSA-PSS | pk-rsaES-OAEP, ... }
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const PublicKeys: PUBLIC_KEY[] = [pk_rsaSSA_PSS, pk_rsaES_OAEP];
/* END_OF_SYMBOL_DEFINITION PublicKeys */

/* eslint-enable */
