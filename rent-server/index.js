const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.use(function (req, res, next) {
    let err = new Error("not found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

