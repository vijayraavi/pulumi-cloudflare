# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class RateLimit(pulumi.CustomResource):
    action: pulumi.Output[dict]
    """
    The action to be performed when the threshold of matched traffic within the period defined is exceeded.
    
      * `mode` (`str`) - The type of action to perform. Allowable values are 'simulate', 'ban', 'challenge' and 'js_challenge'.
      * `response` (`dict`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
    
        * `body` (`str`) - The body to return, the content here should conform to the content_type.
        * `contentType` (`str`) - The content-type of the body, must be one of: 'text/plain', 'text/xml', 'application/json'.
    
      * `timeout` (`float`) - The time in seconds as an integer to perform the mitigation action. This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period (min: 1, max: 86400).
    """
    bypass_url_patterns: pulumi.Output[list]
    """
    URLs matching the patterns specified here will be excluded from rate limiting.
    """
    correlate: pulumi.Output[dict]
    """
    Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
    
      * `by` (`str`) - If set to 'nat', NAT support will be enabled for rate limiting.
    """
    description: pulumi.Output[str]
    """
    A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
    """
    disabled: pulumi.Output[bool]
    """
    Whether this ratelimit is currently disabled. Default: `false`.
    """
    match: pulumi.Output[dict]
    """
    Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
    
      * `request` (`dict`) - Matches HTTP requests (from the client to Cloudflare). See definition below.
    
        * `methods` (`list`) - HTTP Methods, can be a subset ['POST','PUT'] or all ['\_ALL\_']. Default: ['\_ALL\_'].
        * `schemes` (`list`) - HTTP Schemes, can be one ['HTTPS'], both ['HTTP','HTTPS'] or all ['\_ALL\_'].  Default: ['\_ALL\_'].
        * `urlPattern` (`str`) - The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use * for all traffic to your zone. Default: '*'.
    
      * `response` (`dict`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
    
        * `originTraffic` (`bool`) - Only count traffic that has come from your origin servers. If true, cached items that Cloudflare serve will not count towards rate limiting. Default: `true`.
        * `statuses` (`list`) - HTTP Status codes, can be one [403], many [401,403] or indicate all by not providing this value.
    """
    period: pulumi.Output[float]
    """
    The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
    """
    threshold: pulumi.Output[float]
    """
    The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone ID to apply rate limiting to.
    """
    def __init__(__self__, resource_name, opts=None, action=None, bypass_url_patterns=None, correlate=None, description=None, disabled=None, match=None, period=None, threshold=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare rate limit resource for a given zone. This can be used to limit the traffic you receive zone-wide, or matching more specific types of requests/responses.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] action: The action to be performed when the threshold of matched traffic within the period defined is exceeded.
        :param pulumi.Input[list] bypass_url_patterns: URLs matching the patterns specified here will be excluded from rate limiting.
        :param pulumi.Input[dict] correlate: Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
        :param pulumi.Input[str] description: A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
        :param pulumi.Input[bool] disabled: Whether this ratelimit is currently disabled. Default: `false`.
        :param pulumi.Input[dict] match: Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
        :param pulumi.Input[float] period: The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
        :param pulumi.Input[float] threshold: The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
        :param pulumi.Input[str] zone_id: The DNS zone ID to apply rate limiting to.
        
        The **action** object supports the following:
        
          * `mode` (`pulumi.Input[str]`) - The type of action to perform. Allowable values are 'simulate', 'ban', 'challenge' and 'js_challenge'.
          * `response` (`pulumi.Input[dict]`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
        
            * `body` (`pulumi.Input[str]`) - The body to return, the content here should conform to the content_type.
            * `contentType` (`pulumi.Input[str]`) - The content-type of the body, must be one of: 'text/plain', 'text/xml', 'application/json'.
        
          * `timeout` (`pulumi.Input[float]`) - The time in seconds as an integer to perform the mitigation action. This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period (min: 1, max: 86400).
        
        The **correlate** object supports the following:
        
          * `by` (`pulumi.Input[str]`) - If set to 'nat', NAT support will be enabled for rate limiting.
        
        The **match** object supports the following:
        
          * `request` (`pulumi.Input[dict]`) - Matches HTTP requests (from the client to Cloudflare). See definition below.
        
            * `methods` (`pulumi.Input[list]`) - HTTP Methods, can be a subset ['POST','PUT'] or all ['\_ALL\_']. Default: ['\_ALL\_'].
            * `schemes` (`pulumi.Input[list]`) - HTTP Schemes, can be one ['HTTPS'], both ['HTTP','HTTPS'] or all ['\_ALL\_'].  Default: ['\_ALL\_'].
            * `urlPattern` (`pulumi.Input[str]`) - The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use * for all traffic to your zone. Default: '*'.
        
          * `response` (`pulumi.Input[dict]`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
        
            * `originTraffic` (`pulumi.Input[bool]`) - Only count traffic that has come from your origin servers. If true, cached items that Cloudflare serve will not count towards rate limiting. Default: `true`.
            * `statuses` (`pulumi.Input[list]`) - HTTP Status codes, can be one [403], many [401,403] or indicate all by not providing this value.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/rate_limit.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if action is None:
                raise TypeError("Missing required property 'action'")
            __props__['action'] = action
            __props__['bypass_url_patterns'] = bypass_url_patterns
            __props__['correlate'] = correlate
            __props__['description'] = description
            __props__['disabled'] = disabled
            __props__['match'] = match
            if period is None:
                raise TypeError("Missing required property 'period'")
            __props__['period'] = period
            if threshold is None:
                raise TypeError("Missing required property 'threshold'")
            __props__['threshold'] = threshold
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
        super(RateLimit, __self__).__init__(
            'cloudflare:index/rateLimit:RateLimit',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, action=None, bypass_url_patterns=None, correlate=None, description=None, disabled=None, match=None, period=None, threshold=None, zone_id=None):
        """
        Get an existing RateLimit resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] action: The action to be performed when the threshold of matched traffic within the period defined is exceeded.
        :param pulumi.Input[list] bypass_url_patterns: URLs matching the patterns specified here will be excluded from rate limiting.
        :param pulumi.Input[dict] correlate: Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
        :param pulumi.Input[str] description: A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
        :param pulumi.Input[bool] disabled: Whether this ratelimit is currently disabled. Default: `false`.
        :param pulumi.Input[dict] match: Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone. See definition below.
        :param pulumi.Input[float] period: The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be performed (min: 1, max: 86,400).
        :param pulumi.Input[float] threshold: The threshold that triggers the rate limit mitigations, combine with period. i.e. threshold per period (min: 2, max: 1,000,000).
        :param pulumi.Input[str] zone_id: The DNS zone ID to apply rate limiting to.
        
        The **action** object supports the following:
        
          * `mode` (`pulumi.Input[str]`) - The type of action to perform. Allowable values are 'simulate', 'ban', 'challenge' and 'js_challenge'.
          * `response` (`pulumi.Input[dict]`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
        
            * `body` (`pulumi.Input[str]`) - The body to return, the content here should conform to the content_type.
            * `contentType` (`pulumi.Input[str]`) - The content-type of the body, must be one of: 'text/plain', 'text/xml', 'application/json'.
        
          * `timeout` (`pulumi.Input[float]`) - The time in seconds as an integer to perform the mitigation action. This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period (min: 1, max: 86400).
        
        The **correlate** object supports the following:
        
          * `by` (`pulumi.Input[str]`) - If set to 'nat', NAT support will be enabled for rate limiting.
        
        The **match** object supports the following:
        
          * `request` (`pulumi.Input[dict]`) - Matches HTTP requests (from the client to Cloudflare). See definition below.
        
            * `methods` (`pulumi.Input[list]`) - HTTP Methods, can be a subset ['POST','PUT'] or all ['\_ALL\_']. Default: ['\_ALL\_'].
            * `schemes` (`pulumi.Input[list]`) - HTTP Schemes, can be one ['HTTPS'], both ['HTTP','HTTPS'] or all ['\_ALL\_'].  Default: ['\_ALL\_'].
            * `urlPattern` (`pulumi.Input[str]`) - The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use * for all traffic to your zone. Default: '*'.
        
          * `response` (`pulumi.Input[dict]`) - Custom content-type and body to return, this overrides the custom error for the zone. This field is not required. Omission will result in default HTML error page. Definition below.
        
            * `originTraffic` (`pulumi.Input[bool]`) - Only count traffic that has come from your origin servers. If true, cached items that Cloudflare serve will not count towards rate limiting. Default: `true`.
            * `statuses` (`pulumi.Input[list]`) - HTTP Status codes, can be one [403], many [401,403] or indicate all by not providing this value.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/rate_limit.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["action"] = action
        __props__["bypass_url_patterns"] = bypass_url_patterns
        __props__["correlate"] = correlate
        __props__["description"] = description
        __props__["disabled"] = disabled
        __props__["match"] = match
        __props__["period"] = period
        __props__["threshold"] = threshold
        __props__["zone_id"] = zone_id
        return RateLimit(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

