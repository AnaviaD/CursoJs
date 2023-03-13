//Variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')
let presupuesto

//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{
}
const ui = new UI();

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuanto te pagan??')

    console.log(presupuestoUsuario);

    if(presupuestoUsuario == '' || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)
    console.log(presupuesto)
}