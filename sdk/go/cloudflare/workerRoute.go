// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare worker route resource. A route will also require a `.WorkerScript`.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/worker_route.html.markdown.
type WorkerRoute struct {
	s *pulumi.ResourceState
}

// NewWorkerRoute registers a new resource with the given unique name, arguments, and options.
func NewWorkerRoute(ctx *pulumi.Context,
	name string, args *WorkerRouteArgs, opts ...pulumi.ResourceOpt) (*WorkerRoute, error) {
	if args == nil || args.Pattern == nil {
		return nil, errors.New("missing required argument 'Pattern'")
	}
	if args == nil || args.ZoneId == nil {
		return nil, errors.New("missing required argument 'ZoneId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["pattern"] = nil
		inputs["scriptName"] = nil
		inputs["zoneId"] = nil
	} else {
		inputs["pattern"] = args.Pattern
		inputs["scriptName"] = args.ScriptName
		inputs["zoneId"] = args.ZoneId
	}
	s, err := ctx.RegisterResource("cloudflare:index/workerRoute:WorkerRoute", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &WorkerRoute{s: s}, nil
}

// GetWorkerRoute gets an existing WorkerRoute resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkerRoute(ctx *pulumi.Context,
	name string, id pulumi.ID, state *WorkerRouteState, opts ...pulumi.ResourceOpt) (*WorkerRoute, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["pattern"] = state.Pattern
		inputs["scriptName"] = state.ScriptName
		inputs["zoneId"] = state.ZoneId
	}
	s, err := ctx.ReadResource("cloudflare:index/workerRoute:WorkerRoute", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &WorkerRoute{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *WorkerRoute) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *WorkerRoute) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The [route pattern](https://developers.cloudflare.com/workers/about/routes/)
// * `scriptName` Which worker script to run for requests that match the route pattern. If `scriptName` is empty, workers will be skipped for matching requests.
func (r *WorkerRoute) Pattern() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["pattern"])
}

func (r *WorkerRoute) ScriptName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["scriptName"])
}

// The zone ID to add the route to.
func (r *WorkerRoute) ZoneId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zoneId"])
}

// Input properties used for looking up and filtering WorkerRoute resources.
type WorkerRouteState struct {
	// The [route pattern](https://developers.cloudflare.com/workers/about/routes/)
	// * `scriptName` Which worker script to run for requests that match the route pattern. If `scriptName` is empty, workers will be skipped for matching requests.
	Pattern interface{}
	ScriptName interface{}
	// The zone ID to add the route to.
	ZoneId interface{}
}

// The set of arguments for constructing a WorkerRoute resource.
type WorkerRouteArgs struct {
	// The [route pattern](https://developers.cloudflare.com/workers/about/routes/)
	// * `scriptName` Which worker script to run for requests that match the route pattern. If `scriptName` is empty, workers will be skipped for matching requests.
	Pattern interface{}
	ScriptName interface{}
	// The zone ID to add the route to.
	ZoneId interface{}
}
