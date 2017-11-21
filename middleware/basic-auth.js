const basicAuth = require('express-basic-auth');

module.exports = basicAuth({
    users: { 'admin': 'supersecret' },
    unauthorizedResponse: 'Authentication information is missing or invalid',
});
