// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

cargaEventListeners()

function cargaEventListeners(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        console.log('Agregando al carrito...')
        console.log(e.target.parentElement)
        leerDatosCurso(cursoSeleccionado)
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    console.log(curso)

    const infoCurso = {
        imagen:     curso.querySelector('img').src,
        titulo:     curso.querySelector('h4').textContent,
        precio:     curso.querySelector('.precio span').textContent,
        id:         curso.querySelector('a').getAttribute('data-id'),
        cantidad:   1
    }
    console.log(infoCurso)
}