const {requestLogger} = require('../middleware/request-logger');
const {requestDB} = require('./response-db');
const {reponseSend} = require('./response-send');

exports.setup = app => {
  // add in global plugins | middleware
  app.use(reponseSend, requestDB, requestLogger);
};
