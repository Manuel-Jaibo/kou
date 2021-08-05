const mongoose = require('mongoose');

const MilpaSchema = new mongoose.Schema({
  mercado: String,
  categoria: String,
  articulo: String,
  precioporkg: Number
}, { collection : 'milpaalta' }
);

module.exports = mongoose.model('Milpa', MilpaSchema);