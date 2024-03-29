//Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = [];

//Event listeners

evenListeners();

function evenListeners(){
    // Cuando el usuario agrega un tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        console.log(tweets);

        crearHTML();
    })
}

//Funciones
function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio, animal');
        return; // Se evita que se ejecuten mas lineas de la funcion
    }

    const tweetObj = {
        id:     Date.now(),
        texto: tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez agregado creamos HTML 
    crearHTML();

    //Reiniciar el formulñario
    formulario.reset();
}


function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despues de 3 seg
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los tweets
function crearHTML(){

    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //Crear un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcionalidad
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            // Crear el HTML 
            const li = document.createElement('li');
            //añadir el texto 
            li.innerText = tweet.texto;
            li.appendChild(btnEliminar)

            //insertarlo en el html
            listaTweets.appendChild(li);


        });
    }

    sincronizarStorages();
}


//Agrega los tweets actuales a local storage 
function sincronizarStorages() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Eliminar tweet 
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id != id);

    crearHTML();
}


//Limpiar el HTML
function limpiarHTML(){
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

