/* eslint-disable */
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca";
export { id_sha224 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha224.va";
export { id_sha256 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha256.va";
export { id_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha384.va";
export { id_sha512 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-sha512.va";
export { id_sha1 } from "../PKIXAlgs-2009/id-sha1.va";
import { HashAlgorithms_Union0_Intersection0_Element } from "./HashAlgorithms-Union0-Intersection0-Element.oa";
import { HashAlgorithms_Union1_Intersection0_Element } from "./HashAlgorithms-Union1-Intersection0-Element.oa";
import { HashAlgorithms_Union2_Intersection0_Element } from "./HashAlgorithms-Union2-Intersection0-Element.oa";
import { HashAlgorithms_Union3_Intersection0_Element } from "./HashAlgorithms-Union3-Intersection0-Element.oa";
import { HashAlgorithms_Union4_Intersection0_Element } from "./HashAlgorithms-Union4-Intersection0-Element.oa";

/* START_OF_SYMBOL_DEFINITION HashAlgorithms */
/**
 * @summary HashAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgorithms DIGEST-ALGORITHM ::= {
 * { IDENTIFIER id-sha1 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha224 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha256 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha384 PARAMS TYPE NULL ARE preferredPresent } |
 * { IDENTIFIER id-sha512 PARAMS TYPE NULL ARE preferredPresent }
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const HashAlgorithms: DIGEST_ALGORITHM[] = [
    HashAlgorithms_Union0_Intersection0_Element,
    HashAlgorithms_Union1_Intersection0_Element,
    HashAlgorithms_Union2_Intersection0_Element,
    HashAlgorithms_Union3_Intersection0_Element,
    HashAlgorithms_Union4_Intersection0_Element,
];
/* END_OF_SYMBOL_DEFINITION HashAlgorithms */

/* eslint-enable */
