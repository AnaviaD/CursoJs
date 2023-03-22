// // ==============================FindIndex==============================
// // ==============================FindIndex==============================
// // Find index nos sirve justamente para encontrar un index
// // Pero si hace match con mas de un elemento, este nos regresa solo el primer elemento
// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ]

// const resultado001 = meses.findIndex((mes) =>{
//     return mes == 'Mayo'
// })
// console.log(resultado001)

// const resultado002 = carrito.findIndex((prod) =>{
//     return prod.nombre == 'Teclado'
// })
// console.log(resultado002)

// const resultado003 = carrito.findIndex((prod) => {
//     return prod.precio == 300
// })
// console.log(resultado003)

// const resultado004 = carrito.findIndex((prod) => {
//     return prod == {nombre: 'Celular', precio: 800}
// })
// console.log(resultado004)

// const resultado005 = carrito.findIndex((prod) => {
//     return prod.precio > 200
// })
// console.log(resultado005)