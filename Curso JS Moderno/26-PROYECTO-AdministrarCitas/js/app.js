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

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if (mascota == '' || propietario == '' || telefono == '' || fecha == '' || hora == '' || sintomas == '') {
        console.log('Todos los campos son obligatorios')
        return;
    }
}