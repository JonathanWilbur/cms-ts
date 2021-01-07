/* eslint-disable */
import { id_XPathTokensSet } from "../CMSObjectIdentifiers/id-XPathTokensSet.va";
import { TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca";
import {
    XPathTokensSet,
    _decode_XPathTokensSet,
    _encode_XPathTokensSet,
} from "../TokenizationManifest/XPathTokensSet.ta";
export { id_XPathTokensSet } from "../CMSObjectIdentifiers/id-XPathTokensSet.va";
export { TOKENIZED } from "../TokenizationManifest/TOKENIZED.oca";
export {
    XPathTokensSet,
    _decode_XPathTokensSet,
    _encode_XPathTokensSet,
} from "../TokenizationManifest/XPathTokensSet.ta";

/* START_OF_SYMBOL_DEFINITION xPathTokensManifest */
/**
 * @summary xPathTokensManifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPathTokensManifest TOKENIZED ::= {
 * OID id-XPathTokensSet PARMS XPathTokensSet
 * }
 * ```
 *
 * @constant
 * @type {TOKENIZED<XPathTokensSet>}
 * @implements {TOKENIZED<XPathTokensSet>}
 */
export const xPathTokensManifest: TOKENIZED<XPathTokensSet> = {
    class: "TOKENIZED",
    decoderFor: {
        "&Type": _decode_XPathTokensSet,
    },
    encoderFor: {
        "&Type": _encode_XPathTokensSet,
    },
    "&id": id_XPathTokensSet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION xPathTokensManifest */

/* eslint-enable */
