class BadRequestError extends Error {
    constructor(errors) {
        super();

        Error.captureStackTrace(this, this.constructor);
        this.name = 'BadRequestError';
        this.message = 'Bad Request Error';
        this.errors = errors;
        this.status = 400;
    }
};

module.exports = BadRequestError;