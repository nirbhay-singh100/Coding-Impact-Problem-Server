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
    //incoming data
    console.log("incoming req body", req.body);

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
function getProblem(req, res) {
  try {
    throw new NotImplemented("getProblem");
  } catch (err) {
    next(err);
  }
}
function getProblems(req, res) {
  try {
    throw new NotImplemented("getProblems");
  } catch (err) {
    next(err);
  }
}
function deleteProblem(req, res) {
  try {
    throw new NotImplemented("deleteProblems");
  } catch (err) {
    next(err);
  }
}
function updateProblem(req, res) {
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
