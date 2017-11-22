const fs = require('fs');
const { promisify } = require('util');
const Image = require('../models/image');

const sizeOf = promisify(require('image-size'));
const readFileAsync = promisify(fs.readFile);

exports.uploadCtrl = (req, res, next) => {
    const image = new Image();

    sizeOf(req.file.path)
        .then((dimensions) => {
            image.name = req.body.fileName;
            image.width = dimensions.width;
            image.height = dimensions.height;

            return readFileAsync(req.file.path);
        })
        .then((content) => {
            image.content = content;

            return image.save();
        })
        .then(image => {
            res.json(image.toJSON());
        })
        .catch((err) => {
            next(err);
        });
}
