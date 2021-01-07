/* eslint-disable */
import { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
import { sa_dsaWithSHA1 } from "../PKIXAlgs-2009/sa-dsaWithSHA1.oa";
import { sa_dsaWithSHA224 } from "../PKIXAlgs-2009/sa-dsaWithSHA224.oa";
import { sa_dsaWithSHA256 } from "../PKIXAlgs-2009/sa-dsaWithSHA256.oa";
import { sa_ecdsaWithSHA1 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA1.oa";
import { sa_ecdsaWithSHA224 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA224.oa";
import { sa_ecdsaWithSHA256 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA256.oa";
import { sa_ecdsaWithSHA384 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA384.oa";
import { sa_ecdsaWithSHA512 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA512.oa";
import { sa_rsaWithMD2 } from "../PKIXAlgs-2009/sa-rsaWithMD2.oa";
import { sa_rsaWithMD5 } from "../PKIXAlgs-2009/sa-rsaWithMD5.oa";
import { sa_rsaWithSHA1 } from "../PKIXAlgs-2009/sa-rsaWithSHA1.oa";
export { SIGNATURE_ALGORITHM } from "../AlgorithmInformation-2009/SIGNATURE-ALGORITHM.oca";
export { sa_dsaWithSHA1 } from "../PKIXAlgs-2009/sa-dsaWithSHA1.oa";
export { sa_dsaWithSHA224 } from "../PKIXAlgs-2009/sa-dsaWithSHA224.oa";
export { sa_dsaWithSHA256 } from "../PKIXAlgs-2009/sa-dsaWithSHA256.oa";
export { sa_ecdsaWithSHA1 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA1.oa";
export { sa_ecdsaWithSHA224 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA224.oa";
export { sa_ecdsaWithSHA256 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA256.oa";
export { sa_ecdsaWithSHA384 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA384.oa";
export { sa_ecdsaWithSHA512 } from "../PKIXAlgs-2009/sa-ecdsaWithSHA512.oa";
export { sa_rsaWithMD2 } from "../PKIXAlgs-2009/sa-rsaWithMD2.oa";
export { sa_rsaWithMD5 } from "../PKIXAlgs-2009/sa-rsaWithMD5.oa";
export { sa_rsaWithSHA1 } from "../PKIXAlgs-2009/sa-rsaWithSHA1.oa";

/* START_OF_SYMBOL_DEFINITION SignatureAlgs */
/**
 * @summary SignatureAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureAlgs SIGNATURE-ALGORITHM ::= {
 * sa-rsaWithMD2    |
 * sa-rsaWithMD5    |
 * sa-rsaWithSHA1    |
 * sa-dsaWithSHA1    |
 * sa-ecdsaWithSHA1,
 * ..., -- Extensible
 * sa-dsaWithSHA224    |
 * sa-dsaWithSHA256    |
 * sa-ecdsaWithSHA224    |
 * sa-ecdsaWithSHA256    |
 * sa-ecdsaWithSHA384    |
 * sa-ecdsaWithSHA512
 * }
 * ```
 *
 * @constant
 * @type {SIGNATURE_ALGORITHM[]}
 *
 */
export const SignatureAlgs: SIGNATURE_ALGORITHM[] = [
    sa_rsaWithMD2,
    sa_rsaWithMD5,
    sa_rsaWithSHA1,
    sa_dsaWithSHA1,
    sa_ecdsaWithSHA1,
    /* OBJECT_SET_EXTENSION_MARKER */ sa_dsaWithSHA224,
    sa_dsaWithSHA256,
    sa_ecdsaWithSHA224,
    sa_ecdsaWithSHA256,
    sa_ecdsaWithSHA384,
    sa_ecdsaWithSHA512,
];
/* END_OF_SYMBOL_DEFINITION SignatureAlgs */

/* eslint-enable */
