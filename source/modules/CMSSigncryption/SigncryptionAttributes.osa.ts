/* eslint-disable */
import { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa";
import { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export { signcryptedEnvelope } from "../CMSSigncryption/signcryptedEnvelope.oa";
export { SignedAttributesSet } from "../CryptographicMessageSyntax-2010/SignedAttributesSet.osa";

/* START_OF_SYMBOL_DEFINITION SigncryptionAttributes */
/**
 * @summary SigncryptionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionAttributes ATTRIBUTE ::= {
 * SignedAttributesSet    | -- CMS Signed Attributes --
 * signcryptedEnvelope,
 * ... -- Expect user defined attributes --
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SigncryptionAttributes: ATTRIBUTE[] = [
    ...SignedAttributesSet,
    signcryptedEnvelope,
];
/* END_OF_SYMBOL_DEFINITION SigncryptionAttributes */

/* eslint-enable */
