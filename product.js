var express = require('express');
var product = express.Router();

product.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
product.get('/', function(req, res) {
  res.send('Escolha o tipo de alimento: Frutas, Carnes, Saladas, Alimentos sem gluten');
});

module.exports = product;

var frutas = require("./frutas")
product.use('/frutas', frutas);

/*var Carnes = require("./carnes")
product.use('/canes', carnes);

var saladas = require("./saladas")
product.use('/saladas', saladas);

var ASG = require("./alimentos")
product.use('/alimentos', ASG);*/