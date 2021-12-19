const {fetchUser} = require('../handlers/user.handler');
const {logError} = require('../lib/logger');

exports.fetchUserRoute = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await fetchUser(id);
    res.send(200, {data});
  } catch (err) {
    logError(err);
    res.send(500, {error: 'Oops! Something went wrong...'});
  }
};
