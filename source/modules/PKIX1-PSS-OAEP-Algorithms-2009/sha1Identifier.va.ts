/* eslint-disable */
import { HashAlgorithm } from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
import { id_sha1 } from "../PKIXAlgs-2009/id-sha1.va";
export {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
export { id_sha1 } from "../PKIXAlgs-2009/id-sha1.va";
import {
    AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION sha1Identifier */
/**
 * @summary sha1Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1Identifier HashAlgorithm ::= {
 * algorithm id-sha1,
 * parameters NULL : NULL
 * }
 * ```
 *
 * @constant
 */
export const sha1Identifier: HashAlgorithm = new AlgorithmIdentifier(
    id_sha1,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
        null,
    ),
);

/* END_OF_SYMBOL_DEFINITION sha1Identifier */

/* eslint-enable */
