const create = require('../../db/helpers/department-model');

module.exports = (knex) => {
  const models = create(knex);

  return {
    ...models,
  };
};
