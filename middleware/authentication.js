const send = require('@polka/send-type');

exports.isRequestAuthenticated = (req, res, next) => {
  // make mandatory checks here
  // next();
  send(res, 401, {
    error: 'Unauthorized Request!',
  });
};
