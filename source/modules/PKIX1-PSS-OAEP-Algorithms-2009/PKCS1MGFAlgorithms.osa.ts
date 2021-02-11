/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta";
import { id_mgf1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/id-mgf1.va";

const PKCS1MGFAlgorithms_0: ALGORITHM<HashAlgorithm> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_HashAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_HashAlgorithm,
    },
    "&id": id_mgf1,
    "&Type": 0 as never,
};

/* START_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */
/**
 * @summary PKCS1MGFAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS1MGFAlgorithms ALGORITHM ::= {
 * { IDENTIFIER id-mgf1 PARAMS TYPE HashAlgorithm ARE required },
 * ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PKCS1MGFAlgorithms: ALGORITHM[] = [
    PKCS1MGFAlgorithms_0,
];
/* END_OF_SYMBOL_DEFINITION PKCS1MGFAlgorithms */

/* eslint-enable */
