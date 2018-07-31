const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
    brand : {
        type: String,
        required: true
    },
    category: {
        type: String, 
        required: true
    },
    productImageUrl: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})


//create password/hash it then save  or if password exists and not modified then go next() or if error go next(err);
productSchema.pre('remove', async function (next) {
    try {
        //find a user
        let user = await User.findById(this.user);
        user.product.remove(this.id);
        await user.save();
        return next();
    } catch (err) {
        return next(err);
    }
    //remove the id of the message from their msg list 
    // save that user and return next
})



const Product = mongoose.model('Product', productSchema);

module.exports = Product;