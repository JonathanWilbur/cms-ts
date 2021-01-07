/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
import { id_data } from "../CryptographicMessageSyntax-2010/id-data.va";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export { id_data } from "../CryptographicMessageSyntax-2010/id-data.va";

/* START_OF_SYMBOL_DEFINITION ct_Data */
/**
 * @summary ct_Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-Data CONTENT-TYPE ::= { IDENTIFIED BY id-data }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE}
 * @implements {CONTENT_TYPE}
 */
export const ct_Data: CONTENT_TYPE = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_Data */

/* eslint-enable */
