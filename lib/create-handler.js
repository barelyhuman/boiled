const db = require('../db');

function createHandler(fn) {
  const helpers = getHelpers();
  return (...args) => {
    fn.call(null, ...args, helpers);
  };
}

function getHelpers() {
  return {db: db.setup()};
}

exports.createHandler = createHandler;
