/* eslint-disable */
import { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca";
import { simpleString } from "../CMSDBKeyManagement/simpleString.oa";
export { DBEKM } from "../CMSDBKeyManagement/DBEKM.oca";
export { simpleString } from "../CMSDBKeyManagement/simpleString.oa";

/* START_OF_SYMBOL_DEFINITION SchemaIdentifier */
/**
 * @summary SchemaIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemaIdentifier DBEKM ::= {
 * simpleString,
 * ...    -- Expect additional schema identifier objects --
 * }
 * ```
 *
 * @constant
 * @type {DBEKM[]}
 *
 */
export const SchemaIdentifier: DBEKM[] = [simpleString];
/* END_OF_SYMBOL_DEFINITION SchemaIdentifier */

/* eslint-enable */
