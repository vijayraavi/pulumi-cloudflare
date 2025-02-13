# Cloudflare Provider

The Cloudflare resource provider for Pulumi lets you use Cloudflare resources
in your cloud programs. To use this package, please [install the Pulumi CLI
first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/cloudflare

or `yarn`:

    $ yarn add @pulumi/cloudflare

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_cloudflare

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-cloudflare/sdk/go/...
    
## Configuration

The following configuration points are available:

- `cloudflare:email` - (Optional) The email associated with the account. May be set via the `CLOUDFLARE_EMAIL` environment variable.
- `cloudflare:apiKey` - (Optional) The Cloudflare API key. May be set via the `CLOUDFLARE_API_KEY` environment variable. 
- `cloudflare:apiToken` - (Optional) The Cloudflare API Token. May be set via the `c` environment variable. This is an alternative to `email` + `apiKey`. If both are specified, `apiToken` will be used over `email` + `apiKey` fields
- `cloudflare:accountId` - (Optional) Configure API client with this account ID, so calls use the account API rather than the (default) user API. This is required for other users in your account to have access to the resources you manage. May be set via the `CLOUDFLARE_ACCOUNT_ID` environment variable.
- `cloudflare:rps` - (Optional) RPS limit to apply when making calls to the API. Default: `4`. May be set via the `CLOUDFLARE_RPS` environment variable.
- `cloudflare:retries` - (Optional) Maximum number of retries to perform when an API request fails. Default: `3`. May be set via the `CLOUDFLARE_RETRIES` environment variable.
- `cloudflare:minBackoff` - (Optional) Minimum backoff period in seconds after failed API calls. Default: `1`. May be set via the `CLOUDFLARE_MIN_BACKOFF` environment variable.
- `cloudflare:minBackoff` - (Optional) Maximum backoff period in seconds after failed API calls. Default: `30`. May be set via the `CLOUDFLARE_MAX_BACKOFF` environment variable.
- `cloudflare:apiClientLogging` - (Optional) Whether to print logs from the API client (using the default log library logger). Default: `false`. May be set via the `CLOUDFLARE_API_CLIENT_LOGGING` environment variable.

## Reference

For detailed reference documentation, please visit [the API docs][1].


[1]: https://pulumi.io/reference/pkg/nodejs/@pulumi/cloudflare/index.html
