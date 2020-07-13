/*
    BEGIN_MODULE PKIX-X400Address-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-x400address-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

export type CountryName =
    | { x121_dcc_code: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CountryName: __utils.ASN1Decoder<
    CountryName
> | null = null;
let _cached_encoder_for_CountryName: __utils.ASN1Encoder<
    CountryName
> | null = null;
export function _decode_CountryName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CountryName) {
        _cached_decoder_for_CountryName = __utils._decode_explicit<CountryName>(
            () =>
                __utils._decode_inextensible_choice<CountryName>({
                    "UNIVERSAL 18": [
                        "x121_dcc_code",
                        __utils._decodeNumericString,
                    ],
                    "UNIVERSAL 19": [
                        "iso_3166_alpha2_code",
                        __utils._decodePrintableString,
                    ],
                })
        );
    }
    return _cached_decoder_for_CountryName(el);
}
export function _encode_CountryName(
    value: CountryName,
    elGetter: __utils.ASN1Encoder<CountryName>
) {
    if (!_cached_encoder_for_CountryName) {
        _cached_encoder_for_CountryName = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            1,
            () =>
                __utils._encode_choice<CountryName>(
                    {
                        x121_dcc_code: __utils._encodeNumericString,
                        iso_3166_alpha2_code: __utils._encodePrintableString,
                    },
                    __utils.BER
                ),
            __utils.BER
        );
    }
    return _cached_encoder_for_CountryName(value, elGetter);
}

export type AdministrationDomainName =
    | { numeric: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { printable: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AdministrationDomainName: __utils.ASN1Decoder<
    AdministrationDomainName
> | null = null;
let _cached_encoder_for_AdministrationDomainName: __utils.ASN1Encoder<
    AdministrationDomainName
> | null = null;
export function _decode_AdministrationDomainName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AdministrationDomainName) {
        _cached_decoder_for_AdministrationDomainName = __utils._decode_explicit<
            AdministrationDomainName
        >(() =>
            __utils._decode_inextensible_choice<AdministrationDomainName>({
                "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
                "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
            })
        );
    }
    return _cached_decoder_for_AdministrationDomainName(el);
}
export function _encode_AdministrationDomainName(
    value: AdministrationDomainName,
    elGetter: __utils.ASN1Encoder<AdministrationDomainName>
) {
    if (!_cached_encoder_for_AdministrationDomainName) {
        _cached_encoder_for_AdministrationDomainName = __utils._encode_explicit(
            asn1.ASN1TagClass.application,
            2,
            () =>
                __utils._encode_choice<AdministrationDomainName>(
                    {
                        numeric: __utils._encodeNumericString,
                        printable: __utils._encodePrintableString,
                    },
                    __utils.BER
                ),
            __utils.BER
        );
    }
    return _cached_encoder_for_AdministrationDomainName(value, elGetter);
}

export type X121Address = asn1.NumericString; // NumericString
let _cached_decoder_for_X121Address: __utils.ASN1Decoder<
    X121Address
> | null = null;
let _cached_encoder_for_X121Address: __utils.ASN1Encoder<
    X121Address
> | null = null;
export function _decode_X121Address(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X121Address) {
        _cached_decoder_for_X121Address = __utils._decodeNumericString;
    }
    return _cached_decoder_for_X121Address(el);
}
export function _encode_X121Address(
    value: X121Address,
    elGetter: __utils.ASN1Encoder<X121Address>
) {
    if (!_cached_encoder_for_X121Address) {
        _cached_encoder_for_X121Address = __utils._encodeNumericString;
    }
    return _cached_encoder_for_X121Address(value, elGetter);
}

export type NetworkAddress = X121Address; // DefinedType
let _cached_decoder_for_NetworkAddress: __utils.ASN1Decoder<
    NetworkAddress
> | null = null;
let _cached_encoder_for_NetworkAddress: __utils.ASN1Encoder<
    NetworkAddress
> | null = null;
export function _decode_NetworkAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NetworkAddress) {
        _cached_decoder_for_NetworkAddress = _decode_X121Address;
    }
    return _cached_decoder_for_NetworkAddress(el);
}
export function _encode_NetworkAddress(
    value: NetworkAddress,
    elGetter: __utils.ASN1Encoder<NetworkAddress>
) {
    if (!_cached_encoder_for_NetworkAddress) {
        _cached_encoder_for_NetworkAddress = _encode_X121Address;
    }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}

export type TerminalIdentifier = asn1.PrintableString; // PrintableString
let _cached_decoder_for_TerminalIdentifier: __utils.ASN1Decoder<
    TerminalIdentifier
> | null = null;
let _cached_encoder_for_TerminalIdentifier: __utils.ASN1Encoder<
    TerminalIdentifier
> | null = null;
export function _decode_TerminalIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TerminalIdentifier) {
        _cached_decoder_for_TerminalIdentifier = __utils._decodePrintableString;
    }
    return _cached_decoder_for_TerminalIdentifier(el);
}
export function _encode_TerminalIdentifier(
    value: TerminalIdentifier,
    elGetter: __utils.ASN1Encoder<TerminalIdentifier>
) {
    if (!_cached_encoder_for_TerminalIdentifier) {
        _cached_encoder_for_TerminalIdentifier = __utils._encodePrintableString;
    }
    return _cached_encoder_for_TerminalIdentifier(value, elGetter);
}

export type PrivateDomainName =
    | { numeric: asn1.NumericString } /* CHOICE_ALT_ROOT */
    | { printable: asn1.PrintableString } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PrivateDomainName: __utils.ASN1Decoder<
    PrivateDomainName
