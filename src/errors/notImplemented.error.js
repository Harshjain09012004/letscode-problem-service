const baseError = require( "./base.error" );
const { StatusCodes } = require('http-status-codes');

class notImplementedError extends baseError{
    constructor(methodName){
        super("Not Implemented", StatusCodes.NOT_IMPLEMENTED, `Specified ${methodName} Not Implemented`, {});
    }
}

module.exports = notImplementedError;