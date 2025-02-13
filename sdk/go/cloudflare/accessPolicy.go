// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare Access Policy resource. Access Policies are used
// in conjunction with Access Applications to restrict access to a
// particular resource.
// 
// ## Conditions
// 
// `require`, `exclude` and `include` arguments share the available
// conditions which can be applied. The conditions are:
// 
// * `ip` - (Optional) A list of IP addresses or ranges. Example:
//   `ip = ["1.2.3.4", "10.0.0.0/2"]`
// * `email` - (Optional) A list of email addresses. Example:
//   `email = ["test@example.com"]`
// * `emailDomain` - (Optional) A list of email domains. Example:
//   `emailDomain = ["example.com"]`
// * `everyone` - (Optional) Boolean indicating permitting access for all
//   requests. Example: `everyone = true`
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/access_policy.html.markdown.
type AccessPolicy struct {
	s *pulumi.ResourceState
}

// NewAccessPolicy registers a new resource with the given unique name, arguments, and options.
func NewAccessPolicy(ctx *pulumi.Context,
	name string, args *AccessPolicyArgs, opts ...pulumi.ResourceOpt) (*AccessPolicy, error) {
	if args == nil || args.ApplicationId == nil {
		return nil, errors.New("missing required argument 'ApplicationId'")
	}
	if args == nil || args.Decision == nil {
		return nil, errors.New("missing required argument 'Decision'")
	}
	if args == nil || args.Includes == nil {
		return nil, errors.New("missing required argument 'Includes'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil || args.ZoneId == nil {
		return nil, errors.New("missing required argument 'ZoneId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applicationId"] = nil
		inputs["decision"] = nil
		inputs["excludes"] = nil
		inputs["includes"] = nil
		inputs["name"] = nil
		inputs["precedence"] = nil
		inputs["requires"] = nil
		inputs["zoneId"] = nil
	} else {
		inputs["applicationId"] = args.ApplicationId
		inputs["decision"] = args.Decision
		inputs["excludes"] = args.Excludes
		inputs["includes"] = args.Includes
		inputs["name"] = args.Name
		inputs["precedence"] = args.Precedence
		inputs["requires"] = args.Requires
		inputs["zoneId"] = args.ZoneId
	}
	s, err := ctx.RegisterResource("cloudflare:index/accessPolicy:AccessPolicy", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AccessPolicy{s: s}, nil
}

// GetAccessPolicy gets an existing AccessPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccessPolicy(ctx *pulumi.Context,
	name string, id pulumi.ID, state *AccessPolicyState, opts ...pulumi.ResourceOpt) (*AccessPolicy, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applicationId"] = state.ApplicationId
		inputs["decision"] = state.Decision
		inputs["excludes"] = state.Excludes
		inputs["includes"] = state.Includes
		inputs["name"] = state.Name
		inputs["precedence"] = state.Precedence
		inputs["requires"] = state.Requires
		inputs["zoneId"] = state.ZoneId
	}
	s, err := ctx.ReadResource("cloudflare:index/accessPolicy:AccessPolicy", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &AccessPolicy{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *AccessPolicy) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *AccessPolicy) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The ID of the application the policy is
// associated with.
func (r *AccessPolicy) ApplicationId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["applicationId"])
}

// Defines the action Access will take if the policy matches the user.
// Allowed values: `allow`, `deny`, `bypass`
func (r *AccessPolicy) Decision() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["decision"])
}

// A series of access conditions, see below for
// full list.
func (r *AccessPolicy) Excludes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["excludes"])
}

// A series of access conditions, see below for
// full list.
func (r *AccessPolicy) Includes() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["includes"])
}

// Friendly name of the Access Application.
func (r *AccessPolicy) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The unique precedence for policies on a single application. Integer.
func (r *AccessPolicy) Precedence() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["precedence"])
}

// A series of access conditions, see below for
// full list.
func (r *AccessPolicy) Requires() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["requires"])
}

// The DNS zone to which the access rule should be
// added.
func (r *AccessPolicy) ZoneId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zoneId"])
}

// Input properties used for looking up and filtering AccessPolicy resources.
type AccessPolicyState struct {
	// The ID of the application the policy is
	// associated with.
	ApplicationId interface{}
	// Defines the action Access will take if the policy matches the user.
	// Allowed values: `allow`, `deny`, `bypass`
	Decision interface{}
	// A series of access conditions, see below for
	// full list.
	Excludes interface{}
	// A series of access conditions, see below for
	// full list.
	Includes interface{}
	// Friendly name of the Access Application.
	Name interface{}
	// The unique precedence for policies on a single application. Integer.
	Precedence interface{}
	// A series of access conditions, see below for
	// full list.
	Requires interface{}
	// The DNS zone to which the access rule should be
	// added.
	ZoneId interface{}
}

// The set of arguments for constructing a AccessPolicy resource.
type AccessPolicyArgs struct {
	// The ID of the application the policy is
	// associated with.
	ApplicationId interface{}
	// Defines the action Access will take if the policy matches the user.
	// Allowed values: `allow`, `deny`, `bypass`
	Decision interface{}
	// A series of access conditions, see below for
	// full list.
	Excludes interface{}
	// A series of access conditions, see below for
	// full list.
	Includes interface{}
	// Friendly name of the Access Application.
	Name interface{}
	// The unique precedence for policies on a single application. Integer.
	Precedence interface{}
	// A series of access conditions, see below for
	// full list.
	Requires interface{}
	// The DNS zone to which the access rule should be
	// added.
	ZoneId interface{}
}
