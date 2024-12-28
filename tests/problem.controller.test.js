const problemController = require('../src/controllers/problem.controller');
const ProblemService = require("../src/services/problem.service");
const { StatusCodes } = require("http-status-codes");

jest.mock("../src/services/problem.service");

describe("Tests for Problem Controller API", ()=>{

    beforeEach(()=>{
        req = {};
        res = {
            status: jest.fn(),
            json: jest.fn()
        };
        next = jest.fn();
    })
    
    test("GetAllProblems API should return all problems", async ()=>{
        const problems = [];
        ProblemService.prototype.getAllProblems.mockResolvedValue(problems);

        await problemController.getAllProblems(req,res,next);

        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        // expect(res.json).toHaveBeenCalledTimes(1);
    });

    test("GetProblem API should return specified problem", async ()=>{
        const problem = {}; req.params = {id : 1234};
        ProblemService.prototype.getProblem.mockResolvedValue(problem);

        await problemController.getProblem(req,res,next);

        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(ProblemService.prototype.getProblem).toHaveBeenCalledTimes(1);
        // expect(res.json).toHaveBeenCalledTimes(1);
    });

    test("GetProblem API should call next if error occurs", async ()=>{
        req.params = {id : 1234};
        const mockError = new Error('Problem Not Found');
        ProblemService.prototype.getProblem.mockRejectedValue(mockError);

        await problemController.getProblem(req,res,next);

        expect(next).toHaveBeenCalledTimes(1);
        expect(next).toHaveBeenCalledWith(mockError);
        expect(res.status).not.toHaveBeenCalled();
        // expect(res.json).not.toHaveBeenCalled();
    });

    test("AddProblem API should create a problem", async ()=>{
        const problem = {}; req.body = {};
        ProblemService.prototype.createProblem.mockResolvedValue(problem);

        await problemController.addProblem(req,res,next);

        expect(res.status).toHaveBeenCalledWith(StatusCodes.CREATED);
        // expect(next).not.toHaveBeenCalled();
        // expect(res.json).toHaveBeenCalledTimes(1);
    });

})