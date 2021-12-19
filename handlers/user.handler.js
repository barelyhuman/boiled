// keep handlers isolated from actual request response data
// all handlers will have the last parameter as helpers

const {createHandler} = require('../lib/create-handler');

exports.fetchUser = createHandler(async (id, helpers) => {
  //   helpers.db // get db
  const user = await helpers.db('users').where({id: id});
  return user;
});
