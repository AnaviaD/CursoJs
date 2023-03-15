// // ============================Includes & Some============================
// // ============================Includes & Some============================
// //Includes y some son basicamente lo mismo pero includes es para arrays
// //Some nos sirve para arrays y para objetos

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

// const carrito = [
//     {nombre: 'Monitor 27 pulgadas', precio: 500},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Tablet', precio: 200},
//     {nombre: 'Audifonos', precio: 300},
//     {nombre: 'Teclado', precio: 70},
//     {nombre: 'Celular', precio: 800},
// ]

// const mesComp = 'Mayo'
// const prodComp = 'Tablet'

// const resultado = meses.includes('Enero')
// console.log(resultado)

// const resultado02 = carrito.some((merca) =>{
//     return merca.nombre == 'Tablet'
// })

// console.log(resultado02)

// const resultado03 = meses.some((mes) =>{
//     return mes == 'Enero'
// })
// console.log(resultado03)


// //Comprobar si un valor existe en un arreglo
// // meses.forEach((mes) =>{
// //     if (mes == 'Enero') {
// //         console.log('Enero existe')
// //     }
// // });

// //Includes solo funciona con arrays con un solo indice
// // if (meses.includes('Febrero')) {
// //    console.log('Febrero existe') 
// // }

// // const resultado = meses.includes('Enero');
// // console.log(resultado)

// // if(meses.includes(mesComp)){
// //     console.log('Si existe ese mes')
// // }

// // const existe = carrito.some((prod) =>{
// //     if (prod.precio == 300) {
// //         console.log(prod.nombre)
// //     }
// // })

// // console.log(existe)