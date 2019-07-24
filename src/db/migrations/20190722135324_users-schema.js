/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (users) => {
    users.increments();

    users.string('first_name').notNullable();
    users.string('last_name').notNullable();
    users
      .string('email')
      .notNullable()
      .unique();
    users.string('password').notNullable();
    users.string('department_name').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
