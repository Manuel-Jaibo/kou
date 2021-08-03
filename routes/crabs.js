const express = require('express');
const router = express.Router();


//MODELS
const Dairy = require('../models/Dairy');


// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const dairysFromDB = await Dairy.find();
    res.send(dairysFromDB);
    // document.getElementById("valormyInput").innerHTML = dairysFromDB;
  } 
    catch (err) {
    res.json({ message: err.message });
  }
});
module.exports = router;

