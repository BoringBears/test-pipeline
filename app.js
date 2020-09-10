var express = require('express');
var app = express();
 
app.get('/', function(req, res){
  res.send('Hello World');
});
app.get('/health', function(req, res){
  res.send('Healthy');
});
app.listen(8081,'0.0.0.0');
