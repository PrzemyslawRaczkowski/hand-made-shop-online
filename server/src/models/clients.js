var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientsSchema = new Schema({
    name: String
});

mongoose.model('clients', clientsSchema);