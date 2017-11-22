const Joi = require('joi');

module.exports = Joi.object().keys({
    fileName: Joi.string().min(3).required(),
});
