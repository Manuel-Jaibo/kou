const express = require('express');
const router = express.Router();

//MODELS
const Protein = require('../models/Protein');
const Dairy = require('../models/Coyoacan');


// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const proteinsFromDB = await Protein.find({});
    const dairysFromDB = await Dairy.find({});
    const uni = proteinsFromDB + dairysFromDB;
    res.send(uni);
    console.log(uni);
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router;