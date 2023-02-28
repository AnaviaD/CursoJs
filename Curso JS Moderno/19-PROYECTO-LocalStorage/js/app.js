//Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = [];

//Event listeners

evenListeners();

function evenListeners(){
    formulario.addEventListener('submit', agregarTweet);
}

//Funciones
function agregarTweet(e){
    e.preventDefault();

    console.log('Agregando tweet');
}