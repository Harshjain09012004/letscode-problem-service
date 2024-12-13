const { StatusCodes } = require("http-status-codes");
const notImplementedError = require('../errors/notImplemented.error');

function addProblem(req,res,next){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

function updateProblem(req,res){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

function deleteProblem(req,res){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

function getProblem(req,res){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

function pingProblem(req,res){
    return res.json({Message:"Problem Router working fine!"});
}

module.exports = {
    addProblem,
    updateProblem,
    deleteProblem, 
    getProblem,
    pingProblem
};