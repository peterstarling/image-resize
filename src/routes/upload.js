const router = require('express').Router();
const upload = require('../middleware/image-upload');
const basicAuth = require('../middleware/basic-auth');
const validationMiddleware = require('../middleware/validation');
const imageValidation = require('../validation/image-validation');
const UploadController = require('../controllers/upload-controller');

const uploadController = new UploadController();

router.post(
    '/',
    [basicAuth, upload.single('fileData'), validationMiddleware.validate(imageValidation)],
    uploadController.upload.bind(uploadController)
);

module.exports = router;
