/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('departments').insert([
    {
      name: 'finance',
    },
    {
      name: 'budgeting',
    },
    {
      name: 'inventory',
    },
  ]);
};
