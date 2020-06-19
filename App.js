const http = require('http');
const express = require('express');
const stuff = require('./public/stuff.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


const hostname = '127.0.0.1';
const port = 6453;


// https://github.com/Freshman-tech/node-website-starter-files
// First iteration is modified from above

// The program is run using node.js, and the project is in jetbrains webstorm.

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Genvira Biosciences',
        panels: stuff.panels
    });
});

app.get('/engineering', (req, res) => {
    res.render('CVEngineering', {
        title: 'Genvira Biosciences',
        panels: stuff.panels
    });
});





const server = app.listen(port, () => {
    console.log(`Express running on ${hostname}:${port}`);
});


