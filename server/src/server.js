const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5050;

const DB_URL = 'mongodb://localhost:27017/handmade_shop';
const mongoose = require('mongoose');
mongoose.connect(DB_URL);

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/api/contact-title', (request, response) => {
    response.json({title: 'contact2'});
});

app.get('*', function (request, response) {
    response.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log('running server on port ' + port);
});