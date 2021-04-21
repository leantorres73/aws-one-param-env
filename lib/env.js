const awsParamStore = require( 'aws-param-store' );

function getNameValue( param ) {
    const parameter = param.split( '=' );
    return {
        name: parameter[0],
        value: parameter[1]
    };
}

class EnvInitializer {

    paramPath;
    options;

    constructor( paramPath, options ) {
        this.paramPath = paramPath;
        this.options = options;
    }

    execute() {

        const parameter = awsParamStore.getParameterSync(this.paramPath, this.options);

        const results = {
            added: [],
            ignored: [],
            conflict: []
        };

        const parameters = parameter.Value.split('\n');
        
        for( let param of parameters ) {

            let keyPairValue = getNameValue( param );

            if( keyPairValue.value ) {

                if( !process.env[ keyPairValue.name ] ) {

                    process.env[ keyPairValue.name ] = keyPairValue.value;
                    results.added.push( keyPairValue.name );
                }
                else {

                    results.conflict.push( keyPairValue.name );
                }
            }
            else {

                results.ignored.push( keyPairValue.name );
            }
        }

        return results;
    }
}


module.exports = EnvInitializer;
