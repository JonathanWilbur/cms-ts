/* eslint-disable */
import {
    _decode_DBEKMRecipientInfo,
    _encode_DBEKMRecipientInfo,
} from "../CMSDBKeyManagement/DBEKMRecipientInfo.ta";
import { KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca";
import { id_dbekm_recip_info } from "../CMSObjectIdentifiers/id-dbekm-recip-info.va";
export {
    DBEKMRecipientInfo,
    _decode_DBEKMRecipientInfo,
    _encode_DBEKMRecipientInfo,
} from "../CMSDBKeyManagement/DBEKMRecipientInfo.ta";
export { KEY_MANAGEMENT } from "../CMSDBKeyManagement/KEY-MANAGEMENT.oca";
export { id_dbekm_recip_info } from "../CMSObjectIdentifiers/id-dbekm-recip-info.va";

/* START_OF_SYMBOL_DEFINITION dbekmRecipientInfo */
/**
 * @summary dbekmRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dbekmRecipientInfo            KEY-MANAGEMENT ::= {
 * DBEKMRecipientInfo IDENTIFIED BY id-dbekm-recip-info }
 * ```
 *
 * @constant
 * @type {KEY_MANAGEMENT<DBEKMRecipientInfo>}
 * @implements {KEY_MANAGEMENT<DBEKMRecipientInfo>}
 */
export const dbekmRecipientInfo: KEY_MANAGEMENT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DBEKMRecipientInfo,
    },
    encoderFor: {
        "&Type": _encode_DBEKMRecipientInfo,
    },
    "&id": id_dbekm_recip_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dbekmRecipientInfo */

/* eslint-enable */
