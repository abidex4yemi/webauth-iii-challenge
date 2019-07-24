/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('departments').insert([
    {
      department_name: 'finance',
    },
    {
      department_name: 'budgeting',
    },
    {
      department_name: 'inventory',
    },
  ]);
};
