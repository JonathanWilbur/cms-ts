/* eslint-disable */
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
import { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa";
export { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca";
export { pk_dh } from "../PKIXAlgs-2009/pk-dh.oa";

/* START_OF_SYMBOL_DEFINITION KeyAgreePublicKeys */
/**
 * @summary KeyAgreePublicKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreePublicKeys PUBLIC-KEY ::= { pk-dh, ...}
 * ```
 *
 * @constant
 * @type {PUBLIC_KEY[]}
 *
 */
export const KeyAgreePublicKeys: PUBLIC_KEY[] = [pk_dh];
/* END_OF_SYMBOL_DEFINITION KeyAgreePublicKeys */

/* eslint-enable */
