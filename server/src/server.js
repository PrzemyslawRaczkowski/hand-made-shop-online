const express = require('express');
const path = require('path');
const mongo = require('mongodb');
const assert = require('assert');
const url = 'mongodb://localhost:27017/handmade_shop';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});