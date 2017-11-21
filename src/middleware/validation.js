const Joi = require('joi');

class BadRequestError extends Error {
    constructor(errors) {
        super();

        Error.captureStackTrace(this, this.constructor);
        this.name = 'BadRequestError';
        this.message = 'Bad Request Error';
        this.errors = errors;
        this.status = 400;
    }
}

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