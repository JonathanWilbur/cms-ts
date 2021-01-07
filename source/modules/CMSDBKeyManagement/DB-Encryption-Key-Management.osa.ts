/* eslint-disable */
import { dbekmRecipientInfo } from "../CMSDBKeyManagement/dbekmRecipientInfo.oa";
import { KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca";
export { dbekmRecipientInfo } from "../CMSDBKeyManagement/dbekmRecipientInfo.oa";
export { KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca";

/* START_OF_SYMBOL_DEFINITION DB_Encryption_Key_Management */
/**
 * @summary DB_Encryption_Key_Management
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DB-Encryption-Key-Management    KEY-MANAGEMENT ::= {
 * dbekmRecipientInfo,
 * ...    -- Expect additional key management objects --
 * }
 * ```
 *
 * @constant
 * @type {KEY_MANAGEMENT[]}
 *
 */
export const DB_Encryption_Key_Management: KEY_MANAGEMENT[] = [
    dbekmRecipientInfo,
];
/* END_OF_SYMBOL_DEFINITION DB_Encryption_Key_Management */

/* eslint-enable */
