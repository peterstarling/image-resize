
class UploadCtrl {

    constructor(ImageModel, sizeOf, readFile) {
        this.ImageModel = ImageModel;
        this.sizeOf = sizeOf;
        this.readFile = readFile
    }

    upload(req, res, next) {
        const image = new this.ImageModel;

        this.sizeOf(req.file.path)
            .then((dimensions) => {
                image.name = req.body.fileName;
                image.width = dimensions.width;
                image.height = dimensions.height;

                return this.readFile(req.file.path);
            })
            .then((content) => {
                image.content = content;

                return image.save();
            })
            .then(image => {
                res.status(201);
                res.json(image.toJSON());
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    }
}

module.exports = UploadCtrl;