// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare Zone resource. Zone is the basic resource for working with Cloudflare and is roughly equivalent to a domain name that the user purchases.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/zone.html.markdown.
type Zone struct {
	s *pulumi.ResourceState
}

// NewZone registers a new resource with the given unique name, arguments, and options.
func NewZone(ctx *pulumi.Context,
	name string, args *ZoneArgs, opts ...pulumi.ResourceOpt) (*Zone, error) {
	if args == nil || args.Zone == nil {
		return nil, errors.New("missing required argument 'Zone'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["jumpStart"] = nil
		inputs["paused"] = nil
		inputs["plan"] = nil
		inputs["type"] = nil
		inputs["zone"] = nil
	} else {
		inputs["jumpStart"] = args.JumpStart
		inputs["paused"] = args.Paused
		inputs["plan"] = args.Plan
		inputs["type"] = args.Type
		inputs["zone"] = args.Zone
	}
	inputs["meta"] = nil
	inputs["nameServers"] = nil
	inputs["status"] = nil
	inputs["vanityNameServers"] = nil
	s, err := ctx.RegisterResource("cloudflare:index/zone:Zone", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Zone{s: s}, nil
}

// GetZone gets an existing Zone resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetZone(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ZoneState, opts ...pulumi.ResourceOpt) (*Zone, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["jumpStart"] = state.JumpStart
		inputs["meta"] = state.Meta
		inputs["nameServers"] = state.NameServers
		inputs["paused"] = state.Paused
		inputs["plan"] = state.Plan
		inputs["status"] = state.Status
		inputs["type"] = state.Type
		inputs["vanityNameServers"] = state.VanityNameServers
		inputs["zone"] = state.Zone
	}
	s, err := ctx.ReadResource("cloudflare:index/zone:Zone", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Zone{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Zone) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Zone) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Boolean of whether to scan for DNS records on creation. Ignored after zone is created. Default: false.
func (r *Zone) JumpStart() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["jumpStart"])
}

func (r *Zone) Meta() *pulumi.Output {
	return r.s.State["meta"]
}

// Cloudflare-assigned name servers. This is only populated for zones that use Cloudflare DNS.
func (r *Zone) NameServers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["nameServers"])
}

// Boolean of whether this zone is paused (traffic bypasses Cloudflare). Default: false.
func (r *Zone) Paused() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["paused"])
}

// The name of the commercial plan to apply to the zone, can be updated once the one is created; one of `free`, `pro`, `business`, `enterprise`.
func (r *Zone) Plan() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["plan"])
}

// Status of the zone. Valid values: `active`, `pending`, `initializing`, `moved`, `deleted`, `deactivated`.
func (r *Zone) Status() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["status"])
}

// A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. Valid values: `full`, `partial`. Default is `full`.
func (r *Zone) Type() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["type"])
}

// List of Vanity Nameservers (if set).
// * `meta.wildcard_proxiable` - Indicates whether wildcard DNS records can receive Cloudflare security and performance features.
// * `meta.phishing_detected` - Indicates if URLs on the zone have been identified as hosting phishing content.
func (r *Zone) VanityNameServers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["vanityNameServers"])
}

// The DNS zone name which will be added.
func (r *Zone) Zone() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["zone"])
}

// Input properties used for looking up and filtering Zone resources.
type ZoneState struct {
	// Boolean of whether to scan for DNS records on creation. Ignored after zone is created. Default: false.
	JumpStart interface{}
	Meta interface{}
	// Cloudflare-assigned name servers. This is only populated for zones that use Cloudflare DNS.
	NameServers interface{}
	// Boolean of whether this zone is paused (traffic bypasses Cloudflare). Default: false.
	Paused interface{}
	// The name of the commercial plan to apply to the zone, can be updated once the one is created; one of `free`, `pro`, `business`, `enterprise`.
	Plan interface{}
	// Status of the zone. Valid values: `active`, `pending`, `initializing`, `moved`, `deleted`, `deactivated`.
	Status interface{}
	// A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. Valid values: `full`, `partial`. Default is `full`.
	Type interface{}
	// List of Vanity Nameservers (if set).
	// * `meta.wildcard_proxiable` - Indicates whether wildcard DNS records can receive Cloudflare security and performance features.
	// * `meta.phishing_detected` - Indicates if URLs on the zone have been identified as hosting phishing content.
	VanityNameServers interface{}
	// The DNS zone name which will be added.
	Zone interface{}
}

// The set of arguments for constructing a Zone resource.
type ZoneArgs struct {
	// Boolean of whether to scan for DNS records on creation. Ignored after zone is created. Default: false.
	JumpStart interface{}
	// Boolean of whether this zone is paused (traffic bypasses Cloudflare). Default: false.
	Paused interface{}
	// The name of the commercial plan to apply to the zone, can be updated once the one is created; one of `free`, `pro`, `business`, `enterprise`.
	Plan interface{}
	// A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup. Valid values: `full`, `partial`. Default is `full`.
	Type interface{}
	// The DNS zone name which will be added.
	Zone interface{}
}
