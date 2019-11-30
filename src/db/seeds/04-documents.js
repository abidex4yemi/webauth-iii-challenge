/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('documents').insert([
    {
      department_id: 1,
      name: 'finance-101',
    },
    {
      department_id: 1,
      name: 'managing-money-101',
    },
    {
      department_id: 1,
      name: 'how to shop-201',
    },
    {
      department_id: 2,
      name: 'budgeting-101',
    },
    {
      department_id: 2,
      name: 'budgeting-102',
    },
  ]);
};
