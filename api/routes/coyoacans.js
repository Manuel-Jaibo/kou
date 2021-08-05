const express = require('express');
const router = express.Router();

//MODELS
const Coyoacan = require('../models/Coyoacan');
// const Protein = require('../models/Protein');


// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const coyoacanFromDB = await Coyoacan.find({});
    res.send(coyoacanFromDB)
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router;