// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a Cloudflare Load Balancer resource. This sits in front of a number of defined pools of origins and provides various options for geographically-aware load balancing. Note that the load balancing feature must be enabled in your Clouflare account before you can use this resource.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/load_balancer.html.markdown.
 */
export class LoadBalancer extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerState, opts?: pulumi.CustomResourceOptions): LoadBalancer {
        return new LoadBalancer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/loadBalancer:LoadBalancer';

    /**
     * Returns true if the given object is an instance of LoadBalancer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancer.__pulumiType;
    }

    /**
     * The RFC3339 timestamp of when the load balancer was created.
     */
    public /*out*/ readonly createdOn!: pulumi.Output<string>;
    /**
     * A list of pool IDs ordered by their failover priority. Used whenever region/pop pools are not defined.
     */
    public readonly defaultPoolIds!: pulumi.Output<string[]>;
    /**
     * Free text description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enable or disable the load balancer. Defaults to `true` (enabled).
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The pool ID to use when all other pools are detected as unhealthy.
     */
    public readonly fallbackPoolId!: pulumi.Output<string>;
    /**
     * The RFC3339 timestamp of when the load balancer was last modified.
     */
    public /*out*/ readonly modifiedOn!: pulumi.Output<string>;
    /**
     * The DNS name (FQDN, including the zone) to associate with the load balancer.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A set containing mappings of Cloudflare Point-of-Presence (PoP) identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). This feature is only available to enterprise customers. Fields documented below.
     */
    public readonly popPools!: pulumi.Output<outputs.LoadBalancerPopPool[]>;
    /**
     * Whether the hostname gets Cloudflare's origin protection. Defaults to `false`.
     */
    public readonly proxied!: pulumi.Output<boolean | undefined>;
    /**
     * A set containing mappings of region/country codes to a list of pool IDs (ordered by their failover priority) for the given region. Fields documented below.
     */
    public readonly regionPools!: pulumi.Output<outputs.LoadBalancerRegionPool[]>;
    /**
     * Associates all requests coming from an end-user with a single origin. Cloudflare will set a cookie on the initial response to the client, such that consequent requests with the cookie in the request will go to the same origin, so long as it is available.
     */
    public readonly sessionAffinity!: pulumi.Output<string | undefined>;
    /**
     * Determine which method the load balancer uses to determine the fastest route to your origin. Valid values  are: `"off"`, `"geo"`, `"dynamicLatency"`, `"random"` or `""`. Default is `""`.
     */
    public readonly steeringPolicy!: pulumi.Output<string>;
    /**
     * Time to live (TTL) of this load balancer's DNS `name`. Conflicts with `proxied` - this cannot be set for proxied load balancers. Default is `30`.
     */
    public readonly ttl!: pulumi.Output<number>;
    /**
     * The zone ID to add the load balancer to.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a LoadBalancer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalancerArgs | LoadBalancerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as LoadBalancerState | undefined;
            inputs["createdOn"] = state ? state.createdOn : undefined;
            inputs["defaultPoolIds"] = state ? state.defaultPoolIds : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["fallbackPoolId"] = state ? state.fallbackPoolId : undefined;
            inputs["modifiedOn"] = state ? state.modifiedOn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["popPools"] = state ? state.popPools : undefined;
            inputs["proxied"] = state ? state.proxied : undefined;
            inputs["regionPools"] = state ? state.regionPools : undefined;
            inputs["sessionAffinity"] = state ? state.sessionAffinity : undefined;
            inputs["steeringPolicy"] = state ? state.steeringPolicy : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as LoadBalancerArgs | undefined;
            if (!args || args.defaultPoolIds === undefined) {
                throw new Error("Missing required property 'defaultPoolIds'");
            }
            if (!args || args.fallbackPoolId === undefined) {
                throw new Error("Missing required property 'fallbackPoolId'");
            }
            if (!args || args.name === undefined) {
                throw new Error("Missing required property 'name'");
            }
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["defaultPoolIds"] = args ? args.defaultPoolIds : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["fallbackPoolId"] = args ? args.fallbackPoolId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["popPools"] = args ? args.popPools : undefined;
            inputs["proxied"] = args ? args.proxied : undefined;
            inputs["regionPools"] = args ? args.regionPools : undefined;
            inputs["sessionAffinity"] = args ? args.sessionAffinity : undefined;
            inputs["steeringPolicy"] = args ? args.steeringPolicy : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
            inputs["createdOn"] = undefined /*out*/;
            inputs["modifiedOn"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(LoadBalancer.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancer resources.
 */
export interface LoadBalancerState {
    /**
     * The RFC3339 timestamp of when the load balancer was created.
     */
    readonly createdOn?: pulumi.Input<string>;
    /**
     * A list of pool IDs ordered by their failover priority. Used whenever region/pop pools are not defined.
     */
    readonly defaultPoolIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Free text description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Enable or disable the load balancer. Defaults to `true` (enabled).
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The pool ID to use when all other pools are detected as unhealthy.
     */
    readonly fallbackPoolId?: pulumi.Input<string>;
    /**
     * The RFC3339 timestamp of when the load balancer was last modified.
     */
    readonly modifiedOn?: pulumi.Input<string>;
    /**
     * The DNS name (FQDN, including the zone) to associate with the load balancer.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A set containing mappings of Cloudflare Point-of-Presence (PoP) identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). This feature is only available to enterprise customers. Fields documented below.
     */
    readonly popPools?: pulumi.Input<pulumi.Input<inputs.LoadBalancerPopPool>[]>;
    /**
     * Whether the hostname gets Cloudflare's origin protection. Defaults to `false`.
     */
    readonly proxied?: pulumi.Input<boolean>;
    /**
     * A set containing mappings of region/country codes to a list of pool IDs (ordered by their failover priority) for the given region. Fields documented below.
     */
    readonly regionPools?: pulumi.Input<pulumi.Input<inputs.LoadBalancerRegionPool>[]>;
    /**
     * Associates all requests coming from an end-user with a single origin. Cloudflare will set a cookie on the initial response to the client, such that consequent requests with the cookie in the request will go to the same origin, so long as it is available.
     */
    readonly sessionAffinity?: pulumi.Input<string>;
    /**
     * Determine which method the load balancer uses to determine the fastest route to your origin. Valid values  are: `"off"`, `"geo"`, `"dynamicLatency"`, `"random"` or `""`. Default is `""`.
     */
    readonly steeringPolicy?: pulumi.Input<string>;
    /**
     * Time to live (TTL) of this load balancer's DNS `name`. Conflicts with `proxied` - this cannot be set for proxied load balancers. Default is `30`.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The zone ID to add the load balancer to.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalancer resource.
 */
export interface LoadBalancerArgs {
    /**
     * A list of pool IDs ordered by their failover priority. Used whenever region/pop pools are not defined.
     */
    readonly defaultPoolIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Free text description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Enable or disable the load balancer. Defaults to `true` (enabled).
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The pool ID to use when all other pools are detected as unhealthy.
     */
    readonly fallbackPoolId: pulumi.Input<string>;
    /**
     * The DNS name (FQDN, including the zone) to associate with the load balancer.
     */
    readonly name: pulumi.Input<string>;
    /**
     * A set containing mappings of Cloudflare Point-of-Presence (PoP) identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). This feature is only available to enterprise customers. Fields documented below.
     */
    readonly popPools?: pulumi.Input<pulumi.Input<inputs.LoadBalancerPopPool>[]>;
    /**
     * Whether the hostname gets Cloudflare's origin protection. Defaults to `false`.
     */
    readonly proxied?: pulumi.Input<boolean>;
    /**
     * A set containing mappings of region/country codes to a list of pool IDs (ordered by their failover priority) for the given region. Fields documented below.
     */
    readonly regionPools?: pulumi.Input<pulumi.Input<inputs.LoadBalancerRegionPool>[]>;
    /**
     * Associates all requests coming from an end-user with a single origin. Cloudflare will set a cookie on the initial response to the client, such that consequent requests with the cookie in the request will go to the same origin, so long as it is available.
     */
    readonly sessionAffinity?: pulumi.Input<string>;
    /**
     * Determine which method the load balancer uses to determine the fastest route to your origin. Valid values  are: `"off"`, `"geo"`, `"dynamicLatency"`, `"random"` or `""`. Default is `""`.
     */
    readonly steeringPolicy?: pulumi.Input<string>;
    /**
     * Time to live (TTL) of this load balancer's DNS `name`. Conflicts with `proxied` - this cannot be set for proxied load balancers. Default is `30`.
     */
    readonly ttl?: pulumi.Input<number>;
    /**
     * The zone ID to add the load balancer to.
     */
    readonly zoneId: pulumi.Input<string>;
}
