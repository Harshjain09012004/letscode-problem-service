const express = require('express');
const { problemController } = require('../../controllers');
const problemRouter = express.Router();

problemRouter.get('/',problemController.getAllProblems);
problemRouter.get('/:id',problemController.getProblem);
problemRouter.post('/',problemController.addProblem);
problemRouter.put('/:id',problemController.updateProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.get('/',problemController.pingProblem);

module.exports = problemRouter;