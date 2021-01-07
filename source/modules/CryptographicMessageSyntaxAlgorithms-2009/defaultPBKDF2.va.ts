/* eslint-disable */
import { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa";
import { PBKDF2_PRFsAlgorithmIdentifier } from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-PRFsAlgorithmIdentifier.ta";
export { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa";
export {
    PBKDF2_PRFsAlgorithmIdentifier,
    _decode_PBKDF2_PRFsAlgorithmIdentifier,
    _encode_PBKDF2_PRFsAlgorithmIdentifier,
} from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-PRFsAlgorithmIdentifier.ta";
import {
    AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    DERElement,
} from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION defaultPBKDF2 */
/**
 * @summary defaultPBKDF2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultPBKDF2 PBKDF2-PRFsAlgorithmIdentifier ::= { algorithm alg-hMAC-SHA1.&id, parameters NULL:NULL }
 * ```
 *
 * @constant
 */
export const defaultPBKDF2: PBKDF2_PRFsAlgorithmIdentifier = new AlgorithmIdentifier(
    alg_hMAC_SHA1["&id"],
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
        null,
    ),
);

/* END_OF_SYMBOL_DEFINITION defaultPBKDF2 */

/* eslint-enable */
