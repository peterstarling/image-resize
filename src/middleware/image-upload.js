const multer = require('multer');

const BadRequestError = require('../errors/bad-request-error');

const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 5000000
    },
    fileFilter: (req, file, cb) => {

        if (['image/png', 'image/jpeg', 'image/gif'].indexOf(file.mimetype) === -1) {
            return cb(new BadRequestError('Only images are allowed'));
        }

        cb(null, true);
    }
});

module.exports = upload;