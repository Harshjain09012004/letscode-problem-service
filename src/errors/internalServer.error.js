const baseError = require( "./base.error" );
const { StatusCodes } = require('http-status-codes');

class internalServerError extends baseError{
    constructor(propertyName, details){
        super("Inernal Server Error", StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong !!", details);
    }
}

module.exports = internalServerError;