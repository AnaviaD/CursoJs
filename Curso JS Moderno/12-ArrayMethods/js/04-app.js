// // ==============================filter==============================
// // ==============================filter==============================
// //Filter nos sirve para arrays y para arrays con objetos
// //es util con el arraymethod de includes

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ]

// let resultado;

// resultado = meses.filter((mes) =>{
//     return mes == 'Marzo'
// })
// console.log(resultado)

// resultado = carrito.filter((merca) => {
//     return merca.nombre.includes('o')
// })
// console.log(resultado)

// resultado = carrito.filter((merca) => {
//     return merca.precio > 100
// })
// console.log(resultado)

// resultado = carrito.filter((merca) =>{
//     return (merca.nombre.includes('a')) && (!merca.nombre.includes('t')) && (!merca.nombre.includes('T'))
// })
// console.log(resultado)

// // // // resultado = carrito.filter((producto) => producto.precio > 400)
// // // // console.log(resultado)

// // // resultado = carrito.filter((producto) =>{ return producto.precio > 200})
// // // console.log(resultado)

// // // resultado = carrito.filter((prod) => { return prod.precio < 500})
// // // console.log(resultado)

// // // resultado = carrito.filter((p) =>{
// // //     return p.nombre != 'Teclado'
// // // })

// // // console.log(resultado)

// // resultado = carrito.filter((producto) =>{ return producto.precio > 400})

// // resultado = carrito.filter((producto) =>{ return (producto.nombre != 'Tablet') && (producto.nombre != 'Celular')})

// // console.log(resultado)