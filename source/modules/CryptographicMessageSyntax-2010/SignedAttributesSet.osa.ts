/* eslint-disable */
import { CMSProfileAttributes } from "../CMSProfileAttributes/CMSProfileAttributes.osa";
import { aa_contentType } from "../CryptographicMessageSyntax-2010/aa-contentType.oa";
import { aa_messageDigest } from "../CryptographicMessageSyntax-2010/aa-messageDigest.oa";
import { aa_signingTime } from "../CryptographicMessageSyntax-2010/aa-signingTime.oa";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { tokenizedParts } from "../TokenizationManifest/tokenizedParts.oa";

/* START_OF_SYMBOL_DEFINITION SignedAttributesSet */
/**
 * @summary SignedAttributesSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributesSet ATTRIBUTE ::= { aa-signingTime | aa-messageDigest | aa-contentType |
 *   CMSProfileAttributes | tokenizedParts, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SignedAttributesSet: ATTRIBUTE[] = [
    aa_signingTime,
    aa_messageDigest,
    aa_contentType,
    ...CMSProfileAttributes,
    tokenizedParts,
];
/* END_OF_SYMBOL_DEFINITION SignedAttributesSet */

/* eslint-enable */
