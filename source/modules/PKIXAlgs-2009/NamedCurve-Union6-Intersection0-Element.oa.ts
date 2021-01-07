/* eslint-disable */
import { CURVE } from "../PKIXAlgs-2009/CURVE.oca";
import { secp256r1 } from "../PKIXAlgs-2009/secp256r1.va";
export { CURVE } from "../PKIXAlgs-2009/CURVE.oca";
export { secp256r1 } from "../PKIXAlgs-2009/secp256r1.va";

/* START_OF_SYMBOL_DEFINITION NamedCurve_Union6_Intersection0_Element */
/**
 * @summary NamedCurve_Union6_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedCurve-Union6-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {CURVE}
 * @implements {CURVE}
 */
export const NamedCurve_Union6_Intersection0_Element: CURVE = {
    class: "CURVE",
    decoderFor: {},
    encoderFor: {},
    "&id": secp256r1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION NamedCurve_Union6_Intersection0_Element */

/* eslint-enable */
