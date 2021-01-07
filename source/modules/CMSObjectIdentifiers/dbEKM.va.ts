/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta";

/* START_OF_SYMBOL_DEFINITION dbEKM */
/**
 * @summary dbEKM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dbEKM OID ::= {joint-iso-itu-t(2) country(16) us(840) organization(1) wfbna(114171)
 * lobs(4) eisArchitecture(1) techniques(2) dbEKM(0)}
 * ```
 *
 * @constant
 */
export const dbEKM: OID = new _OID([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* wfbna */ 114171,
    /* lobs */ 4,
    /* eisArchitecture */ 1,
    /* techniques */ 2,
    /* dbEKM */ 0,
]);
/* END_OF_SYMBOL_DEFINITION dbEKM */

/* eslint-enable */
