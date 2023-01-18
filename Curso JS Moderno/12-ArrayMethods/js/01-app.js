const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si existe el valor
meses.forEach((mes) =>{
    if (mes === 'Enero') {
        console.log(`Enero si existe`)
    }
});

// Include solo funciona con arreglo de un solo indice
const resultado = meses.includes('Enero');
console.log(resultado)

const existe = carrito.some((prod) => {
    return prod.nombre == 'Celular'
})

console.log(existe)

const existe2 = meses.some(m =>  m === 'Febrero')
console.log(existe2)