const mongoose = require('mongoose');
const url = require('url');
const appConfig = require('../config/app');

const { Schema } = mongoose;

const imageSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    content: { type: Buffer, required: true },
});


imageSchema.virtual('url').get(function () {
    return url.format({ protocol: 'http', host: appConfig.url, pathname: `/images/${this.id}` });
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;