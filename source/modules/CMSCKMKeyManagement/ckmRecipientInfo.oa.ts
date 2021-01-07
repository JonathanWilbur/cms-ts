/* eslint-disable */
import { EXTENDED_KEY_MGMT_INFO } from "../CMSCKMKeyManagement/EXTENDED-KEY-MGMT-INFO.oca";
import {
    _decode_KeyConstructRecipientInfo,
    _encode_KeyConstructRecipientInfo,
} from "../CMSCKMKeyManagement/KeyConstructRecipientInfo.ta";
import { id_ckm_recip_info } from "../CMSObjectIdentifiers/id-ckm-recip-info.va";
export { EXTENDED_KEY_MGMT_INFO } from "../CMSCKMKeyManagement/EXTENDED-KEY-MGMT-INFO.oca";
export {
    KeyConstructRecipientInfo,
    _decode_KeyConstructRecipientInfo,
    _encode_KeyConstructRecipientInfo,
} from "../CMSCKMKeyManagement/KeyConstructRecipientInfo.ta";
export { id_ckm_recip_info } from "../CMSObjectIdentifiers/id-ckm-recip-info.va";

/* START_OF_SYMBOL_DEFINITION ckmRecipientInfo */
/**
 * @summary ckmRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ckmRecipientInfo EXTENDED-KEY-MGMT-INFO ::= {
 * KeyConstructRecipientInfo IDENTIFIED BY id-ckm-recip-info
 * }
 * ```
 *
 * @constant
 * @type {EXTENDED_KEY_MGMT_INFO<KeyConstructRecipientInfo>}
 * @implements {EXTENDED_KEY_MGMT_INFO<KeyConstructRecipientInfo>}
 */
export const ckmRecipientInfo: EXTENDED_KEY_MGMT_INFO = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_KeyConstructRecipientInfo,
    },
    encoderFor: {
        "&Type": _encode_KeyConstructRecipientInfo,
    },
    "&id": id_ckm_recip_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ckmRecipientInfo */

/* eslint-enable */
