var express = require('express');
var frutas = express.Router();

frutas.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

frutas.get('/', function(req, res) {
	res.send('Escolha uma fruta: Banana, Maça, Bergamota, Laranja, Abacaxi, Acerola');
});

frutas.get('/banana', function(req, res) {
	res.send({"Fruta": "Banana", "Valor": "R$3,50", "Estoque": "58 unidades.", "Origem": "Guatemala"});
});

frutas.get('/maça', function(req, res){
	res.send({"Fruta": "Maça", "Valor": "R$2,00", "Estoque": "90 unidades", "Origem": "Alemanha"})
});

frutas.get('/bergamota', function(req, res){
	res.send({"Fruta": "Bergamota", "Valor": "R$7,85", "Estoque": "10 unidades", "Origem": "Itália"})
});

frutas.get('/laranja', function(req, res){
	res.send({"Fruta": "Laranja", "Valor": "R$4,00", "Estoque": "0 unidades", "Origem": "Marrocos"})
});

frutas.get('/abacaxi', function(req, res){
	res.send({"Fruta": "Abacaxi", "Valor": "R$6,15", "Estoque": "23 unidades", "Origem": "Angola"})
});

frutas.get('/acerola', function(req, res){
	res.send({"Fruta": "Acerola", "Valor": "R$1,50", "Estoque": "315 unidades", "Origem": "Egito"})
});

module.exports = frutas;