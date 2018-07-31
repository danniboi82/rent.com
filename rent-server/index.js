require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

//use /api/auth route to use authRoutes
app.use('/api/auth', authRoutes);

//use /

app.use(function (req, res, next) {
    let err = new Error("not found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

