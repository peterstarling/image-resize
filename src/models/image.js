const mongoose = require('mongoose');
const url = require('url');
const appConfig = require('../config/app');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;

const imageSchema = new Schema({
    name: String,
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    content: { type: Buffer, required: true },
});

imageSchema.virtual('url').get(function () {
    return url.format({ protocol: 'http', host: appConfig.url, pathname: `/images/${this.id}` });
});

imageSchema.plugin(AutoIncrement, { inc_field: 'id' });


const Image = mongoose.model('Image', imageSchema);

module.exports = Image;