/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('departments', (table) => {
    table.increments();
    table.string('name');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('departments');
};
