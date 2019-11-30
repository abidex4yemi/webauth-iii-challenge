const express = require('express');
const { getDepartments } = require('../controllers/departments');
const { verifyToken } = require('../middleware');

const router = express.Router();

router.route('/departments').get(verifyToken, getDepartments);

module.exports = router;
