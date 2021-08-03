const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();

const uri = "mongodb+srv://manuel:mgon237601q@cluster0.wfsh7.mongodb.net/foods?retryWrites=true&w=majority";



//BB.DD
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
  });

const db = mongoose.connection;
  db.on('error', (error) => console.error('Error al conectarse a Atlas Foods por la razón: ' + error));
  db.once('open', () => console.log('Conectado a Atlas > Foods'));



//Import Routes
const dairysRoutes = require('./routes/dairys');
const proteinsRoutes = require('./routes/proteins')
const crabsRoutes = require('./routes/crabs')



//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/dairys', dairysRoutes);
app.use('/proteins', proteinsRoutes);
app.use('/crabs', crabsRoutes);
app.use(express.static('public'));

//Rutas
// app.get('/', (req, res) => {
//   res.send('HOME!');
// //   res.sendFile(path.resolve(__dirname, '../index.html'))
// });


//Empezar
app.listen(2000, () => {
  console.log('aplicacion corriendo en el puerto 2000')
});