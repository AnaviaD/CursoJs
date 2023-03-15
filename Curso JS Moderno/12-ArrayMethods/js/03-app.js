// // =============================Reduce=============================
// // =============================Reduce=============================
// //Solo nos sirve para hacer sumas masivas
// //No sirve para arrays simples, tienen que tener propiedades
// //Puede sumar incluso caracteres

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ]

// let total = 0
// let resultado = meses.reduce((total, mes) =>{
//     return total + mes, 0
// })
// console.log(resultado)

// // let resultado001 = carrito.reduce((total, merca) =>
// //     total + merca.precio, 0)
// // console.log(resultado001)

// // let resultado002 = carrito.reduce((total, merca)=>
// //     total + merca.precio, 0
// // )
// // console.log(resultado002)

// let resultado003 = carrito.reduce((total, merca) =>
//     total + merca.nombre, 0
// )
// console.log(resultado003)

// // //Con un foreach 
// // let total = 0 ;
// // // carrito.forEach((producto) =>{
// // //     total += producto.precio
// // // })
// // // console.log(total)

// // //Con un reduce
// // let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0)
// // console.log(resultado)