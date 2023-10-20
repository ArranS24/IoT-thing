var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.get('/', (req, res) => {
  res.send(answer);
});

app.listen(5000);
console.log('Server is listening on port 5000');
