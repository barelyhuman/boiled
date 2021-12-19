const send = require('@polka/send-type');

exports.reponseSend = (req, res, next) => {
  res.send = (status, body) => {
    return send(res, status, body);
  };
  next();
};
