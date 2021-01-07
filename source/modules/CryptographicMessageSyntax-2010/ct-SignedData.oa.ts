/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
import { id_signedData } from "../CryptographicMessageSyntax-2010/id-signedData.va";
import {
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from "../CryptographicMessageSyntax-2010/SignedData.ta";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export { id_signedData } from "../CryptographicMessageSyntax-2010/id-signedData.va";
export {
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from "../CryptographicMessageSyntax-2010/SignedData.ta";

/* START_OF_SYMBOL_DEFINITION ct_SignedData */
/**
 * @summary ct_SignedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-SignedData CONTENT-TYPE ::= { TYPE SignedData IDENTIFIED BY id-signedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SignedData>}
 * @implements {CONTENT_TYPE<SignedData>}
 */
export const ct_SignedData: CONTENT_TYPE<SignedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_SignedData,
    },
    encoderFor: {
        "&Type": _encode_SignedData,
    },
    "&id": id_signedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_SignedData */

/* eslint-enable */
