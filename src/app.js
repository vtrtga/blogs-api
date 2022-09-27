require('dotenv');

const express = require('express');

const loginRouter = require('./routes/login');

const userRouter = require('./routes/user');

const categoriesRouter = require('./routes/category');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
