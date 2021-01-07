/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DatabaseServerToKeyManager,
    _decode_DatabaseServerToKeyManager,
    _encode_DatabaseServerToKeyManager,
} from "../CMSDBKeyManagement/DatabaseServerToKeyManager.ta";
import {
    MasterKeyEncryptedHMACkey,
    _decode_MasterKeyEncryptedHMACkey,
    _encode_MasterKeyEncryptedHMACkey,
} from "../CMSDBKeyManagement/MasterKeyEncryptedHMACkey.ta";
export {
    DatabaseServerToKeyManager,
    _decode_DatabaseServerToKeyManager,
    _encode_DatabaseServerToKeyManager,
} from "../CMSDBKeyManagement/DatabaseServerToKeyManager.ta";
export {
    MasterKeyEncryptedHMACkey,
    _decode_MasterKeyEncryptedHMACkey,
    _encode_MasterKeyEncryptedHMACkey,
} from "../CMSDBKeyManagement/MasterKeyEncryptedHMACkey.ta";

/* START_OF_SYMBOL_DEFINITION DBEKMRecipientInfo */
/**
 * @summary DBEKMRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DBEKMRecipientInfo     ::=  CHOICE {
 * keyManager        MasterKeyEncryptedHMACkey,
 * server        DatabaseServerToKeyManager
 * }
 * ```
 */
export type DBEKMRecipientInfo =
    | { keyManager: MasterKeyEncryptedHMACkey } /* CHOICE_ALT_ROOT */
    | { server: DatabaseServerToKeyManager } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DBEKMRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DBEKMRecipientInfo */
let _cached_decoder_for_DBEKMRecipientInfo: $.ASN1Decoder<DBEKMRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DBEKMRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DBEKMRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) DBEKMRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DBEKMRecipientInfo} The decoded data structure.
 */
export function _decode_DBEKMRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_DBEKMRecipientInfo) {
        _cached_decoder_for_DBEKMRecipientInfo = $._decode_inextensible_choice<DBEKMRecipientInfo>(
            {
                "CONTEXT 0": ["keyManager", _decode_MasterKeyEncryptedHMACkey],
                "CONTEXT 1": ["server", _decode_DatabaseServerToKeyManager],
            }
        );
    }
    return _cached_decoder_for_DBEKMRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DBEKMRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DBEKMRecipientInfo */
let _cached_encoder_for_DBEKMRecipientInfo: $.ASN1Encoder<DBEKMRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DBEKMRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DBEKMRecipientInfo */
/**
 * @summary Encodes a(n) DBEKMRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DBEKMRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_DBEKMRecipientInfo(
    value: DBEKMRecipientInfo,
    elGetter: $.ASN1Encoder<DBEKMRecipientInfo>
) {
    if (!_cached_encoder_for_DBEKMRecipientInfo) {
        _cached_encoder_for_DBEKMRecipientInfo = $._encode_choice<DBEKMRecipientInfo>(
            {
                keyManager: _encode_MasterKeyEncryptedHMACkey,
                server: _encode_DatabaseServerToKeyManager,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DBEKMRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DBEKMRecipientInfo */

/* eslint-enable */
