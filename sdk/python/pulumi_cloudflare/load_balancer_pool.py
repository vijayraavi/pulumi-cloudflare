# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class LoadBalancerPool(pulumi.CustomResource):
    check_regions: pulumi.Output[list]
    """
    A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions).
    """
    created_on: pulumi.Output[str]
    """
    The RFC3339 timestamp of when the load balancer was created.
    """
    description: pulumi.Output[str]
    """
    Free text description.
    """
    enabled: pulumi.Output[bool]
    """
    Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
    """
    minimum_origins: pulumi.Output[float]
    """
    The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.
    """
    modified_on: pulumi.Output[str]
    """
    The RFC3339 timestamp of when the load balancer was last modified.
    """
    monitor: pulumi.Output[str]
    """
    The ID of the Monitor to use for health checking origins within this pool.
    """
    name: pulumi.Output[str]
    """
    A human-identifiable name for the origin.
    """
    notification_email: pulumi.Output[str]
    """
    The email address to send health status notifications to. This can be an individual mailbox or a mailing list.
    """
    origins: pulumi.Output[list]
    """
    The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. It's a complex value. See description below.
    """
    def __init__(__self__, resource_name, opts=None, check_regions=None, description=None, enabled=None, minimum_origins=None, monitor=None, name=None, notification_email=None, origins=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare Load Balancer pool resource. This provides a pool of origins that can be used by a Cloudflare Load Balancer. Note that the load balancing feature must be enabled in your Clouflare account before you can use this resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] check_regions: A list of regions (specified by region code) from which to run health checks. Empty means every Cloudflare data center (the default), but requires an Enterprise plan. Region codes can be found [here](https://support.cloudflare.com/hc/en-us/articles/115000540888-Load-Balancing-Geographic-Regions).
        :param pulumi.Input[str] description: Free text description.
        :param pulumi.Input[bool] enabled: Whether to enable (the default) this origin within the Pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.
        :param pulumi.Input[float] minimum_origins: The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and we will failover to the next available pool. Default: 1.
        :param pulumi.Input[str] monitor: The ID of the Monitor to use for health checking origins within this pool.
        :param pulumi.Input[str] name: A human-identifiable name for the origin.
        :param pulumi.Input[str] notification_email: The email address to send health status notifications to. This can be an individual mailbox or a mailing list.
        :param pulumi.Input[list] origins: The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy. It's a complex value. See description below.
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

        __props__['check_regions'] = check_regions

        __props__['description'] = description

        __props__['enabled'] = enabled

        __props__['minimum_origins'] = minimum_origins

        __props__['monitor'] = monitor

        if name is None:
            raise TypeError("Missing required property 'name'")
        __props__['name'] = name

        __props__['notification_email'] = notification_email

        if origins is None:
            raise TypeError("Missing required property 'origins'")
        __props__['origins'] = origins

        __props__['created_on'] = None
        __props__['modified_on'] = None

        super(LoadBalancerPool, __self__).__init__(
            'cloudflare:index/loadBalancerPool:LoadBalancerPool',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

