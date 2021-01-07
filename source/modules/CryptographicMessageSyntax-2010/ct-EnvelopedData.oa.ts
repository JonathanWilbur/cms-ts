/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
import {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from "../CryptographicMessageSyntax-2010/EnvelopedData.ta";
import { id_envelopedData } from "../CryptographicMessageSyntax-2010/id-envelopedData.va";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from "../CryptographicMessageSyntax-2010/EnvelopedData.ta";
export { id_envelopedData } from "../CryptographicMessageSyntax-2010/id-envelopedData.va";

/* START_OF_SYMBOL_DEFINITION ct_EnvelopedData */
/**
 * @summary ct_EnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-EnvelopedData CONTENT-TYPE ::= { TYPE EnvelopedData IDENTIFIED BY id-envelopedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<EnvelopedData>}
 * @implements {CONTENT_TYPE<EnvelopedData>}
 */
export const ct_EnvelopedData: CONTENT_TYPE<EnvelopedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_EnvelopedData,
    },
    encoderFor: {
        "&Type": _encode_EnvelopedData,
    },
    "&id": id_envelopedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_EnvelopedData */

/* eslint-enable */
