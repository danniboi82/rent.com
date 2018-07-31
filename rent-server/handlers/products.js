const db = require('../models');

exports.createProduct = async function (req, res, next) {
    try {
        let product = await db.Product.create({
            user: req.params.id,
            productName: req.body.productName,
            brand: req.body.brand,
            category: req.body.category,
            productImageUrl: req.body.productImageUrl

        });
        let foundUser = await db.User.findById(req.params.id)
        foundUser.products.push(product.id);
        await foundUser.save();
        let foundProduct = await db.Product.findById(product._id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundProduct);
    } catch (err) {
        return next(err);
    }
}

//GET - api/user/:id/product/:product_id
exports.getAllProducts = async function (req, res, next) {
    try {
        let message = await db.Message.find(req.params.message_id);
        return res.status(200).json(message);
    } catch (err) {
        return next(err);
    }
}

//GET - api/user/:id/product/:product_id
exports.findOneProduct = async function (req, res, next) {
    try {
        let product = await db.Product.find(req.params.message_id);
        return res.status(200).json(product);
    } catch (err) {
        return next(err);
    }
}

//UpdateProduct
exports.updateProduct = async function (req, res, next) {
    try {
        let product = await db.Product.update(req.params.id);

    } catch (error) {
        
    }
}


//DELETE - api/user/:id/products/:product_id
exports.deleteProduct = async function (req, res, next) {
    try {
        let foundProduct = await db.Product.findById(req.params.message_id);
        await foundProduct.remove();
        return res.status(200).json(foundProduct);

    } catch (err) {
        return next(err);

    }

}