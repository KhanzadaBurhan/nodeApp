const mongoose = require('mongoose');
const schema = mongoose.Schema;

let emailSchema = new schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      age: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      }
  })
  
  module.exports = mongoose.model('User', emailSchema)