var ProductSchema = require('../schemas/productSchema');
var ProductModel = mongoose.model('Product', ProductSchema);

module.exports = function (app) {

    app.get('/shop', (request, response, next) => {
        ProductModel.find()
            .then(function (doc) {
                response.json({productData: doc});
            });
    });


};