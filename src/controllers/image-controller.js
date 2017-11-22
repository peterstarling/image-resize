const Image = require('../models/image');
const sharp = require('sharp');

exports.list = (req, res, next) => {
    Image.find()
        .then((images) => {
            res.json(images.map(image => image.toJSON()));
        })
        .catch((err) => {
            next(err);
        });
}

exports.show = (req, res, next) => {
    Image.findOne({ id: req.params.id })
        .then((image) => {
            res.json(image.toJSON());
        })
        .catch((err) => {
            next(err);
        });
}

exports.resize = (req, res, next) => {
    Image.findOne({ id: req.params.id })
        .then((image) => {

            return sharp(image.content)
                .resize(parseInt(req.params.width, 10), parseInt(req.params.height, 10))
                .toBuffer();
        })
        .then((buff) => {
            res.contentType('image/png');
            res.end(buff, 'binary');
        })
        .catch((err) => {
            next(err);
        });
}