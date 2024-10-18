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
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}
function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}
function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}
function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
