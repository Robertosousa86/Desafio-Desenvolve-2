const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // telephone não é obrigatório porque tel fixo caiu em desuso.
  phoneNumbers: {
    telephone: {
      type: String,
    },
    mobile: {
      type: String,
      required: true,
    },
  },
  timestamps: true,
});
// Definindo um model no módulo global do mongoose.
const Contact = mongoose.model('Contacts', schema);

module.exports = Contact;
