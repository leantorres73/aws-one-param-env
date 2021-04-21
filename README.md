# aws-one-param-env

Module for loading parameter-store values from AWS SSM into environment variables

## Features
* Loads one parameter by path
* Runs synchronously to that environment variables can be set before your code loads
* Can run inside AWS Lambda environment
* AWS Node.js 10.x compatible

## Installation
Install via npm.

	npm install aws-one-param-env --save

**Note**: `aws-one-param-env` does not contain a dependency on `aws-sdk` and it should be installed within your application.

## Getting Started

```js
const awsParamEnv = require( 'aws-one-param-env' );

awsParamEnv.load( '/my-service-path-in-ssm/env' );
```

If your AWS region is not set in your environment variables, then it can be set programmatically by supplying
options when calling `load()`:

```js
const awsParamEnv = require( 'aws-one-param-env' );

awsParamEnv.load( '/my-service-path-in-ssm/env', { region: 'us-east-1' } );
```

To load the environment variables automatically from a path, set the `AWS_SSM_ENV_PATH` to the SSM path and the
`AWS_REGION` to the correct AWS region.

```js
// AWS_SSM_ENV_PATH = '/my-services/service1/env', AWS_REGION='us-east-1'
require( 'aws-one-param-env' );

// environment variables are automatically loaded from the SSM parameter store
```

## License

[BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses)
