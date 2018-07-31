const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/rent', {
    keepAlive: true
});


module.exports.Product = require('./products');
module.exports.User = require('./user');
