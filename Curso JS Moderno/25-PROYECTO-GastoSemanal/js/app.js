//Variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')
let presupuesto

//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto)
}


//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0 )
        this.restante = this.presupuesto - gastado

        console.log(this.restante)
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id)
        console.log(this.gastos)
    }
}

class UI{
    insertarPresupuesto(cantidad){
        //Obteniendo valores del objeto
        const {presupuesto, restante} = cantidad

        //Agregando valores al HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo == 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        //Quitar del HTML
        setTimeout(() =>{
            divMensaje.remove();
        }, 3000)
    }

    mostrarGasto(gastos){

        //Limpiando HTML
        this.limpiarHTML()

        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id }  = gasto

            //Crear un li
            const nuevoGasto = document.createElement('li')
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class ="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar HTML
            gastoListado.appendChild(nuevoGasto)
        });
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj
        const restanteDiv = document.querySelector('.restante')

        //Comprobar 25%
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning')            
            restanteDiv.classList.add('alert-danger')
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success')            
            restanteDiv.classList.add('alert-warning')
        }


        //Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

}
//Instancia de UI
const ui = new UI();

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cuanto te pagan??')


    if(presupuestoUsuario == '' || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario)
    
    ui.insertarPresupuesto(presupuesto)
}

//Añade gastos
function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value) 

    if(nombre == '' || cantidad == ''){
        ui.imprimirAlerta('Los campos son obligatorios', 'error')
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return;
    }

    //Generar un objeto con el gasto
    //Objecto Literal Enhancement
    const gasto = {
        nombre, 
        cantidad, 
        id: Date.now()
    }

    //añade nuevo gasto
    presupuesto.nuevoGasto(gasto)

    //Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado Correctamente')

    //Destructure para obtener gastos
    const {gastos, restante} = presupuesto;
    //Imprimir los gastos
    ui.mostrarGasto(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto)

    //Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id){
    const {gastos} = presupuesto
    presupuesto.eliminarGasto(id)
    ui.mostrarGasto(gastos)
}