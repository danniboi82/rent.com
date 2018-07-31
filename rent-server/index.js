require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const {
    loginRequired,
    ensureCorrectUser
} = require('./middleware/auth');
const db = require('./models');

const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

//use /api/auth route to use authRoutes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/products', loginRequired, ensureCorrectUser, productRoutes);
//use /

app.get("/api/products", async function (req, res, next) {
    try {
        let products = await db.Product.find().sort({
            createdAt: "desc"
        }).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(products);
    } catch (err) {
        return next(err);
    }
})


app.use(function (req, res, next) {
    let err = new Error("not found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

