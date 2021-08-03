const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')



//Importa módulo del modelo-esquema
import "Dairy.js";
const dairyProd = require('../../models/Dairy');

async function muestralacteo() {
    const roc = await dairyProd.find({});
    document.getElementById("valormyInput").innerHTML = "Tu presupuesto es de: $" + roc;
    console.log(roc);
}
muestralacteo();