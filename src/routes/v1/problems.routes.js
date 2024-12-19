const express = require('express');
const { problemController } = require('../../controllers');
const problemRouter = express.Router();

problemRouter.get('/',problemController.getProblems);
problemRouter.post('/',problemController.addProblem);
problemRouter.put('/:id',problemController.updateProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.get('/',problemController.pingProblem);

module.exports = problemRouter;