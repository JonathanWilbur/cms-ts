/*
    BEGIN_MODULE CMSObjectIdentifiers
    OID: iso.identified-organization.tc68.country.x9.x9Standards.x9-73.module.oids.v2009
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import { iso } from "./__utils";

export type OID = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_OID: __utils.ASN1Decoder<OID> | null = null;
let _cached_encoder_for_OID: __utils.ASN1Encoder<OID> | null = null;
export function _decode_OID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OID) {
        _cached_decoder_for_OID = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_OID(el);
}
export function _encode_OID(value: OID, elGetter: __utils.ASN1Encoder<OID>) {
    if (!_cached_encoder_for_OID) {
        _cached_encoder_for_OID = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_OID(value, elGetter);
}

export const pkcs7: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
]);

export const id_data: OID = new asn1.ObjectIdentifier([/* data */ 1], pkcs7);

export const id_signedData: OID = new asn1.ObjectIdentifier(
    [/* signedData */ 2],
    pkcs7
);

export const id_envelopedData: OID = new asn1.ObjectIdentifier(
    [/* envelopedData */ 3],
    pkcs7
);

export const id_digestedData: OID = new asn1.ObjectIdentifier(
    [/* digestedData */ 5],
    pkcs7
);

export const id_encryptedData: OID = new asn1.ObjectIdentifier(
    [/* encryptedData */ 6],
    pkcs7
);

export const id_namedkeyencryptedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x973 */ 10060,
    /* types */ 1,
    /* namedKeyEncryptedData */ 2,
]);

export const id_signcryptedData: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x973 */ 10060,
    /* types */ 1,
    /* signcryptedData */ 3,
]);

export const signcryption_manifest: OID = new asn1.ObjectIdentifier(
    [/* manifest */ 1],
    id_signcryptedData
);

export const xPath: OID = new asn1.ObjectIdentifier(
    [/* xPath */ 0],
    signcryption_manifest
);

export const pkcs9: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
]);

export const smime: OID = new asn1.ObjectIdentifier([/* smime */ 16], pkcs9);

export const id_ct_authData: OID = new asn1.ObjectIdentifier(
    [/* ct */ 1, 2],
    smime
);

export const id_contentType: OID = new asn1.ObjectIdentifier(
    [/* contentType */ 3],
    pkcs9
);

export const id_messageDigest: OID = new asn1.ObjectIdentifier(
    [/* messageDigest */ 4],
    pkcs9
);

export const id_ckm_recip_info: OID = new asn1.ObjectIdentifier(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 1],
    iso
);

export const id_ckm_recip_info2: OID = new asn1.ObjectIdentifier(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 2],
    iso
);

export const id_ckm_algorithms: OID = new asn1.ObjectIdentifier(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* algorithms */ 3],
    iso
);

export const id_ckm_symmetric: OID = new asn1.ObjectIdentifier(
    [/* symmetric */ 1],
    id_ckm_algorithms
);

export const id_ckm_key_transport: OID = new asn1.ObjectIdentifier(
    [/* key-transport */ 2],
    id_ckm_algorithms
);

export const id_ckm_key_agree_multiple_encrypt: OID = new asn1.ObjectIdentifier(
    [/* key-agree-multiple-encrypt */ 3],
    id_ckm_algorithms
);

export const id_ckm_key_agree_hash: OID = new asn1.ObjectIdentifier(
    [/* key-agree-hash */ 4],
    id_ckm_algorithms
);

export const id_ckm_header: OID = new asn1.ObjectIdentifier(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* header */ 4],
    iso
);

export const ckm_CMS: OID = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* international-organizations */ 23,
    /* set */ 42,
    /* vendors */ 9,
    /* griffin */ 10,
    /* business */ 3,
    /* tecsec */ 0,
    /* cms */ 2,
    /* header */ 2,
]);

export const id_Ivec: OID = new asn1.ObjectIdentifier([1], ckm_CMS);

export const id_Secryptm: OID = new asn1.ObjectIdentifier([2], ckm_CMS);

export const id_Filelength: OID = new asn1.ObjectIdentifier([3], ckm_CMS);

export const id_Filehash: OID = new asn1.ObjectIdentifier([4], ckm_CMS);

