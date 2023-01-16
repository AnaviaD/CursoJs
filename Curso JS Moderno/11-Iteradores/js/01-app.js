// for (let i = 0; i <= 20; i++) {
//     console.log(`Numero: ${i}`)
// }


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0 ) {
        console.log(`El numero ${i} es PAR`)
    }else{
        console.log(`El numero ${i} es IMPAR`)
    }
}

const carrito009 = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television',          precio: 100},
    {nombre: 'Tablet',              precio: 200},
    {nombre: 'Audifonos',           precio: 300},
    {nombre: 'Teclado',             precio: 400},
    {nombre: 'Celular',             precio: 700}
]

console.log(carrito009.length)

for (let i = 0; i < carrito009.length; i++) {
    console.log(carrito009[i].nombre);
}