const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('Olá, mundo');
});

app.get('/features', (req, res) => {
    res.send('alguma coisa do features')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/contac', (req, res) => {
    res.send('alguma coisa do contact')
})

app.listen(300, () =>(
    console.log("server is running on http:localhost")
})
