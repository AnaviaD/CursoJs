// // =========================== find ===========================
// // =========================== find ===========================
// // Nos sirve para encontrar exactamente lo que ya sabemos que buscamos en un arreglo
// // Cuando la condicion cubre mas de un elemento en el array, solo regresa al primero

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ];

// const resultado001 = meses.find((mes) =>{
//     return mes =='Enero'
// })
// console.log(resultado001)

// const resultado002 = meses.find((mes) =>{
//     return mes.includes('u')
// })
// console.log(resultado002)

// const resultado003 = carrito.find((merca) =>{
//     return merca.nombre == 'Tablet'
// })
// console.log(resultado003)

// const resultado004 = carrito.find((merca) =>{
//     return merca.precio == 70
// })
// console.log(resultado004)