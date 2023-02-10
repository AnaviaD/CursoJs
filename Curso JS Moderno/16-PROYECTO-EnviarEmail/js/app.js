document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')

    // Asignar eventos
    inputEmail.addEventListener('blur', function(e){
        console.log('Salir del input');
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    })
})