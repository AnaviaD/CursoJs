// Campos del formulario
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

//UI
const contenedorCitas = document.querySelector('#citas')
const formulario = document.querySelector('#nueva-cita')

class Citas{
    constructor(){
        this.citas = []
    }
}

class UI{
    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(tipo == 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en HTML
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        //Quitar del HTML
        setTimeout(() =>{
            divMensaje.remove();
        }, 4000)
    }

}

const ui = new UI()
const administrarCitas = new Citas()

//Registrar eventos
eventListeners()
function eventListeners(){
    mascotaInput.addEventListener('input', datosCita)
    propietarioInput.addEventListener('input', datosCita)
    telefonoInput.addEventListener('input', datosCita)
    fechaInput.addEventListener('input', datosCita)
    horaInput.addEventListener('input', datosCita)
    sintomasInput.addEventListener('input', datosCita)

    formulario.addEventListener('submit', nuevaCita);
}

//Objeto principal de la informacion de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//Agrega datos al objeto principal de la cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj)
}


// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //Extraer la informacion del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //validar
    if (mascota == '' || propietario == '' || telefono == '' || fecha == '' || hora == '' || sintomas == '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
        console.log('Todos los campos son obligatorios')
        return;
    }

    //Creando nueva cita
}