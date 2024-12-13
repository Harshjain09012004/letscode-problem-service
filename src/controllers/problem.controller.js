import { StatusCodes } from "http-status-codes";

function addProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented"
    });
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