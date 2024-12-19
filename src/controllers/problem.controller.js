const { StatusCodes } = require("http-status-codes");
const notImplementedError = require('../errors/notImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const newProblemService = new ProblemService(new ProblemRepository());

async function addProblem(req,res,next){
    try{
        const problem = await newProblemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Problem added successfully',
            error: {},
            data: problem,
        })
    }
    catch(err){next(err);}
}

function updateProblem(req,res,next){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

function deleteProblem(req,res,next){
    try{
        throw new notImplementedError('Add Problem');
    }
    catch(err){next(err);}
}

async function getAllProblems(req,res,next){
    try{
        const problems = await newProblemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problems fetched successfully',
            error: {},
            data: problems,
        })
    }
    catch(err){next(err);}
}

async function getProblem(req,res,next){
    try{
        const problem = await newProblemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: `Problem ${req.params.id} fetched successfully`,
            error: {},
            data: problem,
        })
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
    getAllProblems,
    getProblem,
    pingProblem
};