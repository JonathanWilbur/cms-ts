/* eslint-disable */
import { MODE } from "../CMSSigncryption/MODE.oca";
import { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa";
import { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa";
import { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa";
import { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa";
export { MODE } from "../CMSSigncryption/MODE.oca";
export { signcryptedAttributes } from "../CMSSigncryption/signcryptedAttributes.oa";
export { signcryptedComponents } from "../CMSSigncryption/signcryptedComponents.oa";
export { signcryptedContent } from "../CMSSigncryption/signcryptedContent.oa";
export { signcryptedEnveloped } from "../CMSSigncryption/signcryptedEnveloped.oa";

/* START_OF_SYMBOL_DEFINITION ProcessingModes */
/**
 * @summary ProcessingModes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingModes MODE ::= {
 * signcryptedAttributes    |
 * signcryptedComponents    |
 * signcryptedContent     |
 * signcryptedEnveloped,
 * ... -- Expect additional processing modes --
 * }
 * ```
 *
 * @constant
 * @type {MODE[]}
 *
 */
export const ProcessingModes: MODE[] = [
    signcryptedAttributes,
    signcryptedComponents,
    signcryptedContent,
    signcryptedEnveloped,
];
/* END_OF_SYMBOL_DEFINITION ProcessingModes */

/* eslint-enable */
