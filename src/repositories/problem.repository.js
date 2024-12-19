const { problemModel } = require('../models');

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem = await problemModel.create({
                uid : problemData.uid,
                title : problemData.title,
                difficulty : problemData.difficulty ? problemData.difficulty : 'easy',
                description : problemData.description,
                testcases : problemData.testcases ? problemData.testcases : []
            });
            return problem;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }

    async getProblems(){
        try{
            const problems = await problemModel.find({});
            return problems;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = ProblemRepository;