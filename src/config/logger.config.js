const winston = require('winston');
const { LOGGER_DB_URL } = require('./server.config');
require('winston-mongodb')
const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    // First argument for defining the format of timestamp
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // Second argument defines what is going to print in log
    winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
  )
}));

allowedTransports.push(new winston.transports.File({filename: 'error.log', level:'error'}));

allowedTransports.push(new winston.transports.MongoDB({
  db : LOGGER_DB_URL,
  collection : 'logs',
  level : 'error'
}));

const logger = winston.createLogger({
  format: winston.format.combine(
    // First argument for defining the format of timestamp
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // Second argument defines what is going to print in log
    winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  ),
  transports: allowedTransports
});

module.exports = logger;