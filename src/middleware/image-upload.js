const multer = require('multer');
const path = require('path');

const BadRequestError = require('../errors/bad-request-error');

const upload = multer({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        if (['.png', '.jpg', '.jpeg', '.gif'].indexOf(path.extname(file.originalname)) === -1) {
            return cb(new BadRequestError('Only images are allowed'));
        }

        cb(null, true);
    }
});

module.exports = upload;