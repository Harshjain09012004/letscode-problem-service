const { problemModel } = require('../models');
const notFoundError = require('../errors/notFound.error');
const logger = require('../config/logger.config');

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem = await problemModel.create({
                uid : problemData.uid,
                title : problemData.title,
                difficulty : problemData.difficulty ? problemData.difficulty : 'easy',
                description : problemData.description,
                testcases : problemData.testcases ? problemData.testcases : [],
                codeStubs : problemData.codeStubs
            });
            return problem;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async getAllProblems(){
        try{
            const problems = await problemModel.find({});
            return problems;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblem(Id){
        try{
            const problem = await problemModel.find({uid : Id});
            console.log(problem);
            if(problem.length==0) throw new notFoundError('Problem',Id);
            else return problem;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async deleteProblem(Id){
        try{
            const result = await problemModel.deleteOne({uid : Id});
            if(result.deletedCount == 0){ 
                logger.error(`Problem with id: ${Id} not found in DB`);
                throw new notFoundError('Problem',Id);
            }
            return result;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async updateProblem(Id, newProperties){
        try{
            const result = await problemModel.updateOne({uid : Id},{$set : newProperties});
            if(result.modifiedCount==0) throw new notFoundError('Problem',Id);
            return result;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = ProblemRepository;