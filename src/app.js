const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb/images', {
    useMongoClient: true
});

const errorMiddleware = require('./middleware/error');
const imageRoutes = require('./routes/images');
const uploadRoutes = require('./routes/upload');

router.use('/images', imageRoutes);
router.use('/upload', uploadRoutes);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// apply header to all responses
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use('/v1/', router);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(errorMiddleware);

module.exports = app;
