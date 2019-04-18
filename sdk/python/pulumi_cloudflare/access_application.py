# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class AccessApplication(pulumi.CustomResource):
    aud: pulumi.Output[str]
    domain: pulumi.Output[str]
    """
    The complete URL of the asset you wish to put
    Cloudflare Access in front of. Can include subdomains or paths. Or both.
    """
    name: pulumi.Output[str]
    """
    Friendly name of the Access Application.
    """
    session_duration: pulumi.Output[str]
    """
    How often a user will be forced to
    re-authorise. Must be one of `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone to which the access rule should be added.
    """
    def __init__(__self__, resource_name, opts=None, domain=None, name=None, session_duration=None, zone_id=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare Access Application resource. Access Applications
        are used to restrict access to a whole application using an
        authorisation gateway managed by Cloudflare.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] domain: The complete URL of the asset you wish to put
               Cloudflare Access in front of. Can include subdomains or paths. Or both.
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[str] session_duration: How often a user will be forced to
               re-authorise. Must be one of `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be added.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if domain is None:
            raise TypeError("Missing required property 'domain'")
        __props__['domain'] = domain

        if name is None:
            raise TypeError("Missing required property 'name'")
        __props__['name'] = name

        __props__['session_duration'] = session_duration

        if zone_id is None:
            raise TypeError("Missing required property 'zone_id'")
        __props__['zone_id'] = zone_id

        __props__['aud'] = None

        super(AccessApplication, __self__).__init__(
            'cloudflare:index/accessApplication:AccessApplication',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

