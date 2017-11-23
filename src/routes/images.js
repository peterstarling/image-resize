const router = require('express').Router();
const basicAuth = require('../middleware/basic-auth');
const ImageController = require('../controllers/image-controller');
const validationMiddleware = require('../middleware/validation');
const resizeValidation = require('../validation/resize-validation');
const ImageModel = require('../models/image');
const sharp = require('sharp');

const imageController = new ImageController(ImageModel, sharp);

router.get('/', imageController.list.bind(imageController));

router.get('/:id/:width/:height', [validationMiddleware.validate(resizeValidation)], imageController.resize.bind(imageController));

router.get('/:id', imageController.show.bind(imageController));

router.delete('/:id', [basicAuth], imageController.delete.bind(imageController));

module.exports = router;
