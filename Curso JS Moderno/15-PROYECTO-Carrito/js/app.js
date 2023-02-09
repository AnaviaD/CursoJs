// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = [];

cargaEventListeners()

function cargaEventListeners(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminaCurso)
}

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){

    const infoCurso = {
        imagen:     curso.querySelector('img').src,
        titulo:     curso.querySelector('h4').textContent,
        precio:     curso.querySelector('.precio span').textContent,
        id:         curso.querySelector('a').getAttribute('data-id'),
        cantidad:   1
    }

    // Revisa si un elemento ya exist een el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    console.log(existe)
    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if (curso => curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso //Este retorna el objeto actualizado
            }else{
                return curso //retorna los objetos que no estan repetidos
            }
        })
    }else{
        articulosCarrito = [... articulosCarrito, infoCurso]
    }

    // Agrega elementos del carrito
    console.log(articulosCarrito)
    carritoHTML()
}

// Muestra el carrito de compras en HTML
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML()
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr')
        row.innerHTML = `
        <td><img src="${imagen}"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</td>`;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    });
}


function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
}

function eliminaCurso(){   
    console.log('Se va a eliminar curso')
}