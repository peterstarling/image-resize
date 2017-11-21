const basicAuth = require('express-basic-auth');

module.exports = basicAuth({
    users: { 'admin': 'supersecret' },
    unauthorizedResponse: { 
        status: 'ERROR',
        code: 401,
        message: 'Authentication information is missing or invalid'
    },
});
