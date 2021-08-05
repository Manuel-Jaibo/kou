const mongoose = require('mongoose');

const CoyoacanSchema = new mongoose.Schema({
  mercado: String,
  categoria: String,
  articulo: String,
  precioporkg: Number
}, { collection : 'coyoacan' }
);

module.exports = mongoose.model('Coyoacan', CoyoacanSchema);