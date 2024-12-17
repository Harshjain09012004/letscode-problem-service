//4 parameters in a middleware function makes it 
//a error handler middleware means it will be invoked in case of error only

const { StatusCodes } = require('http-status-codes');
const baseError = require('../errors/base.error');

function errorHandler(err, req, res, next){
    if(err instanceof baseError){
        return res.status(err.statusCode).json({
            success : false,
            message : err.message,
            details : err.details,
            data : {}
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success : false,
        message : "Unkown Error Occured",
        details : err,
        data : {}
    });
}

module.exports = errorHandler;