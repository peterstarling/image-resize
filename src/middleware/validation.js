const Joi = require('joi');
const BadRequestError = require('../errors/bad-request-error');

const validate = (schema) => {
    return (req, res, next) => {
        const { body, params, query } = req;
        delete body.access_token;
        
        const input = { ...body, ...query, ...params };

        Joi.validate(input, schema, { abortEarly: false }, (err, schemaResult) => {
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