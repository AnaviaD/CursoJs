const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Television', precio: 400},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 70},
    {nombre: 'Celular', precio: 800},
]

// meses.forEach((mes) =>{
//     console.log(mes)
// })

// meses.forEach((mes) =>{
//     if(mes == 'Enero')
//         console.log('Si existe juas juas')
// })

// const resultadoArrayMeth = meses.includes('Enero')
// console.log(resultadoArrayMeth)

//En un arreglo de objetos se utiliza .some
const existe = carrito.some( prod =>{
    return prod.nombre == 'Celular'
})

console.log(existe)

const existe02 = meses.some( mes => mes == 'Marzo')
console.log(existe02)