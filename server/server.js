/**
 * Server events
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/snapshot', function (req, res) {
    res.sendFile('/csv/snapshot.csv', { root: __dirname });
});

app.get('/deltas', function (req, res) {
    res.sendFile('/csv/deltas.csv', { root: __dirname });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('css/styles.css', function (req, res) {
    res.sendFile(__dirname + '/css/styles.css');
});

app.get('js/app.min.js', function (req, res) {
    res.sendFile(__dirname + '/js/app.min.js');
});

server.listen(4040);

console.log('Express server started');