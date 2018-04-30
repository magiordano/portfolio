var express= require('express');

var app =  express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('assets'))
app.use(express.static('views'));

app.get('/', function(req,res){
	res.sendFile(_dirname + "/" + "index.html");
});



var server = app.listen(80, function(){
	var host= server.address().address
	var port = server.address().port

	console.log("example app listening at http://%s:%s", host, port)
})
