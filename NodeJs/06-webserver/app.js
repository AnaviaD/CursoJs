const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080;


hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// TODO: require('hbs');
app.set('view engine', 'hbs');


//  Servir contenido estatico
app.use(    express.static('public')    );

app.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Alberto NavBar',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) =>{
    res.sendFile( __dirname + '/public/generic.html');
})

app.get('/elements', (req, res) =>{
    res.sendFile( __dirname + '/public/elements.html');
})

app.get('*', (req, res) =>{
    res.sendFile( __dirname + '/public/404.html');
})

app.listen( port, () =>{
    console.log(`Aplicacion escuchando en http://localhost:${port}`);
})