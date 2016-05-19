var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

// Application
app.get('/', function(req, res) {
  res.send('hello world');
});


// Run application
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
