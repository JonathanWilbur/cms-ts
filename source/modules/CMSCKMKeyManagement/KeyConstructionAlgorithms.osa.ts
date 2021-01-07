/* eslint-disable */
import { ALGORITHM } from "x500-ts/dist/node/modules/AuthenticationFramework/ALGORITHM.oca";
import { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa";
import { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa";
import { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa";
import { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca";
export { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa";
export { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa";
export { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa";
export { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa";

/* START_OF_SYMBOL_DEFINITION KeyConstructionAlgorithms */
/**
 * @summary KeyConstructionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionAlgorithms ALGORITHM ::= {
 * symmetricConstruction             |
 * keyTransportConstruction             |
 * keyAgreeMultipleEncryptionConstruction |
 * keyAgreeHashConstruction,
 * ... -- Expect additional objects --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const KeyConstructionAlgorithms: ALGORITHM[] = [
    symmetricConstruction,
    keyTransportConstruction,
    keyAgreeMultipleEncryptionConstruction,
    keyAgreeHashConstruction,
];
/* END_OF_SYMBOL_DEFINITION KeyConstructionAlgorithms */

/* eslint-enable */
