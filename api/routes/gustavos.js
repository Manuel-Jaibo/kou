const express = require('express');
const router = express.Router();
const path = require('path')


//MODELS
const Gustavo = require('../models/Gustavo');


// Función en ruta para obtener todos los datos de la colección/modelo Gustavo
router.get('/', async (req, res) => {
  try {
    const gustavoFromDB = await Gustavo.find({});
    res.send(gustavoFromDB)
    // res.sendFile(path.resolve(__dirname, '../../views/hola.html'))
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});


//Para obtener lo que coincida con "Gertrudis Sánchez" de la colección/modelo Gustavo
router.get('/gertrudis-sanchez', async (req, res) => {
  try {
    const gertrudissanchezFromDB = await Gustavo.aggregate([
      {
          $match: {
              mercado: 'Gertrudis Sánchez',
          }
      }
      ]).project({ _id: 0 });
    res.send(gertrudissanchezFromDB)
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});



module.exports = router;