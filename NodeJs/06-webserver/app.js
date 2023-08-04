require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

const datosG = {
    nombre: 'Alberto NavBar',
    titulo: 'Curso de Node'
}


hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// TODO: require('hbs');
app.set('view engine', 'hbs');

//  Servir contenido estatico
app.use(    express.static('public')    );


app.get('/', (req, res) =>{
    res.render('home', datosG)
})

app.get('/generic', (req, res) =>{
    res.render('generic', datosG)
})

app.get('/elements', (req, res) =>{
    res.render('elements', datosG)
})

app.get('*', (req, res) =>{
    res.sendFile( __dirname + '/public/404.html');
})

app.listen( port, () =>{
    console.log(`Aplicacion escuchando en http://localhost:${port}`);
})