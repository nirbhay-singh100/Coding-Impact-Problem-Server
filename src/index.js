const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const mongoose = require("mongoose");

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

app.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB");
});
