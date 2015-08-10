var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = process.env.MONGO_URI || 'mongodb://localhost/creatures';
mongoose.connect(uri);

var db = mongoose.connection;

var creatureSchema = new Schema({
  name: String
});

module.exports.Creature = mongoose.model('Creature', creatureSchema);
