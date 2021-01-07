/* eslint-disable */
import {
    Countersignature,
    _decode_Countersignature,
    _encode_Countersignature,
} from "../CryptographicMessageSyntax-2010/Countersignature.ta";
import { id_countersignature } from "../CryptographicMessageSyntax-2010/id-countersignature.va";
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
export {
    Countersignature,
    _decode_Countersignature,
    _encode_Countersignature,
} from "../CryptographicMessageSyntax-2010/Countersignature.ta";
export { id_countersignature } from "../CryptographicMessageSyntax-2010/id-countersignature.va";

/* START_OF_SYMBOL_DEFINITION aa_countersignature */
/**
 * @summary aa_countersignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-countersignature ATTRIBUTE ::= { TYPE Countersignature IDENTIFIED BY id-countersignature }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Countersignature>}
 * @implements {ATTRIBUTE<Countersignature>}
 */
export const aa_countersignature: ATTRIBUTE<Countersignature> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Countersignature,
    },
    encoderFor: {
        "&Type": _encode_Countersignature,
    },
    "&id": id_countersignature /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_countersignature */

/* eslint-enable */
