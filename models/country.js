var mongoose = require('mongoose');



var countrySchema = new mongoose.Schema({
  name      : String,
  continent : String
});

module.exports = mongoose.model('Country', countrySchema);

