const {error, success, info} = require('../lib/colors');
const {logInfo} = require('../lib/logger');

exports.requestLogger = (req, res, next) => {
  const requestURL = req.url;

  next();

  let statusCode = res.statusCode;
  if (statusCode >= 400) {
    statusCode = error(statusCode);
  } else {
    statusCode = success(statusCode);
  }

  const openBrack = info(`[${req.method}`);
  const closeBrack = info(`]`);

  logInfo(`${openBrack}${statusCode}${closeBrack} ${requestURL}`);
};
