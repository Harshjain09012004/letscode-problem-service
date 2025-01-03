const { sanitizeMarkdownContent } = require('../utils');

class ProblemService{

    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository
    }

    async createProblem(problemData){
        // 1. Sanitize the problem description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        
        // 2. Create the problem
        const problem = await this.ProblemRepository.createProblem(problemData);
        
        return problem;
    }

    async getAllProblems(){
        const problems = await this.ProblemRepository.getAllProblems();
        
        return problems;
    }

    async getProblem(Id){
        const problem = await this.ProblemRepository.getProblem(Id);
        
        return problem;
    }

    async deleteProblem(Id){
        const result = await this.ProblemRepository.deleteProblem(Id);
        
        return result;
    }

    async updateProblem(Id, newProperties){
        // 1. Sanitize the problem description (If Exists)
        if(newProperties.description){
            newProperties.description = sanitizeMarkdownContent(newProperties.description);
        }

        const result = await this.ProblemRepository.updateProblem(Id, newProperties);
        
        return result;
    }
}

module.exports = ProblemService;