// // ==============================filter==============================
// // ==============================filter==============================
// //Filter nos sirve para arrays y para arrays con objetos
// //es util con el arraymethod de includes
// // Para evitar doble comprovacion podemos utilizar to

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ]

// const resultado001 = meses.filter((mes) => {
//     return mes.toLowerCase().toString().includes('a')
// })

// console.log(resultado001)

// const resultado002 = meses.filter((mes) =>{
//     return mes.length > 5
// })
// console.log(resultado002)

// const resultado003 = carrito.filter((merca) =>{
//     return merca.precio > 300
// })
// console.log(resultado003)

// const resultado004 = carrito.filter((merca) =>{
//     return merca.nombre.length > 7
// })
// console.log(resultado004)