/* eslint-disable */
import { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { aa_contentLocation } from "../CMSProfileAttributes/aa-contentLocation.oa";
import { aa_contentLocations } from "../CMSProfileAttributes/aa-contentLocations.oa";
import { aa_parentBlock } from "../CMSProfileAttributes/aa-parentBlock.oa";
import { aa_precedingBlock } from "../CMSProfileAttributes/aa-precedingBlock.oa";
import { aa_sidechains } from "../CMSProfileAttributes/aa-sidechains.oa";
import { aa_signerInfo } from "../CMSProfileAttributes/aa-signerInfo.oa";
import { aa_signerInfos } from "../CMSProfileAttributes/aa-signerInfos.oa";
import { aa_timeStamped } from "../CMSProfileAttributes/aa-timeStamped.oa";
export { aa_contentLocation } from "../CMSProfileAttributes/aa-contentLocation.oa";
export { aa_contentLocations } from "../CMSProfileAttributes/aa-contentLocations.oa";
export { aa_parentBlock } from "../CMSProfileAttributes/aa-parentBlock.oa";
export { aa_precedingBlock } from "../CMSProfileAttributes/aa-precedingBlock.oa";
export { aa_sidechains } from "../CMSProfileAttributes/aa-sidechains.oa";
export { aa_signerInfo } from "../CMSProfileAttributes/aa-signerInfo.oa";
export { aa_signerInfos } from "../CMSProfileAttributes/aa-signerInfos.oa";
export { aa_timeStamped } from "../CMSProfileAttributes/aa-timeStamped.oa";

/* START_OF_SYMBOL_DEFINITION CMSProfileAttributes */
/**
 * @summary CMSProfileAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSProfileAttributes ATTRIBUTE ::= {
 * aa-signerInfo | aa-signerInfos | aa-contentLocation |
 * aa-contentLocations | aa-precedingBlock | aa-timeStamped |
 * aa-sidechains | aa-parentBlock, ...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const CMSProfileAttributes: ATTRIBUTE[] = [
    aa_signerInfo,
    aa_signerInfos,
    aa_contentLocation,
    aa_contentLocations,
    aa_precedingBlock,
    aa_timeStamped,
    aa_sidechains,
    aa_parentBlock,
];
/* END_OF_SYMBOL_DEFINITION CMSProfileAttributes */

/* eslint-enable */
