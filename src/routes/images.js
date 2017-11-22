const router = require('express').Router();
const basicAuth = require('../middleware/basic-auth');
const imageController = require('../controllers/image-controller');

router.get('/', imageController.list);

router.get('/:id/:width/:height', imageController.resize);

router.get('/:id', imageController.show);

router.delete('/:id', [basicAuth], function (req, res, next) {
    res.send('delete image');
});

module.exports = router;
