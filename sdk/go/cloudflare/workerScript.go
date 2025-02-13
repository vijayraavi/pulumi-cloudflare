// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare worker script resource. In order for a script to be active, you'll also need to setup a `.WorkerRoute`.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/worker_script.html.markdown.
type WorkerScript struct {
	s *pulumi.ResourceState
}

// NewWorkerScript registers a new resource with the given unique name, arguments, and options.
func NewWorkerScript(ctx *pulumi.Context,
	name string, args *WorkerScriptArgs, opts ...pulumi.ResourceOpt) (*WorkerScript, error) {
	if args == nil || args.Content == nil {
		return nil, errors.New("missing required argument 'Content'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["content"] = nil
		inputs["name"] = nil
	} else {
		inputs["content"] = args.Content
		inputs["name"] = args.Name
	}
	s, err := ctx.RegisterResource("cloudflare:index/workerScript:WorkerScript", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &WorkerScript{s: s}, nil
}

// GetWorkerScript gets an existing WorkerScript resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkerScript(ctx *pulumi.Context,
	name string, id pulumi.ID, state *WorkerScriptState, opts ...pulumi.ResourceOpt) (*WorkerScript, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["content"] = state.Content
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("cloudflare:index/workerScript:WorkerScript", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &WorkerScript{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *WorkerScript) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *WorkerScript) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The script content.
func (r *WorkerScript) Content() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["content"])
}

// The name for the script.
func (r *WorkerScript) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering WorkerScript resources.
type WorkerScriptState struct {
	// The script content.
	Content interface{}
	// The name for the script.
	Name interface{}
}

// The set of arguments for constructing a WorkerScript resource.
type WorkerScriptArgs struct {
	// The script content.
	Content interface{}
	// The name for the script.
	Name interface{}
}
