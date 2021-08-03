const mongoose = require('mongoose');

const DairySchema = new mongoose.Schema({
  alcaldia: String,
  mercado: String,
  articulo: String,
  precioporkg: Number
}, { collection : 'dairy' });

// module.exports = mongoose.model('Dairy', DairySchema);

const dairyProd = mongoose.model('Dairy', DairySchema);
module.exports = dairyProd;