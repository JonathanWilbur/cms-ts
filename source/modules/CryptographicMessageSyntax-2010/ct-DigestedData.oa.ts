/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
import {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../CryptographicMessageSyntax-2010/DigestedData.ta";
import { id_digestedData } from "../CryptographicMessageSyntax-2010/id-digestedData.va";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../CryptographicMessageSyntax-2010/DigestedData.ta";
export { id_digestedData } from "../CryptographicMessageSyntax-2010/id-digestedData.va";

/* START_OF_SYMBOL_DEFINITION ct_DigestedData */
/**
 * @summary ct_DigestedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-DigestedData CONTENT-TYPE ::= { TYPE DigestedData IDENTIFIED BY id-digestedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<DigestedData>}
 * @implements {CONTENT_TYPE<DigestedData>}
 */
export const ct_DigestedData: CONTENT_TYPE<DigestedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_DigestedData,
    },
    encoderFor: {
        "&Type": _encode_DigestedData,
    },
    "&id": id_digestedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_DigestedData */

/* eslint-enable */
