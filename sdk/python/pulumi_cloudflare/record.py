# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Record(pulumi.CustomResource):
    created_on: pulumi.Output[str]
    """
    The RFC3339 timestamp of when the record was created
    """
    data: pulumi.Output[dict]
    """
    Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
    
      * `algorithm` (`float`)
      * `altitude` (`float`)
      * `certificate` (`str`)
      * `content` (`str`)
      * `digest` (`str`)
      * `digest_type` (`float`)
      * `fingerprint` (`str`)
      * `flags` (`str`)
      * `key_tag` (`float`)
      * `lat_degrees` (`float`)
      * `lat_direction` (`str`)
      * `lat_minutes` (`float`)
      * `lat_seconds` (`float`)
      * `long_degrees` (`float`)
      * `long_direction` (`str`)
      * `long_minutes` (`float`)
      * `long_seconds` (`float`)
      * `matching_type` (`float`)
      * `name` (`str`) - The name of the record
      * `order` (`float`)
      * `port` (`float`)
      * `precision_horz` (`float`)
      * `precision_vert` (`float`)
      * `preference` (`float`)
      * `priority` (`float`) - The priority of the record
      * `proto` (`str`)
      * `protocol` (`float`)
      * `public_key` (`str`)
      * `regex` (`str`)
      * `replacement` (`str`)
      * `selector` (`float`)
      * `service` (`str`)
      * `size` (`float`)
      * `target` (`str`)
      * `type` (`float`) - The type of the record
      * `usage` (`float`)
      * `weight` (`float`)
    """
    hostname: pulumi.Output[str]
    """
    The FQDN of the record
    """
    metadata: pulumi.Output[dict]
    """
    A key-value map of string metadata Cloudflare associates with the record
    """
    modified_on: pulumi.Output[str]
    """
    The RFC3339 timestamp of when the record was last modified
    """
    name: pulumi.Output[str]
    """
    The name of the record
    """
    priority: pulumi.Output[float]
    """
    The priority of the record
    """
    proxiable: pulumi.Output[bool]
    """
    Shows whether this record can be proxied, must be true if setting `proxied=true`
    """
    proxied: pulumi.Output[bool]
    """
    Whether the record gets Cloudflare's origin protection; defaults to `false`.
    """
    ttl: pulumi.Output[float]
    """
    The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
    """
    type: pulumi.Output[str]
    """
    The type of the record
    """
    value: pulumi.Output[str]
    """
    The (string) value of the record. Either this or `data` must be specified
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone ID to add the record to
    """
    def __init__(__self__, resource_name, opts=None, data=None, name=None, priority=None, proxied=None, ttl=None, type=None, value=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare record resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] data: Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
        :param pulumi.Input[str] name: The name of the record
        :param pulumi.Input[float] priority: The priority of the record
        :param pulumi.Input[bool] proxied: Whether the record gets Cloudflare's origin protection; defaults to `false`.
        :param pulumi.Input[float] ttl: The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
        :param pulumi.Input[str] type: The type of the record
        :param pulumi.Input[str] value: The (string) value of the record. Either this or `data` must be specified
        :param pulumi.Input[str] zone_id: The DNS zone ID to add the record to
        
        The **data** object supports the following:
        
          * `algorithm` (`pulumi.Input[float]`)
          * `altitude` (`pulumi.Input[float]`)
          * `certificate` (`pulumi.Input[str]`)
          * `content` (`pulumi.Input[str]`)
          * `digest` (`pulumi.Input[str]`)
          * `digest_type` (`pulumi.Input[float]`)
          * `fingerprint` (`pulumi.Input[str]`)
          * `flags` (`pulumi.Input[str]`)
          * `key_tag` (`pulumi.Input[float]`)
          * `lat_degrees` (`pulumi.Input[float]`)
          * `lat_direction` (`pulumi.Input[str]`)
          * `lat_minutes` (`pulumi.Input[float]`)
          * `lat_seconds` (`pulumi.Input[float]`)
          * `long_degrees` (`pulumi.Input[float]`)
          * `long_direction` (`pulumi.Input[str]`)
          * `long_minutes` (`pulumi.Input[float]`)
          * `long_seconds` (`pulumi.Input[float]`)
          * `matching_type` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the record
          * `order` (`pulumi.Input[float]`)
          * `port` (`pulumi.Input[float]`)
          * `precision_horz` (`pulumi.Input[float]`)
          * `precision_vert` (`pulumi.Input[float]`)
          * `preference` (`pulumi.Input[float]`)
          * `priority` (`pulumi.Input[float]`) - The priority of the record
          * `proto` (`pulumi.Input[str]`)
          * `protocol` (`pulumi.Input[float]`)
          * `public_key` (`pulumi.Input[str]`)
          * `regex` (`pulumi.Input[str]`)
          * `replacement` (`pulumi.Input[str]`)
          * `selector` (`pulumi.Input[float]`)
          * `service` (`pulumi.Input[str]`)
          * `size` (`pulumi.Input[float]`)
          * `target` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[float]`) - The type of the record
          * `usage` (`pulumi.Input[float]`)
          * `weight` (`pulumi.Input[float]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/record.html.markdown.
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

            __props__['data'] = data
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['priority'] = priority
            __props__['proxied'] = proxied
            __props__['ttl'] = ttl
            if type is None:
                raise TypeError("Missing required property 'type'")
            __props__['type'] = type
            __props__['value'] = value
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
            __props__['created_on'] = None
            __props__['hostname'] = None
            __props__['metadata'] = None
            __props__['modified_on'] = None
            __props__['proxiable'] = None
        super(Record, __self__).__init__(
            'cloudflare:index/record:Record',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, created_on=None, data=None, hostname=None, metadata=None, modified_on=None, name=None, priority=None, proxiable=None, proxied=None, ttl=None, type=None, value=None, zone_id=None):
        """
        Get an existing Record resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] created_on: The RFC3339 timestamp of when the record was created
        :param pulumi.Input[dict] data: Map of attributes that constitute the record value. Primarily used for LOC and SRV record types. Either this or `value` must be specified
        :param pulumi.Input[str] hostname: The FQDN of the record
        :param pulumi.Input[dict] metadata: A key-value map of string metadata Cloudflare associates with the record
        :param pulumi.Input[str] modified_on: The RFC3339 timestamp of when the record was last modified
        :param pulumi.Input[str] name: The name of the record
        :param pulumi.Input[float] priority: The priority of the record
        :param pulumi.Input[bool] proxiable: Shows whether this record can be proxied, must be true if setting `proxied=true`
        :param pulumi.Input[bool] proxied: Whether the record gets Cloudflare's origin protection; defaults to `false`.
        :param pulumi.Input[float] ttl: The TTL of the record ([automatic: '1'](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record))
        :param pulumi.Input[str] type: The type of the record
        :param pulumi.Input[str] value: The (string) value of the record. Either this or `data` must be specified
        :param pulumi.Input[str] zone_id: The DNS zone ID to add the record to
        
        The **data** object supports the following:
        
          * `algorithm` (`pulumi.Input[float]`)
          * `altitude` (`pulumi.Input[float]`)
          * `certificate` (`pulumi.Input[str]`)
          * `content` (`pulumi.Input[str]`)
          * `digest` (`pulumi.Input[str]`)
          * `digest_type` (`pulumi.Input[float]`)
          * `fingerprint` (`pulumi.Input[str]`)
          * `flags` (`pulumi.Input[str]`)
          * `key_tag` (`pulumi.Input[float]`)
          * `lat_degrees` (`pulumi.Input[float]`)
          * `lat_direction` (`pulumi.Input[str]`)
          * `lat_minutes` (`pulumi.Input[float]`)
          * `lat_seconds` (`pulumi.Input[float]`)
          * `long_degrees` (`pulumi.Input[float]`)
          * `long_direction` (`pulumi.Input[str]`)
          * `long_minutes` (`pulumi.Input[float]`)
          * `long_seconds` (`pulumi.Input[float]`)
          * `matching_type` (`pulumi.Input[float]`)
          * `name` (`pulumi.Input[str]`) - The name of the record
          * `order` (`pulumi.Input[float]`)
          * `port` (`pulumi.Input[float]`)
          * `precision_horz` (`pulumi.Input[float]`)
          * `precision_vert` (`pulumi.Input[float]`)
          * `preference` (`pulumi.Input[float]`)
          * `priority` (`pulumi.Input[float]`) - The priority of the record
          * `proto` (`pulumi.Input[str]`)
          * `protocol` (`pulumi.Input[float]`)
          * `public_key` (`pulumi.Input[str]`)
          * `regex` (`pulumi.Input[str]`)
          * `replacement` (`pulumi.Input[str]`)
          * `selector` (`pulumi.Input[float]`)
          * `service` (`pulumi.Input[str]`)
          * `size` (`pulumi.Input[float]`)
          * `target` (`pulumi.Input[str]`)
          * `type` (`pulumi.Input[float]`) - The type of the record
          * `usage` (`pulumi.Input[float]`)
          * `weight` (`pulumi.Input[float]`)

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/record.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["created_on"] = created_on
        __props__["data"] = data
        __props__["hostname"] = hostname
        __props__["metadata"] = metadata
        __props__["modified_on"] = modified_on
        __props__["name"] = name
        __props__["priority"] = priority
        __props__["proxiable"] = proxiable
        __props__["proxied"] = proxied
        __props__["ttl"] = ttl
        __props__["type"] = type
        __props__["value"] = value
        __props__["zone_id"] = zone_id
        return Record(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

