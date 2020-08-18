const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "MM-YY-DD HH:mm:ss" }),
    format.json()
  ),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
    new transports.File({ filename: "./logs/combined.log" }),
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV === "production") {
  logger.add(
    new transports.Console({
      level: "error",
      format: format.simple(),
    })
  );
}

module.exports = logger;
