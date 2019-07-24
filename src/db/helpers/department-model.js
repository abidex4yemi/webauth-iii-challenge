/**
 * departments query builder
 *
 * @param {Object} knex
 * @returns {Object} {get, insert, update, remove}
 */
const create = (knex) => {
  function getAll() {
    return knex('departments');
  }

  function getById(id) {
    return knex('departments')
      .where({ id })
      .first();
  }

  function insert(department) {
    return knex('departments')
      .insert(department)
      .then(([id]) => getById(id));
  }

  function update(id, changes) {
    return knex('departments')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? getById(id) : null));
  }

  function remove(id) {
    return knex('departments')
      .where({ id })
      .del();
  }

  // Department is the model name
  return {
    name: 'Department',
    getById,
    insert,
    update,
    remove,
    getAll,
  };
};

module.exports = create;
