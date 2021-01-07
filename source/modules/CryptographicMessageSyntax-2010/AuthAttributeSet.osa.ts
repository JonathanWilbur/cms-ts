/* eslint-disable */
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa";
export { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa";
export { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa";

/* START_OF_SYMBOL_DEFINITION AuthAttributeSet */
/**
 * @summary AuthAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttributeSet ATTRIBUTE ::= { aa-contentType | aa-messageDigest | aa-signingTime, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const AuthAttributeSet: ATTRIBUTE[] = [
    aa_contentType,
    aa_messageDigest,
    aa_signingTime,
];
/* END_OF_SYMBOL_DEFINITION AuthAttributeSet */

/* eslint-enable */
