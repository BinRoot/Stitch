var express = require("express");
var ejs = require("ejs");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/a', function(request, response) {
    response.render('index.ejs', {});
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
