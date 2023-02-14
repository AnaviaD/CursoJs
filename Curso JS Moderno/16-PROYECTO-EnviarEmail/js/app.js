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
    if (e.target.value.trim() === '') {
        console.log('Esta vacio')
        mostrarAlerta();
    }else{
        console.log('Si hay algo')
    }
    console.log('desde la funcion de validar');
    console.log(e.target.value);
}

function mostrarAlerta(){
    const errorAlarm = document.createElement('P')
    errorAlarm.textContent = 'Hubo un error...';
    errorAlarm.classList.add('bg-red-600', 'text-white', 'p-2')
    formulario.appendChild(errorAlarm)
}