/* eslint-disable */
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../CMSDBKeyManagement/UniqueIdentifier.ta";
import { id_UniqueIdentifier } from "../CMSObjectIdentifiers/id-UniqueIdentifier.va";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../CMSDBKeyManagement/UniqueIdentifier.ta";
export { id_UniqueIdentifier } from "../CMSObjectIdentifiers/id-UniqueIdentifier.va";

/* START_OF_SYMBOL_DEFINITION uniqueIdentifier */
/**
 * @summary uniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uniqueIdentifier ATTRIBUTE ::= {
 * TYPE UniqueIdentifier IDENTIFIED BY id-UniqueIdentifier
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UniqueIdentifier>}
 * @implements {ATTRIBUTE<UniqueIdentifier>}
 */
export const uniqueIdentifier: ATTRIBUTE<UniqueIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniqueIdentifier,
    },
    encoderFor: {
        "&Type": _encode_UniqueIdentifier,
    },
    "&id": id_UniqueIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uniqueIdentifier */

/* eslint-enable */
