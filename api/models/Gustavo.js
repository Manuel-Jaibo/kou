const mongoose = require('mongoose');

const GustavoSchema = new mongoose.Schema({
  mercado: String,
  categoria: String,
  articulo: String,
  precioporkg: Number
}, { collection : 'gustavo' }
);

module.exports = mongoose.model('Gustavo', GustavoSchema);