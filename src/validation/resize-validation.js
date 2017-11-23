const Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.number().integer().required(),
    width: Joi.number().integer().max(4096).required(),
    height: Joi.number().integer().max(4096).required(),
});
