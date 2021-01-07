/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/aa-encrypKeyPref.oa";
import { aa_smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/aa-smimeCapabilities.oa";
export { aa_encrypKeyPref } from "../SecureMimeMessageV3dot1-2009/aa-encrypKeyPref.oa";
export { aa_smimeCapabilities } from "../SecureMimeMessageV3dot1-2009/aa-smimeCapabilities.oa";

/* START_OF_SYMBOL_DEFINITION SMimeAttributeSet */
/**
 * @summary SMimeAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeAttributeSet ATTRIBUTE ::= { aa-smimeCapabilities | aa-encrypKeyPref,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SMimeAttributeSet: ATTRIBUTE[] = [
    aa_smimeCapabilities,
    aa_encrypKeyPref,
];
/* END_OF_SYMBOL_DEFINITION SMimeAttributeSet */

/* eslint-enable */
