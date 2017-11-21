const router = require('express').Router();
const basicAuth = require('../middleware/basic-auth');
const imageValidation = require('../validation/image-validation');
const validationMiddleware = require('../middleware/validation');

router.post('/', [basicAuth, validationMiddleware.validate(imageValidation)], function (req, res, next) {
    res.json({});
});

module.exports = router;
