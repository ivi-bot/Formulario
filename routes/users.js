var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//se crea mas ruta a partir de aqui, en este caso users
router.get('/asdf', function(req, res, next) {
  res.send('otra ruta :)');
});

router.get('/hola', function(req, res, next) {
  res.send('otra ruta chevere:)');
});

module.exports = router;
