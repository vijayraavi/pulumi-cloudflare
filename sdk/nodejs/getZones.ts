// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to look up [Zone][1] records.
 * 
 * ## Example Usage
 * 
 * The example below matches all `active` zones that begin with `example.` and are not paused. The matched zones are then
 * locked down using the `cloudflare..ZoneLockdown` resource.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as cloudflare from "@pulumi/cloudflare";
 * 
 * const test = cloudflare.getZones({
 *     filter: {
 *         name: "example.*",
 *         paused: false,
 *         status: "active",
 *     },
 * });
 * const endpointLockdown = new cloudflare.ZoneLockdown("endpointLockdown", {
 *     configurations: [{
 *         target: "ip",
 *         value: "198.51.100.4",
 *     }],
 *     description: "Restrict access to these endpoints to requests from a known IP address",
 *     paused: false,
 *     urls: ["api.mysite.com/some/endpoint*"],
 *     zone: (<any>test.zones[0])["name"],
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/d/zones.html.markdown.
 */
export function getZones(args: GetZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetZonesResult> & GetZonesResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetZonesResult> = pulumi.runtime.invoke("cloudflare:index/getZones:getZones", {
        "filter": args.filter,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getZones.
 */
export interface GetZonesArgs {
    readonly filter: inputs.GetZonesFilter;
}

/**
 * A collection of values returned by getZones.
 */
export interface GetZonesResult {
    readonly filter: outputs.GetZonesFilter;
    readonly zones: outputs.GetZonesZone[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