export const id_Filename: OID = new asn1.ObjectIdentifier([5], ckm_CMS);

export const id_Domainlist: OID = new asn1.ObjectIdentifier([6], ckm_CMS);

export const id_Accessgrouplist: OID = new asn1.ObjectIdentifier([7], ckm_CMS);

export const id_Issuer: OID = new asn1.ObjectIdentifier([8], ckm_CMS);

export const id_Credentiallist: OID = new asn1.ObjectIdentifier([9], ckm_CMS);

export const id_SignKey: OID = new asn1.ObjectIdentifier([10], ckm_CMS);

export const id_KeyUsage: OID = new asn1.ObjectIdentifier([11], ckm_CMS);

export const id_BitSpray: OID = new asn1.ObjectIdentifier([12], ckm_CMS);

export const id_BitSprayMeta: OID = new asn1.ObjectIdentifier([12, 1], ckm_CMS);

export const id_BitSprayShares: OID = new asn1.ObjectIdentifier(
    [12, 2],
    ckm_CMS
);

export const id_FavoriteName: OID = new asn1.ObjectIdentifier([13], ckm_CMS);

export const id_DataSignature: OID = new asn1.ObjectIdentifier([14], ckm_CMS);

export const id_BlockSize: OID = new asn1.ObjectIdentifier([15], ckm_CMS);

export const id_DataFormat: OID = new asn1.ObjectIdentifier([16], ckm_CMS);

export const id_tokenization_manifest: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* tokenization */ 3,
]);

export const id_tokenizedParts: OID = new asn1.ObjectIdentifier(
    [/* tokenizedParts */ 0],
    id_tokenization_manifest
);

export const id_XPathTokensSet: OID = new asn1.ObjectIdentifier(
    [/* xPathTokensSet */ 1],
    id_tokenization_manifest
);

export const signcryption: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* signcryption */ 4,
]);

export const signcryption_mode: OID = new asn1.ObjectIdentifier(
    [/* modes */ 1],
    signcryption
);

export const signcrypted_content: OID = new asn1.ObjectIdentifier(
    [/* content */ 1],
    signcryption_mode
);

export const signcrypted_attributes: OID = new asn1.ObjectIdentifier(
    [/* attributes */ 2],
    signcryption_mode
);

export const signcrypted_components: OID = new asn1.ObjectIdentifier(
    [/* components */ 3],
    signcryption_mode
);

export const signcrypted_envelope: OID = new asn1.ObjectIdentifier(
    [/* enveloped */ 4],
    signcryption_mode
);

export const id_signcryptedParts: OID = new asn1.ObjectIdentifier(
    [/* signcryptedParts */ 1],
    signcryption_manifest
);

export const id_XPathSigncryptionSet: OID = new asn1.ObjectIdentifier(
    [/* xPathSigncryptionSet */ 2],
    signcryption_manifest
);

export const id_cms_attributes: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* attributes */ 1,
]);

export const xmlMarkup: OID = new asn1.ObjectIdentifier(
    [/* xml */ 0],
    id_cms_attributes
);

export const id_cms_SAML: OID = new asn1.ObjectIdentifier(
    [/* saml */ 1],
    xmlMarkup
);

export const id_cms_XKMS: OID = new asn1.ObjectIdentifier(
    [/* xkms */ 2],
    xmlMarkup
);

export const id_messageComponents: OID = new asn1.ObjectIdentifier(
    [/* mc */ 3],
    xmlMarkup
);

export const id_cms_namespaces: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* namespaces */ 2,
]);

export const cms: OID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* namespaces */ 2,
    /* cms */ 0,
]);

export const id_alg_PWRI_KEK: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs-9 */ 9,
        /* smime */ 16,
        /* alg */ 3,
        9,
    ]
);

export const dbEKM: OID = new asn1.ObjectIdentifier([
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

export const id_SimpleString: OID = new asn1.ObjectIdentifier(
    [/* ss */ 1],
    dbEKM
);

export const id_UniqueIdentifier: OID = new asn1.ObjectIdentifier(
    [/* uid */ 2],
    dbEKM
);

export const id_dbekm_recip_info: OID = new asn1.ObjectIdentifier(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 3],
    iso
);

/* END_MODULE CMSObjectIdentifiers */
