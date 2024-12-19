const baseError = require( "./base.error" );
const { StatusCodes } = require('http-status-codes');

class notFoundError extends baseError{
    constructor(resourceName, resourceValue){
        super("Not Found", StatusCodes.NOT_FOUND, `Data associated with resource:${resourceName} with value:${resourceValue} Not Found`, {});
    }
}

module.exports = notFoundError;