/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
import { cap_preferBinaryInside } from "../SecureMimeMessageV3dot1-2009/cap-preferBinaryInside.oa";
import { cap_RC2CBC } from "../SecureMimeMessageV3dot1-2009/cap-RC2CBC.oa";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { cap_preferBinaryInside } from "../SecureMimeMessageV3dot1-2009/cap-preferBinaryInside.oa";
export { cap_RC2CBC } from "../SecureMimeMessageV3dot1-2009/cap-RC2CBC.oa";
import { SMimeCaps as PKIXAlgs_SMimeCaps } from "../PKIXAlgs-2009/SMimeCaps.osa";
import { SMimeCaps as CryptographicMessageSyntaxAlgorithms_SMimeCaps } from "../CryptographicMessageSyntaxAlgorithms-2009/SMimeCaps.osa";
import { SMimeCaps as PKIX1_PSS_OAEP_Algorithms_SMimeCaps } from "../PKIX1-PSS-OAEP-Algorithms-2009/SMimeCaps.osa";

/* START_OF_SYMBOL_DEFINITION SMimeCapsSet */
/**
 * @summary SMimeCapsSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeCapsSet SMIME-CAPS ::= { cap-preferBinaryInside | cap-RC2CBC |
 * PKIXAlgs-2009.SMimeCaps |
 * CryptographicMessageSyntaxAlgorithms-2009.SMimeCaps |
 * PKIX1-PSS-OAEP-Algorithms-2009.SMimeCaps,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS[]}
 *
 */
export const SMimeCapsSet: SMIME_CAPS[] = [
    cap_preferBinaryInside,
    cap_RC2CBC,
    ...PKIXAlgs_SMimeCaps,
    ...CryptographicMessageSyntaxAlgorithms_SMimeCaps,
    ...PKIX1_PSS_OAEP_Algorithms_SMimeCaps,
];
/* END_OF_SYMBOL_DEFINITION SMimeCapsSet */

/* eslint-enable */
