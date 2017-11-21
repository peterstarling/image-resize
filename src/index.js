require('dotenv').config();
const app = require('./app');

const serverPort = 8080;
app.listen(serverPort, () => console.log(`Example app listening on port ${serverPort}`));
