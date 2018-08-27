var express = require('express');
var app = express();

app.get('/hello-world', function(req, res) {
    // Get request to the /hello-world route
    res.send('Hello World');
});

app.listen(3000, function () {
    // Listen on port 3000
  console.log('Gif Search listening on port localhost:3000!');
});
