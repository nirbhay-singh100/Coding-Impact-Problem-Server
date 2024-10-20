const winston = require("winston");

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console());
allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    //First arguement to the combine method is defining timestamp
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    // second arguement to the combine defining what eactly is going to be printed
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message} `
    )
  ),

  transports: allowedTransports,
});

module.exports = logger;
