const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const BadRequest = require("../errors/badrequest.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up running" });
}
function addProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
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
