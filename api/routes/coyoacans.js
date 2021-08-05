const express = require('express');
const router = express.Router();
const path = require('path')


//MODELS
const Coyoacan = require('../models/Coyoacan');


// GET ITEMS
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
module.exports = router;