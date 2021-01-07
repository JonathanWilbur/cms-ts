/* eslint-disable */
import { aa_countersignature } from "../CryptographicMessageSyntax-2010/aa-countersignature.oa";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export { aa_countersignature } from "../CryptographicMessageSyntax-2010/aa-countersignature.oa";

/* START_OF_SYMBOL_DEFINITION UnsignedAttributes */
/**
 * @summary UnsignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedAttributes ATTRIBUTE ::= { aa-countersignature, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnsignedAttributes: ATTRIBUTE[] = [aa_countersignature];
/* END_OF_SYMBOL_DEFINITION UnsignedAttributes */

/* eslint-enable */
