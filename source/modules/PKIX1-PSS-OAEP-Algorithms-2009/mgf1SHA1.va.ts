/* eslint-disable */
import { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va";
import { MaskGenAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta";
import { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
export { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va";
export {
    MaskGenAlgorithm,
    _decode_MaskGenAlgorithm,
    _encode_MaskGenAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta";
export { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va";
import {
    AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    DERElement,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION mgf1SHA1 */
/**
 * @summary mgf1SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mgf1SHA1 MaskGenAlgorithm ::= {
 * algorithm id-mgf1,
 * parameters HashAlgorithm : sha1Identifier
 * }
 * ```
 *
 * @constant
 */
export const mgf1SHA1: MaskGenAlgorithm = new AlgorithmIdentifier(
    id_mgf1,
    _encode_AlgorithmIdentifier(sha1Identifier, () => new DERElement()),
);

/* END_OF_SYMBOL_DEFINITION mgf1SHA1 */

/* eslint-enable */
