var express = require("express");
var ejs = require("ejs");
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

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

app.get('/login', function(request, response) {
    response.render('login.ejs', {});
});


app.get('/api/hospitals', function(request, response) {
    var hospitalList = [
	"Hospital 1",
	"Hospital 2",
	"Hospital 3"
    ];
    response.send(JSON.stringify(hospitalList));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
