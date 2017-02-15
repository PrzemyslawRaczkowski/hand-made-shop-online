const express = require('express');
const path = require('path');
const mongo = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017/handmade_shop';

const router = express.Router();
const app = express();
const port = process.env.PORT || 5050;
const products = require('./domain/products');

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

router.get('/shop', function (req, res, next) {
    var loadedProducts = [];

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('products').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            loadedProducts.push(doc);
        }, function () {
            db.close();
            res.render(loadedProducts);
        });
    });
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});