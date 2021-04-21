'use strict';

const awsParamEnv = require( '../lib' /*'aws-one-param-env'*/ );

awsParamEnv.load( '/service-path/env', { region: 'us-east-1' } );

console.log( process.env );
