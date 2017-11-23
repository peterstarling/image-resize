const fs = require('fs');
const { promisify } = require('util');
const router = require('express').Router();
const upload = require('../middleware/image-upload');
const basicAuth = require('../middleware/basic-auth');
const validationMiddleware = require('../middleware/validation');
const imageValidation = require('../validation/image-validation');
const UploadController = require('../controllers/upload-controller');
const Image = require('../models/image');
const sizeOf = promisify(require('image-size'));
const readFileAsync = promisify(fs.readFile);

const uploadCtrl = new UploadController(Image, sizeOf, readFileAsync);

router.post(
    '/',
    [basicAuth, upload.single('fileData'), validationMiddleware.validate(imageValidation)],
    uploadCtrl.upload.bind(uploadCtrl)
);

module.exports = router;
