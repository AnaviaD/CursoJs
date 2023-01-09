// Diferenciar entre map y foreach

const carrito009 = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television',          precio: 100},
    {nombre: 'Tablet',              precio: 200},
    {nombre: 'Audifonos',           precio: 300},
    {nombre: 'Teclado',             precio: 400},
    {nombre: 'Celular',             precio: 700}
]

const nuevoArreglo = carrito009.map(function(producto00){
    return `${producto00.nombre} - Precio: ${producto00.precio}`
})

const nuevoArreglo02 = carrito009.forEach(function (producto000) 
{
    return `${producto000.nombre} - Precio: ${producto000.precio}`
})

console.log(nuevoArreglo)
// Me marca indefinido
console.log(nuevoArreglo02)