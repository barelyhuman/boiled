const {isRequestAuthenticated} = require('../middleware/authentication');
const {fetchUserRoute} = require('./user.route');

exports.setup = app => {
  // set all routes starting with `/private` to have the authentication check
  getPublicRoutes(app);
  getPrivateRoutes(app);
};

function getPublicRoutes(app) {
  //   Public routes
  app.get('/ping', (req, res) => {
    res.send(200, {ping: true});
  });
}

function getPrivateRoutes(app) {
  // register the route as private, dont have to register sub routes as private
  // the function will register `/private/**/*` as private routes needing authentication or
  // any other guards that you might add
  registerPrivateRoute(app, '/private');
  app.get('/private', (req, res) => {
    res.send(200, {private: true});
  });

  registerPrivateRoute(app, '/another-private');
  app.get('/another-private', (req, res) => {
    res.send(200, {private: true});
  });

  // registerPrivateRoute(app, '/user');
  app.get('/user/:id', fetchUserRoute);
}

function registerPrivateRoute(app, route) {
  app.use(route, isRequestAuthenticated);
}
