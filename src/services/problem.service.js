const { sanitizeMarkdownContent } = require('../utils');

class ProblemService{

    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository
    }

    async createProblem(problemData){
        try{
            // 1. Sanitize the problem description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            
            // 2. Create the problem
            const problem = await this.ProblemRepository.createProblem(problemData);
            
            return problem;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = ProblemService;