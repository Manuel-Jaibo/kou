const mongoose = require('mongoose');

const ProteinSchema = new mongoose.Schema({
  alcaldia: String,
  mercado: String,
  articulo: String,
  precioporkg: Number
}, { collection : 'protein' });

module.exports = mongoose.model('Protein', ProteinSchema);