const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 70},
    {nombre: 'Celular', precio: 800},
]

let resultado;

// resultado = carrito.filter((producto) => producto.precio > 400)
// console.log(resultado)

resultado = carrito.filter((producto) =>{ return producto.precio > 200})
console.log(resultado)

resultado = carrito.filter((prod) => { return prod.precio < 500})
console.log(resultado)

resultado = carrito.filter((p) =>{
    return p.nombre != 'Teclado'
})

console.log(resultado)