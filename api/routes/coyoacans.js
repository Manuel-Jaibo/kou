const express = require('express');
const router = express.Router();
const path = require('path')


//MODELS
const Coyoacan = require('../models/Coyoacan');


// Función en ruta para obtener todos los datos de la colección/modelo Coyoacán
router.get('/', async (req, res) => {
  try {
    const coyoacanFromDB = await Coyoacan.find({});
    res.send(coyoacanFromDB)
    // res.sendFile(path.resolve(__dirname, '../../views/hola.html'))
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});



//Para obtener lo que coincida con "Mercado de Coyoacán" de la colección/modelo Coyoacán
router.get('/mercado-de-coyoacan', async (req, res) => {
  try {
    const mercadoDeCoyoacanFromDB = await Coyoacan.aggregate([
      {
          $match: {
              mercado: 'Mercado de Coyoacán',
          }
      }
      ]).project({ _id: 0 });
    res.send(mercadoDeCoyoacanFromDB)
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});



//Para obtener lo que coincida con "Mercado El reloj" de la colección/modelo Coyoacán
router.get('/mercado-el-reloj', async (req, res) => {
  try {
    const mercadoElRelojFromDB = await Coyoacan.aggregate([
      {
          $match: {
              mercado: 'Mercado El reloj',
          }
      }
      ]).project({ _id: 0 });
    res.send(mercadoElRelojFromDB)
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;