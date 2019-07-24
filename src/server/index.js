/**
 * Application Main file
 */
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const allErrorHandler = require('./middleware/errorHandler');
const { createSuccess, OK } = require('./util/success');
const { NOT_FOUND } = require('./util/error');
const userRouter = require('./routes/userRouter');

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => res.status(OK).json(createSuccess({ message: 'Welcome to API root...', data: [] })));

app.use('/api/v1/auth', userRouter);

// Handle invalid request
app.all('*', (req, res) =>
	res.status(NOT_FOUND).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	})
);

// handle all application error
// eslint-disable-next-line max-len
app.use(allErrorHandler());

module.exports = app;
