var express = require('express');
var app = express();
const path = require('path');
app.use(express.static(__dirname)); //__dir and not _dir

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/rocketLeague/index.html'));
});

app.get('/rl',function(req,res) {
  res.sendFile(path.join(__dirname+'/rocketLeague/index.html'));
});

app.get('/space',function(req,res) {
  res.sendFile(path.join(__dirname+'/space/index.html'));
});

var port = process.env.PORT || 8000; // you can use any port
app.listen(port);
console.log('server on' + port);