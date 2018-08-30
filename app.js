var express = require('express');
var app = express();
var exphbs = require('express-handlebars')
var giphy = require('giphy-api')();
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var http = require('http');
app.use(express.static('public'));

app.get('/hello-world', function(req, res) {
    // Get request to the /hello-world route
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
    res.render('hello-gif', {
        gifUrl: gifUrl
    }); // Renders html template img tag in the template
});

app.get('/', function(req, res) {
    var queryString = req.query.term
    console.log(queryString)

    // // Now enocode the query string as an uri component to remove whitespaces and extra characters
    // var term = encodeURIComponent(queryString)
    // // PUT THE SEARCH TERM INTO THE GIPHY API SEARCH URL
    // var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
    //
    // // Making the http request
    // http.get(url, function(response) {
    //     // Set encoding of response to utf 8
    //     var body = '';
    //     response.on('data', function(d) { // When you get the data
    //         // Continously update body with data from giphy
    //         body += d
    //     });
    //
    //     response.on('end', function() {  // When the data is fully recieved
    //         var parsed = JSON.parse(body) // Convert data into JSON
    //         res.render('home', {gifs: parsed.data})
    //     });
    // });

    var term = req.query.term || 'funny cat'
    giphy.search(term, function (err, response) {
   res.render('home', {gifs: response.data})
 });
});

app.get('/greetings/:name/', function(req, res) {
    var name = req.params.name
    res.render('greetings', {
        name: name
    })
});
app.listen(3000, function() {
    // Listen on port 3000
    console.log('Gif Search listening on port localhost:3000!');
});
