const db = require('../db');

exports.requestDB = (req, res, next) => {
  req.db = db.setup();
  next();
};