> | null = null;
let _cached_encoder_for_PrivateDomainName: __utils.ASN1Encoder<
    PrivateDomainName
> | null = null;
export function _decode_PrivateDomainName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateDomainName) {
        _cached_decoder_for_PrivateDomainName = __utils._decode_inextensible_choice<
            PrivateDomainName
        >({
            "UNIVERSAL 18": ["numeric", __utils._decodeNumericString],
            "UNIVERSAL 19": ["printable", __utils._decodePrintableString],
        });
    }
    return _cached_decoder_for_PrivateDomainName(el);
}
export function _encode_PrivateDomainName(
    value: PrivateDomainName,
    elGetter: __utils.ASN1Encoder<PrivateDomainName>
) {
    if (!_cached_encoder_for_PrivateDomainName) {
        _cached_encoder_for_PrivateDomainName = __utils._encode_choice<
            PrivateDomainName
        >(
            {
                numeric: __utils._encodeNumericString,
                printable: __utils._encodePrintableString,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PrivateDomainName(value, elGetter);
}

export type OrganizationName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_OrganizationName: __utils.ASN1Decoder<
    OrganizationName
> | null = null;
let _cached_encoder_for_OrganizationName: __utils.ASN1Encoder<
    OrganizationName
> | null = null;
export function _decode_OrganizationName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationName) {
        _cached_decoder_for_OrganizationName = __utils._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationName(el);
}
export function _encode_OrganizationName(
    value: OrganizationName,
    elGetter: __utils.ASN1Encoder<OrganizationName>
) {
    if (!_cached_encoder_for_OrganizationName) {
        _cached_encoder_for_OrganizationName = __utils._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationName(value, elGetter);
}

export type NumericUserIdentifier = asn1.NumericString; // NumericString
let _cached_decoder_for_NumericUserIdentifier: __utils.ASN1Decoder<
    NumericUserIdentifier
> | null = null;
let _cached_encoder_for_NumericUserIdentifier: __utils.ASN1Encoder<
    NumericUserIdentifier
> | null = null;
export function _decode_NumericUserIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NumericUserIdentifier) {
        _cached_decoder_for_NumericUserIdentifier =
            __utils._decodeNumericString;
    }
    return _cached_decoder_for_NumericUserIdentifier(el);
}
export function _encode_NumericUserIdentifier(
    value: NumericUserIdentifier,
    elGetter: __utils.ASN1Encoder<NumericUserIdentifier>
) {
    if (!_cached_encoder_for_NumericUserIdentifier) {
        _cached_encoder_for_NumericUserIdentifier =
            __utils._encodeNumericString;
    }
    return _cached_encoder_for_NumericUserIdentifier(value, elGetter);
}

export class PersonalName {
    constructor(
        readonly surname: asn1.PrintableString,
        readonly given_name: asn1.OPTIONAL<asn1.PrintableString>,
        readonly initials: asn1.OPTIONAL<asn1.PrintableString>,
        readonly generation_qualifier: asn1.OPTIONAL<asn1.PrintableString>
    ) {}
}
export const _root_component_type_list_1_spec_for_PersonalName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "surname",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "given-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "initials",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "generation-qualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PersonalName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PersonalName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PersonalName: __utils.ASN1Decoder<
    PersonalName
> | null = null;
let _cached_encoder_for_PersonalName: __utils.ASN1Encoder<
    PersonalName
> | null = null;
export function _decode_PersonalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PersonalName) {
        _cached_decoder_for_PersonalName = function (
            el: asn1.ASN1Element
        ): PersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: asn1.PrintableString;
            let given_name: asn1.OPTIONAL<asn1.PrintableString>;
            let initials: asn1.OPTIONAL<asn1.PrintableString>;
            let generation_qualifier: asn1.OPTIONAL<asn1.PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                surname: (_el: asn1.ASN1Element): void => {
                    surname = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                "given-name": (_el: asn1.ASN1Element): void => {
                    given_name = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                initials: (_el: asn1.ASN1Element): void => {
                    initials = __utils._decode_explicit<asn1.PrintableString>(
                        () => __utils._decodePrintableString
                    )(_el);
                },
                "generation-qualifier": (_el: asn1.ASN1Element): void => {
                    generation_qualifier = __utils._decode_explicit<
                        asn1.PrintableString
                    >(() => __utils._decodePrintableString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PersonalName,
                _extension_additions_list_spec_for_PersonalName,
                _root_component_type_list_2_spec_for_PersonalName,
                undefined
            );
            return new PersonalName /* SET_CONSTRUCTOR_CALL */(
                surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_PersonalName(el);
}
export function _encode_PersonalName(
    value: PersonalName,
    elGetter: __utils.ASN1Encoder<PersonalName>
) {
    if (!_cached_encoder_for_PersonalName) {
        _cached_encoder_for_PersonalName = function (
            value: PersonalName,
            elGetter: __utils.ASN1Encoder<PersonalName>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodePrintableString,
                            __utils.BER
                        )(value.surname, __utils.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.given_name, __utils.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.initials, __utils.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => __utils._encodePrintableString,
                                  __utils.BER
                              )(value.generation_qualifier, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PersonalName(value, elGetter);
}

export type OrganizationalUnitName = asn1.PrintableString; // PrintableString
let _cached_decoder_for_OrganizationalUnitName: __utils.ASN1Decoder<
    OrganizationalUnitName
> | null = null;
let _cached_encoder_for_OrganizationalUnitName: __utils.ASN1Encoder<
    OrganizationalUnitName
> | null = null;
export function _decode_OrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationalUnitName) {
        _cached_decoder_for_OrganizationalUnitName =
            __utils._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationalUnitName(el);
}
export function _encode_OrganizationalUnitName(
    value: OrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<OrganizationalUnitName>
) {
    if (!_cached_encoder_for_OrganizationalUnitName) {
        _cached_encoder_for_OrganizationalUnitName =
            __utils._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationalUnitName(value, elGetter);
}

export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType
let _cached_decoder_for_OrganizationalUnitNames: __utils.ASN1Decoder<
    OrganizationalUnitNames
> | null = null;
let _cached_encoder_for_OrganizationalUnitNames: __utils.ASN1Encoder<
    OrganizationalUnitNames
> | null = null;
export function _decode_OrganizationalUnitNames(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrganizationalUnitNames) {
        _cached_decoder_for_OrganizationalUnitNames = __utils._decodeSequenceOf<
            OrganizationalUnitName
        >(() => _decode_OrganizationalUnitName);
    }
    return _cached_decoder_for_OrganizationalUnitNames(el);
}
export function _encode_OrganizationalUnitNames(
    value: OrganizationalUnitNames,
    elGetter: __utils.ASN1Encoder<OrganizationalUnitNames>
) {
    if (!_cached_encoder_for_OrganizationalUnitNames) {
        _cached_encoder_for_OrganizationalUnitNames = __utils._encodeSequenceOf<
            OrganizationalUnitName
        >(() => _encode_OrganizationalUnitName, __utils.BER);
    }
    return _cached_encoder_for_OrganizationalUnitNames(value, elGetter);
}

export class BuiltInStandardAttributes {
    constructor(
        readonly country_name: asn1.OPTIONAL<CountryName>,
        readonly administration_domain_name: asn1.OPTIONAL<
            AdministrationDomainName
        >,
        readonly network_address: asn1.OPTIONAL<NetworkAddress>,
        readonly terminal_identifier: asn1.OPTIONAL<TerminalIdentifier>,
        readonly private_domain_name: asn1.OPTIONAL<PrivateDomainName>,
        readonly organization_name: asn1.OPTIONAL<OrganizationName>,
        readonly numeric_user_identifier: asn1.OPTIONAL<NumericUserIdentifier>,
        readonly personal_name: asn1.OPTIONAL<PersonalName>,
        readonly organizational_unit_names: asn1.OPTIONAL<
            OrganizationalUnitNames
        >
    ) {}
}
export const _root_component_type_list_1_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "country-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.application, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "administration-domain-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.application, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "network-address",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "terminal-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "private-domain-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "organization-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "numeric-user-identifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "personal-name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "organizational-unit-names",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BuiltInStandardAttributes: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInStandardAttributes: __utils.ASN1Decoder<
    BuiltInStandardAttributes
> | null = null;
let _cached_encoder_for_BuiltInStandardAttributes: __utils.ASN1Encoder<
    BuiltInStandardAttributes
> | null = null;
export function _decode_BuiltInStandardAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInStandardAttributes) {
        _cached_decoder_for_BuiltInStandardAttributes = function (
            el: asn1.ASN1Element
        ): BuiltInStandardAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let country_name: asn1.OPTIONAL<CountryName>;
            let administration_domain_name: asn1.OPTIONAL<AdministrationDomainName>;
            let network_address: asn1.OPTIONAL<NetworkAddress>;
            let terminal_identifier: asn1.OPTIONAL<TerminalIdentifier>;
            let private_domain_name: asn1.OPTIONAL<PrivateDomainName>;
            let organization_name: asn1.OPTIONAL<OrganizationName>;
            let numeric_user_identifier: asn1.OPTIONAL<NumericUserIdentifier>;
            let personal_name: asn1.OPTIONAL<PersonalName>;
            let organizational_unit_names: asn1.OPTIONAL<OrganizationalUnitNames>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "country-name": (_el: asn1.ASN1Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                "administration-domain-name": (_el: asn1.ASN1Element): void => {
                    administration_domain_name = _decode_AdministrationDomainName(
                        _el
                    );
                },
                "network-address": (_el: asn1.ASN1Element): void => {
                    network_address = __utils._decode_explicit<NetworkAddress>(
                        () => _decode_NetworkAddress
                    )(_el);
                },
                "terminal-identifier": (_el: asn1.ASN1Element): void => {
                    terminal_identifier = __utils._decode_explicit<
                        TerminalIdentifier
                    >(() => _decode_TerminalIdentifier)(_el);
                },
                "private-domain-name": (_el: asn1.ASN1Element): void => {
                    private_domain_name = __utils._decode_explicit<
                        PrivateDomainName
                    >(() => _decode_PrivateDomainName)(_el);
                },
                "organization-name": (_el: asn1.ASN1Element): void => {
                    organization_name = __utils._decode_explicit<
                        OrganizationName
                    >(() => _decode_OrganizationName)(_el);
                },
                "numeric-user-identifier": (_el: asn1.ASN1Element): void => {
                    numeric_user_identifier = __utils._decode_explicit<
                        NumericUserIdentifier
                    >(() => _decode_NumericUserIdentifier)(_el);
                },
                "personal-name": (_el: asn1.ASN1Element): void => {
                    personal_name = __utils._decode_explicit<PersonalName>(
                        () => _decode_PersonalName
                    )(_el);
                },
                "organizational-unit-names": (_el: asn1.ASN1Element): void => {
                    organizational_unit_names = __utils._decode_explicit<
                        OrganizationalUnitNames
                    >(() => _decode_OrganizationalUnitNames)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BuiltInStandardAttributes,
                _extension_additions_list_spec_for_BuiltInStandardAttributes,
                _root_component_type_list_2_spec_for_BuiltInStandardAttributes,
                undefined
            );
            return new BuiltInStandardAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                country_name,
                administration_domain_name,
                network_address,
                terminal_identifier,
                private_domain_name,
                organization_name,
                numeric_user_identifier,
                personal_name,
                organizational_unit_names
            );
        };
    }
    return _cached_decoder_for_BuiltInStandardAttributes(el);
}
export function _encode_BuiltInStandardAttributes(
    value: BuiltInStandardAttributes,
    elGetter: __utils.ASN1Encoder<BuiltInStandardAttributes>
) {
    if (!_cached_encoder_for_BuiltInStandardAttributes) {
        _cached_encoder_for_BuiltInStandardAttributes = function (
            value: BuiltInStandardAttributes,
            elGetter: __utils.ASN1Encoder<BuiltInStandardAttributes>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.country_name === undefined
                            ? undefined
                            : _encode_CountryName(
                                  value.country_name,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.administration_domain_name ===
                        undefined
                            ? undefined
                            : _encode_AdministrationDomainName(
                                  value.administration_domain_name,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.network_address === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_NetworkAddress,
                                  __utils.BER
                              )(value.network_address, __utils.BER),
                        /* IF_ABSENT  */ value.terminal_identifier === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_TerminalIdentifier,
                                  __utils.BER
                              )(value.terminal_identifier, __utils.BER),
                        /* IF_ABSENT  */ value.private_domain_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_PrivateDomainName,
                                  __utils.BER
                              )(value.private_domain_name, __utils.BER),
                        /* IF_ABSENT  */ value.organization_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_OrganizationName,
                                  __utils.BER
                              )(value.organization_name, __utils.BER),
                        /* IF_ABSENT  */ value.numeric_user_identifier ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => _encode_NumericUserIdentifier,
                                  __utils.BER
                              )(value.numeric_user_identifier, __utils.BER),
                        /* IF_ABSENT  */ value.personal_name === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => _encode_PersonalName,
                                  __utils.BER
                              )(value.personal_name, __utils.BER),
                        /* IF_ABSENT  */ value.organizational_unit_names ===
                        undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => _encode_OrganizationalUnitNames,
                                  __utils.BER
                              )(value.organizational_unit_names, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInStandardAttributes(value, elGetter);
}

