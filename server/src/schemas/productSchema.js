var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    color: String,
    material: String,
    finish: String,
    dimensions: [{
        width: Number,
        height: Number,
        depth: Number,
        unit: String
    }],
    amount: Number
}, {collection: 'products'});

module.exports = productSchema;