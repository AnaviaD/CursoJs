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

// const resultado = meses.findIndex((mes) =>{
//     return mes == 'Abril'
// })
// console.log(resultado)


// const resultado001 = carrito.findIndex((merca) => {
//     return merca.nombre == 'Celular'
// })
// console.log(resultado001)


// const resultado002 = carrito.findIndex((merca) =>{
//     return merca.precio == 70
// })
// console.log(resultado002)

// // // meses.forEach((mes, indx) =>{
// // //     if(mes == 'Abril')
// // //     {console.log('encontramos Abril')}
// // // })

// // //Encontrar el indice de abril
// // // const indice = meses.findIndex((mes) =>{
// // //     return mes == 'Abril'
// // // })
// // // console.log(indice)

// // // //Encontrar el indice de un arreglo de objetos...
// // // const indice2 = carrito.findIndex((producto) =>{
// // //     return producto.precio == 400
// // // })

// // // console.log(indice2)

// // console.log(meses.findIndex((mes) =>{ return mes == 'Marzo'}))

// // console.log(carrito.findIndex((prod) =>{
// //     return prod.nombre == 'Celular'
// // }))