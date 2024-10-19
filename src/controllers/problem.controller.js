const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const BadRequest = require("../errors/badrequest.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up running" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (err) {
    next(err);
  }
}
async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a desired problem",
      error: {},
      data: problem,
    });
  } catch (err) {
    next(err);
  }
}
async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getAllProblems();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      error: {},
      data: problems,
    });
  } catch (err) {
    next(err);
  }
}
function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("deleteProblems");
  } catch (err) {
    next(err);
  }
}
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("updateProblems");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
