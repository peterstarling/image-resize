const Joi = require('joi');
const BadRequestError = require('../errors/bad-request-error');

const validate = (schema) => {
    return (req, res, next) => {
        const { body } = req;
        delete body.access_token;

        Joi.validate(body, schema, { abortEarly: false }, (err, schemaResult) => {
            if (err) {
                const details = [];
                err.details.forEach((d) => {
                    details.push({ message: d.message, path: d.path });
                });
                return next(new BadRequestError(details));
            }

            req.schema = schemaResult;
            return next();
        });
    }
};

module.exports = {
    validate: validate,
    BadRequestError: BadRequestError
};