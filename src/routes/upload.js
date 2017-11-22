const router = require('express').Router();
const upload = require('../middleware/image-upload');
const basicAuth = require('../middleware/basic-auth');
const validationMiddleware = require('../middleware/validation');
const imageValidation = require('../validation/image-validation');
const { uploadCtrl } = require('../controllers/upload-controller');

router.post(
    '/',
    [basicAuth, upload.single('fileData'), validationMiddleware.validate(imageValidation)],
    uploadCtrl
);

module.exports = router;
