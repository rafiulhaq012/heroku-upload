"use strict";
const path = require('path')
var compression = require('compression')
const http = require('http');
const express = require('express');
const port = process.env.PORT || 8080

const app = express();

app.use(compression())
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


const server = http.createServer(app);

server.listen(port, () => {
    console.log('HTTP Server running on port ' + port);
});