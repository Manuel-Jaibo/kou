const mongoose = require('mongoose')


//Se importan los modelos/collections y se guardan en una constante
const coyoacancolection = require('../api/models/Coyoacan')
const gustavocolection = require('./api/models/Gustavo')
const milpaaltacolection = require('./api/models/Milpa')



//Conexión a base de datos
const uri = "mongodb+srv://manuel:HoleHole.40@cluster0.dcnkz.mongodb.net/alcaldias?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
    });
  
  const db = mongoose.connection;
    db.on('error', (error) => console.error('Error al conectarse a Atlas Foods por la razón: ' + error));
    db.once('open', () => console.log('Conectado a Atlas > '));


//Función para ingresar dato en modelo/colección especificado
milpaaltacolection.create({
    mercado: "San Pedro Atocpan",
    categoria: "Verduras",
    articulo: "Lechuga italiana",
    precioporkg: 22
})
console.log("el registro ha sido creado con éxito");




// {
//   "mercado": "Gertrudis Sánchez",
//   "categoria": "Verduras",
//   "articulo": "Lechuga italiana",
//   "precioporkg": 22
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Espinaca",
//   "precioporkg": 40
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Tomate",
//   "precioporkg": 30
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Brócoli",
//   "precioporkg": 22
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Cebolla",
//   "precioporkg": 19
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Pimiento amarillo",
//   "precioporkg": 49
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Zanahoria",
//   "precioporkg": 24
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Papa blanca",
//   "precioporkg": 20
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Verduras",
//   "articulo": "Hongo",
//   "precioporkg": 50
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Proteínas",
//   "articulo": "Bisteck",
//   "precioporkg": 150
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Proteínas",
//   "articulo": "Pechuga de pollo",
//   "precioporkg": 60
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Proteínas",
//   "articulo": "Huevo",
//   "precioporkg": 37
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Proteínas",
//   "articulo": "Salchicha",
//   "precioporkg": 35
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Proteínas",
//   "articulo": "Mortadela",
//   "precioporkg": 25
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Aguacate",
//   "precioporkg": 45
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Plátano",
//   "precioporkg": 20
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Uva verde",
//   "precioporkg": 50
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Naranja",
//   "precioporkg": 15
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Pera",
//   "precioporkg": 30
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Manzana golden",
//   "precioporkg": 42
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Sandía",
//   "precioporkg": 20
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Melón chino",
//   "precioporkg": 28
// },
// {
//   "mercado": "San Pedro Atocpan",
//   "categoria": "Frutas",
//   "articulo": "Mamey",
//   "precioporkg": 25
// }

