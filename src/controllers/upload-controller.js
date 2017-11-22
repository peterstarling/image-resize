const fs = require('fs');
const { promisify } = require('util');
const Image = require('../models/image');

const sizeOf = promisify(require('image-size'));
const readFileAsync = promisify(fs.readFile);

class UploadController {
    upload(req, res, next) {
        const image = new Image();

        sizeOf(req.file.path)
            .then((dimensions) => {
                image.width = dimensions.width;
                image.height = dimensions.height;

                return readFileAsync(req.file.path);
            })
            .then((content) => {
                image.content = content;

                return image.save();
            })
            .then(() => {
                res.json('asd');
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = UploadController;