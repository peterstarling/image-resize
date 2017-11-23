const auth = require('../config/auth');
const basicAuth = require('express-basic-auth');

module.exports = basicAuth({
    users: { [auth.user]: auth.password },
    unauthorizedResponse: { 
        status: 'ERROR',
        code: 401,
        message: 'Authentication information is missing or invalid'
    },
});
