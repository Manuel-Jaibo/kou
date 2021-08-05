const mongoose = require('mongoose')

const coyoacancolection = require('./models/Coyoacan')
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


coyoacancolection.create({
    mercado: "Mercado de Coyoacán",
    categoria: "Proteínas",
    articulo: "caca",
    precioporkg: 40
})
console.log("el registro ha sido creado con éxito");

