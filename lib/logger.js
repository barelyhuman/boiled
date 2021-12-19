const {info, error} = require('./colors');

function logInfo(message) {
  console.log(info('->') + message);
}

function logError(message) {
  console.error('');
  console.error(error(`[Error] ${message}`));
  console.error('');
}

exports.logInfo = logInfo;
exports.logError = logError;
