/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('documents', (table) => {
    table.increments();
    table
      .integer('department_id')
      .notNullable()
      .references('id')
      .inTable('departments')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.string('name').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('documents');
};
