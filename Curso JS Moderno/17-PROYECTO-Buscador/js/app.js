
// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}

// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos) // Muestra los automoviles

    llenarSelect() //Llena los años del select
});


marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtraAuto()
});

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    filtraAuto()
});

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value;
    filtraAuto()
});

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    filtraAuto()
});

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value;
    filtraAuto()
});

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    filtraAuto()
});

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtraAuto()
});

function mostrarAutos(autos){
    limpiarHTML()

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `;

        resultado.appendChild(autoHTML);
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i > min; i--)
    {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

// Funcion que filtra en base a la busqueda
function filtraAuto(){
    const resultado = autos.filter(filtraMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)

    console.log(resultado)
    
    if (resultado.length) {
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

function noResultado(){

    limpiarHTML()

    const noResultadoDoc = document.createElement('div')
    noResultadoDoc.classList.add('alerta', 'error')
    noResultadoDoc.textContent = 'No hay resultados'
    resultado.appendChild(noResultadoDoc)
}

function filtraMarca(auto){
    const {marca} = datosBusqueda
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if (year) {
        return auto.year == parseInt(year);
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda
    if (minimo) {
        return auto.precio > parseInt(minimo);
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda
    if (maximo) {
        return auto.precio < parseInt(maximo);
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    if (puertas) {
        return auto.puertas == parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda
    if (transmision) {
        return auto.transmision == transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda
    if (color) {
        return auto.color == color;
    }
    return auto;
}

