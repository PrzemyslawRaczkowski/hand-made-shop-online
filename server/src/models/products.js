var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    name: String
});

mongoose.model('products', productsSchema);