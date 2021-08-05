const express = require('express');
const router = express.Router();
const path = require('path')


//MODELS
const Milpa = require('../models/Milpa');


// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const milpaFromDB = await Milpa.find();
    res.send(milpaFromDB)
    // res.sendFile(path.resolve(__dirname, '../../views/hola.html'))
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});



router.get('/san-pedro-atocpan', async (req, res) => {
  try {
    const sanPedroAtocpanFromDB = await Milpa.aggregate([
      {
          $match: {
              mercado: 'San Pedro Atocpan',
          }
      }
      ]).project({ _id: 0 });
    res.send(sanPedroAtocpanFromDB)
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;