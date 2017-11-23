const BadRequestError = require('../errors/bad-request-error');

class ImageController {
    constructor(imageModel, sharp) {
        this.imageModel = imageModel;
        this.sharp = sharp;
    }

    list(req, res, next) {
        this.imageModel.find()
            .then((images) => {
                res.json(images.map(image => image.toJSON()));
            })
            .catch((err) => {
                next(err);
            });
    }

    show(req, res, next) {
        this.imageModel.findOne({ id: req.params.id })
            .then((image) => {
                if (!image) {
                    throw new BadRequestError('Image not found');
                }

                res.json(image.toJSON());
            })
            .catch((err) => {
                next(err);
            });
    }

    resize(req, res, next) {
        this.imageModel.findOne({ id: req.params.id })
            .then((image) => {
                const { width, height } = req.params;

                if (!image) {
                    throw new BadRequestError('Image not found');
                }

                // if the request width and height match the original
                if (parseInt(width, 10) === image.width && parseInt(height, 10) === image.height) {
                    return [image.content, image];
                }
                
                return Promise.all([this.sharp(image.content)
                    .resize(parseInt(width, 10), parseInt(height, 10))
                    .toBuffer(), image]);
            })
            .then(([buff, image]) => {
                res.contentType('image/png');
                res.end(buff, 'binary');
            })
            .catch((err) => {
                next(err);
            });
    }

    saveResize(req, res, next) {
        this.imageModel.findOne({ id: req.params.id })
            .then((image) => {
                if (!image) {
                    throw new BadRequestError('Image not found');
                }

                return Promise.all([this.sharp(image.content)
                    .resize(parseInt(req.query.width, 10), parseInt(req.query.height, 10))
                    .toBuffer(), image]);
            })
            .then(([buff, image]) => {
                image.width = parseInt(req.query.width, 10);
                image.height = parseInt(req.query.height, 10);
                image.content = buff;

                return image.save();
            })
            .then((image) => {
                res.json(image.toJSON());
            })
            .catch((err) => {
                next(err);
            });
    }

    delete(req, res, next) {
        this.imageModel.findOne({ id: req.params.id })
            .then((image) => {
                if (!image) {
                    throw new BadRequestError('Image not found');
                }

                return image.remove();
            })
            .then(() => {
                res.json({ status: 'OK', message: 'Image object deleted' });
            })
            .catch((err) => {
                next(err);
            });
    }
}

module.exports = ImageController;