const express = require('express');
const router = express.Router();

//MODELS
const Protein = require('../models/Protein');


// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const proteinsFromDB = await Protein.find();
    res.json(proteinsFromDB);
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router;