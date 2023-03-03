//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event Listeners
eventListeners()

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []

        console.log(tweets)
        crearHTML()
    });
}


//Funciones
function agregarTweet(e){
    e.preventDefault();

    //TextArea donde el Usuario escribe
    const tweet = document.querySelector('#tweet').value;

    console.log(tweet)

    //Validacion...
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj]

    crearHTML();

    //Reiniciar el formulario 
    formulario.reset();
}


// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    //Insertar en el contenido 
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los tweets
function crearHTML(){
    limpiarHTML()

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.texto

            //insertarlo en el html
            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();

}

//Agrega los tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
}