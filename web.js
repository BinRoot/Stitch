var express = require("express");
var ejs = require("ejs");
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public')); // This line.

app.get('/', function(request, response) {
    response.render('index.ejs', {});
});

app.get('/about', function(request, response) {
    response.render('about.ejs', {});
});

app.get('/contact', function(request, response) {
    response.render('contact.ejs', {});
});

app.get('/donate', function(request, response) {
    response.render('donate.ejs', {});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
