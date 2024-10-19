const { sanitizeMarkdownContent } = require("../utils/");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      console.log("Problem data at service: ", problemData);

      const problem = await this.problemRepository.createProblem(problemData);

      console.log("Problem created", problem);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
