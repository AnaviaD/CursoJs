const express = require('express')
const app = express()

const port = 8080;

app.get('/', (req, res) =>{
    res.send('Hello World');
})

app.get('*', (req, res) =>{
    res.send('404 | page not found');
})

app.listen( port, () =>{
    console.log(`Aplicacion escuchando en http://localhost:${port}`);
})