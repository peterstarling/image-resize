const router = require('express').Router();
const basicAuth = require('../middleware/basic-auth');

router.get('/', function (req, res, next) {
    res.send('all images');
});

router.get('/:id', function (req, res, next) {
    res.send('one image');
});

router.delete('/:id', [basicAuth], function (req, res, next) {
    res.send('delete image');
});

module.exports = router;
