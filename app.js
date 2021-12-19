require('dotenv').config();

const polka = require('polka');
const plugins = require('./plugins');
const routes = require('./routes');
const {logInfo} = require('./lib/logger');

const PORT = process.env.PORT || 3000;

function main() {
  const app = polka();

  plugins.setup(app);
  routes.setup(app);

  app.listen(PORT, () => {
    logInfo(`Running on localhost:${PORT}`);
  });
}

main();
