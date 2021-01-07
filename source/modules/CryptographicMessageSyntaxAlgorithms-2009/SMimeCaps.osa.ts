/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
import { cea_3DES_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-3DES-cbc.oa";
import { cea_RC2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-RC2-cbc.oa";
import { kaa_esdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-esdh.oa";
import { kaa_ssdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-ssdh.oa";
import { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa";
import { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa";
import { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa";
import { maca_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/maca-hMAC-SHA1.oa";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { cea_3DES_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-3DES-cbc.oa";
export { cea_RC2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-RC2-cbc.oa";
export { kaa_esdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-esdh.oa";
export { kaa_ssdh } from "../CryptographicMessageSyntaxAlgorithms-2009/kaa-ssdh.oa";
export { kt_rsa } from "../CryptographicMessageSyntaxAlgorithms-2009/kt-rsa.oa";
export { kwa_3DESWrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-3DESWrap.oa";
export { kwa_RC2Wrap } from "../CryptographicMessageSyntaxAlgorithms-2009/kwa-RC2Wrap.oa";
export { maca_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/maca-hMAC-SHA1.oa";

/* START_OF_SYMBOL_DEFINITION SMimeCaps */
/**
 * @summary SMimeCaps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeCaps SMIME-CAPS ::= {
 * kaa-esdh.&smimeCaps    |
 * kaa-ssdh.&smimeCaps    |
 * kt-rsa.&smimeCaps        |
 * kwa-3DESWrap.&smimeCaps    |
 * kwa-RC2Wrap.&smimeCaps    |
 * cea-3DES-cbc.&smimeCaps    |
 * cea-RC2-cbc.&smimeCaps    |
 * maca-hMAC-SHA1.&smimeCaps,
 * ...}
 * ```
 *
 * @constant
 * @type {SMIME_CAPS[]}
 *
 */
export const SMimeCaps: SMIME_CAPS[] = [
    kaa_esdh["&smimeCaps"],
    kaa_ssdh["&smimeCaps"],
    kt_rsa["&smimeCaps"],
    kwa_3DESWrap["&smimeCaps"],
    kwa_RC2Wrap["&smimeCaps"],
    cea_3DES_cbc["&smimeCaps"],
    cea_RC2_cbc["&smimeCaps"],
    maca_hMAC_SHA1["&smimeCaps"],
];
/* END_OF_SYMBOL_DEFINITION SMimeCaps */

/* eslint-enable */
