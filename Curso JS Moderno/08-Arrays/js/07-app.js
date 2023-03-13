const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto01 = {
    nombre: "Celular",
    precio: 800
}

const producto02 = {
    nombre: "Teclado",
    precio: 50
}

carrito.push(producto)
carrito.push(producto01)
carrito.unshift(producto02)

console.log(carrito)