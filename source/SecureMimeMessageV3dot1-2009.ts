/*
    BEGIN_MODULE SecureMimeMessageV3dot1-2009
    OID: iso.member-body.us.rsadsi.pkcs.pkcs-9.smime.modules.id-mod-msg-v3dot1-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    _decode_SMIMECapabilities,
    _encode_SMIMECapabilities,
} from "./AlgorithmInformation-2009";

import {
    SubjectKeyIdentifier,
    IssuerAndSerialNumber,
    RecipientKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
    _decode_RecipientKeyIdentifier,
    _encode_RecipientKeyIdentifier,
} from "./CryptographicMessageSyntax-2010";

// TODO: ObjectSetAssignment: SMimeAttributeSet

export const id_aa: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* attributes */ 2,
]);

// TODO: ObjectAssignment: aa-smimeCapabilities

export const smimeCapabilities: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        15,
    ]
);

// TODO: ObjectSetAssignment: SMimeCapsSet

// TODO: ObjectAssignment: aa-encrypKeyPref

export const id_aa_encrypKeyPref: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_aa
);

export type SMIMEEncryptionKeyPreference =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { receipentKeyId: RecipientKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { subjectAltKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_SMIMEEncryptionKeyPreference: __utils.ASN1Decoder<
    SMIMEEncryptionKeyPreference
> | null = null;
let _cached_encoder_for_SMIMEEncryptionKeyPreference: __utils.ASN1Encoder<
    SMIMEEncryptionKeyPreference
> | null = null;
export function _decode_SMIMEEncryptionKeyPreference(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SMIMEEncryptionKeyPreference) {
        _cached_decoder_for_SMIMEEncryptionKeyPreference = __utils._decode_inextensible_choice<
            SMIMEEncryptionKeyPreference
        >({
            "CONTEXT 0": [
                "issuerAndSerialNumber",
                __utils._decode_implicit<IssuerAndSerialNumber>(
                    () => _decode_IssuerAndSerialNumber
                ),
            ],
            "CONTEXT 1": [
                "receipentKeyId",
                __utils._decode_implicit<RecipientKeyIdentifier>(
                    () => _decode_RecipientKeyIdentifier
                ),
            ],
            "CONTEXT 2": [
                "subjectAltKeyIdentifier",
                __utils._decode_implicit<SubjectKeyIdentifier>(
                    () => _decode_SubjectKeyIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_SMIMEEncryptionKeyPreference(el);
}
export function _encode_SMIMEEncryptionKeyPreference(
    value: SMIMEEncryptionKeyPreference,
    elGetter: __utils.ASN1Encoder<SMIMEEncryptionKeyPreference>
) {
    if (!_cached_encoder_for_SMIMEEncryptionKeyPreference) {
        _cached_encoder_for_SMIMEEncryptionKeyPreference = __utils._encode_choice<
            SMIMEEncryptionKeyPreference
        >(
            {
                issuerAndSerialNumber: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_IssuerAndSerialNumber,
                    __utils.BER
                ),
                receipentKeyId: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_RecipientKeyIdentifier,
                    __utils.BER
                ),
                subjectAltKeyIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_SubjectKeyIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SMIMEEncryptionKeyPreference(value, elGetter);
}

export const id_smime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    16,
]);

export const id_cap: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_smime
);

// TODO: ObjectAssignment: cap-preferBinaryInside

export const id_cap_preferBinaryInside: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_cap
);

// TODO: ObjectAssignment: cap-RC2CBC

export type SMIMECapabilitiesParametersForRC2CBC = asn1.INTEGER;
let _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC: __utils.ASN1Decoder<
    SMIMECapabilitiesParametersForRC2CBC
> | null = null;
let _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC: __utils.ASN1Encoder<
    SMIMECapabilitiesParametersForRC2CBC
> | null = null;
export function _decode_SMIMECapabilitiesParametersForRC2CBC(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC =
            __utils._decodeInteger;
    }
    return _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC(el);
}
export function _encode_SMIMECapabilitiesParametersForRC2CBC(
    value: SMIMECapabilitiesParametersForRC2CBC,
    elGetter: __utils.ASN1Encoder<SMIMECapabilitiesParametersForRC2CBC>
) {
    if (!_cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC =
            __utils._encodeInteger;
    }
    return _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC(
        value,
        elGetter
    );
}

/* END_MODULE SecureMimeMessageV3dot1-2009 */
