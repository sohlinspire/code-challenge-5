var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// form used for data in Rentals collection
var messageSchema = new Schema({
  name: {
    type: String
  },
  message: {
    type: String
  },
});

//export for rent.js
module.exports = mongoose.model('Message', messageSchema);
