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

    async getProblems(){
        const problems = await this.ProblemRepository.getProblems();
        
        return problems;
    }
}

module.exports = ProblemService;