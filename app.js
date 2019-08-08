var express = require('express');
var app = express();
var path = require('path');

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
app.use('/', express.static('dist'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(3001, function () {
    console.log('Vue app listening on port 3001!');
});
