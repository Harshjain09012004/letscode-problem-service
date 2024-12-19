const { StatusCodes } = require("http-status-codes");
const notImplementedError = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const newProblemService = new ProblemService(new ProblemRepository());

async function addProblem(req,res,next){
    try{
        const problem = await newProblemService.createProblem(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Problem added successfully',
            error: {},
            data: problem,
        })
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