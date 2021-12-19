exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    // set a primary incremental unique key
    table.increments().primary().unique();
    table.string('name').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
