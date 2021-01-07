/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_ParamOptions */
export enum _enum_for_ParamOptions {
    required = 0,
    preferredPresent = 1,
    preferredAbsent = 2,
    absent = 3,
    inheritable = 4,
    optional = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ParamOptions */

/* START_OF_SYMBOL_DEFINITION ParamOptions */
/**
 * @summary ParamOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ParamOptions  ::=  ENUMERATED {
 * required,         -- Parameters MUST be encoded in structure
 * preferredPresent, -- Parameters SHOULD be encoded in structure
 * preferredAbsent,  -- Parameters SHOULD NOT be encoded in structure
 * absent,           -- Parameters MUST NOT be encoded in structure
 * inheritable,      -- Parameters are inherited if not present
 * optional,         -- Parameters MAY be encoded in the structure
 * ...
 * }
 * ```@enum {number}
 */
export type ParamOptions = _enum_for_ParamOptions | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ParamOptions */

/* START_OF_SYMBOL_DEFINITION ParamOptions_required */
/**
 * @summary ParamOptions_required
 * @constant
 * @type {number}
 */
export const ParamOptions_required: ParamOptions = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_required */

/* START_OF_SYMBOL_DEFINITION required */
/**
 * @summary required
 * @constant
 * @type {number}
 */
export const required: ParamOptions = ParamOptions_required; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION required */

/* START_OF_SYMBOL_DEFINITION ParamOptions_preferredPresent */
/**
 * @summary ParamOptions_preferredPresent
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredPresent: ParamOptions = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_preferredPresent */

/* START_OF_SYMBOL_DEFINITION preferredPresent */
/**
 * @summary preferredPresent
 * @constant
 * @type {number}
 */
export const preferredPresent: ParamOptions = ParamOptions_preferredPresent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preferredPresent */

/* START_OF_SYMBOL_DEFINITION ParamOptions_preferredAbsent */
/**
 * @summary ParamOptions_preferredAbsent
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredAbsent: ParamOptions = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_preferredAbsent */

/* START_OF_SYMBOL_DEFINITION preferredAbsent */
/**
 * @summary preferredAbsent
 * @constant
 * @type {number}
 */
export const preferredAbsent: ParamOptions = ParamOptions_preferredAbsent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION preferredAbsent */

/* START_OF_SYMBOL_DEFINITION ParamOptions_absent */
/**
 * @summary ParamOptions_absent
 * @constant
 * @type {number}
 */
export const ParamOptions_absent: ParamOptions = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_absent */

/* START_OF_SYMBOL_DEFINITION absent */
/**
 * @summary absent
 * @constant
 * @type {number}
 */
export const absent: ParamOptions = ParamOptions_absent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION absent */

/* START_OF_SYMBOL_DEFINITION ParamOptions_inheritable */
/**
 * @summary ParamOptions_inheritable
 * @constant
 * @type {number}
 */
export const ParamOptions_inheritable: ParamOptions = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_inheritable */

/* START_OF_SYMBOL_DEFINITION inheritable */
/**
 * @summary inheritable
 * @constant
 * @type {number}
 */
export const inheritable: ParamOptions = ParamOptions_inheritable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION inheritable */

/* START_OF_SYMBOL_DEFINITION ParamOptions_optional */
/**
 * @summary ParamOptions_optional
 * @constant
 * @type {number}
 */
export const ParamOptions_optional: ParamOptions = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ParamOptions_optional */

/* START_OF_SYMBOL_DEFINITION optional */
/**
 * @summary optional
 * @constant
 * @type {number}
 */
export const optional: ParamOptions = ParamOptions_optional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION optional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ParamOptions */
let _cached_decoder_for_ParamOptions: $.ASN1Decoder<ParamOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ParamOptions */

/* START_OF_SYMBOL_DEFINITION _decode_ParamOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) ParamOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ParamOptions} The decoded data structure.
 */
export function _decode_ParamOptions(el: _Element) {
    if (!_cached_decoder_for_ParamOptions) {
        _cached_decoder_for_ParamOptions = $._decodeEnumerated;
    }
    return _cached_decoder_for_ParamOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ParamOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ParamOptions */
let _cached_encoder_for_ParamOptions: $.ASN1Encoder<ParamOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ParamOptions */

/* START_OF_SYMBOL_DEFINITION _encode_ParamOptions */
/**
 * @summary Encodes a(n) ParamOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamOptions, encoded as an ASN.1 Element.
 */
export function _encode_ParamOptions(
    value: ParamOptions,
    elGetter: $.ASN1Encoder<ParamOptions>
) {
    if (!_cached_encoder_for_ParamOptions) {
        _cached_encoder_for_ParamOptions = $._encodeEnumerated;
    }
    return _cached_encoder_for_ParamOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ParamOptions */

/* eslint-enable */
