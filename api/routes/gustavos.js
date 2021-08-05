const express = require('express');
const router = express.Router();
const path = require('path')


//MODELS
const Gustavo = require('../models/Gustavo');


// GET ITEMS
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
module.exports = router;