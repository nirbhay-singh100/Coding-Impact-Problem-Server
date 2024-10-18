const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// if any requests comes and router starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem service is alive" });
});

//last middleware ifany error comes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
