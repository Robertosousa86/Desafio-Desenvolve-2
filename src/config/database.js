const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URL || 'localhost/test';

try {
  const connect = () =>
    mongoose
      .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return console.info('Conectado ao banco de dados com sucesso! 🔌');
      });

  module.exports = {
    connect,
    connection: mongoose.connection,
  };
} catch (error) {
  console.error('Error!: ', error);
}
