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
        return;
    }
    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
        // El return es importante porque si no, va a limpiar la alarma sea como sea
        mostrarAlerta(`El email no es valido`, e.target.parentElement)
        return;
    }
    
    limpiarAlerta(e.target.parentElement)
}

function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia)
    
    const errorAlarm = document.createElement('P')
    errorAlarm.textContent = mensaje;
    errorAlarm.classList.add('bg-red-600', 'text-white', 'p-2')
    referencia.appendChild(errorAlarm)
}

function limpiarAlerta(referencia)
{
    const alerta = referencia.querySelector('.bg-red-600')
    if(alerta){
        alerta.remove();
    }
}

function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email);
    console.log(resultado);
    return resultado
}