const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  telephone: {
    type: String,
    required: true,
    unique: true,
  },
});

schema.set('timestamps', true);

// Definindo um model no módulo global do mongoose.
const Contact = mongoose.model('Contacts', schema);

module.exports = Contact;
