// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";

export interface AccessPolicyExclude {
    emails?: pulumi.Input<pulumi.Input<string>[]>;
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    everyone?: pulumi.Input<boolean>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AccessPolicyInclude {
    emails?: pulumi.Input<pulumi.Input<string>[]>;
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    everyone?: pulumi.Input<boolean>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AccessPolicyRequire {
    emails?: pulumi.Input<pulumi.Input<string>[]>;
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    everyone?: pulumi.Input<boolean>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AccessRuleConfiguration {
    /**
     * The request property to target. Allowed values: "ip", "ipRange", "asn", "country"
     */
    target: pulumi.Input<string>;
    /**
     * The value to target. Depends on target's type.
     */
    value: pulumi.Input<string>;
}

export interface CustomSslCustomSslOptions {
    /**
     * Method of building intermediate certificate chain. A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it. Valid values are `ubiquitous` (default), `optimal`, `force`.
     */
    bundleMethod?: pulumi.Input<string>;
    /**
     * Certificate certificate and the intermediate(s)
     */
    certificate: pulumi.Input<string>;
    /**
     * Specifies the region where your private key can be held locally. Valid values are `us`, `eu`, `highestSecurity`.
     */
    geoRestrictions?: pulumi.Input<string>;
    /**
     * Certificate's private key
     */
    privateKey: pulumi.Input<string>;
    /**
     * Whether to enable support for legacy clients which do not include SNI in the TLS handshake. Valid values are `legacyCustom` (default), `sniCustom`.
     */
    type?: pulumi.Input<string>;
}

export interface CustomSslCustomSslPriority {
    id?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
}

export interface GetZonesFilter {
    name?: string;
    paused?: boolean;
    status?: string;
}

export interface LoadBalancerMonitorHeader {
    /**
     * The header name.
     */
    header: pulumi.Input<string>;
    /**
     * A list of string values for the header.
     */
    values: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LoadBalancerPoolOrigin {
    /**
     * The IP address (IPv4 or IPv6) of the origin, or the publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare.
     */
    address: pulumi.Input<string>;
    /**
     * Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A human-identifiable name for the origin.
     */
    name: pulumi.Input<string>;
    /**
     * The weight (0.01 - 1.00) of this origin, relative to other origins in the pool. Equal values mean equal weighting. A weight of 0 means traffic will not be sent to this origin, but health is still checked. Default: 1.
     */
    weight?: pulumi.Input<number>;
}

export interface LoadBalancerPopPool {
    /**
     * A list of pool IDs in failover priority to use for traffic reaching the given PoP.
     */
    poolIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A 3-letter code for the Point-of-Presence. Allowed values can be found in the list of datacenters on the [status page](https://www.cloudflarestatus.com/). Multiple entries should not be specified with the same PoP.
     */
    pop: pulumi.Input<string>;
}

export interface LoadBalancerRegionPool {
    /**
     * A list of pool IDs in failover priority to use for traffic reaching the given PoP.
     */
    poolIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A region code which must be in the list defined [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions). Multiple entries should not be specified with the same region.
     */
    region: pulumi.Input<string>;
}

export interface PageRuleActions {
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    alwaysOnline?: pulumi.Input<string>;
    /**
     * Boolean of whether this action is enabled. Default: false.
     */
    alwaysUseHttps?: pulumi.Input<boolean>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    automaticHttpsRewrites?: pulumi.Input<string>;
    /**
     * The Time To Live for the browser cache. `0` means 'Respect Existing Headers'
     */
    browserCacheTtl?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    browserCheck?: pulumi.Input<string>;
    /**
     * String value of cookie name to conditionally bypass cache the page.
     */
    bypassCacheOnCookie?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    cacheByDeviceType?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    cacheDeceptionArmor?: pulumi.Input<string>;
    /**
     * Whether to set the cache level to `"bypass"`, `"basic"`, `"simplified"`, `"aggressive"`, or `"cacheEverything"`.
     */
    cacheLevel?: pulumi.Input<string>;
    /**
     * String value of cookie name to conditionally cache the page.
     */
    cacheOnCookie?: pulumi.Input<string>;
    /**
     * Boolean of whether this action is enabled. Default: false.
     */
    disableApps?: pulumi.Input<boolean>;
    /**
     * Boolean of whether this action is enabled. Default: false.
     */
    disablePerformance?: pulumi.Input<boolean>;
    /**
     * Boolean of whether this action is enabled. Default: false.
     */
    disableRailgun?: pulumi.Input<boolean>;
    /**
     * Boolean of whether this action is enabled. Default: false.
     */
    disableSecurity?: pulumi.Input<boolean>;
    /**
     * The Time To Live for the edge cache.
     */
    edgeCacheTtl?: pulumi.Input<number>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    emailObfuscation?: pulumi.Input<string>;
    /**
     * Whether origin Cache-Control action is `"on"` or `"off"`.
     */
    explicitCacheControl?: pulumi.Input<string>;
    /**
     * The URL to forward to, and with what status. See below.
     */
    forwardingUrl?: pulumi.Input<inputs.PageRuleActionsForwardingUrl>;
    /**
     * Value of the Host header to send.
     */
    hostHeaderOverride?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    ipGeolocation?: pulumi.Input<string>;
    /**
     * The configuration for HTML, CSS and JS minification. See below for full list of options.
     */
    minifies?: pulumi.Input<pulumi.Input<inputs.PageRuleActionsMinify>[]>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    mirage?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    opportunisticEncryption?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    originErrorPagePassThru?: pulumi.Input<string>;
    /**
     * Whether this action is `"off"`, `"lossless"` or `"lossy"`.
     */
    polish?: pulumi.Input<string>;
    /**
     * Overridden origin server name.
     */
    resolveOverride?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    respectStrongEtag?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    responseBuffering?: pulumi.Input<string>;
    /**
     * Whether to set the rocket loader to `"on"`, `"off"`.
     */
    rocketLoader?: pulumi.Input<string>;
    /**
     * Whether to set the security level to `"off"`, `"essentiallyOff"`, `"low"`, `"medium"`, `"high"`, or `"underAttack"`.
     */
    securityLevel?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    serverSideExclude?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    sortQueryStringForCache?: pulumi.Input<string>;
    /**
     * Whether to set the SSL mode to `"off"`, `"flexible"`, `"full"`, `"strict"`, or `"originPull"`.
     */
    ssl?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    trueClientIpHeader?: pulumi.Input<string>;
    /**
     * Whether this action is `"on"` or `"off"`.
     */
    waf?: pulumi.Input<string>;
}

export interface PageRuleActionsForwardingUrl {
    /**
     * The status code to use for the redirection.
     */
    statusCode: pulumi.Input<number>;
    /**
     * The URL to which the page rule should forward.
     */
    url: pulumi.Input<string>;
}

export interface PageRuleActionsMinify {
    /**
     * Whether CSS should be minified. Valid values are `"on"` or `"off"`.
     */
    css: pulumi.Input<string>;
    /**
     * Whether HTML should be minified. Valid values are `"on"` or `"off"`.
     */
    html: pulumi.Input<string>;
    /**
     * Whether Javascript should be minified. Valid values are `"on"` or `"off"`.
     */
    js: pulumi.Input<string>;
}

export interface RateLimitAction {
    /**
     * The type of action to perform. Allowable values are 'simulate', 'ban', 'challenge' and 'js_challenge'.
     */
    mode: pulumi.Input<string>;
    /**
     * Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     */
    response?: pulumi.Input<inputs.RateLimitActionResponse>;
    /**
     * The time in seconds as an integer to perform the mitigation action. This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period (min: 1, max: 86400).
     */
    timeout?: pulumi.Input<number>;
}

export interface RateLimitActionResponse {
    /**
     * The body to return, the content here should conform to the content_type.
     */
    body: pulumi.Input<string>;
    /**
     * The content-type of the body, must be one of: 'text/plain', 'text/xml', 'application/json'.
     */
    contentType: pulumi.Input<string>;
}

export interface RateLimitCorrelate {
    /**
     * If set to 'nat', NAT support will be enabled for rate limiting.
     */
    by?: pulumi.Input<string>;
}

export interface RateLimitMatch {
    /**
     * Matches HTTP requests (from the client to Cloudflare). See definition below.
     */
    request?: pulumi.Input<inputs.RateLimitMatchRequest>;
    /**
     * Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
     */
    response?: pulumi.Input<inputs.RateLimitMatchResponse>;
}

export interface RateLimitMatchRequest {
    /**
     * HTTP Methods, can be a subset ['POST','PUT'] or all ['\_ALL\_']. Default: ['\_ALL\_'].
     */
    methods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * HTTP Schemes, can be one ['HTTPS'], both ['HTTP','HTTPS'] or all ['\_ALL\_'].  Default: ['\_ALL\_'].
     */
    schemes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use * for all traffic to your zone. Default: '*'.
     */
    urlPattern?: pulumi.Input<string>;
}

export interface RateLimitMatchResponse {
    /**
     * Only count traffic that has come from your origin servers. If true, cached items that Cloudflare serve will not count towards rate limiting. Default: `true`.
     */
    originTraffic?: pulumi.Input<boolean>;
    /**
     * HTTP Status codes, can be one [403], many [401,403] or indicate all by not providing this value.
     */
    statuses?: pulumi.Input<pulumi.Input<number>[]>;
}

export interface RecordData {
    algorithm?: pulumi.Input<number>;
    altitude?: pulumi.Input<number>;
    certificate?: pulumi.Input<string>;
    content?: pulumi.Input<string>;
    digest?: pulumi.Input<string>;
    digestType?: pulumi.Input<number>;
    fingerprint?: pulumi.Input<string>;
    flags?: pulumi.Input<string>;
    keyTag?: pulumi.Input<number>;
    latDegrees?: pulumi.Input<number>;
    latDirection?: pulumi.Input<string>;
    latMinutes?: pulumi.Input<number>;
    latSeconds?: pulumi.Input<number>;
    longDegrees?: pulumi.Input<number>;
    longDirection?: pulumi.Input<string>;
    longMinutes?: pulumi.Input<number>;
    longSeconds?: pulumi.Input<number>;
    matchingType?: pulumi.Input<number>;
    /**
     * The name of the record
     */
    name?: pulumi.Input<string>;
    order?: pulumi.Input<number>;
    port?: pulumi.Input<number>;
    precisionHorz?: pulumi.Input<number>;
    precisionVert?: pulumi.Input<number>;
    preference?: pulumi.Input<number>;
    /**
     * The priority of the record
     */
    priority?: pulumi.Input<number>;
    proto?: pulumi.Input<string>;
    protocol?: pulumi.Input<number>;
    publicKey?: pulumi.Input<string>;
    regex?: pulumi.Input<string>;
    replacement?: pulumi.Input<string>;
    selector?: pulumi.Input<number>;
    service?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    target?: pulumi.Input<string>;
    /**
     * The type of the record
     */
    type?: pulumi.Input<number>;
    usage?: pulumi.Input<number>;
    weight?: pulumi.Input<number>;
}

export interface SpectrumApplicationDns {
    /**
     * Fully qualified domain name of the origin e.g. origin-ssh.example.com.
     */
    name: pulumi.Input<string>;
    /**
     * The type of DNS record associated with the application. Valid values: `CNAME`.
     */
    type: pulumi.Input<string>;
}

export interface SpectrumApplicationOriginDns {
    /**
     * Fully qualified domain name of the origin e.g. origin-ssh.example.com.
     */
    name: pulumi.Input<string>;
}

export interface ZoneLockdownConfiguration {
    /**
     * The request property to target. Allowed values: "ip", "ipRange"
     */
    target: pulumi.Input<string>;
    /**
     * The value to target. Depends on target's type. IP addresses should just be standard IPv4/IPv6 notation i.e. `198.51.100.4` or `2001:db8::/32` and IP ranges in CIDR format i.e. `198.51.0.0/16`.
     */
    value: pulumi.Input<string>;
}

export interface ZoneMeta {
    phishingDetected: pulumi.Input<boolean>;
    wildcardProxiable: pulumi.Input<boolean>;
}

export interface ZoneSettingsOverrideInitialSettings {
    alwaysOnline?: pulumi.Input<string>;
    alwaysUseHttps?: pulumi.Input<string>;
    automaticHttpsRewrites?: pulumi.Input<string>;
    brotli?: pulumi.Input<string>;
    browserCacheTtl?: pulumi.Input<number>;
    browserCheck?: pulumi.Input<string>;
    cacheLevel?: pulumi.Input<string>;
    challengeTtl?: pulumi.Input<number>;
    cnameFlattening?: pulumi.Input<string>;
    developmentMode?: pulumi.Input<string>;
    edgeCacheTtl?: pulumi.Input<number>;
    emailObfuscation?: pulumi.Input<string>;
    h2Prioritization?: pulumi.Input<string>;
    hotlinkProtection?: pulumi.Input<string>;
    http2?: pulumi.Input<string>;
    imageResizing?: pulumi.Input<string>;
    ipGeolocation?: pulumi.Input<string>;
    ipv6?: pulumi.Input<string>;
    maxUpload?: pulumi.Input<number>;
    minTlsVersion?: pulumi.Input<string>;
    minify?: pulumi.Input<inputs.ZoneSettingsOverrideInitialSettingsMinify>;
    mirage?: pulumi.Input<string>;
    mobileRedirect?: pulumi.Input<inputs.ZoneSettingsOverrideInitialSettingsMobileRedirect>;
    opportunisticEncryption?: pulumi.Input<string>;
    opportunisticOnion?: pulumi.Input<string>;
    originErrorPagePassThru?: pulumi.Input<string>;
    polish?: pulumi.Input<string>;
    prefetchPreload?: pulumi.Input<string>;
    privacyPass?: pulumi.Input<string>;
    pseudoIpv4?: pulumi.Input<string>;
    responseBuffering?: pulumi.Input<string>;
    rocketLoader?: pulumi.Input<string>;
    securityHeader?: pulumi.Input<inputs.ZoneSettingsOverrideInitialSettingsSecurityHeader>;
    securityLevel?: pulumi.Input<string>;
    serverSideExclude?: pulumi.Input<string>;
    sortQueryStringForCache?: pulumi.Input<string>;
    ssl?: pulumi.Input<string>;
    tls12Only?: pulumi.Input<string>;
    tls13?: pulumi.Input<string>;
    tlsClientAuth?: pulumi.Input<string>;
    trueClientIpHeader?: pulumi.Input<string>;
    waf?: pulumi.Input<string>;
    webp?: pulumi.Input<string>;
    websockets?: pulumi.Input<string>;
}

export interface ZoneSettingsOverrideInitialSettingsMinify {
    /**
     * "on"/"off"
     */
    css: pulumi.Input<string>;
    /**
     * "on"/"off"
     * * `js` (Required)"on"/"off"
     */
    html: pulumi.Input<string>;
    js: pulumi.Input<string>;
}

export interface ZoneSettingsOverrideInitialSettingsMobileRedirect {
    /**
     * String value
     */
    mobileSubdomain: pulumi.Input<string>;
    /**
     * "on"/"off"
     */
    status: pulumi.Input<string>;
    /**
     * true/false
     */
    stripUri: pulumi.Input<boolean>;
}

export interface ZoneSettingsOverrideInitialSettingsSecurityHeader {
    /**
     * true/false
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * true/false
     */
    includeSubdomains?: pulumi.Input<boolean>;
    /**
     * Integer
     */
    maxAge?: pulumi.Input<number>;
    /**
     * true/false
     */
    nosniff?: pulumi.Input<boolean>;
    /**
     * true/false
     */
    preload?: pulumi.Input<boolean>;
}

export interface ZoneSettingsOverrideSettings {
    alwaysOnline?: pulumi.Input<string>;
    alwaysUseHttps?: pulumi.Input<string>;
    automaticHttpsRewrites?: pulumi.Input<string>;
    brotli?: pulumi.Input<string>;
    browserCacheTtl?: pulumi.Input<number>;
    browserCheck?: pulumi.Input<string>;
    cacheLevel?: pulumi.Input<string>;
    challengeTtl?: pulumi.Input<number>;
    cnameFlattening?: pulumi.Input<string>;
    developmentMode?: pulumi.Input<string>;
    edgeCacheTtl?: pulumi.Input<number>;
    emailObfuscation?: pulumi.Input<string>;
    h2Prioritization?: pulumi.Input<string>;
    hotlinkProtection?: pulumi.Input<string>;
    http2?: pulumi.Input<string>;
    imageResizing?: pulumi.Input<string>;
    ipGeolocation?: pulumi.Input<string>;
    ipv6?: pulumi.Input<string>;
    maxUpload?: pulumi.Input<number>;
    minTlsVersion?: pulumi.Input<string>;
    minify?: pulumi.Input<inputs.ZoneSettingsOverrideSettingsMinify>;
    mirage?: pulumi.Input<string>;
    mobileRedirect?: pulumi.Input<inputs.ZoneSettingsOverrideSettingsMobileRedirect>;
    opportunisticEncryption?: pulumi.Input<string>;
    opportunisticOnion?: pulumi.Input<string>;
    originErrorPagePassThru?: pulumi.Input<string>;
    polish?: pulumi.Input<string>;
    prefetchPreload?: pulumi.Input<string>;
    privacyPass?: pulumi.Input<string>;
    pseudoIpv4?: pulumi.Input<string>;
    responseBuffering?: pulumi.Input<string>;
    rocketLoader?: pulumi.Input<string>;
    securityHeader?: pulumi.Input<inputs.ZoneSettingsOverrideSettingsSecurityHeader>;
    securityLevel?: pulumi.Input<string>;
    serverSideExclude?: pulumi.Input<string>;
    sortQueryStringForCache?: pulumi.Input<string>;
    ssl?: pulumi.Input<string>;
    tls12Only?: pulumi.Input<string>;
    tls13?: pulumi.Input<string>;
    tlsClientAuth?: pulumi.Input<string>;
    trueClientIpHeader?: pulumi.Input<string>;
    waf?: pulumi.Input<string>;
    webp?: pulumi.Input<string>;
    websockets?: pulumi.Input<string>;
}

export interface ZoneSettingsOverrideSettingsMinify {
    /**
     * "on"/"off"
     */
    css: pulumi.Input<string>;
    /**
     * "on"/"off"
     * * `js` (Required)"on"/"off"
     */
    html: pulumi.Input<string>;
    js: pulumi.Input<string>;
}

export interface ZoneSettingsOverrideSettingsMobileRedirect {
    /**
     * String value
     */
    mobileSubdomain: pulumi.Input<string>;
    /**
     * "on"/"off"
     */
    status: pulumi.Input<string>;
    /**
     * true/false
     */
    stripUri: pulumi.Input<boolean>;
}

export interface ZoneSettingsOverrideSettingsSecurityHeader {
    /**
     * true/false
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * true/false
     */
    includeSubdomains?: pulumi.Input<boolean>;
    /**
     * Integer
     */
    maxAge?: pulumi.Input<number>;
    /**
     * true/false
     */
    nosniff?: pulumi.Input<boolean>;
    /**
     * true/false
     */
    preload?: pulumi.Input<boolean>;
}
