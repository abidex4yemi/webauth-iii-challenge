const { Department } = require('../../model');
const { createError, GENERIC_ERROR } = require('../../util/error');
const { createSuccess, OK } = require('../../util/success');

/**
 * Get departments
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.getAll();

    return res.status(OK).json(
      createSuccess({
        data: departments,
      }),
    );
  } catch (error) {
    return next(
      createError({
        message: 'Could not get departments',
        status: GENERIC_ERROR,
      }),
    );
  }
};

module.exports = getDepartments;
