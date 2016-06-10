//backend
var express = require('express');
var first= express();

first.locals.title = ' - 2016';

first.get('/', function (req, res) {
  res.type('text/plain');
  res.send('GET - Bem vindo! :D' + first.locals.title);
});

first.get('/name', function (req, res) {
  res.type('text/plain');
  res.send('Meu nome nao é Johny! [get]');
});

first.post('/', function (req, res) {
  res.type('text/plain');
  res.send('POST - Olá :D' + first.locals.title);
});

first.route('/home')
  .get(function(req, res) {
    res.send('GET - home');
  })
  .post(function(req, res) {
    res.send('POST - home');
  })
  .put(function(req, res) {
    res.send('PUT - home');
  })

first.route('/Contact')
  .get(function(req, res) {
    res.send('Entre em contato conosco: (51)...');
  })

first.listen(3000, function () {
  console.log('Example first listening on port 3000!');
});

var product = require("./product")
first.use('/product', product);