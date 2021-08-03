const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')



//MODELS
const Dairy = require('../../models/Dairy');


async function muestralacteo() {
    const roc = await Dairy.find({});
    document.getElementById("valormyInput").innerHTML = "Tu presupuesto es de: $" + roc;
    console.log(error, Dairy);
}
