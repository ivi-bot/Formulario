var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Producto = require('../models').producto;
const Comprador = require('./firebase');

/*
router.get("/reporte", async (req, res) => {
  const snapshot = await Comprador.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});
/*
var admin = require("firebase-admin");
// Get a database reference to our posts
const db = admin.getDatabase();
const ref = db.ref('/collection.json');

// Attach an asynchronous callback to read the data at our posts reference
router.get('/reporte', function(req, res, next) {  

ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); 
});

*/


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productos', function (req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(productos => {
      res.render('productos', { title: 'My Dashboard :: Productos', arrProductos: productos });
    })
    .catch(error => res.status(400).send(error))
});

router.get('/reporte', function (req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(productos => {
      res.render('reporte', { title: 'My Dashboard :: Productos', arrProductos: productos });
    })
    .catch(error => res.status(400).send(error))
});


module.exports = router;
