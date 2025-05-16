const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Olá, mundo');
});

app.get('/home', (req, res) => {
    res.send('alguma coisa do home')
})

app.get('/features', (req, res) => {
    res.send('alguma coisa do features')
})

app.get('/contact', (req, res) => {
    res.send('alguma coisa do contact')
})