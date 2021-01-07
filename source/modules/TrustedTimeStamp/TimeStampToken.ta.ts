/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../CryptographicMessageSyntax-2010/ContentInfo.ta";

/* START_OF_SYMBOL_DEFINITION TimeStampToken */
/**
 * @summary TimeStampToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampToken  ::=  ContentInfo
 * ```
 */
export type TimeStampToken = ContentInfo; // DefinedType
/* END_OF_SYMBOL_DEFINITION TimeStampToken */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampToken */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampToken} The decoded data structure.
 */
export const _decode_TimeStampToken = _decode_ContentInfo;
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampToken */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampToken */
/**
 * @summary Encodes a(n) TimeStampToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampToken, encoded as an ASN.1 Element.
 */
export const _encode_TimeStampToken = _encode_ContentInfo;

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampToken */

/* eslint-enable */
