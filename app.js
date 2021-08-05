const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
require ( 'dotenv' ) . config ( )


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


  //Pruebaas
  app.set('port', process.env.PORT || 3000);



//Import Routes
const coyoacansRoutes = require('./api/routes/coyoacans')
const gustavosRoutes = require('./api/routes/gustavos')
const milpasRoutes = require('./api/routes/milpas')



//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/coyoacan', coyoacansRoutes);
app.use('/gustavo', gustavosRoutes);
app.use('/milpa-alta', milpasRoutes);
app.use(express.static('views'));


// Rutas
// app.get('/', (req, res) => {
//   res.send('HOME!');
//   res.sendFile(path.resolve(__dirname, '../index.html'))
// });


//Empezar
// app.listen(3000, () => {
//   console.log('aplicacion kou corriendo en el puerto 3000')
// });

app.listen(app.get('port'), () => {
  console.log(`servidor en puerto ${app.get('port')}`);
});