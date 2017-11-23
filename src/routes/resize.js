const router = require('express').Router();
const basicAuth = require('../middleware/basic-auth');
const validationMiddleware = require('../middleware/validation');
const resizeValidation = require('../validation/resize-validation');
const ImageController = require('../controllers/image-controller');
const ImageModel = require('../models/image');
const sharp = require('sharp');

const imageController = new ImageController(ImageModel, sharp);

router.get(
    '/:id',
    [basicAuth, validationMiddleware.validate(resizeValidation)],
    imageController.saveResize.bind(imageController)
);

module.exports = router;
