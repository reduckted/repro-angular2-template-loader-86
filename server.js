const express = require('express');
const opn = require('opn');

let app = express();

app.use(express.static('dist'));

app.listen('8080', () => {
    opn('http://localhost:8080');
});
