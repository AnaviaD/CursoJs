// // =============================Reduce=============================
// // =============================Reduce=============================
// //Solo nos sirve para hacer sumas masivas
// //No sirve para arrays simples, tienen que tener propiedades
// //Puede sumar incluso caracteres
// // let total = 0
// // let resultado = meses.reduce((total, mes) =>
// //     return total + mes, 0
// // )
// // console.log(resultado)
// // Ejemplo de syntax
// // Cuidado con las llaves 
// // Cuando se van a sumar cadenas de caracter, se puede iniciar con '' en lugar de un 0

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

// const resultado001 = meses.reduce((total, mes) =>
//     total + mes, 0
// )
// console.log(resultado001)

// const resultado002 = carrito.reduce((total, prod) =>
//     total + prod.precio, 0
// )
// console.log(resultado002)

// const resultado003 = carrito.reduce((total, merca) =>
//     total + merca.nombre, ''
// )
// console.log(resultado003)