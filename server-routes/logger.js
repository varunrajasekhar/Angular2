require('mkdirp').sync('logs') // your log directory

var log4js = require('log4js')

log4js.configure({
  appenders: { error: { type: 'file', filename: 'error.log' } },
  categories: { default: { appenders: ['error'], level: 'error' } },
  replaceConsole: true
})

var logger = log4js.getLogger('error');

logger.level = 'debug';

module.exports = logger;