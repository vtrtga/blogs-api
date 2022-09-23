require('dotenv');

const express = require('express');

const routerLogin = require('./routes/login');

// ...

const app = express();

app.use(express.json());

app.use('/login', routerLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
