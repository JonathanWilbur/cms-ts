/* eslint-disable */
import { EncodingParameters } from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta";
export {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/EncodingParameters.ta";

/* START_OF_SYMBOL_DEFINITION nullOctetString */
/**
 * @summary nullOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullOctetString  EncodingParameters ::= ''H
 * ```
 *
 * @constant
 */
export const nullOctetString: EncodingParameters = new Uint8Array(0);
/* END_OF_SYMBOL_DEFINITION nullOctetString */

/* eslint-enable */
