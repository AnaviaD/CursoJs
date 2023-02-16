document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
   
    // Asignar eventos
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar)
    inputMensaje.addEventListener('input', validar)

    btnReset.addEventListener('click', function(e){
        e.preventDefault();
    });
});

const formulario = document.querySelector('#formulario')
const btnSubmit = document.querySelector('#formulario button[type="submit"]')
const btnReset = document.querySelector('#formulario button[type="reset"]')

const emailConst = {
    email: '',
    asunto: '',
    mensaje: ''
}

function validar(e){
    console.log(e.target.parentElement)
    if (e.target.value.trim() === '') {
        mostrarAlerta(`Campo ${e.target.id} Esta vacio`, e.target.parentElement)
        emailConst[e.target.name] = ''
        return;
    }
    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
        // El return es importante porque si no, va a limpiar la alarma sea como sea
        mostrarAlerta(`El email no es valido`, e.target.parentElement)
        emailConst[e.target.name] = ''
        return;
    }
    
    limpiarAlerta(e.target.parentElement)

    emailConst[e.target.name] = e.target.value.trim().toLowerCase();
    
    comprobarEmail()
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

function comprobarEmail(){
    console.log(emailConst)
    if (Object.values(email).includes('')) {
        btnSubmit.classList.add('opacity-50')
        btnSubmit.disabled = true;
    }else{
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
    }
}