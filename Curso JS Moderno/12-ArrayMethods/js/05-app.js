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

// // con un foreach
// let resultado = '';
// carrito.forEach((merca) => {
//     if (merca.nombre == 'Television') {
//         resultado = merca
//     }
// })
// console.log(resultado)

// const restmes = meses.find((mes) =>{
//     return mes = 'Mayo'
// })
// console.log(restmes)

// const resultado001 = carrito.find((merca) =>{
//     return merca.nombre == 'Television'
// })
// console.log(resultado001)

// const resultado002 = carrito.find((merca) =>{
//     return merca.nombre.includes('a')
// })
// console.log(resultado002)

// const resultado003 = carrito.find((merca) =>{
//     return merca.precio < 20
// })
// console.log(resultado003)