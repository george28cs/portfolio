const appRoot = require('app-root-path');
const { createLogger, format, transports } = require('winston');
const split = require('split');
// define the custom settings for each transport (file, console)

const logFormat = format.printf((info) => {
  return `REACT APP   |  ${info.level}  |${info.message}`;
});

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: format.combine(
      logFormat
    ),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    format: format.combine(
      format.colorize({ all: true }),
      format.timestamp(),
      logFormat
    ),
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = createLogger({
  transports: [
    new transports.Console(options.console),
    new transports.File(options.file),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream =  split().on('data', function (message) {
  logger.info(message);
});

module.exports = logger;
