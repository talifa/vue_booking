// var express = require('express');
// var app = express();
// var path = require('path');

// // app.get('/', function (req, res) {
// //     res.sendFile(path.join(__dirname + '/dist/index.html'));
// // });
// app.use('/', express.static('dist'));
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
// app.listen(3001, function () {
//     console.log('Vue app listening on port 3001!');
// });
var express = require('express'),
    app = express(),
    path = require('path'),
    session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

// Authentication and Authorization Middleware
var auth = function (req, res, next) {
    if (req.session && req.session.user === "amy" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};

// Login endpoint
app.get('/login', function (req, res) {
    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
        req.session.user = "amy";
        req.session.admin = true;
        res.send("login success!");
    }
});
app.use('/', auth, express.static('dist'));
app.get('*', auth, function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

// Get content endpoint
// app.get('/content', auth, function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/'));
// });

app.listen(3000);
console.log("app running at http://localhost:3000");