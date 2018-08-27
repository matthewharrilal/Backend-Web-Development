var express = require('express');
var app = express();
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/hello-world', function(req, res) {
    // Get request to the /hello-world route
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
    res.render('hello-gif', {gifUrl: gifUrl});
});

app.listen(3000, function () {
    // Listen on port 3000
  console.log('Gif Search listening on port localhost:3000!');
});
