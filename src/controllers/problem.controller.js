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

async function updateProblem(req,res,next){
    try{
        const result = await newProblemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problems updated successfully',
            error: {},
            data: result,
        })
    }
    catch(err){next(err);}
}

async function deleteProblem(req,res,next){
    try{
        const result = await newProblemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problems deleted successfully',
            error: {},
            data: result,
        })
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
    return res.status(200).json({
        message:"Problem Router working fine!",
        success:true
    });
}

module.exports = {
    addProblem,
    updateProblem,
    deleteProblem, 
    getAllProblems,
    getProblem,
    pingProblem
};