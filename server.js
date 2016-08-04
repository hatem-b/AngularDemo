var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(request, response, next) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.set('port', process.env.PORT || 1337);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;