export class BuiltInDomainDefinedAttribute {
    constructor(
        readonly type_: asn1.PrintableString,
        readonly value: asn1.PrintableString
    ) {}
}
export const _root_component_type_list_1_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BuiltInDomainDefinedAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BuiltInDomainDefinedAttribute: __utils.ASN1Decoder<
    BuiltInDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttribute: __utils.ASN1Encoder<
    BuiltInDomainDefinedAttribute
> | null = null;
export function _decode_BuiltInDomainDefinedAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttribute) {
        _cached_decoder_for_BuiltInDomainDefinedAttribute = function (
            el: asn1.ASN1Element
        ): BuiltInDomainDefinedAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "BuiltInDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.PrintableString;
            let value!: asn1.PrintableString;
            type_ = __utils._decodePrintableString(sequence[0]);
            value = __utils._decodePrintableString(sequence[1]);
                        return new BuiltInDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttribute(el);
}
export function _encode_BuiltInDomainDefinedAttribute(
    value: BuiltInDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttribute) {
        _cached_encoder_for_BuiltInDomainDefinedAttribute = function (
            value: BuiltInDomainDefinedAttribute,
            elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodePrintableString(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodePrintableString(
                            value.value,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttribute(value, elGetter);
}

export type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[]; // SequenceOfType
let _cached_decoder_for_BuiltInDomainDefinedAttributes: __utils.ASN1Decoder<
    BuiltInDomainDefinedAttributes
> | null = null;
let _cached_encoder_for_BuiltInDomainDefinedAttributes: __utils.ASN1Encoder<
    BuiltInDomainDefinedAttributes
> | null = null;
export function _decode_BuiltInDomainDefinedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttributes) {
        _cached_decoder_for_BuiltInDomainDefinedAttributes = __utils._decodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _decode_BuiltInDomainDefinedAttribute);
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttributes(el);
}
export function _encode_BuiltInDomainDefinedAttributes(
    value: BuiltInDomainDefinedAttributes,
    elGetter: __utils.ASN1Encoder<BuiltInDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttributes) {
        _cached_encoder_for_BuiltInDomainDefinedAttributes = __utils._encodeSequenceOf<
            BuiltInDomainDefinedAttribute
        >(() => _encode_BuiltInDomainDefinedAttribute, __utils.BER);
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttributes(value, elGetter);
}

export class ExtensionAttribute {
    constructor(
        readonly extension_attribute_type: asn1.INTEGER,
        readonly extension_attribute_value: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "extension-attribute-type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extension-attribute-value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ExtensionAttribute: __utils.ASN1Decoder<
    ExtensionAttribute
> | null = null;
let _cached_encoder_for_ExtensionAttribute: __utils.ASN1Encoder<
    ExtensionAttribute
> | null = null;
export function _decode_ExtensionAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtensionAttribute) {
        _cached_decoder_for_ExtensionAttribute = function (
            el: asn1.ASN1Element
        ): ExtensionAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ExtensionAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "extension-attribute-type";
            sequence[1].name = "extension-attribute-value";
            let extension_attribute_type!: asn1.INTEGER;
            let extension_attribute_value!: asn1.ASN1Element;
            extension_attribute_type = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(sequence[0]);
            extension_attribute_value = __utils._decode_explicit<
                asn1.ASN1Element
            >(() => __utils._decodeAny)(sequence[1]);
                        return new ExtensionAttribute(
                extension_attribute_type,
                extension_attribute_value
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute(el);
}
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute,
    elGetter: __utils.ASN1Encoder<ExtensionAttribute>
) {
    if (!_cached_encoder_for_ExtensionAttribute) {
        _cached_encoder_for_ExtensionAttribute = function (
            value: ExtensionAttribute,
            elGetter: __utils.ASN1Encoder<ExtensionAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeInteger,
                            __utils.BER
                        )(value.extension_attribute_type, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            1,
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.extension_attribute_value, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ExtensionAttribute(value, elGetter);
}

export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType
let _cached_decoder_for_ExtensionAttributes: __utils.ASN1Decoder<
    ExtensionAttributes
> | null = null;
let _cached_encoder_for_ExtensionAttributes: __utils.ASN1Encoder<
    ExtensionAttributes
> | null = null;
export function _decode_ExtensionAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes = __utils._decodeSetOf<
            ExtensionAttribute
        >(() => _decode_ExtensionAttribute);
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}
export function _encode_ExtensionAttributes(
    value: ExtensionAttributes,
    elGetter: __utils.ASN1Encoder<ExtensionAttributes>
) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes = __utils._encodeSetOf<
            ExtensionAttribute
        >(() => _encode_ExtensionAttribute, __utils.BER);
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}

export class ORAddress {
    constructor(
        readonly built_in_standard_attributes: BuiltInStandardAttributes,
        readonly built_in_domain_defined_attributes: asn1.OPTIONAL<
            BuiltInDomainDefinedAttributes
        >,
        readonly extension_attributes: asn1.OPTIONAL<ExtensionAttributes>
    ) {}
}
export const _root_component_type_list_1_spec_for_ORAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "built-in-standard-attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "built-in-domain-defined-attributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extension-attributes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ORAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ORAddress: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ORAddress: __utils.ASN1Decoder<ORAddress> | null = null;
let _cached_encoder_for_ORAddress: __utils.ASN1Encoder<ORAddress> | null = null;
export function _decode_ORAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ORAddress) {
        _cached_decoder_for_ORAddress = function (
            el: asn1.ASN1Element
        ): ORAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let built_in_standard_attributes!: BuiltInStandardAttributes;
            let built_in_domain_defined_attributes: asn1.OPTIONAL<BuiltInDomainDefinedAttributes>;
            let extension_attributes: asn1.OPTIONAL<ExtensionAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "built-in-standard-attributes": (
                    _el: asn1.ASN1Element
                ): void => {
                    built_in_standard_attributes = _decode_BuiltInStandardAttributes(
                        _el
                    );
                },
                "built-in-domain-defined-attributes": (
                    _el: asn1.ASN1Element
                ): void => {
                    built_in_domain_defined_attributes = _decode_BuiltInDomainDefinedAttributes(
                        _el
                    );
                },
                "extension-attributes": (_el: asn1.ASN1Element): void => {
                    extension_attributes = _decode_ExtensionAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ORAddress,
                _extension_additions_list_spec_for_ORAddress,
                _root_component_type_list_2_spec_for_ORAddress,
                undefined
            );
            return new ORAddress /* SEQUENCE_CONSTRUCTOR_CALL */(
                built_in_standard_attributes,
                built_in_domain_defined_attributes,
                extension_attributes
            );
        };
    }
    return _cached_decoder_for_ORAddress(el);
}
export function _encode_ORAddress(
    value: ORAddress,
    elGetter: __utils.ASN1Encoder<ORAddress>
) {
    if (!_cached_encoder_for_ORAddress) {
        _cached_encoder_for_ORAddress = function (
            value: ORAddress,
            elGetter: __utils.ASN1Encoder<ORAddress>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_BuiltInStandardAttributes(
                            value.built_in_standard_attributes,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.built_in_domain_defined_attributes ===
                        undefined
                            ? undefined
                            : _encode_BuiltInDomainDefinedAttributes(
                                  value.built_in_domain_defined_attributes,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.extension_attributes ===
                        undefined
                            ? undefined
                            : _encode_ExtensionAttributes(
                                  value.extension_attributes,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ORAddress(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedExtensionAttributes

// TODO: ObjectClassAssignment: EXTENSION-ATTRIBUTE

// TODO: ObjectAssignment: ea-commonName

// TODO: ObjectAssignment: ea-teletexCommonName

// TODO: ObjectAssignment: ea-teletexOrganizationName

// TODO: ObjectAssignment: ea-teletexPersonalName

// TODO: ObjectAssignment: ea-teletexOrganizationalUnitNames

export type TeletexOrganizationalUnitName = asn1.TeletexString; // TeletexString
let _cached_decoder_for_TeletexOrganizationalUnitName: __utils.ASN1Decoder<
    TeletexOrganizationalUnitName
> | null = null;
let _cached_encoder_for_TeletexOrganizationalUnitName: __utils.ASN1Encoder<
    TeletexOrganizationalUnitName
> | null = null;
export function _decode_TeletexOrganizationalUnitName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitName) {
        _cached_decoder_for_TeletexOrganizationalUnitName =
            __utils._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationalUnitName(el);
}
export function _encode_TeletexOrganizationalUnitName(
    value: TeletexOrganizationalUnitName,
    elGetter: __utils.ASN1Encoder<TeletexOrganizationalUnitName>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitName) {
        _cached_encoder_for_TeletexOrganizationalUnitName =
            __utils._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationalUnitName(value, elGetter);
}

// TODO: ObjectAssignment: ea-pDSName

// TODO: ObjectAssignment: ea-physicalDeliveryCountryName

// TODO: ObjectAssignment: ea-postalCode

// TODO: ObjectAssignment: ea-physicalDeliveryOfficeName

// TODO: ObjectAssignment: ea-physicalDeliveryOfficeNumber

// TODO: ObjectAssignment: ea-extensionORAddressComponents

// TODO: ObjectAssignment: ea-physicalDeliveryPersonalName

// TODO: ObjectAssignment: ea-physicalDeliveryOrganizationName

// TODO: ObjectAssignment: ea-extensionPhysicalDeliveryAddressComponents

// TODO: ObjectAssignment: ea-unformattedPostalAddress

// TODO: ObjectAssignment: ea-streetAddress

// TODO: ObjectAssignment: ea-postOfficeBoxAddress

// TODO: ObjectAssignment: ea-posteRestanteAddress

// TODO: ObjectAssignment: ea-uniquePostalName

// TODO: ObjectAssignment: ea-localPostalAttributes

export class PDSParameter {
    constructor(
        readonly printable_string: asn1.OPTIONAL<asn1.PrintableString>,
        readonly teletex_string: asn1.OPTIONAL<asn1.TeletexString>
    ) {}
}
export const _root_component_type_list_1_spec_for_PDSParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "printable-string",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "teletex-string",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PDSParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PDSParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PDSParameter: __utils.ASN1Decoder<
    PDSParameter
> | null = null;
let _cached_encoder_for_PDSParameter: __utils.ASN1Encoder<
    PDSParameter
> | null = null;
export function _decode_PDSParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PDSParameter) {
        _cached_decoder_for_PDSParameter = function (
            el: asn1.ASN1Element
        ): PDSParameter {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let printable_string: asn1.OPTIONAL<asn1.PrintableString>;
            let teletex_string: asn1.OPTIONAL<asn1.TeletexString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                "printable-string": (_el: asn1.ASN1Element): void => {
                    printable_string = __utils._decodePrintableString(_el);
                },
                "teletex-string": (_el: asn1.ASN1Element): void => {
                    teletex_string = __utils._decodeTeletexString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PDSParameter,
                _extension_additions_list_spec_for_PDSParameter,
                _root_component_type_list_2_spec_for_PDSParameter,
                undefined
            );
            return new PDSParameter /* SET_CONSTRUCTOR_CALL */(
                printable_string,
                teletex_string
            );
        };
    }
    return _cached_decoder_for_PDSParameter(el);
}
export function _encode_PDSParameter(
    value: PDSParameter,
    elGetter: __utils.ASN1Encoder<PDSParameter>
) {
    if (!_cached_encoder_for_PDSParameter) {
        _cached_encoder_for_PDSParameter = function (
            value: PDSParameter,
            elGetter: __utils.ASN1Encoder<PDSParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSet(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.printable_string === undefined
                            ? undefined
                            : __utils._encodePrintableString(
                                  value.printable_string,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.teletex_string === undefined
                            ? undefined
                            : __utils._encodeTeletexString(
                                  value.teletex_string,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PDSParameter(value, elGetter);
}

// TODO: ObjectAssignment: ea-extendedNetworkAddress

export class PresentationAddress {
    constructor(
        readonly pSelector: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly sSelector: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly tSelector: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly nAddresses: asn1.OCTET_STRING[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PresentationAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nAddresses",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PresentationAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PresentationAddress: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PresentationAddress: __utils.ASN1Decoder<
    PresentationAddress
> | null = null;
let _cached_encoder_for_PresentationAddress: __utils.ASN1Encoder<
    PresentationAddress
> | null = null;
export function _decode_PresentationAddress(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PresentationAddress) {
        _cached_decoder_for_PresentationAddress = function (
            el: asn1.ASN1Element
        ): PresentationAddress {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let sSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let tSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let nAddresses!: asn1.OCTET_STRING[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pSelector: (_el: asn1.ASN1Element): void => {
                    pSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                sSelector: (_el: asn1.ASN1Element): void => {
                    sSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                tSelector: (_el: asn1.ASN1Element): void => {
                    tSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                nAddresses: (_el: asn1.ASN1Element): void => {
                    nAddresses = __utils._decode_explicit<asn1.OCTET_STRING[]>(
                        () =>
                            __utils._decodeSetOf<asn1.OCTET_STRING>(
                                () => __utils._decodeOctetString
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PresentationAddress,
                _extension_additions_list_spec_for_PresentationAddress,
                _root_component_type_list_2_spec_for_PresentationAddress,
                undefined
            );
            return new PresentationAddress /* SEQUENCE_CONSTRUCTOR_CALL */(
                pSelector,
                sSelector,
                tSelector,
                nAddresses
            );
        };
    }
    return _cached_decoder_for_PresentationAddress(el);
}
export function _encode_PresentationAddress(
    value: PresentationAddress,
    elGetter: __utils.ASN1Encoder<PresentationAddress>
) {
    if (!_cached_encoder_for_PresentationAddress) {
        _cached_encoder_for_PresentationAddress = function (
            value: PresentationAddress,
            elGetter: __utils.ASN1Encoder<PresentationAddress>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.pSelector === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.pSelector, __utils.BER),
                        /* IF_ABSENT  */ value.sSelector === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.sSelector, __utils.BER),
                        /* IF_ABSENT  */ value.tSelector === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.tSelector, __utils.BER),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            3,
                            () =>
                                __utils._encodeSetOf<asn1.OCTET_STRING>(
                                    () => __utils._encodeOctetString,
                                    __utils.BER
                                ),
                            __utils.BER
                        )(value.nAddresses, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PresentationAddress(value, elGetter);
}

// TODO: ObjectAssignment: ea-terminalType

// TODO: ObjectAssignment: ea-teletexDomainDefinedAttributes

export class TeletexDomainDefinedAttribute {
    constructor(
        readonly type_: asn1.TeletexString,
        readonly value: asn1.TeletexString
    ) {}
}
export const _root_component_type_list_1_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 20),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TeletexDomainDefinedAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TeletexDomainDefinedAttribute: __utils.ASN1Decoder<
    TeletexDomainDefinedAttribute
> | null = null;
let _cached_encoder_for_TeletexDomainDefinedAttribute: __utils.ASN1Encoder<
    TeletexDomainDefinedAttribute
> | null = null;
export function _decode_TeletexDomainDefinedAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TeletexDomainDefinedAttribute) {
        _cached_decoder_for_TeletexDomainDefinedAttribute = function (
            el: asn1.ASN1Element
        ): TeletexDomainDefinedAttribute {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "TeletexDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
                        sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.TeletexString;
            let value!: asn1.TeletexString;
            type_ = __utils._decodeTeletexString(sequence[0]);
            value = __utils._decodeTeletexString(sequence[1]);
                        return new TeletexDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_TeletexDomainDefinedAttribute(el);
}
export function _encode_TeletexDomainDefinedAttribute(
    value: TeletexDomainDefinedAttribute,
    elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_TeletexDomainDefinedAttribute) {
        _cached_encoder_for_TeletexDomainDefinedAttribute = function (
            value: TeletexDomainDefinedAttribute,
            elGetter: __utils.ASN1Encoder<TeletexDomainDefinedAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeTeletexString(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeTeletexString(
                            value.value,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TeletexDomainDefinedAttribute(value, elGetter);
}

export const ub_match: asn1.INTEGER = 128;

export const ub_common_name_length: asn1.INTEGER = 64;

export const ub_country_name_alpha_length: asn1.INTEGER = 2;

export const ub_country_name_numeric_length: asn1.INTEGER = 3;

export const ub_domain_defined_attributes: asn1.INTEGER = 4;

export const ub_domain_defined_attribute_type_length: asn1.INTEGER = 8;

export const ub_domain_defined_attribute_value_length: asn1.INTEGER = 128;

export const ub_domain_name_length: asn1.INTEGER = 16;

export const ub_extension_attributes: asn1.INTEGER = 256;

export const ub_e163_4_number_length: asn1.INTEGER = 15;

export const ub_e163_4_sub_address_length: asn1.INTEGER = 40;

export const ub_generation_qualifier_length: asn1.INTEGER = 3;

export const ub_given_name_length: asn1.INTEGER = 16;

export const ub_initials_length: asn1.INTEGER = 5;

export const ub_integer_options: asn1.INTEGER = 256;

export const ub_numeric_user_id_length: asn1.INTEGER = 32;

export const ub_organization_name_length: asn1.INTEGER = 64;

export const ub_organizational_unit_name_length: asn1.INTEGER = 32;

export const ub_organizational_units: asn1.INTEGER = 4;

export const ub_pds_name_length: asn1.INTEGER = 16;

export const ub_pds_parameter_length: asn1.INTEGER = 30;

export const ub_pds_physical_address_lines: asn1.INTEGER = 6;

export const ub_postal_code_length: asn1.INTEGER = 16;

export const ub_surname_length: asn1.INTEGER = 40;

export const ub_terminal_id_length: asn1.INTEGER = 24;

export const ub_unformatted_address_length: asn1.INTEGER = 180;

export const ub_x121_address_length: asn1.INTEGER = 16;

/* END_MODULE PKIX-X400Address-2009 */
