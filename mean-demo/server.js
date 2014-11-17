var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var meetupsController = require('./server/controller/meetups-controller.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use('/js',express.static(__dirname + '/client/js'));
app.use(bodyParser.json());

app.get('/', function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
});


//REST API
app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000,function(){
	console.log("I m listening\n");
});