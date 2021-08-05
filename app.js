const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config();

const uri = "mongodb+srv://manuel:HoleHole.40@cluster0.dcnkz.mongodb.net/alcaldias?retryWrites=true&w=majority";



//BB.DD
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
  });

const db = mongoose.connection;
  db.on('error', (error) => console.error('Error al conectarse a Atlas Foods por la razón: ' + error));
  db.once('open', () => console.log('Conectado a Atlas > '));



//Import Routes
// const coyoacansRoutes = require('./routes/coyoacans');
const coyoacansRoutes = require('./api/routes/coyoacans')
// const crabsRoutes = require('./routes/crabs')



//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/coyoacan', coyoacansRoutes);
// app.use('/proteins', proteinsRoutes);
// app.use('/crabs', crabsRoutes);
// app.use(express.static('public'));


//Rutas
// app.get('/', (req, res) => {
//   res.send('HOME!');
//   res.sendFile(path.resolve(__dirname, '../index.html'))
// });


//Empezar
app.listen(5000, () => {
  console.log('aplicacion kou corriendo en el puerto 5000')
});