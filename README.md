# boiled

## About

- Base - [polka](https://github.com/lukeed/polka) , it's fast and small
- DB Connector - [knex](https://github.com/knex/knex), better maintained and easier to extend on
  when needed
- Container - Docker, the app structured and configured to natively run in docker
- DB - Postgres
- Code Style - Prettier (has Husky for pre-commit checks)

## Usage

Either click on use template or use the below command

```sh
npx degit barelyhuman/boiled my-useless-app
```

- Then go ahead and replace the name in package.json
- Go through the structure to understand how it's to be extended and used
- search for `TODO:` throughout the project to find things you need to change
- finally to start, make sure you have docker and docker-compose setup.

```sh
docker-compose up
# or , if you want to force a build on the app
docker-compose up --build
```

## Notes

These are more like things to do to have a smooth dev experience while working with the template, a
cheatsheet maybe

- The `Dockerfile` and `docker-compose.yml` depends on an `.env` file to decide what to do, a dummy
  `.env.template` is available in the repo that gives the basic idea of what you'd put in there but
  is not limited to it.
- `Dockerfile` will decide whether to run in `dev` or `prod` mode based on the `NODE_ENV`
  environment variable so make sure you know what the variables are before running
- The template uses knex to handle migrations, which can be found in `migrations` folder
- Make handlers using the inbuilt util of `createHandler` that can be used for creating reusable
  database dependent functions. You can then use the handle when defining route functions and the
  route function gets assigned to the `routes/index.js`
- use the `plugins/index.js` file to register more plugins into the app, the current involve adding
  the `send` function to `response` object and `db` to `request` (in case you don't wanna use the
  handler approach), and finally a very minimal request logger
- since polka allows registering middleware to url groups, adding middleware to a single route or
  multiple routes can be done in the `routes/index.js`
- All config related stuff should be in the `config/<env>.js` (`<env>` could be `dev` or `prod`) and
  if there's secrets that are needed around the app, use the combination of `.env` and the config to
  distribute these keys to the handlers/controllers

## License

[MIT](LICENSE)
