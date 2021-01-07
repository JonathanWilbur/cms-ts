/* eslint-disable */
import { xPath } from "../CMSObjectIdentifiers/xPath.va";
import { SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca";
import {
    XPathSet,
    _decode_XPathSet,
    _encode_XPathSet,
} from "../CMSSigncryption/XPathSet.ta";
export { xPath } from "../CMSObjectIdentifiers/xPath.va";
export { SIGNCRYPTED } from "../CMSSigncryption/SIGNCRYPTED.oca";
export {
    XPathSet,
    _decode_XPathSet,
    _encode_XPathSet,
} from "../CMSSigncryption/XPathSet.ta";

/* START_OF_SYMBOL_DEFINITION xPathManifest */
/**
 * @summary xPathManifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPathManifest SIGNCRYPTED ::= {
 * OID xPath PARMS XPathSet
 * }
 * ```
 *
 * @constant
 * @type {SIGNCRYPTED<XPathSet>}
 * @implements {SIGNCRYPTED<XPathSet>}
 */
export const xPathManifest: SIGNCRYPTED<XPathSet> = {
    class: "SIGNCRYPTED",
    decoderFor: {
        "&Type": _decode_XPathSet,
    },
    encoderFor: {
        "&Type": _encode_XPathSet,
    },
    "&id": xPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION xPathManifest */

/* eslint-enable */
