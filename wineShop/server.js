var express = require('express');
var wine = require('./routes/wines.js');
var logger = require('morgan');
var bodyParser = require('body-parser');
 
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());


//REST API
app.get('/wines', wine.findAll)
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(4000);
console.log('Listening on port 4000...');