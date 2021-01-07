/* eslint-disable */
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from "../CryptographicMessageSyntax-2010/EncryptedData.ta";
import { id_encryptedData } from "../CryptographicMessageSyntax-2010/id-encryptedData.va";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca";
export {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from "../CryptographicMessageSyntax-2010/EncryptedData.ta";
export { id_encryptedData } from "../CryptographicMessageSyntax-2010/id-encryptedData.va";

/* START_OF_SYMBOL_DEFINITION ct_EncryptedData */
/**
 * @summary ct_EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-EncryptedData CONTENT-TYPE ::= { TYPE EncryptedData IDENTIFIED BY id-encryptedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<EncryptedData>}
 * @implements {CONTENT_TYPE<EncryptedData>}
 */
export const ct_EncryptedData: CONTENT_TYPE<EncryptedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_EncryptedData,
    },
    encoderFor: {
        "&Type": _encode_EncryptedData,
    },
    "&id": id_encryptedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_EncryptedData */

/* eslint-enable */
