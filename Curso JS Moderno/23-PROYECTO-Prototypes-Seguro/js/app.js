//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo
    */
   let cantidad
   const base = 2000
   console.log(this.marca)
   switch(this.marca){
    case '1':
        cantidad = base * 1.15
        break;
    case '2':
        cantidad = base * 1.05
        break;
    case '3':
        cantidad = base * 1.35
        break;
    default:
        break;
   }

   //Leer anyo
   const diferencia = new Date().getFullYear() - this.year;
   //Cada anyo que la diferencia es mayor, el costo va a reducirse un 3%
   cantidad -= ((diferencia * 3) * cantidad) / 100;
   
   /*
    Si el seguro es basico se multiplica por un 30%
    Si el seguro completo se multiplica por un 50%
   */

    if (this.tipo == 'basico') {
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    console.log(cantidad)
    return cantidad;
}

function UI(){

}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(),
    min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--)
    {
        let option = document.createElement('option');
        option.value = i; 
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla 
UI.prototype.mostrarMensajes = (mensaje, tipo) =>{
    const div = document.createElement('div');

    if (tipo == 'error') {
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en html
    const formulario = document.querySelector('#cotizar-seguro');
    // (nodo que se desea insertar, nodo de referencia)
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove()
    }, 3000)
}


//instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
    ui.llenarOpciones();
});


addEventListeners();
function addEventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if (marca == '' || tipo == '' || year == '') {        
        ui.mostrarMensajes('Todos los campos son obligatorios', 'error')
        return
    }
    ui.mostrarMensajes('Cotizando..', 'exito')

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo)

    seguro.cotizarSeguro()
    
    console.log(seguro)

}