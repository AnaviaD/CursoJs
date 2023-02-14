document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')

    // Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)
});

function validar(e){
    if (e.target.value.trim() === '') {
        console.log('Esta vacio')
    }else{
        console.log('Si hay algo')
    }
    console.log('desde la funcion de validar');
    console.log(e.target.value);
}