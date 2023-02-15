document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')

    // Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)
});

function validar(e){
    console.log(e.target.parentElement)
    if (e.target.value.trim() === '') {
        mostrarAlerta(`Campo ${e.target.id} Esta vacio`, e.target.parentElement)
    }else{
        console.log('Si hay algo')
    }
    console.log('desde la funcion de validar');
    console.log(e.target.value);
}

function mostrarAlerta(mensaje, referencia){
    const errorAlarm = document.createElement('P')
    errorAlarm.textContent = mensaje;
    errorAlarm.classList.add('bg-red-600', 'text-white', 'p-2')
    referencia.appendChild(errorAlarm)
}